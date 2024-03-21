import { FunctionComponent, Fragment } from 'react';
import { Checkbox } from '@patternfly/react-core';

export const CheckboxUncontrolled: FunctionComponent = () => (
  <Fragment>
    <Checkbox label="Uncontrolled CheckBox 1" id="uncontrolled-check-1" />
    <Checkbox label="Uncontrolled CheckBox 2" id="uncontrolled-check-2" />
  </Fragment>
);
