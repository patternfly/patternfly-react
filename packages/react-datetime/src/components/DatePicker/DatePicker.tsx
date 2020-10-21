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
  isInvalid?: boolean;
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
  /** Callback called every time the input value changes */
  onChange?: (value: string, date?: Date) => void;
}

interface DatePickerState {
  invalid: boolean;
  invalidText: string;
  flatpickrDateFormat: string;
}

/**
 * @param format
 */
function mapToFlatpickrFormats(format: string) {
  let flatpickrFormat = '';
  for (const formatBlock of format.split(/(yyyy|mm|dd)/i)) {
    if (formatBlock.toLowerCase() === 'yyyy') {
      flatpickrFormat += 'Y';
    } else if (formatBlock.toLowerCase() === 'mm') {
      flatpickrFormat += 'm';
    } else if (formatBlock.toLowerCase() === 'dd') {
      flatpickrFormat += 'd';
    } else {
      flatpickrFormat += formatBlock;
    }
  }
  return flatpickrFormat;
}

/**
 * @param date
 */
function isValid(date: Date) {
  return date && !isNaN(date.getDate());
}

export class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
  static displayName = 'DatePicker';
  static defaultProps = {
    className: '',
    isInvalid: false,
    minDate: '',
    maxDate: '',
    dateFormat: 'mm/dd/yyyy',
    isDisabled: false,
    locale: DatePickerLocales.en,
    placeholder: 'mm/dd/yyyy',
    value: '',
    'aria-label': 'Date picker',
    onChange: (): any => undefined
  };

  constructor(props: DatePickerProps) {
    super(props);
    this.state = {
      flatpickrDateFormat: mapToFlatpickrFormats(this.props.dateFormat),
      invalid: this.props.isInvalid,
      invalidText: ''
    };
  }

  private ref = React.createRef<HTMLDivElement>();
  private inputEl = React.createRef<HTMLInputElement>();
  private calendar: any = null;

  componentDidMount() {
    const { dateFormat, minDate, maxDate, locale, value, onChange } = this.props;
    const { flatpickrDateFormat } = this.state;

    this.calendar = flatpickr(this.inputEl.current, {
      dateFormat: flatpickrDateFormat,
      locale: (FlatpickrLanguages as any)[locale],
      minDate,
      maxDate,
      defaultDate: value,
      allowInput: true,
      static: true,
      allowInvalidPreload: true,
      onChange: (dates, currentDateString) => {
        this.validateDate(currentDateString);
        onChange(currentDateString, dates[0]);
      },
      errorHandler: () => {
        this.handleError(this.props.invalidFormatErrorMessage || `Please use format: ${dateFormat}.`);
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
        } else if (e.code === 'Escape' && this.calendar.isOpen) {
          this.calendar.close();
        }
      },
      true
    );
  }

  toggleCalendar = () => {
    this.calendar && this.calendar.isOpen ? this.calendar.open() : this.calendar.close();
  };

  validateDate = (dateStr: string, event?: React.KeyboardEvent | React.ChangeEvent) => {
    const {
      dateFormat,
      minDate: minDateIn,
      maxDate: maxDateIn,
      invalidFormatErrorMessage,
      dateOutOfRangeErrorMessage,
      beforeMinDateErrorMessage,
      afterEndDateErrorMessage
    } = this.props;

    const { flatpickrDateFormat } = this.state;
    if (dateStr === '') {
      if (event) {
        event.stopPropagation();
      }
      return;
    }

    const date = this.calendar.parseDate(dateStr, flatpickrDateFormat);
    const minDate = this.calendar.parseDate(minDateIn, flatpickrDateFormat);
    const maxDate = this.calendar.parseDate(maxDateIn, flatpickrDateFormat);
    if (!isValid(date)) {
      this.handleError(invalidFormatErrorMessage || `Please use format: ${dateFormat}.`);
      if (event) {
        event.stopPropagation();
      }
    } else if (isValid(minDate) && isValid(maxDate)) {
      if (date < minDate || date > maxDate) {
        this.handleError(dateOutOfRangeErrorMessage || `The date is outside the allowable range.`);
        if (event) {
          event.stopPropagation();
        }
      } else {
        this.setState({
          invalid: false,
          invalidText: ''
        });
      }
    } else if (isValid(minDate) && date < minDate) {
      this.handleError(beforeMinDateErrorMessage || `Date is before the allowable range.`);
      if (event) {
        event.stopPropagation();
      }
    } else if (isValid(maxDate) && date > maxDate) {
      this.handleError(afterEndDateErrorMessage || `Date is after the allowable range.`);
      if (event) {
        event.stopPropagation();
      }
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
    this.setState({
      invalid: true,
      invalidText: errorMessage
    });
  };

  render() {
    const {
      className,
      placeholder,
      isDisabled,
      'aria-label': ariaLabel,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      isInvalid,
      pattern,
      value,
      dateFormat,
      minDate,
      maxDate,
      locale,
      invalidFormatErrorMessage,
      dateOutOfRangeErrorMessage,
      beforeMinDateErrorMessage,
      afterEndDateErrorMessage,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      onChange,
      ...props
    } = this.props;

    return (
      <div className={css(styles.datePicker, className)} ref={this.ref} {...props}>
        <TextInput
          isDisabled={isDisabled}
          iconVariant="calendar"
          onFocus={this.toggleCalendar}
          onBlur={this.onBlur}
          onChange={dateStr => onChange(dateStr)}
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
