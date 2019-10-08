---
title: 'Radio'
section: components
cssPrefix: 'pf-c-radio'
typescript: true
propComponents: ['Radio']
---

import { Radio } from '@patternfly/react-core';

## Controlled radio

## Examples
```js
import React from 'react';
import { Radio } from '@patternfly/react-core';

class ControlledRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check1: false,
    };

    this.handleChange = (_, event) => {
      const { value } = event.currentTarget;
      this.setState({ [value]: true });
    };
  }

  render() {
    return (
      <React.Fragment>
        <Radio
          isChecked={this.state.check1}
          name="radio-1"
          onChange={this.handleChange}
          label="Controlled radio"
          id="radio-controlled"
          value="check1"
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
    <Radio label="Uncontrolled radio example" id="radio-uncontrolled" name="radio-2" />
  </React.Fragment>
);
```

## Reversed radio

```js
import React from 'react';
import { Radio } from '@patternfly/react-core';

ReversedRadio = () => (
  <React.Fragment>
    <Radio isLabelBeforeButton label="Reversed radio example" id="radio-reversed" name="radio-3" />
  </React.Fragment>
);
```

## Label wraps input radio

```js
import React from 'react';
import { Radio } from '@patternfly/react-core';

LabelWrapsInputRadio = () => (
  <React.Fragment>
    <Radio isLabelWrapped label="Label wraps input example" id="radio-label-wraps-input" name="radio-4" />
  </React.Fragment>
);
```

## Disabled radio

```js
import React from 'react';
import { Radio } from '@patternfly/react-core';

DisabledRadio = () => (
  <React.Fragment>
    <Radio id="radio-disabled" label="Disabled radio example" isDisabled name="radio-5" />
    <Radio id="radio-disabled-checked" defaultChecked label="Disabled and checked radio example" isDisabled name="radio-6" />
  </React.Fragment>
);
```
