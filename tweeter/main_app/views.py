from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.

from django.http import HttpResponse
from django.http import JsonResponse
import json


def index(request):
    return render(request, 'index.html')


def signup(request):
    return render(request, 'signup.html')

def signup_submit(request):
    if request.is_ajax() and request.method == 'POST':
        data = json.loads(request.body)
        try:
            email = data['email']
            username = data['userName']
            password = data['password']
        except KeyError:
            pass

        render(request, 'signup.html', {"0":""})

    render(request, 'signup.html', {"0":""})
