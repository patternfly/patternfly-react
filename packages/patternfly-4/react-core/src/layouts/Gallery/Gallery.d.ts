import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';
import { GutterSize } from '../../styles/gutters';

export interface GalleryProps extends HTMLProps<HTMLDivElement> {
  gutter: OneOf<typeof GutterSize, keyof typeof GutterSize>;
}

declare const Gallery: SFC<GalleryProps>;

export default Gallery;
