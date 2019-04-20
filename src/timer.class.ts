export class Timer {

    private static instance: Timer;
    timerElement: HTMLElement;
    startValue: number;
    counter: number;
    eventEmitter: HTMLElement;
    intervalId: number;
    isOngoing: boolean;

    private constructor() {
        this.isOngoing = false;
        this.eventEmitter = document.createElement('span');
        this.timerElement = document.querySelector("#timer");
    }

    static getInstance(): Timer {
        if (!Timer.instance) {
            Timer.instance = new Timer();
        }
        return Timer.instance;
    }

    addEventListener(event, listener) {
        this.eventEmitter.addEventListener(event, listener);
    }

    start() {
        if (this.isOngoing) return;
        this.isOngoing = true;
        this.intervalId = setInterval(() => {
            this.counter = this.counter - 1;
            this.timerElement.textContent = this.counter.toString();
            if (this.counter == 0) {
                clearInterval(this.intervalId);
                this.isOngoing = false;
                this.eventEmitter.dispatchEvent(new CustomEvent('targetAchieved'));
                return;
            }
            if (this.counter % 3 == 0) this.eventEmitter.dispatchEvent(new CustomEvent('each3secondsUpdated'));
            if (this.counter % 3 == 1) this.eventEmitter.dispatchEvent(new CustomEvent('after2secondsUpdated'));
        }, 1000)
    }

    stop() {
        if (this.isOngoing) {
            clearInterval(this.intervalId);
            this.isOngoing = false;
        }
    }

    reset(seconds: number) {
        if (this.isOngoing) {
            clearInterval(this.intervalId);
            this.isOngoing = false;
        }
        this.startValue = seconds;
        this.counter = seconds;
        this.timerElement.textContent = this.counter.toString();
    }
}