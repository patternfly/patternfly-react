import * as React from 'react';
import { times12Hr, times24Hr } from './TimePickerConst';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Select/select';
import datePickerStyles from '@patternfly/react-styles/css/components/DatePicker/date-picker';
import formStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import TimesCircleIcon from '@patternfly/react-icons/dist/js/icons/times-circle-icon';
import { getUniqueId } from '../../helpers';
import { Popper } from '../../helpers/Popper/Popper';
import { TimeOption } from './TimeOption';
import { KeyTypes, SelectDirection } from '../Select';
import { InputGroup } from '../InputGroup';

export interface TimePickerProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange' | 'onFocus' | 'onBlur' | 'disabled' | 'ref'> {
  /** Additional classes added to the time picker. */
  className?: string;
  /** Flag indicating whether the value of the time picker is invalid. */
  isInvalid?: boolean;
  /** Accessible label for the time picker */
  'aria-label'?: string;
  /** Flag indicating the date picker is disabled */
  isDisabled?: boolean;
  /** String to display in the empty date picker field as a hint for the expected date format */
  placeholder?: string;
  /** Character to display between the hour and minute */
  delimiter?: string;
  /** A date string. The format could be  an ISO 8601 formatted date string or in 'HH{delimiter}MM' format */
  defaultTime?: string;
  /** Error message to display when the date is provided in an invalid format. */
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
  invalidText: string;
  isOpen: boolean;
  time: string;
  selectedIndex: number;
  focusedIndex: number;
  scrollIndex: number;
}

export class TimePicker extends React.Component<TimePickerProps, TimePickerState> {
  static displayName = 'TimePicker';
  private parentRef = React.createRef<HTMLDivElement>();
  private toggleRef = React.createRef<HTMLDivElement>();
  private inputRef = React.createRef<HTMLInputElement>();
  private clearButtonRef = React.createRef<HTMLButtonElement>();
  private toggleButtonRef = React.createRef<HTMLButtonElement>();
  private menuRef = React.createRef<HTMLUListElement>();
  private refCollection: HTMLElement[] = [];

  static defaultProps = {
    className: '',
    isInvalid: false,
    isDisabled: false,
    defaultTime: '',
    variant: '12hr',
    placeholder: 'hh:mm',
    delimiter: ':',
    'aria-label': 'Time picker',
    clearSelectionsAriaLabel: 'Clear all',
    menuAppendTo: 'inline',
    direction: 'down'
  };

  constructor(props: TimePickerProps) {
    super(props);

    this.state = {
      isInvalid: false,
      invalidText: 'Invalid time',
      isOpen: false,
      time: '',
      selectedIndex: null,
      focusedIndex: null,
      scrollIndex: 0
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onDocClick);
    document.addEventListener('touchstart', this.onDocClick);
    document.addEventListener('keydown', this.handleGlobalKeys);
    this.parseTime(this.props.defaultTime);
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
      this.toggleRef.current.focus();
    }
  };

  handleGlobalKeys = (event: KeyboardEvent) => {
    const { isOpen, focusedIndex } = this.state;
    // keyboard pressed while focus on toggle
    if (this.inputRef && this.inputRef.current && this.inputRef.current.contains(event.target as Node)) {
      if (isOpen && (event.key === KeyTypes.Escape || event.key === KeyTypes.Tab)) {
        if (this.clearButtonRef && this.clearButtonRef.current) {
          this.clearButtonRef.current.focus();
        } else if (this.toggleButtonRef && this.toggleButtonRef.current) {
          this.toggleButtonRef.current.focus();
        }
        this.onToggle(false);
        event.preventDefault();
      } else if (!isOpen && event.key === KeyTypes.Enter) {
        this.onToggle(true);
        event.preventDefault();
      } else if (isOpen) {
        if (event.key === KeyTypes.ArrowDown) {
          this.updateFocusedIndex(1);
          event.preventDefault();
        } else if (event.key === KeyTypes.ArrowUp) {
          this.updateFocusedIndex(-1);
          event.preventDefault();
        } else if (event.key === KeyTypes.Enter) {
          if (this.clearButtonRef && this.clearButtonRef.current) {
            this.clearButtonRef.current.focus();
          } else if (this.toggleButtonRef && this.toggleButtonRef.current) {
            this.toggleButtonRef.current.focus();
          }

          if (focusedIndex !== null) {
            this.onSelect((this.refCollection[focusedIndex] as HTMLElement).innerText, focusedIndex);
            event.stopPropagation();
          } else {
            this.onToggle(false);
          }
        }
      }
    }
  };

  componentDidUpdate(prevProps: TimePickerProps, prevState: TimePickerState) {
    const { time } = this.state;
    if (this.state.isOpen && !prevState.isOpen && this.state.time && this.validTimeFormat(this.state.time)) {
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
    const splitTime = time.split(this.props.delimiter);
    let focusedIndex = null;

    // build out the rest of the time assuming hh:00 if it's a partial time
    if (splitTime.length < 2) {
      time = `${time}:00`;
    }

    // for 12hr variant, autoscroll to pm if it's currently the afternoon, otherwise autoscroll to am
    if (this.props.variant === '12hr' && splitTime.length > 1 && splitTime[1].length < 2) {
      const minutes = splitTime[1].length === 0 ? '00' : splitTime[1] + '0';
      time = `${splitTime[0]}${this.props.delimiter}${minutes}${new Date().getHours() > 11 ? 'pm' : 'am'}`;
    } else if (
      this.props.variant === '12hr' &&
      splitTime.length > 1 &&
      splitTime[1].length === 2 &&
      !time.toLowerCase().includes('am') &&
      !time.toLowerCase().includes('pm')
    ) {
      time = `${time}${new Date().getHours() > 11 ? 'pm' : 'am'}`;
    }

    let scrollIndex = this.refCollection.findIndex(option => option.innerText.includes(time));

    // if we found an exact match, scroll to match and return index of match for focus
    if (scrollIndex !== -1) {
      this.scrollToIndex(scrollIndex);
      focusedIndex = scrollIndex;
    } else if (splitTime.length === 2) {
      // no exact match, scroll to closes match but don't return index for focus
      const minutes = splitTime[1].length === 1 ? splitTime[1] + '0' : '00';
      const amPm = this.props.variant === '12hr' ? (new Date().getHours() > 11 ? 'pm' : 'am') : '';
      time = `${splitTime[0]}${this.props.delimiter}${minutes}${amPm}`;
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
    const { delimiter, variant, validateTime } = this.props;
    let parsedTime = time;
    let valid = true;

    const date = new Date(time);
    if (!isNaN(date.getDate())) {
      const hours =
        variant === '12hr'
          ? `${variant === '12hr' && date.getHours() > 11 ? date.getHours() - 12 : date.getHours()}`
          : `${date.getHours()}`.padStart(2, '0');
      const minutes = `${date.getMinutes()}`.padStart(2, '0');
      parsedTime = `${hours}${delimiter}${minutes}${variant === '12hr' ? (date.getHours() > 11 ? 'pm' : 'am') : ''}`;
    } else {
      if (validateTime) {
        valid = validateTime(time);
      } else {
        const regexp =
          variant === '12hr'
            ? new RegExp(`\\b\\d\\d?${delimiter}[0-5]\\d\\s?([AaPp][Mm])?\\b`)
            : new RegExp(`\\b\\d\\d?${delimiter}[0-5]\\d\\b`);
        valid = time === '' || regexp.test(time);
      }
      if (
        variant === '12hr' &&
        valid &&
        time !== '' &&
        !parsedTime.toLowerCase().includes('am') &&
        !parsedTime.toLowerCase().includes('pm')
      ) {
        parsedTime = `${parsedTime}${new Date().getHours() > 11 ? 'pm' : 'am'}`;
      }
    }

    this.setState({
      time: parsedTime,
      focusedIndex: null,
      isInvalid: !valid
    });
  };

  onToggle = (isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  onSelect = (selection: string, index: number) => {
    if (this.clearButtonRef && this.clearButtonRef.current) {
      this.clearButtonRef.current.focus();
    } else if (this.toggleButtonRef && this.toggleButtonRef.current) {
      this.toggleButtonRef.current.focus();
    }
    this.setState({
      time: selection,
      isInvalid: !this.validTimeFormat(selection),
      isOpen: false,
      selectedIndex: index,
      focusedIndex: index,
      scrollIndex: index
    });
  };

  clearSelection = () => {
    this.setState({
      time: '',
      selectedIndex: null,
      focusedIndex: null,
      scrollIndex: 0,
      isOpen: false,
      isInvalid: false
    });
  };

  onInputFocus = (e: React.FocusEvent) => {
    if (!this.state.isOpen) {
      this.onToggle(true);
    }
    e.stopPropagation();
  };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const time = event.target.value;
    if (time === '' || this.validTimeFormat(time)) {
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

  validTimeFormat = (value: string) => {
    const regexp = new RegExp(`\\b\\d\\d?${this.props.delimiter}?[0-5]?\\d?\\s?([AaPp][Mm])?\\b`);
    return regexp.test(value);
  };

  onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    this.parseTime(event.currentTarget.value);
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
      direction,
      delimiter,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      onChange,
      clearSelectionsAriaLabel,
      defaultTime,
      isInvalid: isInvalidProp,
      ...props
    } = this.props;
    const { time, isOpen, isInvalid, invalidText, selectedIndex, focusedIndex } = this.state;
    const options = variant === '12hr' ? times12Hr(delimiter) : times24Hr(delimiter);
    const randomId = id || getUniqueId('time-picker');

    const clearBtn = (
      <button
        className={css(buttonStyles.button, buttonStyles.modifiers.plain, styles.selectToggleClear)}
        // onClick={this.clearSelection}
        aria-label={clearSelectionsAriaLabel}
        type="button"
        disabled={isDisabled}
        ref={this.clearButtonRef}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            this.clearButtonRef.current.click();
          }
        }}
      >
        <TimesCircleIcon aria-hidden />
      </button>
    );

    const menuContainer = (
      <ul
        ref={this.menuRef}
        className={css(styles.selectMenu)}
        role="listbox"
        aria-labelledby={`${id}-input`}
        style={{ maxHeight: '300px', overflowY: 'auto' }}
      >
        {options.map((option, index) => (
          <TimeOption
            key={index}
            value={option}
            sendRef={this.sendRef}
            index={index}
            onSelect={this.onSelect}
            isSelected={index === selectedIndex}
            isFocused={index === focusedIndex}
            id={`${id}-option-${index}`}
          />
        ))}
      </ul>
    );

    const inputAndToggle = (
      <div className={css(datePickerStyles.datePickerInput)}>
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
              {...props}
              ref={this.toggleRef}
              className={css(styles.selectToggle, isDisabled && styles.modifiers.disabled, styles.modifiers.typeahead)}
            >
              <div className={css(styles.selectToggleWrapper)}>
                <input
                  className={css(formStyles.formControl, styles.selectToggleTypeahead)}
                  aria-activedescendant={selectedIndex !== null ? `${randomId}-option-${selectedIndex}` : null}
                  id={`${randomId}-input`}
                  aria-label={ariaLabel}
                  aria-invalid={isInvalid}
                  placeholder={placeholder}
                  value={time}
                  type="text"
                  onFocus={this.onInputFocus}
                  onChange={this.onInputChange}
                  onBlur={this.onBlur}
                  autoComplete="off"
                  disabled={isDisabled}
                  ref={this.inputRef}
                />
              </div>
              {time && clearBtn}
              <button
                className={css(buttonStyles.button, styles.selectToggleButton, styles.modifiers.plain)}
                aria-labelledby={`${randomId}-input`}
                onClick={_event => {
                  _event.stopPropagation();
                  this.onToggle(!isOpen);
                }}
                disabled={isDisabled}
                ref={this.toggleButtonRef}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
              >
                <img
                  height={'16px'}
                  width={'16px'}
                  style={{ paddingTop: '6px' }}
                  aria-labelledby={`${randomId}-input`}
                  src={`data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%236a6e73' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z'/%3E%3C/svg%3E`}
                />
              </button>
            </div>
            {isOpen && menuAppendTo === 'inline' && menuContainer}
          </div>
        </InputGroup>
        {isInvalid && (
          <div className={css(datePickerStyles.datePickerHelperText, datePickerStyles.modifiers.error)}>
            {invalidText}
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
