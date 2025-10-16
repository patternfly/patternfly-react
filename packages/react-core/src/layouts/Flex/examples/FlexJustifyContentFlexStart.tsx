import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexJustifyContentFlexStart: React.FunctionComponent = () => (
  <Flex className="example-border" justifyContent={{ default: 'justifyContentFlexStart' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
