---
id: Bar chart
section: charts
propComponents: [
  'Chart',
  'ChartAxis',
  'ChartBar',
  'ChartGroup',
  'ChartVoronoiContainer'
]
hideDarkMode: true
---

import { Chart, ChartAxis, ChartBar, ChartGroup, ChartThemeColor, ChartTooltip, ChartVoronoiContainer } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory-zoom-container';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

Learn to build a bar chart using a Katacoda tutorial starting with a simple chart, adding multiple datasets, tooltips, axis labels, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.

[Start course](https://katacoda.com/patternfly/courses/react-charts/bar-chart)

## Examples
### Basic with right aligned legend
```js
import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts';

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
    name="chart1"
    padding={{
      bottom: 50,
      left: 50,
      right: 200, // Adjusted to accommodate legend
      top: 50
    }}
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
```

### Purple with bottom aligned legend

This demonstrates an alternate way of applying tooltips using data labels.

```js
import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartGroup, ChartThemeColor, ChartTooltip } from '@patternfly/react-charts';

class EmbeddedLegend extends React.Component {
  render() {
    const label = ({ datum }) => `${datum.name}: ${datum.y}`;

    return (
      <div style={{ height: '275px', width: '450px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Bar chart example"
          domainPadding={{ x: [30, 25] }}
          legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
          legendPosition="bottom"
          height={275}
          name="chart2"
          padding={{
            bottom: 75, // Adjusted to accommodate legend
            left: 50,
            right: 50,
            top: 50
          }}
          themeColor={ChartThemeColor.purple}
          width={450}
        >
          <ChartAxis />
          <ChartAxis dependentAxis showGrid />
          <ChartGroup offset={11}>
            <ChartBar
              data={[
                { name: 'Cats', x: '2015', y: 1, label },
                { name: 'Cats', x: '2016', y: 2, label },
                { name: 'Cats', x: '2017', y: 5, label },
                { name: 'Cats', x: '2018', y: 3, label }
              ]}
              labelComponent={<ChartTooltip constrainToVisibleArea />}
            />
            <ChartBar
              data={[
                { name: 'Dogs', x: '2015', y: 2, label },
                { name: 'Dogs', x: '2016', y: 1, label },
                { name: 'Dogs', x: '2017', y: 7, label },
                { name: 'Dogs', x: '2018', y: 4, label }
              ]}
              labelComponent={<ChartTooltip constrainToVisibleArea />}
            />
            <ChartBar
              data={[
                { name: 'Birds', x: '2015', y: 4, label },
                { name: 'Birds', x: '2016', y: 4, label },
                { name: 'Birds', x: '2017', y: 9, label },
                { name: 'Birds', x: '2018', y: 7, label }
              ]}
              labelComponent={<ChartTooltip constrainToVisibleArea />}
            />
            <ChartBar
              data={[
                { name: 'Mice', x: '2015', y: 3, label },
                { name: 'Mice', x: '2016', y: 3, label },
                { name: 'Mice', x: '2017', y: 8, label },
                { name: 'Mice', x: '2018', y: 5, label }
              ]}
              labelComponent={<ChartTooltip constrainToVisibleArea />}
            />
          </ChartGroup>
        </Chart>
      </div>
    );
  }
}
```

### Multi-color (ordered) with bottom-left aligned legend

This demonstrates zoom for both the x and y axis.

```js
import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartGroup, ChartThemeColor } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory-zoom-container';

<div style={{ height: '400px', width: '450px' }}>
  <Chart
    ariaDesc="Average number of pets"
    ariaTitle="Bar chart example"
    containerComponent={<VictoryZoomContainer />}
    domainPadding={{ x: [30, 25] }}
    legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
    legendPosition="bottom-left"
    height={400}
    name="chart3"
    padding={{
      bottom: 75, // Adjusted to accommodate legend
      left: 50,
      right: 100, // Adjusted to accommodate tooltip
      top: 50
    }}
    themeColor={ChartThemeColor.multiOrdered}
    width={450}
  >
    <ChartAxis />
    <ChartAxis dependentAxis showGrid />
    <ChartGroup offset={11} horizontal>
      <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
      <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />
      <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />
      <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />
    </ChartGroup>
  </Chart>
</div>
```

### Single with right aligned legend
```js
import React from 'react';
import { Chart, ChartBar, ChartVoronoiContainer } from '@patternfly/react-charts';

<div style={{ height: '250px', width: '600px' }}>
  <Chart
    ariaDesc="Average number of pets"
    ariaTitle="Bar chart example"
    containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
    domain={{y: [0,9]}}
    domainPadding={{ x: [30, 25] }}
    legendData={[{ name: 'Cats' }]}
    legendOrientation="vertical"
    legendPosition="right"
    height={250}
    name="chart4"
    padding={{
      bottom: 50,
      left: 50,
      right: 200, // Adjusted to accommodate legend
      top: 50
    }}
    width={600}
  >
    <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />
  </Chart>
</div>
```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- `ChartLegend` may be used as a standalone component, instead of using `legendData`
- The `theme` and `themeColor` props should be applied at the most top level component
- Use `ChartGroup` to apply theme color scales and other properties to multiple components

### Note
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
- For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
- For `ChartBar` props, see [VictoryBar](https://formidable.com/open-source/victory/docs/victory-bar)
- For `ChartGroup` props, see [VictoryGroup](https://formidable.com/open-source/victory/docs/victory-group)
- For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
