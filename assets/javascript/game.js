

$(document).ready(function () {

    var red = (Math.floor(Math.random() * (12 + 1) + 1));
    console.log(red);
    var blue = (Math.floor(Math.random() * (12 + 1) + 1));
    console.log(blue);
    var green = (Math.floor(Math.random() * (12 + 1) + 1));
    console.log(green);
    var yellow = (Math.floor(Math.random() * (12 + 1) + 1));
    console.log(yellow);

    var compTotal = (Math.floor(Math.random() * (69 + 25) + 25));
    console.log(compTotal);

    var userTotal = 0
    console.log(userTotal);

    $("red").click(function (event) {
        userTotal = userTotal + red;
        $("#red").text(userTotal);
        console.log(red)
    });

    $("blue").click(function (event) {
        userTotal = userTotal + blue;
        $("#blue").text(userTotal);
        console.log(blue)
    });

    $("green").click(function (event) {
        userTotal = userTotal + green;
        $("#green").text(userTotal);
        console.log(green)
    });

    $("yellow").click(function (event) {
        userTotal = userTotal + sapphire;
        $("#yellow").text(yellow);
        console.log(yellow);

    });

    document.getElementById("compNum").innerHTML = "Computer's Number:" + compTotal;
    document.getElementById("userNum").innerHTML = "Your Number:" + userTotal;
   
});





