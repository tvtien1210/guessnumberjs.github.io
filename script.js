'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1); // between 1 and 20
console.log(secretNumber);

let score = 20;

let highscore = 0;

//Refactoring Code------------ DRY CODE
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//-------------------------------

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //value  để nhập giá trị số từ bàn phím
  console.log(guess, typeof guess);
  
  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    //DOM to HTML
    displayMessage('🥳 Congratulation!');
    displayNumber(secretNumber);
    //DOM to CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score; // = highscore 
    }

    //When guess is to high and to low
    displayMessage(guess > secretNumber ? '🤒 Too high!' : '🪫 Too low!');
    if (score > 1) {
      score--;
      displayScore(score);
    } else {
      displayMessage('🤪 You lost the game');
      displayScore(0);
      console.log(typeof score);
    }
    //   // When guess is to high
    // } else if (guess > secretNumber) {
    //   document.querySelector('.message').textContent = '🤒 Too high!';
    //   if (score > 1) {
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '🤪 You lost the game';
    //     document.querySelector('.score').textContent = 0;
    //     console.log(typeof score);
    //   }
    //   //When guess is to low
    // } else if (guess < secretNumber) {
    //   document.querySelector('.message').textContent = '🪫 Too low!';
    //   if (score > 1) {
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '🤪 You lost the game';
    //     document.querySelector('.score').textContent = 0;
    //     console.log(typeof score);
    //   }
    // }
  }
});

//When click "Again" Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  //DOM to HTML
  displayScore(score); // code này liên quan đến 'gán biến mới score = 20 ở ngay trên'
  displayMessage('Start guessting...');
  displayNumber('?');
  document.querySelector('.guess').value = ''; //giá trị điền vào 'input' type=number là một .value
  //DOM to CSS
  document.querySelector('body').style.backgroundColor = '#222'; // giá trị khai báo luôn là một string khi DOM qua CSS
  document.querySelector('.number').style.width = '15rem';
});
