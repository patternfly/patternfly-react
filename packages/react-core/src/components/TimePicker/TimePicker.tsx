import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Select/select';
import datePickerStyles from '@patternfly/react-styles/css/components/DatePicker/date-picker';
import formStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { getUniqueId } from '../../helpers';
import { Popper } from '../../helpers/Popper/Popper';
import { TimeOption } from './TimeOption';
import { KeyTypes, SelectDirection } from '../Select';
import { InputGroup } from '../InputGroup';
import { TextInput, TextInputProps } from '../TextInput';
import {
  parseTime,
  validateTime,
  makeTimeOptions,
  amSuffix,
  pmSuffix,
  getHours,
  getMinutes,
  isWithinMinMax,
  getSeconds
} from './TimePickerUtils';

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
  time?: string | Date;
  /** Error message to display when the time is provided in an invalid format. */
  invalidFormatErrorMessage?: string;
  /** Error message to display when the time provided is not within the minTime/maxTime constriants */
  invalidMinMaxErrorMessage?: string;
  /** True if the time is 24 hour time. False if the time is 12 hour time */
  is24Hour?: boolean;
  /** Optional event handler called each time the value in the time picker input changes. */
  onChange?: (time: string, hour?: number, minute?: number, seconds?: number, isValid?: boolean) => void;
  /** Optional validator can be provided to override the internal time validator. */
  validateTime?: (time: string) => boolean;
  /** Id of the time picker */
  id?: string;
  /** Width of the time picker. */
  width?: string;
  /** The container to append the menu to. Defaults to 'inline'
   * If your menu is being cut off you can append it to an element higher up the DOM tree.
   * Some examples:
   * menuAppendTo={() => document.body}
   * menuAppendTo={document.getElementById('target')}
   */
  menuAppendTo?: HTMLElement | (() => HTMLElement) | 'inline';
  /** Flag specifying which direction the time picker menu expands */
  direction?: 'up' | 'down';
  /** Size of step between time options in minutes.*/
  stepMinutes?: number;
  /** Additional props for input field */
  inputProps?: TextInputProps;
  /** A time string indicating the minimum value allowed. The format could be an ISO 8601 formatted date string or in 'HH{delimiter}MM' format */
  minTime?: string | Date;
  /** A time string indicating the maximum value allowed. The format could be an ISO 8601 formatted date string or in 'HH{delimiter}MM' format */
  maxTime?: string | Date;
  /** Includes number of seconds with the chosen time and allows users to manually edit the seconds value. */
  includeSeconds?: boolean;
}

interface TimePickerState {
  isInvalid: boolean;
  isOpen: boolean;
  timeState: string;
  focusedIndex: number;
  scrollIndex: number;
  timeRegex: RegExp;
  minTimeState: string;
  maxTimeState: string;
}

export class TimePicker extends React.Component<TimePickerProps, TimePickerState> {
  static displayName = 'TimePicker';
  private parentRef = React.createRef<HTMLDivElement>();
  private toggleRef = React.createRef<HTMLDivElement>();
  private inputRef = React.createRef<HTMLInputElement>();
  private menuRef = React.createRef<HTMLUListElement>();

  static defaultProps = {
    className: '',
    isDisabled: false,
    time: '',
    is24Hour: false,
    invalidFormatErrorMessage: 'Invalid time format',
    invalidMinMaxErrorMessage: 'Invalid time entered',
    placeholder: 'hh:mm',
    delimiter: ':',
    'aria-label': 'Time picker',
    menuAppendTo: 'inline',
    direction: 'down',
    width: 150,
    stepMinutes: 30,
    inputProps: {},
    minTime: '',
    maxTime: ''
  };

  constructor(props: TimePickerProps) {
    super(props);
    const { is24Hour, delimiter, time, includeSeconds } = this.props;
    let { minTime, maxTime } = this.props;
    if (minTime === '') {
      const minSeconds = includeSeconds ? `${delimiter}00` : '';
      minTime = is24Hour ? `00${delimiter}00${minSeconds}` : `12${delimiter}00${minSeconds} AM`;
    }
    if (maxTime === '') {
      const maxSeconds = includeSeconds ? `${delimiter}59` : '';
      maxTime = is24Hour ? `23${delimiter}59${maxSeconds}` : `11${delimiter}59${maxSeconds} PM`;
    }
    const timeRegex = this.getRegExp();
    this.state = {
      isInvalid: false,
      isOpen: false,
      timeState: parseTime(time, timeRegex, delimiter, !is24Hour, includeSeconds),
      focusedIndex: null,
      scrollIndex: 0,
      timeRegex,
      minTimeState: parseTime(minTime, timeRegex, delimiter, !is24Hour, includeSeconds),
      maxTimeState: parseTime(maxTime, timeRegex, delimiter, !is24Hour, includeSeconds)
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
            this.onSelect((this.getOptions()[focusedIndex] as HTMLElement).innerText);
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
    const { timeState, isOpen, isInvalid, timeRegex } = this.state;
    const { time, is24Hour, delimiter, includeSeconds } = this.props;
    if (isOpen && !prevState.isOpen && timeState && !isInvalid) {
      this.scrollToSelection(timeState);
    }
    if (delimiter !== prevProps.delimiter) {
      this.setState({
        timeRegex: this.getRegExp()
      });
    }
    if (time !== '' && time !== prevProps.time) {
      this.setState({
        timeState: parseTime(time, timeRegex, delimiter, !is24Hour, includeSeconds)
      });
    }
  }

  updateFocusedIndex = (increment: number) => {
    this.setState(prevState => {
      const maxIndex = this.getOptions().length - 1;
      let nextIndex = prevState.focusedIndex !== null ? prevState.focusedIndex + increment : prevState.scrollIndex;
      if (nextIndex < 0) {
        nextIndex = maxIndex;
      } else if (nextIndex > maxIndex) {
        nextIndex = 0;
      }
      this.scrollToIndex(nextIndex);
      return {
        focusedIndex: nextIndex
      };
    });
  };

  scrollToIndex = (index: number) => {
    this.getOptions()[index].offsetParent.scrollTop = this.getOptions()[index].offsetTop;
  };

  scrollToSelection = (time: string) => {
    const { delimiter, is24Hour } = this.props;
    let splitTime = time.split(this.props.delimiter);
    let focusedIndex = null;

    // build out the rest of the time assuming hh:00 if it's a partial time
    if (splitTime.length < 2) {
      time = `${time}${delimiter}00`;
      splitTime = time.split(delimiter);
    }

    // for 12hr variant, autoscroll to pm if it's currently the afternoon, otherwise autoscroll to am
    if (!is24Hour && splitTime.length > 1 && splitTime[1].length < 2) {
      const minutes = splitTime[1].length === 0 ? '00' : splitTime[1] + '0';
      time = `${splitTime[0]}${delimiter}${minutes}${new Date().getHours() > 11 ? pmSuffix : amSuffix}`;
    } else if (
      !is24Hour &&
      splitTime.length > 1 &&
      splitTime[1].length === 2 &&
      !time.toUpperCase().includes(amSuffix.toUpperCase().trim()) &&
      !time.toUpperCase().includes(pmSuffix.toUpperCase().trim())
    ) {
      time = `${time}${new Date().getHours() > 11 ? pmSuffix : amSuffix}`;
    }

    let scrollIndex = this.getOptions().findIndex(option => option.innerText === time);

    // if we found an exact match, scroll to match and return index of match for focus
    if (scrollIndex !== -1) {
      this.scrollToIndex(scrollIndex);
      focusedIndex = scrollIndex;
    } else if (splitTime.length === 2) {
      // no exact match, scroll to closest hour but don't return index for focus
      let amPm = '';
      if (!is24Hour) {
        if (splitTime[1].toUpperCase().includes('P')) {
          amPm = pmSuffix;
        } else if (splitTime[1].toUpperCase().includes('A')) {
          amPm = amSuffix;
        }
      }
      time = `${splitTime[0]}${delimiter}00${amPm}`;
      scrollIndex = this.getOptions().findIndex(option => option.innerText === time);
      if (scrollIndex !== -1) {
        this.scrollToIndex(scrollIndex);
      }
    }
    this.setState({
      focusedIndex,
      scrollIndex
    });
  };

  getRegExp = () => {
    const { is24Hour, delimiter } = this.props;
    const baseRegex = `\\s*(\\d\\d?)${delimiter}([0-5]\\d)${delimiter}?([0-5]\\d)?`;

    return new RegExp(`^${baseRegex}${is24Hour ? '' : '\\s*([AaPp][Mm])?'}\\s*$`);
  };

  getOptions = () =>
    (this.menuRef && this.menuRef.current ? Array.from(this.menuRef.current.children) : []) as HTMLElement[];

  isValidFormat = (time: string) => {
    if (this.props.validateTime) {
      return this.props.validateTime(time);
    }
    const { delimiter, is24Hour } = this.props;
    return validateTime(time, this.state.timeRegex, delimiter, !is24Hour);
  };

  isValidTime = (time: string) => {
    const { delimiter, includeSeconds } = this.props;
    const { minTimeState, maxTimeState } = this.state;

    return isWithinMinMax(minTimeState, maxTimeState, time, delimiter, includeSeconds);
  };

  isValid = (time: string) => this.isValidFormat(time) && this.isValidTime(time);

  onToggle = (isOpen: boolean) => {
    // on close, parse and validate input
    this.setState(prevState => {
      const { timeRegex, isInvalid } = prevState;
      const { delimiter, is24Hour, includeSeconds } = this.props;
      const time = parseTime(prevState.timeState, timeRegex, delimiter, !is24Hour, includeSeconds);
      return {
        isOpen,
        timeState: time,
        isInvalid: isOpen ? isInvalid : !this.isValid(time)
      };
    });
  };

  onSelect = (selection: string) => {
    const { timeRegex, timeState } = this.state;
    const { delimiter, is24Hour, includeSeconds } = this.props;
    let time = parseTime(selection, timeRegex, delimiter, !is24Hour, includeSeconds);

    // Append 0 seconds to the selected time when includeSeconds is enabled.
    if (includeSeconds) {
      const [timeDigits, ampm] = time.split(' ');
      const suffix = is24Hour ? '' : ` ${ampm}`;

      time = `${timeDigits}${delimiter}00${suffix}`;
    }

    if (time !== timeState) {
      this.onInputChange(time);
    }
    this.setState({
      isOpen: false
    });
  };

  onInputFocus = (e: any) => {
    if (!this.state.isOpen) {
      this.onToggle(true);
    }
    e.stopPropagation();
  };

  onInputChange = (newTime: string) => {
    const { onChange } = this.props;
    const { timeRegex } = this.state;

    if (onChange) {
      onChange(
        newTime,
        getHours(newTime, timeRegex),
        getMinutes(newTime, timeRegex),
        getSeconds(newTime, timeRegex),
        this.isValid(newTime)
      );
    }
    this.scrollToSelection(newTime);
    this.setState({
      timeState: newTime,
      isInvalid: !this.isValid(newTime)
    });
  };

  onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { timeRegex } = this.state;
    const { delimiter, is24Hour, includeSeconds } = this.props;
    const time = parseTime(event.currentTarget.value, timeRegex, delimiter, !is24Hour, includeSeconds);

    this.setState({
      isInvalid: !this.isValid(time)
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
      is24Hour,
      invalidFormatErrorMessage,
      invalidMinMaxErrorMessage,
      direction,
      stepMinutes,
      width,
      delimiter,
      inputProps,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      onChange,
      time,
      validateTime,
      minTime,
      maxTime,
      includeSeconds,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ...props
    } = this.props;
    const { timeState, isOpen, isInvalid, focusedIndex, minTimeState, maxTimeState } = this.state;
    const style = { '--pf-c-date-picker__input--c-form-control--Width': width } as React.CSSProperties;
    const options = makeTimeOptions(stepMinutes, !is24Hour, delimiter, minTimeState, maxTimeState);
    const isValidFormat = this.isValidFormat(timeState);
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
                value={timeState || ''}
                type="text"
                iconVariant="clock"
                onClick={this.onInputFocus}
                onFocus={this.onInputFocus}
                onChange={this.onInputChange}
                onBlur={this.onBlur}
                autoComplete="off"
                isDisabled={isDisabled}
                ref={this.inputRef}
                {...inputProps}
              />
            </div>
            {isOpen && menuAppendTo === 'inline' && menuContainer}
          </div>
        </InputGroup>
        {isInvalid && (
          <div className={css(datePickerStyles.datePickerHelperText, datePickerStyles.modifiers.error)}>
            {!isValidFormat ? invalidFormatErrorMessage : invalidMinMaxErrorMessage}
          </div>
        )}
      </div>
    );

    const popperContainer = (
      <div
        className={css(
          styles.select,
          isOpen && styles.modifiers.expanded,
          direction === SelectDirection.up && styles.modifiers.top,
          className
        )}
      >
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
