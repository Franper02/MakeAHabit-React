from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.deletion import CASCADE
from django.db.models.fields import BooleanField
from django.utils import timezone

# Create your models here.
class User(AbstractUser):
    pass


class Habit(models.Model):
    user = models.ForeignKey(User, on_delete=CASCADE)
    habit = models.CharField(max_length=255)
    creation_time = models.DateField(default=timezone.now)
    status = BooleanField(default=False)

    def serialize(self):
        return{
            'habit': self.habit,
            'timestamp': self.creation_time,
            'status': self.status
        }

    def __str__(self):
        return f"{self.user.username} | {self.habit}"



class Habit_Completed(models.Model):
    user = models.ForeignKey(User, on_delete=CASCADE)
    habits = models.ForeignKey(Habit, on_delete=CASCADE)
    finished = models.DateField(default=timezone.now)

    def serialize(self):
        return{
            'user':self.user,
            'habit':self.habits,
            'date':self.finished,
        }

    def __str__(self):
        return f"{self.user.username} | {self.habits.habit} | {self.finished}"