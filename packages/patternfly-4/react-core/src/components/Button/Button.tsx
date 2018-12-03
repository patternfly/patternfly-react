
import * as React from 'react';
import { OneOf } from '../../typeUtils';
import { componentShape } from '../../internal/componentShape';
import { css, getModifier } from '@patternfly/react-styles';
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

export interface Props extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  component?: React.ReactType<Props>;
  isActive?: boolean;
  isBlock?: boolean;
  isDisabled?: boolean;
  isFocus?: boolean;
  isHover?: boolean;
  variant?: OneOf<typeof ButtonVariant, keyof typeof ButtonVariant>;
  type?: OneOf<typeof ButtonType, keyof typeof ButtonType>;
}

const Button: React.SFC<Props> = ({children,
  className,
  component: ButtonComponent,
  isActive,
  isBlock,
  isDisabled,
  isFocus,
  isHover,
  variant,
  type,
  ...props
})  => {
  const isButtonElement = ButtonComponent === 'button';

  return (
    <button
      {...props}
      aria-disabled={isButtonElement ? undefined : isDisabled}
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
      disabled={isButtonElement ? isDisabled : undefined}
      tabIndex={isDisabled && !isButtonElement ? -1 : undefined}
      type={isButtonElement ? type : undefined}
    >
      {children}
     </button>)
};

export default {Button, ButtonType, ButtonVariant};
