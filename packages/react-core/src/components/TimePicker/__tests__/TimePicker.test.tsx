import * as React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { TimePicker } from '../TimePicker'

describe('test timepicker onChange method with valid values', () => {
  const testOnChange = ({ inputProps, expects }) => {
    const onChange = jest.fn();

    const event: any = {
      currentTarget: { value: inputProps.value }
    };
    const view = mount(<TimePicker onChange={onChange} {...inputProps} aria-label="time picker" />);

    act(() => {
      view.find('input').prop('onChange')(event);
    })
    expect(onChange).toBeCalledWith(inputProps.value, expects.hour, expects.minutes, expects.seconds, true);
  }

  test('should return the correct value using the AM/PM pattern - midnight', () => {
    testOnChange({ inputProps: { value: "12:00 AM", is24Hour: false }, expects: { hour: 0, minutes: 0, seconds: null }})
  })

  test('should return the correct value using the AM/PM pattern - midday', () => {
    testOnChange({ inputProps: { value: "12:35 PM", is24Hour: false }, expects: { hour: 12, minutes: 35, seconds: null }})
  })

  test('should return the correct value using the AM/PM pattern - last minute of the day', () => {
    testOnChange({ inputProps: { value: "11:59 PM", is24Hour: false }, expects: { hour: 23, minutes: 59, seconds: null }})
  })

  test('should return the correct value using the 24h pattern - midnight', () => {
    testOnChange({ inputProps: { value: "00:00:00", is24Hour: true, includeSeconds: true }, expects: { hour: 0, minutes: 0, seconds: 0 }})
  })

  test('should return the correct value using the 24h pattern - midday', () => {
    testOnChange({ inputProps: { value: "12:35", is24Hour: false }, expects: { hour: 12, minutes: 35, seconds: null }})
  })

  test('should return the correct value using the 24h pattern - last minute of the day', () => {
    testOnChange({ inputProps: { value: "23:59", is24Hour: true }, expects: { hour: 23, minutes: 59, seconds: null }})
  })
})

describe('test isInvalid', () => {
  test('should be valid by default', () => {
    const validateTime = (time: string) => {
      return true;
    }

    const view = mount(<TimePicker value={"00:00"} validateTime={validateTime} aria-label="time picker" />);

    expect(view.find('.pf-m-error')).toHaveLength(0);
  })

  test('should stay valid after onChange', () => {
    const validateTime = (time: string) => {
      return true;
    }

    const event: any = {
      currentTarget: { value: "01:00" }
    };
    const view = mount(<TimePicker value={"00:00"} validateTime={validateTime} aria-label="time picker" />);

    act(() => {
      view.find('input').prop('onChange')(event);
    })
    view.update();

    expect(view.find('.pf-m-error')).toHaveLength(0);
  })

  test('should be invalid after onChange', () => {
    const validateTime = (time: string) => {
      return false;
    }

    const event: any = {
      currentTarget: { value: "01:00" }
    };
    const view = mount(<TimePicker value={"00:00"} validateTime={validateTime} aria-label="time picker" />);

    act(() => {
      view.find('input').prop('onChange')(event);
    })
    view.update();

    expect(view.find('.pf-m-error')).toHaveLength(1);
  })
})

describe('test includeSeconds', () => {
  const baseProps = {
    "aria-label": "time picker",
    value: "12:00 PM",
    includeSeconds: true
  };

  it('should be valid still with a max value of "11:59:59 PM" by default', () => {
    const event: any = { currentTarget: { value: "11:59:59 PM" } };
    const view = mount(<TimePicker {...baseProps} />);

    act(() => view.find('input').prop('onChange')(event));
    view.update();

    expect(view.find('.pf-m-error')).toHaveLength(0);
  });

  it('should be valid still with a max value of "23:59:59" by default when using 24 hour time', () => {
    const event: any = { currentTarget: { value: "23:59:59" } };
    const view = mount(<TimePicker {...baseProps} value="20:00" is24Hour />);

    act(() => view.find('input').prop('onChange')(event));
    view.update();

    expect(view.find('.pf-m-error')).toHaveLength(0);
  });

  it('should be invalid with a max value of "24:00:00" by default', () => {
    const event: any = { currentTarget: { value: "24:00:00" } };
    const view = mount(<TimePicker {...baseProps} value="20:00" is24Hour />);

    act(() => view.find('input').prop('onChange')(event));
    view.update();

    expect(view.find('.pf-m-error')).toHaveLength(1);
  });
});
