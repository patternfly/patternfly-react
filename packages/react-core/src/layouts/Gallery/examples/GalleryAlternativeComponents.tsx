import { Gallery, GalleryItem } from '@patternfly/react-core';

export const GalleryAlternativeComponents: React.FunctionComponent = () => (
  <Gallery component="ul">
    <GalleryItem component="li">Gallery Item</GalleryItem>
    <GalleryItem component="li">Gallery Item</GalleryItem>
    <GalleryItem component="li">Gallery Item</GalleryItem>
    <GalleryItem component="li">Gallery Item</GalleryItem>
    <GalleryItem component="li">Gallery Item</GalleryItem>
  </Gallery>
);
