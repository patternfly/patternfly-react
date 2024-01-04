import React from 'react';
import { Button, Flex } from '@patternfly/react-core';

export const ButtonTypes: React.FunctionComponent = () => (
  <Flex columnGap={{ default: 'columnGapSm' }}>
    <Button type="submit">Submit</Button>
    <Button type="reset">Reset</Button>
    <Button>Default</Button>
  </Flex>
);
