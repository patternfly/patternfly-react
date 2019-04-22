---
title: 'Text area'
cssPrefix: 'pf-c-form-control'
---

import { TextArea } from '@patternfly/react-core';

## Simple text area
```js
import React from 'react';
import { TextArea } from '@patternfly/react-core';

class SimpleTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleInvalidTextAreaChange = value => {
      this.setState({ value });
    };
  }

  render() {
    const { value } = this.state;

    return <TextArea value={value} onChange={this.handleTextAreaChange} aria-label="text area example" />;
  }
}
```

## Invalid text area
```js
import React from 'react';
import { TextArea } from '@patternfly/react-core';

class InvalidTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleTextAreaChange = value => {
      this.setState({ value });
    };
  }

  render() {
    const { value } = this.state;

    return (
      <TextArea
        value={value}
        onChange={this.handleInvalidTextAreaChange}
        isRequired
        isValid={false}
        aria-label="invalid text area example"
      />
    );
  }
}
```
