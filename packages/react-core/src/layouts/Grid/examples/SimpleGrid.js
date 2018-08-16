import React from 'react';
import Grid from '../Grid';
import GridItem from '../GridItem';
import getContainerProps from './common/getContainerProps';

class SimpleGrid extends React.Component {
  static title = 'Simple Grid';
  static getContainerProps = getContainerProps;

  render() {
    return (
      <Grid>
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

export default SimpleGrid;
