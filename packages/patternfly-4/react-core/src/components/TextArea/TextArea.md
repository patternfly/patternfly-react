---
title: 'Text area'
section: components
cssPrefix: 'pf-c-form-control'
propComponents: ['TextArea']
typescript: true
---

import { TextArea } from '@patternfly/react-core';

```js title=Simple-text-area
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

```js title=Invalid-text-area
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

```js title=Uncontrolled-text-area
import React from 'react';
import { TextArea } from '@patternfly/react-core';

UncontrolledTextArea = () => (
  <TextArea defaultValue="default value" aria-label="uncontrolled text area example" />
)
```
