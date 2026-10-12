import { Flex, FlexItem } from '@rh-felt/react-core';

export const FlexSpacingNone: React.FunctionComponent = () => (
  <Flex spaceItems={{ default: 'spaceItemsNone' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
