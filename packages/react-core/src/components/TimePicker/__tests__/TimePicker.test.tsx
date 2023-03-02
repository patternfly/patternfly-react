import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TimePicker, TimePickerProps } from '../TimePicker';

describe('TimePicker', () => {
  test('Renders in strict mode', () => {
    const validateTime = (_time: string) => {
      return true;
    };

    const consoleError = jest.spyOn(console, 'error');
    const { asFragment } = render(
      <React.StrictMode>
        <TimePicker removeFindDomNode value={'00:00'} validateTime={validateTime} aria-label="time picker" />
      </React.StrictMode>
    );
    expect(consoleError).not.toHaveBeenCalled();
    expect(screen.getByLabelText('time picker')).not.toHaveClass('pf-m-error');
  });

  describe('test timepicker onChange method with valid values', () => {
    const testOnChange = async ({
      inputProps,
      expects
    }: {
      inputProps: TimePickerProps;
      expects: { hour: number; minutes: number; seconds: number };
    }) => {
      const onChange = jest.fn();
      const user = userEvent.setup();

      render(<TimePicker onChange={onChange} {...inputProps} aria-label="time picker" />);

      await user.type(screen.getByLabelText('time picker'), String(inputProps.value));
      expect(onChange).toHaveBeenCalledWith(
        expect.any(Object),
        inputProps.value,
        expects.hour,
        expects.minutes,
        expects.seconds,
        true
      );
    };

    test('should return the correct value using the AM/PM pattern - midnight', async () => {
      await testOnChange({
        inputProps: { value: '12:00 AM', is24Hour: false },
        expects: { hour: 0, minutes: 0, seconds: null }
      });
    });

    test('should return the correct value using the AM/PM pattern - midday', async () => {
      await testOnChange({
        inputProps: { value: '12:35 PM', is24Hour: false },
        expects: { hour: 12, minutes: 35, seconds: null }
      });
    });

    test('should return the correct value using the AM/PM pattern - last minute of the day', async () => {
      await testOnChange({
        inputProps: { value: '11:59 PM', is24Hour: false },
        expects: { hour: 23, minutes: 59, seconds: null }
      });
    });

    test('should return the correct value using the 24h pattern - midnight', async () => {
      await testOnChange({
        inputProps: { value: '00:00:00', is24Hour: true, includeSeconds: true },
        expects: { hour: 0, minutes: 0, seconds: 0 }
      });
    });

    test('should return the correct value using the 24h pattern - midday', async () => {
      await testOnChange({
        inputProps: { value: '12:35', is24Hour: false },
        expects: { hour: 12, minutes: 35, seconds: null }
      });
    });

    test('should return the correct value using the 24h pattern - last minute of the day', async () => {
      await testOnChange({
        inputProps: { value: '23:59', is24Hour: true },
        expects: { hour: 23, minutes: 59, seconds: null }
      });
    });

    test('should call onChange when pressing Enter', async () => {
      const onChange = jest.fn();
      const user = userEvent.setup();

      render(<TimePicker onChange={onChange} aria-label="time picker" />);

      // Take into account timezones when tests are ran
      const isPM = new Date().getHours() > 12;

      await user.type(screen.getByLabelText('time picker'), `11:11`);
      await user.keyboard('[Enter]');
      expect(onChange).toHaveBeenLastCalledWith(
        expect.any(Object),
        `11:11 ${isPM ? 'PM' : 'AM'}`,
        isPM ? 23 : 11,
        11,
        null,
        true
      );
    });
  });

  describe('test isInvalid', () => {
    test('should be valid by default', () => {
      const validateTime = (_time: string) => {
        return true;
      };

      render(<TimePicker value={'00:00'} validateTime={validateTime} aria-label="time picker" />);

      expect(screen.getByLabelText('time picker')).not.toHaveClass('pf-m-error');
    });

    test('should stay valid after onChange', async () => {
      const validateTime = (_time: string) => {
        return true;
      };
      const user = userEvent.setup();

      render(<TimePicker value="00:00" validateTime={validateTime} aria-label="time picker" />);

      const input = screen.getByLabelText('time picker');

      await user.type(input, '01:00');
      expect(input).not.toHaveClass('pf-m-error');
    });

    test('should be invalid after onBlur', async () => {
      const user = userEvent.setup();

      render(
        <>
          <div>Other element</div>
          <TimePicker value={'00:00'} aria-label="time picker" />
        </>
      );

      await user.type(screen.getByLabelText('time picker'), '14:00');
      expect(screen.queryByText('Invalid time format')).toBeNull();

      await user.click(screen.getByText('Other element'));
      expect(screen.getByText('Invalid time format')).toBeInTheDocument();
    });

    test('should be invalid when invalid time prop is passed', () => {
      render(<TimePicker time="00:00" aria-label="time picker" />);

      expect(screen.getByText('Invalid time format')).toBeInTheDocument();
    });
  });

  describe('test includeSeconds', () => {
    const baseProps = {
      'aria-label': 'time picker',
      value: '12:00 PM',
      includeSeconds: true
    };

    it('should be valid still with a max value of "11:59:59 PM" by default', async () => {
      const user = userEvent.setup();

      render(<TimePicker {...baseProps} />);

      await user.type(screen.getByLabelText(baseProps['aria-label']), '11:59:59 PM');
      expect(screen.queryByText('Invalid time format')).toBeNull();
    });

    it('should be valid still with a max value of "23:59:59" by default when using 24 hour time', async () => {
      const user = userEvent.setup();

      render(<TimePicker {...baseProps} value="20:00" is24Hour />);

      await user.type(screen.getByLabelText(baseProps['aria-label']), '23:59:59');
      expect(screen.queryByText('Invalid time format')).toBeNull();
    });

    it('should be invalid with a max value of "24:00:00" by default', async () => {
      const user = userEvent.setup();

      render(
        <>
          <div>Other element</div>
          <TimePicker {...baseProps} value="20:00" is24Hour />
        </>
      );

      await user.type(screen.getByLabelText(baseProps['aria-label']), '24:00:00');
      expect(screen.queryByText('Invalid time format')).toBeNull();

      await user.click(screen.getByText('Other element'));
      expect(screen.getByText('Invalid time format')).toBeInTheDocument();
    });
  });
});
