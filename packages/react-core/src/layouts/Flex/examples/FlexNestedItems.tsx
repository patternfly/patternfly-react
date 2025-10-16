import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexNestedItems: React.FunctionComponent = () => (
  <Flex>
    <Flex>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <Flex>
      <FlexItem>Flex item</FlexItem>
    </Flex>
  </Flex>
);
