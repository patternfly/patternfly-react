import React from 'react';
import { ChartDonutThreshold, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import { ChartDonutUtilization } from '@patternfly/react-charts';

export class DonutUtilizationSimpleBottomDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
    <div>
      <div style={{backgroundColor: 'white', height:'275px', width: '500px', paddingTop: '25px'}}>
        <ChartDonutUtilization
          data={{ x: 'GBps capacity', y: 45 }}
          donutHeight={230}
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
