import React from 'react';
import Grid from '../Grid';
import GridItem from '../GridItem';

class GridOverrides extends React.Component {
  render() {
    return (
      <Grid sm={6} md={4} lg={3}>
        <GridItem pan={3} rowSpan={2}>
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
  }
}

export default GridOverrides;
