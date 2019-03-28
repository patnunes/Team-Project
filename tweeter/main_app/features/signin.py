from ..models import User


def validate_user(userInfo):
    user = User.objects.filter(username=userInfo['username'],
                               password=userInfo['password']).exists()
    # if user does not have an account
    if user is False:
        return 4
    return 0


def return_user_id(userInfo):
    userID = User.objects.get(username=userInfo['username']).pk
    print(userID)
    return userID
