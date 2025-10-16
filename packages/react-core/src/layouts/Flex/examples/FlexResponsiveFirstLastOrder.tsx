import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexResponsiveFirstLastOrder: React.FunctionComponent = () => (
  <Flex className="example-border">
    <FlexItem spacer={{ lg: 'spacerNone' }} order={{ lg: '2' }}>
      Item A
    </FlexItem>
    <FlexItem spacer={{ md: 'spacerNone', lg: 'spacerMd' }} order={{ default: '-1', md: '1' }}>
      Item B
    </FlexItem>
    <FlexItem spacer={{ default: 'spacerMd' }} order={{ md: '-1' }}>
      Item C
    </FlexItem>
  </Flex>
);
