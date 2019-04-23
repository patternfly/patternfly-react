---
title: 'Radio'
cssPrefix: 'pf-c-radio'
---

import { Radio } from '@patternfly/react-core';

## Controlled radio
```js
import React from 'react';
import { Radio } from '@patternfly/react-core';

class ControlledRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '4'
    };

    this.handleChange = (_, event) => {
      const { value } = event.currentTarget;
      this.setState({ value });
    };
  }

  render() {
    return (
      <React.Fragment>
        <Radio
          value="3"
          isChecked={this.state.value === '3'}
          name="pf-version"
          onChange={this.handleChange}
          label="Controlled radio 1"
          id="radio-1"
        />{' '}
        <Radio
          value="4"
          isChecked={this.state.value === '4'}
          name="pf-version"
          onChange={this.handleChange}
          label="Controlled radio 2"
          id="radio-2"
        />
      </React.Fragment>
    );
  }
}
```

## Uncontrolled radio
```js
import React from 'react';
import { Radio } from '@patternfly/react-core';

UncontrolledRadio = () => (
  <React.Fragment>
    <Radio label="Uncontrolled radio example" id="radio-4" name="radio-4" />
    <Radio label="Uncontrolled radio example" id="radio-5" name="radio-4" />
  </React.Fragment>
);
```

## Disabled radio
```js
import React from 'react';
import { Radio } from '@patternfly/react-core';

DisabledRadio = () => (
  <React.Fragment>
    <Radio label="Disabled checked radio example" defaultChecked isDisabled name="group-1" id="radio-disabled" />{' '}
    <Radio id="radio-disabled-2" label="Disabled radio example" isDisabled name="group-2" />
  </React.Fragment>
);
```
