import { Square } from './square.class';
import { Stats } from './stats.class';

export class Board {
    boardElement: HTMLElement;
    squareCount: number;
    squares: Square[];
    activeSquare: number;

    constructor(squareCount: number) {
        this.squareCount = squareCount;
        this.boardElement = document.querySelector("#board");
        this.activeSquare = 0;
        this.squares = [];
        for (let i = 0; i < squareCount; i++) {
            this.squares.push(new Square(this.boardElement, i));
        }
    }

    activateRandomSquare() {
        this.activeSquare = Math.floor(Math.random() * this.squareCount);
        this.squares[this.activeSquare].activate();
    }

    deactivateSquare() {
        if (this.squares[this.activeSquare].isActive) {
            Stats.getInstance().loseLife();
            this.squares[this.activeSquare].deactivate();
        }
    }

    clear() {
        for (let i = 0; i < this.squareCount; i++) {
            this.squares[i].deactivate();
        }
    }
}
