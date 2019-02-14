from .models import Tweet
from .models import User
from datetime import datetime

def saveUserTweets(tweetData):
    #I LEFT LIKE COUNTER AT 0 FOR NOW CUZ LIKES ARE NOT IMPLEMENTED YET
    user = User.objects.values_list('id').filter(username = tweetData['username'])
    tweet = Tweet(user_id = user[0][0], content = tweetData['tweet'], timestamp = datetime.now(), like_counter = 0)
    tweet.save()
    return

# def retrieveTweets() :