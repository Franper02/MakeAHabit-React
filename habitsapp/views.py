from django.db import IntegrityError
from django.shortcuts import render

from .models import User




def register_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        confirmation = request.POST['confirmation']

    if password != confirmation:
        return render(request, "habits/register.html", {
            'error': True
    })

    try:
        user = User.objects.create_user(username, email, password)
        user.save()

    except IntegrityError:
            return render(request, 'index.html')