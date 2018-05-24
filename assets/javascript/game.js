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
var thisGameWord = randomizer ();
var length = thisGameWord.length;
var blank = "_";
var letters = blank.repeat(length);
var letters = [];
for(var i = 0; i< length; i++){ letters.push("_");};
var guessCount = 8;
var wins = 0;
var losses = 0;
var j = 1;
var lossAudio = new Audio("./assets/audio/Bone_crushing.mp3")
var winAudio = new Audio ("./assets/audio/Short_triumphal_fanfare.mp3")
console.log(thisGameWord);
// console.log(length);
// console.log(letters)
//attempting to type blanks into an html.
window.onload = function startGame() {
    document.getElementById("blanks").innerHTML = "CURRENT WORD: "+ letters.join(" ");
    document.getElementById("guessRemaining").innerHTML = "GUESSES REMAINING: "+guessCount;
    document.getElementById("wins").innerHTML = "WINS: " + sessionStorage.getItem("wins");
    document.getElementById("losses").innerHTML = "LOSSES: " + sessionStorage.getItem("losses");
}



document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    console.log("You Chose "+ userGuess);
    var guessedAlready = document.getElementById("lettersGuessed").innerHTML;
    // console.log (guessedAlready.indexOf(userGuess))
    
    console.log (guessedAlready.slice(42,100))
    if(guessedAlready.indexOf(userGuess)==-1){
        var guessAdded = document.getElementById("lettersGuessed").innerHTML += userGuess+", ";
        var sortedGuesses = guessAdded.slice(42,100).split(', ').sort().join(', ');
        console.log (sortedGuesses)
        // document.getElementById(("lettersGuessed").innerHTML = "LETTERS GUESSED: " + sortedGuesses
    
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
                // var winAudio = new Audio ("./assets/audio/Short_triumphal_fanfare.mp3");
                winAudio.play();
                alert ("Congrats you won!");
                function reloadWin () {
                    wins ++;
                    sessionStorage.setItem("wins", wins);
                    document.location.reload();
                }
                reloadWin()

            }

        }
    else {
       
        var misses = j++
        // console.log (misses)
        var guessCountMiss = (guessCount-misses)
        document.getElementById("guessRemaining").innerHTML = "Guesses Remaining: " + guessCountMiss;
        if(guessCountMiss==0) {
            // var lossAudio = new Audio("./assets/audio/Bone_crushing.mp3");
            lossAudio.play();
            alert ("You Lose!! Try again.");
            function reloadLoss () {
                losses ++;
                sessionStorage.setItem("losses", losses);
                document.location.reload();
            }
            reloadLoss()
        }
    }}
    // }
    
    // var indexOfUserGuess = string.indexof(userGuess,0)
    // var gameWordWithGuess = string.replace("_",userGuess)

};

