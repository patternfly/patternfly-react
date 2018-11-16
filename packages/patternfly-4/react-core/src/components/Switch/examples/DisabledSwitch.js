import React from 'react';
import { Switch } from '@patternfly/react-core';

class DisabledSwitch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch
          id="disabled-switch-on"
          aria-label="disabled checked switch example"
          label="On"
          isChecked
          isDisabled
        />
        <br />
        <Switch
          id="disabled-switch-off"
          aria-label="disabled switch example"
          label="Off"
          isChecked={false}
          isDisabled
        />
        <br />
        <Switch
          id="disabled-no-label-switch-on"
          aria-label="disabled no label checked switch example"
          isChecked
          isDisabled
        />
        <br />
        <Switch
          id="disabled-no-label-switch-off"
          aria-label="disabled no label switch example"
          isChecked={false}
          isDisabled
        />
      </React.Fragment>
    );
  }
}

export default DisabledSwitch;
