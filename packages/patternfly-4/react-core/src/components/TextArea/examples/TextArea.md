---
title: 'Text area'
section: components
cssPrefix: 'pf-c-form-control'
propComponents: ['TextArea']
typescript: true
---

import { TextArea } from '@patternfly/react-core';

## Examples
```js title=Basic
import React from 'react';
import { TextArea } from '@patternfly/react-core';

class SimpleTextArea extends React.Component {
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

    return <TextArea value={value} onChange={this.handleTextAreaChange} aria-label="text area example" />;
  }
}
```

```js title=Invalid
import React from 'react';
import { TextArea } from '@patternfly/react-core';

class InvalidTextArea extends React.Component {
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
```js title=Vertically-resizable-text-area
import React from 'react';
import { TextArea } from '@patternfly/react-core';

class VerticalResizeTextArea extends React.Component {
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

    return <TextArea value={value} onChange={this.handleTextAreaChange} resizeOrientation='vertical' aria-label="text vertical resize example" />;
  }
}
```

```js title=Horizontally-resizable-text-area
import React from 'react';
import { TextArea } from '@patternfly/react-core';

class horizontalResizeTextArea extends React.Component {
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

    return <TextArea value={value} onChange={this.handleTextAreaChange} resizeOrientation='horizontal' aria-label="text horizontal resize example" />;
  }
}
```

```js title=Uncontrolled
import React from 'react';
import { TextArea } from '@patternfly/react-core';

UncontrolledTextArea = () => (
  <TextArea defaultValue="default value" aria-label="uncontrolled text area example" />
)
```
