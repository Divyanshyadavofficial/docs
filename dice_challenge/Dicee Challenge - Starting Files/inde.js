var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "image/dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "image/dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="palyer 1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "draw";
}