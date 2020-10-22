// Arrays and variables for holding data
var wordOptions = ["pizza", "popcorn", "spaghetti", "pancakes", "soup", "waffle",
    "burrito", "biscuit", "sushi", "hamburger", "toast", "steaks", "sausage",
    "salmon", "churros", "quiche", "bruschetta", "cupcake", "kabob",
    "salad", "sandwich"
];
var wordSelected = "";
var lettersInWord = [];
var numBlanks = 0; //number of blanks needed
var dashWord = []; // words in dashes p _ _ _ _ 
var lettersGuessed = [];

// Game counters
var guessRemain = 7;
var wins = 0;
var losses = 0;

// Functions to set-up and start game

function startGame() {
    wordSelected = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    wordIndex = wordOptions.indexOf(wordSelected);
    wordOptions.splice(wordIndex, 1); //removes wordSelected from wordOptions array
    checkArray(); // IF wordOptions.length === 0 array is empty, reload the array
    lettersInWord = wordSelected.split("");
    numBlanks = lettersInWord.length;
    dashWord = [];
    for (var i = 0; i < numBlanks; i++) {
        dashWord.push("_");
    }

    // Reset for new game
    blanksAndGuesses = [];
    lettersGuessed = [];
    guessRemain = 7;

    // Print Values
    document.getElementById("wordGuess").innerHTML = dashWord.join(" "); //removes commas when appended
    document.getElementById("guessLeft").innerHTML = guessRemain;
    document.getElementById("winCount").innerHTML = wins;
    document.getElementById("lossCount").innerHTML = losses;
    document.getElementById("wrongGuesses").innerHTML = lettersGuessed;
}

function checkArray() {
    if (wordOptions.length === 0) {
        wordOptions = ["pizza", "popcorn", "spaghetti", "pancakes", "soup", "waffle",
            "burrito", "biscuit", "sushi", "hamburger", "toast", "steaks", "sausage",
            "salmon", "churros", "quiche", "bruschetta", "cupcake", "kabob",
            "salad", "sandwich"]
    }
}

function resetImage() {
    image = document.getElementById("image");
    image.src = "assets/images/buffet.jpg";
}

// Main process
startGame();

document.onkeyup = function () {
    var userGuess = event.key.toLowerCase();
    var keyCode = event.keyCode;

    if (keyCode >= 65 && keyCode <= 90) {
        if (lettersGuessed.includes(userGuess) === false) { //check if lettersGuessed is in userGuess array
            lettersGuessed.push(userGuess); //adds letter to userGuess array
            document.getElementById("wrongGuesses").innerHTML = lettersGuessed.join(" ");
            if (lettersInWord.includes(userGuess)) {
                for (i = 0; i < lettersInWord.length; i++) {
                    if (userGuess === lettersInWord[i]) {
                        dashWord[i] = userGuess;
                        document.getElementById("wordGuess").innerHTML = dashWord.join(" ");
                    }
                }
                if (dashWord.join("") === wordSelected) {
                    document.getElementById("image").setAttribute("src", "assets/images/" + wordSelected + ".jpg");
                    setTimeout(function () { alert("You WIN!!!") }, 500);
                    wins = wins + 1;
                    document.getElementById("winCount").innerHTML = wins;
                    //startGame ();
                    setTimeout(function () { startGame() }, 1000);
                    return;
                }
            } else {
                guessRemain = guessRemain - 1;
                document.getElementById("guessLeft").innerHTML = guessRemain;
                if (guessRemain === 0) {
                    losses = losses + 1;
                    document.getElementById("lossCount").innerHTML = losses;
                    image = document.getElementById("image");
                    image.src = "assets/images/shouting-emoji2.png";
                    setTimeout(function () { alert("Better luck next time") }, 500);
                    setTimeout(function () { startGame(), resetImage() }, 1000);
                }
            }
        } else {
            alert("You already pressed that letter!");
        }
    } else {
        alert("Please enter a letter from a-z!");
    }
}
