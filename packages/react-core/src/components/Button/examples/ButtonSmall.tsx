import React from 'react';
import { Button, Flex } from '@patternfly/react-core';

export const ButtonSmall: React.FunctionComponent = () => (
  <Flex columnGap={{ default: 'columnGapSm' }}>
    <Button variant="primary" size="sm">
      Primary
    </Button>
    <Button variant="secondary" size="sm">
      Secondary
    </Button>
    <Button variant="tertiary" size="sm">
      Tertiary
    </Button>
    <Button variant="danger" size="sm">
      Danger
    </Button>
    <Button variant="warning" size="sm">
      Warning
    </Button>
  </Flex>
);
