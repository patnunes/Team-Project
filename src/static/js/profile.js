var followerCount = 0;

$(document).ready(function() {
    const ACTIVE_USER = "NoahForReal";
    const VISITING_USER = "test2";

    // getInfo();



    $('#log_out').click(function(){
        window.location = "signin.html"
    });

    $('#dashboard').click(function(){
       window.location = "index.html"
    });

    $('#my_profile').click(function(){
        window.location = "myprofile.html"
    });

    $('#follow_user').click(function(){
        var action = $(this).text() == "Follow" ? "follow" : "unfollow";
        console.log(action);
        follow(action);
        toggleFollowButton();

        // make follow request
    });



    var getInfo = function(){
        var request = new Object;
        request.userName1 = ACTIVE_USER;
        request.userName2 = VISITING_USER;
        $.post("/get_info", JSON.stringify(tweet), function(m_response){
            console.log("post/like: m_response.status: " + m_response.status);
            switch (m_response.status) {
                case ServerResponses.SUCCESS:
                    // updateTweetentry(index, m_response.
                    setFollowButton(m_response.following)
                    setFollowersCount(m_response.num_following)
                    break;
                case ServerResponses.OTHER:
                    alert("failed liking tweet")
                    updateTweetLikes(index); // undo the like
                    break;
                default:
                    // DEBUG: alert("Uknown Error");
            }
        })
        .fail(function() {
            updateTweetLikes(index); // undo the like
        });
    }

    

    var follow = function(action){
        var request = new Object;
        request.userName1 = ACTIVE_USER;
        request.userName2 = VISITING_USER;
        request.action = action;
        console.log("post/follow: follow=follow: " + (action == "follow"));
        $.post("/follow", JSON.stringify(request), function(m_response){
            console.log("post/like: m_response.status: " + m_response.status);
            switch (m_response.status) {
                case ServerResponses.SUCCESS:
                    if (action == "follow") {
                        $("#followerCounter").text(function(i, text){
                            return (parseInt(text) + 1);
                        })
                    } else {
                        $("#followerCounter").text(function(i, text){
                            return (parseInt(text) - 1);
                        })
                    }
                case ServerResponses.OTHER:
                    alert("failed following User")
                    toggleFollowButton(); // undo the follow
                    break;
                default:
                    // DEBUG: alert("Uknown Error");
            }
        })
    }

    var setFollowButton = function(following){
        if (following) {
            $("#follow_user").addClass("btn-primary");
            $("#follow_user").removeClass("btn-outline-primary");
            $("#follow_user").text("Following")
        }
    }

    var toggleFollowButton = function(){
        $("#follow_user").toggleClass("btn-primary");
        $("#follow_user").toggleClass("btn-outline-primary");
        $("#follow_user").text(function(i, text){
            return text == "Follow" ? "Following" : "Follow";
        })
        $("#follow_user").blur();
    }


    var setFollowersCount = function(){

    }



});