import { SFC, HTMLProps, ReactNode } from 'react';
import { Omit, OneOf } from '../../typeUtils';

export interface BadgeProps extends HTMLProps<HTMLSpanElement> {
  isRead?: Boolean;
  children?: ReactNode;
}

declare const Badge: SFC<BadgeProps>;

export default Badge;
