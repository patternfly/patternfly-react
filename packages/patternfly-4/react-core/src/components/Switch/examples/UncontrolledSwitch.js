import React from 'react';
import { Switch } from '@patternfly/react-core';

class UncontrolledSwitch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch
          id="uncontrolled-switch-on"
          aria-label="uncontrolled checked switch example"
          label="On"
          isChecked
        />
        <br />
        <Switch
          id="uncontrolled-switch-off"
          aria-label="uncontrolled switch example"
          label="Off"
          isChecked={false}
        />
        <br />
        <Switch
          id="uncontrolled-no-label-switch-on"
          aria-label="uncontrolled no label checked switch example"
          isChecked
        />
        <br />
        <Switch
          id="uncontrolled-no-label-switch-off"
          aria-label="uncontrolled no label switch example"
          isChecked={false}
        />
      </React.Fragment>
    );
  }
}

export default UncontrolledSwitch;
