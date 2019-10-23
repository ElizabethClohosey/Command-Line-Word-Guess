
console.log("Index.js Testing");









// Pseudocode

// index.js 
//     Contais the logic for the course of the game 
//         - depends on word.js
//         - randomly selects a word and users the Word constructor to store it 
//         - Prompts the user for each quess and keeps track of remaining guesses
        


// Letter.js (write and test code for this file first)
//     Make constructor function for Letter
//         - String value to store the underlying character for the Letter
//         - A boolean value that stores if the letter has been guessed yet
//         - function (guess) that returns the underlying character if the letter has been guessed or keep the placeholder (_) if letter has not been guesses
//         *** Should not require other files***
        

// Word.js (Write code for this file second)
//     Make constructor Word that depends on the letter of constructor.
//         - Array of new Letter objects representing the letters of the underlying Word
//         - function that returns a string representing the word (this should call the function on each Letter object) (random word)
//         - function that takes in a character as an argument and calls the guess function on each letter object (guess)
//         *** Will require Letter.js***

