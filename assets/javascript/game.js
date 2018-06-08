// Variables
let randomResult = '';
let win = 0;
let loss = 0;
let previous = 0;


// Beginning game & creating crystals to add to the DOM
let startGame = function () {

    $(".crystals").empty();

// Four crystal images
    let images = [
        'https://vignette.wikia.nocookie.net/zeldafanon/images/5/57/GreenRupee.png/revision/latest?cb=20120501010031',
        'https://vignette.wikia.nocookie.net/zelda/images/e/e5/Rubis_Dor%C3%A9_SS.png/revision/latest/scale-to-width-down/306?cb=20130704143143&path-prefix=fr',
        'https://vignette.wikia.nocookie.net/zelda/images/a/a9/Roupir_SS.png/revision/latest/scale-to-width-down/306?cb=20130316144314&path-prefix=fr',
        'https://vignette.wikia.nocookie.net/zelda/images/0/03/Rubis_Bleu_SS.png/revision/latest/scale-to-width-down/306?cb=20130704143143&path-prefix=fr'];

    // Random number generator for score to reach
    randomResult = Math.floor(Math.random() * 100) + 20;

    $("#result").html('<h2>' + randomResult + '</h2>');

//Each crystal needs to have a random number between 1 & 12

    for (let i = 0; i < 4; i++) {

        let random = Math.floor(Math.random() * 11) + 1;
        let crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random-number": random
        });
        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "110px",
            "background-repeat": "no-repeat"
        })
        $(".crystals").append(crystal);
    }
    $("#previous").html("<h4>TOTAL SCORE: " + previous + "</h4>");
}

startGame();

// When clicking any crystal it should add the previous result
$(document).on('click', ".crystal", function () {

    let num = parseInt($(this).attr('data-random-number'));
    previous += num;
    $("#previous").html("<h4>TOTAL SCORE: " + previous + "</h4>");
    console.log(previous);

//A new random number should generate every time we win or lose
// If it is greater than the random result, then you lose and the game starts over - loss counter

    if (previous > randomResult) {

        loss++;

        $("#loss").html("<h4>LOSSES: " + loss + "</h4>");

        previous = 0;

        startGame();

    // If it does equal, then you win - win counter
    } else if (previous === randomResult) {

        win++;

        $("#win").html("<h4>WINS: " + win + "</h4>");

        previous = 0;

        startGame();

    }
});