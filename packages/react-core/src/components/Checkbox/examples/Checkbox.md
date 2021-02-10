---
id: Checkbox
section: components
cssPrefix: pf-c-check
propComponents: ['Checkbox']
---

import './checkbox.css';

## Examples
### Controlled
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

### Uncontrolled
```js
import React from 'react';
import { Checkbox } from '@patternfly/react-core';

<React.Fragment>
  <Checkbox label="Uncontrolled CheckBox" aria-label="uncontrolled checkbox example" id="check-5" />
  <Checkbox label="Uncontrolled CheckBox" aria-label="uncontrolled checkbox example" id="check-6" />
</React.Fragment>
```

### Disabled
```js
import React from 'react';
import { Checkbox } from '@patternfly/react-core';

<React.Fragment>
  <Checkbox
    id="check-7"
    label="Disabled CheckBox"
    aria-label="disabled checked checkbox example"
    defaultChecked
    isDisabled
  />{' '}
  <Checkbox id="check-8" label="Disabled CheckBox" aria-label="disabled checkbox example" isDisabled />
</React.Fragment>
```

### Checkbox with description
```js
import React from 'react';
import { Checkbox } from '@patternfly/react-core';

<Checkbox id="check-8" label="CheckBox with description" aria-label="Checkbox with description example" description="Description"/>
```
