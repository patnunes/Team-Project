from .models import User, Follow


# method to get the ids of all the users the given user follows
def get_following_ids(username):

    current_user_id = User.objects.get(username=username).pk

    # returns a list of follow_ids that the current user is following
    following_ids = Follow.objects.values_list('follow_id', flat=True).filter(
        user_id=current_user_id).filter(is_following=1)[::1]
    following_ids.append(current_user_id)
    return following_ids


# method to get the ids of all the users following the given user
def get_followers_ids(username):

    current_user_id = User.objects.get(username=username).pk

    # return a list of follow_ids that follow the current user
    follower_ids = Follow.objects.values_list('follow_id', flat=True).filter(
        user_id=current_user_id).filter(is_following=0)[::1]
    return following_ids



# method to make user1 follow user2
def follow(user1, user2):

    # get the IDs for the two users
    current_user_id=User.objects.get(username = user1).pk
    to_follow_id=User.objects.get(username = user2).pk

    # make user1 follow user2
    following=Follow(user_id = current_user_id,
                        follow_id = to_follow_id, is_following = 1)
    following.save()

    # tell user2 that user1 follows them
    follower=Follow(user_id = to_follow_id,
                        follow_id = current_user_id, is_following = 0)
    follower.save()

    return 0


# method to make user1 unfollow user2
def unfollow(user1, user2):
    current_user_id=User.objects.get(username = user1).pk
    to_follow_id=User.objects.get(username = user2).pk

    # delete the follow relationship
    unfollowing=Follow.objects.get(user = current_user_id,
                                    follow_id = to_follow_id,
                                    is_following = 1).delete()

    # delete the follower relationship
    unfollower=Follow.objects.get(user = to_follow_id,
                                    follow_id = current_user_id,
                                    is_following = 0).delete()

    return 0

def follows(user1, user2):
    current_user_id=User.objects.get(username = user1).pk
    follows_user_id=User.objects.get(username = user2).pk

    # check if user1 follows user2
    follows=Follow.objects.filter(user = current_user_id, follow_id = follows_user_id, is_following = 1).exists()

    if follows is True:
        return True

    return False


def followers(username):
    user_id = User.objects.get(username = username).pk

    followers = Follow.objects.filter(follow_id = user_id, is_following=1).count()

    return followers
