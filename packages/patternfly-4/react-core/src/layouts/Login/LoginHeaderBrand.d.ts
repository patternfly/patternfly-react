import { SFC, HTMLProps, ReactNode } from 'react';

export interface LoginHeaderBrandProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const LoginHeaderBrand: SFC<LoginHeaderBrandProps>;

export default LoginHeaderBrand;
