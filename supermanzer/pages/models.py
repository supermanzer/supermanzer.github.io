"""
 The models for the pages app.
"""

from django.db import models
from django.urls import reverse_lazy

SECTION_CHOICES = (
  ('fs', 'Full Section'),
  ('cs', 'Column Section'),
  ('is', 'Image Section'),
)
# Create your models here.
class Page(models.Model):
    """This model represents instances of whole web pages."""
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey('auth.User', related_name='page_creater', null=True, on_delete=models.SET_NULL)
    modified_by = models.ForeignKey('auth.User', related_name='page_modifier', null=True, on_delete=models.SET_NULL)
    title=models.CharField(max_length=50, blank=True, null=True, help_text='The title of this web page.')
    goal=models.CharField(max_length=200, blank=True, null=True, help_text='The communication goal that this page seeks to achieve.')
    filename = models.CharField(max_length=100, blank=True, null=True, help_text='The file that will be written out when this page is rendered.')
    url = models.CharField(max_length=200, blank=True, null=True, help_text='The URL that will point to this page in the current directory structure, once the static file is rendered.')
    title_abbrv = models.CharField(max_length=50, blank=True, null=True, help_text='The abbreviation that will be used in navigation components for this page.')

    def get_absolute_url(self):
      return reverse_lazy('pages:page', args=[str(self.id)])

    def __str__(self):
      return self.title

    class Meta:
      ordering = ('date_created', )
      app_label = "pages"

class Section(models.Model):
    """This model represents a section of a page."""
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey('auth.User', related_name='section_creater', null=True, on_delete=models.SET_NULL)
    modified_by = models.ForeignKey('auth.User', related_name='section_modifier', null=True, on_delete=models.SET_NULL)
    heading = models.CharField(max_length=200, blank=True, null=True, help_text='The heading (if any) for this section.')
    type=models.CharField(max_length=2, choices=SECTION_CHOICES, blank=True, null=True, help_text='The type of section this is.')
    text = models.TextField(help_text='The text of this web page section.  This may contain HTML tags for extra styling')
    icon=models.CharField(max_length=5, blank=True, null=True, help_text='The icon (Materialize) to go with this section.')
    page=models.ForeignKey(Page, related_name='page_section', on_delete=models.CASCADE)

    def get_absolute_url(self):
      return reverse_lazy('pages:section', args[str(self.id)])

    def __str__(self):
      return self.heading

    class Meta:
      ordering=('date_created',)
      app_label="pages"
