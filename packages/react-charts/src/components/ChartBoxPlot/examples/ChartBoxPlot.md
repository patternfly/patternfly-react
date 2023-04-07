---
id: Box plot chart
section: charts
propComponents: [
  'Chart',
  'ChartAxis',
  'ChartBoxPlot',
  'ChartCursorFlyout',
  'ChartCursorTooltip',
  'ChartVoronoiContainer'
]
hideDarkMode: true
beta: true
---

import { Chart, ChartAxis, ChartBoxPlot, ChartBoxPlotTooltip, ChartCursorFlyout, ChartCursorTooltip, ChartLegendTooltip, ChartThemeColor, ChartThreshold, ChartVoronoiContainer, createContainer } from '@patternfly/react-charts';
import { VictoryZoomContainer } from 'victory-zoom-container';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';

## Introduction
Note: PatternFly React charts live in its own package at [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts)!

PatternFly React charts are based on the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.


## Examples
### Basic with right aligned legend
```js
import React from 'react';
import { Chart, ChartAxis, ChartBoxPlot } from '@patternfly/react-charts';

<div style={{ height: '300px', width: '750px' }}>
  <Chart
    ariaDesc="Average number of pets"
    ariaTitle="Bar chart example"
    domain={{y: [0, 12]}}
    domainPadding={{ x: [30, 25] }}
    legendData={[{ name: 'Cats' }]}
    legendOrientation="vertical"
    legendPosition="right"
    height={300}
    name="chart3"
    padding={{
      bottom: 50,
      left: 50,
      right: 200, // Adjusted to accommodate legend
      top: 50
    }}
    themeColor={ChartThemeColor.blue}
    width={750}
  >
    <ChartAxis />
    <ChartAxis dependentAxis showGrid />
    <ChartBoxPlot
      data={[
        { name: 'Cats', x: '2015', y: [1, 2, 3, 5] },
        { name: 'Cats', x: '2016', y: [3, 2, 8, 10] },
        { name: 'Cats', x: '2017', y: [2, 8, 6, 5] },
        { name: 'Cats', x: '2018', y: [1, 3, 2, 9] }
      ]}
    />
  </Chart>
</div>
```

### Labels with bottom aligned legend

This demonstrates how to display labels.

```js
import React from 'react';
import { Chart, ChartAxis, ChartBoxPlot } from '@patternfly/react-charts';

<div style={{ height: '300px', width: '600px' }}>
  <Chart
    ariaDesc="Average number of pets"
    ariaTitle="Bar chart example"
    domain={{y: [0, 12]}}
    domainPadding={{ x: [30, 25] }}
    legendData={[{ name: 'Cats' }]}
    legendPosition="bottom"
    height={300}
    name="chart2"
    padding={{
      bottom: 75, // Adjusted to accommodate legend
      left: 50,
      right: 50,
      top: 50
    }}
    themeColor={ChartThemeColor.gold}
    width={600}
  >
  <ChartAxis />
  <ChartAxis dependentAxis showGrid />
  <ChartBoxPlot 
    data={[
      { name: 'Cats', x: '2015', y: [1, 2, 3, 5] },
      { name: 'Cats', x: '2016', y: [3, 2, 8, 10] },
      { name: 'Cats', x: '2017', y: [2, 8, 6, 5] },
      { name: 'Cats', x: '2018', y: [1, 3, 2, 9] }
    ]}
    labelOrientation={{
      min: "right",
      max: "right",
    }}
    maxLabels
    minLabels
  />
  </Chart>
</div>
```

### Embedded legend

This demonstrates how to embed a legend within a tooltip. Combining cursor and voronoi containers is required to display tooltips with a vertical cursor.

```js
import React from 'react';
import { Chart, ChartAxis, ChartBoxPlot, ChartLegendTooltip, ChartThemeColor, ChartThreshold, createContainer } from '@patternfly/react-charts';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';

class EmbeddedLegend extends React.Component {
  render() {
    // Note: Container order is important
    const CursorVoronoiContainer = createContainer("voronoi", "cursor");
    const legendData = [
      { childName: 'cats', name: 'Cats' },
      {
        childName: 'limit',
        name: 'Limit',
        symbol: { fill: chart_color_orange_300.var, type: 'threshold' }
      },
    ];
    const labelFormatter = (datum) => {
      // With box plot data, datum.y will also be an array
      if (datum && (datum._min || datum._median || datum._max || datum._q1 || datum._q3)) {
        return `q1: ${datum._q1}, q3: ${datum._q3}`;
      }
      return `${datum.y !== null ? datum.y : 'no data'}`;
    }
    return (
      <div style={{ height: '350px', width: '600px' }}>
        <Chart
          ariaDesc="Average number of pets - possibly more information to summarize the data in the chart."
          ariaTitle="Embedded legend example chart title"
          containerComponent={
            <CursorVoronoiContainer
              cursorDimension="x"
              labels={({ datum }) => labelFormatter(datum)}
              labelComponent={
                <ChartLegendTooltip
                  boxPlotData={{
                    max: { label: 'max' },
                    median: { label: 'mdn' },
                    min: { label: 'min' },
                    q1: { label: 'q1', isVisible: false },
                    q3: { label: 'q3', isVisible: false }
                  }}
                  legendData={legendData}
                  title={(datum) => datum.x}
                />
              }
              mouseFollowTooltips
              voronoiDimension="x"
              voronoiPadding={50}
            />
          }
          domain={{y: [0, 13]}}
          domainPadding={{ x: [30, 25] }}
          legendData={legendData}
          legendPosition="bottom"
          height={350}
          name="chart5"
          padding={{
            bottom: 75, // Adjusted to accommodate legend
            left: 50,
            right: 50,
            top: 50
          }}
          themeColor={ChartThemeColor.green}
          width={600}
        >
          <ChartAxis />
          <ChartAxis dependentAxis showGrid />
          <ChartBoxPlot
            data={[
              { name: 'Cats', x: '2015', y: [1, 2, 3, 5] },
              { name: 'Cats', x: '2016', y: [3, 2, 8, 10] },
              { name: 'Cats', x: '2017', y: [2, 8, 6, 5] },
              { name: 'Cats', x: '2018', y: [1, 3, 2, 9] }
            ]}
            name="cats"
          />
          <ChartThreshold
            data={[
              { name: 'Limit', x: '2015', y: 12 },
              { name: 'Limit', x: '2016', y: 12 },
              { name: 'Limit', x: '2017', y: 12 },
              { name: 'Limit', x: '2018', y: 12 }
            ]}
            name="limit"
            style={{
              data: {
                stroke: chart_color_orange_300.var
              }
            }}
          />
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
import { Chart, ChartAxis, ChartBoxPlot, ChartCursorFlyout, ChartCursorTooltip, ChartThemeColor, createContainer } from '@patternfly/react-charts';

class EmbeddedHtml extends React.Component {
  constructor(props) {
    super(props);
    this.baseStyles = {
      color: '#f0f0f0',
      fontFamily: 'RedHatText, Overpass, overpass, helvetica, arial, sans-serif',
      fontSize: '14px'
    };
    this.leftColumn = {
      paddingLeft: '10px',
      width: '50%'
    }
    this.rightColumn = {
      paddingRight: '20px',
      textAlign: 'right',
      width: '50%'
    }
  }

  render() {
    // Note: Container order is important
    const CursorVoronoiContainer = createContainer("voronoi", "cursor");
    const legendData = [{ name: 'Cats' }];

    // Custom HTML component to create a legend layout
    const HtmlLegendContent = ({datum, text, title, x, y, ...rest}) => (
      <g>
        <foreignObject height="100%" width="100%" x={x - 30} y={y - 62} >
          <table>
            <thead>
              <tr>
                <th colSpan={2} style={{...this.baseStyles, ...this.leftColumn, fontWeight: 700}}>{title(datum)}</th>
              </tr>
            </thead>
            <tbody>
              <tr style={this.baseStyles}>
                <td style={this.leftColumn}>Max</td>
                <td style={this.rightColumn}>{datum._max}</td>
              </tr>
              <tr style={this.baseStyles}>
                <td style={this.leftColumn}>Median</td>
                <td style={this.rightColumn}>{datum._median}</td>
              </tr>
              <tr style={this.baseStyles}>
                <td style={this.leftColumn}>Min</td>
                <td style={this.rightColumn}>{datum._min}</td>
              </tr>
              <tr style={this.baseStyles}>
                <td style={this.leftColumn}>Q1</td>
                <td style={this.rightColumn}>{datum._q1}</td>
              </tr>
              <tr style={this.baseStyles}>
                <td style={this.leftColumn}>Q3</td>
                <td style={this.rightColumn}>{datum._q3}</td>
              </tr>
            </tbody>
          </table>
        </foreignObject>
      </g>
    );

    return (
      <div style={{ height: '300px', width: '600px' }}>
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
                  flyoutHeight={145}
                  flyoutWidth={110}
                  labelComponent={<HtmlLegendContent title={(datum) => datum.x} />}
                />
              }
              mouseFollowTooltips
              voronoiDimension="x"
              voronoiPadding={50}
            />
          }
          domain={{y: [0, 12]}}
          domainPadding={{ x: [30, 25] }}
          legendData={legendData}
          legendPosition="bottom"
          height={300}
          name="chart4"
          padding={{
            bottom: 75, // Adjusted to accommodate legend
            left: 50,
            right: 50,
            top: 50,
          }}
          maxDomain={{y: 9}}
          themeColor={ChartThemeColor.orange}
          width={600}
        >
          <ChartAxis />
          <ChartAxis dependentAxis showGrid />
          <ChartBoxPlot 
            data={[
              { name: 'Cats', x: '2015', y: [1, 2, 3, 5] },
              { name: 'Cats', x: '2016', y: [3, 2, 8, 10] },
              { name: 'Cats', x: '2017', y: [2, 8, 6, 5] },
              { name: 'Cats', x: '2018', y: [1, 3, 2, 9] }
            ]}
          />
        </Chart>
      </div>
    );
  }
}
```

## Documentation
### Tips
- See Victory's [FAQ](https://formidable.com/open-source/victory/docs/faq)
- For single data points or zero values, you may want to set the `domain` prop
- The `theme` and `themeColor` props should be applied at the most top level component

### Note
Currently, the generated documentation below is not able to resolve type definitions from Victory imports. For the 
components used in the examples above, Victory pass-thru props are also documented here:

- For `Chart` props, see [VictoryChart](https://formidable.com/open-source/victory/docs/victory-chart)
- For `ChartAxis` props, see [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis)
- For `ChartBoxPlot` props, see [VictoryBoxPlot](https://formidable.com/open-source/victory/docs/victory-box-plot)
- For `ChartVoronoiContainer` props, see [VictoryVoronoiContainer](https://formidable.com/open-source/victory/docs/victory-voronoi-container)
