import { formatDate } from '../DateHelpers';

describe('formatTime', () => {
  test('parsed a valid date', () => {
    expect(formatDate('1/1/1')).toEqual('1/1/2001');
  });
  test('parsed a valid date and date', () => {
    expect(formatDate('2/2/2 2:30')).toEqual('2/2/2002');
  });
  test('parsed a non valid date', () => {
    expect(formatDate('date')).toEqual('date');
  });
});
