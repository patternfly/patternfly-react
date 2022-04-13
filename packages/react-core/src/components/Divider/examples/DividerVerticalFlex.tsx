import React from 'react';
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

export const DividerVerticalFlex: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => (
  <Flex>
    <FlexItem>first item</FlexItem>
    <Divider isVertical />
    <FlexItem>second item</FlexItem>
  </Flex>
);
