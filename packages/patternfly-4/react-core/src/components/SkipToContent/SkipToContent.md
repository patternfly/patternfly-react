---
title: 'Skip To Content'
section: 'components'
cssPrefix: 'pf-c-skip-to-content'
---

## Simple SkipToContent

import { SkipToContent } from '@patternfly/react-core';

```js
import React from 'react';
import { SkipToContent } from '@patternfly/react-core';

class SimpleSkipToContent extends React.Component {
  render() {
    return <SkipToContent href="#main-content">Skip to Content</SkipToContent>;
  }
}
```


## Simple SkipToContent Force Show
```js
import React from 'react';
import { SkipToContent } from '@patternfly/react-core';

class SkipToContentForceShow extends React.Component {
  render() {
    return (
      <SkipToContent href="#main-content" show>
        Skip to Content
      </SkipToContent>
    );
  }
}
```
