import { Flex, FlexItem } from '@rh-felt/react-core';

export const FlexJustifyContentEnd: React.FunctionComponent = () => (
  <Flex className="example-border" justifyContent={{ default: 'justifyContentFlexEnd' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
