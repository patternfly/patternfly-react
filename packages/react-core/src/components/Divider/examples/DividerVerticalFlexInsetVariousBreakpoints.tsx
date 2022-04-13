import React from 'react';
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

export const DividerVerticalFlexInsetVariousBreakpoints: React.FunctionComponent<React.PropsWithChildren<
  unknown
>> = () => (
  <Flex>
    <FlexItem>first item</FlexItem>
    <Divider
      isVertical
      inset={{
        default: 'insetMd',
        md: 'insetNone',
        lg: 'insetSm',
        xl: 'insetXs'
      }}
    />
    <FlexItem>first item</FlexItem>
  </Flex>
);
