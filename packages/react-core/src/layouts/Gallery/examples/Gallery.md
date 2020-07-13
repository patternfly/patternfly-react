---
id: Gallery
cssPrefix: pf-l-gallery
section: layouts
propComponents: ['Gallery', 'GalleryItem']
---

import './gallery.css';

## Examples
### Basic
```js
import { Gallery, GalleryItem } from '@patternfly/react-core';

GalleryBasicExample = () => (
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
```

### With gutters
```js
import { Gallery, GalleryItem } from '@patternfly/react-core';

GalleryWithGuttersExample = () => (
  <Gallery hasGutter>
    <GalleryItem>Gallery Item</GalleryItem>
    <GalleryItem>Gallery Item</GalleryItem>
    <GalleryItem>Gallery Item</GalleryItem>
    <GalleryItem>Gallery Item</GalleryItem>
    <GalleryItem>Gallery Item</GalleryItem>
    <GalleryItem>Gallery Item</GalleryItem>
  </Gallery>
);
```
