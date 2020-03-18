// Arrays and variables for holding data
var wordOptions = ["pizza", "popcorn", "spaghetti", "pancakes", "soup", "waffle",
    "burrito", "biscuit", "sushi", "hamburger", "toast", "steaks", "sausage",
    "salmon", "churros", "quiche", "bruschetta", "cupcake", "kabob",
    "salad", "sandwich"
];
var wordSelected = "";
var lettersInWord = [];
var numBlanks = 0; //number of blanks needed
var dashWord = []; // p _ _ _ _ 
var lettersGuessed = [];

// Game counters
var guessRemain = 7;
var wins = 0;
var losses = 0;

// Functions to set-up and start game

function startGame() {
    wordSelected = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    // might want to remove the selected element from the wordOptions array


    // IF wordOptions.length === 0 array is empty, reload the array

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
    document.getElementById("wordGuess").innerHTML = dashWord.join(" ");
    document.getElementById("guessLeft").innerHTML = guessRemain;
    document.getElementById("winCount").innerHTML = wins;
    document.getElementById("lossCount").innerHTML = losses;
    document.getElementById("wrongGuesses").innerHTML = lettersGuessed;

    // Testing
    console.log(wordSelected);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(dashWord);
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
    console.log(userGuess);
    console.log(keyCode);

    if (keyCode >= 65 && keyCode <= 90) {
        if (lettersGuessed.includes(userGuess) === false) {
            lettersGuessed.push(userGuess);
            document.getElementById("wrongGuesses").innerHTML = lettersGuessed.join(" ");
            if (lettersInWord.includes(userGuess)) {
                for (i = 0; i < lettersInWord.length; i++) {
                    if (userGuess === lettersInWord[i]) {
                        dashWord[i] = userGuess;
                        document.getElementById("wordGuess").innerHTML = dashWord.join(" ");
                    }
                }
                if (dashWord.join("") === wordSelected) {
                    setTimeout(function () { alert("You WIN!!!") }, 10);
                    wins = wins + 1;
                    document.getElementById("winCount").innerHTML = wins;
                    document.getElementById("image").setAttribute("src", "assets/images/" + wordSelected + ".jpg");
                    //startGame ();
                    setTimeout(function () { startGame() }, 11);
                    return;
                }
            } else {
                guessRemain = guessRemain - 1;
                document.getElementById("guessLeft").innerHTML = guessRemain;
                if (guessRemain === 0) {
                    alert("Better luck next time");
                    losses = losses + 1;
                    document.getElementById("lossCount").innerHTML = losses;
                    image = document.getElementById("image");
                    image.src = "assets/images/shouting-emoji.png";
                    setTimeout(function () { startGame(), resetImage() }, 2000);
                }
            }
        } else {
            alert("You already pressed that letter!");
        }
    } else {
        alert("Please enter a letter from a-z!");
    }
}