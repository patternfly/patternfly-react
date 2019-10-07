---
title: 'Table text input'
section: 'inline table'
propComponents: ['TableTextInput']
---

Note: Inline Edit lives in its own package at [`@patternfly/react-inline-edit-extension`](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension)!
<br />
This package is currently an extension. Extension components do not undergo the same rigorous design or coding review process as core PatternFly components. If enough members of the community find them useful, we will work to move them into our core PatternFly system by starting the design process for the idea.
<br />
<br />

import { TableTextInput } from '@patternfly/react-inline-edit-extension';

```js title=Simple table text input
import React from 'react';
import { TableTextInput } from '@patternfly/react-inline-edit-extension';

class SimpleTableTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleTextInputChange = value => {
      this.setState({ value });
    };
  }

  render() {
    const { value } = this.state;

    return (
      <TableTextInput
        defaultValue={value}
        type="text"
        onBlur={this.handleTextInputChange}
        aria-label="text input example"
      />
    );
  }
}
```
