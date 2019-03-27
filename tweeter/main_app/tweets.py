from .models import Tweet, User, Follow, Likes
from datetime import datetime
from django.core.serializers.json import DjangoJSONEncoder
import json
from django.core import serializers
from .follow import get_following_ids



def save_user_tweets(tweetData):
    # TODO: setup the likes counter once the likes feature has been implemented
    user = User.objects.values_list('id').filter(username = tweetData['username'])
    tweet = Tweet(user_id = user[0][0], content = tweetData['tweet'], timestamp = datetime.now(), like_counter = 0)
    tweet.save()
    #retrieve_user_tweets(user[0][0])
    return 0


def retrieve_user_tweets(username):

	following_ids = get_following_ids(username)

	#returns a queryset of first 5 tweets in order of most recent
	tweet_data = Tweet.objects.filter(user_id__in = following_ids).filter(is_comment = 0).order_by('-timestamp').values('id','user__username','content','timestamp','like_counter','parent_tweet')[:5]
	tweet_data_json = json.dumps(list(tweet_data), cls=DjangoJSONEncoder)
	return tweet_data_json


def fetch_older_tweets(tweetId, username):

	following_ids = get_following_ids(username)
	more_tweets = Tweet.objects.filter(user_id__in = following_ids).filter(is_comment = 0).order_by('-timestamp').values('id','user__username','content','timestamp','like_counter','parent_tweet')[:5]
	more_tweets_json = json.dumps(list(tweet_data), cls=DjangoJSONEncoder)
	return more_tweets_json

def CU_page(username):

	# get current user's id 
	current_user_id = User.objects.get(username = username).pk

	# retrieve ALL tweets posted by that user in order of most recently posted
	tweet_data = Tweet.objects.filter(user_id = current_user_id).order_by('-timestamp').values('id','user__username','content','timestamp','like_counter')
	
	#check if user has posted any tweets
	if tweet_data.exists():
		return 0, list(tweet_data)
	else:
		return 5,0

def populate_dashboard(username):

	# get all ids that the current user follows
	# includes the id of the current user
	following_ids = get_following_ids(username)

	# retrieve all tweets that belong to the user and those they follow
	tweet_data = Tweet.objects.filter(user_id__in = following_ids).order_by('-timestamp').values('id','user__username','content','timestamp','like_counter')
	
	if tweet_data.exists():
		return 0, list(tweet_data)
	else:
		return 5,0
	return tweet_data
