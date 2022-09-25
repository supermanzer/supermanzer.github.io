---
title: Using Django Queryset Annotations
description: Making reusable database queries and customizing server logic
tech: Django
img: https://avatars1.githubusercontent.com/u/27804?s=400&v=4
published_to_twitter: false
author:
  name: Ryan Manzer
  bio: He puts the Manzer in Supermanzer
  image: "/images/supermanzer.jpeg"
---

## Situation

As I've noted in other posts, I've been using the [Django Framework](https://www.djangoproject.com/) to build custom applications for a while now. Like probably most beginners who picked up the framework because of their love of the Python language, when I needed to associate some calculated value with my data model objects I reached for the `@property` decorator and used Python. It did not take long though before I ran into the limitations of such an approach. It is difficult to filter or order a queryset on a value that doesn't exist as far as the database is concerned. That's when I turned my attention to the `annotate()` function; one of the more advanced components of the [Django ORM](https://docs.djangoproject.com/en/3.1/ref/models/querysets/#annotate).

## Differences between `@property` and annotations

This may be obvious to most people who would choose to click on a post titled Using Django Queryset Annotations but there is a pretty big difference between calculating fields using a model function decorated with the `@property` decorator and a queryset annotation (if you need to brush up on what a decorator in Python is, I highly recommend [this post](https://realpython.com/primer-on-python-decorators/)). I am probably going to overlook some other important factors but, to me, the biggest difference between the two approaches in where the calculation happens.

First let me back up and do a brief and likely inaccurate summary of how a Django model object functions. The model class corresponds to a table in some version of a relational database. An object (an instance of the class), at it's most basic, represents a row from that table. When you instantiate a model you perform a query on the database and use the data returned to build an object in Python. There's a bunch of other nifty goodies that Django has built into the framework that are a big help when interacting with the databases that power web applications and I would highly recommend anyone who is interested to read more in the wonderfully well written [documentation](https://docs.djangoproject.com/en/3.1/topics/db/models/).

That being said, the most basic difference between using a Django model method decorated as a property and a queryset annotation is that the former takes place _after_ the data has been retrieved from the database and the function is called on individual instances of the model class. The queryset annotation, on the other hand, converts the calculation into whatever variant of `SQL` is appropriate and has the database server performs the calculation and returns it as part of the object data.

## Real Life Example

Let's make this a bit more concrete and work with some model definitions. Here's a situation I ran into while building an application to keep track of product manufacturing. We are going to have three models in this example: the `FinishedProductRun` defines a manufacturing run of a specific retail product, the `BulkProductRun` defines a manufacturing run of the stuff that makes up the retail products, and a BillOfMaterials which describes what Bulk goes into what Finished Product at what quantity (think Tylenol: Bulk is the actual pills, Finished Product are the different sized bottles, Bill of Materials defines the stuff that makes the pills as well as how many pills per bottle).

```python
"""
  my_app/models.py
"""
from django.db import models


class FinishedProductRun(models.Model):
  date_created = models.DateTimeField(auto_now_add=True)  # Automatically sets the value to the current date when record created
  product_id = models.CharField(max_length=60) # Unique identifier for a specific finished product
  quantity = models.IntegerField(default=0)
  lot_number = models.CharField(max_length=50)
  bulk = models.ForeignKey('BulkRun', on_delete=models.CASCADE, related_name='finished_products')
  bom = models.ForeignKey('BillOfMaterials', on_delete=models.SET_NULL)

  # Django Models can be more than data, we can add methods too!
  def __str__(self):
    return f'{self.product_id} - {self.lot_number}'

class BulkProductRun(models.Model):
  date_created = models.DateTimeField(auto_now_add=True)
  quantity = models.IntegerField(default=0)  # This is
  product_id = mmodels.CharField(max_length=60)

class BillOfMaterials(mdoels.Model):
  date_created = models.DateTimeField(auto_now_add=True)
  product_id = models.CharField(max_length=60)
  product_name = models.CharField(max_length=120)
  bottle_quantity = models.IntegerField(defualt=60)
  bulk_product_id = models.CharField(max_length=60)
```

Okay so I've got my models and I'm displaying this information to my users. The manager of the manufacturing plant tells me he needs to see how much bulk product is being consumed for each finished product run. Well I feel like I know my way around a Django model so I go ahead and add a new function that I'll decorate as a property (defining a basic `getter` method).

```python
@property
def bulk_quantity(self):
  return self.quantity * self.bom.bottle_quantity
```

In this case we query the database for the details of a specific FinishedProductRun and then use that, along with the bottle quantity we get from the related BillOfMaterials record, to calculate the quantity of a given BulkRun used. All the values are loaded into Python and the calculation is performed when the `obj.bulk_quantity` attribute is accessed. This is a fairly simple and straightforward approach and works great when I'm displaying the details of a specific record to my users. The problem shows up when you get asked "Okay now can we see that lists of records and sort on bulk quantity?". In the Django framework both the data in the records and the order in which they are returned are determined in the database server. Django model querysets are also lazy and you don't actually query the database until you actually want to access the values. So doing something like `products_by_bulk = FinishedProductRun.objects.all().order_by('-bulk_quantity)` won't work because this will generate the SQL `ORDER BY bulk_available DESC` and we'll get a `FieldDoesNotExist` exception.

## Annotations to the Rescue!

Now here's where Django annotations REALLY shine. Just as one could write a custom SQL query to return the calculation directly in the database, we can do the same with the Django API. Here I use [F expressions](https://docs.djangoproject.com/en/3.1/ref/models/expressions/#f-expressions), which are not as rude as they might sound. F expressions allow you to make references to the values of fields (or annotations) in the database. You can actually get some pretty cool efficiency optimization out of it as well! Let's take a look:

```python
"""
  my_app/model_annotations.py
"""
from django.db.models import F, IntegerField
from django.db.models.functions import Cast

# Since both these fields are integers we don't NEED
# to Cast them but I like to remain in the habit.  I haven't
# noticed any negative impact on my query performance.
bulk_quantity = Cast(
  F('quantity') * F('bom__bulk_quantity'),
  output_field=IntegerField()
)

```

Now we can use it in a List View for our FinishedProductRun objects like so (if you're not hip to generic class based views, check them out [here](https://docs.djangoproject.com/en/3.1/ref/class-based-views/)):

```python
"""
  my_app/views.py
"""
from django.views.generic.list import ListView

from my_app.models import FinishedProductRun
from my_app.model_annotations import bulk_quantity


class FPRList(ListView):

  model = FinishedProductRun


  # Now let's put our nifty model annotation to work by overriding the default get_queryset method
  def get_queryset(self):
    qs = super().get_queryset()  # Start with the basic queryset, it won't hit the DB until we render the list
    qs.annotate(
      bulk_quantity=bulk_quantity  # Use our pre-defined calculation and tell the DB what to call it
    ).order_by('-bulk_quantity') # And order the results by our new field

    return qs  # <- Don't forget this part!
```

## Reusability Counts

Well that was nifty but an astute reader might be asking "Why bother with the `model_annotations.py` file when you could just write the calculation in the `get_queryset` method?". Good question, I'm glad you asked!

As we can see from our models defined earlier, the FinishedProductRun is the only model to which this annotation can apply since it's the only one with the required fields. Now if we only had this one list view then it would seem perfectly reasonable
to just define the the calculation directly in the `get_queryset` method. However...it has been my experience applications tend to keep expanding. What if you need a separate list view to return specific subsets of our model? What if we need to use the `bulk_quantity` annotation on the related `finished_products` set for a specific BulkProductRun? Sure it's not hard to copy and paste a few times but what if we need to rename one of the fields involved? You can see how this can become a tangled mess really quickly. This is why, shortly after beginning to use annotations (and creating some of the problems I just described!), I took the approach of creating a `model_annotations.py` file where I store them. And, since there is nothing model specific about the annotations themselves, we could define annotations based on fields that exist on more than one model (`date_created` for example) and apply it when retrieving data from any of our models.

Anyway, I have found Django queryset annotations to be something that makes me smile when seeking to provide more useful info for my end users so I thought I'd share.

## One More Example
One of my projects is a Django powered web application to simulate a local library card catalog website.  In this scenario I used Django's dynamic query annotations, bundled in some model `save()` methods, to set the value for a static field.  This approach reduces query complexity when the value hasn't changed and also abstracts the decision making for the correct value to set in a more readable and reusable way.  I worked it all out in a section of my slowly growing notes on the project.  You can take a look [here](https://supermanzer.github.io/DendronNotes/notes/c874cfd9-6e98-431b-a86a-b60d0cbf3a69.html).  In this note I'm describing how I want to control the `status` field of a particular copy of a book.
