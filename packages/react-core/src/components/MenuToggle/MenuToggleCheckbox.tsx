import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Check/check';
import { css } from '@patternfly/react-styles';
import { PickOptional } from '../../helpers/typeUtils';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';

export interface MenuToggleCheckboxProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'checked'>,
    OUIAProps {
  /** Additional classes added to the MenuToggleCheckbox */
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
  onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
  /** Element to be rendered inside the <span> */
  children?: React.ReactNode;
  /** Id of the checkbox */
  id: string;
  /** Aria-label of the checkbox */
  'aria-label': string;
}

export class MenuToggleCheckbox extends React.Component<MenuToggleCheckboxProps, { ouiaStateId: string }> {
  static displayName = 'MenuToggleCheckbox';
  static defaultProps: PickOptional<MenuToggleCheckboxProps> = {
    className: '',
    isValid: true,
    isDisabled: false,
    onChange: () => undefined as any
  };

  constructor(props: MenuToggleCheckboxProps) {
    super(props);
    this.state = {
      ouiaStateId: getDefaultOUIAId(MenuToggleCheckbox.displayName)
    };
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.props.onChange((event.target as HTMLInputElement).checked, event);
  };

  calculateChecked = () => {
    const { isChecked, checked } = this.props;
    if (isChecked === null) {
      // return false here and the indeterminate state will be set to true through the ref
      return false;
    } else if (isChecked !== undefined) {
      return isChecked;
    }
    return checked;
  };

  render() {
    const {
      className,
      isValid,
      isDisabled,
      isChecked,
      children,
      ouiaId,
      ouiaSafe,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      onChange,
      checked,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ...props
    } = this.props;
    const text = children && (
      <span className={css(styles.checkLabel, className)} aria-hidden="true" id={props.id}>
        {children}
      </span>
    );
    return (
      <label className={css(styles.check, !children && styles.modifiers.standalone, className)} htmlFor={props.id}>
        <input
          className={css(styles.checkInput)}
          {...props}
          {...(this.calculateChecked() !== undefined && { onChange: this.handleChange })}
          name={props.id}
          type="checkbox"
          ref={elem => elem && (elem.indeterminate = isChecked === null)}
          aria-invalid={!isValid}
          disabled={isDisabled}
          checked={this.calculateChecked()}
          {...getOUIAProps(
            MenuToggleCheckbox.displayName,
            ouiaId !== undefined ? ouiaId : this.state.ouiaStateId,
            ouiaSafe
          )}
        />
        {text}
      </label>
    );
  }
}
