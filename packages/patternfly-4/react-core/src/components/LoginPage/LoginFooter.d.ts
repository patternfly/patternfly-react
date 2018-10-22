import { SFC, HTMLProps, ReactNode } from 'react';

export interface LoginFooterProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const LoginFooter: SFC<LoginFooterProps>;

export default LoginFooter;
