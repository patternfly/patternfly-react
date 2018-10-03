import React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { componentShape } from '../../internal/componentShape';
import styles from '@patternfly/patternfly-next/components/Button/button.css';

export const ButtonVariant = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  danger: 'danger',
  link: 'link',
  plain: 'plain'
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
  /** Sets the base component to render. defaults to button */
  component: componentShape,
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
  /** Sets button type */
  type: PropTypes.oneOf(Object.values(ButtonType)),
  /** Adds button variant styles */
  variant: PropTypes.oneOf(Object.values(ButtonVariant)),
  /** Adds accessible text to the button. Required for plain buttons */
  'aria-label': props => {
    if (props.variant === ButtonVariant.plain && !props['aria-label']) {
      return new Error('aria-label is required for Buttons with the plain variant');
    }
    return null;
  }
};

const defaultProps = {
  children: '',
  className: '',
  component: 'button',
  isActive: false,
  isBlock: false,
  isDisabled: false,
  isFocus: false,
  isHover: false,
  type: ButtonType.button,
  variant: ButtonVariant.primary,
  'aria-label': null
};

const Button = ({
  children,
  className,
  component: Component,
  isActive,
  isBlock,
  isDisabled,
  isFocus,
  isHover,
  variant,
  type,
  ...props
}) => {
  const isButtonElement = Component === 'button';

  return (
    <Component
      {...props}
      aria-disabled={isButtonElement ? null : isDisabled}
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
      disabled={isButtonElement ? isDisabled : null}
      tabIndex={isDisabled && !isButtonElement ? -1 : null}
      type={isButtonElement ? type : null}
    >
      {children}
    </Component>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
