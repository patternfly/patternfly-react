---
id: Tooltips
section: charts
propComponents: ['ChartTooltip']
hideDarkMode: true
---

import { createRef } from 'react';
import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartContainer,
  ChartCursorFlyout,
  ChartCursorTooltip,
  ChartDonut,
  ChartDonutThreshold,
  ChartDonutUtilization,
  ChartGroup,
  ChartLabel,
  ChartLegend,
  ChartLegendTooltip,
  ChartLegendTooltipContent,
  ChartLegendTooltipLabel,
  ChartLine,
  ChartPie,
  ChartPoint,
  ChartStack,
  ChartThemeColor,
  ChartTooltip,
  ChartVoronoiContainer,
  createContainer,
  getCustomTheme
} from '@patternfly/react-charts/victory';

<!-- Workaround for documentation-framework issue https://github.com/patternfly/patternfly-react/issues/11455
import './chart-tooltip.css';
-->

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

The examples below are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Voronoi container

This demonstrates how to use a voronoi container to display tooltips.

```ts file = "ChartTooltipVoronoi.tsx"

```

### Combined cursor and voronoi containers

This demonstrates how to combine cursor and voronoi containers to display tooltips along with a vertical cursor.

```ts file = "ChartTooltipCombinedCursorVoronoi.tsx"

```

### Embedded legend

This demonstrates how to embed a legend within a tooltip. Combining cursor and voronoi containers is required to display tooltips with a vertical cursor.

```ts file = "ChartTooltipEmbeddedLegend.tsx"

```

### Embedded HTML

This demonstrates how to embed HTML within a tooltip. Combining cursor and voronoi containers is required to display tooltips with a vertical cursor.

```ts file = "ChartTooltipEmbeddedHtml.tsx"

```

### Embedded legend with custom font size

This demonstrates how to embed a legend within a tooltip, but with a custom font size. Combining cursor and voronoi containers is required to display tooltips with a vertical cursor.

```ts file = "ChartTooltipEmbeddedCustomFontSize.tsx"

```

### Data label

This demonstrates an alternate way of applying tooltips using data labels.

```js
import { Chart, ChartAxis, ChartBar, ChartStack, ChartThemeColor, ChartTooltip } from '@patternfly/react-charts/victory';

<div style={{ height: '275px', width: '450px' }}>
  <Chart
    ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
    ariaTitle="Data label example chart title"
    domainPadding={{ x: [30, 25] }}
    legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
    legendPosition="bottom-left"
    height={275}
    name="chart6"
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
    <ChartStack horizontal>
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

### Fixed tooltip
This demonstrates how to adjust the tooltip position and label radius
```js
import { ChartDonut, ChartThemeColor, ChartTooltip } from '@patternfly/react-charts/victory';

<div style={{ height: '150px', width: '150px' }}>
  <ChartDonut
    ariaDesc="Average number of pets"
    ariaTitle="Donut chart example"
    constrainToVisibleArea
    data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
    height={150}
    labelComponent={<ChartTooltip center={{ x: 75, y: 0 }} />}
    labelRadius={46}
    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
    name="chart5"
    subTitle="Pets"
    title="100"
    themeColor={ChartThemeColor.teal}
    width={150}
  />
</div>
```

### Legend

This demonstrates an approach for applying tooltips to a legend using a custom legend label component.

```js
import { ChartLabel, ChartLegend, ChartPie, ChartThemeColor } from '@patternfly/react-charts/victory';
import { Tooltip } from '@patternfly/react-core';

class TooltipPieChart extends React.Component {
  constructor(props) {
    super(props);

    // Custom legend label component
    // Note: Tooltip wraps children with a div tag, so we add a reference to ChartLabel instead
    this.LegendLabel = ({datum, ...rest}) => {
      const ref = createRef();
      return (
        <g ref={ref}>
          <ChartLabel {...rest} />
          <Tooltip content={datum.name} enableFlip reference={ref} />
        </g>
      );
    }

    // Custom legend component
    this.getLegend = (legendData) => (
      <ChartLegend
        data={legendData}
        labelComponent={<this.LegendLabel />}
      />
    );
  }

  render() {
    return (
      <div style={{ height: '275px', width: '300px' }}>
        <ChartPie
          ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
          ariaTitle="Legend example chart title"
          constrainToVisibleArea
          data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
          height={275}
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
          legendComponent={this.getLegend([
            { name: 'Cats: 35' }, 
            { name: 'Dogs: 55' }, 
            { name: 'Birds: 10' }
          ])}
          legendPosition="bottom"
          name="chart7"
          padding={{
            bottom: 65,
            left: 20,
            right: 20,
            top: 20
          }}
          themeColor={ChartThemeColor.multiOrdered}
          width={300}
        />
      </div>
    );
  }
}
```

### Left aligned

This demonstrates how to customize tooltip label alignment using theme properties.

```js
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartVoronoiContainer, getCustomTheme } from '@patternfly/react-charts/victory';

class TooltipThemeChart extends React.Component {
  constructor(props) {
    super(props);

    // Victory theme properties only
    this.themeProps = {
      voronoi: {
        style: {
          labels: {
            textAnchor: 'start' // Align tooltip labels left
          }
        }
      }
    };

    // Applies theme color and variant to base theme
    this.myCustomTheme = getCustomTheme(
      ChartThemeColor.default,
      this.themeProps
    );
  }

  render() {
    return (
      <div style={{ height: '250px', width: '600px' }}>
        <Chart
          ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
          ariaTitle="Left aligned example chart title"
          containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea voronoiDimension="x"/>}
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
          theme={this.myCustomTheme}
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
    );
  }
}
```

### CSS overflow

This demonstrates an alternate way of applying tooltips using CSS overflow instead of <code>constrainToVisibleArea</code>.

```js
import { ChartArea, ChartGroup, ChartLabel, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts/victory';

// Workaround for documentation-framework issue https://github.com/patternfly/patternfly-react/issues/11455
const sheet = (() => {
  var style = document.createElement("style");
  document.head.appendChild(style);
  return style.sheet;
})();

sheet.insertRule(".ws-react-charts-tooltip-overflow { margin-left: 50px; margin-top: 50px; height: 135px; }", sheet.cssRules.length);
sheet.insertRule(".ws-react-charts-tooltip-overflow svg { overflow: visible; }", sheet.cssRules.length);

<div className="ws-react-charts-tooltip-overflow">
  <div style={{ height: '100px', width: '400px' }}>
    <ChartGroup
      ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
      ariaTitle="CSS overflow example chart title"
      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} />}
      height={100}
      maxDomain={{y: 9}}
      name="chart9"
      padding={0}
      themeColor={ChartThemeColor.green}
      width={400}
    >
      <ChartArea
        data={[
          { name: 'Cats', x: '2015', y: 3 },
          { name: 'Cats', x: '2016', y: 4 },
          { name: 'Cats', x: '2017', y: 8 },
          { name: 'Cats', x: '2018', y: 6 }
        ]}
      />
      <ChartLabel text="CPU utilization" dy={120}/>
    </ChartGroup>
  </div>
</div>
```

### Wrapped chart

This demonstrates an alternate way of applying tooltips by wrapping charts with the Tooltip component.

```js
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts/victory';
import { Button, Tooltip, TooltipPosition } from '@patternfly/react-core';

class TooltipChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.showTooltip = () => {
      this.setState({ isVisible: !this.state.isVisible });
    };
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div>
        <div style={{ height: '230px', width: '230px' }}>
          <Tooltip content={<div>My custom tooltip</div>} isVisible={isVisible} position={TooltipPosition.right} trigger="manual">
            <ChartDonutThreshold
              allowTooltip={false}
              ariaDesc="Storage capacity  - possibly more information to summarize the data in the chart."
              ariaTitle="Wrapped example chart title"
              data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}
              labels={() => null}
              name="chart10"
            >
              <ChartDonutUtilization
                allowTooltip={false}
                data={{ x: 'Storage capacity', y: 45 }}
                labels={() => null}
                subTitle="of 100 GBps"
                title="45%"
              />
            </ChartDonutThreshold>
          </Tooltip>
        </div>
        <div style={{ width: '230px', textAlign: 'center' }}>
          <Button onClick={this.showTooltip}>Show Tooltip</Button>
        </div>
      </div>
    );
  }
}
```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `ChartTooltip` props, see [VictoryTooltip](https://formidable.com/open-source/victory/docs/victory-tooltip)
