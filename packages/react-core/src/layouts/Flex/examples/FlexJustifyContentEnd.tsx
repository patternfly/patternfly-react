import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexJustifyContentEnd: React.FunctionComponent = () => (
  <Flex className="example-border" justifyContent={{ default: 'justifyContentFlexEnd' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
