import { SFC, ReactNode } from 'react';

export interface VerticalNavIconBarProps {
  children?: ReactNode;
  collapse?: boolean;
}

declare const VerticalNavIconBar: SFC<VerticalNavIconBarProps>;

export default VerticalNavIconBar;
