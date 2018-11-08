import React from 'react';
import {
  Chart,
  ChartGroup,
  ChartLine,
  ChartTheme
} from '@patternfly/react-charts';
import {
  Grid,
  GridItem,
  Text,
  TextVariants
} from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class SimpleChart extends React.Component {
  static getContainerProps = getContainerProps;
  static title = 'Simple Chart';

  // interpolation="natural"

  getChart = (theme) => (
    <Chart
      minDomain={{ y: 0 }}
      theme={theme}
      height={200}
      width={300}
    >
      <ChartGroup>
        <ChartLine data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }, { x: 4, y: 3 }]}/>
        <ChartLine data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }, { x: 4, y: 4 }]}/>
        <ChartLine data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }, { x: 4, y: 5 }]}/>
        <ChartLine data={[{ x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 8 }, { x: 4, y: 7 }]}/>
      </ChartGroup>
    </Chart>
  );

  render() {
    return (
      <Grid gutter="md">
        <GridItem lg={6}>
          <Text className="chart-title" component={TextVariants.h2}>Green Theme</Text>
          <div className="chart-inline">
            <div className="chart-container chart-margin chart-overflow">
              {this.getChart(ChartTheme.light.green)}
            </div>
          </div>
        </GridItem>
        <GridItem lg={3}>
          <Text className="chart-title" component={TextVariants.h2}>Multi Color Theme</Text>
          <div className="chart-container chart-margin chart-overflow">
            {this.getChart(ChartTheme.light.multi)}
          </div>
        </GridItem>
      </Grid>
    );
  }
}

export default SimpleChart;
