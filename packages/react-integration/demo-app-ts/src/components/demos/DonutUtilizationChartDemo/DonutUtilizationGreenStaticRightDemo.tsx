import React from 'react';
import {
  ChartDonutThreshold,
  ChartDonutUtilization,
  ChartThemeColor,
  ChartThemeVariant
} from '@patternfly/react-charts';

export class DonutUtilizationGreenStaticRightDemo extends React.Component<{}, { used: number }> {
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
        <div style={{ backgroundColor: 'white', height: '350px', width: '230px', margin: '0 auto' }}>
          <ChartDonutThreshold
            data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
            height={350}
            labels={({ datum }) => (datum.x ? datum.x : null)}
            legendPosition="bottom"
            width={230}
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
              themeColor={ChartThemeColor.green}
              themeVariant={ChartThemeVariant.light}
              thresholds={[{ value: 60 }, { value: 90 }]}
            />
          </ChartDonutThreshold>
        </div>
      </div>
    );
  }
}
