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

console.log(tweet_json);

$(document).ready(function() {
    // var mockUser = new Object();
    var username = "test2";


// INTEGRATION OF BACKEND ////////////////////////////////////////////
    console.log(username);
    console.log(JSON.stringify(username));
    // $.get("/get_tweets", username, function(m_response){
    //     switch (m_response.status) {
    //         case ServerResponses.SUCCESS:
    //             console.log()
    //     }
    // })
    window.tweets_js_call = "";
    $.ajax({
        url: "/get_tweets",
        method: "GET",
        data: { 
         username:"test2"
     },
        success: function(data){
            console.log(data)
            window.tweets_js_call = JSON.parse(data);
            console.log(tweets_js_call);
            fillForm(tweets_js_call);
        }
     })


    var fillForm = function(tweets_js_call){
        
       

        console.log("tweets: " + tweets_js_call);
        var tweet;
        var likes;
        var like_icon;
        var iconRow;

        for (i = 0; i < tweets_js_call.length; i++) {

            tweets_js_call[i].liked = false;
            console.log("i = " + i)
            console.log("likes = " + tweets_js_call[i].like_counter);
            likes = tweets_js_call[i].like_count > 0 ? tweets_js_call[i].like_counter : "";
            like_icon = tweets_js_call[i].liked ? `<i class="fas fa-heart icon liked"></i>` : `<i class="far fa-heart icon notLiked"></i>`; //${tweets_js_call[i].profile_picture} 
            console.log(tweets_js_call[i].timestamp)
            var time = moment(tweets_js_call[i].timestamp, "YYYY-MM-DDTHH:mm:ssZ").fromNow();
            console.log(time)
            $('#feed').append(
                `<div class="row tweet rounded pt-3 mt-3 pb-4 mb-4" id="tweet${i}">
                    <div class="col-2 pr-0">
                        <img src="static/assets/user_placeholder.jpeg" class="mx-auto d-block img-fluid rounded-circle mt-2" alt=""> 
                    </div>
                    <div class="col-10 tweet_text">
                        <div class="row">
                            <div class="col 8">
                                <span class="top" onclick="goToUser(${i})"><span class="userName">${tweets_js_call[i].user__username}</span> <span class="userHandle">@${tweets_js_call[i].user__username}</span></span>
                            </div>
                            <div class="col 4 text-right">
                                <span class="time_span">${time}</span>
                            </div>
                        </div>
                        <p>${tweets_js_call[i].content}</p>
                    
                        <!-- Icon Row -->
                        <div class="row icon_row">
                            <div class="col-3 like_col pr-0">
                                <span class="like_text" onclick="like(${i})">${like_icon}<span class="likes">${likes}</span></span> 
                            </div>    
                        </div>
                    </div>
                </div>`
            ); 
        }

        // var likeRequest = new Object;
        // for(i=0; i < tweets_js_call.length; i++) {
        //     likeRequest.username = "test2";
        //     likeRequest.tweetID = tweets_js_call[i].id;
        //     likeRequest.index = i;
        //     $.post("/like", JSON.stringify(likeRequest), function(m_response){
        //         async:false;
        //         switch (m_response.status) {
        //             case ServerResponses.OTHER:
        //                 setInitialLike(likeRequest.index, false, tweets_js_call);
        //                 break;
        //             case ServerResponses.SUCCESS:
        //                 setInitialLike(likeRequest.index, true, tweets_js_call);
        //                 break;
        //             default:
        //                 setInitialLike(likeRequest.index, false, tweets_js_call);
        //                 break;
        //         }
        //    });
        // }

        //     $.ajax({
        //         url: "/like",
        //         method: "POST",
        //         data: { 
        //             username: "test2",
        //             tweetID: tweets_js_call[i].id,
        //         },
        //         success: function(m_response) {
        //             switch (m_response.status) {
        //                 case ServerResponses.OTHER:
        //                     setInitialLike(likeRequest.index, false, tweets_js_call);
        //                     break;
        //                 case ServerResponses.SUCCESS:
        //                     setInitialLike(likeRequest.index, true, tweets_js_call);
        //                     break;
        //                 default:
        //                     setInitialLike(likeRequest.index, false, tweets_js_call);
        //                     break;
        //             }
        //         },
        //         async: false,
        //     })
        
        // }

        // var setInitialLike = function(index, boolean, tweets_js_call){
        //     like_icon = boolean ? `<i class="fas fa-heart icon liked"></i>` : `<i class="far fa-heart icon notLiked"></i>`;
        //     tweets_js_call[index].liked = boolean;
        //     // console.log( $(`#tweet${index}`));
        //     console.log($(`#tweet${index}`).children(".tweet_text").children(".icon_row").children(".like_col"));
        //     $(`#tweet${index}`).children(".tweet_text").children(".icon_row").children(".like_col").html(`<span class="like_text" onclick="like(${index})">${like_icon}<span class="likes">${tweets_js_call[index].like_count}</span></span>`);
        // }        
      
    }
})

function like(index){
    like_icon = !tweets_js_call[index].liked ? `<i class="fas fa-heart icon liked"></i>` : `<i class="far fa-heart icon notLiked"></i>`;
    like_count = !tweets_js_call[index].liked ? (tweets_js_call[index].like_counter + 1) : (tweets_js_call[index].like_counter - 1);
    tweets_js_call[index].liked = !tweets_js_call[index].liked;
    tweets_js_call[index].like_counter = like_count; 
    like_count = like_count == 0 ? "" : like_count
    // console.log( $(`#tweet${index}`));
    console.log($(`#tweet${index}`).children(".tweet_text").children(".icon_row").children(".like_col"));
    $(`#tweet${index}`).children(".tweet_text").children(".icon_row").children(".like_col").html(`<span class="like_text" onclick="like(${index})">${like_icon}<span class="likes">${like_count}</span></span>`);
}

        // //TODO: Retrieve result
        // .fail(function () {
        //     //TODO: notify user of failure with message
        // })
        // .done(function(tweets_json) {
        //     console.log(tweets_json);
        //     //TODO: Parse results into array of tweet objects
        //     //TODO: Cycle through tweet objects and populate template
        //     //TODO: Publish each template to website using append
        // });
    

// START TEST /////////////////////////////////////////////




 



    //ajax post to tell server the user has just liked tweet at index in tweets_js_call
    // var likeObject = new Object();
    // likeObject.username = user;
    // likeObject.tweetID = tweets_js_call[index].id;
    // likeObject.liked = tweets_js_call[index].liked;
    // $.post("/like", JSON.stringify(likeObject), function(m_response){
    //     switch(m_response.status){
    //         case ServerResponses.SUCCESS:
    //             break;
    //         case ServerResponses.FAILURE:
    //             alert("tweet could not be liked");
    //             break;
    //     }

    