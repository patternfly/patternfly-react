import { getUniqueId } from './util';

test('getUniqueId', () => {
  expect(getUniqueId()).not.toBe(getUniqueId());
});
