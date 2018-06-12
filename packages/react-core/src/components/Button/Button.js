import React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Button/styles.css';

export const ButtonVariant = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  danger: 'danger',
  link: 'link',
  action: 'action'
};

export const ButtonType = {
  button: 'button',
  submit: 'submit'
};

const propTypes = {
  /** content rendered inside the button */
  children: PropTypes.node,
  /** additional classes added to the button */
  className: PropTypes.string,
  /**  Adds active styling to button. */
  isActive: PropTypes.bool,
  /** Adds block styling to button */
  isBlock: PropTypes.bool,
  /** Disables the button and adds disabled styling */
  isDisabled: PropTypes.bool,
  /** Adds focus styling to the button */
  isFocus: PropTypes.bool,
  /** Adds hove styling to the button */
  isHover: PropTypes.bool,
  /* Aria label used for action buttons that only use icons */
  label: PropTypes.string,
  /** Sets button type */
  type: PropTypes.oneOf(Object.keys(ButtonType)),
  /* Adds button variant styles */
  variant: PropTypes.oneOf(Object.keys(ButtonVariant))
};

const defaultProps = {
  children: '',
  className: '',
  isActive: false,
  isBlock: false,
  isDisabled: false,
  isFocus: false,
  isHover: false,
  label: '',
  type: ButtonType.button,
  variant: ButtonVariant.primary
};

const Button = ({
  children,
  className,
  isActive,
  isBlock,
  isDisabled,
  isFocus,
  isHover,
  label,
  variant,
  ...props
}) => (
  <button
    {...props}
    disabled={isDisabled}
    aria-label={variant === ButtonVariant.action ? label : null}
    className={css(
      styles.button,
      getModifier(styles.modifiers, variant),
      isBlock && styles.modifiers.block,
      isDisabled && styles.modifiers.disabled,
      isActive && styles.modifiers.active,
      isFocus && styles.modifiers.focus,
      isHover && styles.modifiers.hover,
      className
    )}
  >
    {children}
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
