import React from 'react';
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

export const DividerOrientationVariousBreakpoints: React.FunctionComponent = () => (
  <Flex>
    <FlexItem>first item</FlexItem>
    <Divider
      orientation={{
        default: 'vertical',
        sm: 'vertical',
        md: 'horizontal',
        lg: 'vertical',
        xl: 'horizontal'
      }}
    />
    <FlexItem>second item</FlexItem>
  </Flex>
);
