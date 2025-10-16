import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexJustifyContentSpaceBetween: React.FunctionComponent = () => (
  <Flex className="example-border" justifyContent={{ default: 'justifyContentSpaceBetween' }}>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
    <FlexItem>Flex item</FlexItem>
  </Flex>
);
