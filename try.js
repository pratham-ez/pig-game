'use strict';
// alert('helo');
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll');
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let hold = document.querySelector('. btn--hold');

score0.textContent = 0;
score1.textContent = 0;

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

rollDice.addEventListener('click', function () {
  let randonDiceNumber = Math.trunc(Math.random() * 6) + 1;

  dice.classList.remove('hidden');
  dice.src = `dice-${randonDiceNumber}.png`;

  if (randonDiceNumber !== 1) {
    currentScore = currentScore + randonDiceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});

hold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
});
