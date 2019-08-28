//global var
//========================================================
//arrays and var
var wordOptions = ["jason", "gee", "john","adam"];
var seletedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
// Game Counters
var winCounter = 0;
var lossCounter = 0;
var guessesleft = 9;
// funtions
//=======================================================
function startGame() {
    selectedWord = wordOptions[Math.floor(math.random() * wordOptions.lenght)];
    lettersinWord = seletedWord.split("");
    numBlanks = lettersinWord.length;

    // Reset
    guessesleft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //populate blanks and successes
    for (var i=0; i<numBlanks; i++){
        blanksAndSuccesses.push("_");
    }
    // Change Html to reflet round conditions 
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesleft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCounter;
    // Testing/Debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
}
function checkLetters(letter){
    //Check if letter is in code at all
    var isLetterInWord = false;

        for (var i=0; i<numBlanks; i++){
            if(selectedWord[i] == letter){
                isLetterInWord = true;
            }
        }
        if(isLetterInWord){
            for (var i=0; i<numBlanks; i++){
            if(seletedWord[i] == letter){
                blanksAndSuccesses[i] = letter;
            }
        }
        
    }
    else {
        wrongLetters.push(letter);
        guessesleft--
    }
    console.log(blanksAndSuccesses);    

}

function roundComplete(){
    console.log("Win Count: "+ winCount +" | Loss Count: "+ lossCount +" | Guesses Left" + guessesleft);
//Check if user won 
    if (lettersinWord.toString() == blanksAndSuccesses.toString()){
     winCounter++;
     alert("You Won!"); 
    
        //Check is user lost
       document.getElementById("winCounter").innerHTML = winCount;
       
       startGame(); 
    }  
    else if(guessesleft == 0){ 
        lossCount++;
        alert("You Lost!");

        document.getElementById("lossCounter").innerHTML = lossCount;
    }  
//main process
//===============================================

// initiates the code the first time
startGame();

// Register the keyclicks

document.onkeyup = function(event){
    var letterGuessed = string.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    // Test/Debug
    console.log(letterGuessed);
}