import { Stack, StackItem } from '@patternfly/react-core';

export const StackWithGutter: React.FunctionComponent = () => (
  <Stack hasGutter>
    <StackItem>content</StackItem>
    <StackItem isFilled>pf-m-fill</StackItem>
    <StackItem>content</StackItem>
  </Stack>
);
