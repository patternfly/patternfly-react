import { defaultTitle } from './formatters';

describe('formatters', () => {
  test('defaultTitle', () => {
    expect(defaultTitle('test')).toBe('test');
    expect(defaultTitle({ title: 'test' })).toBe('test');
  });
});
