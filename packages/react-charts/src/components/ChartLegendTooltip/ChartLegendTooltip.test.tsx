import * as React from 'react';
import { shallow } from 'enzyme';
import { Chart } from '../Chart';
import { ChartAxis } from '../ChartAxis';
import { ChartGroup } from '../ChartGroup';
import { ChartLine } from '../ChartLine';
import { ChartThemeColor } from '../ChartTheme';
import { createContainer } from '../ChartUtils';
import { ChartLegendTooltip } from './ChartLegendTooltip';

Object.values([true, false]).forEach(() => {
  test('ChartLegendTooltip', () => {
    const view = shallow(<ChartLegendTooltip text="This is a tooltip" />);
    expect(view).toMatchSnapshot();
  });
});

test('allows tooltip via container component', () => {
  const CursorVoronoiContainer = createContainer('cursor', 'voronoi');
  const legendData = [
    { name: 'Cats' },
    { name: 'Dogs', symbol: { type: 'dash' } },
    { name: 'Birds' },
    { name: 'Mice' }
  ];
  const view = shallow(
    <Chart
      ariaDesc="Average number of pets"
      containerComponent={
        <CursorVoronoiContainer
          cursorDimension="x"
          labels={({ datum }) => `${datum.y !== null ? datum.y : 'no data'}`}
          labelComponent={<ChartLegendTooltip legendData={legendData} title={datum => datum.x} />}
          mouseFollowTooltips
          voronoiDimension="x"
          voronoiPadding={50}
        />
      }
      legendData={legendData}
      legendPosition="bottom"
      height={275}
      maxDomain={{ y: 10 }}
      minDomain={{ y: 0 }}
      padding={{
        bottom: 75, // Adjusted to accommodate legend
        left: 50,
        right: 50,
        top: 50
      }}
      themeColor={ChartThemeColor.green}
      width={450}
    >
      <ChartAxis tickValues={[2, 3, 4]} />
      <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
      <ChartGroup>
        <ChartLine
          data={[
            { name: 'Cats', x: '2015', y: 1 },
            { name: 'Cats', x: '2016', y: 2 },
            { name: 'Cats', x: '2017', y: 5 },
            { name: 'Cats', x: '2018', y: 3 }
          ]}
        />
        <ChartLine
          data={[
            { name: 'Dogs', x: '2015', y: 2 },
            { name: 'Dogs', x: '2016', y: 1 },
            { name: 'Dogs', x: '2017', y: 7 },
            { name: 'Dogs', x: '2018', y: 4 }
          ]}
          style={{
            data: {
              strokeDasharray: '3,3'
            }
          }}
        />
        <ChartLine
          data={[
            { name: 'Birds', x: '2015', y: 3 },
            { name: 'Birds', x: '2016', y: 4 },
            { name: 'Birds', x: '2017', y: 9 },
            { name: 'Birds', x: '2018', y: 5 }
          ]}
        />
        <ChartLine
          data={[
            { name: 'Mice', x: '2015', y: 3 },
            { name: 'Mice', x: '2016', y: null },
            { name: 'Mice', x: '2017', y: 8 },
            { name: 'Mice', x: '2018', y: 7 }
          ]}
        />
      </ChartGroup>
    </Chart>
  );
  expect(view).toMatchSnapshot();
});
