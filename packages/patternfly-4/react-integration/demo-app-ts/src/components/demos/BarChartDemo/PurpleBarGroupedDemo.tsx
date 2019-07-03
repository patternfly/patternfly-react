import React from 'react';
import { Chart, ChartBar, ChartGroup, ChartThemeColor, ChartVoronoiContainer, ChartAxis } from '@patternfly/react-charts';


export class PurpleBarGroupedDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <div style={{width: '600px', height: '250px', paddingLeft: '50px'}}>
          <Chart
            containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} />}
            domainPadding={{ x: [30, 25] }}
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
            themeColor={ChartThemeColor.purple}
            width={600}
          >
            <ChartAxis />
            <ChartAxis dependentAxis showGrid />
            <ChartGroup offset={11}>
              <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
              <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
              <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
              <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
            </ChartGroup>
          </Chart>
        </div>
      </div>
    )
  }
}
