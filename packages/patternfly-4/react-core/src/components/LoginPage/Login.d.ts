import { SFC, HTMLProps, ReactNode } from 'react';

export interface LoginProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  footer?: ReactNode;
  header?: ReactNode;
}

declare const Login: SFC<LoginProps>;

export default Login;
