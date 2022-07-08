import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { 
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartDonut,
  ChartDonutThreshold,
  ChartDonutUtilization,
  ChartGroup,
  ChartLegend,
  ChartLegendTooltip,
  ChartPie,
  ChartScatter,
  ChartStack,
  ChartThemeColor,
  ChartVoronoiContainer,
  createContainer,
  getInteractiveLegendEvents,
  getInteractiveLegendItemStyles,
  getResizeObserver
} from '@patternfly/react-charts';
import chart_area_Opacity from '@patternfly/react-tokens/dist/esm/chart_area_Opacity';
import chart_color_black_500 from '@patternfly/react-tokens/dist/esm/chart_color_black_500';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_cyan_300 from '@patternfly/react-tokens/dist/esm/chart_color_cyan_300';
import chart_color_gold_300 from '@patternfly/react-tokens/dist/esm/chart_color_gold_300';
import '@patternfly/patternfly/patternfly-charts.css';
const pageData = {
  "id": "Patterns",
  "section": "charts",
  "source": "react",
  "slug": "/charts/patterns/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-charts/src/components/Patterns/examples/patterms.md",
  "propComponents": [
    {
      "name": "Chart",
      "description": "",
      "props": [
        {
          "name": "animate",
          "type": "boolean | object",
          "description": "The animate prop specifies props for VictoryAnimation to use.\nThe animate prop should also be used to specify enter and exit\ntransition configurations with the `onExit` and `onEnter` namespaces respectively.\n\n\n@example {duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}"
        },
        {
          "name": "ariaDesc",
          "type": "string",
          "description": "The ariaDesc prop specifies the description of the chart/SVG to assist with\naccessibility for screen readers.\n\nNote: Overridden by the desc prop of containerComponent"
        },
        {
          "name": "ariaTitle",
          "type": "string",
          "description": "The ariaTitle prop specifies the title to be applied to the SVG to assist\naccessibility for screen readers.\n\nNote: Overridden by the title prop of containerComponent"
        },
        {
          "name": "backgroundComponent",
          "type": "React.ReactElement",
          "description": "The backgroundComponent prop takes a component instance which will be responsible for rendering a background if the\nChart's style component includes background styles. The new element created from the passed backgroundComponent\nwill be provided with the following properties calculated by Chart: height, polar, scale, style, x, y, width.\nAll of these props on Background should take prececence over what VictoryChart is trying to set."
        },
        {
          "name": "children",
          "type": "React.ReactNode | React.ReactNode[]",
          "description": "The children to render with the chart"
        },
        {
          "name": "containerComponent",
          "type": "React.ReactElement<any>",
          "description": "The containerComponent prop takes an entire component which will be used to\ncreate a container element for standalone charts.\nThe new element created from the passed containerComponent wil be provided with\nthese props from ChartArea: height, width, children\n(the chart itself) and style. Props that are not provided by the\nchild chart component include title and desc, both of which\nare intended to add accessibility to Victory components. The more descriptive these props\nare, the more accessible your data will be for people using screen readers.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartArea will use the default ChartContainer component.\n\n@example <ChartContainer title=\"Chart of Dog Breeds\" desc=\"This chart shows ...\" />",
          "defaultValue": "<ChartContainer />"
        },
        {
          "name": "domain",
          "type": "number[] | { x: number[], y: number[] }",
          "description": "The domain prop describes the range of values your chart will include. This prop can be\ngiven as a array of the minimum and maximum expected values for your chart,\nor as an object that specifies separate arrays for x and y.\nIf this prop is not provided, a domain will be calculated from data, or other\navailable information.\n\n\n@example [low, high], { x: [low, high], y: [low, high] }\n\n[-1, 1], {x: [0, 100], y: [0, 1]}"
        },
        {
          "name": "domainPadding",
          "type": "number | number[] | { x: number[], y: number[] }",
          "description": "The domainPadding prop specifies a number of pixels of padding to add to the\nbeginning and end of a domain. This prop is useful for explicitly spacing ticks farther\nfrom the origin to prevent crowding. This prop should be given as an object with\nnumbers specified for x and y.\n\n\n@example [left, right], { x: [left, right], y: [bottom, top] }\n\n{x: [10, -10], y: 5}"
        },
        {
          "name": "endAngle",
          "type": "number",
          "description": "The endAngle props defines the overall end angle of a polar chart in degrees. This prop is used in conjunction with\nstartAngle to create polar chart that spans only a segment of a circle, or to change overall rotation of the chart.\nThis prop should be given as a number of degrees. Degrees are defined as starting at the 3 o'clock position, and\nproceeding counterclockwise."
        },
        {
          "name": "eventKey",
          "type": "number | string | Function",
          "description": "Similar to data accessor props `x` and `y`, this prop may be used to functionally\nassign eventKeys to data"
        },
        {
          "name": "events",
          "type": "object[]",
          "description": "The event prop takes an array of event objects. Event objects are composed of\na target, an eventKey, and eventHandlers. Targets may be any valid style namespace\nfor a given component, so \"data\" and \"labels\" are all valid targets for ChartPie\nevents. The eventKey may optionally be used to select a single element by index rather than\nan entire set. The eventHandlers object should be given as an object whose keys are standard\nevent names (i.e. onClick) and whose values are event callbacks. The return value\nof an event handler is used to modify elemnts. The return value should be given\nas an object or an array of objects with optional target and eventKey keys,\nand a mutation key whose value is a function. The target and eventKey keys\nwill default to those corresponding to the element the event handler was attached to.\nThe mutation function will be called with the calculated props for the individual selected\nelement (i.e. a single bar), and the object returned from the mutation function\nwill override the props of the selected element via object assignment.\n\n\n@example\nevents={[\n  {\n    target: \"data\",\n    eventKey: 1,\n    eventHandlers: {\n      onClick: () => {\n        return [\n           {\n             eventKey: 2,\n             mutation: (props) => {\n               return {style: merge({}, props.style, {fill: \"orange\"})};\n             }\n           }, {\n             eventKey: 2,\n             target: \"labels\",\n             mutation: () => {\n               return {text: \"hey\"};\n             }\n           }\n         ];\n      }\n    }\n  }\n]}"
        },
        {
          "name": "externalEventMutations",
          "type": "object[]",
          "description": "Chart uses the standard externalEventMutations prop."
        },
        {
          "name": "groupComponent",
          "type": "React.ReactElement<any>",
          "description": "The groupComponent prop takes an entire component which will be used to\ncreate group elements for use within container elements. This prop defaults\nto a <g> tag on web, and a react-native-svg <G> tag on mobile"
        },
        {
          "name": "hasPatterns",
          "type": "boolean | boolean[]",
          "description": "The hasPatterns prop is an optional prop that indicates whether a pattern is shown for a chart.\nSVG patterns are dynamically generated (unique to each chart) in order to apply colors from the selected\ncolor theme or custom color scale. Those generated patterns are applied in a specific order (via a URL), similar\nto the color theme ordering defined by PatternFly. If the multi-color theme was in use; for example, colorized\npatterns would be displayed in that same order. Create custom patterns via the patternScale prop.\n\nNote: Not all components are supported; for example, ChartLine, ChartBullet, ChartThreshold, etc.\n\n@example hasPatterns={ true }\n@example hasPatterns={[ true, true, false ]}",
          "beta": true
        },
        {
          "name": "height",
          "type": "number",
          "description": "Specifies the height the svg viewBox of the chart container. This value should be given as a\nnumber of pixels.\n\nBecause Victory renders responsive containers, the width and height props do not determine the width and\nheight of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of\npixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set\nto the same width in order to maintain the aspect ratio.",
          "defaultValue": "theme.chart.height"
        },
        {
          "name": "horizontal",
          "type": "boolean",
          "description": "The horizontal prop determines whether data will be plotted horizontally. When this prop is set to true, the\nindependent variable will be plotted on the y axis and the dependent variable will be plotted on the x axis."
        },
        {
          "name": "innerRadius",
          "type": "number | Function",
          "description": "When the innerRadius prop is set, polar charts will be hollow rather than circular."
        },
        {
          "name": "legendAllowWrap",
          "type": "boolean",
          "description": "Allows legend items to wrap. A value of true allows the legend to wrap onto the next line\nif its container is not wide enough.\n\nNote: This is overridden by the legendItemsPerRow property",
          "defaultValue": "false"
        },
        {
          "name": "legendComponent",
          "type": "React.ReactElement<any>",
          "description": "The legend component to render with chart.\n\nNote: Use legendData so the legend width can be calculated and positioned properly.\nDefault legend properties may be applied",
          "defaultValue": "<ChartLegend />"
        },
        {
          "name": "legendData",
          "type": "{\n  name?: string;\n  symbol?: {\n    fill?: string;\n    type?: string;\n  };\n}[]",
          "description": "Specify data via the data prop. ChartLegend expects data as an\narray of objects with name (required), symbol, and labels properties.\nThe data prop must be given as an array.\n\n@example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}"
        },
        {
          "name": "legendOrientation",
          "type": "'horizontal' | 'vertical'",
          "description": "The orientation prop takes a string that defines whether legend data\nare displayed in a row or column. When orientation is \"horizontal\",\nlegend items will be displayed in a single row. When orientation is\n\"vertical\", legend items will be displayed in a single column. Line\nand text-wrapping is not currently supported, so \"vertical\"\norientation is both the default setting and recommended for\ndisplaying many series of data.",
          "defaultValue": "theme.legend.orientation"
        },
        {
          "name": "legendPosition",
          "type": "'bottom' | 'bottom-left' | 'right'",
          "description": "The legend position relation to the chart. Valid values are 'bottom', 'bottom-left', and 'right'\n\nNote: When adding a legend, padding may need to be adjusted in order to accommodate the extra legend. In some\ncases, the legend may not be visible until enough padding is applied.",
          "defaultValue": "ChartCommonStyles.legend.position"
        },
        {
          "name": "maxDomain",
          "type": "number | { x?: number; y?: number }",
          "description": "The maxDomain prop defines a maximum domain value for a chart. This prop is useful in situations where the maximum\ndomain of a chart is static, while the minimum value depends on data or other variable information. If the domain\nprop is set in addition to maximumDomain, domain will be used.\n\nNote: The x value supplied to the maxDomain prop refers to the independent variable, and the y value refers to the\ndependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to\nthe y axis.\n\n@example\n\nmaxDomain={0}\nmaxDomain={{ y: 0 }}"
        },
        {
          "name": "minDomain",
          "type": "number | { x?: number; y?: number }",
          "description": "The minDomain prop defines a minimum domain value for a chart. This prop is useful in situations where the minimum\ndomain of a chart is static, while the maximum value depends on data or other variable information. If the domain\nprop is set in addition to minimumDomain, domain will be used.\n\nNote: The x value supplied to the minDomain prop refers to the independent variable, and the y value refers to the\ndependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to\nthe y axis.\n\n@example\n\nminDomain={0}\nminDomain={{ y: 0 }}"
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
          "name": "polar",
          "type": "boolean",
          "description": "Victory components can pass a boolean polar prop to specify whether a label is part of a polar chart."
        },
        {
          "name": "range",
          "type": "number[] | { x: number[], y: number[] }",
          "description": "The range prop describes the dimensions over which data may be plotted. For cartesian coordinate systems, this\ncorresponds to minimum and maximum svg coordinates in the x and y dimension. In polar coordinate systems this\ncorresponds to a range of angles and radii. When this value is not given it will be calculated from the width,\nheight, and padding, or from the startAngle and endAngle in the case of polar charts. All components in a given\nchart must share the same range, so setting this prop on children nested within Chart, ChartStack, or\nChartGroup will have no effect. This prop is usually not set manually.\n\n\n@example [low, high] | { x: [low, high], y: [low, high] }\n\nCartesian: range={{ x: [50, 250], y: [50, 250] }}\nPolar: range={{ x: [0, 360], y: [0, 250] }}"
        },
        {
          "name": "scale",
          "type": "string | { x: string, y: string }",
          "description": "The scale prop determines which scales your chart should use. This prop can be\ngiven as a string specifying a supported scale (\"linear\", \"time\", \"log\", \"sqrt\"),\nas a d3 scale function, or as an object with scales specified for x and y\n\n\n@example d3Scale.time(), {x: \"linear\", y: \"log\"}"
        },
        {
          "name": "showAxis",
          "type": "boolean",
          "description": "Convenience prop to hide both x and y axis, which are shown by default. Alternatively, the axis can be hidden via\nchart styles.",
          "defaultValue": "true"
        },
        {
          "name": "singleQuadrantDomainPadding",
          "type": "boolean | { x?: boolean; y?: boolean }",
          "description": "By default domainPadding is coerced to existing quadrants. This means that if a given domain only includes positive\nvalues, no amount of padding applied by domainPadding will result in a domain with negative values. This is the\ndesired behavior in most cases. For users that need to apply padding without regard to quadrant, the\nsingleQuadrantDomainPadding prop may be used. This prop may be given as a boolean or an object with boolean values\nspecified for \"x\" and/or \"y\". When this prop is false (or false for a given dimension), padding will be applied\nwithout regard to quadrant. If this prop is not specified, domainPadding will be coerced to existing quadrants.\n\nNote: The x value supplied to the singleQuadrantDomainPadding prop refers to the independent variable, and the y\nvalue refers to the dependent variable. This may cause confusion in horizontal charts, as the independent variable\nwill corresponds to the y axis.\n\n@example\n\nsingleQuadrantDomainPadding={false}\nsingleQuadrantDomainPadding={{ x: false }}"
        },
        {
          "name": "standalone",
          "type": "boolean",
          "description": "The standalone prop determines whether the component will render a standalone svg\nor a <g> tag that will be included in an external svg. Set standalone to false to\ncompose Chart with other components within an enclosing <svg> tag."
        },
        {
          "name": "startAngle",
          "type": "number",
          "description": "The startAngle props defines the overall start angle of a polar chart in degrees. This prop is used in conjunction\nwith endAngle to create polar chart that spans only a segment of a circle, or to change overall rotation of the\nchart. This prop should be given as a number of degrees. Degrees are defined as starting at the 3 o'clock position,\nand proceeding counterclockwise."
        },
        {
          "name": "style",
          "type": "{ parent: object, background: object }",
          "description": "The style prop defines the style of the component. The style prop should be given as an object with styles defined\nfor data, labels and parent. Any valid svg styles are supported, but width, height, and padding should be specified\nvia props as they determine relative layout for components in Chart.\n\n\n@propType { parent: object, background: object }"
        },
        {
          "name": "theme",
          "type": "object",
          "description": "The theme prop specifies a theme to use for determining styles and layout properties for a component. Any styles or\nprops defined in theme may be overwritten by props specified on the component instance.",
          "defaultValue": "getChartTheme(themeColor, showAxis)"
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
          "name": "width",
          "type": "number",
          "description": "Specifies the width of the svg viewBox of the chart container. This value should be given as a\nnumber of pixels.\n\nBecause Victory renders responsive containers, the width and height props do not determine the width and\nheight of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of\npixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set\nto the same width in order to maintain the aspect ratio.",
          "defaultValue": "theme.chart.width"
        }
      ]
    },
    {
      "name": "ChartArea",
      "description": "",
      "props": [
        {
          "name": "animate",
          "type": "boolean | object",
          "description": "The animate prop specifies props for VictoryAnimation to use.\nThe animate prop should also be used to specify enter and exit\ntransition configurations with the `onExit` and `onEnter` namespaces respectively.\n\n\n@example {duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}"
        },
        {
          "name": "categories",
          "type": "string[] | { x: string[], y: string[] }",
          "description": "The categories prop specifies how categorical data for a chart should be ordered.\nThis prop should be given as an array of string values, or an object with\nthese arrays of values specified for x and y. If this prop is not set,\ncategorical data will be plotted in the order it was given in the data array\n\n\n@example [\"dogs\", \"cats\", \"mice\"]"
        },
        {
          "name": "containerComponent",
          "type": "React.ReactElement<any>",
          "description": "The containerComponent prop takes an entire component which will be used to\ncreate a container element for standalone charts.\nThe new element created from the passed containerComponent wil be provided with\nthese props from ChartArea: height, width, children\n(the chart itself) and style. Props that are not provided by the\nchild chart component include title and desc, both of which\nare intended to add accessibility to Victory components. The more descriptive these props\nare, the more accessible your data will be for people using screen readers.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartArea will use the default ChartContainer component.\n\n@example <ChartContainer title=\"Chart of Dog Breeds\" desc=\"This chart shows...\" />",
          "defaultValue": "<ChartContainer />"
        },
        {
          "name": "data",
          "type": "any[]",
          "description": "The data prop specifies the data to be plotted. Data should be in the form of an array\nof data points, or an array of arrays of data points for multiple datasets.\nEach data point may be any format you wish (depending on the `x` and `y` accessor props),\nbut by default, an object with x and y properties is expected.\n\n@example\n\n[{x: 1, y: 2}, {x: 2, y: 3}], [[1, 2], [2, 3]],\n[[{x: \"a\", y: 1}, {x: \"b\", y: 2}], [{x: \"a\", y: 2}, {x: \"b\", y: 3}]]"
        },
        {
          "name": "dataComponent",
          "type": "React.ReactElement<any>",
          "description": "The dataComponent prop takes an entire component which will be used to create an area.\nThe new element created from the passed dataComponent will be provided with the\nfollowing properties calculated by ChartArea: a scale, style, events, interpolation,\nand an array of modified data objects (including x, y, and calculated y0 and y1).\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartArea will use its default Area component."
        },
        {
          "name": "domain",
          "type": "number[] | { x: number[], y: number[] }",
          "description": "The domain prop describes the range of values your chart will cover. This prop can be\ngiven as a array of the minimum and maximum expected values for your bar chart,\nor as an object that specifies separate arrays for x and y.\nIf this prop is not provided, a domain will be calculated from data, or other\navailable information.\n\n\n@example [low, high], { x: [low, high], y: [low, high] }\n\n[-1, 1], {x: [0, 100], y: [0, 1]}"
        },
        {
          "name": "domainPadding",
          "type": "number | number[] | { x: number[], y: number[] }",
          "description": "The domainPadding prop specifies a number of pixels of padding to add to the\nbeginning and end of a domain. This prop is useful for explicitly spacing ticks farther\nfrom the origin to prevent crowding. This prop should be given as an object with\nnumbers specified for x and y.\n\n\n@example [left, right], { x: [left, right], y: [bottom, top] }\n\n{x: [10, -10], y: 5}"
        },
        {
          "name": "eventKey",
          "type": "number | string | Function | string[] | number[]",
          "description": "Similar to data accessor props `x` and `y`, this prop may be used to functionally\nassign eventKeys to data"
        },
        {
          "name": "events",
          "type": "object[]",
          "description": "The event prop take an array of event objects. Event objects are composed of\na target, an eventKey, and eventHandlers. Targets may be any valid style namespace\nfor a given component, so \"data\" and \"labels\" are all valid targets for ChartArea events.\nSince ChartArea only renders a single element, the eventKey property is not used.\nThe eventHandlers object should be given as an object whose keys are standard\nevent names (i.e. onClick) and whose values are event callbacks. The return value\nof an event handler is used to modify elemnts. The return value should be given\nas an object or an array of objects with optional target and eventKey keys,\nand a mutation key whose value is a function. The target and eventKey keys\nwill default to those corresponding to the element the event handler was attached to.\nThe mutation function will be called with the calculated props for the individual selected\nelement (i.e. an area), and the object returned from the mutation function\nwill override the props of the selected element via object assignment.\n\n\n@example\nevents={[\n  {\n    target: \"data\",\n    eventHandlers: {\n      onClick: () => {\n        return [\n           {\n             mutation: (props) => {\n               return {style: merge({}, props.style, {fill: \"orange\"})};\n             }\n           }, {\n             target: \"labels\",\n             mutation: () => {\n               return {text: \"hey\"};\n             }\n           }\n         ];\n      }\n    }\n  }\n]}"
        },
        {
          "name": "externalEventMutations",
          "type": "object[]",
          "description": "ChartArea uses the standard externalEventMutations prop."
        },
        {
          "name": "groupComponent",
          "type": "React.ReactElement<any>",
          "description": "The groupComponent prop takes an entire component which will be used to\ncreate group elements for use within container elements. This prop defaults\nto a <g> tag on web, and a react-native-svg <G> tag on mobile"
        },
        {
          "name": "height",
          "type": "number",
          "description": "The height props specifies the height the svg viewBox of the chart container.\nThis value should be given as a number of pixels"
        },
        {
          "name": "horizontal",
          "type": "boolean",
          "description": "The horizontal prop determines whether data will be plotted horizontally.\nWhen this prop is set to true, the independent variable will be plotted on the y axis\nand the dependent variable will be plotted on the x axis."
        },
        {
          "name": "interpolation",
          "type": "string | Function",
          "description": "The interpolation prop determines how data points should be connected when plotting a line.\nPolar area charts may use the following interpolation options: \"basis\", \"cardinal\", \"catmullRom\", \"linear\".\nCartesian area charts may use the following interpolation options: \"basis\", \"cardinal\", \"catmullRom\", \"linear\",\n\"monotoneX\", \"monotoneY\", \"natural\", \"step\", \"stepAfter\", \"stepBefore\"."
        },
        {
          "name": "labelComponent",
          "type": "React.ReactElement<any>",
          "description": "The labelComponent prop takes in an entire label component which will be used\nto create a label for the area. The new element created from the passed labelComponent\nwill be supplied with the following properties: x, y, index, data, verticalAnchor,\ntextAnchor, angle, style, text, and events. any of these props may be overridden\nby passing in props to the supplied component, or modified or ignored within\nthe custom component itself. If labelComponent is omitted, a new ChartLabel\nwill be created with props described above. This labelComponent prop should be used to\nprovide a series label for ChartArea. If individual labels are required for each\ndata point, they should be created by composing ChartArea with VictoryScatter"
        },
        {
          "name": "labels",
          "type": "string[] | number[] | ((data: any) => string | number | null)",
          "description": "The labels prop defines labels that will appear above each bar in your chart.\nThis prop should be given as an array of values or as a function of data.\nIf given as an array, the number of elements in the array should be equal to\nthe length of the data array. Labels may also be added directly to the data object\nlike data={[{x: 1, y: 1, label: \"first\"}]}.\n\n@example [\"spring\", \"summer\", \"fall\", \"winter\"], (datum) => datum.title"
        },
        {
          "name": "maxDomain",
          "type": "number | { x?: number; y?: number }",
          "description": "The maxDomain prop defines a maximum domain value for a chart. This prop is useful in situations where the maximum\ndomain of a chart is static, while the minimum value depends on data or other variable information. If the domain\nprop is set in addition to maximumDomain, domain will be used.\n\nNote: The x value supplied to the maxDomain prop refers to the independent variable, and the y value refers to the\ndependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to\nthe y axis.\n\n@example\n\nmaxDomain={0}\nmaxDomain={{ y: 0 }}"
        },
        {
          "name": "minDomain",
          "type": "number | { x?: number; y?: number }",
          "description": "The minDomain prop defines a minimum domain value for a chart. This prop is useful in situations where the minimum\ndomain of a chart is static, while the maximum value depends on data or other variable information. If the domain\nprop is set in addition to minimumDomain, domain will be used.\n\nNote: The x value supplied to the minDomain prop refers to the independent variable, and the y value refers to the\ndependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to\nthe y axis.\n\n@example\n\nminDomain={0}\nminDomain={{ y: 0 }}"
        },
        {
          "name": "name",
          "type": "string",
          "description": "The name prop is used to reference a component instance when defining shared events."
        },
        {
          "name": "origin",
          "type": "{ x: number, y: number }",
          "description": "Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.\n\nNote: It will not typically be necessary to set an origin prop manually"
        },
        {
          "name": "padding",
          "type": "number | { top: number, bottom: number, left: number, right: number }",
          "description": "The padding props specifies the amount of padding in number of pixels between\nthe edge of the chart and any rendered child components. This prop can be given\nas a number or as an object with padding specified for top, bottom, left\nand right."
        },
        {
          "name": "polar",
          "type": "boolean",
          "description": "Victory components can pass a boolean polar prop to specify whether a label is part of a polar chart."
        },
        {
          "name": "range",
          "type": "number[] | { x: number[], y: number[] }",
          "description": "The range prop describes the dimensions over which data may be plotted. For cartesian coordinate systems, this\ncorresponds to minimum and maximum svg coordinates in the x and y dimension. In polar coordinate systems this\ncorresponds to a range of angles and radii. When this value is not given it will be calculated from the width,\nheight, and padding, or from the startAngle and endAngle in the case of polar charts. All components in a given\nchart must share the same range, so setting this prop on children nested within Chart or\nChartGroup will have no effect. This prop is usually not set manually.\n\n\n@example [low, high] | { x: [low, high], y: [low, high] }\n\nCartesian: range={{ x: [50, 250], y: [50, 250] }}\nPolar: range={{ x: [0, 360], y: [0, 250] }}"
        },
        {
          "name": "samples",
          "type": "number",
          "description": "The samples prop specifies how many individual points to plot when plotting\ny as a function of x. Samples is ignored if x props are provided instead."
        },
        {
          "name": "scale",
          "type": "string | { x: string, y: string }",
          "description": "The scale prop determines which scales your chart should use. This prop can be\ngiven as a string specifying a supported scale (\"linear\", \"time\", \"log\", \"sqrt\"),\nas a d3 scale function, or as an object with scales specified for x and y\n\n\n@example d3Scale.time(), {x: \"linear\", y: \"log\"}"
        },
        {
          "name": "singleQuadrantDomainPadding",
          "type": "boolean | { x?: boolean; y?: boolean }",
          "description": "By default domainPadding is coerced to existing quadrants. This means that if a given domain only includes positive\nvalues, no amount of padding applied by domainPadding will result in a domain with negative values. This is the\ndesired behavior in most cases. For users that need to apply padding without regard to quadrant, the\nsingleQuadrantDomainPadding prop may be used. This prop may be given as a boolean or an object with boolean values\nspecified for \"x\" and/or \"y\". When this prop is false (or false for a given dimension), padding will be applied\nwithout regard to quadrant. If this prop is not specified, domainPadding will be coerced to existing quadrants.\n\nNote: The x value supplied to the singleQuadrantDomainPadding prop refers to the independent variable, and the y\nvalue refers to the dependent variable. This may cause confusion in horizontal charts, as the independent variable\nwill corresponds to the y axis.\n\n@example\n\nsingleQuadrantDomainPadding={false}\nsingleQuadrantDomainPadding={{ x: false }}"
        },
        {
          "name": "sortKey",
          "type": "number | string | Function | string[]",
          "description": "Use the sortKey prop to indicate how data should be sorted. This prop\nis given directly to the lodash sortBy function to be executed on the\nfinal dataset."
        },
        {
          "name": "sortOrder",
          "type": "string",
          "description": "The sortOrder prop specifies whether sorted data should be returned in 'ascending' or 'descending' order."
        },
        {
          "name": "standalone",
          "type": "boolean",
          "description": "The standalone prop determines whether the component will render a standalone svg\nor a <g> tag that will be included in an external svg. Set standalone to false to\ncompose ChartArea with other components within an enclosing <svg> tag."
        },
        {
          "name": "style",
          "type": "{ parent: object, data: object, labels: object }",
          "description": "The style prop specifies styles for your ChartArea. Any valid inline style properties\nwill be applied. Height, width, and padding should be specified via the height,\nwidth, and padding props, as they are used to calculate the alignment of\ncomponents within chart.\n\n\n@example {data: {fill: \"red\"}, labels: {fontSize: 12}}"
        },
        {
          "name": "theme",
          "type": "object",
          "description": "The theme prop takes a style object with nested data, labels, and parent objects.\nYou can create this object yourself, or you can use a theme provided by\nWhen using ChartArea as a solo component, implement the theme directly on\nChartArea. If you are wrapping ChartArea in ChartChart or ChartGroup,\nplease call the theme on the outermost wrapper component instead.",
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
          "name": "width",
          "type": "number",
          "description": "The width props specifies the width of the svg viewBox of the chart container\nThis value should be given as a number of pixels"
        },
        {
          "name": "x",
          "type": "number | string | Function | string[]",
          "description": "The x prop specifies how to access the X value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'x', 'x.value.nested.1.thing', 'x[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "y",
          "type": "number | string | Function | string[]",
          "description": "The y prop specifies how to access the Y value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "y0",
          "type": "number | string | Function | string[]",
          "description": "Use y0 data accessor prop to determine how the component defines the baseline y0 data.\nThis prop is useful for defining custom baselines for components like ChartArea.\nThis prop may be given in a variety of formats.\n\n\n@example 'last_quarter_profit', () => 10, 1, 'employees.salary', [\"employees\", \"salary\"]"
        }
      ]
    },
    {
      "name": "ChartAxis",
      "description": "",
      "props": [
        {
          "name": "animate",
          "type": "boolean | object",
          "description": "The animate prop specifies props for VictoryAnimation to use.\nThe animate prop should also be used to specify enter and exit\ntransition configurations with the `onExit` and `onEnter` namespaces respectively.\n\n\n@example {duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}"
        },
        {
          "name": "axisComponent",
          "type": "React.ReactElement<any>",
          "description": "The axisComponent prop takes in an entire component which will be used\nto create the axis line. The new element created from the passed axisComponent\nwill be supplied with the following properties: x1, y1, x2, y2, style and events.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If an axisComponent\nis not supplied, ChartAxis will render its default AxisLine component."
        },
        {
          "name": "axisLabelComponent",
          "type": "React.ReactElement<any>",
          "description": "The axisLabelComponent prop takes in an entire component which will be used\nto create the axis label. The new element created from the passed axisLabelComponent\nwill be supplied with the following properties: x, y, verticalAnchor, textAnchor,\nangle, transform, style and events. Any of these props may be overridden by\npassing in props to the supplied component, or modified or ignored within\nthe custom component itself. If an axisLabelComponent is not supplied, a new\nChartLabel will be created with props described above"
        },
        {
          "name": "axisValue",
          "type": "number | string | object | Date",
          "description": "The axisValue prop may be used instead of axisAngle to position the dependent axis. Ths prop is useful when\ndependent axes should line up with values on the independent axis."
        },
        {
          "name": "containerComponent",
          "type": "React.ReactElement<any>",
          "description": "The containerComponent prop takes an entire component which will be used to\ncreate a container element for standalone charts.\nThe new element created from the passed containerComponent wil be provided with\nthese props from ChartAxis: height, width, children\n(the chart itself) and style. Props that are not provided by the\nchild chart component include title and desc, both of which\nare intended to add accessibility to Victory components. The more descriptive these props\nare, the more accessible your data will be for people using screen readers.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartAxis will use the default ChartContainer component.\n\n@example <ChartContainer title=\"Chart of Dog Breeds\" desc=\"This chart shows ...\" />",
          "defaultValue": "<ChartContainer />"
        },
        {
          "name": "crossAxis",
          "type": "boolean",
          "description": "This prop specifies whether a given axis is intended to cross another axis."
        },
        {
          "name": "dependentAxis",
          "type": "boolean",
          "description": "The dependentAxis prop specifies whether the axis corresponds to the\ndependent variable (usually y). This prop is useful when composing axis\nwith other components to form a chart."
        },
        {
          "name": "domain",
          "type": "number[] | { x: number[], y: number[] }",
          "description": "The domain prop describes the range of values your axis will include. This prop should be\ngiven as a array of the minimum and maximum expected values for your axis.\nIf this value is not given it will be calculated based on the scale or tickValues.\n\n\n@example [low, high], { x: [low, high], y: [low, high] }\n\n[-1, 1], {x: [0, 100], y: [0, 1]}"
        },
        {
          "name": "domainPadding",
          "type": "number | number[] | { x: number[], y: number[] }",
          "description": "The domainPadding prop specifies a number of pixels of padding to add to the\nbeginning and end of a domain. This prop is useful for explicitly spacing ticks farther\nfrom the origin to prevent crowding. This prop should be given as an object with\nnumbers specified for x and y.\n\n\n@example [left, right], { x: [left, right], y: [bottom, top] }\n\n{x: [10, -10], y: 5}"
        },
        {
          "name": "events",
          "type": "object[]",
          "description": "The event prop take an array of event objects. Event objects are composed of\na target, an eventKey, and eventHandlers. Targets may be any valid style namespace\nfor a given component, so \"axis\", \"axisLabel\", \"ticks\", \"tickLabels\", and \"grid\" are\nall valid targets for ChartAxis events. The eventKey may optionally be used to select a\nsingle element by index rather than an entire set. The eventHandlers object\nshould be given as an object whose keys are standard event names (i.e. onClick)\nand whose values are event callbacks. The return value of an event handler\nbe used to modify other elemnts. The return value should be given as an object or\nan array of objects with optional target and eventKey keys, and a mutation\nkey whose value is a function. The target and eventKey keys will default to those\ncorresponding to the element the event handler was attached to. The mutation\nfunction will be called with the calculated props for the individual selected\nelement (i.e. a single tick), and the object returned from the mutation function\nwill override the props of the selected element via object assignment.\n\n\n@example\nevents={[\n  {\n    target: \"grid\",\n    eventKey: 2,\n    eventHandlers: {\n      onClick: () => {\n        return [\n          {\n            mutation: (props) => {\n              return {style: merge({}, props.style, {stroke: \"orange\"})};\n            }\n          }, {\n            target: \"tickLabels\",\n            mutation: () => {\n              return {text: \"hey\"};\n            }\n          }\n        ];\n      }\n    }\n  }\n]}"
        },
        {
          "name": "externalEventMutations",
          "type": "object[]",
          "description": "ChartAxis uses the standard externalEventMutations prop."
        },
        {
          "name": "fixLabelOverlap",
          "type": "boolean",
          "description": "When true, this prop reduces the number of tick labels to fit the length of the axis.\nLabels are removed at approximately even intervals from the original array of labels.\nThis feature only works well for labels that are approximately evenly spaced."
        },
        {
          "name": "gridComponent",
          "type": "React.ReactElement<any>",
          "description": "The gridComponent prop takes in an entire component which will be used\nto create grid lines. The new element created from the passed gridComponent\nwill be supplied with the following properties: x1, y1, x2, y2, tick, style and events.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a gridComponent\nis not supplied, ChartAxis will render its default GridLine component."
        },
        {
          "name": "groupComponent",
          "type": "React.ReactElement<any>",
          "description": "The groupComponent prop takes an entire component which will be used to\ncreate group elements for use within container elements. This prop defaults\nto a <g> tag on web, and a react-native-svg <G> tag on mobile"
        },
        {
          "name": "height",
          "type": "number",
          "description": "Specifies the height the svg viewBox of the chart container. This value should be given as a\nnumber of pixels.\n\nBecause Victory renders responsive containers, the width and height props do not determine the width and\nheight of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of\npixels will depend on the size of the container the chart is rendered into."
        },
        {
          "name": "invertAxis",
          "type": "boolean",
          "description": "If true, this value will flip the domain of a given axis."
        },
        {
          "name": "label",
          "type": "any",
          "description": "The label prop defines the label that will appear along the axis. This\nprop should be given as a value or an entire, HTML-complete label\ncomponent. If a label component is given, it will be cloned. The new\nelement's properties x, y, textAnchor, verticalAnchor, and transform\nwill have defaults provided by the axis; styles filled out with\ndefaults provided by the axis, and overrides from the label component.\nIf a value is given, a new ChartLabel will be created with props and\nstyles from the axis."
        },
        {
          "name": "maxDomain",
          "type": "number | { x?: number; y?: number }",
          "description": "The maxDomain prop defines a maximum domain value for a chart. This prop is useful in situations where the maximum\ndomain of a chart is static, while the minimum value depends on data or other variable information. If the domain\nprop is set in addition to maximumDomain, domain will be used.\n\nNote: The x value supplied to the maxDomain prop refers to the independent variable, and the y value refers to the\ndependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to\nthe y axis.\n\n@example\n\nmaxDomain={0}\nmaxDomain={{ y: 0 }}"
        },
        {
          "name": "minDomain",
          "type": "number | { x?: number; y?: number }",
          "description": "The minDomain prop defines a minimum domain value for a chart. This prop is useful in situations where the minimum\ndomain of a chart is static, while the maximum value depends on data or other variable information. If the domain\nprop is set in addition to minimumDomain, domain will be used.\n\nNote: The x value supplied to the minDomain prop refers to the independent variable, and the y value refers to the\ndependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to\nthe y axis.\n\n@example\n\nminDomain={0}\nminDomain={{ y: 0 }}"
        },
        {
          "name": "name",
          "type": "string",
          "description": "ChartAxis uses the standard name prop"
        },
        {
          "name": "offsetX",
          "type": "number",
          "description": "This value describes how far from the \"edge\" of its permitted area each axis\nwill be set back in the x-direction.  If this prop is not given,\nthe offset is calculated based on font size, axis orientation, and label padding."
        },
        {
          "name": "offsetY",
          "type": "number",
          "description": "This value describes how far from the \"edge\" of its permitted area each axis\nwill be set back in the y-direction.  If this prop is not given,\nthe offset is calculated based on font size, axis orientation, and label padding."
        },
        {
          "name": "orientation",
          "type": "string",
          "description": "The orientation prop specifies the position and orientation of your axis.\nValid values are 'top', 'bottom', 'left' and 'right'."
        },
        {
          "name": "padding",
          "type": "number | { top: number, bottom: number, left: number, right: number }",
          "description": "The padding props specifies the amount of padding in number of pixels between\nthe edge of the chart and any rendered child components. This prop can be given\nas a number or as an object with padding specified for top, bottom, left\nand right."
        },
        {
          "name": "range",
          "type": "number[] | { x: number[], y: number[] }",
          "description": "The range prop describes the dimensions over which data may be plotted. For cartesian coordinate systems, this\ncorresponds to minimum and maximum svg coordinates in the x and y dimension. In polar coordinate systems this\ncorresponds to a range of angles and radii. When this value is not given it will be calculated from the width,\nheight, and padding, or from the startAngle and endAngle in the case of polar charts. All components in a given\nchart must share the same range, so setting this prop on children nested within Chart, ChartStack, or\nChartGroup will have no effect. This prop is usually not set manually.\n\n\n@example [low, high] | { x: [low, high], y: [low, high] }\n\nCartesian: range={{ x: [50, 250], y: [50, 250] }}\nPolar: range={{ x: [0, 360], y: [0, 250] }}"
        },
        {
          "name": "scale",
          "type": "string | { x: string, y: string }",
          "description": "The scale prop determines which scales your chart should use. This prop can be\ngiven as a string specifying a supported scale (\"linear\", \"time\", \"log\", \"sqrt\"),\nas a d3 scale function, or as an object with scales specified for x and y\n\n\n@example d3Scale.time(), {x: \"linear\", y: \"log\"}"
        },
        {
          "name": "showGrid",
          "type": "boolean",
          "description": "Show axis grid and ticks",
          "defaultValue": "false"
        },
        {
          "name": "singleQuadrantDomainPadding",
          "type": "boolean | { x?: boolean; y?: boolean }",
          "description": "By default domainPadding is coerced to existing quadrants. This means that if a given domain only includes positive\nvalues, no amount of padding applied by domainPadding will result in a domain with negative values. This is the\ndesired behavior in most cases. For users that need to apply padding without regard to quadrant, the\nsingleQuadrantDomainPadding prop may be used. This prop may be given as a boolean or an object with boolean values\nspecified for \"x\" and/or \"y\". When this prop is false (or false for a given dimension), padding will be applied\nwithout regard to quadrant. If this prop is not specified, domainPadding will be coerced to existing quadrants.\n\nNote: The x value supplied to the singleQuadrantDomainPadding prop refers to the independent variable, and the y\nvalue refers to the dependent variable. This may cause confusion in horizontal charts, as the independent variable\nwill corresponds to the y axis.\n\n@example\n\nsingleQuadrantDomainPadding={false}\nsingleQuadrantDomainPadding={{ x: false }}"
        },
        {
          "name": "standalone",
          "type": "boolean",
          "description": "The standalone prop determines whether the component will render a standalone svg\nor a <g> tag that will be included in an external svg. Set standalone to false to\ncompose ChartAxis with other components within an enclosing <svg> tag."
        },
        {
          "name": "style",
          "type": "{ axis: object, axisLabel: object, grid: object, ticks: object, tickLabels: object }",
          "description": "The style prop defines the style of the component. The style prop should be given as an object\nwith styles defined for parent, axis, axisLabel, grid, ticks, and tickLabels. Any valid svg\nstyles are supported, but width, height, and padding should be specified via props as they\ndetermine relative layout for components in Chart. Functional styles may be defined for\ngrid, tick, and tickLabel style properties, and they will be evaluated with each tick.\n\nNote: When a component is rendered as a child of another Victory component, or within a custom\n<svg> element with standalone={false} parent styles will be applied to the enclosing <g> tag.\nMany styles that can be applied to a parent <svg> will not be expressed when applied to a <g>.\n\nNote: custom angle and verticalAnchor properties may be included in labels styles."
        },
        {
          "name": "theme",
          "type": "object",
          "description": "The theme prop takes a style object with nested data, labels, and parent objects.\nYou can create this object yourself, or you can use a theme provided by\nWhen using ChartAxis as a solo component, implement the theme directly on\nChartAxis. If you are wrapping ChartAxis in ChartChart or ChartGroup,\nplease call the theme on the outermost wrapper component instead.",
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
          "name": "tickComponent",
          "type": "React.ReactElement<any>",
          "description": "The tickComponent prop takes in an entire component which will be used\nto create tick lines. The new element created from the passed tickComponent\nwill be supplied with the following properties: x1, y1, x2, y2, tick, style and events.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a tickComponent\nis not supplied, ChartAxis will render its default Tick component."
        },
        {
          "name": "tickCount",
          "type": "number",
          "description": "The tickCount prop specifies approximately how many ticks should be drawn on the axis if\ntickValues are not explicitly provided. This value is calculated by d3 scale and\nprioritizes returning \"nice\" values and evenly spaced ticks over an exact number of ticks.\nIf you need an exact number of ticks, please specify them via the tickValues prop.\nThis prop must have a value greater than zero."
        },
        {
          "name": "tickFormat",
          "type": "any[] | ((tick: any, index: number, ticks: any[]) => string | number)",
          "description": "The tickFormat prop specifies how tick values should be expressed visually.\ntickFormat can be given as a function to be applied to every tickValue, or as\nan array of display values for each tickValue.\n\n@example d3.time.format(\"%Y\"), (x) => x.toPrecision(2), [\"first\", \"second\", \"third\"]"
        },
        {
          "name": "tickLabelComponent",
          "type": "React.ReactElement<any>",
          "description": "The tickLabelComponent prop takes in an entire component which will be used\nto create the tick labels. The new element created from the passed tickLabelComponent\nwill be supplied with the following properties: x, y, verticalAnchor, textAnchor,\nangle, tick, style and events. Any of these props may be overridden by\npassing in props to the supplied component, or modified or ignored within\nthe custom component itself. If an tickLabelComponent is not supplied, a new\nChartLabel will be created with props described above"
        },
        {
          "name": "tickValues",
          "type": "any[]",
          "description": "The tickValues prop explicitly specifies which tick values to draw on the axis.\n\n@example [\"apples\", \"bananas\", \"oranges\"], [2, 4, 6, 8]"
        },
        {
          "name": "width",
          "type": "number",
          "description": "Specifies the width of the svg viewBox of the chart container. This value should be given as a\nnumber of pixels.\n\nBecause Victory renders responsive containers, the width and height props do not determine the width and\nheight of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of\npixels will depend on the size of the container the chart is rendered into.\n\nNote: innerRadius may need to be set when using this property."
        }
      ]
    },
    {
      "name": "ChartBar",
      "description": "",
      "props": [
        {
          "name": "alignment",
          "type": "string",
          "description": "The alignment prop specifies how bars should be aligned relative to their data points.\nThis prop may be given as “start”, “middle” or “end”. When this prop is not specified,\nbars will have “middle” alignment relative to their data points."
        },
        {
          "name": "animate",
          "type": "boolean | object",
          "description": "The animate prop specifies props for VictoryAnimation to use.\nThe animate prop should also be used to specify enter and exit\ntransition configurations with the `onExit` and `onEnter` namespaces respectively.\n\n\n@example {duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}"
        },
        {
          "name": "barRatio",
          "type": "number",
          "description": "The barRatio prop specifies an approximate ratio between bar widths and spaces between bars.\nWhen width is not specified via the barWidth prop or in bar styles, the barRatio prop will\nbe used to calculate a default width for each bar given the total number of bars in the data series\nand the overall width of the chart."
        },
        {
          "name": "barWidth",
          "type": "number | Function",
          "description": "The barWidth prop is used to specify the width of each bar. This prop may be given as\na number of pixels or as a function that returns a number. When this prop is given as\na function, it will be evaluated with the arguments datum, and active. When this value\nis not given, a default value will be calculated based on the overall dimensions of\nthe chart, and the number of bars."
        },
        {
          "name": "categories",
          "type": "string[] | { x: string[], y: string[] }",
          "description": "The categories prop specifies how categorical data for a chart should be ordered.\nThis prop should be given as an array of string values, or an object with\nthese arrays of values specified for x and y. If this prop is not set,\ncategorical data will be plotted in the order it was given in the data array\n\n\n@example [\"dogs\", \"cats\", \"mice\"]"
        },
        {
          "name": "containerComponent",
          "type": "React.ReactElement<any>",
          "description": "The containerComponent prop takes an entire component which will be used to\ncreate a container element for standalone charts.\nThe new element created from the passed containerComponent wil be provided with\nthese props from ChartBar: height, width, children\n(the chart itself) and style. Props that are not provided by the\nchild chart component include title and desc, both of which\nare intended to add accessibility to Victory components. The more descriptive these props\nare, the more accessible your data will be for people using screen readers.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartBar will use the default ChartContainer component.\n\n@example <ChartContainer title=\"Chart of Dog Breeds\" desc=\"This chart shows...\" />",
          "defaultValue": "<ChartContainer />"
        },
        {
          "name": "cornerRadius",
          "type": "Function | number | { top, bottom, topLeft, topRight, bottomLeft, bottomRight }",
          "description": "The cornerRadius prop specifies a radius to apply to each bar.\nIf this prop is given as a single number, the radius will only be applied to the top of each bar.\nWhen this prop is given as a function, it will be evaluated with the arguments datum, and active.\n\n\n@example {topLeft: ({ datum }) => datum.x * 4}"
        },
        {
          "name": "data",
          "type": "any[]",
          "description": "The data prop specifies the data to be plotted. Data should be in the form of an array\nof data points, or an array of arrays of data points for multiple datasets.\nEach data point may be any format you wish (depending on the `x` and `y` accessor props),\nbut by default, an object with x and y properties is expected.\n\n@example\n\n[{x: 1, y: 2}, {x: 2, y: 3}], [[1, 2], [2, 3]],\n[[{x: \"a\", y: 1}, {x: \"b\", y: 2}], [{x: \"a\", y: 2}, {x: \"b\", y: 3}]]"
        },
        {
          "name": "dataComponent",
          "type": "React.ReactElement<any>",
          "description": "The dataComponent prop takes an entire component which will be used to create a bar.\nThe new element created from the passed dataComponent will be provided with the\nfollowing properties calculated by ChartBar: a scale, style, events, interpolation,\nand an array of modified data objects (including x, y, and calculated y0 and y1).\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartBar will use its default Bar component."
        },
        {
          "name": "domain",
          "type": "number[] | { x: number[], y: number[] }",
          "description": "The domain prop describes the range of values your chart will cover. This prop can be\ngiven as a array of the minimum and maximum expected values for your bar chart,\nor as an object that specifies separate arrays for x and y.\nIf this prop is not provided, a domain will be calculated from data, or other\navailable information.\n\n\n@example [low, high], { x: [low, high], y: [low, high] }\n\n[-1, 1], {x: [0, 100], y: [0, 1]}"
        },
        {
          "name": "domainPadding",
          "type": "number | number[] | { x: number[], y: number[] }",
          "description": "The domainPadding prop specifies a number of pixels of padding to add to the\nbeginning and end of a domain. This prop is useful for explicitly spacing ticks farther\nfrom the origin to prevent crowding. This prop should be given as an object with\nnumbers specified for x and y.\n\n\n@example [left, right], { x: [left, right], y: [bottom, top] }\n\n{x: [10, -10], y: 5}"
        },
        {
          "name": "eventKey",
          "type": "number | string | Function",
          "description": "Similar to data accessor props `x` and `y`, this prop may be used to functionally\nassign eventKeys to data"
        },
        {
          "name": "events",
          "type": "object[]",
          "description": "The event prop take an array of event objects. Event objects are composed of\na target, an eventKey, and eventHandlers. Targets may be any valid style namespace\nfor a given component, so \"data\" and \"labels\" are all valid targets for VictoryBar events.\nThe eventKey may optionally be used to select a single element by index rather than an entire\nset. The eventHandlers object should be given as an object whose keys are standard\nevent names (i.e. onClick) and whose values are event callbacks. The return value\nof an event handler is used to modify elemnts. The return value should be given\nas an object or an array of objects with optional target and eventKey keys,\nand a mutation key whose value is a function. The target and eventKey keys\nwill default to those corresponding to the element the event handler was attached to.\nThe mutation function will be called with the calculated props for the individual selected\nelement (i.e. a single bar), and the object returned from the mutation function\nwill override the props of the selected element via object assignment.\n\n\n@example\nevents={[\n  {\n    target: \"data\",\n    eventKey: \"thisOne\",\n    eventHandlers: {\n      onClick: () => {\n        return [\n           {\n             eventKey: \"theOtherOne\",\n             mutation: (props) => {\n               return {style: merge({}, props.style, {fill: \"orange\"})};\n             }\n           }, {\n             eventKey: \"theOtherOne\",\n             target: \"labels\",\n             mutation: () => {\n               return {text: \"hey\"};\n             }\n           }\n         ];\n      }\n    }\n  }\n]}"
        },
        {
          "name": "externalEventMutations",
          "type": "object[]",
          "description": "ChartBar uses the standard externalEventMutations prop."
        },
        {
          "name": "groupComponent",
          "type": "React.ReactElement<any>",
          "description": "The groupComponent prop takes an entire component which will be used to\ncreate group elements for use within container elements. This prop defaults\nto a <g> tag on web, and a react-native-svg <G> tag on mobile"
        },
        {
          "name": "height",
          "type": "number",
          "description": "The height props specifies the height the svg viewBox of the chart container.\nThis value should be given as a number of pixels"
        },
        {
          "name": "horizontal",
          "type": "boolean",
          "description": "The horizontal prop determines whether the bars will be laid vertically or\nhorizontally. The bars will be vertical if this prop is false or unspecified,\nor horizontal if the prop is set to true."
        },
        {
          "name": "labelComponent",
          "type": "React.ReactElement<any>",
          "description": "The labelComponent prop takes in an entire label component which will be used\nto create a label for the bar. The new element created from the passed labelComponent\nwill be supplied with the following properties: x, y, index, data, verticalAnchor,\ntextAnchor, angle, style, text, and events. any of these props may be overridden\nby passing in props to the supplied component, or modified or ignored within\nthe custom component itself. If labelComponent is omitted, a new ChartLabel\nwill be created with props described above. This labelComponent prop should be used to\nprovide a series label for ChartBar. If individual labels are required for each\ndata point, they should be created by composing ChartBar with VictoryScatter"
        },
        {
          "name": "labels",
          "type": "string[] | number[] | ((data: any) => string | number | null)",
          "description": "The labels prop defines labels that will appear above each bar in your chart.\nThis prop should be given as an array of values or as a function of data.\nIf given as an array, the number of elements in the array should be equal to\nthe length of the data array. Labels may also be added directly to the data object\nlike data={[{x: 1, y: 1, label: \"first\"}]}.\n\n@example [\"spring\", \"summer\", \"fall\", \"winter\"], (datum) => datum.title"
        },
        {
          "name": "maxDomain",
          "type": "number | { x?: number; y?: number }",
          "description": "The maxDomain prop defines a maximum domain value for a chart. This prop is useful in situations where the maximum\ndomain of a chart is static, while the minimum value depends on data or other variable information. If the domain\nprop is set in addition to maximumDomain, domain will be used.\n\nNote: The x value supplied to the maxDomain prop refers to the independent variable, and the y value refers to the\ndependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to\nthe y axis.\n\n@example\n\nmaxDomain={0}\nmaxDomain={{ y: 0 }}"
        },
        {
          "name": "minDomain",
          "type": "number | { x?: number; y?: number }",
          "description": "The minDomain prop defines a minimum domain value for a chart. This prop is useful in situations where the minimum\ndomain of a chart is static, while the maximum value depends on data or other variable information. If the domain\nprop is set in addition to minimumDomain, domain will be used.\n\nNote: The x value supplied to the minDomain prop refers to the independent variable, and the y value refers to the\ndependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to\nthe y axis.\n\n@example\n\nminDomain={0}\nminDomain={{ y: 0 }}"
        },
        {
          "name": "name",
          "type": "string",
          "description": "The name prop is used to reference a component instance when defining shared events."
        },
        {
          "name": "origin",
          "type": "{ x: number, y: number }",
          "description": "Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.\n\nNote: It will not typically be necessary to set an origin prop manually"
        },
        {
          "name": "padding",
          "type": "number | { top: number, bottom: number, left: number, right: number }",
          "description": "The padding props specifies the amount of padding in number of pixels between\nthe edge of the chart and any rendered child components. This prop can be given\nas a number or as an object with padding specified for top, bottom, left\nand right."
        },
        {
          "name": "range",
          "type": "number[] | { x: number[], y: number[] }",
          "description": "The range prop describes the dimensions over which data may be plotted. For cartesian coordinate systems, this\ncorresponds to minimum and maximum svg coordinates in the x and y dimension. In polar coordinate systems this\ncorresponds to a range of angles and radii. When this value is not given it will be calculated from the width,\nheight, and padding, or from the startAngle and endAngle in the case of polar charts. All components in a given\nchart must share the same range, so setting this prop on children nested within Chart or\nChartGroup will have no effect. This prop is usually not set manually.\n\n\n@example [low, high] | { x: [low, high], y: [low, high] }\n\nCartesian: range={{ x: [50, 250], y: [50, 250] }}\nPolar: range={{ x: [0, 360], y: [0, 250] }}"
        },
        {
          "name": "samples",
          "type": "number",
          "description": "The samples prop specifies how many individual points to plot when plotting\ny as a function of x. Samples is ignored if x props are provided instead."
        },
        {
          "name": "scale",
          "type": "string | { x: string, y: string }",
          "description": "The scale prop determines which scales your chart should use. This prop can be\ngiven as a string specifying a supported scale (\"linear\", \"time\", \"log\", \"sqrt\"),\nas a d3 scale function, or as an object with scales specified for x and y\n\n\n@example d3Scale.time(), {x: \"linear\", y: \"log\"}"
        },
        {
          "name": "singleQuadrantDomainPadding",
          "type": "boolean | { x?: boolean; y?: boolean }",
          "description": "By default domainPadding is coerced to existing quadrants. This means that if a given domain only includes positive\nvalues, no amount of padding applied by domainPadding will result in a domain with negative values. This is the\ndesired behavior in most cases. For users that need to apply padding without regard to quadrant, the\nsingleQuadrantDomainPadding prop may be used. This prop may be given as a boolean or an object with boolean values\nspecified for \"x\" and/or \"y\". When this prop is false (or false for a given dimension), padding will be applied\nwithout regard to quadrant. If this prop is not specified, domainPadding will be coerced to existing quadrants.\n\nNote: The x value supplied to the singleQuadrantDomainPadding prop refers to the independent variable, and the y\nvalue refers to the dependent variable. This may cause confusion in horizontal charts, as the independent variable\nwill corresponds to the y axis.\n\n@example\n\nsingleQuadrantDomainPadding={false}\nsingleQuadrantDomainPadding={{ x: false }}"
        },
        {
          "name": "sortKey",
          "type": "number | string | Function | string[]",
          "description": "Use the sortKey prop to indicate how data should be sorted. This prop\nis given directly to the lodash sortBy function to be executed on the\nfinal dataset."
        },
        {
          "name": "sortOrder",
          "type": "string",
          "description": "The sortOrder prop specifies whether sorted data should be returned in 'ascending' or 'descending' order."
        },
        {
          "name": "standalone",
          "type": "boolean",
          "description": "The standalone prop determines whether the component will render a standalone svg\nor a <g> tag that will be included in an external svg. Set standalone to false to\ncompose ChartBar with other components within an enclosing <svg> tag."
        },
        {
          "name": "style",
          "type": "{ parent: object, data: object, labels: object }",
          "description": "The style prop specifies styles for your ChartBar. Any valid inline style properties\nwill be applied. Height, width, and padding should be specified via the height,\nwidth, and padding props, as they are used to calculate the alignment of\ncomponents within chart.\n\n\n@example {data: {fill: \"red\"}, labels: {fontSize: 12}}"
        },
        {
          "name": "theme",
          "type": "object",
          "description": "The theme prop takes a style object with nested data, labels, and parent objects.\nYou can create this object yourself, or you can use a theme provided by\nWhen using ChartBar as a solo component, implement the theme directly on\nChartBar. If you are wrapping ChartBar in ChartChart or ChartGroup,\nplease call the theme on the outermost wrapper component instead.",
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
          "name": "width",
          "type": "number",
          "description": "The width props specifies the width of the svg viewBox of the chart container\nThis value should be given as a number of pixels"
        },
        {
          "name": "x",
          "type": "number | string | Function | string[]",
          "description": "The x prop specifies how to access the X value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'x', 'x.value.nested.1.thing', 'x[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "y",
          "type": "number | string | Function | string[]",
          "description": "The y prop specifies how to access the Y value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "y0",
          "type": "number | string | Function | string[]",
          "description": "Use y0 data accessor prop to determine how the component defines the baseline y0 data.\nThis prop is useful for defining custom baselines for components like ChartBar.\nThis prop may be given in a variety of formats.\n\n\n@example 'last_quarter_profit', () => 10, 1, 'employees.salary', [\"employees\", \"salary\"]"
        }
      ]
    },
    {
      "name": "ChartDonut",
      "description": "",
      "props": [
        {
          "name": "allowTooltip",
          "type": "boolean",
          "description": "Specifies the tooltip capability of the container component. A value of true allows the chart to add a\nChartTooltip component to the labelComponent property. This is a shortcut to display tooltips when the labels\nproperty is also provided.",
          "defaultValue": "true"
        },
        {
          "name": "animate",
          "type": "boolean | object",
          "description": "The animate prop specifies props for VictoryAnimation to use.\nThe animate prop should also be used to specify enter and exit\ntransition configurations with the `onExit` and `onEnter` namespaces respectively.\n\n\n@example {duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}"
        },
        {
          "name": "ariaDesc",
          "type": "string",
          "description": "The ariaDesc prop specifies the description of the chart/SVG to assist with\naccessibility for screen readers.\n\nNote: Overridden by the desc prop of containerComponent"
        },
        {
          "name": "ariaTitle",
          "type": "string",
          "description": "The ariaTitle prop specifies the title to be applied to the SVG to assist\naccessibility for screen readers.\n\nNote: Overridden by the title prop of containerComponent"
        },
        {
          "name": "capHeight",
          "type": "number | string | Function",
          "description": "The capHeight prop defines a text metric for the font being used: the expected height of capital letters.\nThis is necessary because of SVG, which (a) positions the *bottom* of the text at `y`, and (b) has no notion of\nline height. The value should ideally use the same units as `lineHeight` and `dy`, preferably ems. If given a\nunitless number, it is assumed to be ems.",
          "defaultValue": "1.1"
        },
        {
          "name": "categories",
          "type": "string[] | { x: string[], y: string[] }",
          "description": "The categories prop specifies how categorical data for a chart should be ordered.\nThis prop should be given as an array of string values, or an object with\nthese arrays of values specified for x and y. If this prop is not set,\ncategorical data will be plotted in the order it was given in the data array\n\n\n@example [\"dogs\", \"cats\", \"mice\"]"
        },
        {
          "name": "colorScale",
          "type": "string[]",
          "description": "The colorScale prop is an optional prop that defines the color scale the pie\nwill be created on. This prop should be given as an array of CSS colors, or as a string\ncorresponding to one of the built in color scales. ChartDonut will automatically assign\nvalues from this color scale to the pie slices unless colors are explicitly provided in the\ndata object"
        },
        {
          "name": "constrainToVisibleArea",
          "type": "boolean",
          "description": "The constrainToVisibleArea prop determines whether to coerce tooltips so that they fit within the visible area of\nthe chart. When this prop is set to true, tooltip pointers will still point to the correct data point, but the\ncenter of the tooltip will be shifted to fit within the overall width and height of the svg Victory renders."
        },
        {
          "name": "containerComponent",
          "type": "React.ReactElement<any>",
          "description": "The containerComponent prop takes an entire component which will be used to\ncreate a container element for standalone charts.\nThe new element created from the passed containerComponent wil be provided with\nthese props from ChartDonut: height, width, children\n(the chart itself) and style. Props that are not provided by the\nchild chart component include title and desc, both of which\nare intended to add accessibility to Victory components. The more descriptive these props\nare, the more accessible your data will be for people using screen readers.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartDonut will use the default ChartContainer component.\n\n@example <ChartContainer title=\"Chart of Dog Breeds\" desc=\"This chart shows ...\" />",
          "defaultValue": "<ChartContainer />"
        },
        {
          "name": "cornerRadius",
          "type": "number | Function",
          "description": "Set the cornerRadius for every dataComponent (Slice by default) within ChartDonut"
        },
        {
          "name": "data",
          "type": "any[]",
          "description": "The data prop specifies the data to be plotted,\nwhere data X-value is the slice label (string or number),\nand Y-value is the corresponding number value represented by the slice\nData should be in the form of an array of data points.\nEach data point may be any format you wish (depending on the `x` and `y` accessor props),\nbut by default, an object with x and y properties is expected.\n\n@example\n\n[{x: 1, y: 2}, {x: 2, y: 3}], [[1, 2], [2, 3]],\n[[{x: \"a\", y: 1}, {x: \"b\", y: 2}], [{x: \"a\", y: 2}, {x: \"b\", y: 3}]]"
        },
        {
          "name": "dataComponent",
          "type": "React.ReactElement<any>",
          "description": "The dataComponent prop takes an entire, HTML-complete data component which will be used to\ncreate slices for each datum in the pie chart. The new element created from the passed\ndataComponent will have the property datum set by the pie chart for the point it renders;\nproperties style and pathFunction calculated by ChartDonut; an index property set\ncorresponding to the location of the datum in the data provided to the pie; events bound to\nthe ChartDonut; and the d3 compatible slice object.\nIf a dataComponent is not provided, ChartDonut's Slice component will be used."
        },
        {
          "name": "endAngle",
          "type": "number",
          "description": "The overall end angle of the pie in degrees. This prop is used in conjunction with\nstartAngle to create a pie that spans only a segment of a circle."
        },
        {
          "name": "eventKey",
          "type": "number | string | Function",
          "description": "Similar to data accessor props `x` and `y`, this prop may be used to functionally\nassign eventKeys to data"
        },
        {
          "name": "events",
          "type": "object[]",
          "description": "The event prop takes an array of event objects. Event objects are composed of\na target, an eventKey, and eventHandlers. Targets may be any valid style namespace\nfor a given component, so \"data\" and \"labels\" are all valid targets for ChartDonut\nevents. The eventKey may optionally be used to select a single element by index rather than\nan entire set. The eventHandlers object should be given as an object whose keys are standard\nevent names (i.e. onClick) and whose values are event callbacks. The return value\nof an event handler is used to modify elemnts. The return value should be given\nas an object or an array of objects with optional target and eventKey keys,\nand a mutation key whose value is a function. The target and eventKey keys\nwill default to those corresponding to the element the event handler was attached to.\nThe mutation function will be called with the calculated props for the individual selected\nelement (i.e. a single bar), and the object returned from the mutation function\nwill override the props of the selected element via object assignment.\n\n\n@example\nevents={[\n  {\n    target: \"data\",\n    eventKey: 1,\n    eventHandlers: {\n      onClick: () => {\n        return [\n           {\n             eventKey: 2,\n             mutation: (props) => {\n               return {style: merge({}, props.style, {fill: \"orange\"})};\n             }\n           }, {\n             eventKey: 2,\n             target: \"labels\",\n             mutation: () => {\n               return {text: \"hey\"};\n             }\n           }\n         ];\n      }\n    }\n  }\n]}"
        },
        {
          "name": "externalEventMutations",
          "type": "object[]",
          "description": "ChartDonut uses the standard externalEventMutations prop."
        },
        {
          "name": "groupComponent",
          "type": "React.ReactElement<any>",
          "description": "The groupComponent prop takes an entire component which will be used to\ncreate group elements for use within container elements. This prop defaults\nto a <g> tag on web, and a react-native-svg <G> tag on mobile"
        },
        {
          "name": "hasPatterns",
          "type": "boolean | boolean[]",
          "description": "The hasPatterns prop is an optional prop that indicates whether a pattern is shown for a chart.\nSVG patterns are dynamically generated (unique to each chart) in order to apply colors from the selected\ncolor theme or custom color scale. Those generated patterns are applied in a specific order (via a URL), similar\nto the color theme ordering defined by PatternFly. If the multi-color theme was in use; for example, colorized\npatterns would be displayed in that same order. Create custom patterns via the patternScale prop.\n\nNote: Not all components are supported; for example, ChartLine, ChartBullet, ChartThreshold, etc.\n\n@example hasPatterns={ true }\n@example hasPatterns={[ true, true, false ]}",
          "beta": true
        },
        {
          "name": "height",
          "type": "number",
          "description": "Specifies the height the svg viewBox of the chart container. This value should be given as a\nnumber of pixels.\n\nBecause Victory renders responsive containers, the width and height props do not determine the width and\nheight of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of\npixels will depend on the size of the container the chart is rendered into.\n\nNote: When adding a legend, height (the overall SVG height) may need to be larger than donutHeight (the donut size)\nin order to accommodate the extra legend.\n\nBy default, donutHeight is the min. of either height or width. This covers most use cases in order to accommodate\nlegends within the same SVG. However, donutHeight (not height) may need to be set in order to adjust the donut height.\n\nTypically, the parent container is set to the same width in order to maintain the aspect ratio.",
          "defaultValue": "theme.pie.height"
        },
        {
          "name": "innerRadius",
          "type": "number | Function",
          "description": "When creating a donut chart, this prop determines the number of pixels between\nthe center of the chart and the inner edge."
        },
        {
          "name": "labelComponent",
          "type": "React.ReactElement<any>",
          "description": "The labelComponent prop takes in an entire label component which will be used\nto create a label for the area. The new element created from the passed labelComponent\nwill be supplied with the following properties: x, y, index, data, verticalAnchor,\ntextAnchor, angle, style, text, and events. any of these props may be overridden\nby passing in props to the supplied component, or modified or ignored within\nthe custom component itself. If labelComponent is omitted, a new ChartLabel\nwill be created with props described above. This labelComponent prop should be used to\nprovide a series label for ChartDonut. If individual labels are required for each\ndata point, they should be created by composing ChartDonut with VictoryScatter"
        },
        {
          "name": "labelPosition",
          "type": "string | Function",
          "description": "The labelPosition prop specifies the angular position of each label relative to its corresponding slice.\nWhen this prop is not given, the label will be positioned at the centroid of each slice."
        },
        {
          "name": "labelRadius",
          "type": "number | Function",
          "description": "The labelRadius prop defines the radius of the arc that will be used for positioning each slice label.\nIf this prop is not set, the label radius will default to the radius of the pie + label padding."
        },
        {
          "name": "labels",
          "type": "string[] | number[] | ((data: any) => string | number | null)",
          "description": "The labels prop defines labels that will appear above each bar in your chart.\nThis prop should be given as an array of values or as a function of data.\nIf given as an array, the number of elements in the array should be equal to\nthe length of the data array. Labels may also be added directly to the data object\nlike data={[{x: 1, y: 1, label: \"first\"}]}.\n\n@example [\"spring\", \"summer\", \"fall\", \"winter\"], (datum) => datum.title"
        },
        {
          "name": "legendAllowWrap",
          "type": "boolean",
          "description": "Allows legend items to wrap. A value of true allows the legend to wrap onto the next line\nif its container is not wide enough.\n\nNote: This is overridden by the legendItemsPerRow property"
        },
        {
          "name": "legendComponent",
          "type": "React.ReactElement<any>",
          "description": "The legend component to render with chart.\n\nNote: Use legendData so the legend width can be calculated and positioned properly.\nDefault legend properties may be applied"
        },
        {
          "name": "legendData",
          "type": "{\n  name?: string;\n  symbol?: {\n    fill?: string;\n    type?: string;\n  };\n}[]",
          "description": "Specify data via the data prop. ChartLegend expects data as an\narray of objects with name (required), symbol, and labels properties.\nThe data prop must be given as an array.\n\n@example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}"
        },
        {
          "name": "legendOrientation",
          "type": "'horizontal' | 'vertical'",
          "description": "The orientation prop takes a string that defines whether legend data\nare displayed in a row or column. When orientation is \"horizontal\",\nlegend items will be displayed in a single row. When orientation is\n\"vertical\", legend items will be displayed in a single column. Line\nand text-wrapping is not currently supported, so \"vertical\"\norientation is both the default setting and recommended for\ndisplaying many series of data."
        },
        {
          "name": "legendPosition",
          "type": "'bottom' | 'right'",
          "description": "The legend position relation to the donut chart. Valid values are 'bottom' and 'right'\n\nNote: When adding a legend, padding may need to be adjusted in order to accommodate the extra legend. In some\ncases, the legend may not be visible until enough padding is applied.",
          "defaultValue": "ChartCommonStyles.legend.position"
        },
        {
          "name": "name",
          "type": "string",
          "description": "The name prop is used to reference a component instance when defining shared events."
        },
        {
          "name": "origin",
          "type": "{ x: number, y: number }",
          "description": "Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.\n\nNote: It will not typically be necessary to set an origin prop manually"
        },
        {
          "name": "padAngle",
          "type": "number | Function",
          "description": "The padAngle prop determines the amount of separation between adjacent data slices\nin number of degrees"
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
          "name": "radius",
          "type": "number | Function",
          "description": "Specifies the radius of the chart. If this property is not provided it is computed\nfrom width, height, and padding props"
        },
        {
          "name": "sortKey",
          "type": "number | string | Function | string[]",
          "description": "Use the sortKey prop to indicate how data should be sorted. This prop\nis given directly to the lodash sortBy function to be executed on the\nfinal dataset."
        },
        {
          "name": "sortOrder",
          "type": "string",
          "description": "The sortOrder prop specifies whether sorted data should be returned in 'ascending' or 'descending' order."
        },
        {
          "name": "standalone",
          "type": "boolean",
          "description": "The standalone prop determines whether the component will render a standalone svg\nor a <g> tag that will be included in an external svg. Set standalone to false to\ncompose ChartDonut with other components within an enclosing <svg> tag.",
          "defaultValue": "true"
        },
        {
          "name": "startAngle",
          "type": "number",
          "description": "The overall start angle of the pie in degrees. This prop is used in conjunction with\nendAngle to create a pie that spans only a segment of a circle."
        },
        {
          "name": "style",
          "type": "{ parent: object, data: object, labels: object }",
          "description": "The style prop specifies styles for your pie. ChartDonut relies on Radium,\nso valid Radium style objects should work for this prop. Height, width, and\npadding should be specified via the height, width, and padding props.\n\n\n@example {data: {stroke: \"black\"}, label: {fontSize: 10}}"
        },
        {
          "name": "subTitle",
          "type": "string",
          "description": "The subtitle for the donut chart"
        },
        {
          "name": "subTitleComponent",
          "type": "React.ReactElement<any>",
          "description": "The label component to render the chart subTitle.\n\nWhen overriding the subTitleComponent prop, title and subTitle will be centered independently. You may choose to\nuse the x and y props of ChartLabel to adjust the center position. For example:\n\n<pre>\nsubTitle=\"Pets\"\nsubTitleComponent={<ChartLabel y={130} />}\ntitle={100}\ntitleComponent={<ChartLabel y={107} />}\n</pre>\n\nNote: Default label properties may be applied"
        },
        {
          "name": "subTitlePosition",
          "type": "'bottom' | 'center' | 'right'",
          "description": "The orientation of the subtitle position. Valid values are 'bottom', 'center', and 'right'",
          "defaultValue": "ChartDonutStyles.label.subTitlePosition"
        },
        {
          "name": "theme",
          "type": "object",
          "description": "The theme prop takes a style object with nested data, labels, and parent objects.\nYou can create this object yourself, or you can use a theme provided by\nWhen using ChartDonut as a solo component, implement the theme directly on\nChartDonut. If you are wrapping ChartDonut in ChartChart or ChartGroup,\nplease call the theme on the outermost wrapper component instead.",
          "defaultValue": "getDonutTheme(themeColor)"
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
          "type": "string",
          "description": "The title for the donut chart"
        },
        {
          "name": "titleComponent",
          "type": "React.ReactElement<any>",
          "description": "The label component to render the chart title.\n\nWhen centering both title and subTitle props, it's possible to override both styles via an array provided to\nChartLabel. The first item in the array is associated with title styles, while the second item in the array is\nassociated with subtitle styles.\n\n<pre>\nsubTitle=\"Pets\"\ntitle={100}\ntitleComponent={\n  <ChartLabel style={[{\n      fill: 'red', // title color\n      fontSize: 24\n    }, {\n      fill: 'blue', // subtitle color\n      fontSize: 14\n    }]}\n  />\n}\n</pre>\n\nIn this case, both title and subTitle will be centered together. However, should you also override the\nsubTitleComponent prop, title and subTitle will be centered independently. You may choose to\nuse the x and y props of ChartLabel to adjust the center position. For example:\n\n<pre>\nsubTitle=\"Pets\"\nsubTitleComponent={<ChartLabel y={130} />}\ntitle={100}\ntitleComponent={<ChartLabel y={107} />}\n</pre>\n\nNote: Default label properties may be applied",
          "defaultValue": "<ChartLabel />"
        },
        {
          "name": "width",
          "type": "number",
          "description": "Specifies the width of the svg viewBox of the chart container. This value should be given as a number of pixels.\n\nBecause Victory renders responsive containers, the width and height props do not determine the width and\nheight of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of\npixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set\nto the same width in order to maintain the aspect ratio.",
          "defaultValue": "theme.pie.width"
        },
        {
          "name": "x",
          "type": "number | string | Function | string[]",
          "description": "The x prop specifies how to access the X value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'x', 'x.value.nested.1.thing', 'x[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "y",
          "type": "number | string | Function | string[]",
          "description": "The y prop specifies how to access the Y value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)"
        }
      ]
    },
    {
      "name": "ChartDonutThreshold",
      "description": "",
      "props": [
        {
          "name": "allowTooltip",
          "type": "boolean",
          "description": "Specifies the tooltip capability of the container component. A value of true allows the chart to add a\nChartTooltip component to the labelComponent property. This is a shortcut to display tooltips when the labels\nproperty is also provided.",
          "defaultValue": "true"
        },
        {
          "name": "animate",
          "type": "boolean | object",
          "description": "The animate prop specifies props for VictoryAnimation to use.\nThe animate prop should also be used to specify enter and exit\ntransition configurations with the `onExit` and `onEnter` namespaces respectively.\n\n\n@example\n{duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}"
        },
        {
          "name": "ariaDesc",
          "type": "string",
          "description": "The ariaDesc prop specifies the description of the chart/SVG to assist with\naccessibility for screen readers.\n\nNote: Overridden by the desc prop of containerComponent"
        },
        {
          "name": "ariaTitle",
          "type": "string",
          "description": "The ariaTitle prop specifies the title to be applied to the SVG to assist\naccessibility for screen readers.\n\nNote: Overridden by the title prop of containerComponent"
        },
        {
          "name": "categories",
          "type": "string[] | { x: string[], y: string[] }",
          "description": "The categories prop specifies how categorical data for a chart should be ordered.\nThis prop should be given as an array of string values, or an object with\nthese arrays of values specified for x and y. If this prop is not set,\ncategorical data will be plotted in the order it was given in the data array\n\n\n@example [\"dogs\", \"cats\", \"mice\"]"
        },
        {
          "name": "colorScale",
          "type": "string[]",
          "description": "The colorScale prop is an optional prop that defines the color scale the pie\nwill be created on. This prop should be given as an array of CSS colors, or as a string\ncorresponding to one of the built in color scales. ChartDonutThreshold will automatically assign\nvalues from this color scale to the pie slices unless colors are explicitly provided in the\ndata object"
        },
        {
          "name": "constrainToVisibleArea",
          "type": "boolean",
          "description": "The constrainToVisibleArea prop determines whether to coerce tooltips so that they fit within the visible area of\nthe chart. When this prop is set to true, tooltip pointers will still point to the correct data point, but the\ncenter of the tooltip will be shifted to fit within the overall width and height of the svg Victory renders.",
          "defaultValue": "false"
        },
        {
          "name": "containerComponent",
          "type": "React.ReactElement<any>",
          "description": "The containerComponent prop takes an entire component which will be used to\ncreate a container element for standalone charts.\nThe new element created from the passed containerComponent wil be provided with\nthese props from ChartDonutThreshold: height, width, children\n(the chart itself) and style. Props that are not provided by the\nchild chart component include title and desc, both of which\nare intended to add accessibility to Victory components. The more descriptive these props\nare, the more accessible your data will be for people using screen readers.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartDonutThreshold will use the default ChartContainer component.\n\n@example <ChartContainer title=\"Chart of Dog Breeds\" desc=\"This chart shows ...\" />",
          "defaultValue": "<ChartContainer />"
        },
        {
          "name": "cornerRadius",
          "type": "number | Function",
          "description": "Set the cornerRadius for every dataComponent (Slice by default) within ChartDonutThreshold"
        },
        {
          "name": "data",
          "type": "any[]",
          "description": "The data prop specifies the data to be plotted,\nwhere data X-value is the slice label (string or number),\nand Y-value is the corresponding number value represented by the slice\nData should be in the form of a single data point.\nThe data point may be any format you wish (depending on the `x` and `y` accessor props),\nbut by default, an object with x and y properties is expected.\n\nNote: The Y-value is expected to represent a percentage\n\n@example data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}",
          "defaultValue": "[]"
        },
        {
          "name": "dataComponent",
          "type": "React.ReactElement<any>",
          "description": "The dataComponent prop takes an entire, HTML-complete data component which will be used to\ncreate slices for each datum in the pie chart. The new element created from the passed\ndataComponent will have the property datum set by the pie chart for the point it renders;\nproperties style and pathFunction calculated by ChartDonutThreshold; an index property set\ncorresponding to the location of the datum in the data provided to the pie; events bound to\nthe ChartDonutThreshold; and the d3 compatible slice object.\nIf a dataComponent is not provided, ChartDonutThreshold's Slice component will be used."
        },
        {
          "name": "desc",
          "type": "string",
          "description": "The desc prop specifies the description of the chart/SVG to assist with\naccessibility for screen readers. The more info about the chart provided in\nthe description, the more usable it will be for people using screen readers.\nThis prop defaults to an empty string.\n\nNote: Overridden by containerComponent\n\n@example \"Golden retreivers make up 30%, Labs make up 25%, and other dog breeds are\nnot represented above 5% each.\""
        },
        {
          "name": "endAngle",
          "type": "number",
          "description": "The overall end angle of the pie in degrees. This prop is used in conjunction with\nstartAngle to create a pie that spans only a segment of a circle."
        },
        {
          "name": "eventKey",
          "type": "number | string | Function",
          "description": "Similar to data accessor props `x` and `y`, this prop may be used to functionally\nassign eventKeys to data"
        },
        {
          "name": "events",
          "type": "object[]",
          "description": "The event prop takes an array of event objects. Event objects are composed of\na target, an eventKey, and eventHandlers. Targets may be any valid style namespace\nfor a given component, so \"data\" and \"labels\" are all valid targets for ChartDonutThreshold\nevents. The eventKey may optionally be used to select a single element by index rather than\nan entire set. The eventHandlers object should be given as an object whose keys are standard\nevent names (i.e. onClick) and whose values are event callbacks. The return value\nof an event handler is used to modify elemnts. The return value should be given\nas an object or an array of objects with optional target and eventKey keys,\nand a mutation key whose value is a function. The target and eventKey keys\nwill default to those corresponding to the element the event handler was attached to.\nThe mutation function will be called with the calculated props for the individual selected\nelement (i.e. a single bar), and the object returned from the mutation function\nwill override the props of the selected element via object assignment.\n\n\n@example\nevents={[\n  {\n    target: \"data\",\n    eventKey: 1,\n    eventHandlers: {\n      onClick: () => {\n        return [\n           {\n             eventKey: 2,\n             mutation: (props) => {\n               return {style: merge({}, props.style, {fill: \"orange\"})};\n             }\n           }, {\n             eventKey: 2,\n             target: \"labels\",\n             mutation: () => {\n               return {text: \"hey\"};\n             }\n           }\n         ];\n      }\n    }\n  }\n]}"
        },
        {
          "name": "externalEventMutations",
          "type": "object[]",
          "description": "ChartDonutThreshold uses the standard externalEventMutations prop."
        },
        {
          "name": "groupComponent",
          "type": "React.ReactElement<any>",
          "description": "The groupComponent prop takes an entire component which will be used to\ncreate group elements for use within container elements. This prop defaults\nto a <g> tag on web, and a react-native-svg <G> tag on mobile"
        },
        {
          "name": "hasPatterns",
          "type": "boolean | boolean[]",
          "description": "The hasPatterns prop is an optional prop that indicates whether a pattern is shown for a chart.\nSVG patterns are dynamically generated (unique to each chart) in order to apply colors from the selected\ncolor theme or custom color scale. Those generated patterns are applied in a specific order (via a URL), similar\nto the color theme ordering defined by PatternFly. If the multi-color theme was in use; for example, colorized\npatterns would be displayed in that same order. Create custom patterns via the patternScale prop.\n\nNote: Not all components are supported; for example, ChartLine, ChartBullet, ChartThreshold, etc.\n\n@example hasPatterns={ true }\n@example hasPatterns={[ true, true, false ]}",
          "beta": true
        },
        {
          "name": "height",
          "type": "number",
          "description": "Specifies the height the svg viewBox of the chart container. This value should be given as a number of pixels.\n\nBecause Victory renders responsive containers, the width and height props do not determine the width and\nheight of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of\npixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set\nto the same height in order to maintain the aspect ratio.",
          "defaultValue": "theme.pie.height"
        },
        {
          "name": "innerRadius",
          "type": "number | Function",
          "description": "When creating a donut chart, this prop determines the number of pixels between\nthe center of the chart and the inner edge."
        },
        {
          "name": "invert",
          "type": "boolean",
          "description": "Invert the threshold color scale used to represent warnings, errors, etc.",
          "defaultValue": "false"
        },
        {
          "name": "labelRadius",
          "type": "number | Function",
          "description": "The labelRadius prop defines the radius of the arc that will be used for positioning each slice label.\nIf this prop is not set, the label radius will default to the radius of the pie + label padding."
        },
        {
          "name": "labels",
          "type": "string[] | number[] | ((data: any) => string | number | null)",
          "description": "The labels prop defines labels that will appear above each bar in your chart.\nThis prop should be given as an array of values or as a function of data.\nIf given as an array, the number of elements in the array should be equal to\nthe length of the data array. Labels may also be added directly to the data object\nlike data={[{x: 1, y: 1, label: \"first\"}]}.\n\n@example [\"spring\", \"summer\", \"fall\", \"winter\"], (datum) => datum.title",
          "defaultValue": "[]"
        },
        {
          "name": "name",
          "type": "string",
          "description": "The name prop is used to reference a component instance when defining shared events."
        },
        {
          "name": "origin",
          "type": "{ x: number, y: number }",
          "description": "Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.\n\nNote: It will not typically be necessary to set an origin prop manually"
        },
        {
          "name": "padAngle",
          "type": "number | Function",
          "description": "The padAngle prop determines the amount of separation between adjacent data slices\nin number of degrees"
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
          "name": "radius",
          "type": "number | Function",
          "description": "Specifies the radius of the chart. If this property is not provided it is computed\nfrom width, height, and padding props"
        },
        {
          "name": "sortKey",
          "type": "number | string | Function | string[]",
          "description": "Use the sortKey prop to indicate how data should be sorted. This prop\nis given directly to the lodash sortBy function to be executed on the\nfinal dataset."
        },
        {
          "name": "sortOrder",
          "type": "string",
          "description": "The sortOrder prop specifies whether sorted data should be returned in 'ascending' or 'descending' order."
        },
        {
          "name": "standalone",
          "type": "boolean",
          "description": "The standalone prop determines whether the component will render a standalone svg\nor a <g> tag that will be included in an external svg. Set standalone to false to\ncompose ChartDonutThreshold with other components within an enclosing <svg> tag.",
          "defaultValue": "true"
        },
        {
          "name": "startAngle",
          "type": "number",
          "description": "The overall start angle of the pie in degrees. This prop is used in conjunction with\nendAngle to create a pie that spans only a segment of a circle."
        },
        {
          "name": "style",
          "type": "{ parent: object, data: object, labels: object }",
          "description": "The style prop specifies styles for your pie. ChartDonutThreshold relies on Radium,\nso valid Radium style objects should work for this prop. Height, width, and\npadding should be specified via the height, width, and padding props.\n\n\n@example {data: {stroke: \"black\"}, label: {fontSize: 10}}"
        },
        {
          "name": "subTitle",
          "type": "string",
          "description": "The subtitle for the donut chart"
        },
        {
          "name": "subTitlePosition",
          "type": "'bottom' | 'center' | 'right'",
          "description": "The orientation of the subtitle position. Valid values are 'bottom', 'center', and 'right'",
          "defaultValue": "ChartDonutStyles.label.subTitlePosition"
        },
        {
          "name": "theme",
          "type": "object",
          "description": "The theme prop takes a style object with nested data, labels, and parent objects.\nYou can create this object yourself, or you can use a theme provided by\nWhen using ChartDonutThreshold as a solo component, implement the theme directly on\nChartDonutThreshold. If you are wrapping ChartDonutThreshold in ChartChart or ChartGroup,\nplease call the theme on the outermost wrapper component instead.",
          "defaultValue": "getDonutThresholdStaticTheme(themeColor, invert)"
        },
        {
          "name": "themeVariant",
          "type": "string",
          "description": "Specifies the theme variant. Valid values are 'dark' or 'light'\n\nNote: Not compatible with theme prop\n\n Use PatternFly's pf-theme-dark CSS selector",
          "deprecated": true
        },
        {
          "name": "title",
          "type": "string",
          "description": "The title for the donut chart"
        },
        {
          "name": "width",
          "type": "number",
          "description": "Specifies the width of the svg viewBox of the chart container. This value should be given as a number of pixels.\n\nBecause Victory renders responsive containers, the width and height props do not determine the width and\nheight of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of\npixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set\nto the same width in order to maintain the aspect ratio.",
          "defaultValue": "theme.pie.width"
        },
        {
          "name": "x",
          "type": "number | string | Function | string[]",
          "description": "The x prop specifies how to access the X value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'x', 'x.value.nested.1.thing', 'x[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "y",
          "type": "number | string | Function | string[]",
          "description": "The y prop specifies how to access the Y value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)"
        }
      ]
    },
    {
      "name": "ChartDonutUtilization",
      "description": "",
      "props": [
        {
          "name": "allowTooltip",
          "type": "boolean",
          "description": "Specifies the tooltip capability of the container component. A value of true allows the chart to add a\nChartTooltip component to the labelComponent property. This is a shortcut to display tooltips when the labels\nproperty is also provided.",
          "defaultValue": "true"
        },
        {
          "name": "animate",
          "type": "boolean | object",
          "description": "The animate prop specifies props for VictoryAnimation to use.\nThe animate prop should also be used to specify enter and exit\ntransition configurations with the `onExit` and `onEnter` namespaces respectively.\n\n\n@example\n{duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}"
        },
        {
          "name": "ariaDesc",
          "type": "string",
          "description": "The ariaDesc prop specifies the description of the chart/SVG to assist with\naccessibility for screen readers.\n\nNote: Overridden by the desc prop of containerComponent"
        },
        {
          "name": "ariaTitle",
          "type": "string",
          "description": "The ariaTitle prop specifies the title to be applied to the SVG to assist\naccessibility for screen readers.\n\nNote: Overridden by the title prop of containerComponent"
        },
        {
          "name": "capHeight",
          "type": "number | string | Function",
          "description": "The capHeight prop defines a text metric for the font being used: the expected height of capital letters.\nThis is necessary because of SVG, which (a) positions the *bottom* of the text at `y`, and (b) has no notion of\nline height. The value should ideally use the same units as `lineHeight` and `dy`, preferably ems. If given a\nunitless number, it is assumed to be ems."
        },
        {
          "name": "categories",
          "type": "string[] | { x: string[], y: string[] }",
          "description": "The categories prop specifies how categorical data for a chart should be ordered.\nThis prop should be given as an array of string values, or an object with\nthese arrays of values specified for x and y. If this prop is not set,\ncategorical data will be plotted in the order it was given in the data array\n\n\n@example [\"dogs\", \"cats\", \"mice\"]"
        },
        {
          "name": "colorScale",
          "type": "string[]",
          "description": "The colorScale prop is an optional prop that defines the color scale the pie\nwill be created on. This prop should be given as an array of CSS colors, or as a string\ncorresponding to one of the built in color scales. ChartDonutUtilization will automatically assign\nvalues from this color scale to the pie slices unless colors are explicitly provided in the\ndata object"
        },
        {
          "name": "constrainToVisibleArea",
          "type": "boolean",
          "description": "The constrainToVisibleArea prop determines whether to coerce tooltips so that they fit within the visible area of\nthe chart. When this prop is set to true, tooltip pointers will still point to the correct data point, but the\ncenter of the tooltip will be shifted to fit within the overall width and height of the svg Victory renders."
        },
        {
          "name": "containerComponent",
          "type": "React.ReactElement<any>",
          "description": "The containerComponent prop takes an entire component which will be used to\ncreate a container element for standalone charts.\nThe new element created from the passed containerComponent wil be provided with\nthese props from ChartDonutUtilization: height, width, children\n(the chart itself) and style. Props that are not provided by the\nchild chart component include title and desc, both of which\nare intended to add accessibility to Victory components. The more descriptive these props\nare, the more accessible your data will be for people using screen readers.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartDonutUtilization will use the default ChartContainer component.\n\n@example <ChartContainer title=\"Chart of Dog Breeds\" desc=\"This chart shows ...\" />",
          "defaultValue": "<ChartContainer />"
        },
        {
          "name": "cornerRadius",
          "type": "number | Function",
          "description": "Set the cornerRadius for every dataComponent (Slice by default) within ChartDonutUtilization"
        },
        {
          "name": "data",
          "type": "any",
          "description": "The data prop specifies the data to be plotted,\nwhere data X-value is the slice label (string or number),\nand Y-value is the corresponding number value represented by the slice\nData should be in the form of a single data point.\nThe data point may be any format you wish (depending on the `x` and `y` accessor props),\nbut by default, an object with x and y properties is expected.\n\nNote: The Y-value is expected to represent a percentage\n\n@example data={{ x: 'GBps capacity', y: 75 }}"
        },
        {
          "name": "dataComponent",
          "type": "React.ReactElement<any>",
          "description": "The dataComponent prop takes an entire, HTML-complete data component which will be used to\ncreate slices for each datum in the pie chart. The new element created from the passed\ndataComponent will have the property datum set by the pie chart for the point it renders;\nproperties style and pathFunction calculated by ChartDonutUtilization; an index property set\ncorresponding to the location of the datum in the data provided to the pie; events bound to\nthe ChartDonutUtilization; and the d3 compatible slice object.\nIf a dataComponent is not provided, ChartDonutUtilization's Slice component will be used."
        },
        {
          "name": "desc",
          "type": "string",
          "description": "The desc prop specifies the description of the chart/SVG to assist with\naccessibility for screen readers. The more info about the chart provided in\nthe description, the more usable it will be for people using screen readers.\nThis prop defaults to an empty string.\n\nNote: Overridden by containerComponent\n\n@example \"Golden retreivers make up 30%, Labs make up 25%, and other dog breeds are\nnot represented above 5% each.\""
        },
        {
          "name": "endAngle",
          "type": "number",
          "description": "The overall end angle of the pie in degrees. This prop is used in conjunction with\nstartAngle to create a pie that spans only a segment of a circle."
        },
        {
          "name": "eventKey",
          "type": "number | string | Function",
          "description": "Similar to data accessor props `x` and `y`, this prop may be used to functionally\nassign eventKeys to data"
        },
        {
          "name": "events",
          "type": "object[]",
          "description": "The event prop takes an array of event objects. Event objects are composed of\na target, an eventKey, and eventHandlers. Targets may be any valid style namespace\nfor a given component, so \"data\" and \"labels\" are all valid targets for ChartDonutUtilization\nevents. The eventKey may optionally be used to select a single element by index rather than\nan entire set. The eventHandlers object should be given as an object whose keys are standard\nevent names (i.e. onClick) and whose values are event callbacks. The return value\nof an event handler is used to modify elemnts. The return value should be given\nas an object or an array of objects with optional target and eventKey keys,\nand a mutation key whose value is a function. The target and eventKey keys\nwill default to those corresponding to the element the event handler was attached to.\nThe mutation function will be called with the calculated props for the individual selected\nelement (i.e. a single bar), and the object returned from the mutation function\nwill override the props of the selected element via object assignment.\n\n\n@example\nevents={[\n  {\n    target: \"data\",\n    eventKey: 1,\n    eventHandlers: {\n      onClick: () => {\n        return [\n           {\n             eventKey: 2,\n             mutation: (props) => {\n               return {style: merge({}, props.style, {fill: \"orange\"})};\n             }\n           }, {\n             eventKey: 2,\n             target: \"labels\",\n             mutation: () => {\n               return {text: \"hey\"};\n             }\n           }\n         ];\n      }\n    }\n  }\n]}"
        },
        {
          "name": "externalEventMutations",
          "type": "object[]",
          "description": "ChartDonutUtilization uses the standard externalEventMutations prop."
        },
        {
          "name": "groupComponent",
          "type": "React.ReactElement<any>",
          "description": "The groupComponent prop takes an entire component which will be used to\ncreate group elements for use within container elements. This prop defaults\nto a <g> tag on web, and a react-native-svg <G> tag on mobile"
        },
        {
          "name": "hasPatterns",
          "type": "boolean | boolean[]",
          "description": "The hasPatterns prop is an optional prop that indicates whether a pattern is shown for a chart.\nSVG patterns are dynamically generated (unique to each chart) in order to apply colors from the selected\ncolor theme or custom color scale. Those generated patterns are applied in a specific order (via a URL), similar\nto the color theme ordering defined by PatternFly. If the multi-color theme was in use; for example, colorized\npatterns would be displayed in that same order. Create custom patterns via the patternScale prop.\n\nNote: Not all components are supported; for example, ChartLine, ChartBullet, ChartThreshold, etc.\n\n@example hasPatterns={ true }\n@example hasPatterns={[ true, true, false ]}",
          "beta": true
        },
        {
          "name": "height",
          "type": "number",
          "description": "Specifies the height the svg viewBox of the chart container. This value should be given as a\nnumber of pixels.\n\nBecause Victory renders responsive containers, the width and height props do not determine the width and\nheight of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of\npixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set\nto the same width in order to maintain the aspect ratio.",
          "defaultValue": "theme.pie.height"
        },
        {
          "name": "innerRadius",
          "type": "number | Function",
          "description": "When creating a donut chart, this prop determines the number of pixels between\nthe center of the chart and the inner edge."
        },
        {
          "name": "invert",
          "type": "boolean",
          "description": "Invert the threshold color scale used to represent warnings, errors, etc.\n\nInstead of showing a warning at 60% and an error at 90%; for example, this would allow users to show a warning\nbelow 60% and an error below 20%",
          "defaultValue": "false"
        },
        {
          "name": "labelComponent",
          "type": "React.ReactElement<any>",
          "description": "The labelComponent prop takes in an entire label component which will be used\nto create a label for the area. The new element created from the passed labelComponent\nwill be supplied with the following properties: x, y, index, data, verticalAnchor,\ntextAnchor, angle, style, text, and events. any of these props may be overridden\nby passing in props to the supplied component, or modified or ignored within\nthe custom component itself. If labelComponent is omitted, a new ChartLabel\nwill be created with props described above. This labelComponent prop should be used to\nprovide a series label for ChartDonutUtilization. If individual labels are required for each\ndata point, they should be created by composing ChartDonutUtilization with VictoryScatter"
        },
        {
          "name": "labelPosition",
          "type": "string | Function",
          "description": "The labelPosition prop specifies the angular position of each label relative to its corresponding slice.\nThis prop should be given as \"startAngle\", \"endAngle\", \"centroid\", or as a function that returns one of these\nvalues. When this prop is not given, the label will be positioned at the centroid of each slice."
        },
        {
          "name": "labelRadius",
          "type": "number | Function",
          "description": "The labelRadius prop defines the radius of the arc that will be used for positioning each slice label.\nIf this prop is not set, the label radius will default to the radius of the pie + label padding."
        },
        {
          "name": "labels",
          "type": "string[] | number[] | ((data: any) => string | number | null)",
          "description": "The labels prop defines labels that will appear above each bar in your chart.\nThis prop should be given as an array of values or as a function of data.\nIf given as an array, the number of elements in the array should be equal to\nthe length of the data array. Labels may also be added directly to the data object\nlike data={[{x: 1, y: 1, label: \"first\"}]}.\n\n@example [\"spring\", \"summer\", \"fall\", \"winter\"], (datum) => datum.title"
        },
        {
          "name": "legendAllowWrap",
          "type": "boolean",
          "description": "Allows legend items to wrap. A value of true allows the legend to wrap onto the next line\nif its container is not wide enough.\n\nNote: This is overridden by the legendItemsPerRow property"
        },
        {
          "name": "legendComponent",
          "type": "React.ReactElement<any>",
          "description": "The legend component to render with chart.\n\nNote: Use legendData so the legend width can be calculated and positioned properly.\nDefault legend properties may be applied"
        },
        {
          "name": "legendData",
          "type": "{\n  name?: string;\n  symbol?: {\n    fill?: string;\n    type?: string;\n  };\n}[]",
          "description": "Specify data via the data prop. ChartLegend expects data as an\narray of objects with name (required), symbol, and labels properties.\nThe data prop must be given as an array.\n\n@example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}"
        },
        {
          "name": "legendOrientation",
          "type": "'horizontal' | 'vertical'",
          "description": "The orientation prop takes a string that defines whether legend data\nare displayed in a row or column. When orientation is \"horizontal\",\nlegend items will be displayed in a single row. When orientation is\n\"vertical\", legend items will be displayed in a single column. Line\nand text-wrapping is not currently supported, so \"vertical\"\norientation is both the default setting and recommended for\ndisplaying many series of data."
        },
        {
          "name": "legendPosition",
          "type": "'bottom' | 'right'",
          "description": "The legend position relation to the donut chart. Valid values are 'bottom' and 'right'\n\nNote: When adding a legend, padding may need to be adjusted in order to accommodate the extra legend. In some\ncases, the legend may not be visible until enough padding is applied.",
          "defaultValue": "ChartCommonStyles.legend.position"
        },
        {
          "name": "name",
          "type": "string",
          "description": "The name prop is used to reference a component instance when defining shared events."
        },
        {
          "name": "origin",
          "type": "{ x: number, y: number }",
          "description": "Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.\n\nNote: It will not typically be necessary to set an origin prop manually"
        },
        {
          "name": "padAngle",
          "type": "number | Function",
          "description": "The padAngle prop determines the amount of separation between adjacent data slices\nin number of degrees"
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
          "name": "radius",
          "type": "number | Function",
          "description": "Specifies the radius of the chart. If this property is not provided it is computed\nfrom width, height, and padding props"
        },
        {
          "name": "sortKey",
          "type": "number | string | Function | string[]",
          "description": "Use the sortKey prop to indicate how data should be sorted. This prop\nis given directly to the lodash sortBy function to be executed on the\nfinal dataset."
        },
        {
          "name": "sortOrder",
          "type": "string",
          "description": "The sortOrder prop specifies whether sorted data should be returned in 'ascending' or 'descending' order."
        },
        {
          "name": "standalone",
          "type": "boolean",
          "description": "The standalone prop determines whether the component will render a standalone svg\nor a <g> tag that will be included in an external svg. Set standalone to false to\ncompose ChartDonutUtilization with other components within an enclosing <svg> tag.",
          "defaultValue": "true"
        },
        {
          "name": "startAngle",
          "type": "number",
          "description": "The overall start angle of the pie in degrees. This prop is used in conjunction with\nendAngle to create a pie that spans only a segment of a circle."
        },
        {
          "name": "style",
          "type": "{ parent: object, data: object, labels: object }",
          "description": "The style prop specifies styles for your pie. ChartDonutUtilization relies on Radium,\nso valid Radium style objects should work for this prop. Height, width, and\npadding should be specified via the height, width, and padding props.\n\n\n@example {data: {stroke: \"black\"}, label: {fontSize: 10}}"
        },
        {
          "name": "subTitle",
          "type": "string",
          "description": "The subtitle for the donut chart label"
        },
        {
          "name": "subTitleComponent",
          "type": "React.ReactElement<any>",
          "description": "The label component to render the chart subTitle.\n\nWhen overriding the subTitleComponent prop, title and subTitle will be centered independently. You may choose to\nuse the x and y props of ChartLabel to adjust the center position. For example:\n\n<pre>\nsubTitle=\"Pets\"\nsubTitleComponent={<ChartLabel y={130} />}\ntitle={100}\ntitleComponent={<ChartLabel y={107} />}\n</pre>\n\nNote: Default label properties may be applied"
        },
        {
          "name": "subTitlePosition",
          "type": "'bottom' | 'center' | 'right'",
          "description": "The orientation of the subtitle position. Valid values are 'bottom', 'center', and 'right'"
        },
        {
          "name": "theme",
          "type": "object",
          "description": "The theme prop takes a style object with nested data, labels, and parent objects.\nYou can create this object yourself, or you can use a theme provided by\nWhen using ChartDonutUtilization as a solo component, implement the theme directly on\nChartDonutUtilization. If you are wrapping ChartDonutUtilization in ChartChart, ChartGroup, or ChartThreshold\nplease call the theme on the outermost wrapper component instead.",
          "defaultValue": "getDonutUtilizationTheme(themeColor)"
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
          "name": "thresholds",
          "type": "any[]",
          "description": "The dynamic portion of the chart will change colors when data reaches the given threshold. Colors may be\noverridden, but defaults shall be provided.\n\n@example thresholds={[{ value: 60, color: '#F0AB00' }, { value: 90, color: '#C9190B' }]}"
        },
        {
          "name": "title",
          "type": "string",
          "description": "The title for the donut chart label"
        },
        {
          "name": "titleComponent",
          "type": "React.ReactElement<any>",
          "description": "The label component to render the donut chart title.\n\nWhen centering both title and subTitle props, it's possible to override both styles via an array provided to\nChartLabel. The first item in the array is associated with title styles, while the second item in the array is\nassociated with subtitle styles.\n\n<pre>\nsubTitle=\"Pets\"\ntitle={100}\ntitleComponent={\n  <ChartLabel style={[{\n      fill: 'red', // title color\n      fontSize: 24\n    }, {\n      fill: 'blue', // subtitle color\n      fontSize: 14\n    }]}\n  />\n}\n</pre>\n\nIn this case, both title and subTitle will be centered together. However, should you also override the\nsubTitleComponent prop, title and subTitle will be centered independently. You may choose to\nuse the x and y props of ChartLabel to adjust the center position. For example:\n\n<pre>\nsubTitle=\"Pets\"\nsubTitleComponent={<ChartLabel y={130} />}\ntitle={100}\ntitleComponent={<ChartLabel y={107} />}\n</pre>\n\nNote: Default label properties may be applied"
        },
        {
          "name": "width",
          "type": "number",
          "description": "Specifies the width of the svg viewBox of the chart container. This value should be given as a number of pixels.\n\nBecause Victory renders responsive containers, the width and height props do not determine the width and\nheight of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of\npixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set\nto the same width in order to maintain the aspect ratio.",
          "defaultValue": "theme.pie.width"
        },
        {
          "name": "x",
          "type": "number | string | Function | string[]",
          "description": "The x prop specifies how to access the X value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'x', 'x.value.nested.1.thing', 'x[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "y",
          "type": "number | string | Function | string[]",
          "description": "The y prop specifies how to access the Y value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)"
        }
      ]
    },
    {
      "name": "ChartGroup",
      "description": "",
      "props": [
        {
          "name": "animate",
          "type": "boolean | object",
          "description": "The animate prop specifies props for VictoryAnimation to use.\nThe animate prop should also be used to specify enter and exit\ntransition configurations with the `onExit` and `onEnter` namespaces respectively.\n\n\n@example\n{duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}"
        },
        {
          "name": "ariaDesc",
          "type": "string",
          "description": "The ariaDesc prop specifies the description of the chart/SVG to assist with\naccessibility for screen readers.\n\nNote: Overridden by the desc prop of containerComponent"
        },
        {
          "name": "ariaTitle",
          "type": "string",
          "description": "The ariaTitle prop specifies the title to be applied to the SVG to assist\naccessibility for screen readers.\n\nNote: Overridden by the title prop of containerComponent"
        },
        {
          "name": "categories",
          "type": "string[] | { x: string[], y: string[] }",
          "description": "The categories prop specifies how categorical data for a chart should be ordered.\nThis prop should be given as an array of string values, or an object with\nthese arrays of values specified for x and y. If this prop is not set,\ncategorical data will be plotted in the order it was given in the data array\n\n\n@example [\"dogs\", \"cats\", \"mice\"]"
        },
        {
          "name": "children",
          "type": "React.ReactNode | React.ReactNode[]",
          "description": "The children to render with the chart"
        },
        {
          "name": "color",
          "type": "string",
          "description": "The color prop is an optional prop that defines a single color to be applied to the\nchildren of ChartGroup. The color prop will override colors specified via colorScale."
        },
        {
          "name": "colorScale",
          "type": "string[]",
          "description": "The colorScale prop is an optional prop that defines the color scale the chart's bars\nwill be created on. This prop should be given as an array of CSS colors, or as a string\ncorresponding to one of the built in color scales. ChartGroup will automatically assign\nvalues from this color scale to the bars unless colors are explicitly provided in the\n`dataAttributes` prop."
        },
        {
          "name": "containerComponent",
          "type": "React.ReactElement<any>",
          "description": "The containerComponent prop takes an entire component which will be used to\ncreate a container element for standalone charts.\nThe new element created from the passed containerComponent wil be provided with\nthese props from ChartGroup: height, width, children\n(the chart itself) and style. Props that are not provided by the\nchild chart component include title and desc, both of which\nare intended to add accessibility to Victory components. The more descriptive these props\nare, the more accessible your data will be for people using screen readers.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartGroup will use the default ChartContainer component.\n\n@example <ChartContainer title=\"Chart of Dog Breeds\" desc=\"This chart shows...\" />",
          "defaultValue": "<ChartContainer />"
        },
        {
          "name": "data",
          "type": "any[]",
          "description": "The data prop specifies the data to be plotted. Data should be in the form of an array\nof data points, or an array of arrays of data points for multiple datasets.\nEach data point may be any format you wish (depending on the `x` and `y` accessor props),\nbut by default, an object with x and y properties is expected.\n\n@example [{x: 1, y: 2}, {x: 2, y: 3}], [[1, 2], [2, 3]],\n[[{x: \"a\", y: 1}, {x: \"b\", y: 2}], [{x: \"a\", y: 2}, {x: \"b\", y: 3}]]"
        },
        {
          "name": "domain",
          "type": "number[] | { x: number[], y: number[] }",
          "description": "The domain prop describes the range of values your chart will cover. This prop can be\ngiven as a array of the minimum and maximum expected values for your bar chart,\nor as an object that specifies separate arrays for x and y.\nIf this prop is not provided, a domain will be calculated from data, or other\navailable information.\n\n\n@example [low, high], { x: [low, high], y: [low, high] }\n\n[-1, 1], {x: [0, 100], y: [0, 1]}"
        },
        {
          "name": "domainPadding",
          "type": "number | number[] | { x: number[], y: number[] }",
          "description": "The domainPadding prop specifies a number of pixels of padding to add to the\nbeginning and end of a domain. This prop is useful for explicitly spacing ticks farther\nfrom the origin to prevent crowding. This prop should be given as an object with\nnumbers specified for x and y.\n\n\n@example [left, right], { x: [left, right], y: [bottom, top] }\n\n{x: [10, -10], y: 5}"
        },
        {
          "name": "eventKey",
          "type": "number | string | Function",
          "description": "Similar to data accessor props `x` and `y`, this prop may be used to functionally\nassign eventKeys to data"
        },
        {
          "name": "events",
          "type": "object[]",
          "description": "The event prop take an array of event objects. Event objects are composed of\na target, an eventKey, and eventHandlers. Targets may be any valid style namespace\nfor a given component, so \"data\" and \"labels\" are all valid targets for ChartGroup events.\nSince ChartGroup only renders a single element, the eventKey property is not used.\nThe eventHandlers object should be given as an object whose keys are standard\nevent names (i.e. onClick) and whose values are event callbacks. The return value\nof an event handler is used to modify elemnts. The return value should be given\nas an object or an array of objects with optional target and eventKey keys,\nand a mutation key whose value is a function. The target and eventKey keys\nwill default to those corresponding to the element the event handler was attached to.\nThe mutation function will be called with the calculated props for the individual selected\nelement (i.e. an area), and the object returned from the mutation function\nwill override the props of the selected element via object assignment.\n\n\n@example\nevents={[\n  {\n    target: \"data\",\n    eventHandlers: {\n      onClick: () => {\n        return [\n           {\n             mutation: (props) => {\n               return {style: merge({}, props.style, {fill: \"orange\"})};\n             }\n           }, {\n             target: \"labels\",\n             mutation: () => {\n               return {text: \"hey\"};\n             }\n           }\n         ];\n      }\n    }\n  }\n]}"
        },
        {
          "name": "externalEventMutations",
          "type": "object[]",
          "description": "ChartGroup uses the standard externalEventMutations prop."
        },
        {
          "name": "groupComponent",
          "type": "React.ReactElement<any>",
          "description": "The groupComponent prop takes an entire component which will be used to\ncreate group elements for use within container elements. This prop defaults\nto a <g> tag on web, and a react-native-svg <G> tag on mobile"
        },
        {
          "name": "hasPatterns",
          "type": "boolean | boolean[]",
          "description": "The hasPatterns prop is an optional prop that indicates whether a pattern is shown for a chart.\nSVG patterns are dynamically generated (unique to each chart) in order to apply colors from the selected\ncolor theme or custom color scale. Those generated patterns are applied in a specific order (via a URL), similar\nto the color theme ordering defined by PatternFly. If the multi-color theme was in use; for example, colorized\npatterns would be displayed in that same order. Create custom patterns via the patternScale prop.\n\nNote: Not all components are supported; for example, ChartLine, ChartBullet, ChartThreshold, etc.\n\n@example hasPatterns={ true }\n@example hasPatterns={[ true, true, false ]}",
          "beta": true
        },
        {
          "name": "height",
          "type": "number",
          "description": "The height props specifies the height the svg viewBox of the chart container.\nThis value should be given as a number of pixels"
        },
        {
          "name": "horizontal",
          "type": "boolean",
          "description": "The horizontal prop determines whether data will be plotted horizontally.\nWhen this prop is set to true, the independent variable will be plotted on the y axis\nand the dependent variable will be plotted on the x axis."
        },
        {
          "name": "labelComponent",
          "type": "React.ReactElement<any>",
          "description": "The labelComponent prop takes in an entire label component which will be used\nto create a label for the area. The new element created from the passed labelComponent\nwill be supplied with the following properties: x, y, index, data, verticalAnchor,\ntextAnchor, angle, style, text, and events. any of these props may be overridden\nby passing in props to the supplied component, or modified or ignored within\nthe custom component itself. If labelComponent is omitted, a new ChartLabel\nwill be created with props described above. This labelComponent prop should be used to\nprovide a series label for ChartGroup. If individual labels are required for each\ndata point, they should be created by composing ChartGroup with VictoryScatter"
        },
        {
          "name": "labels",
          "type": "string[] | number[] | ((data: any) => string | number | null)",
          "description": "The labels prop defines labels that will appear above each bar in your chart.\nThis prop should be given as an array of values or as a function of data.\nIf given as an array, the number of elements in the array should be equal to\nthe length of the data array. Labels may also be added directly to the data object\nlike data={[{x: 1, y: 1, label: \"first\"}]}.\n\n@example [\"spring\", \"summer\", \"fall\", \"winter\"], (datum) => datum.title"
        },
        {
          "name": "maxDomain",
          "type": "number | { x?: number; y?: number }",
          "description": "The maxDomain prop defines a maximum domain value for a chart. This prop is useful in situations where the maximum\ndomain of a chart is static, while the minimum value depends on data or other variable information. If the domain\nprop is set in addition to maximumDomain, domain will be used.\n\nNote: The x value supplied to the maxDomain prop refers to the independent variable, and the y value refers to the\ndependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to\nthe y axis.\n\n@example\n\nmaxDomain={0}\nmaxDomain={{ y: 0 }}"
        },
        {
          "name": "minDomain",
          "type": "number | { x?: number; y?: number }",
          "description": "The minDomain prop defines a minimum domain value for a chart. This prop is useful in situations where the minimum\ndomain of a chart is static, while the maximum value depends on data or other variable information. If the domain\nprop is set in addition to minimumDomain, domain will be used.\n\nNote: The x value supplied to the minDomain prop refers to the independent variable, and the y value refers to the\ndependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to\nthe y axis.\n\n@example\n\nminDomain={0}\nminDomain={{ y: 0 }}"
        },
        {
          "name": "name",
          "type": "string",
          "description": "The name prop is used to reference a component instance when defining shared events."
        },
        {
          "name": "offset",
          "type": "number",
          "description": "The offset prop determines the number of pixels each element in a group should\nbe offset from its original position of the on the independent axis. In the\ncase of groups of bars, this number should be equal to the width of the bar\nplus the desired spacing between bars."
        },
        {
          "name": "origin",
          "type": "{ x: number, y: number }",
          "description": "Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.\n\nNote: It will not typically be necessary to set an origin prop manually"
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
          "name": "polar",
          "type": "boolean",
          "description": "Victory components can pass a boolean polar prop to specify whether a label is part of a polar chart."
        },
        {
          "name": "range",
          "type": "number[] | { x: number[], y: number[] }",
          "description": "The range prop describes the dimensions over which data may be plotted. For cartesian coordinate systems, this\ncorresponds to minimum and maximum svg coordinates in the x and y dimension. In polar coordinate systems this\ncorresponds to a range of angles and radii. When this value is not given it will be calculated from the width,\nheight, and padding, or from the startAngle and endAngle in the case of polar charts. All components in a given\nchart must share the same range, so setting this prop on children nested within Chart,\nChartGroup will have no effect. This prop is usually not set manually.\n\n\n@example [low, high] | { x: [low, high], y: [low, high] }\n\nCartesian: range={{ x: [50, 250], y: [50, 250] }}\nPolar: range={{ x: [0, 360], y: [0, 250] }}"
        },
        {
          "name": "samples",
          "type": "number",
          "description": "The samples prop specifies how many individual points to plot when plotting\ny as a function of x. Samples is ignored if x props are provided instead."
        },
        {
          "name": "scale",
          "type": "string | { x: string, y: string }",
          "description": "The scale prop determines which scales your chart should use. This prop can be\ngiven as a string specifying a supported scale (\"linear\", \"time\", \"log\", \"sqrt\"),\nas a d3 scale function, or as an object with scales specified for x and y\n\n\n@example d3Scale.time(), {x: \"linear\", y: \"log\"}"
        },
        {
          "name": "singleQuadrantDomainPadding",
          "type": "boolean | { x?: boolean; y?: boolean }",
          "description": "By default domainPadding is coerced to existing quadrants. This means that if a given domain only includes positive\nvalues, no amount of padding applied by domainPadding will result in a domain with negative values. This is the\ndesired behavior in most cases. For users that need to apply padding without regard to quadrant, the\nsingleQuadrantDomainPadding prop may be used. This prop may be given as a boolean or an object with boolean values\nspecified for \"x\" and/or \"y\". When this prop is false (or false for a given dimension), padding will be applied\nwithout regard to quadrant. If this prop is not specified, domainPadding will be coerced to existing quadrants.\n\nNote: The x value supplied to the singleQuadrantDomainPadding prop refers to the independent variable, and the y\nvalue refers to the dependent variable. This may cause confusion in horizontal charts, as the independent variable\nwill corresponds to the y axis.\n\n@example\n\nsingleQuadrantDomainPadding={false}\nsingleQuadrantDomainPadding={{ x: false }}"
        },
        {
          "name": "sortKey",
          "type": "number | string | Function | string[]",
          "description": "Use the sortKey prop to indicate how data should be sorted. This prop\nis given directly to the lodash sortBy function to be executed on the\nfinal dataset."
        },
        {
          "name": "sortOrder",
          "type": "string",
          "description": "The sortOrder prop specifies whether sorted data should be returned in 'ascending' or 'descending' order."
        },
        {
          "name": "standalone",
          "type": "boolean",
          "description": "The standalone prop determines whether the component will render a standalone svg\nor a <g> tag that will be included in an external svg. Set standalone to false to\ncompose ChartGroup with other components within an enclosing <svg> tag."
        },
        {
          "name": "style",
          "type": "{ parent: object, data: object, labels: object }",
          "description": "The style prop specifies styles for your ChartGroup. Any valid inline style properties\nwill be applied. Height, width, and padding should be specified via the height,\nwidth, and padding props, as they are used to calculate the alignment of\ncomponents within chart.\n\n\n@example {data: {fill: \"red\"}, labels: {fontSize: 12}}"
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
          "name": "width",
          "type": "number",
          "description": "The width props specifies the width of the svg viewBox of the chart container\nThis value should be given as a number of pixels"
        },
        {
          "name": "x",
          "type": "number | string | Function | string[]",
          "description": "The x prop specifies how to access the X value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'x', 'x.value.nested.1.thing', 'x[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "y",
          "type": "number | string | Function | string[]",
          "description": "The y prop specifies how to access the Y value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "y0",
          "type": "number | string | Function | string[]",
          "description": "Use y0 data accessor prop to determine how the component defines the baseline y0 data.\nThis prop is useful for defining custom baselines for components like ChartBar or ChartArea.\nThis prop may be given in a variety of formats.\n\n\n@example 'last_quarter_profit', () => 10, 1, 'employees.salary', [\"employees\", \"salary\"]"
        }
      ]
    },
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
    },
    {
      "name": "ChartLegendTooltip",
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
          "description": "The center prop determines the position of the center of the tooltip flyout. This prop should be given as an object\nthat describes the desired x and y svg coordinates of the center of the tooltip. This prop is useful for\npositioning the flyout of a tooltip independent from the pointer. When ChartTooltip is used with\nChartVoronoiContainer, the center prop is what enables the mouseFollowTooltips option. When this prop is set,\nnon-zero pointerLength values will no longer be respected.",
          "defaultValue": "{ x: 0, y: 0 }"
        },
        {
          "name": "centerOffset",
          "type": "{ x: number | Function, y: number | Function }",
          "description": "The centerOffset prop determines the position of the center of the tooltip flyout in relation to the flyout\npointer. This prop should be given as an object of x and y, where each is either a numeric offset value or a\nfunction that returns a numeric value. When this prop is set, non-zero pointerLength values will no longer be\nrespected."
        },
        {
          "name": "constrainToVisibleArea",
          "type": "boolean",
          "description": "The constrainToVisibleArea prop determines whether to coerce tooltips so that they fit within the visible area of\nthe chart. When this prop is set to true, tooltip pointers will still point to the correct data point, but the\ncenter of the tooltip will be shifted to fit within the overall width and height of the svg Victory renders."
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
          "name": "isCursorTooltip",
          "type": "boolean",
          "description": "The ChartLegendTooltip is based on ChartCursorTooltip, which is intended to be used with a voronoi cursor\ncontainer. When isCursorTooltip is true (default), ChartCursorTooltip is used. If false, ChartTooltip is used.",
          "defaultValue": "true"
        },
        {
          "name": "labelComponent",
          "type": "React.ReactElement<any>",
          "description": "The labelComponent prop takes a component instance which will be used to render each tooltip label. The new element\ncreated from the passed labelComponent will be supplied with the following properties: x, y, index, datum,\nverticalAnchor, textAnchor, style, text, and events. Any of these props may be overridden by passing in props to\nthe supplied component, or modified or ignored within the custom component itself. If labelComponent is omitted, a\nnew ChartLabel will be created with the props described above.\n\n@example labelComponent={<ChartLabel dy={20}/>}, labelComponent={<MyCustomLabel/>}",
          "defaultValue": "<ChartLegendTooltipContent />"
        },
        {
          "name": "labelTextAnchor",
          "type": "string | Function",
          "description": "Defines how the labelComponent text is horizontally positioned relative to its `x` and `y` coordinates. Valid\nvalues are 'start', 'middle', 'end', and 'inherit'."
        },
        {
          "name": "legendData",
          "type": "{\n  childName?: string;\n  name?: string;\n  labels?: {\n    fill?: string;\n  };\n  symbol?: {\n    fill?: string;\n    type?: string;\n  };\n}[]",
          "description": "Specify data via the data prop. ChartLegend expects data as an array of objects with name (required), symbol, and\nlabels properties. The childName is used to sync the data series associated with the given chart child name.\n\nThe data prop must be given as an array.\n\n@example\n\nlegendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}\nlegendData={[{ childName: `cats`, name: `Total cats` }, { childName: `dogs`, name: 'Total dogs' }]}"
        },
        {
          "name": "orientation",
          "type": "string | Function",
          "description": "The orientation prop determines which side of the (x, y) coordinate the tooltip should be rendered on.\nThis prop can be given as “top”, “bottom”, “left”, “right”, or as a function of datum that returns one of these\nvalues. If this prop is not provided it will be determined from the sign of the datum, and the value of the\nhorizontal prop."
        },
        {
          "name": "patternScale",
          "type": "string[]",
          "description": "The patternScale prop is an optional prop that defines patterns to apply, where applicable. This prop should be\ngiven as a string array of pattern URLs. Patterns will be assigned to children by index and will repeat when there\nare more children than patterns in the provided patternScale. Use null to omit the pattern for a given index.\n\nNote: Not all components are supported; for example, ChartLine, ChartBullet, ChartThreshold, etc.\n\n@example patternScale={[ 'url(\"#pattern1\")', 'url(\"#pattern2\")', null ]}",
          "beta": true
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
          "name": "title",
          "type": "string | string[] | Function",
          "description": "The title prop specifies a title to render with the legend.\nThis prop should be given as a string, or an array of strings for multi-line titles.\n\nExample: title={(datum) => datum.x}"
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
    },
    {
      "name": "ChartPie",
      "description": "",
      "props": [
        {
          "name": "allowTooltip",
          "type": "boolean",
          "description": "Specifies the tooltip capability of the container component. A value of true allows the chart to add a\nChartTooltip component to the labelComponent property. This is a shortcut to display tooltips when the labels\nproperty is also provided.",
          "defaultValue": "true"
        },
        {
          "name": "animate",
          "type": "boolean | object",
          "description": "The animate prop specifies props for VictoryAnimation to use.\nThe animate prop should also be used to specify enter and exit\ntransition configurations with the `onExit` and `onEnter` namespaces respectively.\n\n\n@example\n{duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}"
        },
        {
          "name": "ariaDesc",
          "type": "string",
          "description": "The ariaDesc prop specifies the description of the chart/SVG to assist with\naccessibility for screen readers.\n\nNote: Overridden by the desc prop of containerComponent"
        },
        {
          "name": "ariaTitle",
          "type": "string",
          "description": "The ariaTitle prop specifies the title to be applied to the SVG to assist\naccessibility for screen readers.\n\nNote: Overridden by the title prop of containerComponent"
        },
        {
          "name": "categories",
          "type": "string[] | { x: string[], y: string[] }",
          "description": "The categories prop specifies how categorical data for a chart should be ordered.\nThis prop should be given as an array of string values, or an object with\nthese arrays of values specified for x and y. If this prop is not set,\ncategorical data will be plotted in the order it was given in the data array\n\n\n@example [\"dogs\", \"cats\", \"mice\"]"
        },
        {
          "name": "colorScale",
          "type": "string[]",
          "description": "The colorScale prop is an optional prop that defines the color scale the pie\nwill be created on. This prop should be given as an array of CSS colors, or as a string\ncorresponding to one of the built in color scales. ChartPie will automatically assign\nvalues from this color scale to the pie slices unless colors are explicitly provided in the\ndata object"
        },
        {
          "name": "constrainToVisibleArea",
          "type": "boolean",
          "description": "The constrainToVisibleArea prop determines whether to coerce tooltips so that they fit within the visible area of\nthe chart. When this prop is set to true, tooltip pointers will still point to the correct data point, but the\ncenter of the tooltip will be shifted to fit within the overall width and height of the svg Victory renders.",
          "defaultValue": "false"
        },
        {
          "name": "containerComponent",
          "type": "React.ReactElement<any>",
          "description": "The containerComponent prop takes an entire component which will be used to\ncreate a container element for standalone charts.\nThe new element created from the passed containerComponent wil be provided with\nthese props from ChartPie: height, width, children\n(the chart itself) and style. Props that are not provided by the\nchild chart component include title and desc, both of which\nare intended to add accessibility to Victory components. The more descriptive these props\nare, the more accessible your data will be for people using screen readers.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartPie will use the default ChartContainer component.\n\n@example <ChartContainer title=\"Chart of Dog Breeds\" desc=\"This chart shows ...\" />",
          "defaultValue": "<ChartContainer />"
        },
        {
          "name": "cornerRadius",
          "type": "number | Function",
          "description": "Set the cornerRadius for every dataComponent (Slice by default) within ChartPie"
        },
        {
          "name": "data",
          "type": "any[]",
          "description": "The data prop specifies the data to be plotted,\nwhere data X-value is the slice label (string or number),\nand Y-value is the corresponding number value represented by the slice\nData should be in the form of an array of data points.\nEach data point may be any format you wish (depending on the `x` and `y` accessor props),\nbut by default, an object with x and y properties is expected.\n\n@example [{x: 1, y: 2}, {x: 2, y: 3}], [[1, 2], [2, 3]],\n[[{x: \"a\", y: 1}, {x: \"b\", y: 2}], [{x: \"a\", y: 2}, {x: \"b\", y: 3}]]"
        },
        {
          "name": "dataComponent",
          "type": "React.ReactElement<any>",
          "description": "The dataComponent prop takes an entire, HTML-complete data component which will be used to\ncreate slices for each datum in the pie chart. The new element created from the passed\ndataComponent will have the property datum set by the pie chart for the point it renders;\nproperties style and pathFunction calculated by ChartPie; an index property set\ncorresponding to the location of the datum in the data provided to the pie; events bound to\nthe ChartPie; and the d3 compatible slice object.\nIf a dataComponent is not provided, ChartPie's Slice component will be used."
        },
        {
          "name": "endAngle",
          "type": "number",
          "description": "The overall end angle of the pie in degrees. This prop is used in conjunction with\nstartAngle to create a pie that spans only a segment of a circle."
        },
        {
          "name": "eventKey",
          "type": "number | string | Function",
          "description": "Similar to data accessor props `x` and `y`, this prop may be used to functionally\nassign eventKeys to data"
        },
        {
          "name": "events",
          "type": "object[]",
          "description": "The event prop takes an array of event objects. Event objects are composed of\na target, an eventKey, and eventHandlers. Targets may be any valid style namespace\nfor a given component, so \"data\" and \"labels\" are all valid targets for ChartPie\nevents. The eventKey may optionally be used to select a single element by index rather than\nan entire set. The eventHandlers object should be given as an object whose keys are standard\nevent names (i.e. onClick) and whose values are event callbacks. The return value\nof an event handler is used to modify elemnts. The return value should be given\nas an object or an array of objects with optional target and eventKey keys,\nand a mutation key whose value is a function. The target and eventKey keys\nwill default to those corresponding to the element the event handler was attached to.\nThe mutation function will be called with the calculated props for the individual selected\nelement (i.e. a single bar), and the object returned from the mutation function\nwill override the props of the selected element via object assignment.\n\n\n@example\nevents={[\n  {\n    target: \"data\",\n    eventKey: 1,\n    eventHandlers: {\n      onClick: () => {\n        return [\n           {\n             eventKey: 2,\n             mutation: (props) => {\n               return {style: merge({}, props.style, {fill: \"orange\"})};\n             }\n           }, {\n             eventKey: 2,\n             target: \"labels\",\n             mutation: () => {\n               return {text: \"hey\"};\n             }\n           }\n         ];\n      }\n    }\n  }\n]}"
        },
        {
          "name": "externalEventMutations",
          "type": "object[]",
          "description": "ChartPie uses the standard externalEventMutations prop."
        },
        {
          "name": "groupComponent",
          "type": "React.ReactElement<any>",
          "description": "The groupComponent prop takes an entire component which will be used to\ncreate group elements for use within container elements. This prop defaults\nto a <g> tag on web, and a react-native-svg <G> tag on mobile"
        },
        {
          "name": "hasPatterns",
          "type": "boolean | boolean[]",
          "description": "The hasPatterns prop is an optional prop that indicates whether a pattern is shown for a chart.\nSVG patterns are dynamically generated (unique to each chart) in order to apply colors from the selected\ncolor theme or custom color scale. Those generated patterns are applied in a specific order (via a URL), similar\nto the color theme ordering defined by PatternFly. If the multi-color theme was in use; for example, colorized\npatterns would be displayed in that same order. Create custom patterns via the patternScale prop.\n\nNote: Not all components are supported; for example, ChartLine, ChartBullet, ChartThreshold, etc.\n\n@example hasPatterns={ true }\n@example hasPatterns={[ true, true, false ]}",
          "beta": true
        },
        {
          "name": "height",
          "type": "number",
          "description": "Specifies the height the svg viewBox of the chart container. This value should be given as a\nnumber of pixels.\n\nBecause Victory renders responsive containers, the width and height props do not determine the width and\nheight of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of\npixels will depend on the size of the container the chart is rendered into.\n\nNote: When adding a legend, height (the overall SVG height) may need to be larger than pieHeight (the pie size)\nin order to accommodate the extra legend.\n\nBy default, pieHeight is the min. of either height or width. This covers most use cases in order to accommodate\nlegends within the same SVG. However, pieHeight (not height) may need to be set in order to adjust the pie height.\n\nTypically, the parent container is set to the same width in order to maintain the aspect ratio.",
          "defaultValue": "theme.pie.height"
        },
        {
          "name": "innerRadius",
          "type": "number | Function",
          "description": "When creating a donut chart, this prop determines the number of pixels between\nthe center of the chart and the inner edge. When this prop is set to zero\na regular pie chart is rendered."
        },
        {
          "name": "labelComponent",
          "type": "React.ReactElement<any>",
          "description": "The labelComponent prop takes in an entire label component which will be used\nto create a label for the area. The new element created from the passed labelComponent\nwill be supplied with the following properties: x, y, index, data, verticalAnchor,\ntextAnchor, angle, style, text, and events. any of these props may be overridden\nby passing in props to the supplied component, or modified or ignored within\nthe custom component itself. If labelComponent is omitted, a new ChartLabel\nwill be created with props described above. This labelComponent prop should be used to\nprovide a series label for ChartPie. If individual labels are required for each\ndata point, they should be created by composing ChartPie with VictoryScatter",
          "defaultValue": "allowTooltip ? (\n  <ChartTooltip constrainToVisibleArea={constrainToVisibleArea} theme={theme} />\n) : (\n  undefined\n)"
        },
        {
          "name": "labelPosition",
          "type": "string | Function",
          "description": "The labelPosition prop specifies the angular position of each label relative to its corresponding slice.\nThis prop should be given as \"startAngle\", \"endAngle\", \"centroid\", or as a function that returns one of these\nvalues. When this prop is not given, the label will be positioned at the centroid of each slice."
        },
        {
          "name": "labelRadius",
          "type": "number | Function",
          "description": "The labelRadius prop defines the radius of the arc that will be used for positioning each slice label.\nIf this prop is not set, the label radius will default to the radius of the pie + label padding."
        },
        {
          "name": "labels",
          "type": "string[] | number[] | ((data: any) => string | number | null)",
          "description": "The labels prop defines labels that will appear above each bar in your chart.\nThis prop should be given as an array of values or as a function of data.\nIf given as an array, the number of elements in the array should be equal to\nthe length of the data array. Labels may also be added directly to the data object\nlike data={[{x: 1, y: 1, label: \"first\"}]}.\n\n@example [\"spring\", \"summer\", \"fall\", \"winter\"], (datum) => datum.title"
        },
        {
          "name": "legendAllowWrap",
          "type": "boolean",
          "description": "Allows legend items to wrap. A value of true allows the legend to wrap onto the next line\nif its container is not wide enough.\n\nNote: This is overridden by the legendItemsPerRow property",
          "defaultValue": "false"
        },
        {
          "name": "legendComponent",
          "type": "React.ReactElement<any>",
          "description": "The legend component to render with chart.\n\nNote: Use legendData so the legend width can be calculated and positioned properly.\nDefault legend properties may be applied",
          "defaultValue": "<ChartLegend />"
        },
        {
          "name": "legendData",
          "type": "{\n  name?: string;\n  symbol?: {\n    fill?: string;\n    type?: string;\n  };\n}[]",
          "description": "Specify data via the data prop. ChartLegend expects data as an\narray of objects with name (required), symbol, and labels properties.\nThe data prop must be given as an array.\n\n@example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}"
        },
        {
          "name": "legendOrientation",
          "type": "'horizontal' | 'vertical'",
          "description": "The orientation prop takes a string that defines whether legend data\nare displayed in a row or column. When orientation is \"horizontal\",\nlegend items will be displayed in a single row. When orientation is\n\"vertical\", legend items will be displayed in a single column. Line\nand text-wrapping is not currently supported, so \"vertical\"\norientation is both the default setting and recommended for\ndisplaying many series of data.",
          "defaultValue": "theme.legend.orientation"
        },
        {
          "name": "legendPosition",
          "type": "'bottom' | 'right'",
          "description": "The legend position relation to the pie chart. Valid values are 'bottom' and 'right'\n\nNote: When adding a legend, padding may need to be adjusted in order to accommodate the extra legend. In some\ncases, the legend may not be visible until enough padding is applied.",
          "defaultValue": "ChartCommonStyles.legend.position"
        },
        {
          "name": "name",
          "type": "string",
          "description": "The name prop is used to reference a component instance when defining shared events."
        },
        {
          "name": "origin",
          "type": "{ x: number, y: number }",
          "description": "Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.\n\nNote: It will not typically be necessary to set an origin prop manually"
        },
        {
          "name": "padAngle",
          "type": "number | Function",
          "description": "The padAngle prop determines the amount of separation between adjacent data slices\nin number of degrees"
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
          "name": "radius",
          "type": "number | Function",
          "description": "Specifies the radius of the chart. If this property is not provided it is computed\nfrom width, height, and padding props"
        },
        {
          "name": "sortKey",
          "type": "number | string | Function | string[]",
          "description": "Use the sortKey prop to indicate how data should be sorted. This prop\nis given directly to the lodash sortBy function to be executed on the final dataset."
        },
        {
          "name": "sortOrder",
          "type": "string",
          "description": "The sortOrder prop specifies whether sorted data should be returned in 'ascending' or 'descending' order."
        },
        {
          "name": "standalone",
          "type": "boolean",
          "description": "The standalone prop determines whether the component will render a standalone svg\nor a <g> tag that will be included in an external svg. Set standalone to false to\ncompose ChartPie with other components within an enclosing <svg> tag.",
          "defaultValue": "true"
        },
        {
          "name": "startAngle",
          "type": "number",
          "description": "The overall start angle of the pie in degrees. This prop is used in conjunction with\nendAngle to create a pie that spans only a segment of a circle."
        },
        {
          "name": "style",
          "type": "{ parent: object, data: object, labels: object }",
          "description": "The style prop specifies styles for your pie. ChartPie relies on Radium,\nso valid Radium style objects should work for this prop. Height, width, and\npadding should be specified via the height, width, and padding props.\n\n\n@example {data: {stroke: \"black\"}, label: {fontSize: 10}}"
        },
        {
          "name": "theme",
          "type": "object",
          "description": "The theme prop takes a style object with nested data, labels, and parent objects.\nYou can create this object yourself, or you can use a theme provided by\nWhen using ChartPie as a solo component, implement the theme directly on\nChartPie. If you are wrapping ChartPie in ChartChart or ChartGroup,\nplease call the theme on the outermost wrapper component instead.",
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
          "name": "width",
          "type": "number",
          "description": "Specifies the width of the svg viewBox of the chart container. This value should be given as a number of pixels.\n\nBecause Victory renders responsive containers, the width and height props do not determine the width and\nheight of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of\npixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set\nto the same width in order to maintain the aspect ratio.",
          "defaultValue": "theme.pie.width"
        },
        {
          "name": "x",
          "type": "number | string | Function | string[]",
          "description": "The x prop specifies how to access the X value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'x', 'x.value.nested.1.thing', 'x[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "y",
          "type": "number | string | Function | string[]",
          "description": "The y prop specifies how to access the Y value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)"
        }
      ]
    },
    {
      "name": "ChartScatter",
      "description": "",
      "props": [
        {
          "name": "animate",
          "type": "boolean | object",
          "description": "The animate prop specifies props for VictoryAnimation to use.\nThe animate prop should also be used to specify enter and exit\ntransition configurations with the `onExit` and `onEnter` namespaces respectively.\n\n\n@example\n{duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}"
        },
        {
          "name": "bubbleProperty",
          "type": "string",
          "description": "The bubbleProperty prop indicates which property of the data object should be used\nto scale data points in a bubble chart"
        },
        {
          "name": "categories",
          "type": "string[] | { x: string[], y: string[] }",
          "description": "The categories prop specifies how categorical data for a chart should be ordered.\nThis prop should be given as an array of string values, or an object with\nthese arrays of values specified for x and y. If this prop is not set,\ncategorical data will be plotted in the order it was given in the data array\n\n\n@example [\"dogs\", \"cats\", \"mice\"]"
        },
        {
          "name": "containerComponent",
          "type": "React.ReactElement<any>",
          "description": "The containerComponent prop takes an entire component which will be used to\ncreate a container element for standalone charts.\nThe new element created from the passed containerComponent wil be provided with\nthese props from ChartScatter: height, width, children\n(the chart itself) and style. Props that are not provided by the\nchild chart component include title and desc, both of which\nare intended to add accessibility to Victory components. The more descriptive these props\nare, the more accessible your data will be for people using screen readers.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartScatter will use the default ChartContainer component.\n\n@example <ChartContainer title=\"Chart of Dog Breeds\" desc=\"This chart shows...\" />",
          "defaultValue": "<ChartContainer />"
        },
        {
          "name": "data",
          "type": "any[]",
          "description": "The data prop specifies the data to be plotted. Data should be in the form of an array\nof data points, or an array of arrays of data points for multiple datasets.\nEach data point may be any format you wish (depending on the `x` and `y` accessor props),\nbut by default, an object with x and y properties is expected.\n\n@example [{x: 1, y: 2}, {x: 2, y: 3}], [[1, 2], [2, 3]],\n[[{x: \"a\", y: 1}, {x: \"b\", y: 2}], [{x: \"a\", y: 2}, {x: \"b\", y: 3}]]"
        },
        {
          "name": "dataComponent",
          "type": "React.ReactElement<any>",
          "description": "The dataComponent prop takes an entire component which will be used to create an area.\nThe new element created from the passed dataComponent will be provided with the\nfollowing properties calculated by ChartScatter: a scale, style, events, interpolation,\nand an array of modified data objects (including x, y, and calculated y0 and y1).\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartScatter will use its default Line component."
        },
        {
          "name": "domain",
          "type": "number[] | { x: number[], y: number[] }",
          "description": "The domain prop describes the range of values your chart will cover. This prop can be\ngiven as a array of the minimum and maximum expected values for your bar chart,\nor as an object that specifies separate arrays for x and y.\nIf this prop is not provided, a domain will be calculated from data, or other\navailable information.\n\n\n@example [low, high], { x: [low, high], y: [low, high] }\n\n[-1, 1], {x: [0, 100], y: [0, 1]}"
        },
        {
          "name": "domainPadding",
          "type": "number | number[] | { x: number[], y: number[] }",
          "description": "The domainPadding prop specifies a number of pixels of padding to add to the\nbeginning and end of a domain. This prop is useful for explicitly spacing ticks farther\nfrom the origin to prevent crowding. This prop should be given as an object with\nnumbers specified for x and y.\n\n\n@example [left, right], { x: [left, right], y: [bottom, top] }\n\n{x: [10, -10], y: 5}"
        },
        {
          "name": "eventKey",
          "type": "number | string | Function",
          "description": "Similar to data accessor props `x` and `y`, this prop may be used to functionally\nassign eventKeys to data"
        },
        {
          "name": "events",
          "type": "object[]",
          "description": "The event prop take an array of event objects. Event objects are composed of\na target, an eventKey, and eventHandlers. Targets may be any valid style namespace\nfor a given component, so \"data\" and \"labels\" are all valid targets for ChartScatter events.\nSince ChartScatter only renders a single element, the eventKey property is not used.\nThe eventHandlers object should be given as an object whose keys are standard\nevent names (i.e. onClick) and whose values are event callbacks. The return value\nof an event handler is used to modify elemnts. The return value should be given\nas an object or an array of objects with optional target and eventKey keys,\nand a mutation key whose value is a function. The target and eventKey keys\nwill default to those corresponding to the element the event handler was attached to.\nThe mutation function will be called with the calculated props for the individual selected\nelement (i.e. a line), and the object returned from the mutation function\nwill override the props of the selected element via object assignment.\n\n\n@example\nevents={[\n  {\n    target: \"data\",\n    eventHandlers: {\n      onClick: () => {\n        return [\n           {\n             mutation: (props) => {\n               return {style: merge({}, props.style, {stroke: \"orange\"})};\n             }\n           }, {\n             target: \"labels\",\n             mutation: () => {\n               return {text: \"hey\"};\n             }\n           }\n         ];\n      }\n    }\n  }\n]}"
        },
        {
          "name": "externalEventMutations",
          "type": "object[]",
          "description": "ChartScatter uses the standard externalEventMutations prop."
        },
        {
          "name": "groupComponent",
          "type": "React.ReactElement<any>",
          "description": "The groupComponent prop takes an entire component which will be used to\ncreate group elements for use within container elements. This prop defaults\nto a <g> tag on web, and a react-native-svg <G> tag on mobile"
        },
        {
          "name": "height",
          "type": "number",
          "description": "The height props specifies the height the svg viewBox of the chart container.\nThis value should be given as a number of pixels"
        },
        {
          "name": "horizontal",
          "type": "boolean",
          "description": "The horizontal prop determines whether data will be plotted horizontally.\nWhen this prop is set to true, the independent variable will be plotted on the y axis\nand the dependent variable will be plotted on the x axis."
        },
        {
          "name": "labelComponent",
          "type": "React.ReactElement<any>",
          "description": "The labelComponent prop takes in an entire label component which will be used\nto create a label for the area. The new element created from the passed labelComponent\nwill be supplied with the following properties: x, y, index, data, verticalAnchor,\ntextAnchor, angle, style, text, and events. any of these props may be overridden\nby passing in props to the supplied component, or modified or ignored within\nthe custom component itself. If labelComponent is omitted, a new ChartLabel\nwill be created with props described above. This labelComponent prop should be used to\nprovide a series label for ChartScatter. If individual labels are required for each\ndata point, they should be created by composing ChartScatter with VictoryScatter"
        },
        {
          "name": "labels",
          "type": "string[] | number[] | ((data: any) => string | number | null)",
          "description": "The labels prop defines labels that will appear above each bar in your chart.\nThis prop should be given as an array of values or as a function of data.\nIf given as an array, the number of elements in the array should be equal to\nthe length of the data array. Labels may also be added directly to the data object\nlike data={[{x: 1, y: 1, label: \"first\"}]}.\n\n@example [\"spring\", \"summer\", \"fall\", \"winter\"], (datum) => datum.title"
        },
        {
          "name": "maxBubbleSize",
          "type": "number",
          "description": "The maxBubbleSize prop sets an upper limit for scaling data points in a bubble chart"
        },
        {
          "name": "maxDomain",
          "type": "number | { x?: number; y?: number }",
          "description": "The maxDomain prop defines a maximum domain value for a chart. This prop is useful in situations where the maximum\ndomain of a chart is static, while the minimum value depends on data or other variable information. If the domain\nprop is set in addition to maximumDomain, domain will be used.\n\nNote: The x value supplied to the maxDomain prop refers to the independent variable, and the y value refers to the\ndependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to\nthe y axis.\n\n@example\n\nmaxDomain={0}\nmaxDomain={{ y: 0 }}"
        },
        {
          "name": "minBubbleSize",
          "type": "number",
          "description": "The minBubbleSize prop sets a lower limit for scaling data points in a bubble chart"
        },
        {
          "name": "minDomain",
          "type": "number | { x?: number; y?: number }",
          "description": "The minDomain prop defines a minimum domain value for a chart. This prop is useful in situations where the minimum\ndomain of a chart is static, while the maximum value depends on data or other variable information. If the domain\nprop is set in addition to minimumDomain, domain will be used.\n\nNote: The x value supplied to the minDomain prop refers to the independent variable, and the y value refers to the\ndependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to\nthe y axis.\n\n@example\n\nminDomain={0}\nminDomain={{ y: 0 }}"
        },
        {
          "name": "name",
          "type": "string",
          "description": "The name prop is used to reference a component instance when defining shared events."
        },
        {
          "name": "origin",
          "type": "{ x: number, y: number }",
          "description": "Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.\n\nNote: It will not typically be necessary to set an origin prop manually"
        },
        {
          "name": "padding",
          "type": "number | { top: number, bottom: number, left: number, right: number }",
          "description": "The padding props specifies the amount of padding in number of pixels between\nthe edge of the chart and any rendered child components. This prop can be given\nas a number or as an object with padding specified for top, bottom, left\nand right."
        },
        {
          "name": "range",
          "type": "number[] | { x: number[], y: number[] }",
          "description": "The range prop describes the dimensions over which data may be plotted. For cartesian coordinate systems, this\ncorresponds to minimum and maximum svg coordinates in the x and y dimension. In polar coordinate systems this\ncorresponds to a range of angles and radii. When this value is not given it will be calculated from the width,\nheight, and padding, or from the startAngle and endAngle in the case of polar charts. All components in a given\nchart must share the same range, so setting this prop on children nested within Chart or\nChartGroup will have no effect. This prop is usually not set manually.\n\n\n@example [low, high] | { x: [low, high], y: [low, high] }\n\nCartesian: range={{ x: [50, 250], y: [50, 250] }}\nPolar: range={{ x: [0, 360], y: [0, 250] }}"
        },
        {
          "name": "samples",
          "type": "number",
          "description": "The samples prop specifies how many individual points to plot when plotting\ny as a function of x. Samples is ignored if x props are provided instead."
        },
        {
          "name": "scale",
          "type": "string | { x: string, y: string }",
          "description": "The scale prop determines which scales your chart should use. This prop can be\ngiven as a string specifying a supported scale (\"linear\", \"time\", \"log\", \"sqrt\"),\nas a d3 scale function, or as an object with scales specified for x and y\n\n\n@example d3Scale.time(), {x: \"linear\", y: \"log\"}"
        },
        {
          "name": "singleQuadrantDomainPadding",
          "type": "boolean | { x?: boolean; y?: boolean }",
          "description": "By default domainPadding is coerced to existing quadrants. This means that if a given domain only includes positive\nvalues, no amount of padding applied by domainPadding will result in a domain with negative values. This is the\ndesired behavior in most cases. For users that need to apply padding without regard to quadrant, the\nsingleQuadrantDomainPadding prop may be used. This prop may be given as a boolean or an object with boolean values\nspecified for \"x\" and/or \"y\". When this prop is false (or false for a given dimension), padding will be applied\nwithout regard to quadrant. If this prop is not specified, domainPadding will be coerced to existing quadrants.\n\nNote: The x value supplied to the singleQuadrantDomainPadding prop refers to the independent variable, and the y\nvalue refers to the dependent variable. This may cause confusion in horizontal charts, as the independent variable\nwill corresponds to the y axis.\n\n@example\n\nsingleQuadrantDomainPadding={false}\nsingleQuadrantDomainPadding={{ x: false }}"
        },
        {
          "name": "size",
          "type": "number | ((data: any) => number)",
          "description": "The size prop determines how to scale each data point",
          "defaultValue": "({ active }) => (active ? ChartScatterStyles.activeSize : ChartScatterStyles.size)"
        },
        {
          "name": "sortKey",
          "type": "number | string | Function | string[]",
          "description": "Use the sortKey prop to indicate how data should be sorted. This prop\nis given directly to the lodash sortBy function to be executed on the\nfinal dataset."
        },
        {
          "name": "sortOrder",
          "type": "string",
          "description": "The sortOrder prop specifies whether sorted data should be returned in 'ascending' or 'descending' order."
        },
        {
          "name": "standalone",
          "type": "boolean",
          "description": "The standalone prop determines whether the component will render a standalone svg\nor a <g> tag that will be included in an external svg. Set standalone to false to\ncompose ChartScatter with other components within an enclosing <svg> tag."
        },
        {
          "name": "style",
          "type": "{ parent: object, data: object, labels: object }",
          "description": "The style prop specifies styles for your ChartScatter. Any valid inline style properties\nwill be applied. Height, width, and padding should be specified via the height,\nwidth, and padding props, as they are used to calculate the alignment of\ncomponents within chart.\n\n\n@example {data: {fill: \"red\"}, labels: {fontSize: 12}}"
        },
        {
          "name": "symbol",
          "type": "string | Function",
          "description": "The symbol prop determines which symbol should be drawn to represent data points. Options are: \"circle\", \"cross\",\n\"diamond\", \"plus\", \"minus\", \"square\", \"star\", \"triangleDown\", \"triangleUp\"."
        },
        {
          "name": "theme",
          "type": "object",
          "description": "The theme prop takes a style object with nested data, labels, and parent objects.\nYou can create this object yourself, or you can use a theme provided by\nWhen using ChartScatter as a solo component, implement the theme directly on\nChartScatter. If you are wrapping ChartScatter in ChartChart or ChartGroup,\nplease call the theme on the outermost wrapper component instead.",
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
          "name": "width",
          "type": "number",
          "description": "The width props specifies the width of the svg viewBox of the chart container\nThis value should be given as a number of pixels"
        },
        {
          "name": "x",
          "type": "number | string | Function | string[]",
          "description": "The x prop specifies how to access the X value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'x', 'x.value.nested.1.thing', 'x[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "y",
          "type": "number | string | Function | string[]",
          "description": "The y prop specifies how to access the Y value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "y0",
          "type": "number | string | Function | string[]",
          "description": "Use y0 data accessor prop to determine how the component defines the baseline y0 data.\nThis prop is useful for defining custom baselines for components like ChartScatter.\nThis prop may be given in a variety of formats.\n\n\n@example 'last_quarter_profit', () => 10, 1, 'employees.salary', [\"employees\", \"salary\"]"
        }
      ]
    },
    {
      "name": "ChartStack",
      "description": "",
      "props": [
        {
          "name": "animate",
          "type": "boolean | object",
          "description": "The animate prop specifies props for VictoryAnimation to use.\nThe animate prop should also be used to specify enter and exit\ntransition configurations with the `onExit` and `onEnter` namespaces respectively.\n\n\n@example\n{duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}"
        },
        {
          "name": "ariaDesc",
          "type": "string",
          "description": "The ariaDesc prop specifies the description of the chart/SVG to assist with\naccessibility for screen readers.\n\nNote: Overridden by the desc prop of containerComponent"
        },
        {
          "name": "ariaTitle",
          "type": "string",
          "description": "The ariaTitle prop specifies the title to be applied to the SVG to assist\naccessibility for screen readers.\n\nNote: Overridden by the title prop of containerComponent"
        },
        {
          "name": "categories",
          "type": "string[] | { x: string[], y: string[] }",
          "description": "The categories prop specifies how categorical data for a chart should be ordered.\nThis prop should be given as an array of string values, or an object with\nthese values for x and y. When categories are not given as an object\nWhen this prop is set on a wrapper component, it will dictate the categories of\nits the children. If this prop is not set, any categories on child component\nor catigorical data, will be merged to create a shared set of categories.\n\n\n@example [\"dogs\", \"cats\", \"mice\"]"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "ChartStack works with any combination of the following children: ChartArea, ChartBar, VictoryCandlestick,\nVictoryErrorBar, ChartGroup, ChartLine, VictoryScatter, ChartStack, and ChartVoronoi. Children supplied to\nChartGroup will be cloned and rendered with new props so that all children share common props such as domain and\nscale."
        },
        {
          "name": "colorScale",
          "type": "string[]",
          "description": "The colorScale prop is an optional prop that defines the color scale the chart's bars\nwill be created on. This prop should be given as an array of CSS colors, or as a string\ncorresponding to one of the built in color scales. ChartStack will automatically assign\nvalues from this color scale to the bars unless colors are explicitly provided in the\n`dataAttributes` prop."
        },
        {
          "name": "containerComponent",
          "type": "React.ReactElement<any>",
          "description": "The containerComponent prop takes an entire component which will be used to\ncreate a container element for standalone charts.\nThe new element created from the passed containerComponent wil be provided with\nthese props from ChartArea: height, width, children\n(the chart itself) and style. Props that are not provided by the\nchild chart component include title and desc, both of which\nare intended to add accessibility to Victory components. The more descriptive these props\nare, the more accessible your data will be for people using screen readers.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartArea will use the default ChartContainer component.\n\n@example <ChartContainer title=\"Chart of Dog Breeds\" desc=\"This chart shows...\" />",
          "defaultValue": "<ChartContainer />"
        },
        {
          "name": "domain",
          "type": "number[] | { x: number[], y: number[] }",
          "description": "The domain prop describes the range of values your chart will include. This prop can be\ngiven as a array of the minimum and maximum expected values for your chart,\nor as an object that specifies separate arrays for x and y.\nIf this prop is not provided, a domain will be calculated from data, or other\navailable information.\n\n\n@example [low, high], { x: [low, high], y: [low, high] }\n\n[-1, 1], {x: [0, 100], y: [0, 1]}"
        },
        {
          "name": "domainPadding",
          "type": "number | number[] | { x: number[], y: number[] }",
          "description": "The domainPadding prop specifies a number of pixels of padding to add to the\nbeginning and end of a domain. This prop is useful for explicitly spacing ticks farther\nfrom the origin to prevent crowding. This prop should be given as an object with\nnumbers specified for x and y.\n\n\n@example [left, right], { x: [left, right], y: [bottom, top] }\n\n{x: [10, -10], y: 5}"
        },
        {
          "name": "eventKey",
          "type": "number | string | Function",
          "description": "Similar to data accessor props `x` and `y`, this prop may be used to functionally\nassign eventKeys to data"
        },
        {
          "name": "events",
          "type": "object[]",
          "description": "The event prop take an array of event objects. Event objects are composed of\na childName, target, eventKey, and eventHandlers. Targets may be any valid style namespace\nfor a given component, (i.e. \"data\" and \"labels\"). The childName will refer to an\nindividual child of ChartStack, either by its name prop, or by index. The eventKey\nmay optionally be used to select a single element by index or eventKey rather than\nan entire set. The eventHandlers object should be given as an object whose keys are standard\nevent names (i.e. onClick) and whose values are event callbacks. The return value\nof an event handler is used to modify elemnts. The return value should be given\nas an object or an array of objects with optional target and eventKey and childName keys,\nand a mutation key whose value is a function. The target and eventKey and childName keys\nwill default to those corresponding to the element the event handler was attached to.\nThe mutation function will be called with the calculated props for the individual selected\nelement (i.e. a single bar), and the object returned from the mutation function\nwill override the props of the selected element via object assignment.\n\n\n@example\nevents={[\n  {\n    target: \"data\",\n    childName: \"firstBar\",\n    eventHandlers: {\n      onClick: () => {\n        return [\n           {\n             childName: \"secondBar\",\n             mutation: (props) => {\n               return {style: merge({}, props.style, {fill: \"orange\"})};\n             }\n           }, {\n             childName: \"secondBar\",\n             target: \"labels\",\n             mutation: () => {\n               return {text: \"hey\"};\n             }\n           }\n         ];\n      }\n    }\n  }\n]}"
        },
        {
          "name": "externalEventMutations",
          "type": "object[]",
          "description": "ChartStack uses the standard externalEventMutations prop."
        },
        {
          "name": "groupComponent",
          "type": "React.ReactElement<any>",
          "description": "The groupComponent prop takes an entire component which will be used to\ncreate group elements for use within container elements. This prop defaults\nto a <g> tag on web, and a react-native-svg <G> tag on mobile"
        },
        {
          "name": "hasPatterns",
          "type": "boolean | boolean[]",
          "description": "The hasPatterns prop is an optional prop that indicates whether a pattern is shown for a chart.\nSVG patterns are dynamically generated (unique to each chart) in order to apply colors from the selected\ncolor theme or custom color scale. Those generated patterns are applied in a specific order (via a URL), similar\nto the color theme ordering defined by PatternFly. If the multi-color theme was in use; for example, colorized\npatterns would be displayed in that same order. Create custom patterns via the patternScale prop.\n\nNote: Not all components are supported; for example, ChartLine, ChartBullet, ChartThreshold, etc.\n\n@example hasPatterns={ true }\n@example hasPatterns={[ true, true, false ]}",
          "beta": true
        },
        {
          "name": "height",
          "type": "number",
          "description": "The height props specifies the height the svg viewBox of the chart container.\nThis value should be given as a number of pixels"
        },
        {
          "name": "horizontal",
          "type": "boolean",
          "description": "The horizontal prop determines whether the bars will be laid vertically or\nhorizontally. The bars will be vertical if this prop is false or unspecified,\nor horizontal if the prop is set to true."
        },
        {
          "name": "labelComponent",
          "type": "React.ReactElement<any>",
          "description": "The labelComponent prop takes in an entire label component which will be used\nto create a label for the area. The new element created from the passed labelComponent\nwill be supplied with the following properties: x, y, index, data, verticalAnchor,\ntextAnchor, angle, style, text, and events. any of these props may be overridden\nby passing in props to the supplied component, or modified or ignored within\nthe custom component itself. If labelComponent is omitted, a new ChartLabel\nwill be created with props described above. This labelComponent prop should be used to\nprovide a series label for ChartArea. If individual labels are required for each\ndata point, they should be created by composing ChartArea with VictoryScatter"
        },
        {
          "name": "labels",
          "type": "string[] | number[] | ((data: any) => string | number | null)",
          "description": "The labels prop defines labels that will appear above each bar in your chart.\nThis prop should be given as an array of values or as a function of data.\nIf given as an array, the number of elements in the array should be equal to\nthe length of the data array. Labels may also be added directly to the data object\nlike data={[{x: 1, y: 1, label: \"first\"}]}.\n\n@example [\"spring\", \"summer\", \"fall\", \"winter\"], (datum) => datum.title"
        },
        {
          "name": "maxDomain",
          "type": "number | { x?: number; y?: number }",
          "description": "The maxDomain prop defines a maximum domain value for a chart. This prop is useful in situations where the maximum\ndomain of a chart is static, while the minimum value depends on data or other variable information. If the domain\nprop is set in addition to maximumDomain, domain will be used.\n\nNote: The x value supplied to the maxDomain prop refers to the independent variable, and the y value refers to the\ndependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to\nthe y axis.\n\n@example\n\nmaxDomain={0}\nmaxDomain={{ y: 0 }}"
        },
        {
          "name": "minDomain",
          "type": "number | { x?: number; y?: number }",
          "description": "The minDomain prop defines a minimum domain value for a chart. This prop is useful in situations where the minimum\ndomain of a chart is static, while the maximum value depends on data or other variable information. If the domain\nprop is set in addition to minimumDomain, domain will be used.\n\nNote: The x value supplied to the minDomain prop refers to the independent variable, and the y value refers to the\ndependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to\nthe y axis.\n\n@example\n\nminDomain={0}\nminDomain={{ y: 0 }}"
        },
        {
          "name": "name",
          "type": "string",
          "description": "The name prop is used to reference a component instance when defining shared events."
        },
        {
          "name": "origin",
          "type": "{ x: number, y: number }",
          "description": "Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.\n\nNote: It will not typically be necessary to set an origin prop manually"
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
          "name": "range",
          "type": "number[] | { x: number[], y: number[] }",
          "description": "The range prop describes the dimensions over which data may be plotted. For cartesian coordinate systems, this\ncorresponds to minimum and maximum svg coordinates in the x and y dimension. In polar coordinate systems this\ncorresponds to a range of angles and radii. When this value is not given it will be calculated from the width,\nheight, and padding, or from the startAngle and endAngle in the case of polar charts. All components in a given\nchart must share the same range, so setting this prop on children nested within Chart or\nChartGroup will have no effect. This prop is usually not set manually.\n\n\n@example [low, high] | { x: [low, high], y: [low, high] }\n\nCartesian: range={{ x: [50, 250], y: [50, 250] }}\nPolar: range={{ x: [0, 360], y: [0, 250] }}"
        },
        {
          "name": "scale",
          "type": "string | { x: string, y: string }",
          "description": "The scale prop determines which scales your chart should use. This prop can be\ngiven as a string specifying a supported scale (\"linear\", \"time\", \"log\", \"sqrt\"),\nas a d3 scale function, or as an object with scales specified for x and y\n\n\n@example d3Scale.time(), {x: \"linear\", y: \"log\"}"
        },
        {
          "name": "singleQuadrantDomainPadding",
          "type": "boolean | { x?: boolean; y?: boolean }",
          "description": "By default domainPadding is coerced to existing quadrants. This means that if a given domain only includes positive\nvalues, no amount of padding applied by domainPadding will result in a domain with negative values. This is the\ndesired behavior in most cases. For users that need to apply padding without regard to quadrant, the\nsingleQuadrantDomainPadding prop may be used. This prop may be given as a boolean or an object with boolean values\nspecified for \"x\" and/or \"y\". When this prop is false (or false for a given dimension), padding will be applied\nwithout regard to quadrant. If this prop is not specified, domainPadding will be coerced to existing quadrants.\n\nNote: The x value supplied to the singleQuadrantDomainPadding prop refers to the independent variable, and the y\nvalue refers to the dependent variable. This may cause confusion in horizontal charts, as the independent variable\nwill corresponds to the y axis.\n\n@example\n\nsingleQuadrantDomainPadding={false}\nsingleQuadrantDomainPadding={{ x: false }}"
        },
        {
          "name": "standalone",
          "type": "boolean",
          "description": "The standalone prop determines whether the component will render a standalone svg\nor a <g> tag that will be included in an external svg. Set standalone to false to\ncompose ChartArea with other components within an enclosing <svg> tag."
        },
        {
          "name": "style",
          "type": "{ parent: object, data: object, labels: object }",
          "description": "The style prop specifies styles for your grouped chart. These styles will be\napplied to all grouped children"
        },
        {
          "name": "theme",
          "type": "object",
          "description": "The theme prop takes a style object with nested data, labels, and parent objects.\nYou can create this object yourself, or you can use a theme provided by\nWhen using ChartArea as a solo component, implement the theme directly on\nChartArea. If you are wrapping ChartArea in ChartChart or ChartGroup,\nplease call the theme on the outermost wrapper component instead.",
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
          "name": "width",
          "type": "number",
          "description": "The width props specifies the width of the svg viewBox of the chart container\nThis value should be given as a number of pixels"
        },
        {
          "name": "xOffset",
          "type": "number",
          "description": "The xOffset prop is used for grouping stacks of bars. This prop will be set\nby the ChartGroup component wrapper, or can be set manually."
        }
      ]
    },
    {
      "name": "ChartVoronoiContainer",
      "description": "",
      "props": [
        {
          "name": "activateData",
          "type": "boolean",
          "description": "When the activateData prop is set to true, the active prop will be set to true on all\ndata components within a voronoi area. When this prop is set to false, the onActivated\nand onDeactivated callbacks will still fire, but no mutations to data components will\noccur via Victory’s event system."
        },
        {
          "name": "activateLabels",
          "type": "boolean",
          "description": "When the activateLabels prop is set to true, the active prop will be set to true on all\nlabels corresponding to points within a voronoi area. When this prop is set to false,\nthe onActivated and onDeactivated callbacks will still fire, but no mutations to label\ncomponents will occur via Victory’s event system. Labels defined directly on\nChartVoronoiContainer via the labels prop will still appear when this prop is set to false."
        },
        {
          "name": "className",
          "type": "string",
          "description": "The className prop specifies a className that will be applied to the outer-most div rendered by the container"
        },
        {
          "name": "constrainToVisibleArea",
          "type": "boolean",
          "description": "The constrainToVisibleArea prop determines whether to coerce tooltips so that they fit within the visible area of\nthe chart. When this prop is set to true, tooltip pointers will still point to the correct data point, but the\ncenter of the tooltip will be shifted to fit within the overall width and height of the svg Victory renders.",
          "defaultValue": "false"
        },
        {
          "name": "containerId",
          "type": "number | string",
          "description": "The containerId prop may be used to set a deterministic id for the container. When a containerId is not manually\nset, a unique id will be generated. It is usually necessary to set deterministic ids for automated testing."
        },
        {
          "name": "desc",
          "type": "string",
          "description": "The desc prop specifies the description of the chart/SVG to assist with\naccessibility for screen readers. The more info about the chart provided in\nthe description, the more usable it will be for people using screen readers.\nThis prop defaults to an empty string.\n\n@example \"Golden retreivers make up 30%, Labs make up 25%, and other dog breeds are\nnot represented above 5% each.\""
        },
        {
          "name": "disable",
          "type": "boolean",
          "description": "When the disable prop is set to true, ChartVoronoiContainer events will not fire."
        },
        {
          "name": "events",
          "type": "React.DOMAttributes<any>",
          "description": "The events prop attaches arbitrary event handlers to the container component.\nEvent handlers passed from other Victory components are called with their\ncorresponding events as well as scale, style, width, height, and data when\napplicable. Use the invert method to convert event coordinate information to\ndata. `scale.x.invert(evt.offsetX)`.\n\n@example {onClick: (evt) => alert(`x: ${evt.clientX}, y: ${evt.clientY}`)}"
        },
        {
          "name": "height",
          "type": "number",
          "description": "The height props specifies the height the svg viewBox of the container.\nThis value should be given as a number of pixels. If no height prop\nis given, the height prop from the child component passed will be used."
        },
        {
          "name": "labelComponent",
          "type": "React.ReactElement<any>",
          "description": "The labelComponent prop specified the component that will be rendered when labels are defined\non ChartVoronoiContainer. If the labels prop is omitted, no label component will be rendered.",
          "defaultValue": "<ChartTooltip />"
        },
        {
          "name": "labels",
          "type": "(point: any, index: number, points: any[]) => string",
          "description": "When a labels prop is provided to ChartVoronoiContainer it will render a label component\nrather than activating labels on the child components it renders. This is useful for\ncreating multi- point tooltips. This prop should be given as a function which will be called\nonce for each active point. The labels function will be called with the arguments point,\nindex, and points, where point refers to a single active point, index refers to the position\nof that point in the array of active points, and points is an array of all active points."
        },
        {
          "name": "mouseFollowTooltips",
          "type": "boolean",
          "description": "When the mouseFollowTooltip prop is set on ChartVoronoiContainer, The position of the center of the tooltip\nfollows the position of the mouse."
        },
        {
          "name": "name",
          "type": "string",
          "description": "The name prop is used to reference a component instance when defining shared events."
        },
        {
          "name": "onActivated",
          "type": "Function",
          "description": "The onActivated prop accepts a function to be called whenever new data points are activated.\nThe function is called with the parameters points (an array of active data objects) and props\n(the props used by ChartVoronoiContainer)."
        },
        {
          "name": "onDeactivated",
          "type": "Function",
          "description": "The onDeactivated prop accepts a function to be called whenever points are deactivated. The\nfunction is called with the parameters points (an array of the newly-deactivated data objects)\nand props (the props used by ChartVoronoiContainer)."
        },
        {
          "name": "origin",
          "type": "{ x: number, y: number }",
          "description": "Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.\n\nNote: It will not typically be necessary to set an origin prop manually"
        },
        {
          "name": "portalComponent",
          "type": "React.ReactElement",
          "description": "The portalComponent prop takes a component instance which will be used as a container for children that should\nrender inside a top-level container so that they will always appear above other elements. ChartTooltip renders\ninside a portal so that tooltips always render above data. VictoryPortal is used to define elements that should\nrender in the portal container. This prop defaults to Portal, and should only be overridden when changing rendered\nelements from SVG to another type of element e.g., react-native-svg elements."
        },
        {
          "name": "portalZIndex",
          "type": "number",
          "description": "The portalZIndex prop determines the z-index of the div enclosing the portal component. If a portalZIndex prop is\nnot set, the z-index of the enclosing div will be set to 99."
        },
        {
          "name": "radius",
          "type": "number",
          "description": "When the radius prop is set, the voronoi areas associated with each data point will be no larger\nthan the given radius. This prop should be given as a number."
        },
        {
          "name": "responsive",
          "type": "boolean",
          "description": "The responsive prop specifies whether the rendered container should be a responsive container\nwith a viewBox attribute, or a static container with absolute width and height.\n\n@default true"
        },
        {
          "name": "style",
          "type": "React.CSSProperties",
          "description": "The style prop specifies styles for your ChartContainer. Any valid inline style properties\nwill be applied. Height and width should be specified via the height\nand width props, as they are used to calculate the alignment of\ncomponents within the container. Styles from the child component will\nalso be passed, if any exist.\n\n@example {border: 1px solid red}"
        },
        {
          "name": "tabIndex",
          "type": "number",
          "description": "The tabIndex prop specifies the description of the chart/SVG to assist with accessibility."
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
          "name": "voronoiBlacklist",
          "type": "string[]",
          "description": "The voronoiBlacklist prop is used to specify a list of components to ignore when calculating a\nshared voronoi diagram. Components with a name prop matching an element in the voronoiBlacklist\narray will be ignored by ChartVoronoiContainer. Ignored components will never be flagged as\nactive, and will not contribute date to shared tooltips or labels."
        },
        {
          "name": "voronoiDimension",
          "type": "'x' | 'y'",
          "description": "When the voronoiDimension prop is set, voronoi selection will only take the given dimension into\naccount. For example, when dimension is set to “x”, all data points matching a particular x mouse\nposition will be activated regardless of y value. When this prop is not given, voronoi selection\nis determined by both x any y values."
        },
        {
          "name": "voronoiPadding",
          "type": "number",
          "description": "When the voronoiPadding prop is given, the area of the chart that will trigger voronoi events is\nreduced by the given padding on every side. By default, no padding is applied, and the entire range\nof a given chart may trigger voronoi events. This prop should be given as a number."
        },
        {
          "name": "width",
          "type": "number",
          "description": "The width props specifies the width of the svg viewBox of the container\nThis value should be given as a number of pixels. If no width prop\nis given, the width prop from the child component passed will be used."
        }
      ]
    }
  ],
  "beta": true,
  "examples": [
    "Basic pie chart",
    "Bar chart",
    "Stack chart",
    "Donut chart",
    "Donut utilization chart",
    "Donut utilization chart with thresholds",
    "Interactive legend with pie chart",
    "Interactive legend with area chart",
    "Custom pattern visibility",
    "Custom color scale",
    "Custom pattern defs",
    "All patterns"
  ]
};
pageData.liveContext = {
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartDonut,
  ChartDonutThreshold,
  ChartDonutUtilization,
  ChartGroup,
  ChartLegend,
  ChartLegendTooltip,
  ChartPie,
  ChartScatter,
  ChartStack,
  ChartThemeColor,
  ChartVoronoiContainer,
  createContainer,
  getInteractiveLegendEvents,
  getInteractiveLegendItemStyles,
  getResizeObserver,
  chart_area_Opacity,
  chart_color_black_500,
  chart_color_blue_300,
  chart_color_green_300,
  chart_color_cyan_300,
  chart_color_gold_300
};
pageData.examples = {
  'Basic pie chart': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartPie } from '@patternfly/react-charts';\n\nconst BasicPieChart = () => (\n  <div style={{ height: '230px', width: '350px' }}>\n    <ChartPie\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Pie chart example\"\n      constrainToVisibleArea\n      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}\n      hasPatterns\n      height={230}\n      labels={({ datum }) => `${datum.x}: ${datum.y}`}\n      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}\n      legendOrientation=\"vertical\"\n      legendPosition=\"right\"\n      padding={{\n        bottom: 20,\n        left: 20,\n        right: 140, // Adjusted to accommodate legend\n        top: 20\n      }}\n      width={350}\n    />\n  </div>\n)","title":"Basic pie chart","lang":"js"}}>
      
    </Example>,
  'Bar chart': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartBar, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';\n\nconst BarChart = () => (\n  <div style={{ height: '275px', width: '450px' }}>\n    <Chart\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Bar chart example\"\n      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}\n      domainPadding={{ x: [30, 25] }}\n      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}\n      legendPosition=\"bottom\"\n      hasPatterns\n      height={275}\n      padding={{\n        bottom: 75, // Adjusted to accommodate legend\n        left: 50,\n        right: 50,\n        top: 50\n      }}\n      themeColor={ChartThemeColor.purple}\n      width={450}\n    >\n      <ChartAxis />\n      <ChartAxis dependentAxis showGrid />\n      <ChartGroup offset={11}>\n        <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />\n        <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />\n        <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />\n        <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />\n      </ChartGroup>\n    </Chart>\n  </div>\n)","title":"Bar chart","lang":"js"}}>
      
    </Example>,
  'Stack chart': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartBar, ChartStack, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';\n\nconst StackChart = () => (\n  <div style={{ height: '250px', width: '600px' }}>\n    <Chart\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Stack chart example\"\n      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}\n      domainPadding={{ x: [30, 25] }}\n      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}\n      legendOrientation=\"vertical\"\n      legendPosition=\"right\"\n      hasPatterns\n      height={250}\n      padding={{\n        bottom: 50,\n        left: 50,\n        right: 200, // Adjusted to accommodate legend\n        top: 50\n      }}\n      themeColor={ChartThemeColor.green}\n      width={600}\n    >\n      <ChartAxis />\n      <ChartAxis dependentAxis showGrid />\n      <ChartStack>\n        <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />\n        <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />\n        <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />\n        <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />\n      </ChartStack>\n    </Chart>\n  </div>\n)","title":"Stack chart","lang":"js"}}>
      
    </Example>,
  'Donut chart': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonut, ChartThemeColor } from '@patternfly/react-charts';\n\nconst DonutChart = () => (\n  <div style={{ height: '230px', width: '350px' }}>\n    <ChartDonut\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Donut chart example\"\n      constrainToVisibleArea\n      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}\n      hasPatterns\n      labels={({ datum }) => `${datum.x}: ${datum.y}%`}\n      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}\n      legendOrientation=\"vertical\"\n      legendPosition=\"right\"\n      padding={{\n        bottom: 20,\n        left: 20,\n        right: 140, // Adjusted to accommodate legend\n        top: 20\n      }}\n      subTitle=\"Pets\"\n      title=\"100\"\n      themeColor={ChartThemeColor.gold}\n      width={350}\n    />\n  </div>\n)","title":"Donut chart","lang":"js"}}>
      
    </Example>,
  'Donut utilization chart': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts';\n\nconst DonutUtilizationChart = () => (\n  <div style={{ height: '275px', width: '300px' }}>\n    <ChartDonutUtilization \n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Donut utilization chart example\"\n      constrainToVisibleArea\n      data={{ x: 'Storage capacity', y: 45 }}\n      hasPatterns\n      height={275}\n      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n      legendData={[{ name: `Storage capacity: 45%` }, { name: 'Unused' }]}\n      legendPosition=\"bottom\"\n      padding={{\n        bottom: 65, // Adjusted to accommodate legend\n        left: 20,\n        right: 20,\n        top: 20\n      }}\n      subTitle=\"of 100 GBps\"\n      title=\"45%\"\n      themeColor={ChartThemeColor.green}\n      thresholds={[{ value: 60 }, { value: 90 }]}\n      width={300}\n    />\n  </div>\n)","title":"Donut utilization chart","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to hide a pattern for the static, unused portion of the donut utilization chart.`}
      </p>
    </Example>,
  'Donut utilization chart with thresholds': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts';\n\nconst DonutUtilizationChartWithThresholds = () => (\n  <div style={{ height: '275px', width: '675px' }}>\n    <ChartDonutThreshold\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Donut utilization chart with static threshold example\"\n      constrainToVisibleArea\n      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}\n      hasPatterns\n      height={275}\n      labels={({ datum }) => datum.x ? datum.x : null}\n      padding={{\n        bottom: 65, // Adjusted to accommodate legend\n        left: 20,\n        right: 20,\n        top: 20\n      }}\n      width={675}\n    >\n      <ChartDonutUtilization\n        data={{ x: 'Storage capacity', y: 45 }}\n        labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n        legendData={[{ name: `Storage capacity: 45%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]}\n        legendPosition=\"bottom\"\n        subTitle=\"of 100 GBps\"\n        title=\"45%\"\n        themeColor={ChartThemeColor.orange}\n      />\n    </ChartDonutThreshold>\n  </div>\n)","title":"Donut utilization chart with thresholds","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to apply patterns to thresholds.`}
      </p>
    </Example>,
  'Interactive legend with pie chart': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { \n  Chart,\n  ChartLegend,\n  ChartThemeColor,\n  ChartPie,\n  getInteractiveLegendEvents, \n  getInteractiveLegendItemStyles \n} from '@patternfly/react-charts';\n\nclass InteractivePieLegendChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      hiddenSeries: new Set(),\n      width: 0\n    };\n    this.series = [{\n      datapoints: { x: 'Cats', y: 25 },\n      legendItem: { name: 'Cats: 35' }\n    }, {\n      datapoints: { x: 'Dogs', y: 25 },\n      legendItem: { name: 'Dogs: 25' }\n    }, {\n      datapoints: { x: 'Birds', y: 10 },\n      legendItem: { name: 'Birds: 10' }\n    }];\n\n    // Returns groups of chart names associated with each data series\n    this.getChartNames = () => {\n      const result = [];\n      this.series.map((_, index) => {\n        // Provide names for each series hidden / shown -- use the same name for a pie chart\n        result.push(['pie']);\n      });\n      return result;\n    };\n\n    // Returns onMouseOver, onMouseOut, and onClick events for the interactive legend\n    this.getEvents = () => getInteractiveLegendEvents({\n      chartNames: this.getChartNames(),\n      isHidden: this.isHidden,\n      legendName: 'legend',\n      onLegendClick: this.handleLegendClick\n    });\n\n    // Returns legend data styled per hiddenSeries\n    this.getLegendData = () => {\n      const { hiddenSeries } = this.state;\n      return this.series.map((s, index) => {\n        return {\n          ...s.legendItem, // name property\n          ...getInteractiveLegendItemStyles(hiddenSeries.has(index)) // hidden styles\n        };\n      });\n    };\n\n    // Hide each data series individually\n    this.handleLegendClick = (props) => {\n      if (!this.state.hiddenSeries.delete(props.index)) {\n        this.state.hiddenSeries.add(props.index);\n      }\n      this.setState({ hiddenSeries: new Set(this.state.hiddenSeries) });\n    };\n\n    // Returns true if data series is hidden\n    this.isHidden = (index) => {\n      const { hiddenSeries } = this.state; // Skip if already hidden                \n      return hiddenSeries.has(index);\n    };\n  };\n\n  render() {\n    const { hiddenSeries, width } = this.state;\n\n    const data = [];\n    this.series.map((s, index) => {\n      data.push(!hiddenSeries.has(index) ? s.datapoints : { y: null });\n    });\n    \n    return (\n      <div style={{ height: '275px', width: '500px' }}>\n        <Chart\n          ariaDesc=\"Average number of pets\"\n          ariaTitle=\"Pie chart example\"\n          events={this.getEvents()}\n          hasPatterns\n          height={275}\n          legendComponent={<ChartLegend name={'legend'} data={this.getLegendData()} />}\n          legendPosition=\"bottom\"\n          padding={{\n            bottom: 65,\n            left: 20,\n            right: 20,\n            top: 20\n          }}\n          showAxis={false}\n          themeColor={ChartThemeColor.multiUnordered}\n          width={500}\n        >\n          <ChartPie\n            constrainToVisibleArea\n            data={data}\n            labels={({ datum }) => `${datum.x}: ${datum.y}`}\n            name=\"pie\"\n          />\n        </Chart>\n      </div>\n    );\n  }\n}","title":"Interactive legend with pie chart","lang":"js"}}>
      
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
  'Interactive legend with area chart': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { \n  Chart, \n  ChartArea, \n  ChartAxis, \n  ChartGroup, \n  ChartLegend,\n  ChartLegendTooltip,\n  ChartScatter, \n  ChartThemeColor,\n  createContainer, \n  getInteractiveLegendEvents, \n  getInteractiveLegendItemStyles,\n  getResizeObserver\n} from '@patternfly/react-charts';\n// import '@patternfly/patternfly/patternfly-charts.css'; // For mixed blend mode\n\nclass InteractiveLegendChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.containerRef = React.createRef();\n    this.observer = () => {};\n    this.state = {\n      hiddenSeries: new Set(),\n      width: 0\n    };\n    this.series = [{\n      datapoints: [\n        { x: '2015', y: 3 },\n        { x: '2016', y: 4 },\n        { x: '2017', y: 8 },\n        { x: '2018', y: 6 }\n      ],\n      legendItem: { name: 'Cats' }\n    }, {\n      datapoints: [\n        { x: '2015', y: 2 },\n        { x: '2016', y: 3 },\n        { x: '2017', y: 4 },\n        { x: '2018', y: 5 },\n        { x: '2019', y: 6 }\n      ],\n      legendItem: { name: 'Dogs' }\n    }, {\n      datapoints: [\n        { x: '2015', y: 1 },\n        { x: '2016', y: 2 },\n        { x: '2017', y: 3 },\n        { x: '2018', y: 2 },\n        { x: '2019', y: 4 }\n      ],\n      legendItem: { name: 'Birds' }\n    }];\n\n    // Returns groups of chart names associated with each data series\n    this.getChartNames = () => {\n      const result = [];\n      this.series.map((_, index) => {\n        // Each group of chart names are hidden / shown together\n        result.push([`area-${index}`, `scatter-${index}`]);\n      });\n      return result;\n    };\n\n    // Returns onMouseOver, onMouseOut, and onClick events for the interactive legend\n    this.getEvents = () => getInteractiveLegendEvents({\n      chartNames: this.getChartNames(),\n      isHidden: this.isHidden,\n      legendName: 'legend',\n      onLegendClick: this.handleLegendClick\n    });\n\n    // Returns legend data styled per hiddenSeries\n    this.getLegendData = () => {\n      const { hiddenSeries } = this.state;\n      return this.series.map((s, index) => {\n        return {\n          childName: `area-${index}`, // Sync tooltip legend with the series associated with given chart name\n          ...s.legendItem, // name property\n          ...getInteractiveLegendItemStyles(hiddenSeries.has(index)) // hidden styles\n        };\n      });\n    };\n\n    // Hide each data series individually\n    this.handleLegendClick = (props) => {\n      if (!this.state.hiddenSeries.delete(props.index)) {\n        this.state.hiddenSeries.add(props.index);\n      }\n      this.setState({ hiddenSeries: new Set(this.state.hiddenSeries) });\n    };\n\n    // Set chart width per current window size\n    this.handleResize = () => {\n      if (this.containerRef.current && this.containerRef.current.clientWidth) {\n        this.setState({ width: this.containerRef.current.clientWidth });\n      }\n    };\n\n    // Returns true if data series is hidden\n    this.isHidden = (index) => {\n      const { hiddenSeries } = this.state; // Skip if already hidden                \n      return hiddenSeries.has(index);\n    };\n\n    this.isDataAvailable = () => {\n      const { hiddenSeries } = this.state;\n      return hiddenSeries.size !== this.series.length;\n    };\n\n    // Note: Container order is important\n    const CursorVoronoiContainer = createContainer(\"voronoi\", \"cursor\");\n\n    this.cursorVoronoiContainer = (\n      <CursorVoronoiContainer\n        cursorDimension=\"x\"\n        labels={({ datum }) => datum.childName.includes('area-') && datum.y !== null ? `${datum.y}` : null}\n        labelComponent={<ChartLegendTooltip legendData={this.getLegendData()} title={(datum) => datum.x}/>}\n        mouseFollowTooltips\n        voronoiDimension=\"x\"\n        voronoiPadding={50}\n      />\n    );\n  };\n\n  componentDidMount() {\n    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);\n    this.handleResize();\n  }\n\n  componentWillUnmount() {\n    this.observer();\n  }\n\n  // Tips:\n  // 1. Omitting hidden components will reassign color scale, use null data instead or custom colors\n  // 2. Set domain or tick axis labels to account for when all data series are hidden\n  // 3. Omit tooltip for ChartScatter component by checking childName prop\n  // 4. Omit tooltip when all data series are hidden\n  // 5. Clone original container to ensure tooltip events are not lost when data series are hidden / shown\n  render() {\n    const { hiddenSeries, width } = this.state;\n\n    const container = React.cloneElement(\n      this.cursorVoronoiContainer, \n      {\n        disable: !this.isDataAvailable()\n      }\n    );\n\n    return (\n      <div ref={this.containerRef}>\n        <div className=\"area-chart-legend-bottom-responsive\">\n          <Chart\n            ariaDesc=\"Average number of pets\"\n            ariaTitle=\"Area chart example\"\n            containerComponent={container}\n            events={this.getEvents()}\n            hasPatterns\n            height={225}\n            legendComponent={<ChartLegend name={'legend'} data={this.getLegendData()} />}\n            legendPosition=\"bottom-left\"\n            padding={{\n              bottom: 75, // Adjusted to accommodate legend\n              left: 50,\n              right: 50,\n              top: 50,\n            }}\n            maxDomain={{y: 9}}\n            themeColor={ChartThemeColor.multiUnordered}\n            width={width}\n          >\n            <ChartAxis tickValues={['2015', '2016', '2017', '2018']} />\n            <ChartAxis dependentAxis showGrid />\n            <ChartGroup>\n              {this.series.map((s, index) => {\n                return (\n                  <ChartScatter\n                    data={!hiddenSeries.has(index) ? s.datapoints : [{ y: null}]}\n                    key={'scatter-' + index}\n                    name={'scatter-' + index}\n                    size={({ active }) => (active ? 5 : 3)}\n                  />\n                );\n              })}\n            </ChartGroup>\n            <ChartGroup>\n              {this.series.map((s, index) => {\n                return (\n                  <ChartArea\n                    data={!hiddenSeries.has(index) ? s.datapoints : [{ y: null}]}\n                    interpolation=\"monotoneX\"\n                    key={'area-' + index}\n                    name={'area-' + index}\n                  />\n                );\n              })}\n            </ChartGroup>\n          </Chart>\n        </div>\n      </div>\n    );\n  }\n}","title":"Interactive legend with area chart","lang":"js"}}>
      
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
  'Custom pattern visibility': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartPie, ChartThemeColor } from '@patternfly/react-charts';\n\nconst CustomPatternVisibility = () => (\n  <div style={{ height: '230px', width: '350px' }}>\n    <ChartPie\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Pie chart example\"\n      constrainToVisibleArea\n      data={[{ x: 'Cats', y: 15 }, { x: 'Dogs', y: 15 }, { x: 'Birds', y: 15 }, { x: 'Fish', y: 25 }, { x: 'Rabbits', y: 30 }]}\n      hasPatterns={[ true, true, false, false, false ]}\n      height={230}\n      labels={({ datum }) => `${datum.x}: ${datum.y}`}\n      legendData={[{ name: 'Cats: 15' }, { name: 'Dogs: 15' }, { name: 'Birds: 15' }, { name: 'Fish: 25' }, { name: 'Rabbits: 30' }]}\n      legendOrientation=\"vertical\"\n      legendPosition=\"right\"\n      padding={{\n        bottom: 20,\n        left: 20,\n        right: 140, // Adjusted to accommodate legend\n        top: 20\n      }}\n      themeColor={ChartThemeColor.multiUnordered}\n      width={350}\n    />\n  </div>\n)","title":"Custom pattern visibility","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to omit patterns from pie chart segments.`}
      </p>
    </Example>,
  'Custom color scale': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartPie } from '@patternfly/react-charts';\nimport chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';\nimport chart_color_gold_300 from '@patternfly/react-tokens/dist/esm/chart_color_gold_300';\nimport chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';\n\nconst CustomColorScale = () => (\n  <div style={{ height: '230px', width: '350px' }}>\n    <ChartPie\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Pie chart example\"\n      colorScale={[chart_color_blue_300.var, chart_color_gold_300.var, chart_color_green_300.var]}\n      constrainToVisibleArea\n      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}\n      hasPatterns={[ true, true, false ]}\n      height={230}\n      labels={({ datum }) => `${datum.x}: ${datum.y}`}\n      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}\n      legendOrientation=\"vertical\"\n      legendPosition=\"right\"\n      padding={{\n        bottom: 20,\n        left: 20,\n        right: 140, // Adjusted to accommodate legend\n        top: 20\n      }}\n      width={350}\n    />\n  </div>\n)","title":"Custom color scale","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to apply a custom color scale to patterns.`}
      </p>
    </Example>,
  'Custom pattern defs': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartPie, ChartThemeColor } from '@patternfly/react-charts';\nimport chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';\nimport chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';\n\nconst CustomPatternDefs = () => (\n  <div style={{ height: '230px', width: '350px' }}>\n    <svg aria-hidden height=\"0\" width=\"0\" style={{display: 'block'}}>\n      <defs>\n        <pattern id=\"pattern1\" patternUnits=\"userSpaceOnUse\" patternContentUnits=\"userSpaceOnUse\" width=\"10\" height=\"10\" x=\"0\" y=\"0\">\n          <path d=\"M 0 0 L 5 10 L 10 0\" stroke={chart_color_blue_300.value} strokeWidth=\"2\" fill=\"none\"></path>\n        </pattern>\n        <pattern id=\"pattern2\" patternUnits=\"userSpaceOnUse\" patternContentUnits=\"userSpaceOnUse\" width=\"10\" height=\"10\" x=\"0\" y=\"0\">\n          <path d=\"M 0 3 L 5 3 L 5 0 M 5 10 L 5 7 L 10 7\" stroke={chart_color_green_300.value} strokeWidth=\"2\" fill=\"none\"></path>\n        </pattern>\n      </defs>\n    </svg>\n    <ChartPie\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Pie chart example\"\n      constrainToVisibleArea\n      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}\n      height={230}\n      labels={({ datum }) => `${datum.x}: ${datum.y}`}\n      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}\n      legendOrientation=\"vertical\"\n      legendPosition=\"right\"\n      padding={{\n        bottom: 20,\n        left: 20,\n        right: 140, // Adjusted to accommodate legend\n        top: 20\n      }}\n      patternScale={[ 'url(\"#pattern1\")', 'url(\"#pattern2\")', null ]}\n      themeColor={ChartThemeColor.multiUnordered}\n      width={350}\n    />\n  </div>\n)","title":"Custom pattern defs","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to create custom patterns.`}
      </p>
    </Example>,
  'All patterns': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartPie, ChartThemeColor } from '@patternfly/react-charts';\n\nconst AllPatterns = () => (\n  <div style={{ height: '325px', width: '600px' }}>\n    <ChartPie\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Pie chart example\"\n      constrainToVisibleArea\n      data={[\n        { x: 'Cats', y: 6 },\n        { x: 'Dogs', y: 6 },\n        { x: 'Birds', y: 6 },\n        { x: 'Fish', y: 6 },\n        { x: 'Rabbits', y: 6 },\n        { x: 'Squirels', y: 6 },\n        { x: 'Chipmunks', y: 6 },\n        { x: 'Bats', y: 6 },\n        { x: 'Ducks', y: 6 },\n        { x: 'Geese', y: 6 },\n        { x: 'Bobcats', y: 6 },\n        { x: 'Foxes', y: 6 },\n        { x: 'Coyotes', y: 6 },\n        { x: 'Deer', y: 6 },\n        { x: 'Bears', y: 10 }\n      ]}\n      hasPatterns\n      height={325}\n      labels={({ datum }) => `${datum.x}: ${datum.y}`}\n      legendData={[\n        { name: 'Cats: 6' },\n        { name: 'Dogs: 6' },\n        { name: 'Birds: 6' },\n        { name: 'Fish: 6' },\n        { name: 'Rabbits: 6' },\n        { name: 'Squirels: 6' },\n        { name: 'Chipmunks: 6' },\n        { name: 'Bats: 6' },\n        { name: 'Ducks: 6' },\n        { name: 'Geese: 6' },\n        { name: 'Bobcat: 6' },\n        { name: 'Foxes: 6' },\n        { name: 'Coyotes: 6' },\n        { name: 'Deer: 6' },\n        { name: 'Bears: 6' },\n      ]}\n      legendAllowWrap\n      legendPosition=\"bottom\"\n      padding={{\n        bottom: 110,\n        left: 20,\n        right: 20,\n        top: 20\n      }}\n      themeColor={ChartThemeColor.multiOrdered}\n      width={600}\n    />\n  </div>\n)","title":"All patterns","lang":"js"}}>
      
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
    {React.createElement(pageData.examples["Basic pie chart"])}
    {React.createElement(pageData.examples["Bar chart"])}
    {React.createElement(pageData.examples["Stack chart"])}
    {React.createElement(pageData.examples["Donut chart"])}
    {React.createElement(pageData.examples["Donut utilization chart"])}
    {React.createElement(pageData.examples["Donut utilization chart with thresholds"])}
    {React.createElement(pageData.examples["Interactive legend with pie chart"])}
    {React.createElement(pageData.examples["Interactive legend with area chart"])}
    {React.createElement(pageData.examples["Custom pattern visibility"])}
    {React.createElement(pageData.examples["Custom color scale"])}
    {React.createElement(pageData.examples["Custom pattern defs"])}
    {React.createElement(pageData.examples["All patterns"])}
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
          {`Chart`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-chart"}}>
          {`VictoryChart`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`For `}
        <code {...{"className":"ws-code"}}>
          {`ChartArea`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-area"}}>
          {`VictoryArea`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`For `}
        <code {...{"className":"ws-code"}}>
          {`ChartAxis`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-axis"}}>
          {`VictoryAxis`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`For `}
        <code {...{"className":"ws-code"}}>
          {`ChartBar`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-bar"}}>
          {`VictoryBar`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`For `}
        <code {...{"className":"ws-code"}}>
          {`ChartDonut`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-pie"}}>
          {`VictoryPie`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`For `}
        <code {...{"className":"ws-code"}}>
          {`ChartDonutThreshold`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-pie"}}>
          {`VictoryPie`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`For `}
        <code {...{"className":"ws-code"}}>
          {`ChartDonutUtilization`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-pie"}}>
          {`VictoryPie`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`For `}
        <code {...{"className":"ws-code"}}>
          {`ChartGroup`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-group"}}>
          {`VictoryGroup`}
        </PatternflyThemeLink>
      </li>
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
      <li {...{"className":"ws-li"}}>
        {`For `}
        <code {...{"className":"ws-code"}}>
          {`ChartPie`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-pie"}}>
          {`VictoryPie`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`For `}
        <code {...{"className":"ws-code"}}>
          {`ChartScatter`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-scatter"}}>
          {`VictoryScatter`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`For `}
        <code {...{"className":"ws-code"}}>
          {`ChartStack`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-stack"}}>
          {`VictoryStack`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`For `}
        <code {...{"className":"ws-code"}}>
          {`ChartVoronoiContainer`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-voronoi-container"}}>
          {`VictoryVoronoiContainer`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ChartsPatternsReactDocs';
Component.pageData = pageData;

export default Component;
