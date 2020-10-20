$(document).ready(function(){
    /**********************Sign up Function**********************************/

    var users = [];
    $("#signup-btn").click(function(){
        var user = {"username": $("#signup_username").val(), "password": $("#signup_password").val()};
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Registration Successfull!");        
    });

    /**********************Login Function**********************************/
    $("#login-btn").click(function(){
        var thoseUsers = JSON.parse(localStorage.getItem('users'));
        for(x in thoseUsers){
            if(thoseUsers[x].username == $("#login_username").val() && thoseUsers[x].password == $("#login_password").val()){
                window.location.replace("indexHome.html");
                localStorage.setItem('welcome', JSON.stringify("Welcome, " + thoseUsers[x].username + "!"));
                break;
            }
            else{
                alert("Wrong Username OR Password");
            }
        }
    });
    var WS = JSON.parse(localStorage.getItem('welcome'));
    $(".userWelcome").html(WS);

    /***************************Post Function************************************/
    var posts = [];


    $("#postBtn").click(function(){
        if($("#postTextarea").val() != "" || $("#title").val()!= ""){
            var post = "<div class='card'><div class='card-header'><h4 class='card-title'>"+$("#title").val()+"</h4></div><div class='card-block'><p class='card-text'>"+$("#postTextarea").val()+"</p><a href='#' class='card-link fa fa-thumbs-o-up' >&nbsp;Like</a><a href='#' class='card-link fa fa-commenting-o'>&nbsp;Comment</a><a href='#' class='card-link fa fa-retweet'>&nbsp;Share</a></div><div class='input-group commentGroup'><input type='text' class='commentContent form-control' placeholder='Comment here ...'><span class='input-group-btn'><button class='postComment btn btn-secondary' type='button'>Comment</button></span></div><div class='card-block'><p class='h6 commentHere'></p></div></div><br>";
            posts.push(post);
        }
        localStorage.setItem('posts', JSON.stringify(posts));
        posts = JSON.parse(localStorage.getItem('posts'));
        $("#postArea").empty();
        for(i in posts){
            $("#postArea").append(posts[i]);
        }
    });
    var pos = JSON.parse(localStorage.getItem('posts'));
    $("#postArea").empty();
    for(i in pos){
        $("#postArea").append(pos[i]);
    }
    var k =1;
    $(".commentGroup").hide();
    $(".fa-commenting-o").click(function(){
        $(".commentGroup").toggle(500);
    });
    $(".fa-thumbs-o-up").click(function(){
        $(this).css("color","green");
        $(this).html("&nbsp;Like " +k);
    });
    $(".postComment").click(function(){
        var content = $(".commentContent").val();
        $(".commentHere").html(content);
    });
});