import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexAligningRight: React.FunctionComponent = () => (
  <Flex className="example-border">
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem align={{ default: 'alignRight' }}>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
