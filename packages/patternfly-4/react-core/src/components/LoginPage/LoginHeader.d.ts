import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface LoginHeaderProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  headerBrand?: ReactNode;
}

declare const LoginHeader: FunctionComponent<LoginHeaderProps>;

export default LoginHeader;
