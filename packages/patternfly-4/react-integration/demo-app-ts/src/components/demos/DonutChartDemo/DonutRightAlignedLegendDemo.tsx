import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

export class DonutRightAlignedLegendDemo extends React.Component {

  render() {
    return (
      <div>
        <div className="donut-chart-legend-right">
          <ChartDonut
            data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
            labels={datum => `${datum.x}: ${datum.y}%`}
            legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
            legendOrientation="vertical"
            legendPosition="right"
            subTitle="Pets"
            title="100"
            width={350}
          />
        </div>
      </div>

    )
  }
}
