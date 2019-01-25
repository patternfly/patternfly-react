import { FunctionComponent, HTMLProps } from 'react';

export interface GalleryItemProps extends HTMLProps<HTMLDivElement> {}

declare const GalleryItem: FunctionComponent<GalleryItemProps>;

export default GalleryItem;
