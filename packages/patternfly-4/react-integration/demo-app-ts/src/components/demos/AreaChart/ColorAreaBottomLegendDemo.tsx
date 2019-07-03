import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

export class ColorAreaBottomLegendDemo extends React.Component {
render() {
  return (
    <div>
      <div style={{height: '225px', width: '650px'}}>
        <Chart
          containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} />}
          legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }]}
          legendPosition="bottom"
          height={225}
          padding={{
            bottom: 75, // Adjusted to accomodate legend
            left: 50,
            right: 50,
            top: 50,
          }}
          themeColor={ChartThemeColor.multi}
          width={650}
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
