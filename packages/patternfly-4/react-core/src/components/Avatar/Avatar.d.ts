import { SFC, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../typeUtils';

export interface AvatarProps extends HTMLProps<HTMLImageElement> {
  src?: string;
  alt: string;
}
declare const Avatar: SFC<AvatarProps>;
export default Avatar;
