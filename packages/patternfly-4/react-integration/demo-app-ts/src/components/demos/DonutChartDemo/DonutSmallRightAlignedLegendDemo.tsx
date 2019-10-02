import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

export class DonutSmallRightAlignedLegendDemo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div style={{ height: '150px', width: '275px', paddingTop: '50px', paddingLeft: '50px' }}>
          <ChartDonut
            ariaDesc="Average number of pets"
            ariaTitle="Donut chart example"
            constrainToVisibleArea
            data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
            height={150}
            labels={({ datum }) => `${datum.x}: ${datum.y}%`}
            legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
            legendOrientation="vertical"
            legendPosition="right"
            padding={{
              bottom: 8,
              left: 8,
              right: 125, // Adjusted to accommodate legend
              top: 8
            }}
            subTitle="Pets"
            title="100"
            width={275}
          />
        </div>
      </div>
    );
  }
}
