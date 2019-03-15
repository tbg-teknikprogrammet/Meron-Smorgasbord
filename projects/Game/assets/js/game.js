
var player1button = document.querySelector(".player1");
var playerone = document.getElementById("playerone");
var player1score = 0;

    player1button.addEventListener("click", function() {
        playerone.innerHTML = player1score ++;
    });

var player2button = document.querySelector(".player2");
var playertwo = document.getElementById("playertwo");
var player2score = 0;

    player2button.addEventListener("click", function() {
        playertwo.innerHTML = player2score ++;
    });


var reset = document.querySelector("#resetbutton");

    reset.addEventListener("click", function() {
    form.reset("form");
});


