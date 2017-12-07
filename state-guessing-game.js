'use strict';


var states = ['oregon', 'washington', 'maine', 'alaska', 'california'];

var userGuess = prompt('Guess the password to enter. \n You have 6 tries to guess correctly. \n Hint: The password is a state.');
console.log('User Guess:', userGuess);

var flag;

var guessNumber = 1;

for (var i = 0; i < states.length; i++) {
  console.log('each item at each iteration', states[i]);

  if (userGuess === states[i]) {
    alert('Click Continue to Enter');
    flag = true;
    break;
  }

  if (guessNumber === 6) {
    alert('Too many guesses');
    break;
  }

  if (!flag) {
    guessNumber++;
    prompt('Incorrect.\nYou have ' + (6 - guessNumber) + 'tries remaining.\nGuess another State.');
    console.log('User Guess:', userGuess);
  }
}
