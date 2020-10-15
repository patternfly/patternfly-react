import * as React from 'react';
import { css } from '@patternfly/react-styles';
import '@patternfly/patternfly/patternfly-date-picker.css';
import styles from '@patternfly/react-styles/css/components/DatePicker/date-picker';
import { Locales, Locale } from '../../helpers';
import { TextInput } from '@patternfly/react-core/dist/js/components/TextInput/TextInput';
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
  /** A date string. The format could be the expected date format, or an ISO 8601 formatted date string */
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

interface DatePickerState {
  invalid: boolean;
  invalidText: string;
  value: string;
  valueDate: Date;
}

export class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
  static displayName = 'DatePicker';
  static defaultProps = {
    className: '',
    isInvalid: false,
    minDate: '',
    maxDate: '',
    dateFormat: 'MM/dd/yyyy',
    isDisabled: false,
    locale: Locales.enUS,
    placeholder: 'MM/dd/yyyy',
    value: '',
    'aria-label': 'Date picker',
    onChange: (): any => undefined
  };

  constructor(props: DatePickerProps) {
    super(props);
    let valueDate = parse(props.value, props.dateFormat, new Date());
    if (!isValid(valueDate)) {
      valueDate = new Date();
    }
    this.state = {
      invalid: props.isInvalid,
      invalidText: '',
      value: props.value,
      valueDate
    };
  }

  validateDate = (date: Date) => {
    const {
      dateFormat,
      minDate: minDateIn,
      maxDate: maxDateIn,
      invalidFormatErrorMessage,
      dateOutOfRangeErrorMessage,
      beforeMinDateErrorMessage,
      afterEndDateErrorMessage
    } = this.props;

    const minDate = parse(minDateIn, dateFormat, new Date());
    const maxDate = parse(maxDateIn, dateFormat, new Date());
    let invalid = false;
    let invalidText = '';
    if (!isValid(date)) {
      invalid = true;
      invalidText = invalidFormatErrorMessage || `Please use format: ${dateFormat}.`;
    } else if (isValid(minDate) && isValid(maxDate)) {
      if (date < minDate || date > maxDate) {
        invalid = true;
        invalidText = dateOutOfRangeErrorMessage || `The date is outside the allowable range.`;
      }
    } else if (isValid(minDate) && date < minDate) {
      invalid = true;
      invalidText = beforeMinDateErrorMessage || `Date is before the allowable range.`;
    } else if (isValid(maxDate) && date > maxDate) {
      invalid = true;
      invalidText = afterEndDateErrorMessage || `Date is after the allowable range.`;
    }
    this.setState({
      invalid,
      invalidText
    });
  };

  onTextInput = (value: string) => {
    this.setState({ value });
    const valueDate = parse(value, this.props.dateFormat, new Date());
    if (isValid(valueDate)) {
      this.setState({ valueDate });
    }
    this.validateDate(valueDate);
  };

  onDateClick = (valueDate: Date) => {
    const { dateFormat, locale } = this.props;
    this.setState({
      value: format(valueDate, dateFormat, { locale }),
      valueDate
    });
    this.validateDate(valueDate);
  };

  render() {
    const {
      className,
      placeholder,
      isDisabled,
      'aria-label': ariaLabel,
      locale,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      isInvalid,
      pattern,
      value: valueProp,
      dateFormat,
      minDate,
      maxDate,
      invalidFormatErrorMessage,
      dateOutOfRangeErrorMessage,
      beforeMinDateErrorMessage,
      afterEndDateErrorMessage,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      onChange,
      ...props
    } = this.props;
    const { invalid, invalidText, value, valueDate } = this.state;

    return (
      <div className={css(styles.datePicker, className)} {...props}>
        <TextInput
          isDisabled={isDisabled}
          iconVariant="calendar"
          aria-label={ariaLabel}
          placeholder={placeholder}
          validated={this.state.invalid ? 'error' : 'default'}
          value={value}
          onChange={this.onTextInput}
        />
        <CalendarMonth date={valueDate} onChange={this.onDateClick} locale={locale} />
        {invalid && <div className={css(styles.datePickerHelperText, styles.modifiers.error)}>{invalidText}</div>}
      </div>
    );
  }
}
