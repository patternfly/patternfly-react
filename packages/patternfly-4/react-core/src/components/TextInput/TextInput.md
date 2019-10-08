---
title: 'Text input'
section: components
cssPrefix: 'pf-c-form-control'
propComponents: ['TextInput']
typescript: true
---

import { TextInput } from '@patternfly/react-core';

```js title=Simple-text-input
import React from 'react';
import { TextInput } from '@patternfly/react-core';

class SimpleTextInput extends React.Component {
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
      <TextInput value={value} type="text" onChange={this.handleTextInputChange} aria-label="text input example" />
    );
  }
}
```

```js title=Text-input-(disabled)
import React from 'react';
import { TextInput } from '@patternfly/react-core';

<TextInput type="text" value="disabled text input example" aria-label="disabled text input example" isDisabled />
```

```js title=Text-input-(read-only)
import React from 'react';
import { TextInput } from '@patternfly/react-core';

<TextInput value="read only text input example" type="text" isReadOnly aria-label="readonly input example" />
```

```js title=Text-input-(invalid)
import React from 'react';
import { TextInput } from '@patternfly/react-core';

class InvalidTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleInvalidTextInputChange = value => {
      this.setState({ value });
    };
  }

  render() {
    const { value } = this.state;

    return (
      <TextInput
        value={value}
        onChange={this.handleInvalidTextInputChange}
        isRequired
        isValid={false}
        type="text"
        aria-label="invalid text input example"
      />
    );
  }
}
```
