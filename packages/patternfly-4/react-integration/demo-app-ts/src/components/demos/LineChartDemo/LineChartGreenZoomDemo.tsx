import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLegend, ChartLine, ChartThemeColor } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory';

export class LineChartGreenZoomDemo extends React.Component {
  render() {
    return (

    <div>
      <div className="line-chart-inline">
        <div className="line-chart-container">
          <Chart width={1000} themeColor={ChartThemeColor.green} containerComponent={<VictoryZoomContainer zoomDimension="x" />}>
            <ChartGroup>
              <ChartLine
                data={[
                  { name: 'Cats', x: 1, y: 1 },
                  { name: 'Cats', x: 2, y: 2 },
                  { name: 'Cats', x: 3, y: 5 },
                  { name: 'Cats', x: 4, y: 3 }
                ]}
              />
              <ChartLine
                data={[
                  { name: 'Dogs', x: 1, y: 2 },
                  { name: 'Dogs', x: 2, y: 1 },
                  { name: 'Dogs', x: 3, y: 7 },
                  { name: 'Dogs', x: 4, y: 4 }
                ]}
                style={{
                  data: {
                    strokeDasharray: '3,3'
                  }
                }}
              />
              <ChartLine
                data={[
                  { name: 'Birds', x: 1, y: 3 },
                  { name: 'Birds', x: 2, y: 4 },
                  { name: 'Birds', x: 3, y: 9 },
                  { name: 'Birds', x: 4, y: 5 }
                ]}
              />
              <ChartLine
                data={[
                  { name: 'Mice', x: 1, y: 3 },
                  { name: 'Mice', x: 2, y: 3 },
                  { name: 'Mice', x: 3, y: 8 },
                  { name: 'Mice', x: 4, y: 7 }
                ]}
              />
            </ChartGroup>
            <ChartAxis tickValues={[2, 3, 4]} />
            <ChartAxis dependentAxis tickValues={[2, 5, 8]} />
          </Chart>
        </div>
        <ChartLegend
          data={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
          orientation="horizontal"
          responsive={false}
          title="Average number of pets"
          themeColor={ChartThemeColor.green}
          y={80}
        />
      </div>
    </div>
    )
  }

}
