import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface LoginFooterProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const LoginFooter: FunctionComponent<LoginFooterProps>;

export default LoginFooter;
