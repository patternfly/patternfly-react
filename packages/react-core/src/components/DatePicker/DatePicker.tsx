import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DatePicker/date-picker';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import { TextInput } from '../TextInput/TextInput';
import { Popover, PopoverProps } from '../Popover/Popover';
import { InputGroup } from '../InputGroup/InputGroup';
import OutlinedCalendarAltIcon from '@patternfly/react-icons/dist/js/icons/outlined-calendar-alt-icon';
import { CalendarMonth, CalendarFormat, isValidDate } from '../CalendarMonth';

export interface DatePickerProps
  extends CalendarFormat,
    Omit<React.HTMLProps<HTMLInputElement>, 'onChange' | 'onFocus' | 'onBlur' | 'disabled' | 'ref'> {
  /** Additional classes added to the date time picker. */
  className?: string;
  /** Accessible label for the date picker */
  'aria-label'?: string;
  /** How to format the date in the TextInput */
  dateFormat?: (date: Date) => string;
  /** How to format the date in the TextInput */
  dateParse?: (value: string) => Date;
  /** Flag indicating the date picker is disabled*/
  isDisabled?: boolean;
  /** String to display in the empty date picker field as a hint for the expected date format */
  placeholder?: string;
  /** Value of TextInput */
  value?: string;
  /** Error message to display when the TextInput cannot be parsed. */
  invalidFormatText?: string;
  /** Callback called every time the input value changes */
  onChange?: (value: string, date?: Date) => void;
  /** Text for label */
  helperText?: React.ReactNode;
  /** Aria label for the button to open the date picker */
  buttonAriaLabel?: string;
  /** The element to append the popover to */
  appendTo?: HTMLElement | ((ref?: HTMLElement) => HTMLElement);
  /** Props to pass to the Popover */
  popoverProps?: Omit<PopoverProps, 'appendTo'>;
  /** Functions that returns an error message if a date is invalid */
  validators?: ((date: Date) => string)[];
}

export const yyyyMMddFormat = (date: Date) =>
  `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
    .getDate()
    .toString()
    .padStart(2, '0')}`;

export const DatePicker: React.FunctionComponent<DatePickerProps> = ({
  className,
  locale = undefined,
  dateFormat = yyyyMMddFormat,
  dateParse = (val: string) => new Date(`${val}T00:00:00`),
  isDisabled = false,
  placeholder = 'yyyy-MM-dd',
  value: valueProp = '',
  'aria-label': ariaLabel = 'Date picker',
  buttonAriaLabel = 'Toggle date picker',
  onChange = (): any => undefined,
  invalidFormatText = 'Invalid date',
  helperText,
  appendTo,
  popoverProps,
  monthFormat,
  weekdayFormat,
  longWeekdayFormat,
  dayFormat,
  weekStart,
  validators = [],
  rangeStart,
  style = {},
  ...props
}: DatePickerProps) => {
  const [value, setValue] = React.useState(valueProp);
  const [valueDate, setValueDate] = React.useState(dateParse(value));
  const [errorText, setErrorText] = React.useState('');
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const [selectOpen, setSelectOpen] = React.useState(false);
  const [pristine, setPristine] = React.useState(true);
  const widthChars = React.useMemo(() => Math.max(dateFormat(new Date()).length, placeholder.length), [dateFormat]);
  (style as any)['--pf-c-date-picker__input--c-form-control--width-chars'] = widthChars;
  const buttonRef = React.useRef<HTMLButtonElement>();

  React.useEffect(() => {
    setValue(valueProp);
    setValueDate(dateParse(valueProp));
  }, [valueProp]);

  const setError = (date: Date) => setErrorText(validators.map(validator => validator(date)).join('\n') || '');

  const onTextInput = (value: string) => {
    setPristine(false);
    setValue(value);
    const newValueDate = dateParse(value);
    setValueDate(newValueDate);
    if (isValidDate(newValueDate)) {
      onChange(value, new Date(newValueDate));
    } else {
      onChange(value);
    }
  };

  const onBlur = () => {
    if (pristine) {
      return;
    }
    const newValueDate = dateParse(value);
    if (isValidDate(newValueDate)) {
      setError(newValueDate);
    } else {
      setErrorText(invalidFormatText);
    }
  };

  const onDateClick = (newValueDate: Date) => {
    const newValue = dateFormat(newValueDate);
    setValue(newValue);
    setValueDate(newValueDate);
    setError(newValueDate);
    setPopoverOpen(false);
    onChange(newValue, new Date(newValueDate));
  };

  const onKeyPress = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter' && value) {
      if (isValidDate(valueDate)) {
        setError(valueDate);
      } else {
        setErrorText(invalidFormatText);
      }
    }
  };

  return (
    <div className={css(styles.datePicker, className)} style={style} {...props}>
      <Popover
        position="bottom"
        bodyContent={
          <CalendarMonth
            date={valueDate}
            onChange={onDateClick}
            locale={locale}
            // Use truthy values of strings
            validators={validators.map(validator => (date: Date) => !validator(date))}
            onSelectToggle={open => setSelectOpen(open)}
            monthFormat={monthFormat}
            weekdayFormat={weekdayFormat}
            longWeekdayFormat={longWeekdayFormat}
            dayFormat={dayFormat}
            weekStart={weekStart}
            rangeStart={rangeStart}
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
        appendTo={appendTo}
        {...popoverProps}
      >
        <div className={styles.datePickerInput}>
          <InputGroup>
            <TextInput
              isDisabled={isDisabled}
              aria-label={ariaLabel}
              placeholder={placeholder}
              validated={errorText ? 'error' : 'default'}
              value={value}
              onChange={onTextInput}
              onBlur={onBlur}
              onKeyPress={onKeyPress}
            />
            <button
              ref={buttonRef}
              className={css(buttonStyles.button, buttonStyles.modifiers.control)}
              aria-label={buttonAriaLabel}
              type="button"
              onClick={() => setPopoverOpen(!popoverOpen)}
              disabled={isDisabled}
            >
              <OutlinedCalendarAltIcon />
            </button>
          </InputGroup>
        </div>
      </Popover>
      {helperText && <div className={styles.datePickerHelperText}>{helperText}</div>}
      {errorText && <div className={css(styles.datePickerHelperText, styles.modifiers.error)}>{errorText}</div>}
    </div>
  );
};
DatePicker.displayName = 'DatePicker';
