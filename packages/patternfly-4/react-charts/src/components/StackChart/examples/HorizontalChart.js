import React from 'react';
import {
  Chart,
  ChartBar,
  ChartStack,
  ChartTheme,
} from '@patternfly/react-charts';
import {
  Grid,
  GridItem,
  Text,
  TextVariants
} from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class HorizontalChart extends React.Component {
  static getContainerProps = getContainerProps;
  static title = 'Horizontal Chart';

  getChart = (theme) => (
    <Chart
      domainPadding={{ y: [30, 25] }}
      theme={theme}
      height={200}
      width={300}
    >
      <ChartStack horizontal>
        <ChartBar data={[{ x: 'Cats', y: 1 }, { x: 'Dogs', y: 2 }, { x: 'Birds', y: 5 }, { x: 'Mice', y: 3 }]}/>
        <ChartBar data={[{ x: 'Cats', y: 2 }, { x: 'Dogs', y: 1 }, { x: 'Birds', y: 7 }, { x: 'Mice', y: 4 }]}/>
        <ChartBar data={[{ x: 'Cats', y: 4 }, { x: 'Dogs', y: 4 }, { x: 'Birds', y: 9 }, { x: 'Mice', y: 7 }]}/>
        <ChartBar data={[{ x: 'Cats', y: 3 }, { x: 'Dogs', y: 3 }, { x: 'Birds', y: 8 }, { x: 'Mice', y: 5 }]}/>
      </ChartStack>
    </Chart>
  );

  render() {
    return (
      <Grid gutter="md">
        <GridItem xl={6}>
          <Text className="chart-title" component={TextVariants.h2}>Blue Theme</Text>
          <div className="chart-container chart-margin chart-overflow">
            {this.getChart(ChartTheme.light.blue)}
          </div>
        </GridItem>
        <GridItem xl={3}>
          <Text className="chart-title" component={TextVariants.h2}>Multi Color Theme</Text>
          <div className="chart-container chart-margin chart-overflow">
            {this.getChart(ChartTheme.light.multi)}
          </div>
        </GridItem>
      </Grid>
    );
  }
}

export default HorizontalChart;
