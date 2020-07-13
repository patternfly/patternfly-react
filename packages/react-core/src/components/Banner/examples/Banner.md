---
id: Banner
section: components
cssPrefix: pf-c-banner
propComponents: ['Banner']
beta: true
---

## Examples

### Basic
```js
import { Banner } from '@patternfly/react-core';

BannerVariants = () => (
  <React.Fragment>
    <Banner>Default banner</Banner>
    <br />
    <Banner variant="info">Info banner</Banner>
    <br />
    <Banner variant="danger">Danger banner</Banner>
    <br />
    <Banner variant="success">Success banner</Banner>
    <br />
    <Banner variant="warning">Warning banner</Banner>
  </React.Fragment>
);
```
