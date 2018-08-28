/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Gallery, GalleryItem } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class SimpleGallery extends React.Component {
  static title = 'Simple Gallery Layout';
  static getContainerProps = getContainerProps;

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
