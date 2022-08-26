---
id: Themes
section: charts
hideDarkMode: true
---

import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartDonut,
  ChartGroup,
  ChartLegend,
  ChartLine,
  ChartStack,
  ChartThemeColor,
  ChartThreshold,
  ChartTooltip,
  ChartVoronoiContainer,
  mergeTheme
} from '@patternfly/react-charts';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_cyan_300 from '@patternfly/react-tokens/dist/esm/chart_color_cyan_300';
import chart_color_gold_300 from '@patternfly/react-tokens/dist/esm/chart_color_gold_300';
import chart_color_purple_300 from '@patternfly/react-tokens/dist/esm/chart_color_purple_300';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Green

This demonstrates how to apply basic theme colors.

```js
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

<div style={{ height: '275px', width: '450px' }}>
  <Chart
    ariaDesc="Average number of pets"
    ariaTitle="Line chart example"
    containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
    legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
    legendPosition="bottom"
    height={275}
    maxDomain={{y: 10}}
    minDomain={{y: 0}}
    name="chart1"
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
          { name: 'Mice', x: '2016', y: 3 },
          { name: 'Mice', x: '2017', y: 8 },
          { name: 'Mice', x: '2018', y: 7 }
        ]}
      />
    </ChartGroup>
  </Chart>
</div>
```

### Multi-color (ordered)

This demonstrates how to apply theme colors for ordered charts like bar, donut, pie, and stack.

```js
import React from 'react';
import { ChartDonut, ChartThemeColor } from '@patternfly/react-charts';

<div style={{ height: '230px', width: '350px' }}>
  <ChartDonut
    ariaDesc="Average number of pets"
    ariaTitle="Donut chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
    legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
    legendOrientation="vertical"
    legendPosition="right"
    name="chart2"
    padding={{
      bottom: 20,
      left: 20,
      right: 140, // Adjusted to accommodate legend
      top: 20
    }}
    subTitle="Pets"
    title="100"
    themeColor={ChartThemeColor.multiOrdered}
    width={350}
  />
</div>
```

### Multi color (unordered)

This demonstrates how to apply theme colors for unordered charts like area, line, and sparkline.

```js
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts';
// import '@patternfly/patternfly/patternfly-charts.css'; // Required for mix-blend-mode CSS property

<div style={{ height: '200px', width: '800px' }}>
  <Chart
    ariaDesc="Average number of pets"
    ariaTitle="Area chart example"
    containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
    legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
    legendOrientation="vertical"
    legendPosition="right"
    height={200}
    maxDomain={{y: 9}}
    name="chart3"
    padding={{
      bottom: 50,
      left: 50,
      right: 200, // Adjusted to accommodate legend
      top: 50
    }}
    themeColor={ChartThemeColor.multiUnordered}
    width={800}
  >
    <ChartAxis />
    <ChartAxis dependentAxis showGrid/>
    <ChartGroup>
      <ChartArea
        data={[
          { name: 'Cats', x: '2015', y: 3 },
          { name: 'Cats', x: '2016', y: 4 },
          { name: 'Cats', x: '2017', y: 8 },
          { name: 'Cats', x: '2018', y: 6 }
        ]}
        interpolation="monotoneX"
      />
      <ChartArea
        data={[
          { name: 'Dogs', x: '2015', y: 2 },
          { name: 'Dogs', x: '2016', y: 3 },
          { name: 'Dogs', x: '2017', y: 4 },
          { name: 'Dogs', x: '2018', y: 5 },
          { name: 'Dogs', x: '2019', y: 6 }
        ]}
        interpolation="monotoneX"
      />
      <ChartArea
        data={[
          { name: 'Birds', x: '2015', y: 1 },
          { name: 'Birds', x: '2016', y: 2 },
          { name: 'Birds', x: '2017', y: 3 },
          { name: 'Birds', x: '2018', y: 2 },
          { name: 'Birds', x: '2019', y: 4 }
        ]}
        interpolation="monotoneX"
      />
    </ChartGroup>
  </Chart>
</div>
```

### Custom color scale

This demonstrates an alternate way of applying a custom color scale and fill colors to individual charts.

```js
import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartLegend, ChartStack, ChartThemeColor, ChartTooltip } from '@patternfly/react-charts';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_gold_300 from '@patternfly/react-tokens/dist/esm/chart_color_gold_300';
import chart_color_purple_300 from '@patternfly/react-tokens/dist/esm/chart_color_purple_300';

<div style={{ height: '275px', width: '450px' }}>
  <Chart
    ariaDesc="Average number of pets"
    ariaTitle="Stack chart example"
    domainPadding={{ x: [30, 25] }}
    legendComponent={
      <ChartLegend
        data={[
          {
            name: 'Cats',
            symbol: { fill: chart_color_blue_300.var }
          },
          {
            name: 'Dogs',
            symbol: { fill: chart_color_gold_300.var }
          },
          {
            name: 'Birds',
            symbol: { fill: chart_color_green_300.var }
          },
          {
            name: 'Mice',
            symbol: { fill: chart_color_purple_300.var }
          }
        ]}
      />
    }
    legendPosition="bottom-left"
    height={275}
    name="chart4"
    padding={{
      bottom: 75, // Adjusted to accommodate legend
      left: 50,
      right: 50,
      top: 50
    }}
    themeColor={ChartThemeColor.multiOrdered}
    width={450}
  >
    <ChartAxis />
    <ChartAxis dependentAxis showGrid />
    <ChartStack
      horizontal
      colorScale={[
        chart_color_blue_300.var,
        chart_color_gold_300.var,
        chart_color_green_300.var,
        chart_color_purple_300.var
      ]}
    >
      <ChartBar
        data={[
          { name: 'Cats', x: '2015', y: 1, label: 'Cats: 1' },
          { name: 'Cats', x: '2016', y: 2, label: 'Cats: 2' },
          { name: 'Cats', x: '2017', y: 5, label: 'Cats: 5' },
          { name: 'Cats', x: '2018', y: 3, label: 'Cats: 3' }
        ]}
        labelComponent={<ChartTooltip constrainToVisibleArea />}
      />
      <ChartBar
        data={[
          { name: 'Dogs', x: '2015', y: 2, label: 'Dogs: 2' },
          { name: 'Dogs', x: '2016', y: 1, label: 'Dogs: 1' },
          { name: 'Dogs', x: '2017', y: 7, label: 'Dogs: 7' },
          { name: 'Dogs', x: '2018', y: 4, label: 'Dogs: 4' }
        ]}
        labelComponent={<ChartTooltip constrainToVisibleArea />}
      />
      <ChartBar
        data={[
          { name: 'Birds', x: '2015', y: 4, label: 'Birds: 4' },
          { name: 'Birds', x: '2016', y: 4, label: 'Birds: 4' },
          { name: 'Birds', x: '2017', y: 9, label: 'Birds: 9' },
          { name: 'Birds', x: '2018', y: 7, label: 'Birds: 7' }
        ]}
        labelComponent={<ChartTooltip constrainToVisibleArea />}
      />
      <ChartBar
        data={[
          { name: 'Mice', x: '2015', y: 3, label: 'Mice: 3' },
          { name: 'Mice', x: '2016', y: 3, label: 'Mice: 3' },
          { name: 'Mice', x: '2017', y: 8, label: 'Mice: 8' },
          { name: 'Mice', x: '2018', y: 5, label: 'Mice: 5' }
        ]}
        labelComponent={<ChartTooltip constrainToVisibleArea />}
      />
    </ChartStack>
  </Chart>
</div>
```

### Custom stroke color

This demonstrates an alternate way of applying custom stroke and fill colors to a threshold chart.

```js
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartThreshold, ChartVoronoiContainer } from '@patternfly/react-charts';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';

<div style={{ height: '275px', width: '450px' }}>
  <Chart
    ariaDesc="Average number of pets"
    ariaTitle="Line chart example"
    containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
    legendData={[
      { name: 'Cats' },
      { name: 'Birds' },
      { name: 'Mice' },
      { name: 'Cats Threshold', symbol: { fill: chart_color_blue_300.var, type: 'threshold' }}
    ]}
    legendPosition="bottom"
    height={275}
    maxDomain={{y: 10}}
    minDomain={{y: 0}}
    name="chart5"
    padding={{
      bottom: 75, // Adjusted to accommodate legend
      left: 50,
      right: 50,
      top: 50
    }}
    themeColor={ChartThemeColor.multiUnordered}
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
      <ChartThreshold
        data={[
          { name: 'Cats Threshold', x: '2015', y: 5 },
          { name: 'Cats Threshold', x: '2016', y: 5 },
          { name: 'Cats Threshold', x: '2016', y: 6 },
          { name: 'Cats Threshold', x: '2017', y: 6 },
          { name: 'Cats Threshold', x: '2018', y: 6 }
        ]}
        style={{
          data: {
            stroke: chart_color_blue_300.var,
          }
        }}
      />
    </ChartGroup>
  </Chart>
</div>
```

### Custom theme

This demonstrates custom theme properties, which may be applied across multiple charts.

```js
import React from 'react';
import { Chart, ChartBar, ChartAxis, ChartGroup, ChartThemeColor, ChartVoronoiContainer, mergeTheme } from '@patternfly/react-charts';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_cyan_300 from '@patternfly/react-tokens/dist/esm/chart_color_cyan_300';
import chart_color_gold_300 from '@patternfly/react-tokens/dist/esm/chart_color_gold_300';

class MultiColorChart extends React.Component {
  constructor(props) {
    super(props);

    // Colors
    this.colorScale = [
      chart_color_blue_300.var,
      chart_color_green_300.var,
      chart_color_cyan_300.var,
      chart_color_gold_300.var
    ];

    // Layout
    this.layoutProps = {
      padding: {
        bottom: 50,
        left: 50,
        right: 200, // Adjusted to accommodate legend
        top: 50
      }
    };

    // Victory theme properties only
    this.themeProps = {
      bar: {
        colorScale: this.colorScale,
        ...this.layoutProps,
      },
      chart: {
        colorScale: this.colorScale,
        ...this.layoutProps,
      },
      group: {
        colorScale: this.colorScale,
        ...this.layoutProps,
      },
      legend: {
        colorScale: this.colorScale
      }
    };

    // Applies theme color and variant to base theme
    this.myCustomTheme = mergeTheme(
      ChartThemeColor.default,
      this.themeProps
    );
  }

  render() {
    return (
      <div style={{ height: '250px', width: '600px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Bar chart example"
          containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
          domain={{y: [0,9]}}
          domainPadding={{ x: [30, 25] }}
          legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
          legendOrientation="vertical"
          legendPosition="right"
          height={250}
          name="chart6"
          theme={this.myCustomTheme}
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
    );
  }
}
```

## Documentation

### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- The `theme` and `themeColor` props should be applied at the most top level component
- Use `ChartGroup` to apply theme color scales and other properties to multiple components

### Note
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the components used in the examples above, Victory pass-thru props are also documented here:

- For theme props, see [VictoryTheme](https://formidable.com/open-source/victory/docs/victory-theme)
