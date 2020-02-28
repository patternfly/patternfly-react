import { getDateFromTime, formatTime } from '../TimeHelpers';

describe('getDateFromTime', () => {
  test('creates a date object with time only', () => {
    expect(getDateFromTime('2:30').getHours()).toEqual(2);
    expect(getDateFromTime('2:30').getMinutes()).toEqual(30);
  });

  test('creates a date object with time and date', () => {
    expect(getDateFromTime('2/2/2 2:30').getHours()).toEqual(2);
    expect(getDateFromTime('2/2/2 2:30').getMinutes()).toEqual(30);
  });

  test('doesnt creates a date object with ivalid string', () => {
    expect(getDateFromTime('time')).toEqual('time');
  });
});

describe('formatTime', () => {
  test('parsed a valid time', () => {
    expect(formatTime('2:30')).toEqual('2:30 AM');
  });
  test('parsed a valid time and date', () => {
    expect(formatTime('2/2/2 2:30')).toEqual('2:30 AM');
  });
  test('parsed a non valid time', () => {
    expect(formatTime('time')).toEqual('time');
  });
});
