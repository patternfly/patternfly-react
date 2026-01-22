import { Gallery, GalleryItem } from '@patternfly/react-core';

export const GalleryAdjustingMaxWidths: React.FunctionComponent = () => (
  <Gallery
    hasGutter
    maxWidths={{
      md: '280px',
      lg: '320px',
      '2xl': '400px'
    }}
  >
    <GalleryItem>Gallery Item</GalleryItem>
    <GalleryItem>Gallery Item</GalleryItem>
    <GalleryItem>Gallery Item</GalleryItem>
    <GalleryItem>Gallery Item</GalleryItem>
    <GalleryItem>Gallery Item</GalleryItem>
    <GalleryItem>Gallery Item</GalleryItem>
    <GalleryItem>Gallery Item</GalleryItem>
    <GalleryItem>Gallery Item</GalleryItem>
  </Gallery>
);
