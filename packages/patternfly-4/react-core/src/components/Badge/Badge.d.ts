import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface BadgeProps extends HTMLProps<HTMLSpanElement> {
  isRead?: Boolean;
  children?: ReactNode;
}

declare const Badge: FunctionComponent<BadgeProps>;

export default Badge;
