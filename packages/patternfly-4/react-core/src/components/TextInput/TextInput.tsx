import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { css, getModifier } from '@patternfly/react-styles';
import { Omit } from '../../helpers/typeUtils';
import { ValidatedOptions } from '../../helpers/constants';

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

export interface TextInputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'onChange' | 'disabled'> {
  /** Additional classes added to the TextInput. */
  className?: string;
  /** Flag to show if the input is disabled. */
  isDisabled?: boolean;
  /** Flag to show if the input is read only. */
  isReadOnly?: boolean;
  /** Flag to show if the input is required. */
  isRequired?: boolean;
  /** Flag to show if the input is valid or invalid. This prop will be deprecated you should use validated instead. */
  isValid?: boolean;
  /** Flag to show if the input has been validated. */
  validated?: 'success' | 'error' | 'default';
  /** A callback for when the input value changes. */
  onChange?: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
  /** Type that the input accepts. */
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
  /** Value of the input. */
  value?: string | number;
  /** Aria-label. The input requires an associated id or aria-label. */
  'aria-label'?: string;
}

export class TextInput extends React.Component<TextInputProps> {
  static defaultProps = {
    'aria-label': null as string,
    className: '',
    isRequired: false,
    isValid: true,
    validated: 'default',
    isDisabled: false,
    isReadOnly: false,
    type: 'text',
    onChange: (): any => undefined
  };

  constructor(props: TextInputProps) {
    super(props);
    if (!props.id && !props['aria-label'] && !props['aria-labelledby']) {
      // tslint:disable-next-line:no-console
      console.error('Text input:', 'Text input requires either an id or aria-label to be specified');
    }
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (this.props.onChange) {
      this.props.onChange(event.currentTarget.value, event);
    }
  };

  render() {
    const {
      className,
      type,
      value,
      onChange,
      isValid,
      validated,
      isReadOnly,
      isRequired,
      isDisabled,
      ...props
    } = this.props;
    return (
      <input
        {...props}
        className={css(
          styles.formControl,
          validated === ValidatedOptions.success && styles.modifiers.success,
          className
        )}
        onChange={this.handleChange}
        type={type}
        value={value}
        aria-invalid={!isValid || validated === ValidatedOptions.error}
        required={isRequired}
        disabled={isDisabled}
        readOnly={isReadOnly}
      />
    );
  }
}
