import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
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
import '../../../../../react-charts/src/components/ChartTooltip/examples/./chart-tooltip.css';
const pageData = {
  "id": "Tooltips",
  "section": "charts",
  "source": "react",
  "slug": "/charts/tooltips/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-charts/src/components/ChartTooltip/examples/ChartTooltip.md",
  "propComponents": [
    {
      "name": "ChartTooltip",
      "description": "",
      "props": [
        {
          "name": "activateData",
          "type": "boolean",
          "description": "When true, tooltip events will set the active prop on both data and label elements."
        },
        {
          "name": "active",
          "type": "boolean",
          "description": "The active prop specifies whether the tooltip component should be displayed."
        },
        {
          "name": "angle",
          "type": "string | number",
          "description": "The angle prop specifies the angle to rotate the tooltip around its origin point."
        },
        {
          "name": "center",
          "type": "{ x: number; y: number }",
          "description": "The center prop determines the position of the center of the tooltip flyout. This prop should be given as an object\nthat describes the desired x and y svg coordinates of the center of the tooltip. This prop is useful for\npositioning the flyout of a tooltip independent from the pointer. When ChartTooltip is used with\nChartVoronoiContainer, the center prop is what enables the mouseFollowTooltips option. When this prop is set,\nnon-zero pointerLength values will no longer be respected."
        },
        {
          "name": "centerOffset",
          "type": "{ x: number | Function, y: number | Function }",
          "description": "The centerOffset prop determines the position of the center of the tooltip flyout in relation to the flyout\npointer. This prop should be given as an object of x and y, where each is either a numeric offset value or a\nfunction that returns a numeric value. When this prop is set, non-zero pointerLength values will no longer be\nrespected."
        },
        {
          "name": "constrainToVisibleArea",
          "type": "boolean",
          "description": "The constrainToVisibleArea prop determines whether to coerce tooltips so that they fit within the visible area of\nthe chart. When this prop is set to true, tooltip pointers will still point to the correct data point, but the\ncenter of the tooltip will be shifted to fit within the overall width and height of the svg Victory renders.",
          "defaultValue": "false"
        },
        {
          "name": "cornerRadius",
          "type": "number | Function",
          "description": "The cornerRadius prop determines corner radius of the flyout container. This prop may be given as a positive number\nor a function of datum."
        },
        {
          "name": "data",
          "type": "any[]",
          "description": "Victory components can pass a data prop to their label component. This can be useful in custom components that need\nto make use of the entire dataset."
        },
        {
          "name": "datum",
          "type": "{}",
          "description": "Victory components can pass a datum prop to their label component. This can be used to calculate functional styles,\nand determine text."
        },
        {
          "name": "dx",
          "type": "number | Function",
          "description": "The dx prop defines a horizontal shift from the x coordinate."
        },
        {
          "name": "dy",
          "type": "number | Function",
          "description": "The dy prop defines a vertical shift from the y coordinate."
        },
        {
          "name": "events",
          "type": "object",
          "description": "The events prop attaches arbitrary event handlers to the label component. This prop should be given as an object of\nevent names and corresponding event handlers. When events are provided via Victory’s event system, event handlers\nwill be called with the event, the props of the component is attached to, and an eventKey.\n\n\n@example events={{onClick: (evt) => alert(\"x: \" + evt.clientX)}}"
        },
        {
          "name": "flyoutComponent",
          "type": "React.ReactElement<any>",
          "description": "The flyoutComponent prop takes a component instance which will be used to create the flyout path for each tooltip.\nThe new element created from the passed flyoutComponent will be supplied with the following properties: x, y, dx, dy,\nindex, datum, cornerRadius, pointerLength, pointerWidth, width, height, orientation, style, and events.\nAny of these props may be overridden by passing in props to the supplied component, or modified or ignored within\nthe custom component itself. If flyoutComponent is omitted, a default Flyout component will be created with props\ndescribed above.\n\n@example flyoutComponent={<Flyout x={50} y={50}/>}, flyoutComponent={<MyCustomFlyout/>}"
        },
        {
          "name": "flyoutHeight",
          "type": "number | Function",
          "description": "The flyoutHeight prop defines the height of the tooltip flyout. This prop may be given as a positive number or a function\nof datum. If this prop is not set, height will be determined based on an approximate text size calculated from the\ntext and style props provided to ChartTooltip."
        },
        {
          "name": "flyoutStyle",
          "type": "number | Function",
          "description": "The style prop applies SVG style properties to the rendered flyout container. These props will be passed to the\nflyoutComponent."
        },
        {
          "name": "flyoutWidth",
          "type": "number | Function",
          "description": "The flyoutWidth prop defines the width of the tooltip flyout. This prop may be given as a positive number or a\nfunction of datum. If this prop is not set, flyoutWidth will be determined based on an approximate text size\ncalculated from the text and style props provided to VictoryTooltip."
        },
        {
          "name": "groupComponent",
          "type": "React.ReactElement<any>",
          "description": "The groupComponent prop takes a component instance which will be used to create group elements for use within\ncontainer elements. This prop defaults to a <g> tag.}"
        },
        {
          "name": "horizontal",
          "type": "boolean",
          "description": "The horizontal prop determines whether to plot the flyouts to the left / right of the (x, y) coordinate rather than top / bottom.\nThis is useful when an orientation prop is not provided, and data will determine the default orientation. i.e.\nnegative values result in a left orientation and positive values will result in a right orientation by default."
        },
        {
          "name": "index",
          "type": "number | string",
          "description": "The index prop represents the index of the datum in the data array."
        },
        {
          "name": "labelComponent",
          "type": "React.ReactElement<any>",
          "description": "The labelComponent prop takes a component instance which will be used to render each tooltip label. The new element\ncreated from the passed labelComponent will be supplied with the following properties: x, y, index, datum,\nverticalAnchor, textAnchor, style, text, and events. Any of these props may be overridden by passing in props to\nthe supplied component, or modified or ignored within the custom component itself. If labelComponent is omitted, a\nnew ChartLabel will be created with the props described above.\n\n@example labelComponent={<ChartLabel dy={20}/>}, labelComponent={<MyCustomLabel/>}",
          "defaultValue": "<ChartLabel />"
        },
        {
          "name": "labelTextAnchor",
          "type": "string | Function",
          "description": "Defines how the labelComponent text is horizontally positioned relative to its `x` and `y` coordinates. Valid\nvalues are 'start', 'middle', 'end', and 'inherit'."
        },
        {
          "name": "orientation",
          "type": "string | Function",
          "description": "The orientation prop determines which side of the (x, y) coordinate the tooltip should be rendered on.\nThis prop can be given as “top”, “bottom”, “left”, “right”, or as a function of datum that returns one of these\nvalues. If this prop is not provided it will be determined from the sign of the datum, and the value of the\nhorizontal prop."
        },
        {
          "name": "pointerLength",
          "type": "number | Function",
          "description": "The pointerLength prop determines the length of the triangular pointer extending from the flyout. This prop may be\ngiven as a positive number or a function of datum."
        },
        {
          "name": "pointerOrientation",
          "type": "string | Function",
          "description": "This prop determines which side of the tooltip flyout the pointer should originate on. When this prop is not set,\nit will be determined based on the overall orientation of the flyout in relation to its data point, and any center\nor centerOffset values. Valid values are 'top', 'bottom', 'left' and 'right."
        },
        {
          "name": "pointerWidth",
          "type": "number | Function",
          "description": "The pointerWidth prop determines the width of the base of the triangular pointer extending from\nthe flyout. This prop may be given as a positive number or a function of datum."
        },
        {
          "name": "renderInPortal",
          "type": "boolean",
          "description": "When renderInPortal is true, rendered tooltips will be wrapped in VictoryPortal and rendered within the Portal element\nwithin ChartContainer. Note: This prop should not be set to true when using a custom container element."
        },
        {
          "name": "style",
          "type": "React.CSSProperties | React.CSSProperties[]",
          "description": "The style prop applies CSS properties to the rendered `<text>` element."
        },
        {
          "name": "text",
          "type": "number | string | Function | string[] | number[]",
          "description": "The text prop defines the text ChartTooltip will render. The text prop may be given as a string, number, or\nfunction of datum. When ChartLabel is used as the labelComponent, strings may include newline characters, which\nChartLabel will split in to separate <tspan/> elements."
        },
        {
          "name": "theme",
          "type": "object",
          "description": "The theme prop specifies a theme to use for determining styles and layout properties for a component. Any styles or\nprops defined in theme may be overwritten by props specified on the component instance.",
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
          "name": "x",
          "type": "number",
          "description": "The x prop defines the x coordinate to use as a basis for horizontal positioning."
        },
        {
          "name": "y",
          "type": "number",
          "description": "The y prop defines the y coordinate to use as a basis for vertical positioning."
        }
      ]
    }
  ],
  "examples": [
    "Voronoi container",
    "Combined cursor and voronoi containers",
    "Embedded legend",
    "Embedded HTML",
    "Data label",
    "Legend",
    "Left aligned",
    "CSS overflow",
    "Wrapped chart"
  ]
};
pageData.liveContext = {
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
  ChartLine,
  ChartPie,
  ChartPoint,
  ChartStack,
  ChartThemeColor,
  ChartTooltip,
  ChartVoronoiContainer,
  createContainer,
  mergeTheme
};
pageData.examples = {
  'Voronoi container': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartArea, ChartAxis, ChartGroup, ChartVoronoiContainer } from '@patternfly/react-charts';\n// import '@patternfly/patternfly/patternfly-charts.css'; // Required for mix-blend-mode CSS property\n\nconst VoronoiContainer = () => (\n  <div style={{ height: '200px', width: '800px' }}>\n    <Chart\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Area chart example\"\n      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}\n      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}\n      legendOrientation=\"vertical\"\n      legendPosition=\"right\"\n      height={200}\n      maxDomain={{y: 9}}\n      padding={{\n        bottom: 50,\n        left: 50,\n        right: 200, // Adjusted to accommodate legend\n        top: 50\n      }}\n      width={800}\n    >\n      <ChartAxis />\n      <ChartAxis dependentAxis showGrid/>\n      <ChartGroup>\n        <ChartArea\n          data={[\n            { name: 'Cats', x: '2015', y: 3 },\n            { name: 'Cats', x: '2016', y: 4 },\n            { name: 'Cats', x: '2017', y: 8 },\n            { name: 'Cats', x: '2018', y: 6 }\n          ]}\n          interpolation=\"monotoneX\"\n        />\n        <ChartArea\n          data={[\n            { name: 'Dogs', x: '2015', y: 2 },\n            { name: 'Dogs', x: '2016', y: 3 },\n            { name: 'Dogs', x: '2017', y: 4 },\n            { name: 'Dogs', x: '2018', y: 5 },\n            { name: 'Dogs', x: '2019', y: 6 }\n          ]}\n          interpolation=\"monotoneX\"\n        />\n        <ChartArea\n          data={[\n            { name: 'Birds', x: '2015', y: 1 },\n            { name: 'Birds', x: '2016', y: 2 },\n            { name: 'Birds', x: '2017', y: 3 },\n            { name: 'Birds', x: '2018', y: 2 },\n            { name: 'Birds', x: '2019', y: 4 }\n          ]}\n          interpolation=\"monotoneX\"\n        />\n      </ChartGroup>\n    </Chart>\n  </div>\n)","title":"Voronoi container","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to use a voronoi container to display tooltips.`}
      </p>
    </Example>,
  'Combined cursor and voronoi containers': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartTooltip, ChartVoronoiContainer, createContainer } from '@patternfly/react-charts';\n\nclass CombinedCursorVoronoiContainer extends React.Component {\n  render() {\n    // Note: Container order is important\n    const CursorVoronoiContainer = createContainer(\"voronoi\", \"cursor\");\n\n    return (\n      <div style={{ height: '275px', width: '450px' }}>\n        <Chart\n          ariaDesc=\"Average number of pets\"\n          ariaTitle=\"Line chart example\"\n          containerComponent={\n            <CursorVoronoiContainer\n              cursorDimension=\"x\"\n              labels={({ datum }) => `${datum.name}: ${datum.y}`}\n              mouseFollowTooltips\n              voronoiDimension=\"x\"\n              voronoiPadding={50}\n            />\n          }\n          legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}\n          legendPosition=\"bottom\"\n          height={275}\n          maxDomain={{y: 10}}\n          minDomain={{y: 0}}\n          padding={{\n            bottom: 75, // Adjusted to accommodate legend\n            left: 50,\n            right: 50,\n            top: 50\n          }}\n          themeColor={ChartThemeColor.orange}\n          width={450}\n        >\n          <ChartAxis tickValues={[2, 3, 4]} />\n          <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />\n          <ChartGroup>\n            <ChartLine\n              data={[\n                { name: 'Cats', x: '2015', y: 1 },\n                { name: 'Cats', x: '2016', y: 2 },\n                { name: 'Cats', x: '2017', y: 5 },\n                { name: 'Cats', x: '2018', y: 3 }\n              ]}\n            />\n            <ChartLine\n              data={[\n                { name: 'Dogs', x: '2015', y: 2 },\n                { name: 'Dogs', x: '2016', y: 1 },\n                { name: 'Dogs', x: '2017', y: 7 },\n                { name: 'Dogs', x: '2018', y: 4 }\n              ]}\n              style={{\n                data: {\n                  strokeDasharray: '3,3'\n                }\n              }}\n            />\n            <ChartLine\n              data={[\n                { name: 'Birds', x: '2015', y: 3 },\n                { name: 'Birds', x: '2016', y: 4 },\n                { name: 'Birds', x: '2017', y: 9 },\n                { name: 'Birds', x: '2018', y: 5 }\n              ]}\n            />\n            <ChartLine\n              data={[\n                { name: 'Mice', x: '2015', y: 3 },\n                { name: 'Mice', x: '2016', y: 3 },\n                { name: 'Mice', x: '2017', y: 8 },\n                { name: 'Mice', x: '2018', y: 7 }\n              ]}\n            />\n          </ChartGroup>\n        </Chart>\n      </div>\n    );\n  }\n}","title":"Combined cursor and voronoi containers","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to combine cursor and voronoi containers to display tooltips along with a vertical cursor.`}
      </p>
    </Example>,
  'Embedded legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartGroup, ChartLegendTooltip, ChartLine, ChartThemeColor, ChartVoronoiContainer, createContainer } from '@patternfly/react-charts';\n\nimport chart_voronoi_labels_Fill from '@patternfly/react-tokens/dist/esm/chart_voronoi_labels_Fill';\nimport global_FontWeight_bold from '@patternfly/react-tokens/dist/esm/global_FontWeight_bold';\n\nclass EmbeddedLegend extends React.Component {\n  render() {\n    // Note: Container order is important\n    const CursorVoronoiContainer = createContainer(\"voronoi\", \"cursor\");\n    const legendData = [{ childName: 'cats', name: 'Cats' }, { childName: 'dogs', name: 'Dogs', symbol: { type: 'dash' }}, { childName: 'birds', name: 'Birds' }, { childName: 'mice', name: 'Mice' }];\n    \n    return (\n      <div style={{ height: '275px', width: '450px' }}>\n        <Chart\n          ariaDesc=\"Average number of pets\"\n          containerComponent={\n            <CursorVoronoiContainer\n              cursorDimension=\"x\"\n              labels={({ datum }) => `${datum.y !== null ? datum.y : 'no data'}`}\n              labelComponent={<ChartLegendTooltip legendData={legendData} title={(datum) => datum.x}/>}\n              mouseFollowTooltips\n              voronoiDimension=\"x\"\n              voronoiPadding={50}\n            />\n          }\n          legendData={legendData}\n          legendPosition=\"bottom\"\n          height={275}\n          maxDomain={{y: 10}}\n          minDomain={{y: 0}}\n          padding={{\n            bottom: 75, // Adjusted to accommodate legend\n            left: 50,\n            right: 50,\n            top: 50\n          }}\n          themeColor={ChartThemeColor.green}\n          width={450}\n        >\n          <ChartAxis tickValues={[2, 3, 4]} />\n          <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />\n          <ChartGroup>\n            <ChartLine\n              data={[\n                { name: 'Cats', x: '2015', y: 1 },\n                { name: 'Cats', x: '2016', y: 2 },\n                { name: 'Cats', x: '2017', y: 5 },\n                { name: 'Cats', x: '2018', y: 3 }\n              ]}\n              name=\"cats\"\n            />\n            <ChartLine\n              data={[\n                { name: 'Dogs', x: '2015', y: 2 },\n                { name: 'Dogs', x: '2016', y: 1 },\n                { name: 'Dogs', x: '2017', y: 7 },\n                { name: 'Dogs', x: '2018', y: 4 }\n              ]}\n              name=\"dogs\"\n              style={{\n                data: {\n                  strokeDasharray: '3,3'\n                }\n              }}\n            />\n            <ChartLine\n              data={[\n                { name: 'Birds', x: '2015', y: 3 },\n                { name: 'Birds', x: '2016', y: 4 },\n                { name: 'Birds', x: '2017', y: 9 },\n                { name: 'Birds', x: '2018', y: 5 }\n              ]}\n              name=\"birds\"\n            />\n            <ChartLine\n              data={[\n                { name: 'Mice', x: '2015', y: 3 },\n                { name: 'Mice', x: '2016', y: null },\n                { name: 'Mice', x: '2017', y: 8 },\n                { name: 'Mice', x: '2018', y: 7 }\n              ]}\n              name=\"mice\"\n            />\n          </ChartGroup>\n        </Chart>\n      </div>\n    );\n  }\n}","title":"Embedded legend","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to embed a legend within a tooltip. Combining cursor and voronoi containers is required to display tooltips with a vertical cursor.`}
      </p>
    </Example>,
  'Embedded HTML': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartArea, ChartAxis, ChartCursorFlyout, ChartCursorTooltip, ChartGroup, ChartPoint, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';\n// import '@patternfly/patternfly/patternfly-charts.css'; // Required for mix-blend-mode CSS property\n\nclass EmbeddedHtml extends React.Component {\n  constructor(props) {\n    super(props);\n    this.baseStyles = { \n      color: '#f0f0f0', \n      fontFamily: 'RedHatText, Overpass, overpass, helvetica, arial, sans-serif',\n      fontSize: '14px'\n    };\n  }\n\n  render() {\n    // Note: Container order is important\n    const CursorVoronoiContainer = createContainer(\"voronoi\", \"cursor\");\n    const legendData = [{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }];\n\n    // Custom HTML component to create a legend layout\n    const HtmlLegendContent = ({datum, legendData, text, theme, title, x, y, ...rest}) => (\n      <g>\n        <foreignObject height=\"100%\" width=\"100%\" x={x - 40} y={y - 45} >\n          <table>\n            <thead>\n              <tr>\n                <th colSpan={2} style={{...this.baseStyles, fontWeight: 700}}>{title(datum)}</th>\n              </tr>\n            </thead>\n            <tbody>\n              {text.map((val, index) => (\n                <tr key={`tbody-tr-${index}`} style={this.baseStyles}>\n                  <th width=\"20px\">\n                    <svg height=\"9.74\" width=\"9.74\" role=\"img\">\n                      {<ChartPoint x={0} y={0}\n                         style={{ fill: theme.legend.colorScale[index] }}\n                         symbol={legendData[index].symbol ? legendData[index].symbol.type : 'square'}\n                         size={10}\n                      />}\n                    </svg>\n                  </th>\n                  <td width=\"55px\">{legendData[index].name}</td>\n                  <td style={{textAlign: 'right'}}>{val}</td>\n                </tr>\n              ))}\n            </tbody>\n          </table>\n        </foreignObject>\n      </g>\n    );\n\n    return (\n      <div ref={this.containerRef} style={{ height: '225px', width: '650px' }}>\n        <Chart\n          ariaDesc=\"Average number of pets\"\n          ariaTitle=\"Area chart example\"\n          containerComponent={\n            <CursorVoronoiContainer\n              cursorDimension=\"x\"\n              labels={({ datum }) => `${datum.y}`}\n              labelComponent={\n                <ChartCursorTooltip\n                  centerOffset={{x: ({ center, flyoutWidth, width, offset = flyoutWidth / 2 + 10 }) => width > center.x + flyoutWidth + 10 ? offset : -offset}}\n                  flyout={<ChartCursorFlyout />}\n                  flyoutHeight={110}\n                  flyoutWidth={125}\n                  labelComponent={<HtmlLegendContent legendData={legendData} title={(datum) => datum.x} />}\n                />\n              }\n              mouseFollowTooltips\n              voronoiDimension=\"x\"\n              voronoiPadding={50}\n            />\n          }\n          legendData={legendData}\n          legendPosition=\"bottom-left\"\n          height={225}\n          padding={{\n            bottom: 75, // Adjusted to accommodate legend\n            left: 50,\n            right: 50,\n            top: 50,\n          }}\n          maxDomain={{y: 9}}\n          themeColor={ChartThemeColor.multiUnordered}\n          width={650}\n        >\n          <ChartAxis />\n          <ChartAxis dependentAxis showGrid />\n          <ChartGroup>\n            <ChartArea\n              data={[\n                { name: 'Cats', x: '2015', y: 3 },\n                { name: 'Cats', x: '2016', y: 4 },\n                { name: 'Cats', x: '2017', y: 8 },\n                { name: 'Cats', x: '2018', y: 6 }\n              ]}\n              interpolation=\"monotoneX\"\n            />\n            <ChartArea\n              data={[\n                { name: 'Dogs', x: '2015', y: 2 },\n                { name: 'Dogs', x: '2016', y: 3 },\n                { name: 'Dogs', x: '2017', y: 4 },\n                { name: 'Dogs', x: '2018', y: 5 },\n                { name: 'Dogs', x: '2019', y: 6 }\n              ]}\n              interpolation=\"monotoneX\"\n            />\n            <ChartArea\n              data={[\n                { name: 'Birds', x: '2015', y: 1 },\n                { name: 'Birds', x: '2016', y: 2 },\n                { name: 'Birds', x: '2017', y: 3 },\n                { name: 'Birds', x: '2018', y: 2 },\n                { name: 'Birds', x: '2019', y: 4 }\n              ]}\n              interpolation=\"monotoneX\"\n            />\n          </ChartGroup>\n        </Chart>\n      </div>\n    );\n  }\n}","title":"Embedded HTML","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to embed HTML within a tooltip. Combining cursor and voronoi containers is required to display tooltips with a vertical cursor.`}
      </p>
    </Example>,
  'Data label': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartBar, ChartStack, ChartThemeColor, ChartTooltip } from '@patternfly/react-charts';\n\nconst DataLabel = () => (\n  <div style={{ height: '275px', width: '450px' }}>\n    <Chart\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Stack chart example\"\n      domainPadding={{ x: [30, 25] }}\n      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}\n      legendPosition=\"bottom-left\"\n      height={275}\n      padding={{\n        bottom: 75, // Adjusted to accommodate legend\n        left: 50,\n        right: 50, \n        top: 50\n      }}\n      themeColor={ChartThemeColor.multiOrdered}\n      width={450}\n    >\n      <ChartAxis />\n      <ChartAxis dependentAxis showGrid />\n      <ChartStack horizontal>\n        <ChartBar \n          data={[\n            { name: 'Cats', x: '2015', y: 1, label: 'Cats: 1' }, \n            { name: 'Cats', x: '2016', y: 2, label: 'Cats: 2' }, \n            { name: 'Cats', x: '2017', y: 5, label: 'Cats: 5' }, \n            { name: 'Cats', x: '2018', y: 3, label: 'Cats: 3' }\n          ]} \n          labelComponent={<ChartTooltip constrainToVisibleArea />}\n        />\n        <ChartBar \n          data={[\n            { name: 'Dogs', x: '2015', y: 2, label: 'Dogs: 2' }, \n            { name: 'Dogs', x: '2016', y: 1, label: 'Dogs: 1' }, \n            { name: 'Dogs', x: '2017', y: 7, label: 'Dogs: 7' }, \n            { name: 'Dogs', x: '2018', y: 4, label: 'Dogs: 4' }\n          ]}\n          labelComponent={<ChartTooltip constrainToVisibleArea />}\n        />\n        <ChartBar \n          data={[\n            { name: 'Birds', x: '2015', y: 4, label: 'Birds: 4' }, \n            { name: 'Birds', x: '2016', y: 4, label: 'Birds: 4' }, \n            { name: 'Birds', x: '2017', y: 9, label: 'Birds: 9' }, \n            { name: 'Birds', x: '2018', y: 7, label: 'Birds: 7' }\n          ]}\n          labelComponent={<ChartTooltip constrainToVisibleArea />}\n        />\n        <ChartBar \n          data={[\n            { name: 'Mice', x: '2015', y: 3, label: 'Mice: 3' }, \n            { name: 'Mice', x: '2016', y: 3, label: 'Mice: 3' }, \n            { name: 'Mice', x: '2017', y: 8, label: 'Mice: 8' }, \n            { name: 'Mice', x: '2018', y: 5, label: 'Mice: 5' }\n          ]}\n          labelComponent={<ChartTooltip constrainToVisibleArea />}\n        />\n      </ChartStack>\n    </Chart>\n  </div>\n)","title":"Data label","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates an alternate way of applying tooltips using data labels.`}
      </p>
    </Example>,
  'Legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartLabel, ChartLegend, ChartPie, ChartThemeColor } from '@patternfly/react-charts';\nimport { Tooltip } from '@patternfly/react-core';\n\nclass TooltipPieChart extends React.Component {\n  constructor(props) {\n    super(props);\n\n    // Custom legend label compoenent\n    this.LegendLabel = ({datum, ...rest}) => (\n      <Tooltip content={datum.name} enableFlip>\n        <ChartLabel {...rest} />\n      </Tooltip>\n    );\n\n    // Custom legend component\n    this.getLegend = (legendData) => (\n      <ChartLegend\n        data={legendData}\n        labelComponent={<this.LegendLabel />}\n      />\n    );\n  }\n\n  render() {\n    return (\n      <div style={{ height: '275px', width: '300px' }}>\n        <ChartPie\n          ariaDesc=\"Average number of pets\"\n          ariaTitle=\"Pie chart example\"\n          constrainToVisibleArea\n          data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}\n          height={275}\n          labels={({ datum }) => `${datum.x}: ${datum.y}`}\n          legendComponent={this.getLegend([\n            { name: 'Cats: 35' }, \n            { name: 'Dogs: 55' }, \n            { name: 'Birds: 10' }\n          ])}\n          legendPosition=\"bottom\"\n          padding={{\n            bottom: 65,\n            left: 20,\n            right: 20,\n            top: 20\n          }}\n          themeColor={ChartThemeColor.multiOrdered}\n          width={300}\n        />\n      </div>\n    );\n  }\n}","title":"Legend","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates an approach for applying tooltips to a legend using a custom label component.`}
      </p>
    </Example>,
  'Left aligned': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartVoronoiContainer, mergeTheme } from '@patternfly/react-charts';\n\nclass TooltipThemeChart extends React.Component {\n  constructor(props) {\n    super(props);\n\n    // Victory theme properties only\n    this.themeProps = {\n      voronoi: {\n        style: {\n          labels: {\n            textAnchor: 'start' // Align tooltip labels left\n          }\n        }\n      }\n    };\n\n    // Applies theme color and variant to base theme\n    this.myCustomTheme = mergeTheme(\n      ChartThemeColor.default,\n      this.themeProps\n    );\n  }\n\n  render() {\n    return (\n      <div style={{ height: '250px', width: '600px' }}>\n        <Chart\n          ariaDesc=\"Average number of pets\"\n          ariaTitle=\"Line chart example\"\n          containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea voronoiDimension=\"x\"/>}\n          legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]}\n          legendOrientation=\"vertical\"\n          legendPosition=\"right\"\n          height={250}\n          maxDomain={{y: 10}}\n          minDomain={{y: 0}}\n          padding={{\n            bottom: 50,\n            left: 50,\n            right: 200, // Adjusted to accommodate legend\n            top: 50\n          }}\n          theme={this.myCustomTheme}\n          width={600}\n        >\n          <ChartAxis tickValues={[2, 3, 4]} />\n          <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />\n          <ChartGroup>\n            <ChartLine\n              data={[\n                { name: 'Cats', x: '2015', y: 1 },\n                { name: 'Cats', x: '2016', y: 2 },\n                { name: 'Cats', x: '2017', y: 5 },\n                { name: 'Cats', x: '2018', y: 3 }\n              ]}\n            />\n            <ChartLine\n              data={[\n                { name: 'Dogs', x: '2015', y: 2 },\n                { name: 'Dogs', x: '2016', y: 1 },\n                { name: 'Dogs', x: '2017', y: 7 },\n                { name: 'Dogs', x: '2018', y: 4 }\n              ]}\n              style={{\n                data: {\n                  strokeDasharray: '3,3'\n                }\n              }}\n            />\n            <ChartLine\n              data={[\n                { name: 'Birds', x: '2015', y: 3 },\n                { name: 'Birds', x: '2016', y: 4 },\n                { name: 'Birds', x: '2017', y: 9 },\n                { name: 'Birds', x: '2018', y: 5 }\n              ]}\n            />\n            <ChartLine\n              data={[\n                { name: 'Mice', x: '2015', y: 3 },\n                { name: 'Mice', x: '2016', y: 3 },\n                { name: 'Mice', x: '2017', y: 8 },\n                { name: 'Mice', x: '2018', y: 7 }\n              ]}\n            />\n          </ChartGroup>\n        </Chart>\n      </div>\n    );\n  }\n}","title":"Left aligned","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to customize tooltip label alignment using theme properties.`}
      </p>
    </Example>,
  'CSS overflow': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartArea, ChartContainer, ChartGroup, ChartLabel, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';\n\nconst CSSOverflow = () => (\n  <div className=\"ws-react-charts-tooltip-overflow\">\n    <div style={{ height: '100px', width: '400px' }}>\n      <ChartGroup\n        ariaDesc=\"Average number of pets\"\n        ariaTitle=\"Sparkline chart example\"\n        containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} />}\n        height={100}\n        maxDomain={{y: 9}}\n        padding={0}\n        themeColor={ChartThemeColor.green}\n        width={400}\n      >\n        <ChartArea\n          data={[\n            { name: 'Cats', x: '2015', y: 3 },\n            { name: 'Cats', x: '2016', y: 4 },\n            { name: 'Cats', x: '2017', y: 8 },\n            { name: 'Cats', x: '2018', y: 6 }\n          ]}\n        />\n      </ChartGroup>\n    </div>\n    <ChartContainer>\n      <ChartLabel text=\"CPU utilization\" dy={15}/>\n    </ChartContainer>\n  </div>\n)","title":"CSS overflow","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates an alternate way of applying tooltips using CSS overflow instead of `}
                <code>{`constrainToVisibleArea`}</code>
        {`.`}
      </p>
    </Example>,
  'Wrapped chart': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';\nimport { Button, Tooltip, TooltipPosition } from '@patternfly/react-core';\n\nclass TooltipChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isVisible: false\n    };\n    this.showTooltip = () => {\n      this.setState({ isVisible: !this.state.isVisible });\n    };\n  }\n\n  render() {\n    const { isVisible } = this.state;\n\n    return (\n      <div>\n        <div style={{ height: '230px', width: '230px' }}>\n          <Tooltip content={<div>My custom tooltip</div>} isVisible={isVisible} position={TooltipPosition.right} trigger=\"manual\">\n            <ChartDonutThreshold\n              allowTooltip={false}\n              ariaDesc=\"Storage capacity\"\n              ariaTitle=\"Donut utilization chart with static threshold example\"\n              data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}\n              labels={() => null}\n            >\n              <ChartDonutUtilization\n                allowTooltip={false}\n                data={{ x: 'Storage capacity', y: 45 }}\n                labels={() => null}\n                subTitle=\"of 100 GBps\"\n                title=\"45%\"\n              />\n            </ChartDonutThreshold>\n          </Tooltip>\n        </div>\n        <div style={{ width: '230px', textAlign: 'center' }}>\n          <Button onClick={this.showTooltip}>Show Tooltip</Button>\n        </div>\n      </div>\n    );\n  }\n}","title":"Wrapped chart","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates an alternate way of applying tooltips by wrapping charts with the Tooltip component.`}
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
    {React.createElement(pageData.examples["Voronoi container"])}
    {React.createElement(pageData.examples["Combined cursor and voronoi containers"])}
    {React.createElement(pageData.examples["Embedded legend"])}
    {React.createElement(pageData.examples["Embedded HTML"])}
    {React.createElement(pageData.examples["Data label"])}
    {React.createElement(pageData.examples["Legend"])}
    {React.createElement(pageData.examples["Left aligned"])}
    {React.createElement(pageData.examples["CSS overflow"])}
    {React.createElement(pageData.examples["Wrapped chart"])}
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
          {`ChartTooltip`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-tooltip"}}>
          {`VictoryTooltip`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ChartsTooltipsReactDocs';
Component.pageData = pageData;

export default Component;
