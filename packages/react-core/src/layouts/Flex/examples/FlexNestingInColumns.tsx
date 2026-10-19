import { Flex, FlexItem } from '@rh-felt/react-core';

export const FlexNestingInColumns: React.FunctionComponent = () => (
  <Flex>
    <Flex direction={{ default: 'column' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
    <Flex direction={{ default: 'column' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
  </Flex>
);
