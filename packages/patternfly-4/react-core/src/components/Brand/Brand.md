---
title: 'Brand'
cssPrefix: null
---

## Simple brand

import { Brand } from '@patternfly/react-core';
import pfLogo from './examples/pfLogo.svg';

```js
import React from 'react';
import { Brand } from '@patternfly/react-core';
import pfLogo from './examples/pfLogo.svg';

class SimpleBrand extends React.Component {
  render() {
    return <Brand src={pfLogo} alt="Patternfly Logo" />;
  }
}
```
