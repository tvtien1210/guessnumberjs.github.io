'use strict';
// document.querySlector() là phương thức có sẵn trên đối tượng Object {document}
// console.log(document.querySelector('.message').textContent);
//textContent: Trả về 1 chuỗi ký tự chứa nội dung của tất cả nút văn bản bên trong phần tử hiện tại.

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number 🥳';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

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
  /*
   Attribute và Property

   1.Attribute: thuộc tính

   Ví dụ thuộc tính "test-id" "test-name" tất cả đều là string

  <body>
  <input id="test-id" name="test-name" type="text" value="Test Value">
   </body>

   2.Property: đặc tính

   Ví dụ 

    var inputElement = document.getElementById("test-id");
    alert(inputElement);

    inputElement.children ( la mot string, number, hay object...)

    inputElement.childen ('.numberOfChild')

  🥳 Nhớ rằng phần tử HTML không có property mà chỉ có attribute. 
  Ngược lại DOM Object có cả attribute và property.


*/

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
      // cần phải có biểu thức ở vị trí này (để gán giá trị mới nhất cho highscore, nếu không highscore mãi mãi trở lại bằng 0 trong so sánh tiếp theo)
      // ban đầu highscore = 0 (thoả mãn score > highscore = 0)
      // nhưng sau khi highscore thay đổi (ví dụ giá trị lần 1 của highscore là 14, thì giá trị highscore sẽ biến thành 14 != 0)
      // nên điều kiện score > highscore = 14 sẽ thực thi khi thực sự score > 14
      // nếu score < 14 hàm sẽ không thực thi và giá trị của highscore vẫn được bảo toàn
      // và khi có giá trị score mới > 14, ví dụ 15, thì giá trị của highscore sẽ được gán mới

      document.querySelector('.highscore').textContent = score; // = highscore cũng được (để ý hàm sự kiện function của nút Again)
    }

    //When guess is to high and to low
  } else if (guess !== secretNumber) {
    // Dùng thao tác DOM để truy xuất ra message từ HTML
    displayMessage(
      // sau đó dùng toán tử 3 ngôi (ternary operator) "? nếu : còn lại thì" khai báo giá trị xuất ra màn hình
      guess > secretNumber ? '🤒 Too high!' : '🪫 Too low!'
    );
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
  // tư duy gán giá trị cho biến trước khi tạo hàm,
  // nếu không gán giá trị thì không thể biết giá trị sẽ bắt đầu từ đâu,
  // vì code chứa khá nhiều hàm, giá trị của biến sẽ nằm ở đâu đó rất khó xác định
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // console.log(secretNumber);

  //DOM to HTML
  displayScore(score); // code này liên quan đến 'gán biến mới score = 20 ở ngay trên'
  displayMessage('Start guessting...');
  displayNumber('?');
  document.querySelector('.guess').value = ''; //giá trị điền vào 'input' type=number là một .value
  //DOM to CSS
  document.querySelector('body').style.backgroundColor = '#222'; // giá trị khai báo luôn là một string khi DOM qua CSS
  document.querySelector('.number').style.width = '15rem';
});
