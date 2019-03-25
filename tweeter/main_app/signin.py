from .models import User

# method to validate signin info
def validate_user(userInfo):
    # boolean var, true if user exists, false if it doesn't
    user = User.objects.filter(username=userInfo['username'],
            password = userInfo['password']).exists()
	#if user does not have an account
    if user is False:
        # return 4 if the user doesn't exist
        return 4
    # return 0 if the user exists
    return 0

# method to return the user id of a user given the username
def return_user_id(userInfo):
    # query the userid with the username
	userID = User.objects.get(username=userInfo['username']).pk
	print(userID)
	return userID
