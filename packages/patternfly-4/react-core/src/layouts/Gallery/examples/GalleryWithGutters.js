import React from 'react';
import { Gallery, GalleryItem } from '@patternfly/react-core';

class GalleryWithGutters extends React.Component {
  render() {
    return (
      <Gallery gutter="md">
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

export default GalleryWithGutters;
