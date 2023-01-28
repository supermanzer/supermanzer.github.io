---
title: Using Traefik with Docker-Compose
description: How I learned to stop worrying and love my router
tech: Traefik
img: https://doc.traefik.io/traefik/v1.7/img/traefik.logo.png
published_to_twitter: false

author:
  name: Ryan Manzer
  bio: He puts the Manzer in Supermanzer
  image: '/images/supermanzer.jpeg'

tags:
  - tech
  - docker
  - traefik
---

### Traefik Routing and Sub-Domains

<image-asset image="traefik-architecture.png" :width="700" class="my-4"></image-asset>

From what I can tell, people like the reverse proxy and load balancer [Traefik](https://traefik.io/traefik/) for plenty of reasons. But this blog is about what **I'm** excited about so here is why I got so excited once I figured out how to integrate it into my tech stack. While there are many features that I'm excited to explore, the ones I'm going to detail below are what motivated me to spend valuable time learning how to integrate Traefik into my everyday tech stack.

---

### Dynamic Routing Configuration

While I'm still a fan of [NGINX](https://www.nginx.com/) and I actually use it as the web server in most of my `docker-compose` defined application stacks, I am in love with the dynamic routing in Traefik. Any time any one of the services I had mapped in an NGINX configuration was not available, it took the entire server down. With Traefik, I can spin up and down groups of Docker containers and, if they have the correct sets of labels attached, the routers and any middleware are added to the Traefik configuration within a second. No rebooting servers needed. Just check your handy dandy dashboard on port 8080 to make sure verything is spun up correctly.

<image-asset image="webui-dashboard.png" :width="700" class="my-4"></image-asset>

---

### Sub-domain Routing - All Time Favorite Feature

<image-asset image="traefik_docker.png" :width="700" class="my-4"></image-asset>

My definite, all-time favorite feature of Traefik is the ability do route to different `docker-compose` application stacks using sub-domains. This includes the concept of using one specific Docker network just to link all the web-server containers in each application stack to the Traefik router. This means each DB container, server (Python, PHP, etc.) container, and any other nifty stuff can live in a local network just for the containers specified in each `docker-compose` file. One unexpected benefit has been my move from fully server-side rendered web applications (Django, Laravel) to a separating of back-end and front-end applications. Add REST APIs to the server-side, build out a front-end, and when I'm ready to make the swap I just change some labels in the `docker-compose` file and my users are routed to the new application design.

On the security side of things this has some advantages too. Let me first submit that I am in no way a security expert and there may still be flaws with the architecture I've proposed. That being said, we can use the sub-domain routing Docker network configurations to one of the basic elements of application security: Minimizing the [Attack Surface](https://en.wikipedia.org/wiki/Attack_surface). We can achieve this simply by making the Traefik router the only service directly accessible on the server. For our (potentially many) applications routed by sub-domains, we expose only the web-server (NGINX in my cases) to the Docker network on which they can communicate. All communication within each multi-service application is restricted to the application specific Docker network. This _can_ make it a bit of a pain in the behind to troubleshoot since it's more work for legitimate admins to get into containers running amok, or connect to the DB used by a particular app but if you're worried about security it's a handy feature.

All in all, I've had a lot of fun with the little bit of Traefik that I've explored. I know there is much more that it can do and I look forward getting to know it better, when people aren't clamoring for new features or new applications :-)
