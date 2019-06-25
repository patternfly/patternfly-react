import React from 'react';
import { ChartDonut, ChartDonutUtilization, ChartLegend } from '@patternfly/react-charts';

export class DonutSimpleDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <div className="donut-chart">
          <ChartDonut
            data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
            labels={datum => `${datum.x}: ${datum.y}%`}
            subTitle="Pets"
            title="100"
          />
        </div>
      </div>

    )
  }
}
