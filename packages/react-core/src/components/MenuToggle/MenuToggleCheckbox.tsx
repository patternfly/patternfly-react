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
  /** Flag to show if the checkbox is checked when it is controlled by React state.
   * To make the checkbox uncontrolled instead use the defaultChecked prop, but do not use both.
   */
  isChecked?: boolean | null;
  /** Flag to set the default checked value of the checkbox when it is uncontrolled by React state.
   * To make the checkbox controlled instead use the isChecked prop, but do not use both.
   */
  defaultChecked?: boolean | null;
  /** A callback for when the checkbox selection changes */
  onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
  /** Element to be rendered inside the <span> */
  children?: React.ReactNode;
  /** Id of the checkbox */
  id: string;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

export class MenuToggleCheckbox extends React.Component<MenuToggleCheckboxProps, { ouiaStateId: string }> {
  static displayName = 'MenuToggleCheckbox';
  static defaultProps: PickOptional<MenuToggleCheckboxProps> = {
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
    const { isChecked, defaultChecked } = this.props;
    if (isChecked === null) {
      // return false here and the indeterminate state will be set to true through the ref
      return false;
    } else if (isChecked !== undefined) {
      return isChecked;
    }
    return defaultChecked;
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
      defaultChecked,
      id,
      ...props
    } = this.props;
    const text = children && (
      <span className={css(styles.checkLabel, className)} aria-hidden="true" id={id}>
        {children}
      </span>
    );
    return (
      <label className={css(styles.check, !children && styles.modifiers.standalone, className)} htmlFor={id}>
        <input
          className={css(styles.checkInput)}
          {...(this.calculateChecked() !== undefined && { onChange: this.handleChange })}
          name={id}
          type="checkbox"
          ref={elem => elem && (elem.indeterminate = isChecked === null)}
          aria-invalid={!isValid}
          disabled={isDisabled}
          {...(defaultChecked !== undefined ? { defaultChecked } : { checked: isChecked })}
          {...getOUIAProps(
            MenuToggleCheckbox.displayName,
            ouiaId !== undefined ? ouiaId : this.state.ouiaStateId,
            ouiaSafe
          )}
          {...props}
        />
        {text}
      </label>
    );
  }
}
