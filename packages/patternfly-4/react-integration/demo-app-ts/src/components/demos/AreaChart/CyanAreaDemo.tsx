import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

export class CyanAreaDemo extends React.Component {
  render() {
    return (

      <div>
        <div style={{height: '200px', width: '800px'}}>
          <Chart
            containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} />}
            legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }]}
            legendOrientation="vertical"
            legendPosition="right"
            height={200}
            padding={{
              bottom: 50,
              left: 50,
              right: 200, // Adjusted to accomodate legend
              top: 50
            }}
            themeColor={ChartThemeColor.cyan}
            width={800}
          >
            <ChartAxis />
            <ChartAxis dependentAxis showGrid />
            <ChartGroup>
              <ChartArea
                data={[
                  { name: 'Cats', x: 1, y: 3 },
                  { name: 'Cats', x: 2, y: 4 },
                  { name: 'Cats', x: 3, y: 8 },
                  { name: 'Cats', x: 4, y: 6 }
                ]}
              />
              <ChartArea
                data={[
                  { name: 'Birds', x: 1, y: 2 },
                  { name: 'Birds', x: 2, y: 3 },
                  { name: 'Birds', x: 3, y: 4 },
                  { name: 'Birds', x: 4, y: 5 },
                  { name: 'Birds', x: 5, y: 6 }
                ]}
              />
              <ChartArea
                data={[
                  { name: 'Dogs', x: 1, y: 1 },
                  { name: 'Dogs', x: 2, y: 2 },
                  { name: 'Dogs', x: 3, y: 3 },
                  { name: 'Dogs', x: 4, y: 2 },
                  { name: 'Dogs', x: 5, y: 4 }
                ]}
              />
            </ChartGroup>
          </Chart>
        </div>
      </div>
    )
  }
}
