import { FunctionComponent, Fragment } from 'react';
import { Switch } from '@patternfly/react-core';

export const SwitchUncontrolled: FunctionComponent = () => (
  <Fragment>
    <Switch
      id="uncontrolled-switch-no-label"
      aria-label="An uncontrolled switch with no label"
      defaultChecked={false}
    />
    <br />
    <Switch id="uncontrolled-switch-with-label" label="An uncontrolled switch" defaultChecked={false} />
  </Fragment>
);
