import React from 'react';
import { Chart, ChartArea, ChartGroup, ChartLegend, ChartVoronoiContainer } from '@patternfly/react-charts';

export class SimpleAreaDemo extends React.Component {
  render() {
    return (
      <div style={{width: '100%'}}>
        <div className="area-chart-legend-right">
          <Chart
            legendData={[{ name: 'Cats' }]}
            legendOrientation="vertical"
            legendPosition="right"
            height={200}
            padding={{
              right: 200
            }}
            width={800}
          >
            <ChartGroup>
              <ChartArea
                data={[
                  { name: 'Cats', x: 1, y: 3 },
                  { name: 'Cats', x: 2, y: 4 },
                  { name: 'Cats', x: 3, y: 8 },
                  { name: 'Cats', x: 4, y: 6 }
                ]}
              />
            </ChartGroup>
          </Chart>
        </div>
      </div>
    )
  }
}
