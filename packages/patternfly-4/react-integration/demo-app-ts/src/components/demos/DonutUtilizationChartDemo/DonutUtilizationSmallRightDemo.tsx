import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

export class DonutUtilizationSmallRightDemo extends React.Component<{}, { used: number; spacer: string }> {

  interval: any;
  constructor(props) {
    super(props);
    this.state = {
      spacer: '',
      used: 0
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.interval = setInterval(() => {
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
        <div style={{backgroundColor: 'white', height: '150px', width: '350px'}}>
          <ChartDonutUtilization
            data={{ x: 'Storage capacity', y: used }}
            height={150}
            labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
            legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}
            legendOrientation="vertical"
            subTitle="of 100 GBps"
            title={`${used}%`}
            thresholds={[{ value: 60 }, { value: 90 }]}
            width={350}
          />
        </div>
      </div>
    );
  }
}
