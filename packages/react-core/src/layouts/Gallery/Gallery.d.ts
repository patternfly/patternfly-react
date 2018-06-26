import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export const GutterSize: {
  sm: 'sm';
  md: 'md';
  lg: 'lg';
};

export interface GalleryProps extends HTMLProps<HTMLDivElement> {
  gutter: OneOf<typeof GutterSize, keyof typeof GutterSize>;
}

declare const Gallery: SFC<GalleryProps>;

export default Gallery;
