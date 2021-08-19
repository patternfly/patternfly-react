---
id: Text area
section: components
cssPrefix: pf-c-form-control
propComponents: ['TextArea']
---

## Examples
### Basic
```js
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

### Invalid
```js
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
        validated={'error'}
        aria-label="invalid text area example"
      />
    );
  }
}
```

### Validated
```js
import React from 'react';
import { Form, FormGroup, TextArea } from '@patternfly/react-core';

class InvalidTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      invalidText: 'You must have something to say',
      validated: 'default',
      helperText: 'Share your thoughts.'
    };
    
    this.simulateNetworkCall = callback => {
      setTimeout(callback, 2000);
    }
    
    this.handleTextAreaChange = value => {

      this.setState({
        value,
        validated: 'default',
        helperText: 'Validating...',
      },
        this.simulateNetworkCall(() => {
          if (value && value.length > 0) {
            if (value.length >= 10) {
              this.setState({validated: 'success', helperText: 'Thanks for your comments!'});
            } else {
              this.setState({validated: 'error', invalidText: 'Your being too brief, please enter at least 10 characters.'});
            }
          }
          else {
            this.setState({validated: 'warning', helperText: 'You must have something to say'});
          }
        })
      );
    };
  }

  render() {
    const { value, validated, helperText, invalidText } = this.state;

    return (
      <Form>
        <FormGroup
          label="Comments:"
          type="string"
          helperText={helperText}
          helperTextInvalid={invalidText}
          fieldId="selection"
          validated={validated}
        >
          <TextArea
            value={value}
            onChange={this.handleTextAreaChange}
            isRequired
            validated={validated}
            aria-label="invalid text area example"
          />
        </FormGroup>
      </Form>
    );
  }
}
```

### Vertically resizable text area
```js
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

### Horizontally resizable text area
```js
import React from 'react';
import { TextArea } from '@patternfly/react-core';

class HorizontalResizeTextArea extends React.Component {
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

### Uncontrolled
```js
import React from 'react';
import { TextArea } from '@patternfly/react-core';

<TextArea defaultValue="default value" aria-label="uncontrolled text area example" />
```

### Disabled
```js
import React from 'react';
import { TextArea } from '@patternfly/react-core';

<TextArea aria-label="disabled text area example" isDisabled />
```

### Auto resizing
```js
import React from 'react';
import { TextArea } from '@patternfly/react-core';

<TextArea aria-label="auto resizing text area example" autoResize />
```

