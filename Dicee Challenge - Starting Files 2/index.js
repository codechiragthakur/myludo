

var randomNumber1 =Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomNumber1+".png";
var randomsrc="/images/"+randomdiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsrc);


var randomNumber2 =Math.floor(Math.random()*6)+1;
var randomdiceimage2="dice"+randomNumber2+".png";
var randomsrc2="/images/"+randomdiceimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomsrc2);