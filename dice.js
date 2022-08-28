

var randomNumber1 = Math.floor(Math.random() *6) +1; // random number

var diceNumber1 = "dice" + randomNumber1 + ".png"; // adding value to the image to change the image.

var image1 = document.getElementsByClassName("image")[0]; // changing the image in the HTML

image1.setAttribute("src", diceNumber1); // replacing the image source with the random imsges.


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceNumber2 = "dice" + randomNumber2 + ".png";

var image2 = document.getElementsByClassName("image")[1];

image2.setAttribute("src", diceNumber2);



if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS! 🚩 "; // replacing h1 with different statements after an action.
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS! 🚩";
}
else{
     document.querySelector("h1").innerHTML = "TIE!";
}
