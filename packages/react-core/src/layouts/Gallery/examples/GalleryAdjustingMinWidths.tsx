import { Gallery, GalleryItem } from '@rh-felt/react-core';

export const GalleryAdjustingMinWidths: React.FunctionComponent = () => (
  <Gallery
    hasGutter
    minWidths={{
      md: '100px',
      lg: '150px',
      xl: '200px',
      '2xl': '300px'
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
