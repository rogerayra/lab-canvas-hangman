var hangman;
let canvasHangman;

function Hangman() {
  this.words = ["1", "12", "123", "1234"];
  this.secretWord = "Hola";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  let random = Math.floor(Math.random() * this.words.length);
  return this.words[random];
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  return keyCode >= 65 && keyCode <= 90;
};

Hangman.prototype.checkClickedLetters = function(key) {
  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function(i) {

     this.guessedLetter += this.secretWord[i].toLocaleUpperCase()
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft === 0;
};

Hangman.prototype.checkWinner = function () {
  return this.guessedLetter.split('').sort().join() === this.secretWord.split('').sort().join();
};

document.getElementById("start-game-button").onclick = function() {

  hangman = new Hangman();
  canvasHangman = new HangmanCanvas(hangman.getWord());
  canvasHangman.createBoard();
  canvasHangman.drawLines();

};

document.onkeydown = function(e) {
  let letra = String.fromCharCode(e.keyCode);
  
}
