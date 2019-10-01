import * as React from 'react';
import { HTMLProps } from 'react';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { css } from '@patternfly/react-styles';
import { Omit } from '../../helpers/typeUtils';

export interface TextAreaProps extends Omit<HTMLProps<HTMLTextAreaElement>, 'onChange'> {
  /** Additional classes added to the TextArea. */
  className?: string;
  /** Flag to show if the TextArea is required. */
  isRequired?: boolean;
  /** Flag to show if the TextArea is valid or invalid. */
  isValid?: boolean;
  /** Value of the TextArea. */
  value?: string | number;
  /** A callback for when the TextArea value changes. */
  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Custom flag to show that the TextArea requires an associated id or aria-label. */
  'aria-label'?: string;
}

export class TextArea extends React.Component<TextAreaProps> {
  static defaultProps = {
    className: '',
    isRequired: false,
    isValid: true,
    'aria-label': null as string
  };

  constructor(props: TextAreaProps) {
    super(props);
    if (!props.id && !props['aria-label']) {
      // tslint:disable-next-line:no-console
      console.error('TextArea: TextArea requires either an id or aria-label to be specified');
    }
  }

  private handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (this.props.onChange) {
      this.props.onChange(event.currentTarget.value, event);
    }
  };

  render() {
    const { className, value, onChange, isValid, isRequired, ...props } = this.props;
    return (
      <textarea
        className={css(styles.formControl, className)}
        onChange={this.handleChange}
        {...(typeof this.props.defaultValue !== 'string' && { value })}
        aria-invalid={!isValid}
        required={isRequired}
        {...props}
      />
    );
  }
}
