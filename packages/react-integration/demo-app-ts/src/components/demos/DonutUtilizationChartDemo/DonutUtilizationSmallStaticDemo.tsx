import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

export class DonutUtilizationSmallStaticDemo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: 'white', height: '150px', width: '150px' }}>
          <ChartDonutThreshold
            data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
            height={175}
            labels={({ datum }) => (datum.x ? datum.x : null)}
            width={175}
          >
            <ChartDonutUtilization
              data={{ x: 'Storage capacity', y: 45 }}
              labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
              subTitle="of 100 GBps"
              title="45%"
            />
          </ChartDonutThreshold>
        </div>
      </div>
    );
  }
}
