"""
 Pages App - An attempt to use the Django web framework to build out
 static stites.

 This app consists of models, views, and templates designed to
 facilitate the rapid development of static pages from dynamic content.
 While other frameworks may offer a more straightforward way to go about
 this, I want to become more proficient and comfortable using Django
 and this seemed like a fun project.
"""

from django.apps import AppConfig


class PagesConfig(AppConfig):
    name = 'pages'
