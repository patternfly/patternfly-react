/**
 * Timer class implements a simple timeout mechanism
 */
class Timer {
  constructor(func, delay) {
    this.timer = null;
    this.delay = delay;
    this.execute = func;
  }

  // startTimer optionally takes a new func and delay so the timer instance can be reused.
  startTimer(func, delay = -1) {
    this.clearTimer();
    if (func) this.execute = func;
    if (delay >= 0) this.delay = delay;
    this.timer = setTimeout(this.execute, this.delay);
  }
  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
  skipTimer() {
    if (this.timer) {
      this.execute(true); // execute can take an optional `skipped` argument
      this.clearTimer();
    }
  }
}

export default Timer;
