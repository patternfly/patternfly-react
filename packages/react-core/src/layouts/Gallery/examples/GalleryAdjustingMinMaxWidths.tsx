import { Gallery, GalleryItem } from '@patternfly/react-core';

export const GalleryAdjustingMinMaxWidths: React.FunctionComponent = () => (
  <Gallery
    hasGutter
    minWidths={{
      default: '100%',
      md: '100px',
      xl: '300px'
    }}
    maxWidths={{
      md: '200px',
      xl: '1fr'
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
