---
id: Skeletons
section: charts
propComponents: [
  'Chart',
  'ChartArea',
  'ChartAxis',
  'ChartBar',
  'ChartBoxPlot',
  'ChartBullet',
  'ChartDonut',
  'ChartDonutThreshold',
  'ChartDonutUtilization',
  'ChartLegend',
  'ChartLine',
  'ChartGroup',
  'ChartPie',
  'ChartScatter',
  'ChartStack',
  'ChartThreshold',
  'ChartVoronoiContainer'
]
hideDarkMode: true
---

import { useState } from 'react';
import { Chart, ChartArea, ChartAxis, ChartBar, ChartBoxPlot, ChartBullet, ChartDonut, ChartDonutThreshold, ChartDonutUtilization, ChartLegend, ChartLine, ChartGroup, ChartPie, ChartScatter, ChartStack, ChartThemeColor, ChartThreshold, ChartVoronoiContainer } from '@patternfly/react-charts/victory';
import { getResizeObserver } from '@patternfly/react-core';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Area chart
```ts file = "SkeletonsAreaChart.tsx"

```

### Bar chart
```ts file = "SkeletonsBarChart.tsx"

```

### Box plot chart
```ts file = "SkeletonsBoxPlotChart.tsx"

```

### Bullet chart
```ts file = "SkeletonsBulletChart.tsx"

```

### Donut chart
```ts file = "SkeletonsDonutChart.tsx"

```

### Donut utilization chart
```ts file = "SkeletonsDonutUtilizationChart.tsx"

```

### Donut utilization threshold
```js
import { Switch } from '@patternfly/react-core';
import { Chart, ChartAxis, ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts/victory';

export const ChartDonutUtilizationSkeleton: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <>
      <Switch
        id="donut-utilization-threshold-skeleton-switch"
        label="Enable skeleton"
        isChecked={isChecked}
        onChange={handleChange}
      />
      <div style={{ height: '230px', width: '230px' }}>
        <ChartDonutThreshold 
          ariaDesc="Storage capacity"
          ariaTitle="Donut utilization chart with static threshold example"
          constrainToVisibleArea
          data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
          labels={({ datum }) => datum.x ? datum.x : null}
          name="chart7"
          themeColor={isChecked ? ChartThemeColor.skeleton : ChartThemeColor.blue}
        >
          <ChartDonutUtilization 
            data={{ x: 'Storage capacity', y: 45 }}
            labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
            subTitle="of 100 GBps"
            title="45%"
          />
        </ChartDonutThreshold>
      </div>
    </>
  );
}
```

### Line chart
```js
import { Switch } from '@patternfly/react-core';
import { Chart, ChartVoronoiContainer, ChartGroup, ChartAxis, ChartLine, ChartThemeColor } from '@patternfly/react-charts/victory';

export const ChartLineSkeleton: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <>
      <Switch
        id="line-skeleton-switch"
        label="Enable skeleton"
        isChecked={isChecked}
        onChange={handleChange}
      />
      <div style={{ height: '250px', width: '600px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Line chart example"
          containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
          legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
          legendOrientation="vertical"
          legendPosition="right"
          height={250}
          maxDomain={{y: 10}}
          minDomain={{y: 0}}
          name="chart8"
          padding={{
            bottom: 50,
            left: 50,
            right: 200, // Adjusted to accommodate legend
            top: 50
          }}
          themeColor={isChecked ? ChartThemeColor.skeleton : ChartThemeColor.blue}
          width={600}
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
                { name: 'Mice', x: '2016', y: 3 },
                { name: 'Mice', x: '2017', y: 8 },
                { name: 'Mice', x: '2018', y: 7 }
              ]}
            />
          </ChartGroup>
        </Chart>
      </div>
    </>
  );
}
```

### Pie chart
```js
import { Switch } from '@patternfly/react-core';
import { Chart, ChartAxis, ChartPie, ChartThemeColor } from '@patternfly/react-charts/victory';

export const ChartPieSkeleton: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <>
      <Switch
        id="pie-skeleton-switch"
        label="Enable skeleton"
        isChecked={isChecked}
        onChange={handleChange}
      />
      <div style={{ height: '230px', width: '350px' }}>
        <ChartPie
          ariaDesc="Average number of pets"
          ariaTitle="Pie chart example"
          constrainToVisibleArea
          data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
          height={230}
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
          legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
          legendOrientation="vertical"
          legendPosition="right"
          name="chart9"
          padding={{
            bottom: 20,
            left: 20,
            right: 140, // Adjusted to accommodate legend
            top: 20
          }}
          themeColor={isChecked ? ChartThemeColor.skeleton : ChartThemeColor.blue}
          width={350}
        />
      </div>
    </>
  );
}
```

### Scatter chart
```js
import { Switch } from '@patternfly/react-core';
import { Chart, ChartVoronoiContainer, ChartGroup, ChartAxis, ChartScatter, ChartThemeColor } from '@patternfly/react-charts/victory';

export const ChartScatterSkeleton: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <>
      <Switch
        id="scatter-skeleton-switch"
        label="Enable skeleton"
        isChecked={isChecked}
        onChange={handleChange}
      />
      <div style={{ height: '275px', width: '450px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Scatter chart example"
          containerComponent={
            <ChartVoronoiContainer
              labels={({ datum }) => `${datum.name}: ${datum.y}`}
              constrainToVisibleArea
            />
          }
          height={275}
          maxDomain={{y: 8}}
          minDomain={{y: 0}}
          name="chart10"
          themeColor={isChecked ? ChartThemeColor.skeleton : ChartThemeColor.blue}
          width={450}
        >
          <ChartAxis />
          <ChartAxis dependentAxis showGrid tickValues={[2, 4, 6]} />
          <ChartGroup>
            <ChartScatter
              data={[
                { name: 'Cats', x: '2015', y: 1 },
                { name: 'Cats', x: '2016', y: 2 },
                { name: 'Cats', x: '2017', y: 5 },
                { name: 'Cats', x: '2018', y: 4 }
              ]}
            />
          </ChartGroup>
        </Chart>
      </div>
    </>
  );
}
```

### Stack chart
```js
import { Switch } from '@patternfly/react-core';
import { Chart, ChartVoronoiContainer, ChartAxis, ChartStack, ChartBar, ChartThemeColor } from '@patternfly/react-charts/victory';

export const ChartStackSkeleton: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <>
      <Switch
        id="stack-skeleton-switch"
        label="Enable skeleton"
        isChecked={isChecked}
        onChange={handleChange}
      />
      <div style={{ height: '250px', width: '600px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Stack chart example"
          containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
          domainPadding={{ x: [30, 25] }}
          legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
          legendOrientation="vertical"
          legendPosition="right"
          height={250}
          name="chart11"
          padding={{
            bottom: 50,
            left: 50,
            right: 200, // Adjusted to accommodate legend
            top: 50
          }}
          themeColor={isChecked ? ChartThemeColor.skeleton : ChartThemeColor.blue}
          width={600}
        >
          <ChartAxis />
          <ChartAxis dependentAxis showGrid />
          <ChartStack>
            <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
            <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
            <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
            <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
          </ChartStack>
        </Chart>
      </div>
    </>
  );
}
```

### Threshold chart
```js
import { Switch } from '@patternfly/react-core';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartLegend, ChartThemeColor, ChartThreshold, ChartVoronoiContainer } from '@patternfly/react-charts/victory';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';

export const ChartThresholdSkeleton: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <>
      <Switch
        id="threshold-skeleton-switch"
        label="Enable skeleton"
        isChecked={isChecked}
        onChange={handleChange}
      />
      <div style={{ height: '250px', width: '800px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Area chart example"
          containerComponent={
            <ChartVoronoiContainer
              labels={({ datum }) => `${datum.name}: ${datum.y}`}
              constrainToVisibleArea
            />
          }
          legendPosition="bottom-left"
          legendComponent={
            <ChartLegend
              data={[
                { name: 'Cats' },
                { name: 'Birds' },
                {
                  name: 'Threshold',
                  symbol: { fill: isChecked ? undefined : chart_color_blue_300.var, type: 'threshold' }
                }
              ]}
              gutter={isChecked ? 50 : undefined}
            />
          }
          height={250}
          padding={{
            bottom: 100, // Adjusted to accommodate legend
            left: 50,
            right: 50,
            top: 50
          }}
          maxDomain={{ y: 9 }}
          name="chart12"
          themeColor={isChecked ? ChartThemeColor.skeleton : ChartThemeColor.blue}
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
              interpolation="monotoneX"
            />
            <ChartArea
              data={[
                { name: 'Birds', x: 1, y: 2 },
                { name: 'Birds', x: 2, y: 3 },
                { name: 'Birds', x: 3, y: 4 },
                { name: 'Birds', x: 4, y: 5 },
                { name: 'Birds', x: 5, y: 6 }
              ]}
              interpolation="monotoneX"
            />
          </ChartGroup>
          <ChartThreshold
            data={[
              { name: 'Cats Threshold', x: 0, y: 5 },
              { name: 'Cats Threshold', x: 3, y: 5},
              { name: 'Cats Threshold', x: 3, y: 7 },
              { name: 'Cats Threshold', x: 5, y: 7 }
            ]}
            style={{
              data: {
                stroke: isChecked ? undefined : chart_color_blue_300.var
              }
            }}
          />
        </Chart>
      </div>
    </>
  );
}
```

## Documentation
### Tips
- It's best for skeletons not to include interactions such as tooltips, cursors, interactive legends, etc.
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- `ChartLegend` may be used as a standalone component, instead of using `legendData`
- The `theme` and `themeColor` props should be applied at the most top level component
- Use `ChartGroup` to apply theme color scales and other properties to multiple components

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
- For `ChartArea` props, see [VictoryArea](https://formidable.com/open-source/victory/docs/victory-area)
- For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
- For `ChartBar` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
- For `ChartBoxPlot` props, see [VictoryBoxPlot](https://formidable.com/open-source/victory/docs/victory-box-plot)
- For `ChartBullet` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
- For `ChartDonut` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartDonutThreshold` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartDonutUtilization` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartLine` props, see [Victoryline](https://formidable.com/open-source/victory/docs/victory-line)
- For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
- For `ChartPie` props, see [VictoryPie](https://formidable.com/open-source/victory/docs/victory-pie)
- For `ChartScatter` props, see [VictoryScatter](https://formidable.com/open-source/victory/docs/victory-scatter)
- For `ChartStack` props, see [VictoryStack](https://formidable.com/open-source/victory/docs/victory-stack)
- For `ChartThreshold` props, see [VictoryLine](https://formidable.com/open-source/victory/docs/victory-line)
- For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
