import { Flex, FlexItem } from '@rh-felt/react-core';

export const FlexCanGrow: React.FunctionComponent = () => (
  <Flex>
    <Flex grow={{ default: 'grow' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
    <Flex>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
    <Flex>
      <FlexItem>Flex item</FlexItem>
    </Flex>
  </Flex>
);
