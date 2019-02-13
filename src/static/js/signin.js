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
            alert("This is the JSON produced: " + JSON.stringify(user));
            $.get("/signin_submit", JSON.stringify(user), function(m_response){
                alert(m_response.status)
                switch (m_response.status) {
                    case ServerResponses.SUCCESS:
                            //User was created, and can move to dashboard page.
                            //TODO: create dashboard page, and force open when successful user login occurs.
                        break;
                    case ServerResponses.INVALID_CREDENTIALS:
                        $('#userNameWarning').text("Username already in use");
                        break;
                    default:
                        alert("Uknown Error, please contact your local zoo or webMD");
                }
            })
        } 
    };
});
