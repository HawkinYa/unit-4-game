
// Global Variables
var red = (Math.floor(Math.random() * (21 + 1) + 1));
console.log(red);
var blue = (Math.floor(Math.random() * (21 + 1) + 1));
console.log(blue);
var green = (Math.floor(Math.random() * (21 + 1) + 1));
console.log(green);
var yellow = (Math.floor(Math.random() * (21 + 1) + 1));
console.log(yellow);
var compTotal = (Math.floor(Math.random() * (69 + 25) + 25));
console.log(compTotal);
var userTotal = 0;
console.log(userTotal, "value of added numbers");
var wins = 0;
var losses = 0;

// Reset stats for a new game
function newGame() {
    
    var red = (Math.floor(Math.random() * (21 + 1) + 1));
    console.log(red);
    var blue = (Math.floor(Math.random() * (21 + 1) + 1));
    console.log(blue);
    var green = (Math.floor(Math.random() * (21 + 1) + 1));
    console.log(green);
    var yellow = (Math.floor(Math.random() * (21 + 1) + 1));
    console.log(yellow);
    var compTotal = (Math.floor(Math.random() * (69 + 25) + 25));
    document.getElementById("compNum").innerHTML = "Computer's Number:" + compTotal;
    console.log(compTotal);
    var userTotal = 0;
    document.getElementById("userNum").innerHTML = "Your Number:" + userTotal;
    console.log(userTotal);
}

// HTML texts
document.getElementById("compNum").innerHTML = "Computer's Number:" + compTotal;
document.getElementById("userNum").innerHTML = "Your Number:" + userTotal;
document.getElementById("wins").innerHTML = "Wins:" + wins++;
document.getElementById("losses").innerHTML = "Losses:" + losses++;

// The game itself
$(document).ready(function () {

    $("#red").click(function () {
        userTotal = userTotal + red;
        document.getElementById("userNum").innerHTML = "Your Number:" + userTotal;
        gameScore ();
        console.log(red, "value of red")
        console.log(userTotal, "value of added numbers");
    });

    $("#blue").click(function () {
        userTotal = userTotal + blue;
        document.getElementById("userNum").innerHTML = "Your Number:" + userTotal;
        gameScore ();
        console.log(blue, "value of blue")
        console.log(userTotal, "value of added numbers");
    });

    $("#green").click(function () {
        userTotal = userTotal + green;
        document.getElementById("userNum").innerHTML = "Your Number:" + userTotal;
        gameScore ();
        console.log(green, "value of green")
        console.log(userTotal, "value of added numbers");
    });

    $("#yellow").click(function () {
        userTotal = userTotal + yellow;
        document.getElementById("userNum").innerHTML = "Your Number:" + userTotal;
        gameScore ();
        console.log(yellow, "value of yellow");

        console.log(userTotal, "value of added numbers");
    });

    document.getElementById("userNum").innerHTML = "Your Number:" + userTotal;


    function gameScore (){
    if (userTotal == compTotal) {
        alert("You're pretty good at this!");
        document.getElementById("wins").innerHTML = "Wins:" + wins++;
        newGame();
    } else if (userTotal > compTotal) {
        alert("Try again if ya want, I mean.. I get if its too hard..");
        document.getElementById("losses").innerHTML = "Losses:" + losses++;
        newGame();
    }
}

    


});