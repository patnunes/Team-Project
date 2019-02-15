from .models import Tweet, User
from datetime import datetime

def save_user_tweets(tweetData):
    # TODO: setup the likes counter once the likes feature has been implemented
    user = User.objects.values_list('id').filter(username = tweetData['username'])
    tweet = Tweet(user_id = user[0][0], content = tweetData['tweet'], timestamp = datetime.now(), like_counter = 0)
    tweet.save()
    return 0

# TODO: implement the retrieve_user_tweets method
