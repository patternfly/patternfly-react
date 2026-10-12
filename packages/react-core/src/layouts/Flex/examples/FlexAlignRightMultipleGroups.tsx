import { Flex, FlexItem } from '@rh-felt/react-core';

export const FlexAlignRightMultipleGroups: React.FunctionComponent = () => (
  <Flex>
    <Flex>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
    <Flex align={{ default: 'alignRight' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
    <Flex align={{ default: 'alignRight' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
  </Flex>
);
