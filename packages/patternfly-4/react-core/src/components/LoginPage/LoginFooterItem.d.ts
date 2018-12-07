import { SFC, HTMLProps, ReactNode } from 'react';

export interface LoginFooterItemProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  href?: string;
  target?: string;
}

declare const LoginFooterItem: SFC<LoginFooterItemProps>;

export default LoginFooterItem;
