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
          sm: '80px',
          md: '100px',
          lg: '150px',
          xl: '300px',
          '2xl': '500px'
        }}
        maxWidths={{
          default: '100%',
          sm: '80px',
          md: '120px',
          lg: '150px',
          xl: '1fr',
          '2xl': '500px'
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
