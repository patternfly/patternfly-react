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

<TextInput
  value="disabled text input example"
  type="text"
  onChange={this.handleTextInputChange}
  aria-label="disabled text input example"
  isDisabled
/>;
```

### Truncated on Left

```js
import React from 'react';
import { TextInput } from '@patternfly/react-core';

class LeftTruncatedTextInput extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };
    this.handleTextInputChange = value => {
      this.setState({ value });
    };
  }

  render() {
    const { value } = this.state;
    return (
      <TextInput isLeftTruncated value={value} type="text" onChange={this.handleTextInputChange} aria-label="left-truncated text input example"  />
    );
  }
}
```

### Read only

```js
import React from 'react';
import { TextInput } from '@patternfly/react-core';

<TextInput value="read only text input example" type="text" isReadOnly aria-label="readonly input example" />;
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
import { TextInput } from '@patternfly/react-core';

TextInputSelectAll = () => {
  const [value, setValue] = React.useState('select all on click');
  const ref = React.useRef(null);
  return (
    <TextInput
      ref={ref}
      value={value}
      onFocus={() => ref && ref.current && ref.current.select()}
      onChange={value => setValue(value)}
      aria-label="select-all"
    />
  );
};
```

### Icon variants
```js
import React from 'react';
import { TextInput } from '@patternfly/react-core';

class SimpleTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: '',
      clock: '',
      custom: ''
    };
    this.handleTextInputChange = (value, field) => {
      this.setState({ [field]: value });
    };
  }

  render() {
    const { calendar, clock, custom } = this.state;

    return (
      <>
        <TextInput value={calendar} type="text" iconVariant='calendar' onChange={(value) => this.handleTextInputChange(value, "calendar")} aria-label="text input example" />
        <br />
        <br />
        <TextInput value={clock} type="text" iconVariant='clock' onChange={(value) => this.handleTextInputChange(value, "clock")} aria-label="text input example" />
        <br />
        <br />
        <TextInput value={custom} type="text" customIconDimensions='24px 24px' customIconUrl='data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"%3E%3Cpath fill="%23a18fff" d="M158.87.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.49 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9C490.89 165.08 340.78 17.32 158.87.15zm-58.47 112L.55 491.64a16.21 16.21 0 0 0 20 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48-152a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm104 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"/%3E%3C/svg%3E' onChange={(value) => this.handleTextInputChange(value, "custom")} aria-label="text input example" />
      </>
    );
  }
}
```
