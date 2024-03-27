import React from 'react';
import { MenuToggle } from '@patternfly/react-core';

export const MenuToggleStatus: React.FunctionComponent = () => (
  <React.Fragment>
    <MenuToggle status="success">Success</MenuToggle>
    <br />
    <br />
    <MenuToggle status="warning">Warning</MenuToggle>
    <br />
    <br />
    <MenuToggle status="danger">Danger</MenuToggle>
  </React.Fragment>
);
