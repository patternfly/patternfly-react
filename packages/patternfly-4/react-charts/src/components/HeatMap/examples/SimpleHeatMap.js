import React from 'react';
import {
  ChartTheme
} from '@patternfly/react-charts';
import {
  Grid,
  GridItem,
  Text,
  TextVariants
} from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class SimpleHeatMap extends React.Component {
  static getContainerProps = getContainerProps;
  static title = 'Simple Heat Map';

  getHeatMap = (theme) => (
    <span>Coming soon...</span>
  );

  render() {
    return (
      <Grid gutter="md">
        <GridItem xl={6}>
          <Text className="chart-title" component={TextVariants.h2}>Blue Theme</Text>
          <div>{this.getHeatMap(ChartTheme.light.blue)}</div>
        </GridItem>
        <GridItem xl={3}>
          <Text className="chart-title" component={TextVariants.h2}>Multi Color Theme</Text>
          <div>{this.getHeatMap(ChartTheme.light.multi)}</div>
        </GridItem>
      </Grid>
    );
  }
}

export default SimpleHeatMap;
