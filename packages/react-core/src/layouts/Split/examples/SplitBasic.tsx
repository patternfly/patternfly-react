import { Split, SplitItem } from '@rh-felt/react-core';

export const SplitBasic: React.FunctionComponent = () => (
  <Split>
    <SplitItem>content</SplitItem>
    <SplitItem isFilled>pf-m-fill</SplitItem>
    <SplitItem>content</SplitItem>
  </Split>
);
