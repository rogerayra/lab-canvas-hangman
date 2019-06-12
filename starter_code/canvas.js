
function HangmanCanvas(secretWord) {
  this.secretWord = secretWord;

  this.canvas = document.getElementById('hangman');

  this.ctx = this.canvas.getContext('2d');
  
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

HangmanCanvas.prototype.drawLines = function () {
  let x = 500; 
  let y = 500;

  for (let i= 0; i < this.secretWord.length; i++){
    this.ctx.beginPath();  
    this.ctx.moveTo(x, y);  
    x += 50;
    this.ctx.lineTo(x, y)
    this.ctx.stroke();
    this.ctx.closePath();
    x += 20;
    
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};



