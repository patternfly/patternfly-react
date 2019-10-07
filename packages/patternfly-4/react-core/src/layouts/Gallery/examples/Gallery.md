---
title: 'Gallery'
cssPrefix: 'pf-l-gallery'
section: 'layouts'
propComponents: ['Gallery', 'GalleryItem']
typescript: true
---

import { Gallery, GalleryItem } from '@patternfly/react-core';
import './gallery.scss';

```js title=Simple gallery layout
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

```js title=Gallery with gutters
import React from 'react';
import { Gallery, GalleryItem } from '@patternfly/react-core';

<Gallery gutter="md">
  <GalleryItem>Gallery Item</GalleryItem>
  <GalleryItem>Gallery Item</GalleryItem>
  <GalleryItem>Gallery Item</GalleryItem>
  <GalleryItem>Gallery Item</GalleryItem>
  <GalleryItem>Gallery Item</GalleryItem>
  <GalleryItem>Gallery Item</GalleryItem>
</Gallery>
```
