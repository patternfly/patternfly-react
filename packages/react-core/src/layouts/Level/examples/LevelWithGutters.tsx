import { Level, LevelItem } from '@patternfly/react-core';

export const LevelWithGutters: React.FunctionComponent = () => (
  <Level hasGutter>
    <LevelItem>Level Item</LevelItem>
    <LevelItem>Level Item</LevelItem>
    <LevelItem>Level Item</LevelItem>
  </Level>
);
