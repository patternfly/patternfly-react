import React from 'react';
import { ChartLegend, ChartTheme, ChartPie } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

class SimpleChart extends React.Component {
  getChart = theme => (
    <ChartPie
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={this.getTooltipLabel}
      theme={theme}
      height={200}
      width={200}
    />
  );

  getLegend = (theme, horizontal) => (
    <ChartLegend
      data={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
      orientation={horizontal ? 'horizontal' : 'vertical'}
      theme={theme}
      y={horizontal ? 0 : 55}
      height={horizontal ? 35 : 200}
      width={200}
    />
  );

  getTooltipLabel = datum => `${datum.x}: ${datum.y}`;

  render() {
    return (
      <Grid gutter="md">
        <GridItem lg={6}>
          <Text className="chart-title" component={TextVariants.h2}>
            Blue Theme
          </Text>
          <div className="chart-inline">
            <div className="chart-container">{this.getChart(ChartTheme.light.blue)}</div>
            {this.getLegend(ChartTheme.light.blue, false)}
          </div>
        </GridItem>
        <GridItem lg={3}>
          <Text className="chart-title" component={TextVariants.h2}>
            Multi Color Theme
          </Text>
          <div className="chart-container">{this.getChart(ChartTheme.light.multi)}</div>
          {this.getLegend(ChartTheme.light.multi, true)}
        </GridItem>
      </Grid>
    );
  }
}

export default SimpleChart;
