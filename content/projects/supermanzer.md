---
title: This Website
summary: I am building this site using new (to me) tools and frameworks. I am using the Nuxt.js meta-framework along Vuetify.js to build the front-end.  I started using Google Firestore but am migrating to Nuxt Content for the.....um.... content. This has all be a fantastic learning experience. I am learning better how to leverage the many great existing services to make building websites easy.
img: https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
card_img: /images/cloud_sky.jpg

links:
  github:
    url: https://github.com/supermanzer/supermanzer.github.io
    icon: mdi-github
    text: View on Github

lead:
  name: Ryan Manzer
  bio: He puts the Manzer in Supermanzer
  image: '/images/supermanzer.jpeg'
---

## Update - 03/18/2023

The upgrade to Nuxt 3 is proving to be non-trivial. In particular I am having difficulty replecating my custom font and styling options that I built into my Veutify 2 components in Vuetify 3 (although the different way Nuxt content behaves is making some of my custom functionality difficult). For the most part this is minor changes and does not impact overall functionality. However, I built this site explicitly for spending more time working on the details of my desired user interface. I will continue to plug away in a separate branch and not merge until I've got something that I'm happy with.

In the meantime I am focusing on building out a section of this site for displaying my photography.

## Update - 01/29/2023

I've completed a basic redesign of my visual style and converted my past Excited section focused solely on specific tech to a more general purpose blog (still using Nuxt content). Now I have decided the time is right to begin the migration to [Nuxt 3](https://nuxt.com/). This is I think thea big change as it is going from Vue 2 to Vue 3. While there is likely to be a lot of pain points given how different the entire API is, I think the benefits in terms of performance and functionality definitely outweigh the pain of performing the migration. Fortunately for me, Debbie O'Brien wrote a [guide](https://debbie.codes/blog/migrating-nuxt2-nuxt3/) about her own migration journey. Since her [tutorial](https://nuxtjs.org/tutorials/creating-blog-with-nuxt-content/) on using Nuxt Content to make a blog is what convinced me I could start taking this approach, I know I am in good hands. I'm looking forward to finding out what changes I will have to make and what new opportunities this migration will offer me.

## Motivation

I started this project because I wanted to create a personal website as well as become more familiar with the tools commonly used by front-end developers. I am aware that personal websites offer coders a good way to show off their skills as well as a fun space to try out new things. Also I've seen and appreciated the viewpoints of many software developers and I figured someone might actually find some of the stuff I've got to share useful. So far I have just been playing around with building basic components as well as trying to develop a coherent style approach.

While I still feel more comfortable with back-end business logic and designing elegant data systems, it has been very enlightening to build a site that relies on basic, relatively unstructured data storage. While it is still a work in progress I've been able to get closer to my dream of constructing single-page apps whose interfaces are dynamically configured by the details in the underlying data.

## Technology Choices

My first love in terms of web development frameworks is the Django Python framework. The documentation was just so clear and engaging and I wanted a similar feeling from the front-end framework I chose to use. After dabbling with Angular and reviewing React I decided to use [Vue.js](https://vuejs.org/) as the front-end framework for this site. Their documentation was the most clear out of the big three and I appreciated that this project was truly community based rather than controlled by a giant company.

After hearing [Sarah Drasner](https://sarahdrasnerdesign.com/) discuss the ease of developing with the [Nuxt.js](https://nuxtjs.org/) meta-framework (another layer on top of Vue.js) I decided to check it out. She is a core Vue.js team member and a developer I respect a great deal so I find following her advice has a tendency of paying off. As someone who has appreciated the material design aesthetic since it was introduced, I wanted to use [Vuetify.js](https://vuetifyjs.com/en/) as well for styling the site. I've been impressed at the ease of use and level of customization. I had previously found those two to be mutually exclusive properties of software.

I have to mention that the tutorial playlists of [Shaun the Net Ninja](https://www.youtube.com/c/TheNetNinja/featured) have been immensely helpful in picking up these technologies and I highly recommend them for anyone who is unsure of where to start with a front-end tech. Specifically I have used his Vuetify, Firebase, and Firestore Auth playlists for this project.

For storing content I decided to try out Google Firestore. I've been pleasantly surprised at how easy it is to use. I'm more of a RDBMS kind of guy since I usually design data systems for reporting as well as data storage but for something like simple website content the whole NoSQL approach is growing on me. I'm still more likely to reach for my favorite DB, PostgreSQL, when starting any new project but I"m starting to think more about using document stores (NoSQL) for projects where relating different data models is not necessary.

**However**, I had recently become disenchanted with the task of changing text content stored in Firestore (it's not really set up to edit stuff). I didn't want to have to create my own WYSIWYG editor locally and maintain all actions associated with that. Also I had just learned about the fantastic [Nuxt.js content module](https://content.nuxtjs.org/). This allows me to create everything from multi-page blog posts to simple one line comments from Markdown files. The module parses both the text content and the [front-matter](https://jekyllrb.com/docs/front-matter/) into impressive data objects that mean I can use simple markdown files but provide enough details to

1. Build a Table of Contents
1. Load resources like external URLs or background images
1. Provide the configuration data I use to dynamically build the interfaces.

## Lessons Learned

Working on this site has taught me to solve many little problems and get more familiar with new-to-me aspects of front-end web development. Thankfully the good people a Nuxt.js have made some of this learning curve a bit less steep. Here's a quick list of some parts that have excited, confused, and frustrated me:

- Vuex Store - The utility of a global store of data available in the application has been both a big shift and a significant headache. I was grateful to the Nuxt.js framework for setting it up by default and making it so easy to implement a module pattern. Coming from a Python background, I prefer namespaced functions to ensure a project can easily scale. However, understand how and when to invoke Mutations vs Actions and how I'm supposed to handle using State data in my Vue.js templates, specifically with v-model bindings has been challenging. I'm still slowly figuring it out and need to work on better data fetching methods to ensure my site runs smooth and fast. Thankfully there are a lot of smart people working on these exact issues who are happy to share their knowledge.

- Vuetify.js - As I mentioned in the Technology Choices section, this has been very eye opening in terms of a visual framework that is both fairly simple and easy to get started with and provides a high degree of customization. I'm still just getting started but I think I will be building UIs with this quite a bit going forward.

- Component life-cycles - Understanding when various components are rendered and re-rendered on such a dynamic interface has me still quite confused. I recognize this is part of power of these interfaces but sometimes I am left wondering "where is my button?" and I spend a good amount of time sifting through search results before I find out I'm assigning attributes before it exists.

## Moving Forward

I am interested to see how far I can push the Markdown file based content system here. I plan to add a blog section to share my thoughts and I will also be interested to see how long it takes before I am reaching for an RDMBS data persistence layer to keep track of that stuff. Using Dendron for note taking has made me think the whole Markdown files as a data store approach is both flexible and sufficiently feature rich to let me go for a while. Additionally, while it does result in some re-typing of the same data, the ability to use front-matter in Nuxt content for searching and filtering means I can get some of the fun features of an RDBMS layer without the hassle. Although I do love designing and building database schema so that is likely going to happen eventually.
