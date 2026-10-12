import { Flex, FlexItem } from '@rh-felt/react-core';

export const FlexColumnLayout: React.FunctionComponent = () => (
  <Flex direction={{ default: 'column' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
