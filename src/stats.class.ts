import { Timer } from './timer.class';
export class Stats {

    private static instance: Stats;
    private lives: number;
    private score: number;
    private maxLives: number = 3;

    private constructor() {
    }

    static getInstance(): Stats {
        if (!Stats.instance) {
            Stats.instance = new Stats();
        }
        return Stats.instance;
    }

    setMaxLives(lives: number) {
        this.maxLives = lives;
    }

    setLives(lives: number) {
        this.lives = lives;
        document.querySelector("#lives").textContent = lives.toString();
    }

    setScore(score: number) {
        this.score = score;
        document.querySelector("#score").textContent = score.toString();
    }

    addPoint() {
        this.setScore(this.score+1);
    }

    loseLife() {
        this.setLives(this.lives-1);
        
        if (this.lives==0) 
        {
            Timer.getInstance().stop();
            alert("Straciłeś wszystkie życia. Koniec gry!");
        }
        else{
            alert("Straciłeś życie!");
        }
    }

    reset() {
        this.setLives(this.maxLives);
        this.setScore(0);
    }
}