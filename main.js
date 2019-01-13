

var big_div = document.getElementById("big_div");
var back = document.getElementById("background_div");
var shadow = document.getElementById("shadow_div");
var change = document.getElementById("change_button");
var change_white = document.getElementById("change_button_two");



function changeColor(){
    big_div.style.animation = "moveLeft 1s linear";
    setTimeout(function(){
        big_div.style.marginLeft = "-300px";
    }, 1000);

    shadow.style.opacity = "1";
    shadow.style.backgroundColor = "rgba(0,0,0,0.5)";

}
change.addEventListener("click", changeColor);


function changeColorTwo(){
    shadow.style.opacity = "0";
    big_div.style.animation = "moveRight 1s linear";
    setTimeout(function(){
        big_div.style.marginLeft = "0px";
    }, 1000);
}

change_white.addEventListener("click", changeColorTwo);