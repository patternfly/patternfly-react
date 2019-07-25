import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { css } from '@patternfly/react-styles';
import { Omit } from '../../helpers/typeUtils';

export interface DropdownToggleCheckboxProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled'> { 
  /** Additional classes added to the DropdownToggleCheckbox */
  className?: string;
  /** Flag to show if the checkbox selection is valid or invalid */
  isValid?: boolean;
  /** Flag to show if the checkbox is disabled */
  isDisabled?: boolean;
  /** Flag to show if the checkbox is checked */
  isChecked?: boolean | null;
  /** Alternate Flag to show if the checkbox is checked */
  checked?: boolean | null;
  /** A callback for when the checkbox selection changes */
  onChange?(checked: boolean, event: React.FormEvent<HTMLInputElement>): void;
  /** Id of the checkbox */
  id: string;
  /** Aria-label of the checkbox */
  'aria-label': string;
}

export class DropdownToggleCheckbox extends React.Component<DropdownToggleCheckboxProps> {
  
  static defaultProps = {
    className: '',
    isValid: true,
    isDisabled: false,
    isChecked: null as boolean | null,
    checked: null as boolean | null,
    onChange: () => undefined as any
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.currentTarget.checked, event);
  };

  render() {
    const { className, onChange, isValid, isDisabled, isChecked, checked, ...props } = this.props;
    return (
      <label className={css(styles.dropdownToggleCheck, className)} htmlFor={props.id}>
        <input
          {...props}
          type="checkbox"
          onChange={this.handleChange}
          aria-invalid={!isValid}
          disabled={isDisabled}
          checked={isChecked || checked}
        />
      </label>
    );
  }
}
