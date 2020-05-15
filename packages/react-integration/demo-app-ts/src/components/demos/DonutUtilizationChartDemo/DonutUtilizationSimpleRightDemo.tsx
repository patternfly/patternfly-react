import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

export class DonutUtilizationSimpleRightDemo extends React.Component<{}, { used: number; spacer: string }> {
  interval: number = 0;

  constructor(props: {}) {
    super(props);
    this.state = {
      spacer: '',
      used: 0
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.interval = window.setInterval(() => {
      const { used } = this.state;
      const val = (used + 10) % 100;
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
    const { spacer, used } = this.state;
    return (
      <div>
        <div style={{ backgroundColor: 'white', height: '230px', width: '435px' }}>
          <ChartDonutUtilization
            data={{ x: 'GBps capacity', y: used }}
            labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
            legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}
            legendOrientation="vertical"
            subTitle="of 100 GBps"
            title={`${used}%`}
            thresholds={[{ value: 60 }, { value: 90 }]}
            width={435}
          />
        </div>
      </div>
    );
  }
}
