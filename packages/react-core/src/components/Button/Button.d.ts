import { HTMLProps } from 'react';

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  danger = 'danger',
  link = 'link',
  action = 'action'
}

export enum ButtonType {
  button = 'button',
  submit = 'submit'
}

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
  isActive?: boolean;
  isBlock?: boolean;
  isDisabled?: boolean;
  isFocus?: boolean;
  isHover?: boolean;
  variant?: ButtonVariant;
  type?: ButtonType;
}

declare const Button: React.SFC<ButtonProps>;

export default Button;
