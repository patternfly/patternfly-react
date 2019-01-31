import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface LoginMainBodyProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const LoginMainBody: FunctionComponent<LoginMainBodyProps>;

export default LoginMainBody;
