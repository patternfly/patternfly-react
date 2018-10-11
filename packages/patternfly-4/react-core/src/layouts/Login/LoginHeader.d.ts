import { SFC, HTMLProps, ReactNode } from 'react';

export interface LoginHeaderProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  headerBrand?: ReactNode;
}

declare const LoginHeader: SFC<LoginHeaderProps>;

export default LoginHeader;
