"""
 URL Configuration patterns for the Pages app.
"""
from django.urls import path
from pages import views


app_name = 'pages'

urlpatterns = [
  path('page/<int:pk>', views.PageView.as_view(), name='page'),
  path('section/<int:pk>', views.SectionView.as_view(), name='section'),
]
