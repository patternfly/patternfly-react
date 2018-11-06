import { SFC, HTMLProps, ReactNode } from 'react';

export interface LoginBoxProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const LoginBox: SFC<LoginBoxProps>;

export default LoginBox;
