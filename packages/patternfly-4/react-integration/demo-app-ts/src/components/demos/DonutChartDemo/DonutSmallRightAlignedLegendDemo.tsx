import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

export class DonutSmallRightAlignedLegendDemo extends React.Component {

  render() {
    return (
      <div>
        <div className="donut-chart-legend-right-subtitle-bottom-sm">
          <ChartDonut
            data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
            donutHeight={150}
            height={175}
            labels={datum => `${datum.x}: ${datum.y}%`}
            legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
            legendOrientation="vertical"
            legendPosition="right"
            subTitle="Pets"
            subTitlePosition="bottom"
            title="100"
            width={275}
          />
        </div>
      </div>

    )
  }
}
