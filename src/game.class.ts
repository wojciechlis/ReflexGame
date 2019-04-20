import { Timer } from './timer.class';
import { Board } from './board.class';
import { Stats } from './stats.class';

export class Game {
    private timer: Timer;
    private board: Board;
    private time: number;
    private isReset: boolean;

    constructor(boardSize: number, time: number, lives: number) {

        this.time = time;
        Stats.getInstance().setMaxLives(lives);
        const timer = Timer.getInstance();
        const board: Board = new Board(boardSize);

        timer.addEventListener("each3secondsUpdated", function () {
            board.activateRandomSquare();
        });

        timer.addEventListener("after2secondsUpdated", function () {
            board.deactivateSquare();
        });

        timer.addEventListener("targetAchieved", function () {
            alert("Koniec gry!");
        });

        this.board = board;
        this.timer = timer;
        this.resetGame();
    }

    startNewGame() {
        if (this.isReset) {
            this.timer.start();
            this.isReset = false;
        }
    }

    resetGame() {
        this.timer.reset(this.time);
        this.board.clear();
        Stats.getInstance().reset();
        this.isReset = true;
    }
}