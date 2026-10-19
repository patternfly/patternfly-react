import { Flex, FlexItem } from '@rh-felt/react-core';

export const FlexNesting: React.FunctionComponent = () => (
  <Flex>
    <Flex>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
    <Flex>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
  </Flex>
);
