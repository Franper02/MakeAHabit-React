from unicodedata import name
from django.urls import path
from . import views

app_name = 'habits'

urlpatterns = [
    path("", views.register_view, name="register"),
]