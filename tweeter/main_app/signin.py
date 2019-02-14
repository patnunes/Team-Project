from models import User

def validatingUser(userInfo):
    user = User.objects.filter(EMAIL = userInfo['email'], PASSWORD = userInfo['password'])
	#if user does not have an account
    if user is None: 
        return 3
    return 0