---
title: Composing Asynchronous Workflows with Celery
description: Improving the business logic of my applications and understanding of record validation with Celery workflows
tech: Celery
img: https://img.stackshare.io/service/1075/celery.png
published_to_twitter: false
author:
  name: Ryan Manzer
  bio: He puts the Manzer in Supermanzer
  image: "/images/supermanzer.jpeg"
---

### My Situation

I have been building applications using the [Django](https://www.djangoproject.com/) framework for a while. Most of the time it was just little hobby projects but
for the past 3 years or so (as of first writing this) I've been building steadily more complex business applications using this framework. I find Python
a fun language to write software in and the Django framework does a good job of porting that fun to designing web applications. I really enjoy how well
Object Oriented Programming (OOP) concepts translate to designing data systems. Since one of the reasons I started coding was to solve business administration
problems (see [About Me](/about)), this felt like a natural evolution of my interests. However, as my applications have started to do more and more I have
had to learn some new techniques to solve the problems I want to solve while providing the performance I want to give my users.

### My Problem

For the past few years, the applications I have been building have mostly been concerned with overcoming the inefficiencies of the ERP system my company uses.
I'm not going to name names but it wasn't the greatest. Thankfully, it did use a faily straightforward PostgreSQL back-end that I could connect to and execute
queries for things like inserting orders in large batches. Incidentally [PostgreSQL](https://www.postgresql.org/) is my hands down favorite RDMS and with the inclusion of a fully functional JSON Binary field type I think even NoSQL devotees can find plenty to love about it.

<img src="https://www.acunetix.com/wp-content/uploads/2019/06/slow.png" width=400>

Anyway, the ERP back-end ran pretty dang slow like (1-5 seconds for a basic SELECT with ~10K records). My most used application processed reconciliation files
from Amazon, turned them into aggregated orders (by state for tax purposes), and wrote the orders and lines into the ERP. Back when we first started the number
of transactions were pretty minimal and processing was speedy but Amazon is kind of good at helping people buy stuff so our volume took off and my application got quite sluggish. Then I kept getting requests for additional functions to be built into the file processing and order writing functions. All of this was taking so long I had to adjust my request timeout values to tens of minutes just to keep my users from getting shown the "Broken Server" screen.

### Celery to the Rescue

![Celery In Django](https://en.proft.me/media/django/django_celery_architecture.png)

I became aware of [Celery](https://docs.celeryproject.org/en/stable/) when I started researching how to Docker-ize my Django apps. Most of the tutorials I found took me through not only creating services for my Proxy Server (NGINX), Database (PostgreSQL), and Web application (Django) but also involved using Celery + [RabbitMQ](https://www.rabbitmq.com/) (seriously, who names these things?) as well as using Redis for cache and session management. I figured it was better to have a more robust system than not so I went with it.

For those of you not familiar but curious I would highly encourage you to read the documentation linked above. However just to get everyone on the same page, Celery allows you to offload some of the computational work of an application to worker processes that process these tasks asynchronously while allowing your application to respond back the user in a timely manner. Apps write tasks (with signatures detailing inputs and such) to message broker(s) (RabbitMQ in this case) and a worker process grabs the task signature and gets to work. In addition to getting triggered via a user request, you can aslo schedule tasks using `beat-scheduler` in Celery. This has been a huge help to me running both high frequency API polling and also periodic maintenance functions in my applications.

<img src="https://www.oreilly.com/library/view/learn-web-development/9781789953299/assets/857bb6b8-e872-410f-8a68-fd4e3ebb34ad.png" width=500>

In fact, by installing a module called `django-beat-scheduler` I was able to create `crontab` like schedules for any task I wanted directly in the default Django admin interface. Anyone working across multiple development environments and version control will understand how much easier it makes your life to be able to do something like that without modifying any actual code.

Now I was able to bundle up all the file processing actions into a task. When my application needed to perform these actions a task was pushed to the RabbitMQ broker and the ID of that task was returned back to my application. I even learned, through Celery's wonderful documentation, how to have my tasks update their status to indicate their progress for long running tasks (e.g. `{status: 'In Progress', processed: 17, total: 80}`). I wrote a nifty little Django view that returned task details when a valid task ID was included in the URL and wrote a simple Javascript to check task status every 20 seconds and update a progress bar and tooltip text with the info. I was feeling pretty dang cool!

<img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sunglasses_cool_emoji.png?v=1485573433" width=100>

### The Exciting Part - Workflows

Well then things got really interesting and that gets us to what I'm so excited about that I am spending a Sunday morning in my jammies writing in a markdown file. As part of a transition to new ERP, I was tasked with turning thousands of automatically generated purchase orders (along with Bill of Material records) into manufacturing schedules. These records were acccessible only via a REST API and, unfortunately, the service providing this API was not always super stable. While outages usually only lasted a second, it was enough to trainwreck the entire process (since I had written my tasks as long, involved functions). This made me reconsider my design and I found exactly what I needed in the Celery documentation on [Workflows](https://docs.celeryproject.org/en/stable/userguide/canvas.html), referred to in Celery as a Canvas API.

I had known that a good task design is small and self contained, like a good function, but I didn't know how I would keep track of what remained to be processed and how I would ensure that all the records that needed to be related to each other were. That's when I realized what I could do with `groups` and `chains`. A `group` is a set of tasks that are processed in parallel.

```python
@app.task
def create_local_purchase_orders(data):
  """Execute PO generating tasks in parallel for all records in data"""
  g = group(make_po(record) for record in data)
  result = g()  # Default async result returned
  return result
```

This would work great for my purchase orders (which were independent of each other). For creating related records from the Bill of Materials data (product + compoonent records), the `chain` object was just what I was looking for. Using this feature you can create a series of tasks to be executed sequentially and even have the results returned from one task sent as an input into the following one. In fact, I could combine the `group` and `chain` approachs when processing my Bill of Material data.

```python
@app.task(bind=True, max_retries=5)
def fetch_bom(data)
    try:
        result = get_api_bom_data(data['product'])
        return result
    except Exception as exc:
        raise self.retry(exc=exc, countdown=2) # Retry this API call after 2 second

@app.task
def make_bom(data)
    # Because the results of make_product will be returned to make_component, I use that
    # approach to pass all necessary data to the make_component function, including the
    # ID of the product record that was just created.
    task_chain = chain(fetch_bom(data), make_product.s(), make_component.s())()

@app.task
def group_boms(list_of_bom_data):
  """create product and component records for each bill of materials record"""

  g_chainz = g(make_bom.s(data) for data in list_of_bom_data)()
```

#### How This Helps

As I mentioned at the start of this section, one of the main problems I ran into was the API would sometimes be unavailable for a second and that would trainwreck the processing of hundreds of product records. Well, in addition to being able to radically simplify what was a single function definition that stretched over dozens of lines to three simple, mostly one-line functions, I was able to include a very easy to configure rety policy.

Take a look at the first task function `fetch_bom`. This is calling another function (not defined) that encapsulates getting the correct URL, performing the authentication, making the HTTP request, and returning the data. The task is written such that, in the event of a failure, it will wait 2 seconds and then retry itself (while also keeping track of the exception that was triggered). I've also included a `max_retries` argument to prevent this task from going into an endless loop of pinging the API if it ever goes down for some serious reason.

#### What About Database Validation?

Oh yeah! Well, once I got hip to all this gouping and chaining, my PostgreSQL back-end was having records INSERT'd and UPDATE'd faster than I've ever dealt with previously. What I quickly found out was that some of the validation rules I had written in Python weren't quick enough to catch records that violated those rules before they were written to the DB. At first this was frustrating and for a little while I went back to a more sequential approach. However, I did some more reading about [Django model definiation](https://docs.djangoproject.com/en/3.1/topics/db/models/) and where to specify record constraints so that they were applied at the DB layer. In the process I wound up learning more about how to utilize the [Django database API](https://docs.djangoproject.com/en/3.1/topics/db/queries/) to move more of the record processing and annotation to the DB layer as well.

All in all, this has made my Django applications more robust, more performant, and provided an opportunity to better understand some of the layers of my tech stack I tend to just take for granted.
