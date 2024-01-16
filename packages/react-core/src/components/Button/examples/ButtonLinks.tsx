import React from 'react';
import { Button, Flex } from '@patternfly/react-core';

export const ButtonLinks: React.FunctionComponent = () => (
  <Flex>
    <Button component="a" href="https://www.patternfly.org/" target="_blank" variant="primary">
      Link to PatternFly home
    </Button>
    <Button component="a" href="https://www.patternfly.org/" target="_blank" variant="secondary">
      Secondary link to PatternFly home
    </Button>
    <Button isDisabled component="a" href="https://www.patternfly.org/" target="_blank" variant="tertiary">
      Tertiary link to PatternFly home
    </Button>
    <Button component="a" href="https://www.patternfly.org/" variant="link">
      Jump to PatternFly home
    </Button>
  </Flex>
);
