var random1 = Math.floor(Math.random()*6)+1;
var random2 = Math.floor(Math.random()*6)+1;

var leftDiceImage = document.querySelector(".img1");
var rightDiceImage = document.querySelector(".img2");

var randomDiceImage1 = `./images/dice${random1}.png`;
var randomDiceImage2 = `./images/dice${random2}.png`;

leftDiceImage.setAttribute("src",randomDiceImage1);
rightDiceImage.setAttribute("src",randomDiceImage2);

if(random1 > random2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(random1 == random2){
    document.querySelector("h1").innerHTML = "It's a draw";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}