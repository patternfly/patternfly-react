import Timer from './Timer';

jest.useFakeTimers();
jest.spyOn(global, 'clearTimeout');
jest.spyOn(global, 'setTimeout');

beforeEach(() => {
  global.clearTimeout.mockClear();
  global.setTimeout.mockClear();
});

describe('clearTimer', () => {
  test('checkes for timer before trying to clear it', () => {
    const timer = new Timer(jest.fn(), 100);
    timer.clearTimer();
    expect(global.clearTimeout).not.toBeCalled();
  });

  test('clears the started timer', () => {
    const timer = new Timer(jest.fn(), 100);
    timer.startTimer();
    timer.clearTimer();
    expect(global.clearTimeout).toBeCalled();
    expect(timer.timer).toBe(null);
  });
});

describe('startTimer', () => {
  test('uses function and delay from constructor', () => {
    const fn = jest.fn();
    const delay = 100;
    const timer = new Timer(fn, delay);
    timer.startTimer();
    expect(global.setTimeout).toBeCalledWith(fn, delay);
  });

  test('uses the function passed to startTimer', () => {
    const fn = jest.fn();
    const delay = 100;
    const timer = new Timer(jest.fn(), delay);
    timer.startTimer(fn);
    expect(global.setTimeout).toBeCalledWith(fn, delay);
  });

  test('uses the delay passed to startTimer', () => {
    const fn = jest.fn();
    const delay = 100;
    const timer = new Timer(fn, 50);
    timer.startTimer(undefined, delay);
    expect(global.setTimeout).toBeCalledWith(fn, delay);
  });
});

describe('skipTimer', () => {
  test('executes the function and clears the timer', () => {
    const fn = jest.fn();
    const timer = new Timer(fn, 100);
    timer.startTimer();
    timer.skipTimer();
    expect(fn).toBeCalledWith(true);
    expect(global.clearTimeout).toBeCalled();
  });

  test('does not execute the function if the timer has not started', () => {
    const fn = jest.fn();
    const timer = new Timer(fn, 100);
    timer.skipTimer();
    expect(fn).not.toBeCalled();
    expect(global.clearTimeout).not.toBeCalled();
  });
});
