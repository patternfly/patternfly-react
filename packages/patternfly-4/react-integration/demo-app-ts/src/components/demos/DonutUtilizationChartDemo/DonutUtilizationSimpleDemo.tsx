import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

export class DonutUtilizationSimpleDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div style={{backgroundColor: 'white', width: '50%'}}>
        <div className="donut-utilization-chart" style={{display: 'block', margin: '0 auto'}}>
          <ChartDonutUtilization
            data={{ x: 'GBps capacity', y: 75 }}
            labels={datum => datum.x ? `${datum.x} - ${datum.y}%` : null}
            subTitle="of 100 GBps"
            title="75%"
            width={500}
          />
        </div>
      </div>
    )
  }
}
