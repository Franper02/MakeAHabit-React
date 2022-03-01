from unicodedata import name
from django.urls import path
from . import views

app_name = 'habits'

urlpatterns = [
    path("", views.index, name="index"),
    path("register", views.register_view, name="register"),
    path("login", views.login_view, name="login"),
    path("home", views.home, name="home"),

    path("completed/<int:id>", views.completed, name="completed"),
    path("queryHabits", views.queryHabits, name="queryHabits")

]