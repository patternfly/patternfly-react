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
  isChecked?: boolean; 
  /** Alternate Flag to show if the checkbox is checked */
  checked?: boolean; 
  /** A callback for when the checkbox selection changes */
  onChangeonChange?(checked: boolean, event: React.FormEvent<HTMLInputElement>): void;
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
    isChecked: null,
    checked: null,
    onChange: () => undefined
  };

  handleChange = event => {
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
