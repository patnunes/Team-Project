from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.

from .models import User

from django.http import HttpResponse

#Here for testing purposes, feel free to delete
#user_info = {'email' : 'testemail@gmail.com', 'username' : 'user1', 'password' : '123'}

def index(request):
    return render(request, 'index.html')
	
def signup(request):
	return render(request, 'signup.html')

def create_user('''pass user_info_dictionary: in this case titled user_info'''):
	all_users = User.objects.all()
	#check for already existing usernames and email
	for user in all_users:
		if user.username == user_info['username']:
			return 1
		if user.email == user_info['email']:
			return 2
	#Passed, ready to create a new user
	new_user = User()
	new_user.username = user_info['username']
	new_user.email = user_info['email']
	new_user.password = user_info['password']
	new_user.save()
	return 0