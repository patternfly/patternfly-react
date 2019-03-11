import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface LoginMainFooterBandItemProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  href?: string;
  target?: string;
  className?: string;
}

declare const LoginMainFooterBandItem: FunctionComponent<LoginMainFooterBandItemProps>;

export default LoginMainFooterBandItem;
