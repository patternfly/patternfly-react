import React from 'react';
import { Chart, ChartArea, ChartGroup, ChartLabel, ChartLegend, ChartVoronoiContainer } from '@patternfly/react-charts';

export class SparklineDemo extends React.Component {
  render() {
    return (
      <div>
        <div style={{marginLeft: '50px', marginTop: '50px', height: '135px'}}>
          <div style={{height: '100px', width: '400px'}}>
            <ChartGroup
              height={100}
              padding={0}
              width={400}
            >
              <ChartArea
                data={[
                  { name: 'Cats', x: 1, y: 3 },
                  { name: 'Cats', x: 2, y: 4 },
                  { name: 'Cats', x: 3, y: 8 },
                  { name: 'Cats', x: 4, y: 6 }
                ]}
              />
            </ChartGroup>
          </div>
          <ChartLabel text="CPU utilization"/>
        </div>
      </div>
    )
  }
}
