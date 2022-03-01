from django.contrib import admin

from .models import User, Habit_Completed, Habit
# Register your models here.
admin.site.register(User)
admin.site.register(Habit)
admin.site.register(Habit_Completed)  