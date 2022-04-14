import React from 'react';
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

export const DividerVerticalFlexInsetMedium: React.FunctionComponent = () => (
  <Flex>
    <FlexItem>first item</FlexItem>
    <Divider isVertical inset={{ default: 'insetMd' }} />
    <FlexItem>second item</FlexItem>
  </Flex>
);
