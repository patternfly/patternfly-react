import React from 'react';
import { Gallery, GalleryItem } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class WithGutters extends React.Component {
  static title = 'Gallery With Gutters';
  static getContainerProps = getContainerProps;

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

export default WithGutters;
