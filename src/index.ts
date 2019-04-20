import { Game } from './game.class';

let game = new Game(25, 60, 3);

let startButton: HTMLElement = document.querySelector("#startButton");
let resetButton: HTMLElement = document.querySelector("#resetButton");

startButton.onclick = function() {
    game.startNewGame();
}

resetButton.onclick = function() {
    game.resetGame();
}
