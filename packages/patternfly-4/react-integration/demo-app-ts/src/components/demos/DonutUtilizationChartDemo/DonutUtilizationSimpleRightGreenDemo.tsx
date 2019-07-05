import React from 'react';
import { ChartDonutUtilization, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';

export class DonutUtilizationSimpleRightGreenDemo extends React.Component<{}, { used: number; spacer: string }> {

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
        <div style={{backgroundColor: 'white', height: '300px', width: '230px'}}>
          <ChartDonutUtilization
            data={{ x: 'Storage capacity', y: used }}
            donutHeight={230}
            height={300}
            labels={datum => datum.x ? `${datum.x}: ${datum.y}%` : null}
            legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}
            legendOrientation="vertical"
            legendPosition="bottom"
            subTitle="of 100 GBps"
            title={`${used}%`}
            themeColor={ChartThemeColor.green}
            themeVariant={ChartThemeVariant.light}
            thresholds={[{ value: 60 }, { value: 90 }]}
            width={230}
          />
        </div>
      </div>
    );
  }
}
