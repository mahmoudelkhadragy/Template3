/*global $*/
var $;
//effect on button from top 
$('.from-top').hover(function () {
    "use strict";
    $(this).find('span').eq(0).animate({
        height: '100%'
    }, 300);
}, function () {
    $(this).find('span').eq(0).animate({
        height: '0%'
    }, 300);
});
//effect on button border from left
$('.border-bottom').hover(function () {
    $(this).find('span').eq(0).animate({
       width: '100%' 
    });
}, function () {
    $(this).find('span').eq(0).animate({
       width: '0%' 
    });
});




//#00BCBA
function Show()
{
    document.getElementById("Click").style.visibility = "visible";
}
function hide()
{
    document.getElementById("Click").style.visibility = "hidden";
}

var n = 0;
function Hoverd()
{
    n = n + 1;
    document.getElementById("img1").innerHTML = n;
}

function clickp()
{
    document.getElementById("colorp").style.color = "#00f";
    document.getElementById("colorp").style.textDecoration = "underline";
}

