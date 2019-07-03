import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLegend, ChartLine, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory';


export class LineChartColorDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div style={{height: '275px', width: '450px'}}>
          <Chart
            containerComponent={<VictoryZoomContainer zoomDimension="x" />}
            legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
            legendPosition="bottom"
            height={275}
            padding={{
              bottom: 75, // Adjusted to accomodate legend
              left: 50,
              right: 50,
              top: 50
            }}
            themeColor={ChartThemeColor.multi}
            width={450}
          >
            <ChartAxis tickValues={[2, 3, 4]} />
            <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
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
          </Chart>
        </div>
      </div>
    )
  }
}
