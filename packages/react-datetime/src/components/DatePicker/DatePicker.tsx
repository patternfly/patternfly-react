import * as React from 'react';
import { css } from '@patternfly/react-styles';
import '@patternfly/patternfly/patternfly-date-picker.css';
import styles from '@patternfly/react-styles/css/components/DatePicker/date-picker';
import { Locales, Locale } from '../../helpers';
import { TextInput } from '@patternfly/react-core/dist/js/components/TextInput/TextInput';
import { Popover } from '@patternfly/react-core/dist/js/components/Popover/Popover';
import { parse, format, isValid } from 'date-fns';
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
  /** The case sensitive pattern of tokens representing desired readable format of the date. https://date-fns.org/v2.16.1/docs/format */
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
  onChange = (): any => undefined,
  invalidFormatErrorMessage,
  dateOutOfRangeErrorMessage,
  beforeMinDateErrorMessage,
  afterEndDateErrorMessage,
  ...props
}: DatePickerProps) => {
  const myParse = (date: string) => parse(date, dateFormat, new Date(), { locale });
  const getDefaultValueDate = () => {
    let res = myParse(valueProp);
    if (!isValid(res)) {
      if (isValid(minDate)) {
        res = new Date(minDate);
      } else if (isValid(maxDate)) {
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

  React.useEffect(() => {
    setValueDate(getDefaultValueDate());
  }, [valueProp]);

  React.useEffect(() => {
    setMinDate(myParse(minDateProp));
  }, [minDateProp]);

  React.useEffect(() => {
    setMaxDate(myParse(maxDateProp));
  }, [maxDateProp]);

  const validateDate = (date: Date) => {
    let isInvalid = false;
    if (!isValid(date)) {
      isInvalid = true;
      setInvalidText(invalidFormatErrorMessage || `Please use format: ${dateFormat}.`);
    } else if (isValid(minDate) && isValid(maxDate)) {
      if (date < minDate || date > maxDate) {
        isInvalid = true;
        setInvalidText(dateOutOfRangeErrorMessage || `The date is outside the allowable range.`);
      }
    } else if (isValid(minDate) && date < minDate) {
      isInvalid = true;
      setInvalidText(beforeMinDateErrorMessage || `Date is before the allowable range.`);
    } else if (isValid(maxDate) && date > maxDate) {
      isInvalid = true;
      setInvalidText(afterEndDateErrorMessage || `Date is after the allowable range.`);
    }
    setInvalid(isInvalid);

    return !isInvalid;
  };

  const onTextInput = (value: string) => {
    setValue(value);
    const newValueDate = myParse(value);
    if (isValid(newValueDate)) {
      setValueDate(newValueDate);
    }
    validateDate(newValueDate);
  };

  const onDateClick = (valueDate: Date) => {
    const newValue = format(valueDate, dateFormat, { locale });
    setValue(newValue);
    setValueDate(valueDate);
    if (validateDate(valueDate)) {
      onChange(newValue, valueDate);
      setPopoverOpen(false);
    }
  };

  return (
    <div className={css(styles.datePicker, className)} {...props}>
      <Popover
        position="bottom"
        bodyContent={<CalendarMonth date={valueDate} onChange={onDateClick} locale={locale} />}
        minWidth="23.2rem"
        showClose={false}
        isVisible={popoverOpen}
        shouldOpen={() => {
          setPopoverOpen(true);
          return true;
        }}
        shouldClose={() => {
          setPopoverOpen(false);
          return true;
        }}
        withFocusTrap
      >
        <TextInput
          isDisabled={isDisabled}
          iconVariant="calendar"
          aria-label={ariaLabel}
          placeholder={placeholder}
          validated={invalid ? 'error' : 'default'}
          value={value}
          onChange={onTextInput}
        />
      </Popover>
      {invalid && <div className={css(styles.datePickerHelperText, styles.modifiers.error)}>{invalidText}</div>}
    </div>
  );
};
DatePicker.displayName = 'DatePicker';
