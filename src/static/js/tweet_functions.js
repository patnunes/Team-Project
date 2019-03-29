var ServerResponses = {
    SUCCESS: 'success',
    INVALID_CREDENTIALS: 'invalid user or email',
    OTHER: "other",
    FAILURE: 'fail'
};
var tweet_json = `{
    "tweets": [
        {"UserName": "User1", "UserHandle": "@user1", "profile_picture": "static/assets/user_placeholder.jpeg", "content": "This is a tweet from user one", "likes":0, "liked":false},
        {"UserName": "User2", "UserHandle": "@user2", "profile_picture": "static/assets/user_placeholder.jpeg", "content": "This is a tweet from user two, user two felt like writing a longer tweet today", "likes":4, "liked":true},
        {"UserName": "User3", "UserHandle": "@user3", "profile_picture": "static/assets/user_placeholder.jpeg", "content": "This is a tweet from user three, user three is particularly chatty today. He most likey feels like writing something politcal, but feels he should save that for when we make facebook.", "likes":2, "liked":true},
        {"UserName": "User4", "UserHandle": "@user4", "profile_picture": "static/assets/user_placeholder.jpeg", "content": "This is a tweet from user four. User four might want to use all of the possible characters in a tweet, he might say something like wow, I can write so much here. So many potential combinations of words which could be used to simultaneously offend User 3 as well as make me look uneducated. What a wonderous site this is, I shall use it to tell everyone about everything I do.", "likes":100, "liked":false}
    ]
}`



function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    console.log("match: " + match);
    if (match) return match[2];
}

function delete_cookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1941 00:00:01 GMT;';
};

var username;
//getting the name of the html file that is using this js file:
var path = window.location.pathname;
var pagename = path.split("/").pop();
var ACTIVE_USER;
var VISITING_USER;

if (pagename=="myprofile.html"){
    ACTIVE_USER = getCookie("UserName");
    console.log(username);
    CURRENT_ACTION = ACTIVE_USER;
}
if (pagename=="profile.html"){
    ACTIVE_USER = getCookie("UserName");
    console.log(username);
    CURRENT_ACTION = getCookie("FriendsName");
    console.log("username: " + username);   
}
if (pagename=="dashboard.html"){
    ACTIVE_USER = getCookie("UserName");
    console.log(username);
    CURRENT_ACTION = "dashboard";
}

if (typeof ACTIVE_USER === 'undefined') {
    window.location.replace("signin.html"); 
};

var CURRENT_ACTION;
var USER;

console.log(tweet_json);

$(document).ready(function() {
    // var mockUser = new Object();
    var username = ACTIVE_USER;
    var currentAction = CURRENT_ACTION;


// INTEGRATION OF BACKEND ////////////////////////////////////////////
    console.log(username);
    console.log(JSON.stringify(username));
   
    window.tweets_js_call = "";
  
    var request = new Object();
    request.userName = username;
    request.action = currentAction;
    

    var populateTweets = function() {
        $.post("/populate_tweets", JSON.stringify(request), function(m_response){
            console.log("post/populate_tweets: m_response.status: " + m_response.status);
            switch (m_response.status) {
                case ServerResponses.SUCCESS:
                    tweets_js_call = m_response.tweets;
                    console.log(tweets_js_call);
                    fillForm(tweets_js_call);
                    break;
                case ServerResponses.OTHER:
                    console.log("failed getting tweets in tweet_functions");
                    break;
                default:
                    // DEBUG: alert("Uknown Error");
            }
        })
    }
    populateTweets();

    window.refreshTweets = function() {
        $('#feed').empty();
        populateTweets();
    }

    var fillForm = function(tweets_js_call){

        console.log("tweets: " + tweets_js_call);
        var likes;
        var like_icon;
    
        $('#feed').empty();
        for (i = 0; i < tweets_js_call.length; i++) {

            tweets_js_call[i].liked = false;
            // console.log("i = " + i)
            // console.log("likes = " + tweets_js_call[i].like_counter);
            likes = tweets_js_call[i].like_count > 0 ? tweets_js_call[i].like_counter : "";
            like_icon = tweets_js_call[i].liked ? `<i class="fas fa-heart icon liked"></i>` : `<i class="far fa-heart icon notLiked"></i>`; //${tweets_js_call[i].profile_picture} 
            // console.log(tweets_js_call[i].timestamp)
            var time = moment(tweets_js_call[i].timestamp, "YYYY-MM-DDTHH:mm:ssZ").fromNow();
            // console.log(time)
            $('#feed').append(
                `<div class="row tweet rounded pt-3 mt-3 pb-4 mb-4" id="tweet${i}">
                    <div class="col-2 pr-0">
                        <img src="static/assets/default_crab.png" class="mx-auto d-block img-fluid rounded mt-2" alt=""> 
                    </div>
                    <div class="col-10 tweet_text">
                        <div class="row">
                            <div class="col-8">
                                <div class="top"><span onclick="goToUser(${i})"><span class="userName">${tweets_js_call[i].user__username}</span> <span class="userHandle">@${tweets_js_call[i].user__username}</span></span></div>
                            </div>
                            <div class="col-4 text-right">
                                <span class="time_span">${time}</span>
                            </div>
                        </div>
                        <p class="tweetContent">${tweets_js_call[i].content}</p>
                    
                        <!-- Icon Row -->
                        <div class="row icon_row">
                            <div class="col-3 like_col pr-0">
                                <span class="like_text" onclick="like(${i})">${like_icon}<span class="likes">${likes}</span></span> 
                            </div>    
                        </div>
                    </div>
                </div>`
            );
            setInitialLike(i);
        }    
    }

    var setInitialLike = function(i){
        var tweet = new Object;
        tweet.userName = username;
        tweet.tweet_ID = tweets_js_call[i].id;
        $.post("/is_liked", JSON.stringify(tweet), function(m_response){
            console.log("post/like: m_response.status: " + m_response.status);
            console.log("post/like: index: " + i);
            console.log("post/like: tweet: " + tweet.userName);
            console.log("post/like: tweet: " + tweet.tweet_ID);
            switch (m_response.status) {
                case ServerResponses.SUCCESS:
                    // updateTweetentry(index, m_response.
                    console.log("post/like: isLiked: " + m_response.isLiked);
                    updateTweetLikes(i, true, m_response.isLiked);
                    break;
                case ServerResponses.OTHER:
                    break;
                default:
                    // DEBUG: alert("Uknown Error");
            }
        })
    }

    window.like = function(index){
        updateTweetLikes(index, false, false); // like regardless of confirmation from server, this prevents delays in UI
        console.log("inside Jquery boiiii");
        var tweet = new Object;
        console.log(tweets_js_call[index].id);
        tweet.tweet_ID = tweets_js_call[index].id;
        tweet.userName = username;
        console.log("tweet strinigfy: " + JSON.stringify(tweet))
        $.post("/like", JSON.stringify(tweet), function(m_response){
            console.log("post/like: m_response.status: " + m_response.status);
            switch (m_response.status) {
                case ServerResponses.SUCCESS:
                    // updateTweetentry(index, m_response.
                    break;
                case ServerResponses.OTHER:
                    console.log("failed liking tweet")
                    updateTweetLikes(index, false, false); // undo the like
                    break;
                default:
                    // DEBUG: alert("Uknown Error");
            }
        })
    }

    var updateTweetLikes = function(index, initialSet, isLiked){
        console.log("updateTweetLikes: index: " + index + ", initialSet: " + initialSet + ", isLiked: " + isLiked);
        if (initialSet) {
            like_icon = isLiked ? `<i class="fas fa-heart icon liked"></i>` : `<i class="far fa-heart icon notLiked"></i>`;
            tweets_js_call[index].liked = isLiked;
            like_count = tweets_js_call[index].like_counter;
            like_count = like_count == 0 ? "" : like_count;
        } else {
            like_icon = !tweets_js_call[index].liked ? `<i class="fas fa-heart icon liked"></i>` : `<i class="far fa-heart icon notLiked"></i>`;
            like_count = !tweets_js_call[index].liked ? (tweets_js_call[index].like_counter + 1) : (tweets_js_call[index].like_counter - 1);
            tweets_js_call[index].liked = !tweets_js_call[index].liked;
            tweets_js_call[index].like_counter = like_count; 
            like_count = like_count == 0 ? "" : like_count;
        }
        $(`#tweet${index}`).children(".tweet_text").children(".icon_row").children(".like_col").html(`<span class="like_text" onclick="like(${index})">${like_icon}<span class="likes">${like_count}</span></span>`);
    }

    window.goToUser = function(index){
        var user = tweets_js_call[index].user__username;

        if (user == ACTIVE_USER){
        window.location.replace("myprofile.html"); 
        }
        else {
        document.cookie = "FriendsName" + "=" + user; //for testing!
        window.location.replace("profile.html"); 
        }   
    }
})

function like(index){
    // html can only call non-jquery functions, jquery will intercept this call at window.like above.
}

function goToUser(index){
    // html can only call non-jquery functions, jquery will intercept this call at window.goToUser above.
}

function refreshTweets(callingFile){
    console.log("refreshTweets: calledFrom" + callingFile);
}


 
