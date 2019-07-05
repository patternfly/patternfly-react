import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

export class DonutSmallRightAlignedLegendDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <div style={{height: '175px', width: '275px', paddingTop: '50px', paddingLeft: '50px'}}>
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
