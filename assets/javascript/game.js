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
console.log(thisGameWord);
console.log(length);
console.log(letters)
//attempting to type blanks into an html.
function startGame() {
    document.querySelector('#demo1').innerHTML = letters;
}
startGame()



document.onkeyup = function(event) {
    console.log("You Chose "+ event.key);
    var userGuess = event.key.toLowerCase();
    

};