import { capitalize, getUniqueId } from './util';

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
