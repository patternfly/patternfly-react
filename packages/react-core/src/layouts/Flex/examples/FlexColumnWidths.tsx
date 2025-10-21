import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexColumnWidths: React.FunctionComponent = () => (
  <Flex>
    <Flex flex={{ default: 'flex_1' }}>
      <FlexItem>Flex item</FlexItem>
    </Flex>
    <Flex flex={{ default: 'flex_2' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
    <Flex flex={{ default: 'flex_3' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
  </Flex>
);
