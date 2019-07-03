import React from 'react';
import { Chart, ChartBar, ChartStack, ChartAxis, ChartThemeColor } from '@patternfly/react-charts';

export class StackGoldBottomLegendDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return(
      <div>
        <div style={{height: '275px', width: '450px'}}>
          <Chart
            domainPadding={{ x: [30, 25] }}
            legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }, { name: 'Mice' }]}
            legendPosition="bottom"
            height={275}
            padding={{
              bottom: 75, // Adjusted to accomodate legend
              left: 50,
              right: 50,
              top: 50
            }}
            themeColor={ChartThemeColor.gold}
            width={450}
          >
            <ChartAxis />
            <ChartAxis dependentAxis showGrid />
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
