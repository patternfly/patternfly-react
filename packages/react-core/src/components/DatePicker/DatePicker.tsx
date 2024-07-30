import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DatePicker/date-picker';
import calendarMonthStyles from '@patternfly/react-styles/css/components/CalendarMonth/calendar-month';
import { TextInput, TextInputProps } from '../TextInput/TextInput';
import { Button } from '../Button';
import { Popover, PopoverProps } from '../Popover/Popover';
import { InputGroup, InputGroupItem } from '../InputGroup';
import OutlinedCalendarAltIcon from '@patternfly/react-icons/dist/esm/icons/outlined-calendar-alt-icon';
import { CalendarMonth, CalendarFormat } from '../CalendarMonth';
import { useImperativeHandle } from 'react';
import { KeyTypes } from '../../helpers';
import { isValidDate } from '../../helpers/datetimeUtils';
import { HelperText, HelperTextItem } from '../HelperText';
import cssFormControlWidthChars from '@patternfly/react-tokens/dist/esm/c_date_picker__input_c_form_control_width_chars';

/** Props that customize the requirement of a date */
export interface DatePickerRequiredObject {
  /** Flag indicating the date is required. */
  isRequired?: boolean;
  /** Error message to display when the text input is empty and the isRequired prop is also passed in. */
  emptyDateText?: string;
}

/** The main date picker component. */

export interface DatePickerProps
  extends CalendarFormat,
    Omit<React.HTMLProps<HTMLInputElement>, 'onChange' | 'onFocus' | 'onBlur' | 'disabled' | 'ref'> {
  /** The container to append the menu to. Defaults to 'inline'.
   * If your menu is being cut off you can append it to an element higher up the DOM tree.
   * Some examples:
   * menuAppendTo={() => document.body};
   * menuAppendTo={document.getElementById('target')}
   */
  appendTo?: HTMLElement | ((ref?: HTMLElement) => HTMLElement) | 'inline';
  /** Accessible label for the date picker. */
  'aria-label'?: string;
  /** Accessible label for the button to open the date picker. */
  buttonAriaLabel?: string;
  /** Additional classes added to the date picker. */
  className?: string;
  /** How to format the date in the text input. */
  dateFormat?: (date: Date) => string;
  /** How to parse the date in the text input. */
  dateParse?: (value: string) => Date;
  /** Helper text to display alongside the date picker. Expects a HelperText component. */
  helperText?: React.ReactNode;
  /** Additional props for the text input. */
  inputProps?: TextInputProps;
  /** Flag indicating the date picker is disabled. */
  isDisabled?: boolean;
  /** Error message to display when the text input contains a non-empty value in an invalid format. */
  invalidFormatText?: string;
  /** Callback called every time the text input loses focus. */
  onBlur?: (event: any, value: string, date?: Date) => void;
  /** Callback called every time the text input value changes. */
  onChange?: (event: React.FormEvent<HTMLInputElement>, value: string, date?: Date) => void;
  /** String to display in the empty text input as a hint for the expected date format. */
  placeholder?: string;
  /** Props to pass to the popover that contains the calendar month component. */
  popoverProps?: Partial<Omit<PopoverProps, 'appendTo'>>;
  /** Options to customize the requirement of a date */
  requiredDateOptions?: DatePickerRequiredObject;
  /** Functions that returns an error message if a date is invalid. */
  validators?: ((date: Date) => string)[];
  /** Value of the text input. */
  value?: string;
}

/** Allows finer control over the calendar's open state when a React ref is passed into the
 * date picker component. Accessed via ref.current[property], e.g. ref.current.toggleCalendar().
 */

export interface DatePickerRef {
  /** Current calendar open status. */
  isCalendarOpen: boolean;
  /** Sets the calendar open status. */
  setCalendarOpen: (isOpen: boolean) => void;
  /** Toggles the calendar open status. If no parameters are passed, the calendar will simply
   * toggle its open status.
   * If the isOpen parameter is passed, that will set the calendar open status to the value
   * of the isOpen parameter.
   * If the eventKey parameter is set to 'Escape', that will invoke the date pickers
   * onEscapePress event to toggle the correct control appropriately.
   */
  toggleCalendar: (isOpen?: boolean) => void;
}

export const yyyyMMddFormat = (date: Date) =>
  `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
    .getDate()
    .toString()
    .padStart(2, '0')}`;

const DatePickerBase = (
  {
    className,
    locale = undefined,
    dateFormat = yyyyMMddFormat,
    dateParse = (val: string) => (val.split('-').length === 3 ? new Date(`${val}T00:00:00`) : new Date(undefined)),
    isDisabled = false,
    placeholder = 'YYYY-MM-DD',
    value: valueProp = '',
    'aria-label': ariaLabel = 'Date picker',
    buttonAriaLabel = 'Toggle date picker',
    onChange = (): any => undefined,
    onBlur = (): any => undefined,
    invalidFormatText = 'Invalid date',
    requiredDateOptions,
    helperText,
    appendTo = 'inline',
    popoverProps,
    monthFormat,
    weekdayFormat,
    longWeekdayFormat,
    dayFormat,
    weekStart,
    validators = [],
    rangeStart,
    style: styleProps = {},
    inputProps = {},
    ...props
  }: DatePickerProps,
  ref: React.Ref<DatePickerRef>
) => {
  const [value, setValue] = React.useState(valueProp);
  const [valueDate, setValueDate] = React.useState(dateParse(value));
  const [errorText, setErrorText] = React.useState('');
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const [selectOpen, setSelectOpen] = React.useState(false);
  const [pristine, setPristine] = React.useState(true);
  const [textInputFocused, setTextInputFocused] = React.useState(false);
  const widthChars = React.useMemo(() => Math.max(dateFormat(new Date()).length, placeholder.length), [dateFormat]);
  const style = { [cssFormControlWidthChars.name]: widthChars, ...styleProps };
  const buttonRef = React.useRef<HTMLButtonElement>();
  const datePickerWrapperRef = React.useRef<HTMLDivElement>();
  const triggerRef = React.useRef<HTMLDivElement>();
  const dateIsRequired = requiredDateOptions?.isRequired || false;
  const emptyDateText = requiredDateOptions?.emptyDateText || 'Date cannot be blank';

  React.useEffect(() => {
    setValue(valueProp);
    setValueDate(dateParse(valueProp));
  }, [valueProp]);

  React.useEffect(() => {
    if (isValidDate(valueDate)) {
      applyValidators(valueDate);
    }
  }, [validators]);

  React.useEffect(() => {
    setPristine(!value);
    const newValueDate = dateParse(value);
    if (errorText && isValidDate(newValueDate)) {
      applyValidators(newValueDate);
    }
    if (value === '' && !pristine && !textInputFocused) {
      dateIsRequired ? setErrorText(emptyDateText) : setErrorText('');
    }
  }, [value]);

  const applyValidators = (date: Date) => {
    setErrorText(validators.map((validator) => validator(date)).join('\n') || '');
  };

  const onTextInput = (event: React.FormEvent<HTMLInputElement>, value: string) => {
    setValue(value);
    setErrorText('');
    const newValueDate = dateParse(value);
    setValueDate(newValueDate);
    if (isValidDate(newValueDate)) {
      onChange(event, value, new Date(newValueDate));
    } else {
      onChange(event, value);
    }
  };

  const onInputBlur = (event: any) => {
    setTextInputFocused(false);
    const newValueDate = dateParse(value);
    const dateIsValid = isValidDate(newValueDate);
    const onBlurDateArg = dateIsValid ? new Date(newValueDate) : undefined;
    onBlur(event, value, onBlurDateArg);

    if (dateIsValid) {
      applyValidators(newValueDate);
    }

    if (!dateIsValid && !pristine) {
      setErrorText(invalidFormatText);
    }

    if (!dateIsValid && pristine && requiredDateOptions?.isRequired) {
      setErrorText(emptyDateText);
    }
  };

  const onDateClick = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>, newValueDate: Date) => {
    const newValue = dateFormat(newValueDate);
    setValue(newValue);
    setValueDate(newValueDate);
    applyValidators(newValueDate);
    setPopoverOpen(false);
    onChange(null, newValue, new Date(newValueDate));
  };

  const onKeyPress = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter' && value) {
      if (isValidDate(valueDate)) {
        applyValidators(valueDate);
      } else {
        setErrorText(invalidFormatText);
      }
    }
  };

  useImperativeHandle<DatePickerRef, DatePickerRef>(
    ref,
    () => ({
      setCalendarOpen: (isOpen: boolean) => setPopoverOpen(isOpen),
      toggleCalendar: (setOpen?: boolean) => {
        setPopoverOpen((prev) => (setOpen !== undefined ? setOpen : !prev));
      },
      isCalendarOpen: popoverOpen
    }),
    [setPopoverOpen, popoverOpen, selectOpen]
  );

  const createFocusSelectorString = (modifierClass: string) =>
    `.${calendarMonthStyles.calendarMonthDatesCell}.${modifierClass} .${calendarMonthStyles.calendarMonthDate}`;
  const focusSelectorForSelectedDate = createFocusSelectorString(calendarMonthStyles.modifiers.selected);
  const focusSelectorForSelectedEndRangeDate = createFocusSelectorString(
    `${calendarMonthStyles.modifiers.selected}.${calendarMonthStyles.modifiers.endRange}`
  );
  const focusSelectorForUnselectedDate = createFocusSelectorString(calendarMonthStyles.modifiers.current);

  /**
   * Returns a CSS selector for a date button element which will receive initial focus after opening calendar popover.
   * In case of a range picker it returns the end date, if it is selected, start date otherwise.
   * In case of a normal datepicker it returns the selected date, if present, today otherwise.
   */
  const getElementSelectorToFocus = () => {
    if (isValidDate(valueDate) && isValidDate(rangeStart)) {
      return focusSelectorForSelectedEndRangeDate;
    }
    if (isValidDate(valueDate) || isValidDate(rangeStart)) {
      return focusSelectorForSelectedDate;
    }
    return focusSelectorForUnselectedDate;
  };

  return (
    <div className={css(styles.datePicker, className)} ref={datePickerWrapperRef} style={style} {...props}>
      <Popover
        elementToFocus={getElementSelectorToFocus()}
        position="bottom"
        bodyContent={
          <CalendarMonth
            date={valueDate}
            onChange={onDateClick}
            locale={locale}
            // Use truthy values of strings
            validators={validators.map((validator) => (date: Date) => !validator(date))}
            onSelectToggle={(open) => setSelectOpen(open)}
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
        shouldClose={(event, hideFunction) => {
          event = event as KeyboardEvent;
          if (event.key === KeyTypes.Escape && selectOpen) {
            event.stopPropagation();
            setSelectOpen(false);
            return false;
          }
          // Let our button handle toggling
          if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
            return false;
          }

          if (popoverOpen) {
            event.stopPropagation();
            setPopoverOpen(false);
            hideFunction();
            // If datepicker is required and the popover is opened without the text input
            // first receiving focus, we want to validate that the text input is not blank upon
            // closing the popover
            requiredDateOptions?.isRequired && !value && setErrorText(emptyDateText);
          }
          if (event.key === KeyTypes.Escape && popoverOpen) {
            event.stopPropagation();
          }
          return true;
        }}
        withFocusTrap
        hasNoPadding
        hasAutoWidth
        appendTo={appendTo}
        triggerRef={triggerRef}
        {...popoverProps}
      >
        <div className={styles.datePickerInput} ref={triggerRef}>
          <InputGroup>
            <InputGroupItem>
              <TextInput
                isDisabled={isDisabled}
                isRequired={requiredDateOptions?.isRequired}
                aria-label={ariaLabel}
                placeholder={placeholder}
                validated={errorText.trim() ? 'error' : 'default'}
                value={value}
                onChange={onTextInput}
                onBlur={onInputBlur}
                onFocus={() => setTextInputFocused(true)}
                onKeyPress={onKeyPress}
                {...inputProps}
              />
            </InputGroupItem>
            <InputGroupItem>
              <Button
                ref={buttonRef}
                variant="control"
                aria-label={buttonAriaLabel}
                onClick={() => setPopoverOpen(!popoverOpen)}
                isDisabled={isDisabled}
                icon={<OutlinedCalendarAltIcon />}
                aria-haspopup="dialog"
              />
            </InputGroupItem>
          </InputGroup>
        </div>
      </Popover>
      {(errorText || helperText) && (
        <div className={styles.datePickerHelperText}>
          {errorText ? (
            <HelperText>
              <HelperTextItem variant="error">{errorText}</HelperTextItem>
            </HelperText>
          ) : (
            helperText
          )}
        </div>
      )}
    </div>
  );
};

export const DatePicker = React.forwardRef<DatePickerRef, DatePickerProps>(DatePickerBase);
DatePicker.displayName = 'DatePicker';
