import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface LoginFormProps extends HTMLProps<HTMLFormElement> {
  children?: ReactNode;
  usernameLabel?: string;
  usernameValue?: string;
  onChangeUsername?: Function;
  usernameHelperText?: string;
  usernameHelperTextInvalid?: string;
  isValidUsername?: boolean;
  passwordLabel?: string;
  passwordValue?: string;
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

declare const LoginForm: FunctionComponent<LoginFormProps>;

export default LoginForm;
