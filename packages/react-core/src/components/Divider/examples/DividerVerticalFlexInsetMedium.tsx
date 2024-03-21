import { FunctionComponent } from 'react';
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

export const DividerVerticalFlexInsetMedium: FunctionComponent = () => (
  <Flex>
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
