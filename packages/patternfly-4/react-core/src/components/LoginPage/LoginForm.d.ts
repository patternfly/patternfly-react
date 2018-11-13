import { SFC, HTMLProps, ReactNode } from 'react';

export interface LoginFormProps extends HTMLProps<HTMLFormElement> {
  children?: ReactNode;
  usernameLabel?: string;
  usernameValue?: string;
  onChangeUsername?: Function;
  usernameHelperText?: string;
  usernameHelperTextInvalid?: string;
  isValidUsername?: boolean;
  passwordLabel?: string;
  PasswordValue?: string;
  onChangePassword?: Function;
  passwordHelperText?: string;
  passwordHelperTextInvalid?: string;
  isValidPassword?: boolean;
  loginButtonLabel?: string;
  onLoginButtonClick?: Function;
  rememberMeLabel?: string;
  isRememberMeChecked?: boolean;
  onChangeRememberMe?: Function;
  rememberMeAriaLabel?: string;
}

declare const LoginForm: SFC<LoginFormProps>;

export default LoginForm;
