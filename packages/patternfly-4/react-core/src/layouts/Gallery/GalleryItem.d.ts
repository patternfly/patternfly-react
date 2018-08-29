import { SFC, HTMLProps } from 'react';

export interface GalleryItemProps extends HTMLProps<HTMLDivElement> {}

declare const GalleryItem: SFC<GalleryItemProps>;

export default GalleryItem;
