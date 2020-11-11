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
import React from 'react';
import { Gallery, GalleryItem } from '@patternfly/react-core';

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
```

### With gutters
```js
import React from 'react';
import { Gallery, GalleryItem } from '@patternfly/react-core';

<Gallery hasGutter>
  <GalleryItem>Gallery Item</GalleryItem>
  <GalleryItem>Gallery Item</GalleryItem>
  <GalleryItem>Gallery Item</GalleryItem>
  <GalleryItem>Gallery Item</GalleryItem>
  <GalleryItem>Gallery Item</GalleryItem>
  <GalleryItem>Gallery Item</GalleryItem>
</Gallery>
```
