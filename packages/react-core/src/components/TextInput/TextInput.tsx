import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { css } from '@patternfly/react-styles';
import { ValidatedOptions } from '../../helpers/constants';
import { trimLeft } from '../../helpers/util';
import { getDefaultOUIAId, getOUIAProps, OUIAProps } from '../../helpers';
import { getResizeObserver } from '../../helpers/resizeObserver';
import { FormControlIcon } from '../FormControl/FormControlIcon';

export enum TextInputTypes {
  text = 'text',
  date = 'date',
  datetimeLocal = 'datetime-local',
  email = 'email',
  month = 'month',
  number = 'number',
  password = 'password',
  search = 'search',
  tel = 'tel',
  time = 'time',
  url = 'url'
}

export enum TextInputReadOnlyVariant {
  default = 'default',
  plain = 'plain'
}

export interface TextInputExpandedObj {
  /** Flag to apply expanded styling. */
  isExpanded: boolean;
  /** Id of the element that the text input is controlling expansion of. */
  ariaControls: string;
}

export interface TextInputProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'onChange' | 'onFocus' | 'onBlur' | 'disabled' | 'ref'>,
    OUIAProps {
  /** Additional classes added to the text input. */
  className?: string;
  /** Flag to show if the text input is disabled. */
  isDisabled?: boolean;
  /** @deprecated Flag to apply expanded styling. expandedProps should now be used instead. */
  isExpanded?: boolean;
  /** Prop to apply expanded styling to the text input and link it to the element it is controlling. This should be used when the input controls a menu and that menu is expandable. */
  expandedProps?: TextInputExpandedObj;
  /** Sets the input as readonly and determines the readonly styling. */
  readOnlyVariant?: 'plain' | 'default';
  /** Flag indicating whether the input is required */
  isRequired?: boolean;
  /** Value to indicate if the text input is modified to show that validation state.
   * If set to success, text input will be modified to indicate valid state.
   * If set to error, text input will be modified to indicate error state.
   */
  validated?: 'success' | 'warning' | 'error' | 'default';
  /** A callback for when the text input value changes. */
  onChange?: (event: React.FormEvent<HTMLInputElement>, value: string) => void;
  /** Type that the text input accepts. */
  type?:
    | 'text'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'time'
    | 'url';
  /** Value of the text input. */
  value?: string | number;
  /** Placeholder of the text input when there is no value */
  placeholder?: string;
  /** Aria-label. The text input requires an associated id or aria-label. */
  'aria-label'?: string;
  /** @hide A reference object to attach to the text input box. */
  innerRef?: React.RefObject<any>;
  /** @deprecated Use isStartTruncated instead. Trim text at start */
  isLeftTruncated?: boolean;
  /** Trim text at start */
  isStartTruncated?: boolean;
  /** Callback function when text input is focused */
  onFocus?: (event?: any) => void;
  /** Callback function when text input is blurred (focus leaves) */
  onBlur?: (event?: any) => void;
  /** Custom icon to render. If the validated prop is also passed, this will render an icon in addition to a validated icon. */
  customIcon?: React.ReactNode;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

interface TextInputState {
  ouiaStateId: string;
}

// eslint-disable-next-line patternfly-react/no-anonymous-functions
export class TextInputBase extends React.Component<TextInputProps, TextInputState> {
  static displayName = 'TextInputBase';
  static defaultProps: TextInputProps = {
    'aria-label': null,
    isRequired: false,
    validated: 'default' as 'success' | 'warning' | 'error' | 'default',
    isDisabled: false,
    isExpanded: false,
    type: TextInputTypes.text,
    isLeftTruncated: false,
    isStartTruncated: false,
    onChange: (): any => undefined,
    ouiaSafe: true
  };
  inputRef = React.createRef<HTMLInputElement>();
  observer: any = () => {};

  constructor(props: TextInputProps) {
    super(props);
    if (!props.id && !props['aria-label'] && !props['aria-labelledby']) {
      // eslint-disable-next-line no-console
      console.error('Text input:', 'Text input requires either an id or aria-label to be specified');
    }
    this.state = {
      ouiaStateId: getDefaultOUIAId(TextInputBase.displayName)
    };
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (this.props.onChange) {
      this.props.onChange(event, event.currentTarget.value);
    }
  };

  componentDidMount() {
    if (this.props.isLeftTruncated || this.props.isStartTruncated) {
      const inputRef = this.props.innerRef || this.inputRef;
      this.observer = getResizeObserver(inputRef.current, this.handleResize, true);
      this.handleResize();
    }
  }

  componentWillUnmount() {
    if (this.props.isLeftTruncated || this.props.isStartTruncated) {
      this.observer();
    }
  }

  handleResize = () => {
    const inputRef = this.props.innerRef || this.inputRef;
    if (inputRef && inputRef.current) {
      trimLeft(inputRef.current, String(this.props.value));
    }
  };

  restoreText = () => {
    const inputRef = this.props.innerRef || this.inputRef;
    // restore the value
    (inputRef.current as HTMLInputElement).value = String(this.props.value);
    // make sure we still see the rightmost value to preserve cursor click position
    inputRef.current.scrollLeft = inputRef.current.scrollWidth;
  };

  onFocus = (event?: any) => {
    const { isLeftTruncated, isStartTruncated, onFocus } = this.props;
    if (isLeftTruncated || isStartTruncated) {
      this.restoreText();
    }
    onFocus && onFocus(event);
  };

  onBlur = (event?: any) => {
    const { isLeftTruncated, isStartTruncated, onBlur } = this.props;
    if (isLeftTruncated || isStartTruncated) {
      this.handleResize();
    }
    onBlur && onBlur(event);
  };

  render() {
    const {
      innerRef,
      className,
      type,
      value,
      placeholder,
      validated,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      onChange,
      onFocus,
      onBlur,
      isLeftTruncated,
      isStartTruncated,
      isExpanded,
      expandedProps,
      readOnly,
      readOnlyVariant,
      isRequired,
      isDisabled,
      customIcon,
      ouiaId,
      ouiaSafe,
      ...props
    } = this.props;

    const hasStatusIcon = ['success', 'error', 'warning'].includes(validated);
    const ariaExpandedProps = expandedProps
      ? { 'aria-expanded': expandedProps?.isExpanded, 'aria-controls': expandedProps?.ariaControls, role: 'combobox' }
      : {};

    return (
      <span
        className={css(
          styles.formControl,
          readOnlyVariant && styles.modifiers.readonly,
          readOnlyVariant === 'plain' && styles.modifiers.plain,
          isDisabled && styles.modifiers.disabled,
          (isExpanded || expandedProps?.isExpanded) && styles.modifiers.expanded,
          customIcon && styles.modifiers.icon,
          hasStatusIcon && styles.modifiers[validated as 'success' | 'warning' | 'error'],
          className
        )}
      >
        <input
          {...props}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.handleChange}
          type={type}
          value={this.sanitizeInputValue(value)}
          aria-invalid={props['aria-invalid'] ? props['aria-invalid'] : validated === ValidatedOptions.error}
          {...ariaExpandedProps}
          required={isRequired}
          disabled={isDisabled}
          readOnly={!!readOnlyVariant || readOnly}
          ref={innerRef || this.inputRef}
          placeholder={placeholder}
          {...getOUIAProps(TextInput.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe)}
        />
        {(customIcon || hasStatusIcon) && (
          <span className={css(styles.formControlUtilities)}>
            {customIcon && <FormControlIcon customIcon={customIcon} />}
            {hasStatusIcon && <FormControlIcon status={validated as 'success' | 'error' | 'warning'} />}
          </span>
        )}
      </span>
    );
  }

  private sanitizeInputValue = (value: string | number) =>
    typeof value === 'string' ? value.replace(/\n/g, ' ') : value;
}

export const TextInput = React.forwardRef((props: TextInputProps, ref: React.Ref<HTMLInputElement>) => (
  <TextInputBase {...props} innerRef={ref as React.MutableRefObject<any>} />
));
TextInput.displayName = 'TextInput';
