---
title: Local Recipe Server
summary: This is an effort to provide a means of saving, searching, and displaying recipes.  It involves using OCR and NLP machine learning, local network DNS and/or IP mapping, and Android development
tech: Python, ML, Kotlin
img: /images/cooking/recipe.jpg
card_img: /images/cooking/beef_barley.jpg
links:
  github:
    url: https://github.com/supermanzer/local-recipe-server
    icon: mdi-github
    text: View on Github
  dendron:
    url: https://supermanzer.github.io/MyNotes/notes/ZG5dy128q8nTg2wptcunO/
    icon: mdi-source-branch
    text: View Notes
published_to_twitter: false
lead:
  name: Ryan Manzer
  bio: He puts the Manzer in Supermanzer
  image: "/images/supermanzer.jpeg"
---

## Motivation

I love to cook and I have amassed a large number of cookbooks and copies of Cooks Illustrated and other magazines. The problem I run into is, when I want to make a recipe from one of them I spend a good 30 minutes rummaging through my copies and eventually give up and just check out one of the inferior recipes that are nonetheless easily returned in a Google search.

There needs to be a better way. One that doesn't involve banner and pop up ads everywhere, scrolling through the story of how the food blogger "discovered" this recipe, and provides me a way to flex a few different coding skills.

## Approach

Since I cut my teeth in tech on databases, I figured I'd build a database application that would allow me to create and store the recipes I want to. Since this most often revolved around recipes in magazines that I already had I decided that would be the source of the data. But how to get recipes in physical magazines into an SQL DB?

### Optical Character Recognition

OCR is a fairly well understood, if still kind of tricky, application of Machine Learning. The US Postal Service has been using it for a long time to turn hand written text on the outside of envelopes into data. So I figured this would be a good tool to apply in this context.

I'm still in the process of testing out different approaches to training the OCR model, pre-processing the images I am using, and refining my approachs. A few things I've picked up are

- Contrast matters...a lot. Trying to determine the best approach to cast all pixels to either black or white is a non-trivial endeavor.
- Models training for letters get thrown off by fractions. Many initial attempts to recognize the string "1/2 onion, chopped" gets returned as "Y onion, chopped".

### Natural Language processing

THis is another area of Machine Learning that is well researched and documented. There are a large number of blogs and courses on these topics and I look forward to digging into this more. In this project I plan to use NLP to break out a recipe into a list of ingredients and a list of steps. Using NLP approaches to differentiate between an incomplete sentence describing an amount of something and a set of sentences directing the reader to take some action _should_ be fairly straightforward. However, since I'm still working on turning an image into text with some degree of fidelity, I have not begun working on this aspect yet.

## Desired end result

I want to be able to find a recipe I like, snap a photo (or photos) of the text, upload it to a local server on my home network, have a parsed and organized recipe returned to my phone with the option to edit the text prior to saving. I also want a list interface that allows searching by name or by ingredients. One ideal goal is to be able to look in the fridge/cupboard, know I have chicken thighs, onions, carrots, garbanzo beans, and jalapenos, and find any/all recipes that involve using those ingredients.

## Technical Details

I am using my Dendron-powerd note spaces to keep track of my ideas, approaches, and results of my efforts. If you, dear reader, have any interest in following along you can find the latest updates [there](https://supermanzer.github.io/MyNotes/notes/ZG5dy128q8nTg2wptcunO/).
