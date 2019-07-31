import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Button/button';
import { css, getModifier } from '@patternfly/react-styles';

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  danger = 'danger',
  link = 'link',
  plain = 'plain'
};

export enum ButtonType {
  button = 'button',
  submit = 'submit'
};

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /** Content rendered inside the button */
  children?: React.ReactNode;
  /** Additional classes added to the button */
  className?: string; 
  /** Sets the base component to render. defaults to button */
  component?: React.ReactNode;  
  /** Adds active styling to button. */
  isActive?: boolean;
  /** Adds block styling to button */
  isBlock?: boolean;
  /** Disables the button and adds disabled styling */
  isDisabled?: boolean;
  /** Adds focus styling to the button */
  isFocus?: boolean;
  /** Adds hover styling to the button */
  isHover?: boolean;
  /** Adds inline styling to a link button */
  isInline?: boolean;
  /** Sets button type */
  type?: 'button' | 'submit' | 'reset';
  /** Adds button variant styles */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'link' | 'plain' ;
  /** Adds accessible text to the button. */
  'aria-label'?: string; 
  /** Icon for the button if variant is a link */
  icon?: React.ReactNode | null;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children = null, 
  className = '', 
  component = 'button', 
  isActive = false, 
  isBlock = false,
  isDisabled = false,
  isFocus = false,
  isHover = false,
  isInline = false,
  type = ButtonType.button,
  variant = ButtonVariant.primary,
  'aria-label': ariaLabel = null, 
  icon = null,
  ...props
}: ButtonProps) => {
  const Component = component as any;
  const isButtonElement = Component === 'button';
  return (
  <Component
    {...props}
    aria-disabled={isButtonElement ? null : isDisabled}
    aria-label={ariaLabel}
    className={css(
      styles.button,
      getModifier(styles.modifiers, variant),
      isBlock && styles.modifiers.block,
      isDisabled && styles.modifiers.disabled,
      isActive && styles.modifiers.active,
      isFocus && styles.modifiers.focus,
      isHover && styles.modifiers.hover,
      isInline && variant === ButtonVariant.link && styles.modifiers.inline,
      className
    )}
    disabled={isButtonElement ? isDisabled : null}
    tabIndex={isDisabled && !isButtonElement ? -1 : null}
    type={isButtonElement ? type : null}
  >
    {(icon && variant === ButtonVariant.link) && <span className="pf-c-button__icon">{icon}</span>}
    {children}
  </Component>
  );
}