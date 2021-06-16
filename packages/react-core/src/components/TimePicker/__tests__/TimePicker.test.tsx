import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { TimePicker } from '../TimePicker'

describe('test timepicker onChange method with valid values', () => {
  const testOnChange = ({ input, expects }) => {
    const onChange = jest.fn();

    const event: any = {
      currentTarget: { value: input.value }
    };
    const view = mount(<TimePicker onChange={onChange} value={input.value} is24Hour={input.is24Hour} aria-label="time picker" />);
  
    act(() => {
      view.find('input').prop('onChange')(event);
    })
    expect(onChange).toBeCalledWith(input.value, expects.hour, expects.minutes);
  }

  test('should return the correct value using the AM/PM pattern - midnight', () => {
    testOnChange({ input: { value: "12:00 AM", is24Hour: false }, expects: { hour: 0, minutes: 0 }})
  })

  test('should return the correct value using the AM/PM pattern - midday', () => {
    testOnChange({ input: { value: "12:35 PM", is24Hour: false }, expects: { hour: 12, minutes: 35 }})
  })

  test('should return the correct value using the AM/PM pattern - last minute of the day', () => {
    testOnChange({ input: { value: "11:59 PM", is24Hour: false }, expects: { hour: 23, minutes: 59 }})
  })

  test('should return the correct value using the 24h pattern - midnight', () => {
    testOnChange({ input: { value: "00:00", is24Hour: true }, expects: { hour: 0, minutes: 0 }})
  })

  test('should return the correct value using the 24h pattern - midday', () => {
    testOnChange({ input: { value: "12:35", is24Hour: false }, expects: { hour: 12, minutes: 35 }})
  })

  test('should return the correct value using the 24h pattern - last minute of the day', () => {
    testOnChange({ input: { value: "23:59", is24Hour: true }, expects: { hour: 23, minutes: 59 }})
  })
})
