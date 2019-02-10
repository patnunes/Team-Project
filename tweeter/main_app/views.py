from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import HttpResponse
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt




def index(request):
    return render(request, 'index.html')


def signup(request):
    return render(request, 'signup.html')


# potential responses from the signup
signup_responses = {
                    0: 'success',
                    1: 'user in use',
                    2: 'email in use',
                    3: 'other',
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
            return JsonResponse({"status":signup_responses[3]})

        # TODO: call the function that processes this info
        # print the result of adding the user
        response = 0;   # replace this with the actual response from the function
        return JsonResponse({"status":signup_responses[response]})
