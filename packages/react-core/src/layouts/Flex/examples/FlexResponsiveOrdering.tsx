import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexResponsiveOrdering: React.FunctionComponent = () => (
  <Flex className="example-border">
    <Flex spacer={{ default: 'spacerNone' }} order={{ default: '1' }} className="example-border">
      <FlexItem spacer={{ default: 'spacerNone' }} order={{ default: '3' }}>
        Set 1, Item A
      </FlexItem>
      <FlexItem order={{ default: '1' }}>Set 1, Item B</FlexItem>
      <FlexItem>Set 1, Item C</FlexItem>
      <FlexItem spacer={{ default: 'spacerMd' }}>Set 1, Item D</FlexItem>
    </Flex>

    <Flex spacer={{ default: 'spacerMd' }} className="example-border">
      <FlexItem spacer={{ default: 'spacerNone' }} order={{ default: '3' }}>
        Set 2, Item A
      </FlexItem>
      <FlexItem order={{ lg: '1' }}>Set 2, Item B</FlexItem>
      <FlexItem>Set 2, Item C</FlexItem>
      <FlexItem spacer={{ default: 'spacerMd' }} order={{ default: '2' }}>
        Set 2, Item D
      </FlexItem>
    </Flex>
  </Flex>
);
