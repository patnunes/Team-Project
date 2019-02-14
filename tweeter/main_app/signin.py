from .models import User

def validate_user(userInfo):
    user = User.objects.filter(username=userInfo['username'],
            password = userInfo['password']).exists()
	#if user does not have an account
    if user is False:
        return 4
    return 0
