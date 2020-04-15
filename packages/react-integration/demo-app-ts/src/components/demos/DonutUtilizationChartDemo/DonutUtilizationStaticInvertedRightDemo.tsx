import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';

export class DonutUtilizationStaticInvertedRightDemo extends React.Component<{}, { used: number; spacer: string }> {
  interval: number = 0;
  constructor(props: {}) {
    super(props);
    this.state = {
      spacer: '',
      used: 100
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.interval = window.setInterval(() => {
      const { used } = this.state;
      const val = (((used - 10) % 100) + 100) % 100;
      this.setState({
        spacer: val < 10 ? ' ' : '',
        used: val
      });
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
            data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 20%', y: 20 }]}
            invert
            labels={({ datum }) => (datum.x ? datum.x : null)}
            width={500}
          >
            <ChartDonutUtilization
              data={{ x: 'Storage capacity', y: used }}
              labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
              legendData={[
                { name: `Storage capacity: ${used}%` },
                { name: 'Warning threshold at 60%' },
                { name: 'Danger threshold at 20%' }
              ]}
              legendOrientation="vertical"
              subTitle="of 100 GBps"
              title={`${used}%`}
              thresholds={[{ value: 60 }, { value: 20 }]}
            />
          </ChartDonutThreshold>
        </div>
      </div>
    );
  }
}
