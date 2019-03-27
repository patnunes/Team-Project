function getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
}
 function delete_cookie(name) {
   document.cookie = name + '=;expires=Thu, 01 Jan 1941 00:00:01 GMT;';
};

var username = getCookie("UserName");

const replaced = document.querySelectorAll(".replacer");

for(i = 0; i < replaced.length; i++)
{
    replaced[i].innerText = username;
}
$(document).ready(function() {
    const ACTIVE_USER = "user1";
    const VISITING_USER = "test2";

    



    $('#log_out').click(function(){
        delete_cookie("UserName")
        window.location = "signin.html"
    });

    $('#dashboard').click(function(){
       window.location = "dashboard.html"
    });

    $('#my_profile').click(function(){
        window.location = "myprofile.html"
    });

    $('#follow_user').click(function(){
        var action = $(this).text() == "Follow" ? "follow" : "unfollow";
        var antiAction = $(this).text() != "Follow" ? "follow" : "unfollow";
        console.log(action);
        follow(action, antiAction);
        toggleFollowButton();

        // make follow request
    });


   
    var getInfo = function(){
        var request = new Object;
        request.userName1 = ACTIVE_USER;
        request.userName2 = VISITING_USER;
        $.post("/get_info", JSON.stringify(request), function(m_response){
            console.log("post/like: m_response.status: " + m_response.status);
            console.log("num-follwoing:" + m_response.num_following);
            switch (m_response.status) {
                case ServerResponses.SUCCESS:
                    console.log("num-follwoing:" + m_response.num_followers);
                    setFollowButton(m_response.following);
                    setFollowersCount(m_response.num_followers);
                    break;
                case ServerResponses.OTHER:
                    alert("failed getting info");
                
                    break;
                default:
                    // DEBUG: alert("Uknown Error");
            }
        })
        .fail(function() {
        
        });
    }

    getInfo();

    

    var follow = function(action, antiAction){
        var request = new Object;
        request.userName1 = ACTIVE_USER;
        request.userName2 = VISITING_USER;
        request.action = action;
        setFollowers(action);
        console.log("post/follow: action: " + (action));
        $.post("/follow", JSON.stringify(request), function(m_response){
            console.log("post/like: m_response.status: " + m_response.status);
            switch (m_response.status) {
                case ServerResponses.SUCCESS:
                    break;
                case ServerResponses.OTHER:
                    alert("failed following User")
                    toggleFollowButton(); // undo the follow
                    setFollowers(antiAction);
                    break;
                default:
                    // DEBUG: alert("Uknown Error");
            }
        })
        .fail(function() {
            toggleFollowButton(); // undo the follow
        });
    }

    var setFollowButton = function(following){
        if (following) {
            $("#follow_user").addClass("btn-primary");
            $("#follow_user").removeClass("btn-outline-primary");
            $("#follow_user").text("Following")
        }
    }

    var setFollowers = function(action){
        if (action == "follow") {
            $("#followerCounter").text(function(i, text){
                return (parseInt(text) + 1);
            })
        } else {
            $("#followerCounter").text(function(i, text){
                return (parseInt(text) - 1);
            })
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


    var setFollowersCount = function(count){
        $("#followerCounter").text(count);
    }
});