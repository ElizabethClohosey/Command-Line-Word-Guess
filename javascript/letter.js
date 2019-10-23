

function Letter () {
    this.storage = "_",
    console.log("this is the letter storage", this.storage);
    this.letterGuessed = false,
    console.log("boolean", this.letterGuessed);
    function toString () {
        if (this.letterGuessed === false) {
            console.log("is true");
            // return this.letterGuessed;
        } else {
            // return this.storage;
            console.log("is false");
        }
    }
    toString();
}
Letter();







// Letter.js (write and test code for this file first)
//     Make constructor function for Letter
//         - String value to store the underlying character for the Letter
//         - A boolean value that stores if the letter has been guessed yet
//         - function (guess) that returns the underlying character if the letter has been guessed or keep                 the placeholder (_) if letter has not been guessed
//         *** Should not require other files***

//         ***************HINT:*********************

//         If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: <https://jsbin.com/facawetume/edit?js,console>)
