from django.template.loader import render_to_string
from django.views import generic
from pages.models import Page, Section


def write_page(request):
  """
   A function to render a template to a static html file.
  """
  filename = request.POST['filename']
  with open(filename, mode='w') as myfile:
    myfile.write(render_to_string(template_name='', context=None))

# Class based views + mixins = rapid developlment!
class PageView(generic.DetailView):
  model = Page

class SectionView(generic.DetailView):
  model = Section
