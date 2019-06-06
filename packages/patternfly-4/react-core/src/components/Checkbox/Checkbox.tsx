import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Check/check';
import { css, getModifier } from '@patternfly/react-styles';
import { Omit } from '../../helpers/typeUtils';

export interface CheckboxProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'label'> {
  /** Additional classes added to the Checkbox. */
  className?: string;
  /** Flag to show if the Checkbox selection is valid or invalid. */
  isValid?: boolean;
  /** Flag to show if the Checkbox is disabled. */
  isDisabled?: boolean;
  /** Flag to show if the Checkbox is checked. */
  isChecked?: boolean;
  checked?: boolean;
  /** A callback for when the Checkbox selection changes. */
  onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
  /** Label text of the checkbox. */
  label?: React.ReactNode;
  /** Id of the checkbox. */
  id: string;
  /** Aria-label of the checkbox. */
  'aria-label': string;
}

// tslint:disable-next-line:no-empty
const defaultOnChange = () => {};

export class Checkbox extends React.Component<CheckboxProps> {
  static defaultProps = {
    className: '',
    isValid: true,
    isDisabled: false,
    isChecked: false,
    onChange: defaultOnChange
  };

  constructor(props: any) {
    super(props);
  }

  private handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.props.onChange(event.currentTarget.checked, event);
  };

  render() {
    const {
      'aria-label': ariaLabel,
      className,
      onChange,
      isValid,
      isDisabled,
      isChecked,
      label,
      checked,
      defaultChecked,
      ...props
    } = this.props;
    const checkedProps: { checked?: boolean; defaultChecked?: boolean } = {};
    if ([true, false].includes(checked) || isChecked === true) {
      checkedProps.checked =  checked || isChecked;
    }
    if(onChange !== defaultOnChange) {
      checkedProps.checked = isChecked
    }
    if ([false, true].includes(defaultChecked)) {
      checkedProps.defaultChecked = defaultChecked;
    }
    return (
      <div className={css(styles.check, className)}>
        <input
          {...props}
          className={css(styles.checkInput)}
          type="checkbox"
          onChange={this.handleChange}
          aria-invalid={!isValid}
          aria-label={ariaLabel}
          disabled={isDisabled}
          {...checkedProps}
        />
        {label && (
          <label
            className={css(styles.checkLabel, isDisabled ? getModifier(styles, 'disabled') : '')}
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
}
