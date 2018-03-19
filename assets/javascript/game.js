//computer will generate a random number
var randomNumber = 19 + Math.floor(Math.random()* 120);
console.log("you gotta guess this number " + randomNumber);

//displays number on html
$("#numberToGuess").html(randomNumber);

//variables equal zero
var wins = 0;
var losses = 0;
var userTotal = 0;

$("#totalScore").html(userTotal);
$("#wins").html(wins);
$("#losses").html (losses);

//generates random number for crystals
var pinkCrystal = 1 + Math.floor(Math.random() * 12);
console.log("pink crystal number " + pinkCrystal);

var purpleCrystal = 1 + Math.floor(Math.random() * 12);
console.log("purple crystal number" + purpleCrystal); 

var orangeCrystal = 1 + Math.floor(Math.random() * 12);
console.log("orange crystal number" + orangeCrystal); 

var blackCrystal = 1 + Math.floor(Math.random() * 12);
console.log("black crystal number" + blackCrystal); 



// resets game when user wins or lose
var reset = function() {
    userTotal= 0;

var randomNumber = 19 + Math.floor(Math.random()* 120);
    var pinkCrystal = 1 + Math.floor(Math.random() * 12);
console.log("pink crystal number " + pinkCrystal);

var purpleCrystal = 1 + Math.floor(Math.random() * 12);
console.log("purple crystal number" + purpleCrystal); 

var orangeCrystal = 1 + Math.floor(Math.random() * 12);
console.log("orange crystal number" + orangeCrystal); 

var blackCrystal = 1 + Math.floor(Math.random() * 12);
console.log("black crystal number" + blackCrystal); 

$("#totalScore").html(userTotal);
$("#wins").html(wins);
$("#losses").html (losses);
$("#numberToGuess").html(randomNumber);

};


//tells user if he won or lost
var userWin = function() {
    if (userTotal === randomNumber){
    console.log("user wins!!");
    wins ++;
    $("#wins").html(wins);
    reset();
    }

    else if (userTotal > randomNumber){
        console.log("you loose");
        losses ++;
        $("#losses").html (losses);
        reset();
    }
};





//click function for crstals
$("#pinkCrystal").on("click", function(){
    console.log("this pink gem is working");
    userTotal = userTotal + pinkCrystal;
    console.log(userTotal);
    $("#totalScore").html(userTotal);
    userWin ();
})

$("#purpleCrystal").on("click", function(){
    console.log("this purple gem is working");
    userTotal = userTotal + purpleCrystal;
    console.log(userTotal);
    $("#totalScore").html(userTotal);
    userWin ();
})

$("#orangeCrystal").on("click", function(){
    console.log("this orange gem is working");
    userTotal = userTotal + orangeCrystal;
    console.log (userTotal);
    $("#totalScore").html(userTotal);
    userWin ();
})

$("#blackCrystal").on("click", function(){
    console.log("this black gem is working");
    userTotal = userTotal + blackCrystal;
    console.log(userTotal);
    $("#totalScore").html(userTotal);
    userWin ();
});