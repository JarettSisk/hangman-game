"use strict"
// Create the Hangman class
class Hangman {
  constructor (word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = "playing";
  }
  get getPuzzle() {
    let puzzle = "";
  
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += "<span>" + letter + "</span>";
      } else {
        puzzle += "<span>*</span>";
      }

    })
    return puzzle;

  }
  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess);
    if(isUnique) {
      this.guessedLetters.push(guess);
    }
  
    if (isUnique && isBadGuess && this.status === "playing" ) {
      this.remainingGuesses--;
    }

  }
  get checkStatus() {
    let puzzle = this.getPuzzle;
  
    if (!puzzle.includes("*")) this.status = "Great work! You guessed the word!";
      
    if (this.remainingGuesses <= 0) this.status = `Nice try! The word was: <strong>${this.word.join("")}</strong>`;
  
    return `<strong>Game status:</strong> ${this.status}`
  }
  
}

// render the game to the DOM
let renderGame = (game) => {

   let htmlContent = 
   `<div id="gameDiv">
     <h1>Hangman</h1>
     <br>
     <p><strong>How to play:</strong> Use the letters on your keyboard to make a guess</p>
     <br>
     <div class="puzzle">${game.getPuzzle}</div>
     <p><strong>Remaining guesses:</strong> ${game.remainingGuesses}</p>
     <p>${game.checkStatus}</p>
   </div>`
  
  document.querySelector("body").innerHTML = "";
  document.querySelector("body").innerHTML += htmlContent;
  let playAgain = document.createElement("button");
  playAgain.className = "button";
  if (game.status !== "playing" ) {
    playAgain.textContent = "play again";

    playAgain.addEventListener("click", () => {
      location.reload();
    })

    document.querySelector("#gameDiv").appendChild(playAgain);
  
  }
  
}






