import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

export class DonutUtilizationSmallStaticBottomDemo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: 'white', height: '275px', width: '675px' }}>
          <ChartDonutThreshold
            ariaDesc="Storage capacity"
            ariaTitle="Donut utilization chart with static threshold example"
            constrainToVisibleArea
            data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
            height={275}
            labels={({ datum }) => (datum.x ? datum.x : null)}
            legendPosition="bottom"
            padding={{
              bottom: 50, // Adjusted to accommodate legend
              left: 8,
              right: 8,
              top: 8
            }}
            width={675}
          >
            <ChartDonutUtilization
              data={{ x: 'Storage capacity', y: 45 }}
              labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
              legendData={[
                { name: `Storage capacity: 45%` },
                { name: 'Warning threshold at 60%' },
                { name: 'Danger threshold at 90%' }
              ]}
              subTitle="of 100 GBps"
              title="45%"
            />
          </ChartDonutThreshold>
        </div>
      </div>
    );
  }
}
