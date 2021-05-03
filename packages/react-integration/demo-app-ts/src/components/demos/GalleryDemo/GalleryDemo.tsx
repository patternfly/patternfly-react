import React from 'react';
import { Gallery, GalleryItem } from '@patternfly/react-core';

export class GalleryDemo extends React.Component {
  static displayName = 'GalleryDemo';
  render() {
    return (
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
      </Gallery>
    );
  }
}
