'use strict';

var counter = 1;

var randomNumber = Math.floor(Math.random() * 10);
console.log('generated number:', randomNumber);

var guessedNumber = parseInt(prompt('I am thinking of a number between 0 and 10.  Can you guess it?'));
console.log('number guessed:', guessedNumber);

while (guessedNumber !== randomNumber) {

  if(guessedNumber < randomNumber) {
    guessedNumber = parseInt(prompt('Too low.\n Please guess another number between 0 and 10.'));
    console.log('number guessed:', guessedNumber);
    counter++;
  } else if(guessedNumber > randomNumber) {
    guessedNumber = parseInt(prompt('Too high.\n Please guess another number between 0 and 10.'));
    console.log('number guessed:', guessedNumber);
    counter++;
  } else if(isNaN(number) || number === null) {
    guessedNumber = parseInt(prompt('Not a number.\n Please guess another number between 0 and 10.'));
    console.log('number guessed:', guessedNumber);
  }
}

alert('It took you ' + counter + ' tries to guess the number.');

console.log('Number of Guesses', counter);
