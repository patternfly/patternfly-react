---
title: 'Checkbox'
cssPrefix: 'pf-c-check'
typescript: true
propComponents: ['Checkbox']
---

import { Checkbox } from '@patternfly/react-core';
import './checkbox.scss';

## Controlled checkbox
```js
import React from 'react';
import { Checkbox } from '@patternfly/react-core';

class ControlledCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check1: false,
      check2: false,
      check3: false,
      check4: false
    };
    this.handleChange = (checked, event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({ [name]: value });
    };
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.check1 !== this.state.check1 && this.state.check1 !== null) {
      this.setState({
        check2: this.state.check1,
        check3: this.state.check1,
      })
    }

    if (prevState.check2 !== this.state.check2 || prevState.check3 !== this.state.check3) {
      this.setState({
        check1: (this.state.check2 && this.state.check3) || (this.state.check2 || this.state.check3 ? null : false)
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Checkbox
          label="Parent CheckBox"
          isChecked={this.state.check1}
          onChange={this.handleChange}
          aria-label="controlled checkbox example"
          id="check-1"
          name="check1"
        />
        <Checkbox
          className="nested"
          label="Child CheckBox 1"
          isChecked={this.state.check2}
          onChange={this.handleChange}
          aria-label="controlled checkbox example"
          id="check-2"
          name="check2"
        />
        <Checkbox
          className="nested"
          label="Child CheckBox 2"
          isChecked={this.state.check3}
          onChange={this.handleChange}
          aria-label="controlled checkbox example"
          id="check-3"
          name="check3"
        />
        <Checkbox
          label="Controlled CheckBox"
          isChecked={this.state.check4}
          onChange={this.handleChange}
          aria-label="controlled checkbox example"
          id="check-4"
          name="check4"
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
