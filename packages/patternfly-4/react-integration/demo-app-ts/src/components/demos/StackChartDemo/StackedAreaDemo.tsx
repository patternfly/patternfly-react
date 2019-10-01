import React from 'react';
import {
  Chart,
  ChartArea,
  ChartGroup,
  ChartStack,
  ChartAxis,
  ChartThemeColor,
  ChartVoronoiContainer
} from '@patternfly/react-charts';

export class StackedAreaDemo extends React.Component {
  render() {
    return (
      <div>
        <div style={{ height: '225px', width: '650px' }}>
          <Chart
            containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} />}
            legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }]}
            legendPosition="bottom"
            height={225}
            padding={{
              bottom: 75, // Adjusted to accomodate legend
              left: 50,
              right: 50,
              top: 50
            }}
            maxDomain={{ y: 30 }}
            themeColor={ChartThemeColor.multiUnordered}
            width={650}
          >
            <ChartAxis />
            <ChartAxis dependentAxis showGrid />
            <ChartStack>
              <ChartArea
                data={[
                  { name: 'Cats', x: 'Sunday', y: 6 },
                  { name: 'Cats', x: 'Monday', y: 2 },
                  { name: 'Cats', x: 'Tuesday', y: 8 },
                  { name: 'Cats', x: 'Wednesday', y: 15 },
                  { name: 'Cats', x: 'Thursday', y: 6 },
                  { name: 'Cats', x: 'Friday', y: 2 },
                  { name: 'Cats', x: 'Saturday', y: 0 }
                ]}
                interpolation="basis"
              />
              <ChartArea
                data={[
                  { name: 'Birds', x: 'Sunday', y: 4 },
                  { name: 'Birds', x: 'Monday', y: 5 },
                  { name: 'Birds', x: 'Tuesday', y: 7 },
                  { name: 'Birds', x: 'Wednesday', y: 6 },
                  { name: 'Birds', x: 'Thursday', y: 10 },
                  { name: 'Birds', x: 'Friday', y: 3 },
                  { name: 'Birds', x: 'Saturday', y: 5 }
                ]}
                interpolation="basis"
              />
              <ChartArea
                data={[
                  { name: 'Dogs', x: 'Sunday', y: 8 },
                  { name: 'Dogs', x: 'Monday', y: 18 },
                  { name: 'Dogs', x: 'Tuesday', y: 14 },
                  { name: 'Dogs', x: 'Wednesday', y: 8 },
                  { name: 'Dogs', x: 'Thursday', y: 6 },
                  { name: 'Dogs', x: 'Friday', y: 8 },
                  { name: 'Dogs', x: 'Saturday', y: 12 }
                ]}
                interpolation="basis"
              />
            </ChartStack>
          </Chart>
        </div>
      </div>
    );
  }
}
