import * as React from 'react';
import { HTMLProps } from 'react';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { css } from '@patternfly/react-styles';
import { capitalize, ValidatedOptions } from '../../helpers';

export enum TextAreResizeOrientation {
  horizontal = 'horizontal',
  vertical = 'vertical',
  both = 'both'
}

export interface TextAreaProps extends Omit<HTMLProps<HTMLTextAreaElement>, 'onChange' | 'ref'> {
  /** Additional classes added to the TextArea. */
  className?: string;
  /** Flag to show if the TextArea is required. */
  isRequired?: boolean;
  /** Flag to show if the TextArea is disabled. */
  isDisabled?: boolean;
  /** Flag to show if the TextArea is read only. */
  isReadOnly?: boolean;
  /** Value to indicate if the textarea is modified to show that validation state.
   * If set to success, textarea will be modified to indicate valid state.
   * If set to error, textarea will be modified to indicate error state.
   */
  validated?: 'success' | 'warning' | 'error' | 'default';
  /** Value of the TextArea. */
  value?: string | number;
  /** A callback for when the TextArea value changes. */
  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Sets the orientation to limit the resize to */
  resizeOrientation?: 'horizontal' | 'vertical' | 'both';
  /** Custom flag to show that the TextArea requires an associated id or aria-label. */
  'aria-label'?: string;
  /** A reference object to attach to the textarea. */
  innerRef?: React.RefObject<any>;
}

export class TextAreaBase extends React.Component<TextAreaProps> {
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

  constructor(props: TextAreaProps) {
    super(props);
    if (!props.id && !props['aria-label']) {
      // eslint-disable-next-line no-console
      console.error('TextArea: TextArea requires either an id or aria-label to be specified');
    }
  }

  private handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (this.props.onChange) {
      this.props.onChange(event.currentTarget.value, event);
    }
  };

  render() {
    const {
      className,
      value,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onChange,
      validated,
      isRequired,
      isDisabled,
      isReadOnly,
      resizeOrientation,
      innerRef,
      readOnly,
      disabled,
      ...props
    } = this.props;
    const orientation = `resize${capitalize(resizeOrientation)}` as 'resizeVertical' | 'resizeHorizontal';
    return (
      <textarea
        className={css(
          styles.formControl,
          className,
          resizeOrientation !== TextAreResizeOrientation.both && styles.modifiers[orientation],
          validated === ValidatedOptions.success && styles.modifiers.success,
          validated === ValidatedOptions.warning && styles.modifiers.warning
        )}
        onChange={this.handleChange}
        {...(typeof this.props.defaultValue !== 'string' && { value })}
        aria-invalid={validated === ValidatedOptions.error}
        required={isRequired}
        disabled={isDisabled || disabled}
        readOnly={isReadOnly || readOnly}
        ref={innerRef}
        {...props}
      />
    );
  }
}

export const TextArea = React.forwardRef((props: TextAreaProps, ref: React.Ref<HTMLInputElement>) => (
  <TextAreaBase {...props} innerRef={ref as React.MutableRefObject<any>} />
));
TextArea.displayName = 'TextArea';
