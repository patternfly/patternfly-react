import React from 'react';
import { Button } from '@patternfly/react-core';

export const ButtonSmall: React.FunctionComponent = () => (
  <React.Fragment>
    <Button variant="primary" size="sm">
      Primary
    </Button>{' '}
    <Button variant="secondary" size="sm">
      Secondary
    </Button>{' '}
    <Button variant="tertiary" size="sm">
      Tertiary
    </Button>{' '}
    <Button variant="danger" size="sm">
      Danger
    </Button>{' '}
    <Button variant="warning" size="sm">
      Warning
    </Button>
    <br />
    <br />
  </React.Fragment>
);
