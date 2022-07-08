import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { 
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartBullet,
  ChartDonut,
  ChartGroup,
  ChartLabel,
  ChartLegend,
  ChartLegendTooltip,
  ChartLine,
  ChartPie,
  ChartScatter,
  ChartThemeColor,
  ChartVoronoiContainer,
  createContainer,
  getInteractiveLegendEvents,
  getInteractiveLegendItemStyles,
  getResizeObserver
} from '@patternfly/react-charts';
import chart_area_Opacity from '@patternfly/react-tokens/dist/esm/chart_area_Opacity';
import chart_color_black_500 from '@patternfly/react-tokens/dist/esm/chart_color_black_500';
import '@patternfly/patternfly/patternfly-charts.css';
const pageData = {
  "id": "Legends",
  "section": "charts",
  "source": "react",
  "slug": "/charts/legends/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-charts/src/components/ChartLegend/examples/ChartLegend.md",
  "propComponents": [
    {
      "name": "ChartLegend",
      "description": "",
      "props": [
        {
          "name": "borderComponent",
          "type": "React.ReactElement<any>",
          "description": "The borderComponent prop takes a component instance which will be responsible\nfor rendering a border around the legend. The new element created from the passed\nborderComponent will be provided with the following properties calculated by\nChartLegend: x, y, width, height, and style. Any of these props may be\noverridden by passing in props to the supplied component, or modified or ignored\nwithin the custom component itself. If a borderComponent\nis not provided, ChartLegend will use its default Border component.\nPlease note that the default width and height calculated\nfor the border component is based on approximated\ntext measurements, and may need to be adjusted."
        },
        {
          "name": "borderPadding",
          "type": "number | { top: number, bottom: number, left: number, right: number }",
          "description": "The borderPadding specifies the amount of padding that should\nbe added between the legend items and the border. This prop may be given as\na number, or asanobject with values specified for top, bottom, left, and right.\nPlease note that the default width and height calculated for the border\ncomponent is based on approximated text measurements, so padding may need to be adjusted."
        },
        {
          "name": "centerTitle",
          "type": "boolean",
          "description": "The centerTitle boolean prop specifies whether a legend title should be centered."
        },
        {
          "name": "colorScale",
          "type": "string[]",
          "description": "The colorScale prop defines a color scale to be applied to each data\nsymbol in ChartLegend. This prop should be given as an array of CSS\ncolors, or as a string corresponding to one of the built in color\nscales. Colors will repeat when there are more symbols than colors in the\nprovided colorScale."
        },
        {
          "name": "containerComponent",
          "type": "React.ReactElement<any>",
          "description": "The containerComponent prop takes an entire component which will be used to\ncreate a container element for standalone charts.\nThe new element created from the passed containerComponent wil be provided with\nthese props from ChartLegend: height, width, children\n(the chart itself) and style. Props that are not provided by the\nchild chart component include title and desc, both of which\nare intended to add accessibility to Victory components. The more descriptive these props\nare, the more accessible your data will be for people using screen readers.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartLegend will use the default ChartContainer component.\n\n@example <ChartContainer title=\"Chart of Dog Breeds\" desc=\"This chart shows ...\" />",
          "defaultValue": "<ChartContainer />"
        },
        {
          "name": "data",
          "type": "{\n  name?: string;\n  labels?: {\n    fill?: string;\n  };\n  symbol?: {\n    fill?: string;\n    type?: string;\n  };\n}[]",
          "description": "Specify data via the data prop. ChartLegend expects data as an\narray of objects with name (required), symbol, and labels properties.\nThe data prop must be given as an array."
        },
        {
          "name": "dataComponent",
          "type": "React.ReactElement<any>",
          "description": "The dataComponent prop takes a component instance which will be\nresponsible for rendering a data element used to associate a symbol\nor color with each data series. The new element created from the\npassed dataComponent will be provided with the following properties\ncalculated by ChartLegend: x, y, size, style, and symbol. Any of\nthese props may be overridden by passing in props to the supplied\ncomponent, or modified or ignored within the custom component itself.\nIf a dataComponent is not provided, ChartLegend will use its\ndefault Point component.",
          "defaultValue": "<ChartPoint />"
        },
        {
          "name": "eventKey",
          "type": "number | string | Function | string[]",
          "description": "ChartLegend uses the standard eventKey prop to specify how event targets\nare addressed. This prop is not commonly used."
        },
        {
          "name": "events",
          "type": "object[]",
          "description": "ChartLegend uses the standard events prop."
        },
        {
          "name": "externalEventMutations",
          "type": "object[]",
          "description": "ChartLegend uses the standard externalEventMutations prop."
        },
        {
          "name": "groupComponent",
          "type": "React.ReactElement<any>",
          "description": "The groupComponent prop takes an entire component which will be used to\ncreate group elements for use within container elements. This prop defaults\nto a <g> tag on web, and a react-native-svg <G> tag on mobile"
        },
        {
          "name": "gutter",
          "type": "number | { left: number; right: number }",
          "description": "The gutter prop defines the number of pixels between legend rows or\ncolumns, depending on orientation. When orientation is horizontal,\ngutters are between columns. When orientation is vertical, gutters\nare the space between rows."
        },
        {
          "name": "itemsPerRow",
          "type": "number",
          "description": "The itemsPerRow prop determines how many items to render in each row\nof a horizontal legend, or in each column of a vertical legend. This\nprop should be given as an integer. When this prop is not given,\nlegend items will be rendered in a single row or column."
        },
        {
          "name": "labelComponent",
          "type": "React.ReactElement<any>",
          "description": "The labelComponent prop takes a component instance which will be used\nto render each legend label. The new element created from the passed\nlabelComponent will be supplied with the following properties: x, y,\nstyle, and text. Any of these props may be overridden by passing in\nprops to the supplied component, or modified or ignored within the\ncustom component itself. If labelComponent is omitted, a new\nChartLabel will be created with the props described above.",
          "defaultValue": "<ChartLabel />"
        },
        {
          "name": "orientation",
          "type": "string",
          "description": "The orientation prop takes a string that defines whether legend data\nare displayed in a row or column. When orientation is \"horizontal\",\nlegend items will be displayed in a single row. When orientation is\n\"vertical\", legend items will be displayed in a single column. Line\nand text-wrapping is not currently supported, so \"vertical\"\norientation is both the default setting and recommended for\ndisplaying many series of data."
        },
        {
          "name": "padding",
          "type": "number | { top: number, bottom: number, left: number, right: number }",
          "description": "The padding props specifies the amount of padding in number of pixels between\nthe edge of the chart and any rendered child components. This prop can be given\nas a number or as an object with padding specified for top, bottom, left\nand right."
        },
        {
          "name": "patternScale",
          "type": "string[]",
          "description": "The patternScale prop is an optional prop that defines patterns to apply, where applicable. This prop should be\ngiven as a string array of pattern URLs. Patterns will be assigned to children by index and will repeat when there\nare more children than patterns in the provided patternScale. Use null to omit the pattern for a given index.\n\nNote: Not all components are supported; for example, ChartLine, ChartBullet, ChartThreshold, etc.\n\n@example patternScale={[ 'url(\"#pattern1\")', 'url(\"#pattern2\")', null ]}",
          "beta": true
        },
        {
          "name": "responsive",
          "type": "boolean",
          "description": "The responsive prop specifies whether the rendered container should be a responsive container with a viewBox\nattribute, or a static container with absolute width and height.\n\nUseful when legend is located inside a chart -- default is false.\n\nNote: Not compatible with containerComponent prop",
          "defaultValue": "true"
        },
        {
          "name": "rowGutter",
          "type": "number | { top: number, bottom: number }",
          "description": "The rowGutter prop defines the number of pixels between legend rows.\nThis prop may be given as a number, or as an object with values\nspecified for “top” and “bottom” gutters. To set spacing between columns,\nuse the gutter prop.\n\n\n@example { top: 0, bottom: 10 }"
        },
        {
          "name": "standalone",
          "type": "boolean",
          "description": "The standalone prop determines whether the component will render a standalone svg\nor a <g> tag that will be included in an external svg. Set standalone to false to\ncompose ChartLegend with other components within an enclosing <svg> tag."
        },
        {
          "name": "style",
          "type": "{ border: object, data: object, labels: object, parent: object, title: object }",
          "description": "The style prop specifies styles for your pie. ChartLegend relies on Radium,\nso valid Radium style objects should work for this prop. Height, width, and\npadding should be specified via the height, width, and padding props.\n\n\n@example {data: {stroke: \"black\"}, label: {fontSize: 10}}"
        },
        {
          "name": "symbolSpacer",
          "type": "number",
          "description": "The symbolSpacer prop defines the number of pixels between data\ncomponents and label components."
        },
        {
          "name": "theme",
          "type": "object",
          "description": "The theme prop takes a style object with nested data, labels, and parent objects.\nYou can create this object yourself, or you can use a theme provided by\nWhen using ChartLegend as a solo component, implement the theme directly on\nChartLegend. If you are wrapping ChartLegend in ChartChart or\nChartGroup, please call the theme on the outermost wrapper component instead.",
          "defaultValue": "getTheme(themeColor)"
        },
        {
          "name": "themeColor",
          "type": "string",
          "description": "Specifies the theme color. Valid values are 'blue', 'green', 'multi', etc.\n\nNote: Not compatible with theme prop\n\n@example themeColor={ChartThemeColor.blue}"
        },
        {
          "name": "themeVariant",
          "type": "string",
          "description": "Specifies the theme variant. Valid values are 'dark' or 'light'\n\nNote: Not compatible with theme prop\n\n Use PatternFly's pf-theme-dark CSS selector",
          "deprecated": true
        },
        {
          "name": "title",
          "type": "string | string[]",
          "description": "The title prop specifies a title to render with the legend.\nThis prop should be given as a string, or an array of strings for multi-line titles."
        },
        {
          "name": "titleComponent",
          "type": "React.ReactElement<any>",
          "description": "The titleComponent prop takes a component instance which will be used to render\na title for the component. The new element created from the passed\nlabelComponent will be supplied with the following properties: x, y, index, data,\ndatum, verticalAnchor, textAnchor, style, text, and events. Any of these props\nmay be overridden by passing in props to the supplied component, or modified\nor ignored within the custom component itself. If labelComponent is omitted,\na new ChartLabel will be created with the props described above.",
          "defaultValue": "<ChartLabel />"
        },
        {
          "name": "titleOrientation",
          "type": "string",
          "description": "The titleOrientation prop specifies where the a title should be rendered\nin relation to the rest of the legend. Possible values\nfor this prop are “top”, “bottom”, “left”, and “right”."
        },
        {
          "name": "width",
          "type": "number",
          "description": "Specifies the width of the svg viewBox of the chart container. This value should be given as a\nnumber of pixels.\n\nBecause Victory renders responsive containers, the width and height props do not determine the width and\nheight of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of\npixels will depend on the size of the container the chart is rendered into."
        },
        {
          "name": "x",
          "type": "number",
          "description": "The x and y props define the base position of the legend element."
        },
        {
          "name": "y",
          "type": "number",
          "description": "The x and y props define the base position of the legend element."
        }
      ]
    }
  ],
  "examples": [
    "Basic with right aligned legend",
    "Bottom aligned legend",
    "Responsive bottom-left aligned legend",
    "Standalone legend",
    "Interactive legend",
    "Interactive legend with pie chart",
    "Legend tooltips",
    "Legend links",
    "Legend layout"
  ]
};
pageData.liveContext = {
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartBullet,
  ChartDonut,
  ChartGroup,
  ChartLabel,
  ChartLegend,
  ChartLegendTooltip,
  ChartLine,
  ChartPie,
  ChartScatter,
  ChartThemeColor,
  ChartVoronoiContainer,
  createContainer,
  getInteractiveLegendEvents,
  getInteractiveLegendItemStyles,
  getResizeObserver,
  chart_area_Opacity,
  chart_color_black_500
};
pageData.examples = {
  'Basic with right aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonut } from '@patternfly/react-charts';\n\nconst BasicWithRightAlignedLegend = () => (\n  <div style={{ height: '230px', width: '350px' }}>\n    <ChartDonut\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Donut chart example\"\n      constrainToVisibleArea\n      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}\n      labels={({ datum }) => `${datum.x}: ${datum.y}%`}\n      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}\n      legendOrientation=\"vertical\"\n      legendPosition=\"right\"\n      padding={{\n        bottom: 20,\n        left: 20,\n        right: 140, // Adjusted to accommodate legend\n        top: 20\n      }}\n      subTitle=\"Pets\"\n      title=\"100\"\n      width={350}\n    />\n  </div>\n)","title":"Basic with right aligned legend","lang":"js"}}>
      
    </Example>,
  'Bottom aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartBar, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';\n\nconst BottomAlignedLegend = () => (\n  <div style={{ height: '275px', width: '450px' }}>\n    <Chart\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Bar chart example\"\n      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}\n      domainPadding={{ x: [30, 25] }}\n      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}\n      legendPosition=\"bottom\"\n      height={275}\n      padding={{\n        bottom: 75, // Adjusted to accommodate legend\n        left: 50,\n        right: 50,\n        top: 50\n      }}\n      themeColor={ChartThemeColor.purple}\n      width={450}\n    >\n      <ChartAxis />\n      <ChartAxis dependentAxis showGrid />\n      <ChartGroup offset={11}>\n        <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />\n        <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />\n        <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />\n        <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />\n      </ChartGroup>\n    </Chart>\n  </div>\n)","title":"Bottom aligned legend","lang":"js"}}>
      
    </Example>,
  'Responsive bottom-left aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet, getResizeObserver } from '@patternfly/react-charts';\n\nclass BulletChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.containerRef = React.createRef();\n    this.observer = () => {};\n    this.state = {\n      width: 0\n    };\n    this.handleResize = () => {\n      if(this.containerRef.current && this.containerRef.current.clientWidth){\n        this.setState({ width: this.containerRef.current.clientWidth });\n      }\n    };\n  }\n\n  componentDidMount() {\n    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);\n    this.handleResize();\n  }\n\n  componentWillUnmount() {\n    this.observer();\n  }\n\n  render() {\n    const { width } = this.state;\n    return (\n      <div ref={this.containerRef}>\n        <div style={{ height: '250px' }}>\n          <ChartBullet\n            ariaDesc=\"Storage capacity\"\n            ariaTitle=\"Bullet chart example\"\n            comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}\n            comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n            constrainToVisibleArea\n            height={250}\n            labels={({ datum }) => `${datum.name}: ${datum.y}`}\n            legendAllowWrap\n            legendPosition=\"bottom-left\"\n            maxDomain={{y: 100}}\n            padding={{\n              bottom: 50,\n              left: 50,\n              right: 50,\n              top: 100 // Adjusted to accommodate labels\n            }}\n            primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}\n            primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}\n            qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}\n            qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n            subTitle=\"Measure details\"\n            title=\"Text label\"\n            titlePosition=\"top-left\"\n            width={width}\n          />\n        </div>\n      </div>\n    );\n  }\n}","title":"Responsive bottom-left aligned legend","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates a responsive legend which wraps when items are wider than its container.`}
      </p>
    </Example>,
  'Standalone legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartGroup, ChartLegend, ChartLine, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';\n\nconst StandaloneLegend = () => (\n  <div style={{ height: '275px', width: '450px' }}>\n    <Chart\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Line chart example\"\n      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}\n      height={275}\n      maxDomain={{y: 10}}\n      minDomain={{y: 0}}\n      padding={{\n        bottom: 75, // Adjusted to accommodate legend\n        left: 50,\n        right: 50,\n        top: 50\n      }}\n      themeColor={ChartThemeColor.green}\n      width={450}\n    >\n      <ChartAxis tickValues={[2, 3, 4]} />\n      <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />\n      <ChartGroup>\n        <ChartLine\n          data={[\n            { name: 'Cats', x: '2015', y: 1 },\n            { name: 'Cats', x: '2016', y: 2 },\n            { name: 'Cats', x: '2017', y: 5 },\n            { name: 'Cats', x: '2018', y: 3 }\n          ]}\n        />\n        <ChartLine\n          data={[\n            { name: 'Dogs', x: '2015', y: 2 },\n            { name: 'Dogs', x: '2016', y: 1 },\n            { name: 'Dogs', x: '2017', y: 7 },\n            { name: 'Dogs', x: '2018', y: 4 }\n          ]}\n          style={{\n            data: {\n              strokeDasharray: '3,3'\n            }\n          }}\n        />\n        <ChartLine\n          data={[\n            { name: 'Birds', x: '2015', y: 3 },\n            { name: 'Birds', x: '2016', y: 4 },\n            { name: 'Birds', x: '2017', y: 9 },\n            { name: 'Birds', x: '2018', y: 5 }\n          ]}\n        />\n        <ChartLine\n          data={[\n            { name: 'Mice', x: '2015', y: 3 },\n            { name: 'Mice', x: '2016', y: 3 },\n            { name: 'Mice', x: '2017', y: 8 },\n            { name: 'Mice', x: '2018', y: 7 }\n          ]}\n        />\n      </ChartGroup>\n      <ChartLegend \n        data={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}\n        x={80}\n        y={235}\n      />\n    </Chart>\n  </div>\n)","title":"Standalone legend","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates a standalone legend vs. using the `}
        
        <code {...{"className":"ws-code"}}>
          {`legendData`}
        </code>
        {` property.`}
      </p>
    </Example>,
  'Interactive legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { \n  Chart, \n  ChartArea, \n  ChartAxis, \n  ChartGroup, \n  ChartLegend,\n  ChartLegendTooltip,\n  ChartScatter, \n  ChartThemeColor,\n  ChartVoronoiContainer,\n  createContainer, \n  getInteractiveLegendEvents, \n  getInteractiveLegendItemStyles,\n  getResizeObserver\n} from '@patternfly/react-charts';\n// import '@patternfly/patternfly/patternfly-charts.css'; // For mixed blend mode\n\nclass InteractiveLegendChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.containerRef = React.createRef();\n    this.observer = () => {};\n    this.state = {\n      hiddenSeries: new Set(),\n      width: 0\n    };\n    this.series = [{\n      datapoints: [\n        { x: '2015', y: 3 },\n        { x: '2016', y: 4 },\n        { x: '2017', y: 8 },\n        { x: '2018', y: 6 }\n      ],\n      legendItem: { name: 'Cats' }\n    }, {\n      datapoints: [\n        { x: '2015', y: 2 },\n        { x: '2016', y: 3 },\n        { x: '2017', y: 4 },\n        { x: '2018', y: 5 },\n        { x: '2019', y: 6 }\n      ],\n      legendItem: { name: 'Dogs' }\n    }, {\n      datapoints: [\n        { x: '2015', y: 1 },\n        { x: '2016', y: 2 },\n        { x: '2017', y: 3 },\n        { x: '2018', y: 2 },\n        { x: '2019', y: 4 }\n      ],\n      legendItem: { name: 'Birds' }\n    }];\n\n    // Returns groups of chart names associated with each data series\n    this.getChartNames = () => {\n      const result = [];\n      this.series.map((_, index) => {\n        // Each group of chart names are hidden / shown together\n        result.push([`area-${index}`, `scatter-${index}`]);\n      });\n      return result;\n    };\n\n    // Returns onMouseOver, onMouseOut, and onClick events for the interactive legend\n    this.getEvents = () => getInteractiveLegendEvents({\n      chartNames: this.getChartNames(),\n      isHidden: this.isHidden,\n      legendName: 'legend',\n      onLegendClick: this.handleLegendClick\n    });\n\n    // Returns legend data styled per hiddenSeries\n    this.getLegendData = () => {\n      const { hiddenSeries } = this.state;\n      return this.series.map((s, index) => {\n        return {\n          childName: `area-${index}`, // Sync tooltip legend with the series associated with given chart name\n          ...s.legendItem, // name property\n          ...getInteractiveLegendItemStyles(hiddenSeries.has(index)) // hidden styles\n        };\n      });\n    };\n\n    // Hide each data series individually\n    this.handleLegendClick = (props) => {\n      if (!this.state.hiddenSeries.delete(props.index)) {\n        this.state.hiddenSeries.add(props.index);\n      }\n      this.setState({ hiddenSeries: new Set(this.state.hiddenSeries) });\n    };\n\n    // Set chart width per current window size\n    this.handleResize = () => {\n      if (this.containerRef.current && this.containerRef.current.clientWidth) {\n        this.setState({ width: this.containerRef.current.clientWidth });\n      }\n    };\n\n    // Returns true if data series is hidden\n    this.isHidden = (index) => {\n      const { hiddenSeries } = this.state; // Skip if already hidden                \n      return hiddenSeries.has(index);\n    };\n\n    this.isDataAvailable = () => {\n      const { hiddenSeries } = this.state;\n      return hiddenSeries.size !== this.series.length;\n    };\n\n    // Note: Container order is important\n    const CursorVoronoiContainer = createContainer(\"voronoi\", \"cursor\");\n\n    this.cursorVoronoiContainer = (\n      <CursorVoronoiContainer\n        cursorDimension=\"x\"\n        labels={({ datum }) => datum.childName.includes('area-') && datum.y !== null ? `${datum.y}` : null}\n        labelComponent={<ChartLegendTooltip legendData={this.getLegendData()} title={(datum) => datum.x}/>}\n        mouseFollowTooltips\n        voronoiDimension=\"x\"\n        voronoiPadding={50}\n      />\n    );\n  };\n\n  componentDidMount() {\n    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);\n    this.handleResize();\n  }\n\n  componentWillUnmount() {\n    this.observer();\n  }\n\n  // Tips:\n  // 1. Omitting hidden components will reassign color scale, use null data instead or custom colors\n  // 2. Set domain or tick axis labels to account for when all data series are hidden\n  // 3. Omit tooltip for ChartScatter component by checking childName prop\n  // 4. Omit tooltip when all data series are hidden\n  // 5. Clone original container to ensure tooltip events are not lost when data series are hidden / shown\n  render() {\n    const { hiddenSeries, width } = this.state;\n\n    const container = React.cloneElement(\n      this.cursorVoronoiContainer, \n      {\n        disable: !this.isDataAvailable()\n      }\n    );\n\n    return (\n      <div ref={this.containerRef}>\n        <div className=\"area-chart-legend-bottom-responsive\">\n          <Chart\n            ariaDesc=\"Average number of pets\"\n            ariaTitle=\"Area chart example\"\n            containerComponent={container}\n            events={this.getEvents()}\n            height={225}\n            legendComponent={<ChartLegend name={'legend'} data={this.getLegendData()} />}\n            legendPosition=\"bottom-left\"\n            padding={{\n              bottom: 75, // Adjusted to accommodate legend\n              left: 50,\n              right: 50,\n              top: 50,\n            }}\n            maxDomain={{y: 9}}\n            themeColor={ChartThemeColor.multiUnordered}\n            width={width}\n          >\n            <ChartAxis tickValues={['2015', '2016', '2017', '2018']} />\n            <ChartAxis dependentAxis showGrid />\n            <ChartGroup>\n              {this.series.map((s, index) => {\n                return (\n                  <ChartScatter\n                    data={!hiddenSeries.has(index) ? s.datapoints : [{ y: null}]}\n                    key={'scatter-' + index}\n                    name={'scatter-' + index}\n                    size={({ active }) => (active ? 5 : 3)}\n                  />\n                );\n              })}\n            </ChartGroup>\n            <ChartGroup>\n              {this.series.map((s, index) => {\n                return (\n                  <ChartArea\n                    data={!hiddenSeries.has(index) ? s.datapoints : [{ y: null}]}\n                    interpolation=\"monotoneX\"\n                    key={'area-' + index}\n                    name={'area-' + index}\n                  />\n                );\n              })}\n            </ChartGroup>\n          </Chart>\n        </div>\n      </div>\n    );\n  }\n}","title":"Interactive legend","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to add an interactive legend using events such as `}
        
        <code {...{"className":"ws-code"}}>
          {`onMouseOver`}
        </code>
        {`, `}
        
        <code {...{"className":"ws-code"}}>
          {`onMouseOut`}
        </code>
        {`, and `}
        
        <code {...{"className":"ws-code"}}>
          {`onClick`}
        </code>
        {`.`}
      </p>
    </Example>,
  'Interactive legend with pie chart': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { \n  Chart,\n  ChartLegend,\n  ChartThemeColor,\n  ChartPie,\n  getInteractiveLegendEvents, \n  getInteractiveLegendItemStyles \n} from '@patternfly/react-charts';\n\nclass InteractivePieLegendChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      hiddenSeries: new Set(),\n      width: 0\n    };\n    this.series = [{\n      datapoints: { x: 'Cats', y: 35 },\n      legendItem: { name: 'Cats: 35' }\n    }, {\n      datapoints: { x: 'Dogs', y: 55 },\n      legendItem: { name: 'Dogs: 55' }\n    }, {\n      datapoints: { x: 'Birds', y: 10 },\n      legendItem: { name: 'Birds: 10' }\n    }];\n\n    // Returns groups of chart names associated with each data series\n    this.getChartNames = () => {\n      const result = [];\n      this.series.map((_, index) => {\n        // Provide names for each series hidden / shown -- use the same name for a pie chart\n        result.push(['pie']);\n      });\n      return result;\n    };\n\n    // Returns onMouseOver, onMouseOut, and onClick events for the interactive legend\n    this.getEvents = () => getInteractiveLegendEvents({\n      chartNames: this.getChartNames(),\n      isHidden: this.isHidden,\n      legendName: 'legend',\n      onLegendClick: this.handleLegendClick\n    });\n\n    // Returns legend data styled per hiddenSeries\n    this.getLegendData = () => {\n      const { hiddenSeries } = this.state;\n      return this.series.map((s, index) => {\n        return {\n          ...s.legendItem, // name property\n          ...getInteractiveLegendItemStyles(hiddenSeries.has(index)) // hidden styles\n        };\n      });\n    };\n\n    // Hide each data series individually\n    this.handleLegendClick = (props) => {\n      if (!this.state.hiddenSeries.delete(props.index)) {\n        this.state.hiddenSeries.add(props.index);\n      }\n      this.setState({ hiddenSeries: new Set(this.state.hiddenSeries) });\n    };\n\n    // Returns true if data series is hidden\n    this.isHidden = (index) => {\n      const { hiddenSeries } = this.state; // Skip if already hidden                \n      return hiddenSeries.has(index);\n    };\n  };\n\n  render() {\n    const { hiddenSeries, width } = this.state;\n\n    const data = [];\n    this.series.map((s, index) => {\n      data.push(!hiddenSeries.has(index) ? s.datapoints : { y: null });\n    });\n\n    return (\n      <div style={{ height: '275px', width: '300px' }}>\n        <Chart\n          ariaDesc=\"Average number of pets\"\n          ariaTitle=\"Pie chart example\"\n          events={this.getEvents()}\n          height={275}\n          legendComponent={<ChartLegend name={'legend'} data={this.getLegendData()} />}\n          legendPosition=\"bottom\"\n          padding={{\n            bottom: 65,\n            left: 20,\n            right: 20,\n            top: 20\n          }}\n          showAxis={false}\n          themeColor={ChartThemeColor.multiUnordered}\n          width={300}\n        >\n          <ChartPie\n            constrainToVisibleArea\n            data={data}\n            labels={({ datum }) => `${datum.x}: ${datum.y}`}\n            name=\"pie\"\n          />\n        </Chart>\n      </div>\n    );\n  }\n}","title":"Interactive legend with pie chart","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to add an interactive legend to a pie chart using events such as `}
        
        <code {...{"className":"ws-code"}}>
          {`onMouseOver`}
        </code>
        {`, `}
        
        <code {...{"className":"ws-code"}}>
          {`onMouseOut`}
        </code>
        {`, and `}
        
        <code {...{"className":"ws-code"}}>
          {`onClick`}
        </code>
        {`.`}
      </p>
    </Example>,
  'Legend tooltips': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartLabel, ChartLegend, ChartPie, ChartThemeColor } from '@patternfly/react-charts';\nimport { Tooltip } from '@patternfly/react-core';\n\nclass TooltipPieChart extends React.Component {\n  constructor(props) {\n    super(props);\n\n    // Custom legend label compoenent\n    this.LegendLabel = ({datum, ...rest}) => (\n      <Tooltip content={datum.name} enableFlip>\n        <ChartLabel {...rest} />\n      </Tooltip>\n    );\n\n    // Custom legend component\n    this.getLegend = (legendData) => (\n      <ChartLegend\n        data={legendData}\n        labelComponent={<this.LegendLabel />}\n      />\n    );\n  }\n\n  render() {\n    return (\n      <div style={{ height: '275px', width: '300px' }}>\n        <ChartPie\n          ariaDesc=\"Average number of pets\"\n          ariaTitle=\"Pie chart example\"\n          constrainToVisibleArea\n          data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}\n          height={275}\n          labels={({ datum }) => `${datum.x}: ${datum.y}`}\n          legendComponent={this.getLegend([\n            { name: 'Cats: 35' }, \n            { name: 'Dogs: 55' }, \n            { name: 'Birds: 10' }\n          ])}\n          legendPosition=\"bottom\"\n          padding={{\n            bottom: 65,\n            left: 20,\n            right: 20,\n            top: 20\n          }}\n          themeColor={ChartThemeColor.multiOrdered}\n          width={300}\n        />\n      </div>\n    );\n  }\n}","title":"Legend tooltips","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates an approach for applying tooltips to a legend using a custom label component. These tooltips are keyboard navigable.`}
      </p>
    </Example>,
  'Legend links': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartGroup, ChartLabel, ChartLegend, ChartLine, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';\nimport { Tooltip } from '@patternfly/react-core';\n\nclass LegendLinkPieChart extends React.Component {\n  constructor(props) {\n    super(props);\n\n    // Custom legend label compoenent\n    this.LegendLabel = ({datum, ...rest}) => (\n      <a href=\"#\" aria-label=\"Learn more about...\">\n        <ChartLabel {...rest} />\n      </a>\n    );\n\n    // Custom legend component\n    this.getLegend = (legendData) => (\n      <ChartLegend\n        data={legendData}\n        labelComponent={<this.LegendLabel />}\n      />\n    );\n  }\n\n  render() {\n    return (\n      <div style={{ height: '275px', width: '450px' }}>\n        <Chart\n          ariaDesc=\"Average number of pets\"\n          ariaTitle=\"Line chart example\"\n          containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}\n          legendComponent={this.getLegend([\n            { name: 'Cats' }, \n            { name: 'Dogs' }, \n            { name: 'Birds' },\n            { name: 'Mice'}\n          ])}\n          legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}\n          legendPosition=\"bottom\"\n          height={275}\n          maxDomain={{y: 10}}\n          minDomain={{y: 0}}\n          padding={{\n            bottom: 75, // Adjusted to accommodate legend\n            left: 50,\n            right: 50, \n            top: 50\n          }}\n          width={450}\n        >\n          <ChartAxis tickValues={[2, 3, 4]} />\n          <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />\n          <ChartGroup>\n            <ChartLine\n              data={[\n                { name: 'Cats', x: '2015', y: 1 },\n                { name: 'Cats', x: '2016', y: 2 },\n                { name: 'Cats', x: '2017', y: 5 },\n                { name: 'Cats', x: '2018', y: 3 }\n              ]}\n            />\n            <ChartLine\n              data={[\n                { name: 'Dogs', x: '2015', y: 2 },\n                { name: 'Dogs', x: '2016', y: 1 },\n                { name: 'Dogs', x: '2017', y: 7 },\n                { name: 'Dogs', x: '2018', y: 4 }\n              ]}\n              style={{\n                data: {\n                  strokeDasharray: '3,3'\n                }\n              }}\n            />\n            <ChartLine\n              data={[\n                { name: 'Birds', x: '2015', y: 3 },\n                { name: 'Birds', x: '2016', y: 4 },\n                { name: 'Birds', x: '2017', y: 9 },\n                { name: 'Birds', x: '2018', y: 5 }\n              ]}\n            />\n            <ChartLine\n              data={[\n                { name: 'Mice', x: '2015', y: 3 },\n                { name: 'Mice', x: '2016', y: 3 },\n                { name: 'Mice', x: '2017', y: 8 },\n                { name: 'Mice', x: '2018', y: 7 }\n              ]}\n            />\n          </ChartGroup>\n        </Chart>\n      </div>\n    );\n  }\n}","title":"Legend links","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates an approach for applying links to a legend using a custom label component. These links are keyboard navigable.`}
      </p>
    </Example>,
  'Legend layout': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartLabel, ChartLegend, ChartDonut, ChartThemeColor } from '@patternfly/react-charts';\nimport { Tooltip } from '@patternfly/react-core';\n\nclass LegendLayoutPieChart extends React.Component {\n  constructor(props) {\n    super(props);\n\n    // Custom legend label compoenent\n    this.LegendLabel = ({values, ...rest}) => (\n      <ChartLabel\n        {...rest}\n        style={[{ fontWeight: 700 }, {}]}\n        text={[values[rest.index], rest.text]}\n      />\n    );\n\n    // Custom legend component\n    this.getLegend = (legendData, values) => (\n      <ChartLegend\n        data={legendData}\n        gutter={25}\n        itemsPerRow={2}\n        labelComponent={<this.LegendLabel dy={10} lineHeight={1.5} values={values} />}\n        rowGutter={20}\n      />\n    );\n  }\n\n  render() {\n    return (\n      <div style={{ height: '230px', width: '350px' }}>\n        <ChartDonut\n          ariaDesc=\"Average number of pets\"\n          ariaTitle=\"Pie chart example\"\n          constrainToVisibleArea\n          data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}\n          height={230}\n          labels={({ datum }) => `${datum.x}: ${datum.y}`}\n          legendComponent={this.getLegend([\n            { name: 'Cats' }, \n            { name: 'Dogs' }, \n            { name: 'Birds' }\n          ], [ 35, 55, 10 ])}\n          legendOrientation=\"vertical\"\n          legendPosition=\"right\"\n          padding={{\n            bottom: 20,\n            left: 20,\n            right: 140, // Adjusted to accommodate legend\n            top: 20\n          }}\n          subTitle=\"Pets\"\n          title=\"100\"\n          themeColor={ChartThemeColor.multiOrdered}\n          width={350}\n        />\n      </div>\n    );\n  }\n}","title":"Legend layout","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates an approach for applying a different legend layout and styles using a custom label component.`}
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
    {React.createElement(pageData.examples["Basic with right aligned legend"])}
    {React.createElement(pageData.examples["Bottom aligned legend"])}
    {React.createElement(pageData.examples["Responsive bottom-left aligned legend"])}
    {React.createElement(pageData.examples["Standalone legend"])}
    {React.createElement(pageData.examples["Interactive legend"])}
    {React.createElement(pageData.examples["Interactive legend with pie chart"])}
    {React.createElement(pageData.examples["Legend tooltips"])}
    {React.createElement(pageData.examples["Legend links"])}
    {React.createElement(pageData.examples["Legend layout"])}
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
        <code {...{"className":"ws-code"}}>
          {`ChartLegend`}
        </code>
        {` may be used as a standalone component, instead of using `}
        <code {...{"className":"ws-code"}}>
          {`legendData`}
        </code>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"note","size":"h3","className":"ws-title ws-h3"}}>
      {`Note`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Currently, the generated documention below is not able to resolve type definitions from Victory imports. For the
components used in the examples above, Victory pass-thru props are also documented here:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`For `}
        <code {...{"className":"ws-code"}}>
          {`ChartLegend`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-legend"}}>
          {`VictoryLegend`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ChartsLegendsReactDocs';
Component.pageData = pageData;

export default Component;
