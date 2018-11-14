import { Gallery, GalleryItem } from '@patternfly/react-core';
import SimpleGallery from './examples/SimpleGallery';
import GalleryWithGutters from './examples/GalleryWithGutters';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Gallery',
  description:
    'A Gallery layout makes all of the children a uniform size, the children are displayed horizontally, and they wrap as needed.',
  components: {
    Gallery,
    GalleryItem
  },
  examples: [
    { component: SimpleGallery, title: 'Simple Gallery Layout', getContainerProps },
    { component: GalleryWithGutters, title: 'Gallery With Gutters', getContainerProps }
  ]
};
