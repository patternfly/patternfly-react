---
title: 'Switch'
cssPrefix: 'pf-c-switch'
---

## Simple Switch

import { Switch } from '@patternfly/react-core';

```js
class SimpleSwitch extends React.Component {
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
      <Switch
        id="simple-switch"
        label={isChecked ? 'Message when on' : 'Message when off'}
        isChecked={isChecked}
        onChange={this.handleChange}
        aria-label="Message when on"
      />
    );
  }
}
```

## Switch (No Labels)

```js
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

## Switch (Disabled)

```js
DisabledSwitch = () => (
  <React.Fragment>
    <Switch id="disabled-switch-on" aria-label="Message when on" label="Message when on" isChecked isDisabled />
    <br />
    <Switch
      id="disabled-switch-off"
      aria-label="Message when on"
      label="Message when off"
      isChecked={false}
      isDisabled
    />
    <br />
    <Switch id="disabled-no-label-switch-on" aria-label="Message when on" isChecked isDisabled />
    <br />
    <Switch id="disabled-no-label-switch-off" aria-label="Message when on" isChecked={false} isDisabled />
  </React.Fragment>
);
```

## Switch (Uncontrolled)

```js
UncontrolledSwitch = () => (
  <React.Fragment>
    <Switch id="uncontrolled-switch-on" aria-label="Message when on" label="Message when on" isChecked />
    <br />
    <Switch id="uncontrolled-switch-off" aria-label="Message when on" label="Message when off" isChecked={false} />
    <br />
    <Switch id="uncontrolled-no-label-switch-on" aria-label="Message when on" isChecked />
    <br />
    <Switch id="uncontrolled-no-label-switch-off" aria-label="Message when on" isChecked={false} />
  </React.Fragment>
);
```
