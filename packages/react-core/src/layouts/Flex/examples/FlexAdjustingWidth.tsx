import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexAdjustingWidth: React.FunctionComponent = () => (
  <Flex>
    <Flex flex={{ default: 'flex_1' }}>
      <FlexItem>Flex item</FlexItem>
    </Flex>
    <Flex flex={{ default: 'flex_1' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
    <Flex flex={{ default: 'flex_1' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
  </Flex>
);
