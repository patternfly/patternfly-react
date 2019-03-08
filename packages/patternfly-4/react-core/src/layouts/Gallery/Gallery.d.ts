import { FunctionComponent, HTMLProps } from 'react';
import { OneOf } from '../../helpers/typeUtils';
import { GutterSize } from '../../styles/gutters';

export interface GalleryProps extends HTMLProps<HTMLDivElement> {
  gutter: OneOf<typeof GutterSize, keyof typeof GutterSize>;
}

declare const Gallery: FunctionComponent<GalleryProps>;

export default Gallery;
