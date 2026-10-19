import { Flex, FlexItem } from '@rh-felt/react-core';

export const FlexAlignSelfBaseline: React.FunctionComponent = () => (
  <Flex>
    <Flex direction={{ default: 'column' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
    <Flex direction={{ default: 'column' }} alignSelf={{ default: 'alignSelfBaseline' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
  </Flex>
);
