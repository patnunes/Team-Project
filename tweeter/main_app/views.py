from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.

from django.http import HttpResponse


def index(request):
    return render(request, 'index.html')


def signup(request):
    return render(request, 'signup.html')
