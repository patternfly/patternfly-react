---
id: Split
cssPrefix: pf-l-split
section: layouts
propComponents: ['Split', 'SplitItem']
---

import './split.css';

## Examples
### Basic
```js
import { Split, SplitItem } from '@patternfly/react-core';

SplitBasicExample = () => (
  <Split>
    <SplitItem>content</SplitItem>
    <SplitItem isFilled>pf-m-fill</SplitItem>
    <SplitItem>content</SplitItem>
  </Split>
);
```

### With gutter
```js
import { Split, SplitItem } from '@patternfly/react-core';

SplitWithGutterExample = () => (
  <Split hasGutter>
    <SplitItem>content</SplitItem>
    <SplitItem isFilled>pf-m-fill</SplitItem>
    <SplitItem>content</SplitItem>
  </Split>
);
```
