'use strict';


var states = ['oregon', 'washington', 'maine', 'alaska', 'california'];

var userGuess = prompt('what is one of my fav things?');

var flag;

for (var i = 0; i < stuff.length; i++) {
  console.log('each item at each iteration', states[i]);

  if (userGuess === states[i]) {
    alert('u right');
    flag = true;
    break;
  }
}

if (!flag) {
  alert('nope you are wrong.');
}
