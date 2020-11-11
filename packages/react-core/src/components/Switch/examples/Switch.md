---
id: Switch
section: components
cssPrefix: pf-c-switch
propComponents: ['Switch']
ouia: true
---

import { FindRefWrapper } from '@patternfly/react-core/dist/js/helpers/Popper/FindRefWrapper';

## Examples
### Basic
```js
import React from 'react';
import { Switch } from '@patternfly/react-core';
import { FindRefWrapper } from '@patternfly/react-core/dist/js/helpers/Popper/FindRefWrapper';

class SimpleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isChecked: true,
      foundElement: null
    };
    this.handleChange = isChecked => {
      this.setState({ isChecked });
    };

    this.focusTextInput = () => {
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      debugger;
      const asd = this.state.foundElement;
      asd.focus();
      // this.myRef.current.focus();
    }

    this.setFoundElement = (ref) => {
      this.setState({
        foundElement: ref
      });
    }
  }

  render() {
    const { isChecked } = this.state;
    return (
      <React.Fragment>
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
        <FindRefWrapper onFoundRef={foundRef => this.setFoundElement(foundRef)}>
        <Switch
          ref={this.myRef}
          id="simple-switch"
          label="Message when on"
          labelOff="Message when off"
          isChecked={isChecked}
          onChange={this.handleChange}
        />
        </FindRefWrapper>
      </React.Fragment>
    );
  }
}
```

### Without label
```js
import React from 'react';
import { Switch } from '@patternfly/react-core';

class NoLabelSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true
    };
    this.handleChange = isChecked => {
      this.setState({ isChecked });
    };
  }

  render() {
    const { isChecked } = this.state;
    return (
      <Switch id="no-label-switch-on" aria-label="Message when on" isChecked={isChecked} onChange={this.handleChange} />
    );
  }
}
```

### Disabled
```js
import React from 'react';
import { Switch } from '@patternfly/react-core';

<React.Fragment>
  <Switch id="disabled-switch-on" aria-label="Message when on" label="Message when on" labelOff="Message when off" isChecked isDisabled />
  <br />
  <Switch
    id="disabled-switch-off"
    aria-label="Message when on"
    label="Message when on"
    labelOff="Message when off"
    isChecked={false}
    isDisabled
  />
  <br />
  <Switch id="disabled-no-label-switch-on" aria-label="Message when on" isChecked isDisabled />
  <br />
  <Switch id="disabled-no-label-switch-off" aria-label="Message when on" isChecked={false} isDisabled />
</React.Fragment>
```

### Uncontrolled
```js
import React from 'react';
import { Switch } from '@patternfly/react-core';

<React.Fragment>
  <Switch id="uncontrolled-switch-on" aria-label="Message when on" label="Message when on" labelOff="Message when off" isChecked />
  <br />
  <Switch id="uncontrolled-switch-off" aria-label="Message when on" label="Message when on" labelOff="Message when off" isChecked={false} />
  <br />
  <Switch id="uncontrolled-no-label-switch-on" aria-label="Message when on" isChecked />
  <br />
  <Switch id="uncontrolled-no-label-switch-off" aria-label="Message when on" isChecked={false} />
</React.Fragment>
```
