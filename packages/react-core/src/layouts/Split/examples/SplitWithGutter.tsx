import { Split, SplitItem } from '@rh-felt/react-core';

export const SplitWithGutter: React.FunctionComponent = () => (
  <Split hasGutter>
    <SplitItem>content</SplitItem>
    <SplitItem isFilled>pf-m-fill</SplitItem>
    <SplitItem>content</SplitItem>
  </Split>
);
