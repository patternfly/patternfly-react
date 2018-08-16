import React from 'react';
import Grid from '../Grid';
import GridItem from '../GridItem';
import getContainerProps from './common/getContainerProps';

class GridOverrides extends React.Component {
  static title = 'Grid With Overrides';
  static getContainerProps = getContainerProps;

  render() {
    return (
      <Grid sm={6} md={4} lg={3}>
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
        <GridItem>Grid Item</GridItem>
      </Grid>
    );
  }
}

export default GridOverrides;
