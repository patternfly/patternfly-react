/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Gallery, GalleryItem } from '@patternfly/react-core';

class SimpleGallery extends React.Component {
  render() {
    return (
      <Gallery>
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
  }
}

export default SimpleGallery;
