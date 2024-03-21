import { FunctionComponent } from 'react';
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

export const DividerVerticalFlex: FunctionComponent = () => (
  <Flex>
    <FlexItem>first item</FlexItem>
    <Divider
      orientation={{
        default: 'vertical'
      }}
    />
    <FlexItem>second item</FlexItem>
  </Flex>
);
