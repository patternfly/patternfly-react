import { SFC, HTMLProps, ReactNode } from 'react';

export interface LoginBoxBodyProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const LoginBoxBody: SFC<LoginBoxBodyProps>;

export default LoginBoxBody;
