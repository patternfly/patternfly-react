import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexFirstLastOrder: React.FunctionComponent = () => (
  <Flex className="example-border">
    <FlexItem spacer={{ default: 'spacerNone' }} order={{ default: '2' }}>
      Item A
    </FlexItem>
    <FlexItem>Item B</FlexItem>
    <FlexItem spacer={{ default: 'spacerMd' }} order={{ default: '-1' }}>
      Item C
    </FlexItem>
  </Flex>
);
