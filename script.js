// 'use strict';
// alert('helo');
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll');
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let hold = document.querySelector('.btn--hold');
let NewGame = document.querySelector('.btn--new');

score0.textContent = 0;
score1.textContent = 0;

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let gameOnOff = true;

const swapPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

rollDice.addEventListener('click', function () {
  if (gameOnOff) {
    let randonDiceNumber = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove('hidden');
    dice.src = `dice-${randonDiceNumber}.png`;

    if (randonDiceNumber !== 1) {
      currentScore = currentScore + randonDiceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      swapPlayer();
    }
  }
});

hold.addEventListener('click', function () {
  if (gameOnOff) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      gameOnOff = false;
      dice.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      swapPlayer();
    }
  }
});

NewGame.addEventListener('click', function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gameOnOff = true;

  current0.textContent = 0;
  current1.textContent = 0;

  score0.textContent = 0;
  score1.textContent = 0;

  player0.classList.add('player--active');
  player1.classList.remove('player--active');

  gameOnOff = true;
});
