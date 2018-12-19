import { SFC, HTMLProps, ReactNode } from 'react';
import { Omit, OneOf } from '../../typeUtils';

export const BackgroundImageSrc: {
  lg: 'lg';
  sm: 'sm';
  sm2x: 'sm2x';
  xs: 'xs';
  xs2x: 'xs2x';
  filter: 'filter';
};

export type BackgroundImageSrcMap = { [K in keyof typeof BackgroundImageSrc]: string };

export interface BackgroundImageProps extends Omit<HTMLProps<HTMLDivElement>, 'src'> {
  src: string | BackgroundImageSrcMap;
}

declare const BackgroundImage: SFC<BackgroundImageProps>;

export default BackgroundImage;
