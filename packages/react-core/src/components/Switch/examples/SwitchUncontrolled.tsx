import { Fragment } from 'react';
import { Switch } from '@patternfly/react-core';

export const SwitchUncontrolled: React.FunctionComponent = () => (
  <Fragment>
    <Switch
      id="uncontrolled-switch-no-label"
      aria-label="Togglable option for uncontrolled and no visible label example"
      defaultChecked={false}
    />
    <br />
    <Switch
      id="uncontrolled-switch-with-label"
      label="Togglable option for uncontrolled example"
      defaultChecked={false}
    />
  </Fragment>
);
