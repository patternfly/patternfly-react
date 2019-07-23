import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Button/button';
import { css, getModifier } from '@patternfly/react-styles';
import { ButtonProps as StandardButtonProps } from '../../../components/Button';

export interface ButtonProps extends StandardButtonProps {
  /** Dangerous prop to use at own risk */
  render?: boolean;
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
  type = 'button',
  variant = 'primary',
  'aria-label': ariaLabel = null, 
  icon = null,
  render = true,
  ...props
}: ButtonProps) => {
  if (!render) {
    return <p>no render</p>;
  }
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
        isInline && variant === 'link' && styles.modifiers.inline,
        className
      )}
      disabled={isButtonElement ? isDisabled : null}
      tabIndex={isDisabled && !isButtonElement ? -1 : null}
      type={isButtonElement ? type : null}
    >
      {(icon && variant === 'link') && <span className="pf-c-button__icon">{icon}</span>}
      {children}
    </Component>
  );
}
