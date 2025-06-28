---
id: Tooltips
section: charts
propComponents: ['ChartTooltip']
hideDarkMode: true
---

import { createRef } from 'react';
import { useRef, useState, useEffect } from 'react';
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

```js
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts/victory';

<div style={{ height: '200px', width: '800px' }}>
  <Chart
    ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
    ariaTitle="Area chart example chart title"
    containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
    legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
    legendOrientation="vertical"
    legendPosition="right"
    height={200}
    maxDomain={{y: 9}}
    name="chart1"
    padding={{
      bottom: 50,
      left: 50,
      right: 200, // Adjusted to accommodate legend
      top: 50
    }}
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

### Combined cursor and voronoi containers

This demonstrates how to combine cursor and voronoi containers to display tooltips along with a vertical cursor.

```js
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, createContainer } from '@patternfly/react-charts/victory';

class CombinedCursorVoronoiContainer extends React.Component {
  render() {
    // Note: Container order is important
    const CursorVoronoiContainer = createContainer("voronoi", "cursor");

    return (
      <div style={{ height: '275px', width: '450px' }}>
        <Chart
          ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
          ariaTitle="Line chart example chart title"
          containerComponent={
            <CursorVoronoiContainer
              cursorDimension="x"
              labels={({ datum }) => `${datum.name}: ${datum.y}`}
              mouseFollowTooltips
              voronoiDimension="x"
              voronoiPadding={50}
            />
          }
          legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}
          legendPosition="bottom"
          height={275}
          maxDomain={{y: 10}}
          minDomain={{y: 0}}
          name="chart2"
          padding={{
            bottom: 75, // Adjusted to accommodate legend
            left: 50,
            right: 50,
            top: 50
          }}
          themeColor={ChartThemeColor.orange}
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
    );
  }
}
```

### Embedded legend

This demonstrates how to embed a legend within a tooltip. Combining cursor and voronoi containers is required to display tooltips with a vertical cursor.

```js
import { Chart, ChartAxis, ChartGroup, ChartLegendTooltip, ChartLine, ChartThemeColor, createContainer } from '@patternfly/react-charts/victory';

class EmbeddedLegend extends React.Component {
  render() {
    // Note: Container order is important
    const CursorVoronoiContainer = createContainer("voronoi", "cursor");
    const legendData = [{ childName: 'cats', name: 'Cats' }, { childName: 'dogs', name: 'Dogs', symbol: { type: 'dash' }}, { childName: 'birds', name: 'Birds' }, { childName: 'mice', name: 'Mice' }];
    
    return (
      <div style={{ height: '275px', width: '450px' }}>
        <Chart
          ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
          ariaTitle="Embedded legend example chart title"
          containerComponent={
            <CursorVoronoiContainer
              cursorDimension="x"
              labels={({ datum }) => `${datum.y !== null ? datum.y : 'no data'}`}
              labelComponent={<ChartLegendTooltip legendData={legendData} title={(datum) => datum.x}/>}
              mouseFollowTooltips
              voronoiDimension="x"
              voronoiPadding={50}
            />
          }
          legendData={legendData}
          legendPosition="bottom"
          height={275}
          maxDomain={{y: 10}}
          minDomain={{y: 0}}
          name="chart3"
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
              name="cats"
            />
            <ChartLine
              data={[
                { name: 'Dogs', x: '2015', y: 2 },
                { name: 'Dogs', x: '2016', y: 1 },
                { name: 'Dogs', x: '2017', y: 7 },
                { name: 'Dogs', x: '2018', y: 4 }
              ]}
              name="dogs"
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
              name="birds"
            />
            <ChartLine
              data={[
                { name: 'Mice', x: '2015', y: 3 },
                { name: 'Mice', x: '2016', y: null },
                { name: 'Mice', x: '2017', y: 8 },
                { name: 'Mice', x: '2018', y: 7 }
              ]}
              name="mice"
            />
          </ChartGroup>
        </Chart>
      </div>
    );
  }
}
```

### Embedded HTML

This demonstrates how to embed HTML within a tooltip. Combining cursor and voronoi containers is required to display tooltips with a vertical cursor.

```js
import { Chart, ChartArea, ChartAxis, ChartCursorTooltip, ChartGroup, ChartPoint, ChartThemeColor, createContainer } from '@patternfly/react-charts/victory';

class EmbeddedHtml extends React.Component {
  constructor(props) {
    super(props);
    this.baseStyles = { 
      color: '#f0f0f0', 
      fontFamily: '"Red Hat Text", "RedHatText", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif',
      fontSize: '14px'
    };
  }

  render() {
    // Note: Container order is important
    const CursorVoronoiContainer = createContainer("voronoi", "cursor");
    const legendData = [{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }];

    // Custom HTML component to create a legend layout
    const HtmlLegendContent = ({datum, legendData, text, theme, title, x, y, ...rest}) => (
      <g>
        <foreignObject height="100%" width="100%" x={x - 40} y={y - 45} >
          <table>
            <thead>
              <tr>
                <th colSpan={2} style={{...this.baseStyles, fontWeight: 700}}>{title(datum)}</th>
              </tr>
            </thead>
            <tbody>
              {text.map((val, index) => (
                <tr key={`tbody-tr-${index}`} style={this.baseStyles}>
                  <th width="20px">
                    <svg height="9.74" width="9.74">
                      <g>
                        <rect
                          role="presentation"
                          shapeRendering="auto"
                          width="9.74"
                          height="9.74"
                          style={{ fill: theme.legend.colorScale[index] }}
                        >
                          {
                            <ChartPoint 
                              x={0}
                              y={0}
                              symbol={legendData[index].symbol ? legendData[index].symbol.type : 'square'}
                              size={5.6}
                            />
                          }
                        </rect>
                      </g>
                    </svg>
                  </th>
                  <td width="55px">{legendData[index].name}</td>
                  <td style={{textAlign: 'right'}}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </foreignObject>
      </g>
    );

    return (
      <div style={{ height: '225px', width: '650px' }}>
        <Chart
          ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
          ariaTitle="Embedded html example chart title"
          containerComponent={
            <CursorVoronoiContainer
              cursorDimension="x"
              labels={({ datum }) => `${datum.y !== null ? datum.y : 'no data'}`}
              labelComponent={
                <ChartCursorTooltip
                  // The offset and flyout component are not necessary here, but included for completeness
                  // centerOffset={{x: ({ center, flyoutWidth, width, offset = flyoutWidth / 2 + 10 }) => width > center.x + flyoutWidth + 10 ? offset : -offset}}
                  // flyoutComponent={<ChartCursorFlyout />}
                  flyoutHeight={110}
                  flyoutWidth={({ datum }) => datum.y === null ? 160 : 125 }
                  labelComponent={<HtmlLegendContent legendData={legendData} title={(datum) => datum.x} />}
                />
              }
              mouseFollowTooltips
              voronoiDimension="x"
              voronoiPadding={50}
            />
          }
          legendData={legendData}
          legendPosition="bottom-left"
          height={225}
          name="chart4"
          padding={{
            bottom: 75, // Adjusted to accommodate legend
            left: 50,
            right: 50,
            top: 50,
          }}
          maxDomain={{y: 9}}
          themeColor={ChartThemeColor.multiUnordered}
          width={650}
        >
          <ChartAxis />
          <ChartAxis dependentAxis showGrid />
          <ChartGroup>
            <ChartArea
              data={[
                { name: 'Cats', x: '2015', y: 3 },
                { name: 'Cats', x: '2016', y: 4 },
                { name: 'Cats', x: '2017', y: 8 },
                { name: 'Cats', x: '2018', y: 6 },
                { name: 'Cats', x: '2019', y: null }
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
    );
  }
}
```

### Embedded legend with custom font size

This demonstrates how to embed a legend within a tooltip, but with a custom font size. Combining cursor and voronoi containers is required to display tooltips with a vertical cursor.

```js
import { Chart, ChartAxis, ChartGroup, ChartLegendTooltip, ChartLegend, ChartLine, ChartLegendTooltipContent, ChartLegendTooltipLabel, ChartThemeColor, createContainer } from '@patternfly/react-charts/victory';

class EmbeddedLegendAlt extends React.Component {
  render() {
    // Note: Container order is important
    const CursorVoronoiContainer = createContainer("voronoi", "cursor");
    const legendData = [{ childName: 'cats', name: 'Cats' }, { childName: 'dogs', name: 'Dogs', symbol: { type: 'dash' }}, { childName: 'birds', name: 'Birds' }, { childName: 'mice', name: 'Mice' }];

    const legend = <ChartLegend style={{ labels: { fontSize: 20 } }} />;
    const legendTooltipLabel = <ChartLegendTooltipLabel style={{ fontSize: 20 }} />;
    const legendTooltipContent = <ChartLegendTooltipContent legendComponent={legend} titleComponent={legendTooltipLabel} />;

    return (
      <div style={{ height: '275px', width: '450px' }}>
        <Chart
          ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
          ariaTitle="Embeded legend with custom font size example chart title"
          containerComponent={
            <CursorVoronoiContainer
              cursorDimension="x"
              labels={({ datum }) => `${datum.y !== null ? datum.y : 'no data'}`}
              labelComponent={<ChartLegendTooltip labelComponent={legendTooltipContent} legendData={legendData} title={(datum) => datum.x} />}
              mouseFollowTooltips
              voronoiDimension="x"
              voronoiPadding={50}
            />
          }
          legendData={legendData}
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
          themeColor={ChartThemeColor.yellow}
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
              name="cats"
            />
            <ChartLine
              data={[
                { name: 'Dogs', x: '2015', y: 2 },
                { name: 'Dogs', x: '2016', y: 1 },
                { name: 'Dogs', x: '2017', y: 7 },
                { name: 'Dogs', x: '2018', y: 4 }
              ]}
              name="dogs"
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
              name="birds"
            />
            <ChartLine
              data={[
                { name: 'Mice', x: '2015', y: 3 },
                { name: 'Mice', x: '2016', y: null },
                { name: 'Mice', x: '2017', y: 8 },
                { name: 'Mice', x: '2018', y: 7 }
              ]}
              name="mice"
            />
          </ChartGroup>
        </Chart>
      </div>
    );
  }
}
```

### Data label

This demonstrates an alternate way of applying tooltips using data labels.

```ts file = "ChartTooltipDataLabel.tsx"

```

### Fixed tooltip
This demonstrates how to adjust the tooltip position and label radius
```ts file = "ChartTooltipFixed.tsx"

```

### Legend

This demonstrates an approach for applying tooltips to a legend using a custom legend label component.

```ts file = "ChartTooltipLegend.tsx"

```

### Left aligned

This demonstrates how to customize tooltip label alignment using theme properties.

```ts file = "ChartTooltipLeftAligned.tsx"

```

### CSS overflow

This demonstrates an alternate way of applying tooltips using CSS overflow instead of <code>constrainToVisibleArea</code>.

```ts file = "ChartTooltipCssOverflow.tsx"

```

### Wrapped chart

This demonstrates an alternate way of applying tooltips by wrapping charts with the Tooltip component.

```ts file = "ChartTooltipWrappedChart.tsx"

```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `ChartTooltip` props, see [VictoryTooltip](https://formidable.com/open-source/victory/docs/victory-tooltip)
