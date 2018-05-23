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
var blank = "_";
var letters = blank.repeat(length)
var letters = [];
for(var i = 0; i< length; i++){ letters.push("_");}
var guessCount = 8
var wins = 0
var j = 1;
// console.log(thisGameWord);
// console.log(length);
// console.log(letters)
//attempting to type blanks into an html.
window.onload = function startGame() {
    document.getElementById("blanks").innerHTML = "CURRENT WORD: "+ letters.join(" ");
    document.getElementById("guessRemaining").innerHTML = "GUESSES REMAINING: "+guessCount;
    document.getElementById("wins").innerHTML = "WINS: "+wins;
}



document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    console.log("You Chose "+ userGuess);
    var guessedAlready = document.getElementById("lettersGuessed").innerHTML
    console.log (guessedAlready.indexOf(userGuess))
    if(guessedAlready.indexOf(userGuess)==-1){
    document.getElementById("lettersGuessed").innerHTML += userGuess+", ";
    // if(guessedAlready==userGuess){}
    if (thisGameWord.indexOf(userGuess) > -1) {
        for (i=0;i<length; i++)
            if (thisGameWord[i] == userGuess) {
                // console.log (thisGameWord[i]);
                letters[i] = userGuess;
                // console.log(letters.join(' '));
                document.getElementById("blanks").innerHTML = "Current Word: "+ letters.join(" ");
                // console.log(letters.join(""))
                // console.log(thisGameWord)
            }
            if (letters.join("")==thisGameWord){
                alert ("Congrats you won!");

            }

        }
    else {
       
        var misses = j++
        // console.log (misses)
        var guessCountMiss = (guessCount-misses)
        document.getElementById("guessRemaining").innerHTML = "Guesses Remaining: " + guessCountMiss;
        if(guessCountMiss==0) {
            alert ("You Lose!!")
        }
    }}
    // }
    
    // var indexOfUserGuess = string.indexof(userGuess,0)
    // var gameWordWithGuess = string.replace("_",userGuess)

};

