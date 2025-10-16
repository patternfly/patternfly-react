import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexSwitchingColumnRow: React.FunctionComponent = () => (
  <Flex direction={{ default: 'column', lg: 'row' }}>
    <Flex>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
    <Flex direction={{ default: 'column' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
  </Flex>
);
