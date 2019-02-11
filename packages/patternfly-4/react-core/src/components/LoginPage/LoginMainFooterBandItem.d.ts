import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface LoginMainFooterBandItemProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const LoginMainFooterBandItem: FunctionComponent<LoginMainFooterBandItemProps>;

export default LoginMainFooterBandItem;
