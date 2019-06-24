import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

export class DonutBottomAlignedLegendDemo extends React.Component {

  render() {
    return (
      <div>
        <div className="donut-chart-legend-bottom">
          <ChartDonut
            data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
            donutHeight={230}
            donutOrientation="top"
            height={275}
            labels={datum => `${datum.x}: ${datum.y}%`}
            legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
            legendPosition="bottom"
            legendWidth={225}
            subTitle="Pets"
            title="100"
            width={300}
          />
        </div>
      </div>

    )
  }
}
