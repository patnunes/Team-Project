function getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
}
var username = getCookie("UserName");

const replaced = document.querySelectorAll(".replacer");

for(i = 0; i < replaced.length; i++)
{
    replaced[i].innerText = username;
}

$(document).ready(function() {

    $('#log_out').click(function(){
        window.location = "signin.html"
    });

    $('#dashboard').click(function(){
       window.location = "index.html"
    });

    $('#my_profile').click(function(){
        window.location = "myprofile.html"
    });
});

