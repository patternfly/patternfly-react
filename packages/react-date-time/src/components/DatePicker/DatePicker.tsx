import * as React from 'react';
import flatpickr from 'flatpickr';
import { css } from '@patternfly/react-styles';
import FlatpickrLanguages from 'flatpickr/dist/l10n';
import 'flatpickr/dist/themes/light.css';
import '@patternfly/patternfly/patternfly-date-picker.css';
import styles from '@patternfly/react-styles/css/components/DatePicker/date-picker';
import { DatePickerLocales } from './DatePickerUtils';
import { TextInput } from '@patternfly/react-core/dist/js/components/TextInput/TextInput';

export interface DatePickerProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'onChange' | 'onFocus' | 'onBlur' | 'disabled' | 'ref'> {
  /** Additional classes added to the date time picker. */
  className?: string;
  /** Flag indicating whether the value of the date picker is invalid. */
  invalid?: boolean;
  /** Accessible label for the date picker */
  'aria-label'?: string;
  /** The minimum date that a user can start picking from. */
  minDate?: string;
  /** The maximum date that a user can pick to. */
  maxDate?: string;
  /** The case sensitive pattern of tokens representing desired readable format of the date. 'MM/DD/YYYY' by default. */
  dateFormat?: string;
  /** Flag indicating the date picker is disabled*/
  isDisabled?: boolean;
  /** Specify the locale of the date. */
  locale?: DatePickerLocales;
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
}

interface DatePickerState {
  invalid: boolean;
  invalidText: string;
}


function toNumber(str: string) {
  if (str) {
    return Number(str);
  }
  return NaN;
}
// Supports (yyyy|mm|dd) to parse string to Date object 
function parseYYYYMMDD(date: string, format: string) {
  let year = NaN;
  let month = NaN;
  let day = 1;
  let index = 0;
  for (let formatBlock of format.split(/(yyyy|mm|dd)/i)) {
    if (formatBlock.toLowerCase() === 'yyyy') {
      year = toNumber(date.substr(index, 4));
    }
    else if (formatBlock.toLowerCase() === 'mm') {
      month = toNumber(date.substr(index, 2));
    }
    else if (formatBlock.toLowerCase() === 'dd') {
      day = toNumber(date.substr(index, 2));
    }
    index += formatBlock.length;
  }
  
  // Year and month are required
  console.log('new', year, month, day);
  return new Date(year, month, day);
}

// Supports (yyyy|mm|dd) to format Date object to string
function formatYYYYMMDD(date: Date, format: string) {
  let res = '';
  for (let formatBlock of format.split(/(yy?y?y?|mm|dd?)/i)) {
    if (['y', 'yy', 'yyy', 'yyyy'].includes(formatBlock.toLowerCase())) {
      res += String(date.getFullYear()).padStart(4, '0');
    }
    else if (['mm'].includes(formatBlock.toLowerCase())) {
      res += String(date.getMonth()).padStart(2, '0');
    }
    else if (['d', 'dd'].includes(formatBlock.toLowerCase())) {
      res += String(date.getDate()).padStart(2, '0');
    }
    else {
      res += formatBlock;
    }
  }
  return res;
}

function isValid(date: Date) {
  return !isNaN(date.getDate());
}

export class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
  static displayName = 'DatePicker';
  static defaultProps = {
    className: '',
    invalid: false,
    minDate: '',
    maxDate: '',
    dateFormat: 'MM/DD/YYYY',
    isDisabled: false,
    locale: DatePickerLocales.en,
    placeholder: 'mm/dd/yyyy',
    value: '',
    'aria-label': 'Date picker'
  };

  constructor(props: DatePickerProps) {
    super(props);
    this.state = {
      invalid: this.props.invalid,
      invalidText: ''
    };
  }

  private ref = React.createRef<HTMLDivElement>();
  private inputEl = React.createRef<HTMLInputElement>();
  private calendar: any = null;

  componentDidMount() {
    const { dateFormat, minDate, maxDate, locale, value } = this.props;

    this.calendar = flatpickr(this.inputEl.current, {
      dateFormat,
      locale: (FlatpickrLanguages as any)[locale],
      minDate,
      maxDate,
      defaultDate: value,
      allowInput: true,
      static: true,
      allowInvalidPreload: true,
      parseDate: (datestr: string, format: string) => parseYYYYMMDD(datestr, format),
      formatDate: (date: Date, format: string) => formatYYYYMMDD(date, format),
      errorHandler: (error: Error) => {
        this.handleError(this.props.invalidFormatErrorMessage || `Please use format ${dateFormat}.`);
      },
      onReady: (date, format, fp) => {
        fp.calendarContainer.classList.add(styles.datePickerCalendar);
        fp.calendarContainer.parentElement.classList.remove('flatpickr-wrapper');
      },
      nextArrow:
        '<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" class=""></path></svg>',
      prevArrow:
        '<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" class=""></path></svg>'
    });

    window.document.body.addEventListener(
      'keydown',
      e => {
        if (e.code === 'Enter' && e.target === this.inputEl.current) {
          this.validateDate((e.target as HTMLInputElement).value, e as any);
        }
      },
      true
    );
  }

  toggleCalendar = () => {
    this.calendar && this.calendar.isOpen ? this.calendar.open() : this.calendar.close();
  };

  validateDate = (dateStr: string, event: React.KeyboardEvent | React.ChangeEvent) => {
    const { dateFormat, minDate: minDateIn, maxDate: maxDateIn } = this.props;
    if (dateStr === '') {
      event.stopPropagation();
      return;
    }

    const date = parseYYYYMMDD(dateStr, dateFormat);
    const minDate = parseYYYYMMDD(minDateIn, dateFormat);
    const maxDate = parseYYYYMMDD(maxDateIn, dateFormat);
    if (!isValid(date)) {
      this.handleError(this.props.invalidFormatErrorMessage || `Please use format: ${dateFormat}.`);
      event.stopPropagation();
    } else if (isValid(minDate) && isValid(maxDate)) {
      if (date < minDate || date > maxDate) {
        this.handleError(this.props.dateOutOfRangeErrorMessage || `The date is outside the allowable range.`);
        event.stopPropagation();
      }
    } else if (isValid(minDate) && (date < minDate)) {
      this.handleError(this.props.beforeMinDateErrorMessage || `Date is before the allowable range.`);
      event.stopPropagation();
    } else if (isValid(maxDate) && (date > maxDate)) {
      this.handleError(this.props.afterEndDateErrorMessage || `Date is after the allowable range.`);
      event.stopPropagation();
    } else {
      this.setState({
        invalid: false,
        invalidText: ''
      });
    }
  };

  onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.validateDate(event.target.value, event);
  };

  handleError = (errorMessage: string) => {
    this.calendar.close();
    this.setState({
      invalid: true,
      invalidText: errorMessage
    });
  };

  render() {
    const {
      className,
      invalid,
      placeholder,
      pattern,
      isDisabled,
      value,
      dateFormat,
      minDate,
      maxDate,
      locale,
      'aria-label': ariaLabel,
      invalidFormatErrorMessage,
      dateOutOfRangeErrorMessage,
      beforeMinDateErrorMessage,
      afterEndDateErrorMessage,
      ...props
    } = this.props;

    return (
      <div className={css(styles.datePicker, className)} ref={this.ref} {...props}>
        <TextInput
          isDisabled={isDisabled}
          iconVariant="calendar"
          onClick={this.toggleCalendar}
          onBlur={this.onBlur}
          ref={this.inputEl}
          aria-label={ariaLabel}
          placeholder={placeholder}
          validated={this.state.invalid ? 'error' : 'default'}
        />
        {this.state.invalid && (
          <div className={css(styles.datePickerHelperText, styles.modifiers.error)}>{this.state.invalidText}</div>
        )}
      </div>
    );
  }
}
