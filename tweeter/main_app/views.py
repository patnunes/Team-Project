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
from main_app.signin import validate_user, return_user_id
from main_app.tweets import save_user_tweets, retrieve_user_tweets, fetch_older_tweets, CU_page, populate_dashboard
from main_app.likes import user_has_liked_tweet, like_a_tweet

# HTML file declarations

def index(request):
    return render(request, 'index.html')

def signup(request):
    return render(request, 'signup.html')

def signin(request):
    return render(request, 'signin.html')

def profile(request):
    return render(request, 'profile.html')

def myprofile(request):
    return render(request, 'myprofile.html')

def tweet_template(request):
    return render(request, 'tweet_template.html')

# Potential responses from the various methods
responses = {
                    0: 'success',
                    1: 'user in use',
                    2: 'email in use',
                    3: 'other',
                    4: 'invalid user or email'
}


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
        if response == 0:
            userID = return_user_id(user)
            userinfo ={ 0: userID}
            return JsonResponse({"status":responses[response], "userID": userinfo[0]})
        else:
             return JsonResponse({"status":responses[response]})

    # redirect in case of weird failure
    return render(request, 'signin.html')

@csrf_exempt
def get_tweets(request):
    if request.is_ajax() and request.method == 'GET':

        try:
            username = request.GET.get('username', None)
        except KeyError:
             return JsonResponse({"status":responses[3]})

        tweets = retrieve_user_tweets(username)
        return JsonResponse({"status":responses[0], "tweets": tweets})


    return render(request, 'tweet_template.html')

@csrf_exempt
def get_older_tweets(request):
    if request.is_ajax() and request.method == 'GET':

        try:
            username = request.GET.get('userName', None)
            tweetID = request.GET.get('tweetID', None)
        except KeyError:
            return JsonResponse({"status":responses[3]})

        tweets = fetch_older_tweets(tweetID, username)
        return JsonResponse(tweets, safe=False)
    return render (request, 'profile.html')


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

@csrf_exempt
def like(request):
    if request.is_ajax() and request.method == 'POST':
    # load the content of the response into another var
        data = json.loads(request.body)
    try:
        # store all the passed data into a dict
        user = data['userName']
        tweet_id = data['tweet_ID']
    except KeyError:
        # if for some reason the response is formed wrong
        return JsonResponse({"status":responses[3]})

    # TODO: call the function that processes this info
    # print the result of adding the user
    tweet = like_a_tweet(user, tweet_id)
    return JsonResponse({"status":responses[tweet[1]], "tweet": tweet[0]})

    # redirect in case of weird failure
    return render(request, 'index.html')

@csrf_exempt
def  is_liked(request):
    if request.is_ajax() and request.method == 'POST':
    # load the content of the response into another var
        data = json.loads(request.body)
    try:
        # store all the passed data into a dict
        user = data['userName']
        tweet_id = data['tweet_ID']
    except KeyError:
        # if for some reason the response is formed wrong
        return JsonResponse({"status":responses[3]})

    # TODO: call the function that processes this info
    # print the result of adding the user
    response = user_has_liked_tweet(user, tweet_id)
    return JsonResponse({"status":responses[response[0]], "isLiked":response[1]})

    # redirect in case of weird failure
    return render(request, 'index.html')

@csrf_exempt
def populate_tweets(request):
    if(request.is_ajax() and request.method == 'POST'):
        # load the content of the response into another var
        data = json.loads(request.body)
    try:
        # store all the passed data into vars
        action = data['action']

        if(action == "dashboard"):
            username = data["userName"]
        else:
            username = action
                
    except KeyError:
        # if for some reason the response is formed wrong
        return JsonResponse({"status":responses[3]})

    if(action == "dashboard"):
        reponse = populate_dashboard(username)
        return JsonResponse({"status":responses[response[0]], "tweets":response[1]})
    else:
        response = CU_page(username)
        return JsonResponse({"status":responses[response[0]], "tweets":response[1]})


