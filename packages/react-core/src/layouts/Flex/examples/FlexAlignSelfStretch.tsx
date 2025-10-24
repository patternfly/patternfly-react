import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexAlignSelfStretch: React.FunctionComponent = () => (
  <Flex>
    <Flex direction={{ default: 'column' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
    <Flex direction={{ default: 'column' }} alignSelf={{ default: 'alignSelfStretch' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
  </Flex>
);
