import { SFC, HTMLProps, ReactNode } from 'react';

export interface LoginMainFooterProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const LoginMainFooter: SFC<LoginMainFooterProps>;

export default LoginMainFooter;
