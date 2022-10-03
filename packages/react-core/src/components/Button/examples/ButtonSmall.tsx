import React from 'react';
import { Button } from '@patternfly/react-core';

export const ButtonSmall: React.FunctionComponent = () => (
  <React.Fragment>
    <Button variant="primary" customSize="small">
      Primary
    </Button>{' '}
    <Button variant="secondary" customSize="small">
      Secondary
    </Button>{' '}
    <Button variant="tertiary" customSize="small">
      Tertiary
    </Button>{' '}
    <Button variant="danger" customSize="small">
      Danger
    </Button>{' '}
    <Button variant="warning" customSize="small">
      Warning
    </Button>
    <br />
    <br />
  </React.Fragment>
);
