from ..models import User


def validate_userName(userInfo):
    # boolean var, true if user exists, false if it doesn't
    user = User.objects.filter(username=userInfo['username']).exists()
    # if user does not have an account
    if user is False:
        # return 4 if the user doesn't exist
        return 4
    # return 0 if the user exists
    return 0
