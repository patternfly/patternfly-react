import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexInline: React.FunctionComponent = () => (
  <Flex className="example-border" display={{ default: 'inlineFlex' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
