from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import HttpResponse
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt


#   Import features here
from main_app.signup import create_user
from main_app.signin import validate_user

def index(request):
    return render(request, 'index.html')

def signup(request):
    return render(request, 'signup.html')

def signin(request):
    return render(request, 'signin.html')

# potential responses from the signup
responses = {
                    0: 'success',
                    1: 'user in use',
                    2: 'email in use',
                    3: 'other',
                    4: 'invalid user or email'
}

#TODO: fix csrf issue in frontend
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
    return render(request, 'signin.html')
