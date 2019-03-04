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
    // var mockUser = "mockUser"; 


// START TEST /////////////////////////////////////////////

    // var tweet_json = "X"; //read from file
    window.tweets_js = JSON.parse(tweet_json);
    console.log(tweets_js);
    tweets_js = tweets_js.tweets; 
    console.log(tweets_js);
    console.log(tweets_js[0]);
    var i = 0;
    const markup = `
    <div class="row tweet rounded pt-2 pb-2">
        <div class="col-1 pr-0">
            <img src="${tweets_js[i].profile_picture}" class="mx-auto d-block img-fluid rounded-circle mt-2" alt="">
        </div>
        <div class="col-11 tweet_text">
            <span onclick="goToUser(${i})"><span class="userName">${tweets_js[i].UserName}</span> <span class="userHandle">${tweets_js[i].UserHandle}</span></span>
            <p>${tweets_js[i].content}</p>
        
            <!-- Icon Row -->
            <div class="">
                <span onclick="like(${i})"><i class="far fa-heart icon"></i><span class="likes">${likes}</span></span> 
            </div>
        </div>
    </div>
    `;
    var tweet;
    var likes;
    var like_icon;
    var iconRow;
    for (i = 0; i < tweets_js.length; i++) {

        // $('#tweetField').append(markup);
        console.log("i = " + i)
        console.log("likes = " + tweets_js[i].likes);
        likes = tweets_js[i].likes > 0 ? tweets_js[i].likes : "";
        like_icon = tweets_js[i].liked? `<i class="fas fa-heart icon liked"></i>` : `<i class="far fa-heart icon notLiked"></i>`;
        $('#mock_feed').append(
            `<div class="row tweet rounded pt-2 mt-2 pb-2 mb-2" id="tweet${i}">
                <div class="col-2 pr-0">
                    <img src="${tweets_js[i].profile_picture}" class="mx-auto d-block img-fluid rounded-circle mt-2" alt="">
                </div>
                <div class="col-10 tweet_text">
                    <span onclick="goToUser(${i})"><span class="userName">${tweets_js[i].UserName}</span> <span class="userHandle">${tweets_js[i].UserHandle}</span></span>
                    <p>${tweets_js[i].content}</p>
                
                    <!-- Icon Row -->
                    <div class="row icon_row">
                        <div class="col-3 like_col pr-0">
                            <span onclick="like(${i})">${like_icon}<span class="likes">${likes}</span></span> 
                        </div>    
                    </div>
                </div>
            </div>`
        ); //for test
    }
    

  


// END TEST /////////////////////////////////////////////



    // // TODO: Make query
    // $.get("/tweets_for_user", JSON.stringify(mockUser))
    //     //TODO: Retrieve result
    //     .fail(function () {
    //         //TODO: notify user of failure with message
    //     })
    //     .done(function(tweets_json) {
    //         var tweets = JSON.parse(tweets_json);
    //         const markup = `
    //             <div class="row tweet rounded pt-2 pb-2">
    //                 <div class="col-1 pr-0">
    //                     <img src="${tweets[i].profile_picture}" class="mx-auto d-block img-fluid rounded-circle mt-2" alt="">
    //                 </div>
    //                 <div class="col-11 tweet_text">
    //                     <span onclick="goToUser(${i})"><span class="userName">${tweets[i].UserName}</span> <span class="userHandle">${tweets[i].Userhandle}</span></span>
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
    //                     <!-- Icon Row -->
    //                     <div class="">
    //                         <span onclick="like(${i})"><i class="far fa-heart icon"></i></span> 
    //                     </div>
    //                 </div>
    //             </div>
    //             `;
                
    //             for (var i = 0; i < tweets.length; i++) {
    //                 $('#tweetField').append(markup);
    //             }
            
    //         //TODO: Parse results into array of tweet objects
    //         //TODO: Cycle through tweet objects and populate template
    //         //TODO: Publish each template to website using append
    //     });


    
    
    
    
    //TODO: Create goToAuthor function and backend query
    //TODO: Create like function and backend query
    

});


 function like(index){
    like_icon = !tweets_js[index].liked ? `<i class="fas fa-heart icon liked"></i>` : `<i class="far fa-heart icon notLiked"></i>`;
    like_count = !tweets_js[index].liked ? (tweets_js[index].likes + 1) : (tweets_js[index].likes - 1);
    tweets_js[index].liked = !tweets_js[index].liked;
    tweets_js[index].likes = like_count; 
    // console.log( $(`#tweet${index}`));
    console.log($(`#tweet${index}`).children(".tweet_text").children(".icon_row").children(".like_col"));
    $(`#tweet${index}`).children(".tweet_text").children(".icon_row").children(".like_col").html(`<span onclick="like(${index})">${like_icon}<span class="likes">${like_count}</span></span>`);
}