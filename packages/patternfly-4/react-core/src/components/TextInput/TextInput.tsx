import * as React from 'react';
import styles from '@patternfly/patternfly/components/FormControl/form-control.css';
import { css } from '@patternfly/react-styles';
import { Omit } from '../../helpers/typeUtils';
import { FormEvent } from 'react';

export enum inputTypes {
  text = 'text',
  date = 'date',
  'datetime-local' = 'datetime-local',
  email = 'email',
  month = 'month',
  number = 'number',
  password = 'password',
  search = 'search',
  tel = 'tel',
  time = 'time',
  url = 'url'
}

export interface TextInputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'onChange'> {
  /** Additional classes added to the TextInput. */
  className: string;
  /** Flag to show if the input is required. */
  isRequired: boolean;
  /** Type that the input accepts. */
  type: inputTypes;
  /** Value of the input. */
  value: string | number;
  /** Flag to show if the input is valid or invalid. */
  isValid: boolean;
  /** Flag to show if the input is disabled. */
  isDisabled: boolean;
  /** A callback for when the input value changes. */
  onChange: (value: string, event: FormEvent<HTMLInputElement>) => void;
  /** Flag to show if the input is read only. */
  isReadOnly: boolean;
  /** Aria-label. The input requires an associated id or aria-label. */
  'aria-label': string;
}

export class TextInput extends React.Component<TextInputProps> {
  static defaultProps = {
    className: '',
    isRequired: false,
    isValid: true,
    isDisabled: false,
    isReadOnly: false,
    type: 'text',
    value: undefined,
    onChange: () => undefined,
    'aria-label': null
  }

  constructor(props: TextInputProps) {
    super(props);
    if (!props.id && !props['aria-label'] && !props['aria-labelledby']) {
      console.error('Text input:', 'Text input requires either an id or aria-label to be specified');
    }
  }

  handleChange = (event: FormEvent<HTMLInputElement>) => {
    this.props.onChange(event.currentTarget.value, event);
  }

  render() {
    const { className, type, value, onChange, isValid, isReadOnly, isRequired, isDisabled, ...props } = this.props;
    return (
      <input
        {...props}
        className={css(styles.formControl, className)}
        onChange={this.handleChange}
        type={type}
        value={value}
        aria-invalid={!isValid}
        required={isRequired}
        disabled={isDisabled}
        readOnly={isReadOnly}
      />
    );
  }
}
