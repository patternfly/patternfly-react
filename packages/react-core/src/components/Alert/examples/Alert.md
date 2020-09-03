---
id: Alert
section: components
cssPrefix: pf-c-alert
propComponents: ['Alert', 'AlertActionCloseButton', 'AlertActionLink']
ouia: true
---

import './alert.css';

## Examples

### Types
```js
import React from 'react';
import { Alert } from '@patternfly/react-core';

class AlertTypes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Alert variant="warning" title="Warning alert title" />
        <Alert variant="danger" title="Danger alert title" />
      </React.Fragment>
    );
  }
}
```
