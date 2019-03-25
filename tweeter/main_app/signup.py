from .models import User

# method to create a user
def create_user(user_info):
	# cariable containing all users
	all_users = User.objects.all()
	#check for already existing usernames and email
	for user in all_users:
		if user.username == user_info['username']:
			return 1
		if user.email == user_info['email']:
			return 2
	#Passed, ready to create a new user

	# create new user
	new_user = User()

	# fill in new user info
	new_user.username = user_info['username']
	new_user.email = user_info['email']
	new_user.password = user_info['password']

	# save user into DB
	new_user.save()

	# return success
	return 0
