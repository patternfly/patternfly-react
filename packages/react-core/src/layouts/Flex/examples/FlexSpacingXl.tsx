import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexSpacingXl: React.FunctionComponent = () => (
  <Flex spaceItems={{ default: 'spaceItemsXl' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
