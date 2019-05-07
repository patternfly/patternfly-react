import * as React from 'react';
import styles from '@patternfly/patternfly/components/Radio/radio.css';
import { css, getModifier } from '@patternfly/react-styles';
import { Omit } from '../../helpers/typeUtils';

export interface RadioProps extends Omit<React.HTMLProps<HTMLInputElement>, 'label' | 'onChange'> {
  /** Additional classes added to the radio. */
  className?: string;
  /** Id of the radio. */
  id: string;
  /** Flag to show if the radio is checked. */
  isChecked?: boolean;
  /** Flag to show if the radio is disabled. */
  isDisabled?: boolean;
  /** Flag to show if the radio selection is valid or invalid. */
  isValid?: boolean;
  /** Label text of the radio. */
  label?: React.ReactNode;
  /** Name for group of radios */
  name: string;
  /** A callback for when the radio selection changes. */
  onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
  /** Aria-label of the radio. */
  'aria-label'?: string;
}

export class Radio extends React.Component<RadioProps> {
  static defaultProps = {
    className: '',
    isChecked: null,
    isDisabled: false,
    isValid: true,
    label: undefined,
    onChange: () => undefined
  }

  constructor(props: RadioProps) {
    super(props);
    if (!props.label && !props['aria-label']) {
      console.error('Radio:', 'Radio requires an aria-label to be specified');
    }
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.props.onChange && this.props.onChange(event.currentTarget.checked, event);
  }

  render() {
    const {
      'aria-label': ariaLabel,
      className,
      isChecked,
      isDisabled,
      isValid,
      label,
      onChange,
      ...props
    } = this.props;
    return (
      <div className={css(styles.radio, className)}>
        <input
          {...props}
          aria-label={label ? undefined : ariaLabel}
          className={css(styles.radioInput)}
          type="radio"
          onChange={this.handleChange}
          aria-invalid={!isValid}
          disabled={isDisabled}
          checked={isChecked}
          defaultChecked={undefined}
        />
        {label && (
          <label className={css(styles.radioLabel, getModifier(styles, isDisabled && 'disabled' as any))} htmlFor={props.id}>
            {label}
          </label>
        )}
      </div>
    );
  }
}
