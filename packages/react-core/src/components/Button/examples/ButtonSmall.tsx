import React from 'react';
import { Button, Flex } from '@patternfly/react-core';

export const ButtonSmall: React.FunctionComponent = () => (
  <Flex>
    <Button variant="primary" isSmall>
      Primary
    </Button>
    <Button variant="secondary" isSmall>
      Secondary
    </Button>
    <Button variant="tertiary" isSmall>
      Tertiary
    </Button>
    <Button variant="danger" isSmall>
      Danger
    </Button>
    <Button variant="warning" isSmall>
      Warning
    </Button>
  </Flex>
);
