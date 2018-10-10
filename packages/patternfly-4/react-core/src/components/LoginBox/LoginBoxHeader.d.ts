import { SFC, HTMLProps, ReactNode } from 'react';

export interface LoginBoxHeaderProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const LoginBoxHeader: SFC<LoginBoxHeaderProps>;

export default LoginBoxHeader;
