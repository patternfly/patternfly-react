# React-docs

This project uses [theme-patternfly-org](https://github.com/patternfly/patternfly-org/tree/master/packages/theme-patternfly-org) to render example MD files.

## Writing an MD file

Include an `id` and `section` in the frontmatter:
```yaml
---
id: Your page title
section: components
---
```

Include JS code blocks:
``````md
### Your example title
```js
import React from 'react';
import { YourComponent } from '@patternfly/react-core';

BasicExample = () => (
  <YourComponent />
)
```
``````
