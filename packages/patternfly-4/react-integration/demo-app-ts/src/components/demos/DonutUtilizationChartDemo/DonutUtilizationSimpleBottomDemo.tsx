import React from 'react';
import { ChartDonutThreshold, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import { ChartDonutUtilization } from '@patternfly/react-charts';


interface Testing {
  legendWidth: any
}

export class DonutUtilizationSimpleBottomDemo extends React.Component<Testing> {
  render() {
    return (
    <div>
      <div className="donut-utilization-chart-legend-bottom">
        <ChartDonutUtilization
          data={{ x: 'GBps capacity', y: 45 }}
          donutHeight={230}
          donutOrientation="top"
          height={275}
          labels={datum => datum.x ? `${datum.x} - ${datum.y}%` : null}
          legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}
          legendOrientation="horizontal"
          donutWidth={282}
          subTitle="of 100 GBps"
          title="45%"
          thresholds={[{ value: 60 }, { value: 90 }]}
          width={500}
        />
      </div>
    </div>
    )
  }
}
