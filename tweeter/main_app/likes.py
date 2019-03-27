from .models import Tweet, User, Follow, Likes

def user_has_liked_tweet(username, tweetID): 
    #getting the userid
    current_user_id = User.objects.get(username = username).pk

    #checking isuser has liked tweet
    isLiked = Likes.objects.filter(tweet = tweetID, user = current_user_id).exists()
    if isLiked is False:
        return 3
    return 0

