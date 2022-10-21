---
title: TODO Catalog CLA
summary: A command line application that scans a code base and generates a TODO.md that logs all TOOO comments in project directory, written in Python
card_img: /images/code-typing.jpeg
links:
  github:
    url: https://github.com/supermanzer/todo-cla
    icon: mdi-github
    text: View on Github

lead:
  name: Ryan Manzer
  bio: He puts the Manzer in Supermanzer
  image: '/images/supermanzer.jpeg'
---

## Problem

I started programming because I thoguht it was fun to start telling the machines what to do, rather than the other way around. After working through many coding tutorials in Python, JavaScript, and HTML I had picked up the practice of creating TODO comments to highlight where I had left the state of my code and my intent for what should come next. This has proved rather helpful in keeping track of what I thought was needed and whwere my code was going. However, as my projects grew more modular and spread across more files, tracking down these comments was not always easy.

## Solution

After using the `os` module in Python and particularly the `os.walk()` method to traverse all files and subdirectories in a directory, it occurred to me that one could very easily write a program to scan all files in a directory for TODO comments, so that is what I did. As with many projects, what started out laughably simple quickly got more complex as I realized what little tweaks would make it more functional. However, I am pleased to have created something that does the job in just over 100 lines of code (including length doc strings and comments).

Usage is pretty simple, assuming you set up a `config` file:

```console
~$ todo_catalog
```

The output is similarly stragithforward, just noting the file and line number where the TODO comment is found as well as the text followng TODO.

```
* index.html line 8 - (test@exmaple.com) Make website here
```

## Goal

While many current IDEs have features to collect and catalog these comments, my goal with this project was to produce something that would be part of a public (or private) repository and work to improve collaboration. I envisioned this being used by teams to communicate where one coder had to call it quits and where the next one to pick up the project could get started. Also it would be useful if a solo developer had to walk away from a project for a while and wanted to pick it up again later, from a hosted repository.
