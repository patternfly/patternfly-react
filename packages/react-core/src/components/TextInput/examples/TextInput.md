---
id: Text input
section: components
cssPrefix: pf-c-form-control
propComponents: ['TextInput']
---

## Examples
### Basic
```js
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

### Disabled
```js
import React from 'react';
import { TextInput } from '@patternfly/react-core';

<TextInput type="text" value="disabled text input example" aria-label="disabled text input example" isDisabled />
```

### Read only
```js
import React from 'react';
import { TextInput } from '@patternfly/react-core';

<TextInput value="read only text input example" type="text" isReadOnly aria-label="readonly input example" />
```

### Invalid
```js
import React from 'react';
import { TextInput, ValidatedOptions } from '@patternfly/react-core';

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
        validated={ValidatedOptions.error}
        type="text"
        aria-label="invalid text input example"
      />
    );
  }
}
```

### Select text using ref
```js
import React from 'react';
import { TextInput, Button } from '@patternfly/react-core';

TextInputSelectAll = () => {
  const [value, setValue] = React.useState('select all on click');
  const ref = React.useRef(null);
  return (
    <React.Fragment>
      <TextInput ref={ref} value={value} onFocus={() => ref && ref.current && ref.current.select()} onChange={value => setValue(value)} aria-label="select-all" />
    </React.Fragment>
  )
}
```
