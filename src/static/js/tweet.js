var ServerResponses = ServerResponses = {
    SUCCESS: 'success'
};


function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    //console.log("match: " + match);
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


ACTIVE_USER = getCookie("UserName");
//console.log("ACTIVE_USER: " + ACTIVE_USER)
// if (pagename=="myprofile.html"){
//     ACTIVE_USER = getCookie("UserName");
//     //console.log(username)
// }

// if (pagename=="profile.html"){
//     VISITING_USER = getCookie("FriendsName");
//     //console.log("VISITING_USER: " + VISITING_USER);
//     //console.log("pagenamecheck");
//     ACTIVE_USER = getCookie("UserName");
//     //console.log("ACTIVE_USER: " + ACTIVE_USER);

// }

$(document).ready(function() {

    $("#tweet_btn").click(function(){

        var validateTweet = function(){

            var error = 0;
            // var ACTIVE_USER = $('#userName');     // This is broken. Doesn't take from header with id userName in profile.html.
            var tweetContent = $('#tweet_content').val();

            // Check for nothing entered as a message.
            if(tweetContent == null || tweetContent == ''){
                $('#noContentWarning').text('That\'s a pretty boring message. Try typing something.');
                error = 1;
            }

            if(error == 0){
                var tweet = new Object();
                tweet.userName = ACTIVE_USER;
                tweet.content = tweetContent;


                $.post("/tweet_submit", JSON.stringify(tweet), function(m_response){
                    //alert(m_response.status)
                    switch(m_response.status){
                        case ServerResponses.SUCCESS:
                            $(`#tweet_content`).val("");
                            refreshTweets("tweets.js");
                            break;
                        default:
                            alert("[cheeky error message]");
                    }
                })
            }
        };

        $('#noContentWarning').text('');
        validateTweet();
    });
});
