import { SFC, HTMLProps, ReactNode } from 'react';

export interface LoginMainBodyProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const LoginMainBody: SFC<LoginMainBodyProps>;

export default LoginMainBody;
