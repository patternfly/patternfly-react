import React from 'react';
import { Chart, ChartGroup, ChartLegend, ChartLine, ChartTheme } from '@patternfly/react-charts';
import { Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';

class SimpleChart extends React.Component {
  getChart = theme => (
    <Chart minDomain={{ y: 0 }} theme={theme} height={200} width={300}>
      <ChartGroup>
        <ChartLine
          data={[
            { name: 'Cats', x: 1, y: 1 },
            { name: 'Cats', x: 2, y: 2 },
            { name: 'Cats', x: 3, y: 5 },
            { name: 'Cats', x: 4, y: 3 }
          ]}
        />
        <ChartLine
          data={[
            { name: 'Dogs', x: 1, y: 2 },
            { name: 'Dogs', x: 2, y: 1 },
            { name: 'Dogs', x: 3, y: 7 },
            { name: 'Dogs', x: 4, y: 4 }
          ]}
          style={{
            data: {
              strokeDasharray: '3,3'
            }
          }}
        />
        <ChartLine
          data={[
            { name: 'Birds', x: 1, y: 3 },
            { name: 'Birds', x: 2, y: 4 },
            { name: 'Birds', x: 3, y: 9 },
            { name: 'Birds', x: 4, y: 5 }
          ]}
        />
        <ChartLine
          data={[
            { name: 'Mice', x: 1, y: 3 },
            { name: 'Mice', x: 2, y: 3 },
            { name: 'Mice', x: 3, y: 8 },
            { name: 'Mice', x: 4, y: 7 }
          ]}
        />
      </ChartGroup>
      <ChartAxis tickValues={[2, 3, 4]} />
      <ChartAxis dependentAxis tickValues={[2, 5, 8]} />
    </Chart>
  );

  getlegend = theme => (
    <ChartLegend
      data={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash'} }, { name: 'Birds' }, { name: 'Mice' }]}
      title="Average number of pets"
      height={50}
      theme={theme}
    />
  );

  render() {
    return (
      <Grid gutter="md">
        <GridItem lg={6}>
          <Text className="chart-title" component={TextVariants.h2}>
            Green Theme
          </Text>
          <div className="chart-inline">
            <div className="chart-container chart-margin chart-overflow">
              <div>
                {this.getChart(ChartTheme.light.green)}
              </div>
              <div className="chart-legend">
                {this.getlegend(ChartTheme.light.green)}
              </div>
            </div>
          </div>
        </GridItem>
        <GridItem lg={3}>
          <Text className="chart-title" component={TextVariants.h2}>
            Multi Color Theme
          </Text>
          <div className="chart-container chart-margin chart-overflow">
            <div>
              {this.getChart(ChartTheme.light.multi)}
            </div>
            <div className="chart-legend">
              {this.getlegend(ChartTheme.light.multi)}
            </div>
          </div>
        </GridItem>
      </Grid>
    );
  }
}

export default SimpleChart;
