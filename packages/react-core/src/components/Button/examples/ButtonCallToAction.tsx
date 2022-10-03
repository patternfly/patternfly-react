import React from 'react';
import { Button } from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';

export const ButtonCallToAction: React.FunctionComponent = () => (
  <React.Fragment>
    <Button variant="primary" customSize="large">
      Call to action
    </Button>{' '}
    <Button variant="secondary" customSize="large">
      Call to action
    </Button>{' '}
    <Button variant="tertiary" customSize="large">
      Call to action
    </Button>{' '}
    <Button variant="link" customSize="large">
      Call to action <ArrowRightIcon />
    </Button>
    <br />
    <br />
  </React.Fragment>
);
