'use strict';


var states = ['oregon', 'washington', 'maine', 'alaska', 'california'];
var i;
var userGuess = prompt('Guess State.');
console.log('Guessed State:', userGuess);
var guesses = 1;

for (i = 0; i < states.length; i++) {

  if (userGuess === states[0] || userGuess === states[1] || userGuess === states[2] || userGuess === states[3] || userGuess === states[4]) {
    alert('correct');
    break;
  } else if (guesses < 5) {
    console.log('#guesses:', guesses);
    alert('too many guesses');
    break;
  } else if (userGuess !== states[i]) {
    alert('incorrect');
    userGuess = prompt('Guess State.');
    console.log('Guessed State:', userGuess);
    guesses++;
  }
}
