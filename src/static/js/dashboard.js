$('#my_profile').click(function(){
    window.location="myprofile.html"
});

$('#log_out').click(function(){
    window.location = "signin.html"
});



// For search Button:
var ServerResponses = ServerResponses = {
    SUCCESS: 'success',
    INVALID_CREDENTIALS: 'invalid username'
};
$(document).ready(function() {
    $("#search").click(function(){
        $('#userNameWarning').text('');
        login();
    });

    var login = function(){
        var error = 0;
        var userName = $('#searchbox').val();
        
        if (userName == null || userName == ''){
        $('#searchWarning').text("The field is empty!");
        error = 1;
        }

        if (error == 0){
            
            var user = new Object();
            user.userName = userName;
            
                       
            // DEBUG: alert("This is the JSON produced: " + JSON.stringify(user));
            $.post("/search_submit", JSON.stringify(user), function(m_response){
                switch (m_response.status) {
                    case ServerResponses.SUCCESS:
                            //User was created, and can move to dashboard page.
                            //TODO: create dashboard page, and force open when successful user login occurs.
                           document.cookie = "UserName" + "=" + userName;
                        window.location.replace("profile.html"); 
                        break;
                    case ServerResponses.INVALID_CREDENTIALS:
                        $('#searchWarning').text("The user is not found in our database");
                        break;
                    default:
                        // DEBUG: alert("Uknown Error");
                }
            })
        }
    };
});

