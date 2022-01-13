import React from 'react';
import { Badge, Flex } from '@patternfly/react-core';

export const BadgeRead: React.FunctionComponent = () => (
  <Flex>
    <Badge isRead>7</Badge>
    <Badge isRead>24</Badge>
    <Badge isRead>240</Badge>
    <Badge isRead>999+</Badge>
  </Flex>
);
