import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexAlignRightSingleItem: React.FunctionComponent = () => (
  <Flex className="example-border">
    <FlexItem align={{ default: 'alignRight' }}>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
