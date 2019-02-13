from django.shortcuts import render
from django.views.generic import TemplateView

#Imported function
from .signup import create_user

from django.http import HttpResponse

def index(request):
    return render(request, 'index.html')
	
def signup(request):
	return render(request, 'signup.html')
