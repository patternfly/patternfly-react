import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface LoginFormProps extends HTMLProps<HTMLFormElement> {
  children?: ReactNode;
  showHelperText?: boolean;
  helperText?: ReactNode;
  usernameLabel?: string;
  usernameValue?: string;
  onChangeUsername?: Function;
  isValidUsername?: boolean;
  passwordLabel?: string;
  passwordValue?: string;
  onChangePassword?: Function;
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
