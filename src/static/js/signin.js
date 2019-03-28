var ServerResponses = ServerResponses = {
    SUCCESS: 'success',
    INVALID_CREDENTIALS: 'invalid user or email'
};
$(document).ready(function() {
    $("#submit_btn").click(function(){
        $('#userNameWarning').text('');
        $('#passwordWarning').text('');
        login();
    });

    var login = function(){
        var error = 0;
        var userName = $('#inputUserName').val();
        var password = $('#inputPassword').val();


        if (userName == null || userName == ''){
        $('#userNameWarning').text("Username required");
        error = 1;
        }

        if (password == null || password == ''){
            $('#passwordWarning').text('Password is required');
        error = 1
        }

        if (error == 0){
            var user = new Object();
            user.userName = userName;
            user.password = password;
            // DEBUG: alert("This is the JSON produced: " + JSON.stringify(user));
            $.post("/signin_submit", JSON.stringify(user), function(m_response){
                switch (m_response.status) {
                    case ServerResponses.SUCCESS:
                        document.cookie = "FriendsName" + "=" + "test2"; //for testing!
                        document.cookie = "UserName" + "=" + userName;
                        window.location.replace("dashboard.html"); 
                        break;
                    case ServerResponses.INVALID_CREDENTIALS:
                        $('#userNameWarning').text("Error in credentials. Please try again.");
                        break;
                    default:
                        // DEBUG: alert("Uknown Error");
                }
            })
        }
    };
});
