import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

export class DonutUtilizationStaticRightDemo extends React.Component<{}, { used: number }> {
  interval: number = 0;
  constructor(props: {}) {
    super(props);
    this.state = {
      used: 0
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.interval = window.setInterval(() => {
      const { used } = this.state;
      this.setState({ used: (used + 10) % 100 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { used } = this.state;
    return (
      <div>
        <div style={{ backgroundColor: 'white', height: '230px', width: '500px' }}>
          <ChartDonutThreshold
            data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
            labels={({ datum }) => (datum.x ? datum.x : null)}
            width={500}
          >
            <ChartDonutUtilization
              data={{ x: 'Storage capacity', y: used }}
              labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
              legendData={[
                { name: `Storage capacity: ${used}%` },
                { name: 'Warning threshold at 60%' },
                { name: 'Danger threshold at 90%' }
              ]}
              legendOrientation="vertical"
              subTitle="of 100 GBps"
              title={`${used}%`}
              thresholds={[{ value: 60 }, { value: 90 }]}
            />
          </ChartDonutThreshold>
        </div>
      </div>
    );
  }
}
