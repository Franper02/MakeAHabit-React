from django.db import IntegrityError
from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required

from .models import User



def index(request):
    return render(request, 'index.html')

@login_required(login_url="habits:index")
def home(request):
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