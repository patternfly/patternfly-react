import { SFC, HTMLProps, ReactNode } from 'react';

export interface LoginBoxFooterProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const LoginBoxFooter: SFC<LoginBoxFooterProps>;

export default LoginBoxFooter;
