import { Stack, StackItem } from '@patternfly/react-core';

export const StackBasic: React.FunctionComponent = () => (
  <Stack>
    <StackItem>content</StackItem>
    <StackItem isFilled>pf-m-fill</StackItem>
    <StackItem>content</StackItem>
  </Stack>
);
