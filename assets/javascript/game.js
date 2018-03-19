//computer will generate a random number
var randomNumber = 19 + Math.floor(Math.random()* 120);
console.log("you gotta guess this number " + randomNumber);

//displays number on html
$("#numberToGuess").html(randomNumber);

var wins = 0;
var losses = 0;
var userTotal =0;

var pinkCrystal = 1 + Math.floor(Math.random() * 12);
console.log("pink crystal number" + pinkCrystal);
