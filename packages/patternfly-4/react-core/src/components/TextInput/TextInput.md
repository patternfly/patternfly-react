---
title: 'Text Input'
cssPrefix: 'pf-c-form-control'
---

## Simple Text Input

import { TextInput } from '@patternfly/react-core';

```js
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

## Text Input (Disabled)

```js
<TextInput type="text" value="disabled text input example" aria-label="disabled text input example" isDisabled />
```

## Text Input (Read-Only)

```js
<TextInput value="read only text input example" type="text" isReadOnly aria-label="readonly input example" />
```

## Text Input (Invalid)

```js
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
