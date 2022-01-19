import React from 'react';
import { Button, Flex } from '@patternfly/react-core';

export const ButtonLinks: React.FunctionComponent = () => (
  <Flex>
    <Button component="a" href="https://pf4.patternfly.org/" target="_blank" variant="primary">
      Link to core docs
    </Button>
    <Button component="a" href="https://pf4.patternfly.org/" target="_blank" variant="secondary">
      Secondary link to core docs
    </Button>
    <Button isDisabled component="a" href="https://pf4.patternfly.org/" target="_blank" variant="tertiary">
      Tertiary link to core docs
    </Button>
    <Button component="a" href="https://pf4.patternfly.org/contribution/#modifiers" variant="link">
      Jump to modifiers in contribution guidelines
    </Button>
  </Flex>
);
