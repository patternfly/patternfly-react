---
title: 'Radio'
section: components
cssPrefix: 'pf-c-radio'
typescript: true
propComponents: ['Radio']
---
import { Radio, Tooltip } from '@patternfly/react-core';

## Examples
```js title=Controlled
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

```js title=Uncontrolled
import React from 'react';
import { Radio } from '@patternfly/react-core';

UncontrolledRadio = () => (
  <React.Fragment>
    <Radio label="Uncontrolled radio example" id="radio-uncontrolled" name="radio-2" />
  </React.Fragment>
);
```

```js title=Reversed
import React from 'react';
import { Radio } from '@patternfly/react-core';

ReversedRadio = () => (
  <React.Fragment>
    <Radio isLabelBeforeButton label="Reversed radio example" id="radio-reversed" name="radio-3" />
  </React.Fragment>
);
```

```js title=Label-wraps
import React from 'react';
import { Radio } from '@patternfly/react-core';

LabelWrapsInputRadio = () => (
  <React.Fragment>
    <Radio isLabelWrapped label="Label wraps input example" id="radio-label-wraps-input" name="radio-4" />
  </React.Fragment>
);
```

```js title=With-description
import React from 'react';
import { Radio } from '@patternfly/react-core';

WithDescriptionRadio = () => (
  <Radio id="radio-with-description" label="Radio with description example" description="Description" name="radio-5" />
);
```

```js title=Disabled
import React from 'react';
import { Radio } from '@patternfly/react-core';

DisabledRadio = () => (
  <React.Fragment>
    <Radio id="radio-disabled" label="Disabled radio example" isDisabled name="radio-5" />
    <Radio id="radio-disabled-checked" defaultChecked label="Disabled and checked radio example" isDisabled name="radio-6" />
  </React.Fragment>
);
```

```js title=Inoperable-with-wrapping-tooltip
import React from 'react';
import { Radio, Tooltip } from '@patternfly/react-core';

InoperableRadioWithTooltip = () => (
  <Tooltip content={<div>Radio <strong>component</strong> tooltip content</div>}>
    <Radio isInoperable id="radio-inoperable-tooltip-label-wrapped" label="Option 1" description="This Radio is inoperable that's nested within a containing Tooltip component" name="radio-7" />
  </Tooltip>
);
```

```js title=Inoperable-with-nested-tooltip
import React from 'react';
import { Radio, Tooltip } from '@patternfly/react-core';

InoperableRadioWithInputTooltip = () => (
    <Radio tooltip={{component: Tooltip, props: {children: null, content: <div>Radio <strong>input</strong> tooltip content</div>, position: 'left'}}} isInoperable id="radio-inoperable-input-tooltip" label="Option 1" description="This Radio is inoperable with a nested tooltip" name="radio-8" />
);
```
