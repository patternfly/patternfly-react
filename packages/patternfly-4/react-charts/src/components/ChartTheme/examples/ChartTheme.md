---
title: 'Themed charts'
section: 'charts'
typescript: true
propComponents: [
  'ChartTheme',
  'ChartThemeColor',
  'ChartThemeVariant'
]
---

import { Chart, ChartArea, ChartAxis, ChartBar, ChartDonut, ChartGroup, ChartLegend, ChartLine, ChartStack, ChartThemeColor, ChartThemeVariant, ChartVoronoiContainer, getCustomTheme } from '@patternfly/react-charts';
import {
  chart_color_blue_300,
  chart_color_green_300,
  chart_color_cyan_300,
  chart_color_gold_300,
  chart_color_purple_300
} from '@patternfly/react-tokens';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
```js title=Green
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

  Green = (
  <div>
    <p>This demonstrates how to apply basic theme colors</p>
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
  </div>
)
```

```js title=Multi--color-(ordered)
import React from 'react';
import { ChartDonut, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';

  MultiColor = (
  <div>
    <p>This demonstrates how to apply theme colors for ordered charts like bar, donut, pie, and stack</p>
    <div style={{ height: '230px', width: '350px' }}>
      <ChartDonut
        ariaDesc="Average number of pets"
        ariaTitle="Donut chart example"
        constrainToVisibleArea={true}
        data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
        legendOrientation="vertical"
        legendPosition="right"
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
  </div>
)
```

```js title=Multi-color-(unordered)
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts';
// import '@patternfly/patternfly/patternfly-charts.css'; // Required for mix-blend-mode CSS property

MultiColorUnordered = (
  <div>
    <p>This demonstrates how to apply theme colors for unordered charts like area, line, and sparkline</p>
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
            interpolation="basis"
          />
          <ChartArea
            data={[
              { name: 'Dogs', x: '2015', y: 2 },
              { name: 'Dogs', x: '2016', y: 3 },
              { name: 'Dogs', x: '2017', y: 4 },
              { name: 'Dogs', x: '2018', y: 5 },
              { name: 'Dogs', x: '2019', y: 6 }
            ]}
            interpolation="basis"
          />
          <ChartArea
            data={[
              { name: 'Birds', x: '2015', y: 1 },
              { name: 'Birds', x: '2016', y: 2 },
              { name: 'Birds', x: '2017', y: 3 },
              { name: 'Birds', x: '2018', y: 2 },
              { name: 'Birds', x: '2019', y: 4 }
            ]}
            interpolation="basis"
          />
        </ChartGroup>
      </Chart>
    </div>
  </div>
)
```

```js title=Custom-colors
import React from 'react';
import { Chart, ChartAxis, ChartStack, ChartThemeColor } from '@patternfly/react-charts';

CustomColors = (
  <div>
    <p>This demonstrates an alternate way of applying custom colors to individual charts</p>
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
                symbol: { fill: chart_color_blue_300.value }
              },
              { 
                name: 'Dogs',
                symbol: { fill: chart_color_gold_300.value }
              },
              {
                name: 'Birds',
                symbol: { fill: chart_color_green_300.value }
              },
              {
                name: 'Mice',
                symbol: { fill: chart_color_purple_300.value }
              }
            ]}
          />
        }
        legendPosition="bottom-left"
        height={275}
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
            chart_color_blue_300.value,
            chart_color_gold_300.value,
            chart_color_green_300.value,
            chart_color_purple_300.value
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
  </div>
)
```

```js title=Custom-theme
import React from 'react';
import { Chart, ChartBar, ChartAxis, ChartGroup, ChartThemeColor, ChartThemeVariant, getCustomTheme } from '@patternfly/react-charts';
import {
  chart_color_blue_300,
  chart_color_green_300,
  chart_color_cyan_300,
  chart_color_gold_300,
} from '@patternfly/react-tokens';

class MultiColorChart extends React.Component {
  constructor(props) {
    super(props);

    // Colors
    this.colorScale = [
      chart_color_blue_300.value,
      chart_color_green_300.value,
      chart_color_cyan_300.value,
      chart_color_gold_300.value
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
    this.myCustomTheme = getCustomTheme(
      ChartThemeColor.default,
      ChartThemeVariant.default,
      this.themeProps
    );
  }

  render() {
    return (
      <div>
        <p>This demonstrates custom theme properties, which may be applied across multiple charts</p>
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
      </div>
    );
  }
}
```

## Documentation

- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- The `theme` and `themeColor` props should be applied at the most top level component
- Use `ChartGroup` to apply theme color scales and other properties to multiple components

Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

 - For theme props, see [VictoryTheme](https://formidable.com/open-source/victory/docs/victory-theme)
