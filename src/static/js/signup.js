function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
    return (false)
}

function ValidateUsername(username)
{
    lower_case_username = username.toLowerCase();
    if (username ==="")
    return false;
    if (username.length<3)
    return false;
    
    if (!isNaN(username.charAt(0)))
    return false;
  
    return lower_case_username;
}

function ValidatePassword(password)
{
    if (password ==="")
    return false;
    if (password.length<3)
    return false;
    
    if (!/[0-9]/.test(password)){ //Regex to check if the password contains numbers
        return false;
    }
    if (!/[A-Z]/.test(password))  
    return false;
    return true;
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
        
        
        if (ValidateUsername(userName)==false){
            $('#userNameWarning').text("Please enter a valid Username!");
            error = 1;
        }
        if (ValidateEmail(email)==false){
            $('#emailWarning').text("Please enter a valid email address!");
            error = 1;
        }
        if (ValidatePassword(password)==false){
            $('#passwordWarning').text("Password should be at least 3 characters including a number and a capital letter!");
            error = 1;
        }
        if (password!= confirmPassword){
            $('#confirmPasswordWarning').text('Your passwords don\'t match!');
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
