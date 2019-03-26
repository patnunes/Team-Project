
function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}
function delete_cookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1941 00:00:01 GMT;';
};

var username;
//getting the name of the html file that is using this js file:
var path = window.location.pathname;
var pagename = path.split("/").pop();

if (pagename=="myprofile.html"){
    username = getCookie("UserName");
    
}
if (pagename=="profile.html"){
    username = getCookie("FriendsName");
}


const replaced = document.querySelectorAll(".replacer");

for(i = 0; i < replaced.length; i++)
{
    replaced[i].innerText = username;
}

$(document).ready(function() {
    
    $('#log_out').click(function(){
        delete_cookie("UserName");
        delete_cookie("FriendsName");
        window.location = "signin.html";
    });
    
    $('#dashboard').click(function(){
        window.location = "dashboard.html"
    });
    
    $('#my_profile').click(function(){
        window.location = "myprofile.html"
    });
});

