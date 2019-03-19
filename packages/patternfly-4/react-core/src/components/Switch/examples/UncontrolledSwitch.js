import React from 'react';
import { Switch } from '@patternfly/react-core';

class UncontrolledSwitch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch id="uncontrolled-switch-on" aria-label="Message when on" label="Message when on" isChecked />
        <br />
        <Switch id="uncontrolled-switch-off" aria-label="Message when on" label="Message when off" isChecked={false} />
        <br />
        <Switch
          id="uncontrolled-no-label-switch-on"
          aria-label="Message when on"
          isChecked
        />
        <br />
        <Switch
          id="uncontrolled-no-label-switch-off"
          aria-label="Message when on"
          isChecked={false}
        />
      </React.Fragment>
    );
  }
}

export default UncontrolledSwitch;
