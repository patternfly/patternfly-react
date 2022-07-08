import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
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
const pageData = {
  "id": "Themes",
  "section": "charts",
  "source": "react",
  "slug": "/charts/themes/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-charts/src/components/ChartTheme/examples/ChartTheme.md",
  "examples": [
    "Green",
    "Multi-color (ordered)",
    "Multi color (unordered)",
    "Custom color scale",
    "Custom stroke color",
    "Custom theme"
  ]
};
pageData.liveContext = {
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
  mergeTheme,
  chart_color_blue_300,
  chart_color_green_300,
  chart_color_cyan_300,
  chart_color_gold_300,
  chart_color_purple_300
};
pageData.examples = {
  'Green': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';\n\nconst Green = () => (\n  <div style={{ height: '275px', width: '450px' }}>\n    <Chart\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Line chart example\"\n      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}\n      legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}\n      legendPosition=\"bottom\"\n      height={275}\n      maxDomain={{y: 10}}\n      minDomain={{y: 0}}\n      padding={{\n        bottom: 75, // Adjusted to accommodate legend\n        left: 50,\n        right: 50,\n        top: 50\n      }}\n      themeColor={ChartThemeColor.green}\n      width={450}\n    >\n      <ChartAxis tickValues={[2, 3, 4]} />\n      <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />\n      <ChartGroup>\n        <ChartLine\n          data={[\n            { name: 'Cats', x: '2015', y: 1 },\n            { name: 'Cats', x: '2016', y: 2 },\n            { name: 'Cats', x: '2017', y: 5 },\n            { name: 'Cats', x: '2018', y: 3 }\n          ]}\n        />\n        <ChartLine\n          data={[\n            { name: 'Dogs', x: '2015', y: 2 },\n            { name: 'Dogs', x: '2016', y: 1 },\n            { name: 'Dogs', x: '2017', y: 7 },\n            { name: 'Dogs', x: '2018', y: 4 }\n          ]}\n          style={{\n            data: {\n              strokeDasharray: '3,3'\n            }\n          }}\n        />\n        <ChartLine\n          data={[\n            { name: 'Birds', x: '2015', y: 3 },\n            { name: 'Birds', x: '2016', y: 4 },\n            { name: 'Birds', x: '2017', y: 9 },\n            { name: 'Birds', x: '2018', y: 5 }\n          ]}\n        />\n        <ChartLine\n          data={[\n            { name: 'Mice', x: '2015', y: 3 },\n            { name: 'Mice', x: '2016', y: 3 },\n            { name: 'Mice', x: '2017', y: 8 },\n            { name: 'Mice', x: '2018', y: 7 }\n          ]}\n        />\n      </ChartGroup>\n    </Chart>\n  </div>\n)","title":"Green","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to apply basic theme colors.`}
      </p>
    </Example>,
  'Multi-color (ordered)': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonut, ChartThemeColor } from '@patternfly/react-charts';\n\nconst Multicolorordered = () => (\n  <div style={{ height: '230px', width: '350px' }}>\n    <ChartDonut\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Donut chart example\"\n      constrainToVisibleArea\n      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}\n      labels={({ datum }) => `${datum.x}: ${datum.y}%`}\n      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}\n      legendOrientation=\"vertical\"\n      legendPosition=\"right\"\n      padding={{\n        bottom: 20,\n        left: 20,\n        right: 140, // Adjusted to accommodate legend\n        top: 20\n      }}\n      subTitle=\"Pets\"\n      title=\"100\"\n      themeColor={ChartThemeColor.multiOrdered}\n      width={350}\n    />\n  </div>\n)","title":"Multi-color (ordered)","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to apply theme colors for ordered charts like bar, donut, pie, and stack.`}
      </p>
    </Example>,
  'Multi color (unordered)': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts';\n// import '@patternfly/patternfly/patternfly-charts.css'; // Required for mix-blend-mode CSS property\n\nconst MultiColorunordered = () => (\n  <div style={{ height: '200px', width: '800px' }}>\n    <Chart\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Area chart example\"\n      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}\n      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}\n      legendOrientation=\"vertical\"\n      legendPosition=\"right\"\n      height={200}\n      maxDomain={{y: 9}}\n      padding={{\n        bottom: 50,\n        left: 50,\n        right: 200, // Adjusted to accommodate legend\n        top: 50\n      }}\n      themeColor={ChartThemeColor.multiUnordered}\n      width={800}\n    >\n      <ChartAxis />\n      <ChartAxis dependentAxis showGrid/>\n      <ChartGroup>\n        <ChartArea\n          data={[\n            { name: 'Cats', x: '2015', y: 3 },\n            { name: 'Cats', x: '2016', y: 4 },\n            { name: 'Cats', x: '2017', y: 8 },\n            { name: 'Cats', x: '2018', y: 6 }\n          ]}\n          interpolation=\"monotoneX\"\n        />\n        <ChartArea\n          data={[\n            { name: 'Dogs', x: '2015', y: 2 },\n            { name: 'Dogs', x: '2016', y: 3 },\n            { name: 'Dogs', x: '2017', y: 4 },\n            { name: 'Dogs', x: '2018', y: 5 },\n            { name: 'Dogs', x: '2019', y: 6 }\n          ]}\n          interpolation=\"monotoneX\"\n        />\n        <ChartArea\n          data={[\n            { name: 'Birds', x: '2015', y: 1 },\n            { name: 'Birds', x: '2016', y: 2 },\n            { name: 'Birds', x: '2017', y: 3 },\n            { name: 'Birds', x: '2018', y: 2 },\n            { name: 'Birds', x: '2019', y: 4 }\n          ]}\n          interpolation=\"monotoneX\"\n        />\n      </ChartGroup>\n    </Chart>\n  </div>\n)","title":"Multi color (unordered)","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to apply theme colors for unordered charts like area, line, and sparkline.`}
      </p>
    </Example>,
  'Custom color scale': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartBar, ChartLegend, ChartStack, ChartThemeColor, ChartTooltip } from '@patternfly/react-charts';\nimport chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';\nimport chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';\nimport chart_color_gold_300 from '@patternfly/react-tokens/dist/esm/chart_color_gold_300';\nimport chart_color_purple_300 from '@patternfly/react-tokens/dist/esm/chart_color_purple_300';\n\nconst CustomColorScale = () => (\n  <div style={{ height: '275px', width: '450px' }}>\n    <Chart\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Stack chart example\"\n      domainPadding={{ x: [30, 25] }}\n      legendComponent={\n        <ChartLegend\n          data={[\n            {\n              name: 'Cats',\n              symbol: { fill: chart_color_blue_300.var }\n            },\n            {\n              name: 'Dogs',\n              symbol: { fill: chart_color_gold_300.var }\n            },\n            {\n              name: 'Birds',\n              symbol: { fill: chart_color_green_300.var }\n            },\n            {\n              name: 'Mice',\n              symbol: { fill: chart_color_purple_300.var }\n            }\n          ]}\n        />\n      }\n      legendPosition=\"bottom-left\"\n      height={275}\n      padding={{\n        bottom: 75, // Adjusted to accommodate legend\n        left: 50,\n        right: 50,\n        top: 50\n      }}\n      themeColor={ChartThemeColor.multiOrdered}\n      width={450}\n    >\n      <ChartAxis />\n      <ChartAxis dependentAxis showGrid />\n      <ChartStack\n        horizontal\n        colorScale={[\n          chart_color_blue_300.var,\n          chart_color_gold_300.var,\n          chart_color_green_300.var,\n          chart_color_purple_300.var\n        ]}\n      >\n        <ChartBar\n          data={[\n            { name: 'Cats', x: '2015', y: 1, label: 'Cats: 1' },\n            { name: 'Cats', x: '2016', y: 2, label: 'Cats: 2' },\n            { name: 'Cats', x: '2017', y: 5, label: 'Cats: 5' },\n            { name: 'Cats', x: '2018', y: 3, label: 'Cats: 3' }\n          ]}\n          labelComponent={<ChartTooltip constrainToVisibleArea />}\n        />\n        <ChartBar\n          data={[\n            { name: 'Dogs', x: '2015', y: 2, label: 'Dogs: 2' },\n            { name: 'Dogs', x: '2016', y: 1, label: 'Dogs: 1' },\n            { name: 'Dogs', x: '2017', y: 7, label: 'Dogs: 7' },\n            { name: 'Dogs', x: '2018', y: 4, label: 'Dogs: 4' }\n          ]}\n          labelComponent={<ChartTooltip constrainToVisibleArea />}\n        />\n        <ChartBar\n          data={[\n            { name: 'Birds', x: '2015', y: 4, label: 'Birds: 4' },\n            { name: 'Birds', x: '2016', y: 4, label: 'Birds: 4' },\n            { name: 'Birds', x: '2017', y: 9, label: 'Birds: 9' },\n            { name: 'Birds', x: '2018', y: 7, label: 'Birds: 7' }\n          ]}\n          labelComponent={<ChartTooltip constrainToVisibleArea />}\n        />\n        <ChartBar\n          data={[\n            { name: 'Mice', x: '2015', y: 3, label: 'Mice: 3' },\n            { name: 'Mice', x: '2016', y: 3, label: 'Mice: 3' },\n            { name: 'Mice', x: '2017', y: 8, label: 'Mice: 8' },\n            { name: 'Mice', x: '2018', y: 5, label: 'Mice: 5' }\n          ]}\n          labelComponent={<ChartTooltip constrainToVisibleArea />}\n        />\n      </ChartStack>\n    </Chart>\n  </div>\n)","title":"Custom color scale","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates an alternate way of applying a custom color scale and fill colors to individual charts.`}
      </p>
    </Example>,
  'Custom stroke color': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartThreshold, ChartVoronoiContainer } from '@patternfly/react-charts';\nimport chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';\n\nconst CustomStrokeColor = () => (\n  <div style={{ height: '275px', width: '450px' }}>\n    <Chart\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Line chart example\"\n      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}\n      legendData={[\n        { name: 'Cats' },\n        { name: 'Birds' },\n        { name: 'Mice' },\n        { name: 'Cats Threshold', symbol: { fill: chart_color_blue_300.var, type: 'threshold' }}\n      ]}\n      legendPosition=\"bottom\"\n      height={275}\n      maxDomain={{y: 10}}\n      minDomain={{y: 0}}\n      padding={{\n        bottom: 75, // Adjusted to accommodate legend\n        left: 50,\n        right: 50,\n        top: 50\n      }}\n      themeColor={ChartThemeColor.multiUnordered}\n      width={450}\n    >\n      <ChartAxis tickValues={[2, 3, 4]} />\n      <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />\n      <ChartGroup>\n        <ChartLine\n          data={[\n            { name: 'Cats', x: '2015', y: 1 },\n            { name: 'Cats', x: '2016', y: 2 },\n            { name: 'Cats', x: '2017', y: 5 },\n            { name: 'Cats', x: '2018', y: 3 }\n          ]}\n        />\n        <ChartLine\n          data={[\n            { name: 'Birds', x: '2015', y: 3 },\n            { name: 'Birds', x: '2016', y: 4 },\n            { name: 'Birds', x: '2017', y: 9 },\n            { name: 'Birds', x: '2018', y: 5 }\n          ]}\n        />\n        <ChartLine\n          data={[\n            { name: 'Mice', x: '2015', y: 3 },\n            { name: 'Mice', x: '2016', y: 3 },\n            { name: 'Mice', x: '2017', y: 8 },\n            { name: 'Mice', x: '2018', y: 7 }\n          ]}\n        />\n        <ChartThreshold\n          data={[\n            { name: 'Cats Threshold', x: '2015', y: 5 },\n            { name: 'Cats Threshold', x: '2016', y: 5 },\n            { name: 'Cats Threshold', x: '2016', y: 6 },\n            { name: 'Cats Threshold', x: '2017', y: 6 },\n            { name: 'Cats Threshold', x: '2018', y: 6 }\n          ]}\n          style={{\n            data: {\n              stroke: chart_color_blue_300.var,\n            }\n          }}\n        />\n      </ChartGroup>\n    </Chart>\n  </div>\n)","title":"Custom stroke color","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates an alternate way of applying custom stroke and fill colors to a threshold chart.`}
      </p>
    </Example>,
  'Custom theme': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartBar, ChartAxis, ChartGroup, ChartThemeColor, ChartVoronoiContainer, mergeTheme } from '@patternfly/react-charts';\nimport chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';\nimport chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';\nimport chart_color_cyan_300 from '@patternfly/react-tokens/dist/esm/chart_color_cyan_300';\nimport chart_color_gold_300 from '@patternfly/react-tokens/dist/esm/chart_color_gold_300';\n\nclass MultiColorChart extends React.Component {\n  constructor(props) {\n    super(props);\n\n    // Colors\n    this.colorScale = [\n      chart_color_blue_300.var,\n      chart_color_green_300.var,\n      chart_color_cyan_300.var,\n      chart_color_gold_300.var\n    ];\n\n    // Layout\n    this.layoutProps = {\n      padding: {\n        bottom: 50,\n        left: 50,\n        right: 200, // Adjusted to accommodate legend\n        top: 50\n      }\n    };\n\n    // Victory theme properties only\n    this.themeProps = {\n      bar: {\n        colorScale: this.colorScale,\n        ...this.layoutProps,\n      },\n      chart: {\n        colorScale: this.colorScale,\n        ...this.layoutProps,\n      },\n      group: {\n        colorScale: this.colorScale,\n        ...this.layoutProps,\n      },\n      legend: {\n        colorScale: this.colorScale\n      }\n    };\n\n    // Applies theme color and variant to base theme\n    this.myCustomTheme = mergeTheme(\n      ChartThemeColor.default,\n      this.themeProps\n    );\n  }\n\n  render() {\n    return (\n      <div style={{ height: '250px', width: '600px' }}>\n        <Chart\n          ariaDesc=\"Average number of pets\"\n          ariaTitle=\"Bar chart example\"\n          containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}\n          domain={{y: [0,9]}}\n          domainPadding={{ x: [30, 25] }}\n          legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}\n          legendOrientation=\"vertical\"\n          legendPosition=\"right\"\n          height={250}\n          theme={this.myCustomTheme}\n          width={600}\n        >\n          <ChartAxis />\n          <ChartAxis dependentAxis showGrid />\n          <ChartGroup offset={11}>\n            <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />\n            <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />\n            <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />\n            <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />\n          </ChartGroup>\n        </Chart>\n      </div>\n    );\n  }\n}","title":"Custom theme","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates custom theme properties, which may be applied across multiple charts.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"introduction","size":"h2","className":"ws-title ws-h2"}}>
      {`Introduction`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Note: PatternFly React charts live in its own package at `}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-charts"}}>
        {`@patternfly/react-charts`}
      </PatternflyThemeLink>
      {`!`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`PatternFly React charts are based on the `}
      <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-chart/"}}>
        {`Victory`}
      </PatternflyThemeLink>
      {` chart library, along with additional functionality, custom components, and theming for PatternFly. This provides a collection of React based components you can use to build PatternFly patterns with consistent markup, styling, and behavior.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Green"])}
    {React.createElement(pageData.examples["Multi-color (ordered)"])}
    {React.createElement(pageData.examples["Multi color (unordered)"])}
    {React.createElement(pageData.examples["Custom color scale"])}
    {React.createElement(pageData.examples["Custom stroke color"])}
    {React.createElement(pageData.examples["Custom theme"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"tips","size":"h3","className":"ws-title ws-h3"}}>
      {`Tips`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`See Victory's `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/faq"}}>
          {`FAQ`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`The `}
        <code {...{"className":"ws-code"}}>
          {`theme`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`themeColor`}
        </code>
        {` props should be applied at the most top level component`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use `}
        <code {...{"className":"ws-code"}}>
          {`ChartGroup`}
        </code>
        {` to apply theme color scales and other properties to multiple components`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"note","size":"h3","className":"ws-title ws-h3"}}>
      {`Note`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the components used in the examples above, Victory pass-thru props are also documented here:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`For theme props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-theme"}}>
          {`VictoryTheme`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ChartsThemesReactDocs';
Component.pageData = pageData;

export default Component;
