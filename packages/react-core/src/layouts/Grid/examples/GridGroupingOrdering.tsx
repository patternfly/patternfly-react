import { Grid, GridItem } from '@patternfly/react-core';

export const GridGroupingOrdering: React.FunctionComponent = () => (
  <Grid hasGutter span={12}>
    <Grid hasGutter span={6} order={{ default: '2' }}>
      <GridItem order={{ default: '3' }}>Set 1, Item A</GridItem>
      <GridItem order={{ default: '1' }}>Set 1, Item B</GridItem>
      <GridItem>Set 1, Item C</GridItem>
      <GridItem order={{ default: '2' }}>Set 1, Item D</GridItem>
    </Grid>
    <Grid hasGutter span={6}>
      <GridItem order={{ default: '2' }}>Set 2, Item A</GridItem>
      <GridItem order={{ default: '1' }}>Set 2, Item B</GridItem>
      <GridItem>Set 2, Item C</GridItem>
      <GridItem order={{ default: '2' }}>Set 2, Item D</GridItem>
    </Grid>
  </Grid>
);
