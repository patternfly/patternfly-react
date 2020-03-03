import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

export class DonutUtilizationSimpleBottomDemo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: 'white', height: '275px', width: '300px', paddingTop: '25px' }}>
          <ChartDonutUtilization
            ariaDesc="Storage capacity"
            ariaTitle="Donut utilization chart example"
            constrainToVisibleArea
            data={{ x: 'Storage capacity', y: 45 }}
            height={275}
            labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
            legendData={[{ name: `Storage capacity: 45%` }, { name: 'Unused' }]}
            legendPosition="bottom"
            padding={{
              bottom: 50, // Adjusted to accommodate legend
              left: 8,
              right: 8,
              top: 8
            }}
            subTitle="of 100 GBps"
            title="45%"
            thresholds={[{ value: 60 }, { value: 90 }]}
            width={300}
          />
        </div>
      </div>
    );
  }
}
