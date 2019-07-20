"use strict"
//Hangman Game
const startGame = async () => {
  let randomWord = await fatchPuzzle("2").then((puzzle) => {
    return puzzle.toString();
  }).catch((err) => {
    console.log(`Error: ${err}`);
  })
   
  const game1 = new Hangman(randomWord, Math.floor(randomWord.length / 2));

  renderGame(game1);
    
  window.addEventListener("keypress", (e) => {
    game1.makeGuess(e.key);
    game1.checkStatus;
    renderGame(game1);
  })
  
}

startGame();
  










