import json
from urllib import response
from django import http
from django.db import IntegrityError
from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.core import serializers

from .models import Habit, Habit_Completed, User



def index(request):
    return render(request, 'index.html')

@csrf_exempt
@login_required(login_url="habits:index")
def home(request):
    if request.method == "POST":
        data = json.loads(request.body)
        newHabit = data['habit']
        habit = Habit.objects.create(user=request.user, habit=newHabit)
        Habit_Completed.objects.create(user=request.user, habits=habit)
        
    return render(request, 'index.html')


@csrf_exempt
def login_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse('habits:home'))
        else:
            return render(request, "index.html")

    else:
        return render(request, 'index.html')

@csrf_exempt
def register_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        confirmation = request.POST['confirmation']

        if password != confirmation:
            return render(request, "index.html", {
                'error': True
        })
        try:
            user = User.objects.create_user(username, email, password)
            user.save()

        except IntegrityError:
                return render(request, 'index.html')

        login(request, user)
        return HttpResponseRedirect(reverse('habits:home'))

    else:
        return render(request, "index.html")



@csrf_exempt
@login_required(login_url="habits:login")
def queryHabits(request):
    if request.method == 'GET':
        habit = Habit.objects.filter(user=request.user).order_by('-pk')
        print(habit[0])
        response = serializers.serialize("json", habit)
    return HttpResponse(response, content_type='application/json')


@login_required(login_url="habits:login")
def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse('habits:index'))



@csrf_exempt
@login_required(login_url="habits:login")
def completed(request, id):
    if request.method == 'PUT':
        data = json.loads(request.body)
        habit = Habit.objects.filter(pk=id)
        if data['comp'] == True:
            habit.update(status=True)
            Habit_Completed.objects.create(user=request.user, habits=habit[0])
        else:
    # If the 'put' sends a false, update the status to false and deltes the habit_completed object
            habit.update(status=False)
            habitCompleted = Habit_Completed.objects.filter(
                user=request.user, habits=habit[0])
            if habitCompleted != None:
                habitCompleted.delete()

        return HttpResponse(status=204)

@csrf_exempt
@login_required(login_url="habits:login")
def delete(request, id):
    if request.method == 'POST':
        habit = Habit.objects.filter(pk=id)
        habit.delete()
    return HttpResponse(status=204)
