---
title: Integrating Photography with Web Dev - 1
description: Taking my budding new hobby of photography beyond Instagram by building my own photo gallery.
img: https://img.stackshare.io/service/1075/celery.png
published_to_twitter: false
author:
  name: Ryan Manzer
  bio: He puts the Manzer in Supermanzer
  image: '/images/supermanzer.jpeg'
tags:
  - vuetify
  - webdev
  - photography
---

## Inspiration

I have to give credit where credit is due. My good friend Lucas saw some of my photos and made a comment about me spinning up a photo gallery and I thought to myself "Well you can just follow my Instagram.....wait, that would be a fun thing to add to my website!" As I thought about it driving home from Costco, it did sound like a fun project and a way to put two hobbies together. However, this is no small topic so I'm writing a post about it to share what my intentions are upon starting. I can get into the weeds of a project and lose sight of what my original intent was so it helps to write it down.

## Approach

I built this site on rock n' roll....no, wait a minute.

I built this site using Nuxt and Vuetify (v2 for now). So it makes sense that I will build out the image display and layout portions using Vuetify components. I'm looking at the [Image](https://vuetifyjs.com/en/components/images/), [Carousel](https://vuetifyjs.com/en/components/carousels/), and [Dialog](https://vuetifyjs.com/en/components/dialogs/) components. This seems to me a like a good place to start. To keep things simple at first I think I'd like to try and replicate the Instagram grid, potentially with some custom sorting options. I will likely have more thoughts on this as my ideas start to get built into components.

## Some Random Ideas

I don't think the [Nuxt context](https://nuxtjs.org/docs/concepts/context-helpers) that is loaded into each view provides you a way to traverse the `/static` directory. Ultimately I would like to be able to automate the addition of new photos to a continuous grid but I suspect I will need to start with hard-coded file names/paths.

I may make more use of [Nuxt content](https://nuxtjs.org/docs/directory-structure/content) to create photo collections with some text associated with them. I would like to be able to reduce the number of places where I have to hard-code the same data. Getting annoyed with inefficiencies in development helps drive the creation of better tools.
