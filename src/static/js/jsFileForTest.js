function userLikesTweet(username, tweetID) {
    return username == "NoahForReal" && tweetID == 45;
}

function userDoesntLikeTweet(username, tweetID) {
    return username == "NoahForReal" && tweetID == 45;
}

function searchForTweet(query) {
    if query == "lion" {
        var tweetID = 22;
        return tweetID;
    }
    else {
        return -1;
    }
}

function userFollows(user, follows) {
    var userID = 3;
    var followingID = 17;
    if userID == 3 && followingID == 17 {
        return true;
    }
    else {
        return false;
    }
}

function userTweeted(user, tweet) {
    var userID = 17;
    if userID == 17 && tweet == "hi everyone" {
        return true;
    }
    else {
        return false;
    }
}
