import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

export class DonutUtilizationStaticDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0 , 0);
  }

  render() {
    return (
      <div style={{backgroundColor: 'white', width: '35%', margin: '0 auto'}}>
        <div className="donut-threshold-chart">
          <ChartDonutThreshold
            data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
            labels={datum => datum.x ? datum.x : null}
          >
            <ChartDonutUtilization
              data={{ x: 'Storage capacity', y: 45 }}
              labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
              subTitle="of 100 GBps"
              title="45%"
            />
          </ChartDonutThreshold>
        </div>
      </div>
    )
  }
}
