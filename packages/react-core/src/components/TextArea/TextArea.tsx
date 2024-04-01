import * as React from 'react';
import { HTMLProps } from 'react';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { css } from '@patternfly/react-styles';
import { capitalize, ValidatedOptions, canUseDOM } from '../../helpers';
import { FormControlIcon } from '../FormControl/FormControlIcon';

export enum TextAreResizeOrientation {
  horizontal = 'horizontal',
  vertical = 'vertical',
  both = 'both'
}

export enum TextAreaReadOnlyVariant {
  default = 'default',
  plain = 'plain'
}

export interface TextAreaProps extends Omit<HTMLProps<HTMLTextAreaElement>, 'onChange' | 'ref'> {
  /** Additional classes added to the text area. */
  className?: string;
  /** Flag to show if the text area is required. */
  isRequired?: boolean;
  /** Flag to show if the text area is disabled. */
  isDisabled?: boolean;
  /** Read only variant. */
  readOnlyVariant?: 'default' | 'plain';
  /** Flag to modify height based on contents. */
  autoResize?: boolean;
  /** Value to indicate if the text area is modified to show that validation state.
   * If set to success, text area will be modified to indicate valid state.
   * If set to error, text area will be modified to indicate error state.
   */
  validated?: 'success' | 'warning' | 'error' | 'default';
  /** Value of the text area. */
  value?: string | number;
  /** A callback for when the text area value changes. */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>, value: string) => void;
  /** Sets the orientation to limit the resize to */
  resizeOrientation?: 'horizontal' | 'vertical' | 'both';
  /** Custom flag to show that the text area requires an associated id or aria-label. */
  'aria-label'?: string;
  /** @hide A reference object to attach to the text area. */
  innerRef?: React.RefObject<any>;
}

class TextAreaBase extends React.Component<TextAreaProps> {
  static displayName = 'TextArea';
  static defaultProps: TextAreaProps = {
    innerRef: React.createRef<HTMLTextAreaElement>(),
    className: '',
    isRequired: false,
    isDisabled: false,
    validated: 'default',
    resizeOrientation: 'both',
    'aria-label': null as string
  };

  inputRef = React.createRef<HTMLTextAreaElement>();

  private setAutoHeight = (field: HTMLTextAreaElement) => {
    const parent = field.parentElement;
    parent.style.setProperty('height', 'inherit');
    const computed = window.getComputedStyle(field);
    // Calculate the height
    const height =
      parseInt(computed.getPropertyValue('border-top-width')) +
      parseInt(computed.getPropertyValue('padding-top')) +
      field.scrollHeight +
      parseInt(computed.getPropertyValue('padding-bottom')) +
      parseInt(computed.getPropertyValue('border-bottom-width'));
    parent.style.setProperty('height', `${height}px`);
  };

  constructor(props: TextAreaProps) {
    super(props);
    if (!props.id && !props['aria-label']) {
      // eslint-disable-next-line no-console
      console.error('TextArea: TextArea requires either an id or aria-label to be specified');
    }
  }

  componentDidMount(): void {
    const inputRef = this.props.innerRef || this.inputRef;
    if (this.props.autoResize && canUseDOM) {
      const field = inputRef.current;
      this.setAutoHeight(field);
    }
  }

  private handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // https://gomakethings.com/automatically-expand-a-textarea-as-the-user-types-using-vanilla-javascript/
    const field = event.currentTarget;
    if (this.props.autoResize && canUseDOM) {
      this.setAutoHeight(field);
    }
    if (this.props.onChange) {
      this.props.onChange(event, field.value);
    }
  };

  render() {
    const {
      className,
      value,
      validated,
      isRequired,
      isDisabled,
      readOnlyVariant,
      resizeOrientation,
      innerRef,
      disabled,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      autoResize,
      onChange,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      onBlur,
      onFocus,
      ...props
    } = this.props;
    const orientation = `resize${capitalize(resizeOrientation)}` as
      | 'resizeVertical'
      | 'resizeHorizontal'
      | 'resizeBoth';
    const hasStatusIcon = ['success', 'error', 'warning'].includes(validated);

    return (
      <span
        className={css(
          styles.formControl,
          readOnlyVariant && styles.modifiers.readonly,
          readOnlyVariant === 'plain' && styles.modifiers.plain,
          resizeOrientation && styles.modifiers[orientation],
          isDisabled && styles.modifiers.disabled,
          hasStatusIcon && styles.modifiers[validated as 'success' | 'warning' | 'error'],
          className
        )}
      >
        <textarea
          onChange={this.handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          {...(typeof this.props.defaultValue !== 'string' && { value })}
          aria-invalid={validated === ValidatedOptions.error}
          required={isRequired}
          disabled={isDisabled || disabled}
          readOnly={!!readOnlyVariant}
          ref={innerRef || this.inputRef}
          {...props}
        />
        {hasStatusIcon && (
          <span className={css(styles.formControlUtilities)}>
            <FormControlIcon status={validated as 'success' | 'error' | 'warning'} />
          </span>
        )}
      </span>
    );
  }
}

export const TextArea = React.forwardRef((props: TextAreaProps, ref: React.Ref<HTMLTextAreaElement>) => (
  <TextAreaBase {...props} innerRef={ref as React.MutableRefObject<any>} />
));
TextArea.displayName = 'TextArea';
