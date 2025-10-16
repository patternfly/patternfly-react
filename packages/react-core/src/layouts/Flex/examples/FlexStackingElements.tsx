import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexStackingElements: React.FunctionComponent = () => (
  <Flex direction={{ default: 'column' }}>
    <Flex>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
    <Flex>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
    <Flex>
      <FlexItem>Flex item</FlexItem>
    </Flex>
  </Flex>
);
