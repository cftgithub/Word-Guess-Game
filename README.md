# Word-Guess-Game
## Purpose:
To create a fun game using JavaScript to demonstrate event listeners and DOM manipulation. Try it out yourself! [Play Word Guess Game](https://cftgithub.github.io/Word-Guess-Game/)

## How the App Works:
* The following will be displayed on the webpage at the start of game and modified/updated during game-play.
    * The word to guess is displayed on the webpage using dashes as placeholders.
        * Ex. If the word is "salad", it will be displayed as "_ _ _ _ _" .
    * Letters Guessed.
    * Guesses Remaining: 7.
    * Wins/Losses.
    * Image.
* The player guesses the word by typing one letter at a time.
* To win, the player must guess the word before "Guesses Remaining" reaches "0".
* After the player wins/loses, the game will automatically choose another word and reset "Letters Guessed" and "Guesses Remaining" back to 7.

### Game Design Notes:
* The word to be guessed will be randomly selected from an array and removed from the array until each word in the array has cycled through. This will ensure the same word will not be selected until the player has cycled through the entire array.
* "Letters Guessed" will list all letters (correct and incorrect) guessed by the player.
* Player will be notified if a letter has been guessed or if the guess is not a letter.
* Each letter guessed correctly will replace the placeholder dash(es).
    * Ex. Using the example above, if "a" was guessed, the placholder will be modified to display "_ a _ a _".
* The maximum incorrect guesses per game is 7; "Guesses Remaining" will decrease by one for each incorrect guess made.
* The player wins the game by guessing all letters in the placeholder before "Guesses Remaining" reaches "0". 
* The image will change at the end of each game. A win will replace the current image with an image reflecting the word correctly guessed. An emoji appears if the game is lost and the image will revert back to the default image.
* Win/Loss count will be updated at the end of each game. Refreshing the page will reset the Win/Loss count.

### Technologies:
* HTML
* CSS
* Bootstrap
* JavaScript

### Future Upgrades:
* Make the game responsive to smaller viewports.
