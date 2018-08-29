import { Gallery, GalleryItem } from '@patternfly/react-core';
import Simple from './examples/SimpleGallery';
import Gutters from './examples/GalleryWithGutters';

export default {
  title: 'Gallery',
  description:
    'A Gallery layout makes all of the children a uniform size, the children are displayed horizontally, and they wrap as needed.',
  components: {
    Gallery,
    GalleryItem
  },
  examples: [Simple, Gutters]
};
