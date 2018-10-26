import { capitalize, getUniqueId, debounce } from './util';

test('capitalize', () => {
  expect(capitalize('foo')).toBe('Foo');
});

test('getUniqueId', () => {
  expect(getUniqueId()).not.toBe(getUniqueId());
});

test('getUniqueId prefixed', () => {
  expect(getUniqueId().substring(0, 3)).toBe('pf-');
  expect(getUniqueId('pf-switch').substring(0, 10)).toBe('pf-switch-');
});

test('debounce', () => {
  jest.useFakeTimers();
  const callback = jest.fn();
  const debouncedFunction = debounce(callback, 50);

  debouncedFunction();
  // At this point in time, the callback should not have been called yet
  expect(callback).toHaveBeenCalledTimes(0);

  for (let i = 0; i < 10; i++) {
    jest.advanceTimersByTime(50);
    debouncedFunction();
  }

  expect(callback).toBeCalledTimes(10);
});
