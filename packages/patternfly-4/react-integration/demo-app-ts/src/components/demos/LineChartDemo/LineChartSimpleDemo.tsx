import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartLegend, ChartVoronoiContainer } from '@patternfly/react-charts';
import { width } from 'styled-system';

export class LineChartSimpleDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div style={{height: '250px', width: '600px'}}>
          <Chart
            legendData={[{ name: 'Cats' }]}
            legendOrientation="vertical"
            legendPosition="right"
            height={250}
            padding={{
              bottom: 50,
              left: 50,
              right: 200, // Adjusted to accomodate legend
              top: 50
            }}
            width={600}
          >
            <ChartAxis tickValues={[2, 3, 4]} />
            <ChartAxis dependentAxis tickValues={[2, 5, 8]} />
            <ChartGroup>
              <ChartLine
                data={[
                  { name: 'Cats', x: 1, y: 1 },
                  { name: 'Cats', x: 2, y: 2 },
                  { name: 'Cats', x: 3, y: 5 },
                  { name: 'Cats', x: 4, y: 3 }
                ]}
              />
            </ChartGroup>
          </Chart>
        </div>
      </div>
    )
  }

}
