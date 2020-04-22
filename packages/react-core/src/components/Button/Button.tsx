import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Button/button';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, OUIAProps } from '../../helpers';

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  danger = 'danger',
  link = 'link',
  plain = 'plain',
  control = 'control'
}

export enum ButtonType {
  button = 'button',
  submit = 'submit',
  reset = 'reset'
}

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /** Content rendered inside the button */
  children?: React.ReactNode;
  /** Additional classes added to the button */
  className?: string;
  /** Sets the base component to render. defaults to button */
  component?: React.ElementType<any>;
  /** Adds active styling to button. */
  isActive?: boolean;
  /** Adds block styling to button */
  isBlock?: boolean;
  /** Disables the button and adds disabled styling */
  isDisabled?: boolean;
  /** Adds inline styling to a link button */
  isInline?: boolean;
  /** Sets button type */
  type?: 'button' | 'submit' | 'reset';
  /** Adds button variant styles */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'link' | 'plain' | 'control';
  /** Sets position of the link icon */
  iconPosition?: 'left' | 'right';
  /** Adds accessible text to the button. */
  'aria-label'?: string;
  /** Icon for the button. Usable by all variants except for plain. */
  icon?: React.ReactNode | null;
  /** Set button tab index unless component is not a button and is disabled */
  tabIndex?: number;
}

export const Button: React.FunctionComponent<ButtonProps & OUIAProps> = ({
  children = null,
  className = '',
  component = 'button',
  isActive = false,
  isBlock = false,
  isDisabled = false,
  isInline = false,
  type = ButtonType.button,
  variant = ButtonVariant.primary,
  iconPosition = 'left',
  'aria-label': ariaLabel = null,
  icon = null,
  ouiaId = null,
  tabIndex = null as number,
  ...props
}: ButtonProps & OUIAProps) => {
  const Component = component as any;
  const isButtonElement = Component === 'button';
  return (
    <Component
      {...props}
      aria-disabled={isButtonElement ? null : isDisabled}
      aria-label={ariaLabel}
      className={css(
        styles.button,
        styles.modifiers[variant],
        isBlock && styles.modifiers.block,
        isDisabled && !isButtonElement && styles.modifiers.disabled,
        isActive && styles.modifiers.active,
        isInline && variant === ButtonVariant.link && styles.modifiers.inline,
        className
      )}
      disabled={isButtonElement ? isDisabled : null}
      tabIndex={isDisabled && !isButtonElement ? -1 : tabIndex}
      type={isButtonElement ? type : null}
      {...getOUIAProps('Button', ouiaId)}
    >
      {variant !== ButtonVariant.plain && icon && iconPosition === 'left' && (
        <span className={css(styles.buttonIcon, styles.modifiers.start)}>{icon}</span>
      )}
      {children}
      {variant !== ButtonVariant.plain && icon && iconPosition === 'right' && (
        <span className={css(styles.buttonIcon, styles.modifiers.end)}>{icon}</span>
      )}
    </Component>
  );
};
