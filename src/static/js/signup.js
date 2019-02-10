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
           alert("This is the JSON produced: " + JSON.stringify(newUser))
        }
    };
});
