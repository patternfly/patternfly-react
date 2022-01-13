import React from 'react';
import { Badge, Flex } from '@patternfly/react-core';

export const BadgeUnread: React.FunctionComponent = () => (
  <Flex>
    <Badge>7</Badge>
    <Badge>24</Badge>
    <Badge>240</Badge>
    <Badge>999+</Badge>
  </Flex>
);
