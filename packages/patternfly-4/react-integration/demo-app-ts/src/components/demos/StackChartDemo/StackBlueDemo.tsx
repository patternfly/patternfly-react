import React from 'react';
import { Chart, ChartBar, ChartStack } from '@patternfly/react-charts';

export class StackBlueDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return(
      <div>
        <div style={{height: '250px', width: '600px'}}>
          <Chart
            legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }, { name: 'Mice' }]}
            legendOrientation="vertical"
            legendPosition="right"
            height={250}
            padding={{
              bottom: 50,
              left: 50,
              right: 200, // Adjusted to accomodate legend
              top: 50
            }}
            width={600}
          >
            <ChartStack domainPadding={{x: [10, 2]}}>
              <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
              <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
              <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
              <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
            </ChartStack>
          </Chart>
        </div>
      </div>
    )
  }
}
