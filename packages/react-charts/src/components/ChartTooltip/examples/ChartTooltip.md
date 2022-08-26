---
id: Tooltips
section: charts
propComponents: ['ChartTooltip']
hideDarkMode: true
---

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
  mergeTheme
} from '@patternfly/react-charts';
import './chart-tooltip.css';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.

## Examples
### Voronoi container

This demonstrates how to use a voronoi container to display tooltips.

```js
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts';
// import '@patternfly/patternfly/patternfly-charts.css'; // Required for mix-blend-mode CSS property

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
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, createContainer } from '@patternfly/react-charts';

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
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLegendTooltip, ChartLine, ChartThemeColor, createContainer } from '@patternfly/react-charts';

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
import React from 'react';
import { Chart, ChartArea, ChartAxis, ChartCursorFlyout, ChartCursorTooltip, ChartGroup, ChartPoint, ChartThemeColor } from '@patternfly/react-charts';
// import '@patternfly/patternfly/patternfly-charts.css'; // Required for mix-blend-mode CSS property

class EmbeddedHtml extends React.Component {
  constructor(props) {
    super(props);
    this.baseStyles = { 
      color: '#f0f0f0', 
      fontFamily: 'RedHatText, Overpass, overpass, helvetica, arial, sans-serif',
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
                    <svg height="9.74" width="9.74" role="img">
                      {<ChartPoint x={0} y={0}
                         style={{ fill: theme.legend.colorScale[index] }}
                         symbol={legendData[index].symbol ? legendData[index].symbol.type : 'square'}
                         size={10}
                      />}
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
      <div ref={this.containerRef} style={{ height: '225px', width: '650px' }}>
        <Chart
          ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
          ariaTitle="Embedded html example chart title"
          containerComponent={
            <CursorVoronoiContainer
              cursorDimension="x"
              labels={({ datum }) => `${datum.y}`}
              labelComponent={
                <ChartCursorTooltip
                  centerOffset={{x: ({ center, flyoutWidth, width, offset = flyoutWidth / 2 + 10 }) => width > center.x + flyoutWidth + 10 ? offset : -offset}}
                  flyout={<ChartCursorFlyout />}
                  flyoutHeight={110}
                  flyoutWidth={125}
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
    );
  }
}
```

### Embedded legend with custom font size

This demonstrates how to embed a legend within a tooltip, but with a custom font size. Combining cursor and voronoi containers is required to display tooltips with a vertical cursor.

```js
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLegendTooltip, ChartLegend, ChartLine, ChartLegendTooltipContent, ChartLegendTooltipLabel, ChartThemeColor, createContainer } from '@patternfly/react-charts';

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
          themeColor={ChartThemeColor.gold}
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

```js
import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartStack, ChartThemeColor, ChartTooltip } from '@patternfly/react-charts';

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

### Legend

This demonstrates an approach for applying tooltips to a legend using a custom label component.

```js
import React from 'react';
import { ChartLabel, ChartLegend, ChartPie, ChartThemeColor } from '@patternfly/react-charts';
import { Tooltip } from '@patternfly/react-core';

class TooltipPieChart extends React.Component {
  constructor(props) {
    super(props);

    // Custom legend label compoenent
    this.LegendLabel = ({datum, ...rest}) => (
      <Tooltip content={datum.name} enableFlip>
        <ChartLabel {...rest} />
      </Tooltip>
    );

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
import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartVoronoiContainer, mergeTheme } from '@patternfly/react-charts';

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
    this.myCustomTheme = mergeTheme(
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
import React from 'react';
import { ChartArea, ChartContainer, ChartGroup, ChartLabel, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';

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
    </ChartGroup>
  </div>
  <ChartContainer title="CPU utilization">
    <ChartLabel text="CPU utilization" dy={15}/>
  </ChartContainer>
</div>
```

### Wrapped chart

This demonstrates an alternate way of applying tooltips by wrapping charts with the Tooltip component.

```js
import React from 'react';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';
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
Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `ChartTooltip` props, see [VictoryTooltip](https://formidable.com/open-source/victory/docs/victory-tooltip)
