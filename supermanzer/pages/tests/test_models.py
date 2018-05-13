"""
 Pages model testing.

 This file contains tests to ensure proper functioning of the models for
 the Pages app.
"""
from django.test import TestCase
from django.contrib.auth.models import User
from pages.models import Page, Section


def make_page(title='Test Page'):
  """ Generating a generic page instance to be used in multiple test classes."""
  author = User.objects.create_user(username='bob')
  return Page.objects.create(title=title, created_by=author)

class PageTest(TestCase):
  """
   Defines a series of tests for the Page model.
  """
  @classmethod
  def setUpTestData(cls):
    make_page()

  def test_url(self):
    page = Page.objects.get(pk=1)
    self.assertEqual(page.get_absolute_url(),'/page/1')

  def test_str(self):
    page = Page.objects.get(pk=1)
    self.assertEqual(str(page),'Test Page')

class SectionTest(TestCase):
  """
   Defines a series of tests for the Section model.
  """
  @classmethod
  def setUpTestData(cls):
    p = make_page()
    Section.objects.create(heading='Test Section', page=p)

  def test_str(self):
    sec = Section.objects.get(pk=1)
    self.assertEqual(str(sec), 'Test Section')

  def test_page_relation(self):
    sec = Section.objects.get(pk=1)
    self.assertEqual(str(sec.page), 'Test Page')
