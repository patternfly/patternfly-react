import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface LoginMainFooterProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  socialMediaLoginContent?: ReactNode;
  signUpForAccountMessage?: ReactNode;
  forgotCredentials?: ReactNode;
  className?: string;
}

declare const LoginMainFooter: FunctionComponent<LoginMainFooterProps>;

export default LoginMainFooter;
