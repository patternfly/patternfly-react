---
id: Accessible chart
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

import { Chart, ChartAxis, ChartBar, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory-zoom-container';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.


## Examples
### Bar chart with right aligned legend

This demo demonstrate the accessibility function in a Bar chart. You can now focus on the whole chart or the contents in the chart. At the same time, you could use screen reader like VoiceOver to read the chart and contents as you defined in format.

```js
import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts';

function BasicWithRightAlignedLegend() {
  const data = {
    cat: [
      { name: 'Cats', x: '2015', y: 1 },
      { name: 'Cats', x: '2016', y: 2 },
      { name: 'Cats', x: '2017', y: 5 },
      { name: 'Cats', x: '2018', y: 3 }
    ],
    dog: [
      { name: 'Dogs', x: '2015', y: 2 },
      { name: 'Dogs', x: '2016', y: 1 },
      { name: 'Dogs', x: '2017', y: 7 },
      { name: 'Dogs', x: '2018', y: 4 }
    ],
    birds: [
      { name: 'Birds', x: '2015', y: 4 },
      { name: 'Birds', x: '2016', y: 4 },
      { name: 'Birds', x: '2017', y: 9 },
      { name: 'Birds', x: '2018', y: 7 }
    ],
    mice: [
      { name: 'Mice', x: '2015', y: 3 },
      { name: 'Mice', x: '2016', y: 3 },
      { name: 'Mice', x: '2017', y: 8 },
      { name: 'Mice', x: '2018', y: 5 }
    ]
  };
  const ariaLabelTemplate = datum => `There are ${datum.y} ${datum.name} in ${datum.x}`;
  return (
    <div style={{ height: '250px', width: '600px' }}>
      <Chart
        ariaDesc="Average number of pets"
        ariaTitle="Accessible Bar chart example"
        containerComponent={
          <ChartVoronoiContainer
            role="group"
            tabIndex={0}
            labels={({ datum }) => `${datum.name}: ${datum.y}`}
            constrainToVisibleArea
          />
        }
        domain={{ y: [0, 9] }}
        domainPadding={{ x: [30, 25] }}
        legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
        legendOrientation="vertical"
        legendPosition="right"
        height={250}
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
          <ChartBar data={data.cat} ariaLabel={({datum}) => ariaLabelTemplate(datum)} />
          <ChartBar data={data.dog} ariaLabel={({datum}) => ariaLabelTemplate(datum)} />
          <ChartBar data={data.birds} ariaLabel={({datum}) => ariaLabelTemplate(datum)} />
          <ChartBar data={data.mice} ariaLabel={({datum}) => ariaLabelTemplate(datum)} />
        </ChartGroup>
      </Chart>
    </div>
  );
}
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
