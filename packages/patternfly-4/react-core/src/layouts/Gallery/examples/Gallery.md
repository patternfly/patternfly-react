---
title: 'Gallery'
cssPrefix: 'pf-l-gallery'
section: 'layouts'
propComponents: ['Gallery', 'GalleryItem']
typescript: true
---

import { Gallery, GalleryItem } from '@patternfly/react-core';
import './gallery.scss';

## Simple gallery layout
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

## Gallery with gutters
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
