---
title: Local Library Site
summary: A project built from my all-time favorite Django tutorial on MDN.  This project has allowed me to explore a large variety of ideas and implementations for building a containerized, full stack, distributed application.  It also means when I find some new idea for business logic or a user interface I have a specific project in which to deploy it.
img: https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
card_img: https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
github_link: https://github.com/supermanzer/NuxtDRFMDN

lead:
  name: Ryan Manzer
  bio: He puts the Manzer in Supermanzer
  image: "/images/supermanzer.jpeg"
---
## Motivation
I have been using the [Django Python framework](https://www.djangoproject.com/) to build custom web applications professionally for ~4-5 years now.  In the last four years I had adopted an architecture based on Docker containers and networks.  I built a couple REST APIs to supply the data for other front-end developers but I've never had the opportunity to dig into developing a Singlge Page Application (SPA) myself.  The learning curves were too steep and the delay to producing a rough and ready interace was too costly since I'm usually building applications to fill a gap in functionality in some company's current tech stack.  However, I knew I wanted to be able to offer more to my users in terms of interactive and responsive UIs.  After coding my own Bootstrap inspired (use class names for binding) [vanilla JS jQuery replacement](https://github.com/supermanzer/FetchJS) and observing how what started as a simple and elegant means of providing a nice AJAX workflow turned into a rats nest of rules to be escaped and contradictory event responses I decided I would make time to learn the ins and outs of SPAs and how I could leverage my current skills with Django and [Django-REST-Framework](https://www.django-rest-framework.org/)(DRF) to provide interfaces that just made doing work easy.

## Approach
Since I had already been sold on Nuxt.js while making this site it was a pretty easy choice to stick with.  I scaffolded a veru basic docker-compose set up with a front-end (nuxt), back-end (django), and a data store (postgres).  From there I followed the great [MDN Django Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django) to build the data models and get the idea for the functionality I wanted to supply innitially.  The major differences were that I replaced the Django views with DRF Viewset and exposed an API to return the data.  All rendering of the data and interfaces are handled by the Nuxt front-end.  

## Outcomes
Learning how to customize the JSON returned by the server to better serve the front-end as well as developing front-end systems that re-configure themselves based on the data returned from the API has been a fantastic learning experience.  Additionally I am delighted to find that much of the principles of re-use and general => customized interface components that I developed working with Django templates carries over nicely to Vue.  Once you've built yourself a library of basic components (tables, lists, etc.) and given them enough `{% block %}` directives to allow you to customize them, using the `<slot>` approach seems like second nature.  It makes me **very** happy to see my UI made up of nested components, each handling one specific task and returning results.  It is so gratifying to see what appears to be a complex user interface be composed of clear and simple logical rules.

#### Some of the successes I've had that I think are worth trumpeting:

- Nuxt <=> Django Authentication using Web Tokens via the DRF SimpleJWT and `@nuxt/auth` modules
- Parsing of DRF `OPTIONS` JSON to dynamically build table headers and forms in Nuxt

## Future Work
This project is literally my playground when it comes to experimenting with differet UI approaches and handling complex workflows.  Implementations I am curious about but not sure enough to add to my professional projects will show up here and be ported over if they make my life easier.  I am having a great deal of fun with this and this project has given me the confidence to move forward with this type of application development in my professional life.