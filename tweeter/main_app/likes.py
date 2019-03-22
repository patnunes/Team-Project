from .models import Tweet, User, Follow, Likes
from datetime import datetime 
from django.core import serializers

def user_has_liked_tweet(username, tweetID): 
    #getting the userid
    current_user_id = User.objects.get(username = username).pk

    #checking if user has liked tweet
    isLiked = Likes.objects.filter(tweet = tweetID, user = current_user_id).exists()
    if isLiked is False:
        return 3
    return 0

def like_a_tweet(username, tweetID):

	#getting the userid
	current_user_id = User.objects.get(username = username).pk
	
	if user_has_liked_tweet(username,tweetID) == 3:

		#insert values into LIKE table as well as increment like_counter in TWEET table
		like_entry = Likes(tweet_id = tweetID, user_id = current_user_id, timestamp = datetime.now())
		like_entry.save()

		#incrementing like counter
		inc_counter = Tweet.objects.get(id = tweetID)
		inc_counter.like_counter += 1
		inc_counter.save()

		tweet = Tweet.objects.get(id = tweetID)
		tweet_data = serializers.serialize("json", [tweet])
		return tweet_data, 0
	else:
		#unlike tweet
		#remove entry from LIKE table and decrement like_counter associated with the tweet_id
		Likes.objects.filter(tweet_id = tweetID, user_id = current_user_id).delete()
		dec_counter = Tweet.objects.get(id = tweetID)
		dec_counter.like_counter -=1 
		dec_counter.save()
		tweet = Tweet.objects.get(id = tweetID)
		tweet_data = serializers.serialize("json", [tweet])
		return tweet_data, 0
	return 0
