//computer will generate a random number
var randomNumber = 19 + Math.floor(Math.random()* 120);
console.log("you gotta guess this number " + randomNumber);

//displays number on html
$("#numberToGuess").html(randomNumber);

var wins = 0;
var losses = 0;
var userTotal =0;

//generates random number for crystals
var pinkCrystal = 1 + Math.floor(Math.random() * 12);
console.log("pink crystal number " + pinkCrystal);

var purpleCrystal = 1 + Math.floor(Math.random() * 12);
console.log("purple crystal number" + purpleCrystal); 

var orangeCrystal = 1 + Math.floor(Math.random() * 12);
console.log("orange crystal number" + orangeCrystal); 

var blackCrystal = 1 + Math.floor(Math.random() * 12);
console.log("black crystal number" + blackCrystal); 

var userWin = function() {
    if (userTotal === randomNumber){
    console.log("user wins!!");
    }

    else if (userTotal > randomNumber){
        console.log("you loose");
    }
};


//click function for crstals
$("#pinkCrystal").on("click", function(){
    console.log("this pink gem is working");
    userTotal = userTotal + pinkCrystal;
    console.log(userTotal);
    userWin ();
})

$("#purpleCrystal").on("click", function(){
    console.log("this purple gem is working");
    userTotal = userTotal + purpleCrystal;
    console.log(userTotal);
    userWin ();
})

$("#orangeCrystal").on("click", function(){
    console.log("this orange gem is working");
    userTotal = userTotal + orangeCrystal;
    console.log (userTotal);
    userWin ();
})

$("#blackCrystal").on("click", function(){
    console.log("this black gem is working");
    userTotal = userTotal + blackCrystal;
    console.log(userTotal);
    userWin ();
});