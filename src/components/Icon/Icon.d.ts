import { HTMLAttributes, SFC } from 'react';

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  type?: 'fa' | 'pf';
}

declare const Icon: SFC<IconProps>;

export default Icon;
