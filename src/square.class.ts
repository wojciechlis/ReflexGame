import { Stats } from './stats.class';
import { Timer } from './timer.class';

export class Square {
    id: number;
    isActive: boolean;
    squareElement: HTMLElement;

    constructor(boardElement: HTMLElement, id: number) {
        this.squareElement = document.createElement("div");
        this.squareElement.id = "button${id}";
        this.deactivate();
        boardElement.appendChild(this.squareElement);
        this.squareElement.addEventListener("click", (e: Event) => this.click());
    }

    activate() {
        this.squareElement.className = "squareActivated";
        this.isActive = true;
    }

    deactivate() {
        this.squareElement.className = "squareDeactivated";
        this.isActive = false;
    }

    private click() {
        if (Timer.getInstance().isOngoing == false) return;
        if (this.isActive) {
            Stats.getInstance().addPoint();
            this.deactivate();
        }
        else {
            Stats.getInstance().loseLife();
        }
    }
}