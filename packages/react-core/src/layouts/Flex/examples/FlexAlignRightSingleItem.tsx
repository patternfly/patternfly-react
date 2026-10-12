import { Flex, FlexItem } from '@rh-felt/react-core';

export const FlexAlignRightSingleItem: React.FunctionComponent = () => (
  <Flex className="example-border">
    <FlexItem align={{ default: 'alignRight' }}>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
