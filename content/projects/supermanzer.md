---
title: This Website
summary: I am building this site using new (to me) tools and frameworks. I am using the Nuxt.js meta-framework along Vuetify.js to build the front-end.  I started using Google Firestore but am migrating to Nuxt Content for the.....um.... content. This has all be a fantastic learning experience. I am learning better how to leverage the many great existing services to make building websites easy.
img: https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
card_img: /images/cloud_sky.jpg
github_link: https://github.com/supermanzer/supermanzer.github.io

lead:
  name: Ryan Manzer
  bio: He puts the Manzer in Supermanzer
  image: "/images/supermanzer.jpeg"
---

## Motivation
I wanted to create a personal website as well as become more familiar with the tools commonly used by front-end developers. I am aware that personal websites offer coders a good way to show off their skills as well as a fun space to try out new things. Also I've seen and appreciated the viewpoints of many software developers and I figured someone might actually find some of the stuff I've got to share useful. So far this has been a very rewarding endeavor.

While I still feel more comfortable with back-end business logic and designing elegant data systems, it has been very enlightening to build a site that relies on a basic NoSQL document store and entirely front-end logic.

## Technology Choices
My first love in terms of web development frameworks is the Django Python framework. The documentation was just so clear and engaging and I wanted a similar feeling from the front-end framework I chose to use. After dabbling with Angular and reviewing React I decided to use [Vue.js](https://vuejs.org/) as the front-end framework for this site. Their documentation was the most clear out of the big three and I appreciated that this project was truly community based rather than controlled by a giant company.

After hearing [Sarah Drasner](https://sarahdrasnerdesign.com/) discuss the ease of developing with the [Nuxt.js](https://nuxtjs.org/) meta-framework (another layer on top of Vue.js) I decided to check it out. She is a core Vue.js team member and a developer I respect a great deal so I find following her advice has a tendency of paying off. As someone who has appreciated the material design aesthetic since it was introduced, I wanted to use [Vuetify.js](https://vuetifyjs.com/en/) as well for styling the site. I've been impressed at the ease of use and level of customization. I had previously found those two to be mutually exclusive properties of software.

For storing content I decided to try out Google Firestore. I've been pleasantly surprised at how easy it is to use. I'm more of a RDBMS kind of guy since I usually design data systems for reporting as well as data storage but for something like simple website content the whole NoSQL approach is growing on me. I'm still more likely to reach for my favorite DB, PostgreSQL, when starting any new project but I"m starting to think more about using document stores (NoSQL) for projects where relating different data models is not necessary.

I have to mention that the tutorial playlists of [Shaun the Net Ninja](https://www.youtube.com/c/TheNetNinja/featured) have been immensely helpful in picking up these technologies and I highly recommend them for anyone who is unsure of where to start with a front-end tech. Specifically I have used his Vuetify, Firebase, and Firestore Auth playlists for this project.

## Lessons Learned

Working on this site has taught me to solve many little problems and get more familiar with new-to-me aspects of front-end web development. Thankfully the good people a Nuxt.js have made some of this learning curve a bit less steep. Here's a quick list of some parts that have excited, confused, and frustrated me:

- Vuex Store - The utility of a global store of data available in the application has been both a big shift and a significant headache. I was grateful to the Nuxt.js framework for setting it up by default and making it so easy to implement a module pattern. Coming from a Python background, I prefer namespaced functions to ensure a project can easily scale. However, understand how and when to invoke Mutations vs Actions and how I'm supposed to handle using State data in my Vue.js templates, specifically with v-model bindings has been challenging. I'm still slowly figuring it out and need to work on better data fetching methods to ensure my site runs smooth and fast. Thankfully there are a lot of smart people working on these exact issues who are happy to share their knowledge.
- Vuetify.js - As I mentioned in the Technology Choices section, this has been very eye opening in terms of a visual framework that is both fairly simple and easy to get started with and provides a high degree of customization. I'm still just getting started but I think I will be building UIs with this quite a bit going forward.
- Component lifecycles - Understanding when various components are rendered and re-rendered on such a dynamic interface has me still quite confused.  I recognize this is part of power of these interfaces but sometimes I am left wondering "where is my button?" and I spend a good amount of time sifting through search results before I find out I'm assigning attributes before it exists.

