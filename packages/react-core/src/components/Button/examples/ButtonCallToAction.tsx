import React from 'react';
import { Button, Flex } from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';

export const ButtonCallToAction: React.FunctionComponent = () => (
  <Flex columnGap={{ default: 'columnGapSm' }}>
    <Button variant="primary" size="lg">
      Call to action
    </Button>
    <Button variant="secondary" size="lg">
      Call to action
    </Button>
    <Button variant="tertiary" size="lg">
      Call to action
    </Button>
    <Button variant="link" size="lg" icon={<ArrowRightIcon />} iconPosition="end">
      Call to action
    </Button>
  </Flex>
);
