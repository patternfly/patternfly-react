import { SFC, HTMLProps, ReactNode } from 'react';

export interface LoginMainHeaderProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  dropdown?: ReactNode;
  title?: string;
  subtitle?: string;
}

declare const LoginMainHeader: SFC<LoginMainHeaderProps>;

export default LoginMainHeader;
