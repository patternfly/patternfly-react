import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface LoginMainHeaderProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

declare const LoginMainHeader: FunctionComponent<LoginMainHeaderProps>;

export default LoginMainHeader;
