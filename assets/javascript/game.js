// Arrays and variables for holding data
var wordOptions = ["pizza", "popcorn", "spaghetti", "pancakes", "soup", "waffle",
    "burrito", "biscuit", "sushi", "hamburger", "toast", "steaks", "sausage",
    "salmon", "churros", "quiche", "bruschetta", "cupcake", "kabob",
    "salad", "sandwich"
];
var wordSelected = "";
var lettersInWord = [];
var numBlanks = 0; //number of blanks needed
var correctGuesses = []; // p _ _ _ _ 
var badGuesses = [];

// Game counters
var guessRemain = 7;
var wins = 0;
var losses = 0;

// Functions to set-up and start game

function startGame () {
    wordSelected = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    // might want to remove the selected element from the wordOptions array


    // IF wordOptions.length === 0 array is empty, reload the array

    lettersInWord = wordSelected.split("");
    numBlanks = lettersInWord.length;
    correctGuesses = [];
    for (var i=0; i<numBlanks; i++){
        correctGuesses.push("_");
    }


// Reset for new game
    blanksAndGuesses = [];
    badGuesses = [];
    guessRemain = 7;

// Print Values
    document.getElementById("wordGuess").innerHTML = correctGuesses.join (" ");
    document.getElementById("guessLeft").innerHTML = guessRemain;
    document.getElementById("winCount").innerHTML = wins;
    document.getElementById("lossCount").innerHTML = losses;
    document.getElementById("wrongGuesses").innerHTML = badGuesses;

// Testing
    console.log(wordSelected);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(correctGuesses);

// Reset our image
    image = document.getElementById("image");
    image.src = "assets/images/bruschetta.jpg";
    
}

// Main process
startGame ();

document.onkeyup = function() {
    var userGuess = (event.key).toLowerCase();

    checkLetter(userGuess);
    function checkLetter (userGuess) {
        var foundLetter = false;    //create foundLetter to tell if the letter is in the word.
        for(i=0; i<lettersInWord.length; i++){
            if(userGuess === lettersInWord[i]){
                if(userGuess === correctGuesses[i]){
                    alert("Letter already guessed!");
                    return;
                }
                correctGuesses[i] = userGuess;
                document.getElementById("wordGuess").innerHTML = correctGuesses.join (" ");
                foundLetter = true;
            }
        }
        if(correctGuesses.join ("") === wordSelected){
            setTimeout(function() {alert("You WIN!!!")}, 10);
            wins = wins + 1;
            document.getElementById("winCount").innerHTML = wins;
            document.getElementById("image").innerHTML = src="../images/toast.jpg";
            //startGame ();
            setTimeout(function() {startGame()}, 11);
            return;
        }

        if(foundLetter === false){
            for(i=0; i<badGuesses.length; i++){
                if(userGuess === badGuesses[i]){
                    alert("Letter already guessed!");
                    return;
                } 
            }
            badGuesses.push(userGuess);
            document.getElementById("wrongGuesses").innerHTML = badGuesses.join (" ");
            guessRemain = guessRemain - 1;
            document.getElementById("guessLeft").innerHTML = guessRemain;
            if(guessRemain === 0){
                alert("Better luck next time");
                losses = losses + 1;
                document.getElementById("lossCount").innerHTML = losses;
                
                image = document.getElementById("image");
                image.src = "assets/images/shouting-emoji.png";
                setTimeout(function() {startGame()}, 2000);
            }
        }

       
            


        console.log(userGuess);

    }



}
    // if (userGuess== computerGuess) {
    //     // write correct guess in html line 33
    // } else
    // }


