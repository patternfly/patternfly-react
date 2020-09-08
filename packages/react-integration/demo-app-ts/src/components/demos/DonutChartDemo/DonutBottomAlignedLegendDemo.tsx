import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

export class DonutBottomAlignedLegendDemo extends React.Component {
  static displayName = 'DonutBottomAlignedLegendDemo';
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div style={{ height: '275px', width: '300px', paddingTop: '50px', paddingLeft: '50px' }}>
          <ChartDonut
            data={[
              { x: 'Cats', y: 35 },
              { x: 'Dogs', y: 55 },
              { x: 'Birds', y: 10 }
            ]}
            height={275}
            labels={({ datum }) => `${datum.x}: ${datum.y}%`}
            legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
            legendPosition="bottom"
            subTitle="Pets"
            title="100"
            width={300}
          />
        </div>
      </div>
    );
  }
}
