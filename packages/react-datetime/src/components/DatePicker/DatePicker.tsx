import * as React from 'react';
import { css } from '@patternfly/react-styles';
import '@patternfly/patternfly/patternfly-date-picker.css';
import styles from '@patternfly/react-styles/css/components/DatePicker/date-picker';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { Locales, Locale } from '../../helpers';
import { TextInput } from '@patternfly/react-core/dist/js/components/TextInput/TextInput';
import { Popover } from '@patternfly/react-core/dist/js/components/Popover/Popover';
import { InputGroup } from '@patternfly/react-core/dist/js/components/InputGroup/InputGroup';
import OutlinedCalendarAltIcon from '@patternfly/react-icons/dist/js/icons/outlined-calendar-alt-icon';
import { parse, format, isValid as isNotNull } from 'date-fns';
import { CalendarMonth } from '../CalendarMonth';

export interface DatePickerProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'onChange' | 'onFocus' | 'onBlur' | 'disabled' | 'ref'> {
  /** Additional classes added to the date time picker. */
  className?: string;
  /** Flag indicating whether the value of the date picker is invalid. */
  isInvalid?: boolean;
  /** Accessible label for the date picker */
  'aria-label'?: string;
  /** The minimum date that a user can start picking from. */
  minDate?: string;
  /** The maximum date that a user can pick to. */
  maxDate?: string;
  /** The case sensitive date format according to date-fns */
  dateFormat?: string;
  /** Flag indicating the date picker is disabled*/
  isDisabled?: boolean;
  /** Specify the locale of the date. */
  locale?: Locale;
  /** String to display in the empty date picker field as a hint for the expected date format */
  placeholder?: string;
  /** A date string. Defaults to the current date. */
  value?: string;
  /** Error message to display when the date is provided in an invalid format. */
  invalidFormatErrorMessage?: string;
  /** Error message to display when the date is provided in outside the valid date range. */
  dateOutOfRangeErrorMessage?: string;
  /** Error message to display when the date is provided before the provided minDate. */
  beforeMinDateErrorMessage?: string;
  /** Error message to display when the date is provided after the provided maxDate. */
  afterEndDateErrorMessage?: string;
  /** Callback called every time the input value changes */
  onChange?: (value: string, date?: Date) => void;
  /** Text for label */
  helperText?: React.ReactNode;
  /** Aria label for the button */
  buttonAriaLabel?: string;
}

export const DatePicker: React.FunctionComponent<DatePickerProps> = ({
  className,
  isInvalid = false,
  minDate: minDateProp = '',
  maxDate: maxDateProp = '',
  dateFormat = 'MM/dd/yyyy',
  isDisabled = false,
  locale = Locales.enUS,
  placeholder = 'MM/dd/yyyy',
  value: valueProp = '',
  'aria-label': ariaLabel = 'Date picker',
  buttonAriaLabel = 'Toggle date picker',
  onChange = (): any => undefined,
  invalidFormatErrorMessage,
  dateOutOfRangeErrorMessage,
  beforeMinDateErrorMessage,
  afterEndDateErrorMessage,
  helperText,
  ...props
}: DatePickerProps) => {
  const myParse = (date: string) => parse(date, dateFormat, new Date(), { locale });
  const getDefaultValueDate = () => {
    let res = myParse(valueProp);
    if (!isNotNull(res)) {
      if (isNotNull(minDate)) {
        res = new Date(minDate);
      } else if (isNotNull(maxDate)) {
        res = new Date(maxDate);
      } else {
        res = new Date();
      }
    }

    return res;
  };

  const [invalid, setInvalid] = React.useState(isInvalid);
  const [invalidText, setInvalidText] = React.useState('');
  const [value, setValue] = React.useState(valueProp);
  const [minDate, setMinDate] = React.useState(myParse(minDateProp));
  const [maxDate, setMaxDate] = React.useState(myParse(maxDateProp));
  const [valueDate, setValueDate] = React.useState(getDefaultValueDate());
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const [selectOpen, setSelectOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>();

  React.useEffect(() => {
    setValueDate(getDefaultValueDate());
  }, [valueProp]);

  React.useEffect(() => {
    setMinDate(myParse(minDateProp));
  }, [minDateProp]);

  React.useEffect(() => {
    setMaxDate(myParse(maxDateProp));
  }, [maxDateProp]);

  const rangeValidator = (date: Date, setText: boolean) => {
    let isValid = true;
    if (!isNotNull(date)) {
      isValid = false;
      if (setText) {
        setInvalidText(invalidFormatErrorMessage || `Please use format: ${dateFormat}.`);
      }
    } else if (isNotNull(minDate) && isNotNull(maxDate)) {
      if (date < minDate || date > maxDate) {
        isValid = false;
        if (setText) {
          setInvalidText(dateOutOfRangeErrorMessage || `The date is outside the allowable range.`);
        }
      }
    } else if (isNotNull(minDate) && date < minDate) {
      isValid = false;
      if (setText) {
        setInvalidText(beforeMinDateErrorMessage || `Date is before the allowable range.`);
      }
    } else if (isNotNull(maxDate) && date > maxDate) {
      isValid = false;
      if (setText) {
        setInvalidText(afterEndDateErrorMessage || `Date is after the allowable range.`);
      }
    }
    if (setText) {
      setInvalid(!isValid);
    }

    return isValid;
  };

  const onTextInput = (value: string) => {
    setValue(value);
    const newValueDate = myParse(value);
    if (isNotNull(newValueDate)) {
      setValueDate(newValueDate);
    }
    rangeValidator(newValueDate, true);
  };

  const onDateClick = (valueDate: Date) => {
    const newValue = format(valueDate, dateFormat, { locale });
    setValue(newValue);
    setValueDate(valueDate);
    if (rangeValidator(valueDate, true)) {
      onChange(newValue, valueDate);
      setPopoverOpen(false);
    }
  };

  return (
    <div className={css(styles.datePicker, className)} {...props}>
      <Popover
        position="bottom"
        bodyContent={
          <CalendarMonth
            date={valueDate}
            onChange={onDateClick}
            locale={locale}
            validators={[date => rangeValidator(date, false)]}
            onSelectToggle={open => setSelectOpen(open)}
          />
        }
        showClose={false}
        isVisible={popoverOpen}
        shouldClose={(_1, _2, event) => {
          event = event as KeyboardEvent;
          // Let the select menu close
          if (event.keyCode && event.keyCode === 27 && selectOpen) {
            return false;
          }
          // Let our button handle toggling
          if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
            return false;
          }
          setPopoverOpen(false);
          return true;
        }}
        withFocusTrap
        hasNoPadding
        hasAutoWidth
      >
        <InputGroup>
          <TextInput
            isDisabled={isDisabled}
            aria-label={ariaLabel}
            placeholder={placeholder}
            validated={invalid ? 'error' : 'default'}
            value={value}
            onChange={onTextInput}
          />
          <button
            ref={buttonRef}
            className={css(buttonStyles.button, buttonStyles.modifiers.control)}
            aria-label={buttonAriaLabel}
            onClick={() => setPopoverOpen(!popoverOpen)}
          >
            <OutlinedCalendarAltIcon />
          </button>
        </InputGroup>
      </Popover>
      {helperText && <div className={styles.datePickerHelperText}>{helperText}</div>}
      {invalid && <div className={css(styles.datePickerHelperText, styles.modifiers.error)}>{invalidText}</div>}
    </div>
  );
};
DatePicker.displayName = 'DatePicker';
