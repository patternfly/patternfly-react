import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export const BackgroundImageSrc: {
  lg: 'lg',
  md: 'md',
  md2x: 'md2x',
  sm: 'sm',
  sm2x: 'sm2x',
  xl: 'xl',
  xs: 'xs',
  xs2x: 'xs2x',
  filter: 'filter'
};

export interface BackgroundImageProps extends HTMLProps<HTMLDivElement> {
  src: string | {
    lg?: string;
    md?: string;
    md2x?: string;
    sm?: string;
    sm2x?: string;
    xl?: string;
    xs?: string;
    xs2x?: string;
    filter?: string;
  };
}

declare const BackgroundImage: SFC<BackgroundImageProps>;

export default BackgroundImage;
