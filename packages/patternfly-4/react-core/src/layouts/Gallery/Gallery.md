---
title: 'Gallery'
cssPrefix: 'pf-l-gallery'
section: 'layouts'
---

import { Gallery, GalleryItem } from '@patternfly/react-core';

## Simple Gallery Layout
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

## Gallery With Gutters
```js
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
