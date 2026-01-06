import { Grid, GridItem } from '@patternfly/react-core';

export const GridWithOverrides: React.FunctionComponent = () => (
  <Grid sm={6} md={4} lg={3} xl2={1}>
    <GridItem span={3} rowSpan={2}>
      span = 3 rowSpan= 2
    </GridItem>
    <GridItem>Grid Item</GridItem>
    <GridItem>Grid Item</GridItem>
    <GridItem>Grid Item</GridItem>
    <GridItem>Grid Item</GridItem>
    <GridItem>Grid Item</GridItem>
    <GridItem>Grid Item</GridItem>
    <GridItem>Grid Item</GridItem>
    <GridItem>Grid Item</GridItem>
    <GridItem>Grid Item</GridItem>
    <GridItem>Grid Item</GridItem>
    <GridItem>Grid Item</GridItem>
  </Grid>
);
