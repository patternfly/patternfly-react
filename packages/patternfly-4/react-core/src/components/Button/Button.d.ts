import { FunctionComponent, HTMLProps, ReactNode, ReactType } from 'react';
import { OneOf } from '../../helpers/typeUtils';

export const ButtonVariant: {
  primary: 'primary';
  secondary: 'secondary';
  tertiary: 'tertiary';
  danger: 'danger';
  link: 'link';
  plain: 'plain';
};

export const ButtonType: {
  button: 'button';
  submit: 'submit';
};

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
  component?: ReactType<ButtonProps>;
  isActive?: boolean;
  isBlock?: boolean;
  isDisabled?: boolean;
  isFocus?: boolean;
  isHover?: boolean;
  variant?: OneOf<typeof ButtonVariant, keyof typeof ButtonVariant>;
  type?: OneOf<typeof ButtonType, keyof typeof ButtonType>;
}

declare const Button: FunctionComponent<ButtonProps>;

export default Button;
