import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';
export class DonutSmallBottomAlignedLegend extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div style={{ height: '200px', width: '300px', paddingTop: '50px', paddingLeft: '50px' }}>
          <ChartDonut
            ariaDesc="Average number of pets"
            ariaTitle="Donut chart example"
            constrainToVisibleArea
            data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
            height={200}
            labels={({ datum }) => `${datum.x}: ${datum.y}%`}
            legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
            legendPosition="bottom"
            padding={{
              bottom: 50, // Adjusted to accommodate legend
              left: 8,
              right: 50, // Adjusted to accommodate subTitle
              top: 8
            }}
            subTitle="Pets"
            subTitlePosition="right"
            title="100"
            width={300}
          />
        </div>
      </div>
    );
  }
}
