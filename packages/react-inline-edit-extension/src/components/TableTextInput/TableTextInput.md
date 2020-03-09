---
title: 'Inline table text input'
section: 'extensions'
propComponents: ['TableTextInput']
---

import { TableTextInput } from '@patternfly/react-inline-edit-extension';

## Introduction
Note: Inline Edit lives in its own package at [`@patternfly/react-inline-edit-extension`](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension)!

This package is currently an extension. Extension components do not undergo the same rigorous design or coding review process as core PatternFly components. If enough members of the community find them useful, we will work to move them into our core PatternFly system by starting the design process for the idea.

## Examples
```js title=Basic
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
