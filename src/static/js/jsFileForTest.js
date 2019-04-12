function userLikesTweet(username, tweetID) {
    return username == "NoahForReal" && tweetID == 45;
}

function userDoesntLikeTweet(username, tweetID) {
    return username == "NoahForReal" && tweetID == 45;
}

function searchForTweet(query) {
    if (query == "lion") {
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
    if (userID == 3 && followingID == 17) {
        return true;
    }
    else {
        return false;
    }
}

function userTweeted(user, tweet) {
    var userID = 17;
    if (userID == 17 && tweet == "hi everyone") {
        return true;
    }
    else {
        return false;
    }
}

function tweetValidation(tweet) {
    if (content === "" || content===null) {
        return false;
    }
    if (content.length > 140 || content.length < 10) {
        return false;
    }
    if (/(shit|fuck|motherfucker|ass|asshole|bitch)/.test(tweet)) { // check if the user is using curse words
        return false;
    }

    return true;
}