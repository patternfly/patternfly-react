import { SFC, HTMLProps, ReactNode } from 'react';

export interface LoginBoxHeaderProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  dropdown?: ReactNode;
  title?: string;
  subtitle?: string;
}

declare const LoginBoxHeader: SFC<LoginBoxHeaderProps>;

export default LoginBoxHeader;
