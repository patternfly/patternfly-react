---
id: Radio
section: components
cssPrefix: pf-c-radio
propComponents: ['Radio']
ouia: true
---

## Examples
### Controlled
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

### Uncontrolled
```js
import React from 'react';
import { Radio } from '@patternfly/react-core';

<Radio label="Uncontrolled radio example" id="radio-uncontrolled" name="radio-2" />
```

### Reversed
```js
import React from 'react';
import { Radio } from '@patternfly/react-core';

<Radio isLabelBeforeButton label="Reversed radio example" id="radio-reversed" name="radio-3" />
```

### Label wraps
```js
import React from 'react';
import { Radio } from '@patternfly/react-core';

<Radio isLabelWrapped label="Label wraps input example" id="radio-label-wraps-input" name="radio-4" />
```

### Disabled
```js
import React from 'react';
import { Radio } from '@patternfly/react-core';

<React.Fragment>
  <Radio id="radio-disabled" label="Disabled radio example" isDisabled name="radio-5" />
  <Radio id="radio-disabled-checked" defaultChecked label="Disabled and checked radio example" isDisabled name="radio-6" />
</React.Fragment>
```

### With description
```js
import React from 'react';
import { Radio } from '@patternfly/react-core';

<Radio id="radio-with-description" label="Radio with description example" description="Description" />
```
