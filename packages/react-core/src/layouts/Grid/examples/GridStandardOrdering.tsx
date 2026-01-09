import { Grid, GridItem } from '@patternfly/react-core';

export const GridStandardOrdering: React.FunctionComponent = () => (
  <Grid hasGutter span={3}>
    <GridItem order={{ default: '2' }}>Item A</GridItem>
    <GridItem>Item B</GridItem>
    <GridItem order={{ default: '-1' }}>Item C</GridItem>
  </Grid>
);
