---
title: 'Table text input'
section: 'inline table'
propComponents: ['TableTextInput']
---

import { TableTextInput } from '@patternfly/react-inline-edit-extension';

## Simple table text input
```js
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
