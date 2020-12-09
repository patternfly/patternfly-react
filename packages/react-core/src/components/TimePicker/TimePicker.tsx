import * as React from 'react';
import { times12Hr, times24Hr } from './TimePickerConst';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Select/select';
import datePickerStyles from '@patternfly/react-styles/css/components/DatePicker/date-picker';
import formStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { getUniqueId } from '../../helpers';
import { Popper } from '../../helpers/Popper/Popper';
import { TimeOption } from './TimeOption';
import { KeyTypes, SelectDirection } from '../Select';
import { InputGroup } from '../InputGroup';
import { TextInput } from '../TextInput';

export interface TimePickerProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange' | 'onFocus' | 'onBlur' | 'disabled' | 'ref'> {
  /** Additional classes added to the time picker. */
  className?: string;
  /** Accessible label for the time picker */
  'aria-label'?: string;
  /** Flag indicating the time picker is disabled */
  isDisabled?: boolean;
  /** String to display in the empty time picker field as a hint for the expected time format */
  placeholder?: string;
  /** Character to display between the hour and minute */
  delimiter?: string;
  /** A time string. The format could be  an ISO 8601 formatted date string or in 'HH{delimiter}MM' format */
  defaultTime?: string;
  /** Error message to display when the time is provided in an invalid format. */
  invalidFormatErrorMessage?: string;
  /** The time picker is for 12 hour or 24 hour time*/
  variant?: '24hr' | '12hr';
  /** Optional event handler called each time the value in the time picker input changes. */
  onChange?: (time: string, e?: any) => void;
  /** Optional validator can be provided to override the internal time validator. */
  validateTime?: (time: string) => boolean;
  /** Id of the time picker*/
  id?: string;
  /** Accessibly label applied to the clear button in the time picker input */
  clearSelectionsAriaLabel?: string;
  /** The container to append the menu to. Defaults to 'inline'
   * If your menu is being cut off you can append it to an element higher up the DOM tree.
   * Some examples:
   * menuAppendTo={() => document.body}
   * menuAppendTo={document.getElementById('target')}
   */
  menuAppendTo?: HTMLElement | (() => HTMLElement) | 'inline';
  /** Flag specifying which direction the time picker menu expands */
  direction?: 'up' | 'down';
}

interface TimePickerState {
  isInvalid: boolean;
  isOpen: boolean;
  time: string;
  focusedIndex: number;
  scrollIndex: number;
}

export class TimePicker extends React.Component<TimePickerProps, TimePickerState> {
  static displayName = 'TimePicker';
  private parentRef = React.createRef<HTMLDivElement>();
  private toggleRef = React.createRef<HTMLDivElement>();
  private inputRef = React.createRef<HTMLInputElement>();
  private menuRef = React.createRef<HTMLUListElement>();
  private refCollection: HTMLElement[] = [];

  static defaultProps = {
    className: '',
    isDisabled: false,
    defaultTime: '',
    variant: '12hr',
    invalidFormatErrorMessage: 'Invalid time format',
    placeholder: 'hh:mm',
    delimiter: ':',
    'aria-label': 'Time picker',
    clearSelectionsAriaLabel: 'Clear all',
    menuAppendTo: 'inline',
    direction: 'down'
  };

  constructor(props: TimePickerProps) {
    super(props);

    const { defaultTime } = this.props;
    this.state = {
      isInvalid: false,
      isOpen: false,
      time: defaultTime !== '' ? this.parseTime(this.props.defaultTime) : '',
      focusedIndex: null,
      scrollIndex: 0
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onDocClick);
    document.addEventListener('touchstart', this.onDocClick);
    document.addEventListener('keydown', this.handleGlobalKeys);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onDocClick);
    document.removeEventListener('touchstart', this.onDocClick);
    document.removeEventListener('keydown', this.handleGlobalKeys);
  }

  onDocClick = (event: MouseEvent | TouchEvent) => {
    const clickedOnToggle =
      this.parentRef && this.parentRef.current && this.parentRef.current.contains(event.target as Node);
    const clickedWithinMenu =
      this.menuRef &&
      this.menuRef.current &&
      this.menuRef.current.contains &&
      this.menuRef.current.contains(event.target as Node);
    if (this.state.isOpen && !(clickedOnToggle || clickedWithinMenu)) {
      this.onToggle(false);
    }
  };

  handleGlobalKeys = (event: KeyboardEvent) => {
    const { isOpen, focusedIndex } = this.state;
    // keyboard pressed while focus on toggle
    if (this.inputRef && this.inputRef.current && this.inputRef.current.contains(event.target as Node)) {
      if (!isOpen && event.key !== KeyTypes.Tab) {
        this.onToggle(true);
      } else if (isOpen) {
        if (event.key === KeyTypes.Escape) {
          this.onToggle(false);
        } else if (event.key === KeyTypes.Tab) {
          this.onToggle(false);
        } else if (event.key === KeyTypes.Enter) {
          if (focusedIndex !== null) {
            this.onSelect((this.refCollection[focusedIndex] as HTMLElement).innerText, focusedIndex);
            event.stopPropagation();
          } else {
            this.onToggle(false);
          }
        } else if (event.key === KeyTypes.ArrowDown) {
          this.updateFocusedIndex(1);
          event.preventDefault();
        } else if (event.key === KeyTypes.ArrowUp) {
          this.updateFocusedIndex(-1);
          event.preventDefault();
        }
      }
    }
  };

  componentDidUpdate(prevProps: TimePickerProps, prevState: TimePickerState) {
    const { time } = this.state;
    if (this.state.isOpen && !prevState.isOpen && this.state.time && !this.state.isInvalid) {
      this.scrollToSelection(time);
    }
  }

  updateFocusedIndex = (increment: number) => {
    this.setState(prevState => {
      const maxIndex = this.refCollection.length - 1;
      let nextIndex = prevState.focusedIndex !== null ? prevState.focusedIndex + increment : prevState.scrollIndex;
      if (nextIndex < 0) {
        nextIndex = maxIndex;
      } else if (nextIndex > maxIndex) {
        nextIndex = 0;
      }
      this.scrollToIndex(nextIndex);
      return {
        focusedIndex: nextIndex,
        time: this.refCollection[nextIndex].innerText
      };
    });
  };

  scrollToIndex = (index: number) => {
    this.refCollection[index].offsetParent.scrollTop = this.refCollection[index].offsetTop;
  };

  scrollToSelection = (time: string) => {
    const { delimiter, variant } = this.props;
    let splitTime = time.split(this.props.delimiter);
    let focusedIndex = null;

    // build out the rest of the time assuming hh:00 if it's a partial time
    if (splitTime.length < 2) {
      time = `${time}${delimiter}00`;
      splitTime = time.split(delimiter);
    }

    // for 12hr variant, autoscroll to pm if it's currently the afternoon, otherwise autoscroll to am
    if (variant === '12hr' && splitTime.length > 1 && splitTime[1].length < 2) {
      const minutes = splitTime[1].length === 0 ? '00' : splitTime[1] + '0';
      time = `${splitTime[0]}${delimiter}${minutes}${new Date().getHours() > 11 ? 'pm' : 'am'}`;
    } else if (
      variant === '12hr' &&
      splitTime.length > 1 &&
      splitTime[1].length === 2 &&
      !time.toLowerCase().includes('am') &&
      !time.toLowerCase().includes('pm')
    ) {
      time = `${time}${new Date().getHours() > 11 ? 'pm' : 'am'}`;
    }

    let scrollIndex = this.refCollection.findIndex(option => option.innerText.includes(time.toLowerCase()));

    // if we found an exact match, scroll to match and return index of match for focus
    if (scrollIndex !== -1) {
      this.scrollToIndex(scrollIndex);
      focusedIndex = scrollIndex;
    } else if (splitTime.length === 2) {
      // no exact match, scroll to closes match but don't return index for focus
      const minutes = splitTime[1].length === 1 ? splitTime[1] + '0' : '00';
      const amPm =
        variant === '12hr'
          ? splitTime[1].toLowerCase().includes('a')
            ? 'am'
            : splitTime[1].toLowerCase().includes('p')
            ? 'pm'
            : new Date().getHours() > 11
            ? 'pm'
            : 'am'
          : '';
      time = `${splitTime[0]}${delimiter}${minutes}${amPm}`;
      scrollIndex = this.refCollection.findIndex(option => option.innerText.includes(time));
      if (scrollIndex !== -1) {
        this.scrollToIndex(scrollIndex);
      }
    }
    this.setState({
      focusedIndex,
      scrollIndex
    });
  };

  sendRef = (optionRef: React.ReactNode, index: number) => {
    this.refCollection[index] = optionRef as HTMLElement;
  };

  parseTime = (time: string) => {
    const { delimiter, variant } = this.props;
    const date = new Date(time);
    if (!isNaN(date.getDate()) && time.includes('T')) {
      const hours =
        variant === '12hr'
          ? `${variant === '12hr' && date.getHours() > 11 ? date.getHours() - 12 : date.getHours()}`
          : `${date.getHours()}`.padStart(2, '0');
      const minutes = `${date.getMinutes()}`.padStart(2, '0');
      return `${hours}${delimiter}${minutes}${variant === '12hr' ? (date.getHours() > 11 ? 'pm' : 'am') : ''}`;
    } else if (
      variant === '12hr' &&
      this.validateTime(time) &&
      time !== '' &&
      !time.toLowerCase().includes('am') &&
      !time.toLowerCase().includes('pm')
    ) {
      return `${time}${new Date().getHours() > 11 ? 'pm' : 'am'}`;
    }
    return time;
  };

  onToggle = (isOpen: boolean) => {
    // on close, parse and validate input
    this.setState(prevState => {
      const time = this.parseTime(prevState.time);
      return {
        isOpen,
        time,
        isInvalid: isOpen ? prevState.isInvalid : !this.validateTime(time)
      };
    });
  };

  onSelect = (selection: string, index: number) => {
    this.setState({
      time: selection,
      isInvalid: !this.validateTime(selection),
      isOpen: false,
      focusedIndex: index,
      scrollIndex: index
    });
  };

  clearSelection = () => {
    this.setState({
      time: '',
      focusedIndex: null,
      scrollIndex: 0,
      isOpen: false,
      isInvalid: false
    });
  };

  onInputFocus = (e: any) => {
    if (!this.state.isOpen) {
      this.onToggle(true);
    }
    e.stopPropagation();
  };

  onInputChange = (time: string, event: React.FormEvent<HTMLInputElement>) => {
    const regexp = new RegExp(`\\b\\d\\d?${this.props.delimiter}?[0-5]?\\d?\\s?([AaPp][Mm])?\\b`);
    if (regexp.test(time) || time === '') {
      if (this.props.onChange) {
        this.props.onChange(time, event);
      }
      this.scrollToSelection(time);
      this.setState({
        time,
        isInvalid: false
      });
    } else {
      this.setState({
        time,
        focusedIndex: null
      });
    }
  };

  validateTime = (time: string) => {
    const { validateTime, delimiter, variant } = this.props;
    if (validateTime) {
      return validateTime(time);
    } else {
      // ISO 8601 format is valid
      const date = new Date(time);
      if (!isNaN(date.getDate()) && time.includes('T')) {
        return true;
      }

      const regexp =
        variant === '12hr'
          ? new RegExp(`\\b\\d\\d?${delimiter}[0-5]\\d\\s?([AaPp][Mm])\\b`)
          : new RegExp(`\\b\\d\\d?${delimiter}[0-5]\\d\\b`);
      const hours = parseInt(time.split(delimiter)[0]);
      const validHours = hours >= 0 && hours <= (variant === '12hr' ? '12' : 23);
      return time === '' || (regexp.test(time) && validHours);
    }
  };

  onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    this.setState({
      isInvalid: !this.validateTime(event.currentTarget.value)
    });
  };

  render() {
    const {
      'aria-label': ariaLabel,
      isDisabled,
      className,
      placeholder,
      id,
      menuAppendTo,
      variant,
      invalidFormatErrorMessage,
      direction,
      delimiter,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      onChange,
      clearSelectionsAriaLabel,
      defaultTime,
      ...props
    } = this.props;
    const { time, isOpen, isInvalid, focusedIndex } = this.state;
    const style = { '--pf-c-date-picker__input--c-form-control--Width': '150px' } as React.CSSProperties;
    const options = variant === '12hr' ? times12Hr(delimiter) : times24Hr(delimiter);
    const randomId = id || getUniqueId('time-picker');

    const menuContainer = (
      <ul
        ref={this.menuRef}
        className={css(styles.selectMenu)}
        role="listbox"
        aria-labelledby={`${id}-input`}
        style={{ maxHeight: '200px', overflowY: 'auto' }}
      >
        {options.map((option, index) => (
          <TimeOption
            key={index}
            value={option}
            sendRef={this.sendRef}
            index={index}
            onSelect={this.onSelect}
            isFocused={index === focusedIndex}
            id={`${id}-option-${index}`}
          />
        ))}
      </ul>
    );

    const inputAndToggle = (
      <div className={css(datePickerStyles.datePickerInput)} style={style} {...props}>
        <InputGroup>
          <div
            className={css(
              styles.select,
              isOpen && styles.modifiers.expanded,
              direction === SelectDirection.up && styles.modifiers.top,
              className
            )}
            id={randomId}
            ref={this.parentRef}
          >
            <div
              ref={this.toggleRef}
              className={css(styles.selectToggle, isDisabled && styles.modifiers.disabled, styles.modifiers.typeahead)}
              style={{ paddingLeft: '0' }}
            >
              <TextInput
                className={css(formStyles.formControl, styles.selectToggleTypeahead)}
                id={`${randomId}-input`}
                aria-label={ariaLabel}
                validated={isInvalid ? 'error' : 'default'}
                placeholder={placeholder}
                value={time || ''}
                type="text"
                iconVariant="clock"
                onClick={this.onInputFocus}
                onFocus={this.onInputFocus}
                onChange={this.onInputChange}
                onBlur={this.onBlur}
                autoComplete="off"
                isDisabled={isDisabled}
                ref={this.inputRef}
              />
            </div>
            {isOpen && menuAppendTo === 'inline' && menuContainer}
          </div>
        </InputGroup>
        {isInvalid && (
          <div className={css(datePickerStyles.datePickerHelperText, datePickerStyles.modifiers.error)}>
            {invalidFormatErrorMessage}
          </div>
        )}
      </div>
    );

    const popperContainer = (
      <div className={css(styles.select, isOpen && styles.modifiers.expanded, className)}>
        {isOpen && menuContainer}
      </div>
    );

    return (
      <div className={css(datePickerStyles.datePicker, className)}>
        {menuAppendTo === 'inline' ? (
          inputAndToggle
        ) : (
          <Popper
            trigger={inputAndToggle}
            popper={popperContainer}
            direction={direction}
            appendTo={menuAppendTo}
            isVisible={isOpen}
          />
        )}
      </div>
    );
  }
}
