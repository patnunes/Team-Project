
$(document).ready(function() {

    $("#submit_btn").click(function(){
        $('#userNameWarning').text('');
        $('#confirmPasswordWarning').text('');
        checkData();
    });

    var checkData = function(){
        var error = 0;
        var userName = $('#inputUserName').val();
        var email = $('#inputEmail').val();
        var password = $('#inputPassword').val();
        var confirmPassword = $('#confirmInputPassword').val();
        

        if (userName == null || userName == ''){
            $('#userNameWarning').text("Please Fill User Name Field");
            error = 1;
        }
    
    
        
        if (password != confirmPassword){
            $('#confirmPasswordWarning').text('Your passwords don\'t match');
            error = 1
        }

        if (error == 0){
           var newUser = new Object();
           newUser.email = email;
           newUser.userName = userName;
           newUser.password = password;
           alert("This is the JSON produced: " + JSON.stringify(newUser));
           $.post("users_server.asp", JSON.stringify(newUser), function(m_status){
                alert(m_status)
                switch (m_status) {
                    case ServerResponses.SUCCESS:
                        //User was created, and can move to signin page.
                        // TODO: create signin page, and force open when successful user creation occurs.
                        break;
                    case ServerResponses.USER_NAME_IN_USE:
                        $('#userNameWarning').text("Username already in use");
                        break;
                    case ServerResponses.EMAIL_IN_USE:
                        $('#emailWarning').text("This email is already in use");
                        break;
                    default:
                        alert("Uknown Error, please contact your local zoo or webMD");
                }
           })
        }
    };
});
