import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

export class DonutUtilizationSmallDemo extends React.Component{

  componentDidMount() {
    window.scrollTo(0, 0);

  }
  render() {
    return (
      <div style={{backgroundColor: 'white', width: '35%'}}>
        <div className="donut-utilization-chart-sm">
          <ChartDonutUtilization
            data={{ x: 'Storage capacity', y: 75 }}
            height={150}
            labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
            subTitle="of 100 GBps"
            title="75%"
            width={150}
          />
        </div>
      </div>
    )
  }
}
