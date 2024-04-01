import React from 'react';
import { MenuToggle, HelperText, HelperTextItem } from '@patternfly/react-core';

export const MenuToggleStatus: React.FunctionComponent = () => (
  <React.Fragment>
    <MenuToggle status="success">Success</MenuToggle>
    <br />
    <br />
    <MenuToggle status="warning">Warning</MenuToggle>
    <HelperText>
      <HelperTextItem variant="warning">Warning text that explains the issue.</HelperTextItem>
    </HelperText>
    <br />
    <br />
    <MenuToggle status="danger">Danger</MenuToggle>
    <HelperText>
      <HelperTextItem variant="error">Danger text that explains the issue.</HelperTextItem>
    </HelperText>
  </React.Fragment>
);
