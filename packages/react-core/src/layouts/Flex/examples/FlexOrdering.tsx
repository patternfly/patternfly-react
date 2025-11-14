import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexOrdering: React.FunctionComponent = () => (
  <Flex className="example-border">
    <Flex spacer={{ default: 'spacerNone' }} order={{ lg: '1' }} className="example-border">
      <FlexItem order={{ md: '2' }}>Set 1, Item A</FlexItem>
      <FlexItem order={{ md: '-1' }}>Set 1, Item B</FlexItem>
      <FlexItem order={{ xl: '1' }}>Set 1, Item C</FlexItem>
      <FlexItem spacer={{ xl: 'spacerNone' }} order={{ xl: '1' }}>
        Set 1, Item D
      </FlexItem>
    </Flex>
    <Flex spacer={{ lg: 'spacerMd' }} className="example-border">
      <FlexItem spacer={{ default: 'spacerNone' }} order={{ default: '3' }}>
        Set 2, Item A
      </FlexItem>
      <FlexItem order={{ default: '1' }}>Set 2, Item B</FlexItem>
      <FlexItem>Set 2, Item C</FlexItem>
      <FlexItem spacer={{ default: 'spacerMd' }} order={{ default: '2' }}>
        Set 2, Item D
      </FlexItem>
    </Flex>
  </Flex>
);
