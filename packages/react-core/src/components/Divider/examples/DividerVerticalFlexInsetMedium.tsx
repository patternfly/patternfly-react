import React from 'react';
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

export const DividerVerticalFlexInsetMedium: React.FunctionComponent = () => (
  <Flex style={{ height: '50px' }}>
    <FlexItem>first item</FlexItem>
    <Divider
      orientation={{
        default: 'vertical'
      }}
      inset={{ default: 'insetMd' }}
    />
    <FlexItem>second item</FlexItem>
  </Flex>
);
