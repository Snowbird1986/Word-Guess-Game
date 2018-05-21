//words for the guessing game
var words = {
    word1:"buzzards",
    word2:"cows",
    word3: "dude",
    word4: "outlaw",
    word5: "sawbuck",
    word6: "wrangler",};


//randomly pulls a word for the game
function randomizer () {
    return Object.values(words)[Math.floor((Math.random() * Object.values(words).length))];
};
//variables used after randomizer
var thisGameWord = randomizer ()
var length = thisGameWord.length;
var blank = "_ ";
var letters = blank.repeat(length)
var guessCount = 8
var wins = 0
console.log(thisGameWord);
console.log(length);
console.log(letters)
//attempting to type blanks into an html.
window.onload = function startGame() {
    document.getElementById("blanks").innerHTML = "Current Word: "+letters;
    document.getElementById("guessRemaining").innerHTML = "Guesses Remaining: "+guessCount;
    document.getElementById("wins").innerHTML = "Wins: "+wins;
}



document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    console.log("You Chose "+ userGuess);
    document.getElementById("lettersGuessed").innerHTML += userGuess+", ";

};

