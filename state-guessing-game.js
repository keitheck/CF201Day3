'use strict';

function stateGame () {

var states = ['oregon', 'washington', 'maine', 'alaska', 'california'];
var guessesRemaining = 6;

while(guessesRemaining > 0) {
  var userGuess = prompt('Guess State.');
  console.log('userGuess', userGuess);
  guessesRemaining--;
  console.log('guessesRemaining', guessesRemaining);

  for (var i = 0; i < states.length; i++) {
    if (userGuess === states[i]) {
    // if (userGuess === states[0] || userGuess === states[1] || userGuess === states[2] || userGuess === states[3] || userGuess === states[4]) {
      guessesRemaining = -1;
      alert('correct');
      break;
    }
  }

  if (guessesRemaining > 0) {
    alert('incorrect. you have ' + guessesRemaining + ' tries left' );
  }

  if (guessesRemaining === 0) {
    alert('out of tries');

  }
}

}

stateGame();
