from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import HttpResponse
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt

#all used for testing purposes:
from .models import Tweet, User, Follow, Likes


# Import features here
from main_app.signup import create_user
from main_app.signin import validate_user
from main_app.tweets import save_user_tweets

# HTML file declarations

def index(request):
    return render(request, 'index.html')

def signup(request):
    return render(request, 'signup.html')

def signin(request):
    return render(request, 'signin.html')

def profile(request):
    ids = [8,1];
    user_tweet_data = Tweet.objects.filter(user_id__in = ids).filter().order_by('-timestamp')#[:10]
    following = Follow.objects.all()
    
    for f_ids in following:
       print(f_ids.follow_id)

    return render(request, 'profile.html', { 'data': user_tweet_data })

# Potential responses from the various methods
responses = {
                    0: 'success',
                    1: 'user in use',
                    2: 'email in use',
                    3: 'other',
                    4: 'invalid user or email'
}

#def retrieve_user_tweets():
#    return Tweet.objects.all()


# TODO: fix csrf issue in frontend
@csrf_exempt
def signup_submit(request):
    # verify that the submitted data meets the requirements
    if request.is_ajax() and request.method == 'POST':
        # load the content of the response into another var
        data = json.loads(request.body)
        try:
            # store all the passed data into a dict
            user = {'email':data['email'], 'username':data['userName'],
            'password':data['password']}
        except KeyError:
            # if for some reason the response is formed wrong
            return JsonResponse({"status":responses[3]})

        # TODO: call the function that processes this info
        # print the result of adding the user
        response = create_user(user)
        return JsonResponse({"status":responses[response]})

    # redirect in case of weird failure
    return render(request, 'signup.html')


@csrf_exempt
def signin_submit(request):
    if request.is_ajax() and request.method == 'POST':
        # load the content of the response into another var
        data = json.loads(request.body)
        try:
            # store all the passed data into a dict
            user = {'username':data['userName'], 'password':data['password']}
        except KeyError:
            # if for some reason the response is formed wrong
            return JsonResponse({"status":responses[3]})

        # TODO: call the function that processes this info
        # print the result of adding the user
        response = validate_user(user)
        return JsonResponse({"status":responses[response]})

    # redirect in case of weird failure
    return render(request, 'signin.html')


@csrf_exempt
def tweet_submit(request):
    if request.is_ajax() and request.method == 'POST':
        # load the content of the response into another var
        data = json.loads(request.body)
        try:
            # store all the passed data into a dict
            user = {'username':data['userName'], 'tweet':data['content']}
        except KeyError:
            # if for some reason the response is formed wrong
            return JsonResponse({"status":responses[3]})

        # TODO: call the function that processes this info
        # print the result of adding the user
        response = save_user_tweets(user)
        return JsonResponse({"status":responses[response]})

    # redirect in case of weird failure
    return render(request, 'profile.html')
