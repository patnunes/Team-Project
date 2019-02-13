from .models import User

def create_user(user_info):
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
