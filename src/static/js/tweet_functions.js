$(document).ready(function() {
    var mockUser = "mockUser";


    //TODO: Make query
    $.get("/tweets_for_user", JSON.stringify(mockUser))
        //TODO: Retrieve result
        .fail(function () {
            //TODO: notify user of failure with message
        })
        .done(function(tweets_json) {
            var tweets = JSON.parse(tweets_json);
            const markup = `
                <div class="row tweet rounded pt-2 pb-2">
                    <div class="col-1 pr-0">
                        <img src="${tweets[i].profile_picture}" class="mx-auto d-block img-fluid rounded-circle mt-2" alt="">
                    </div>
                    <div class="col-11 tweet_text">
                        <span onclick="goToUser(${i})"><span class="userName">${tweets[i].UserName}</span> <span class="userHandle">${tweets[i].Userhandle}</span></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                        <!-- Icon Row -->
                        <div class="">
                            <span onclick="like(${i})"><i class="far fa-heart icon"></i></span> 
                        </div>
                    </div>
                </div>
                `;
                
                for (var i = 0; i < tweets.length; i++) {
                    $('#tweetField').append(markup);
                }
            
            //TODO: Parse results into array of tweet objects
            //TODO: Cycle through tweet objects and populate template
            //TODO: Publish each template to website using append
        })
    
    
    
    
    //TODO: Create goToAuthor function and backend query
    //TODO: Create like function and backend query
    

});