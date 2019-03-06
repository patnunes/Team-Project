function ValidateEmail(mail) 
{
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function ValidateUsername(username)
{
lower_case_username = username.toLowerCase();
    if (username ==="")
return false;
if (username.length<3)
return false;
if (username.charAt(0)!= isNaN)
return false;
return lower_case_username;
}



var ServerResponses = ServerResponses = {
                            SUCCESS: 'success',
                            USER_NAME_IN_USE: 'user in use',
                            EMAIL_IN_USE: 'email in use',
};
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
           alert("This is the String of ServerResponses.SUCCESS: " + ServerResponses.SUCCESS);
           $.post("/signup_submit", JSON.stringify(newUser), function(m_response){
                alert(m_response.status)
                switch (m_response.status) {
                    case ServerResponses.SUCCESS:
                        alert("user successfully created!")
                        document.location.href = "signin.html"
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
