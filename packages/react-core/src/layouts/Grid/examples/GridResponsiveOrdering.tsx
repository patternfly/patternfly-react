import { Grid, GridItem } from '@patternfly/react-core';

export const GridResponsiveOrdering: React.FunctionComponent = () => (
  <Grid hasGutter span={3}>
    <GridItem order={{ lg: '2' }}>Item A</GridItem>
    <GridItem>Item B</GridItem>
    <GridItem order={{ default: '-1', md: '1' }}>Item C</GridItem>
  </Grid>
);
