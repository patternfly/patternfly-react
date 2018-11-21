import React from 'react';
import Grid from '../Grid';
import GridItem from '../GridItem';

class GridWithGutters extends React.Component {
  render() {
    return (
      <Grid gutter="md">
        <GridItem span={8}>span = 8</GridItem>
        <GridItem span={4} rowSpan={2}>
          span = 4, rowSpan = 2
        </GridItem>
        <GridItem span={2} rowSpan={3}>
          span = 2, rowSpan = 3
        </GridItem>
        <GridItem span={2}>span = 2</GridItem>
        <GridItem span={4}>span = 4</GridItem>
        <GridItem span={2}>span = 2</GridItem>
        <GridItem span={2}>span = 2</GridItem>
        <GridItem span={2}>span = 2</GridItem>
        <GridItem span={4}>span = 4</GridItem>
        <GridItem span={2}>span = 2</GridItem>
        <GridItem span={4}>span = 4</GridItem>
        <GridItem span={4}>span = 4</GridItem>
      </Grid>
    );
  }
}

export default GridWithGutters;
