---
title: 'Checkbox'
cssPrefix: 'pf-c-check'
---

import { Checkbox } from '@patternfly/react-core';

## Controlled checkbox
```js
import React from 'react';
import { Checkbox } from '@patternfly/react-core';

class ControlledCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check1: false,
      check2: false
    };
    this.handleChange = checked => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({ [name]: value });
    };
  }

  render() {
    return (
      <React.Fragment>
        <Checkbox
          label="Controlled CheckBox"
          isChecked={this.state.check1}
          onChange={this.handleChange}
          aria-label="controlled checkbox example"
          id="check-1"
        />
        <Checkbox
          label="Controlled CheckBox"
          isChecked={this.state.check2}
          onChange={this.handleChange}
          aria-label="controlled checkbox example"
          id="check-2"
        />
      </React.Fragment>
    );
  }
}
```

## Uncontrolled checkbox
```js
import React from 'react';
import { Checkbox } from '@patternfly/react-core';

UncontrolledCheckbox = () => (
  <React.Fragment>
    <Checkbox label="Uncontrolled CheckBox" aria-label="uncontrolled checkbox example" id="check-3" />
    <Checkbox label="Uncontrolled CheckBox" aria-label="uncontrolled checkbox example" id="check-4" />
  </React.Fragment>
);
```

## Disabled checkbox
```js
import React from 'react';
import { Checkbox } from '@patternfly/react-core';

DisabledCheckbox = () => (
  <React.Fragment>
    <Checkbox
      id="check-5"
      label="Disabled CheckBox"
      aria-label="disabled checked checkbox example"
      defaultChecked
      isDisabled
    />{' '}
    <Checkbox id="check-6" label="Disabled CheckBox" aria-label="disabled checkbox example" isDisabled />
  </React.Fragment>
);
```
