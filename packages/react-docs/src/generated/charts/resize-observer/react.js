import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { 
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartBullet,
  ChartGroup,
  ChartLegend,
  ChartStack,
  ChartThemeColor,
  ChartThreshold,
  ChartTooltip,
  ChartVoronoiContainer,
  getResizeObserver
} from '@patternfly/react-charts';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';
import '@patternfly/patternfly/patternfly-charts.css';
const pageData = {
  "id": "Resize observer",
  "section": "charts",
  "source": "react",
  "slug": "/charts/resize-observer/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-charts/src/components/ResizeObserver/examples/resizeObserver.md",
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
      "name": "ChartBullet",
      "description": "",
      "props": [
        {
          "name": "allowTooltip",
          "type": "boolean",
          "description": "Specifies the tooltip capability of the container component. A value of true allows the chart to add a\nChartTooltip component to the labelComponent property. This is a shortcut to display tooltips when the labels\nproperty is also provided.",
          "defaultValue": "true"
        },
        {
          "name": "ariaDesc",
          "type": "string",
          "description": "The ariaDesc prop specifies the description of the chart/SVG to assist with\naccessibility for screen readers."
        },
        {
          "name": "ariaTitle",
          "type": "string",
          "description": "The ariaTitle prop specifies the title to be applied to the SVG to assist\naccessibility for screen readers."
        },
        {
          "name": "axisComponent",
          "type": "React.ReactElement<any>",
          "description": "The axis component to render with the chart",
          "defaultValue": "<ChartAxis />"
        },
        {
          "name": "bulletSize",
          "type": "number",
          "description": "Specifies the size of the bullet chart. For a horizontal chart, this adjusts bar height; although, it\ntechnically scales the underlying barWidth property.\n\nNote: Values should be >= 125, the default is 140",
          "defaultValue": "theme.chart.height"
        },
        {
          "name": "comparativeErrorMeasureComponent",
          "type": "React.ReactElement<any>",
          "description": "The comparative error measure component to render with the chart",
          "defaultValue": "<ChartBulletComparativeErrorMeasure />"
        },
        {
          "name": "comparativeErrorMeasureData",
          "type": "any[]",
          "description": "The data prop specifies the data to be plotted. Data should be in the form of an array\nof data points, or an array of arrays of data points for multiple datasets.\nEach data point may be any format you wish (depending on the `comparativeErrorMeasureDataY` accessor prop),\nbut by default, an object with y properties is expected.\n\n@example comparativeErrorMeasureData={[{ y: 50 }]}"
        },
        {
          "name": "comparativeErrorMeasureDataY",
          "type": "number | string | Function | string[]",
          "description": "The comparativeErrorMeasureDataY prop specifies how to access the Y value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "comparativeErrorMeasureLegendData",
          "type": "{\n  name?: string;\n  symbol?: {\n    fill?: string;\n    type?: string;\n  };\n}[]",
          "description": "Specify data via the data prop. ChartLegend expects data as an\narray of objects with name (required), symbol, and labels properties.\nThe data prop must be given as an array.\n\n@example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}"
        },
        {
          "name": "comparativeWarningMeasureComponent",
          "type": "React.ReactElement<any>",
          "description": "The comparative warning measure component to render with the chart",
          "defaultValue": "<ChartBulletComparativeWarningMeasure />"
        },
        {
          "name": "comparativeWarningMeasureData",
          "type": "any[]",
          "description": "The data prop specifies the data to be plotted. Data should be in the form of an array\nof data points, or an array of arrays of data points for multiple datasets.\nEach data point may be any format you wish (depending on the `comparativeErrorMeasureDataY` accessor prop),\nbut by default, an object with y properties is expected.\n\n@example comparativeWarningMeasureData={[{ y: 50 }]}"
        },
        {
          "name": "comparativeWarningMeasureDataY",
          "type": "number | string | Function | string[]",
          "description": "The comparativeWarningMeasureDataY prop specifies how to access the Y value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "comparativeWarningMeasureLegendData",
          "type": "{\n  name?: string;\n  symbol?: {\n    fill?: string;\n    type?: string;\n  };\n}[]",
          "description": "Specify data via the data prop. ChartLegend expects data as an\narray of objects with name (required), symbol, and labels properties.\nThe data prop must be given as an array.\n\n@example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}"
        },
        {
          "name": "comparativeZeroMeasureComponent",
          "type": "React.ReactElement<any>",
          "description": "The comparative zero measure component to render with the chart",
          "defaultValue": "<ChartBulletComparativeMeasure />"
        },
        {
          "name": "constrainToVisibleArea",
          "type": "boolean",
          "description": "The constrainToVisibleArea prop determines whether to coerce tooltips so that they fit within the visible area of\nthe chart. When this prop is set to true, tooltip pointers will still point to the correct data point, but the\ncenter of the tooltip will be shifted to fit within the overall width and height of the svg Victory renders.",
          "defaultValue": "false"
        },
        {
          "name": "domain",
          "type": "number[] | { x: number[], y: number[] }",
          "description": "The domain prop describes the range of values your chart will include. This prop can be\ngiven as a array of the minimum and maximum expected values for your chart,\nor as an object that specifies separate arrays for x and y.\nIf this prop is not provided, a domain will be calculated from data, or other\navailable information.\n\nNote: The x domain is expected to be `x: [0, 2]` in order to position all measures properly\n\n\n@example [low, high], { x: [low, high], y: [low, high] }\n\n{x: [0, 2], y: [0, 100]}",
          "defaultValue": "getBulletDomain({\n  comparativeErrorMeasureComponent,\n  comparativeErrorMeasureData,\n  comparativeWarningMeasureComponent,\n  comparativeWarningMeasureData,\n  maxDomain,\n  minDomain,\n  primaryDotMeasureComponent,\n  primaryDotMeasureData,\n  primarySegmentedMeasureComponent,\n  primarySegmentedMeasureData,\n  qualitativeRangeComponent,\n  qualitativeRangeData\n})"
        },
        {
          "name": "groupSubTitle",
          "type": "string",
          "description": "The subtitle to render for grouped bullets"
        },
        {
          "name": "groupTitle",
          "type": "string",
          "description": "The title to render for grouped bullets"
        },
        {
          "name": "groupTitleComponent",
          "type": "React.ReactElement<any>",
          "description": "The group title component to render for grouped bullets",
          "defaultValue": "<ChartBulletGroupTitle />"
        },
        {
          "name": "height",
          "type": "number",
          "description": "Specifies the height the svg viewBox of the chart container. This value should be given as a\nnumber of pixels.\n\nBecause Victory renders responsive containers, the width and height props do not determine the width and\nheight of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of\npixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set\nto the same width in order to maintain the aspect ratio.",
          "defaultValue": "horizontal ? theme.chart.height : theme.chart.width"
        },
        {
          "name": "horizontal",
          "type": "boolean",
          "description": "The horizontal prop determines whether data will be plotted horizontally. When this prop is set to true, the\nindependent variable will be plotted on the y axis and the dependent variable will be plotted on the x axis.",
          "defaultValue": "true"
        },
        {
          "name": "invert",
          "type": "boolean",
          "description": "Invert the color scales used to represent primary measures and qualitative ranges.",
          "defaultValue": "false"
        },
        {
          "name": "labels",
          "type": "string[] | number[] | ((data: any) => string | number | null)",
          "description": "The labels prop defines labels that will appear above each bar in your chart.\nThis prop should be given as an array of values or as a function of data.\nIf given as an array, the number of elements in the array should be equal to\nthe length of the data array. Labels may also be added directly to the data object\nlike data={[{y: 1, label: \"first\"}]}.\n\n@example [\"spring\", \"summer\", \"fall\", \"winter\"], (datum) => datum.title"
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
          "description": "The legend component to render with chart.",
          "defaultValue": "<ChartLegend />"
        },
        {
          "name": "legendItemsPerRow",
          "type": "number",
          "description": "The legendItemsPerRow prop determines how many items to render in each row\nof a horizontal legend, or in each column of a vertical legend. This\nprop should be given as an integer. When this prop is not given,\nlegend items will be rendered in a single row or column."
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
          "defaultValue": "'bottom'"
        },
        {
          "name": "maxDomain",
          "type": "number | { x?: number; y?: number }",
          "description": "The maxDomain prop defines a maximum domain value for a chart. This prop is useful in situations where the maximum\ndomain of a chart is static, while the minimum value depends on data or other variable information. If the domain\nprop is set in addition to maximumDomain, domain will be used.\n\nNote: The x value supplied to the maxDomain prop refers to the independent variable, and the y value refers to the\ndependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to\nthe y axis.\n\n@example\n\nmaxDomain={0}\nmaxDomain={{ y: 0 }}\n\nNote: The x domain is expected to be `x: 2` in order to position all measures properly"
        },
        {
          "name": "minDomain",
          "type": "number | { x?: number; y?: number }",
          "description": "The minDomain prop defines a minimum domain value for a chart. This prop is useful in situations where the minimum\ndomain of a chart is static, while the maximum value depends on data or other variable information. If the domain\nprop is set in addition to minimumDomain, domain will be used.\n\nNote: The x value supplied to the minDomain prop refers to the independent variable, and the y value refers to the\ndependent variable. This may cause confusion in horizontal charts, as the independent variable will corresponds to\nthe y axis.\n\n@example\n\nminDomain={0}\nminDomain={{ y: 0 }}\n\nNote: The x domain is expected to be `x: 0` in order to position all measures properly"
        },
        {
          "name": "padding",
          "type": "number | { top: number, bottom: number, left: number, right: number }",
          "description": "The padding props specifies the amount of padding in number of pixels between\nthe edge of the chart and any rendered child components. This prop can be given\nas a number or as an object with padding specified for top, bottom, left\nand right.\n\nNote: The underlying bullet chart is a different size than height and width. For a horizontal chart, left and right\npadding may need to be applied at (approx) 2 to 1 scale."
        },
        {
          "name": "primaryDotMeasureComponent",
          "type": "React.ReactElement<any>",
          "description": "The primary dot measure component to render with the chart",
          "defaultValue": "<ChartBulletPrimaryDotMeasure />"
        },
        {
          "name": "primaryDotMeasureData",
          "type": "any[]",
          "description": "The data prop specifies the data to be plotted. Data should be in the form of an array\nof data points, or an array of arrays of data points for multiple datasets.\nEach data point may be any format you wish (depending on the `comparativeErrorMeasureDataY` accessor prop),\nbut by default, an object with y properties is expected.\n\n@example primaryDotMeasureData={[{ y: 50 }]}"
        },
        {
          "name": "primaryDotMeasureDataY",
          "type": "number | string | Function | string[]",
          "description": "The primaryDotMeasureDataY prop specifies how to access the Y value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "primaryDotMeasureLegendData",
          "type": "{\n  name?: string;\n  symbol?: {\n    fill?: string;\n    type?: string;\n  };\n}[]",
          "description": "Specify data via the data prop. ChartLegend expects data as an\narray of objects with name (required), symbol, and labels properties.\nThe data prop must be given as an array.\n\n@example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}"
        },
        {
          "name": "primarySegmentedMeasureComponent",
          "type": "React.ReactElement<any>",
          "description": "The primary segmented measure component to render with the chart",
          "defaultValue": "<ChartBulletPrimarySegmentedMeasure />"
        },
        {
          "name": "primarySegmentedMeasureData",
          "type": "any[]",
          "description": "The data prop specifies the data to be plotted. Data should be in the form of an array\nof data points, or an array of arrays of data points for multiple datasets.\nEach data point may be any format you wish (depending on the `comparativeErrorMeasureDataY` accessor prop),\nbut by default, an object with y properties is expected.\n\n@example primarySegmentedMeasureData={[{ y: 50 }]}"
        },
        {
          "name": "primarySegmentedMeasureDataY",
          "type": "number | string | Function | string[]",
          "description": "The primarySegmentedMeasureDataY prop specifies how to access the Y value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "primarySegmentedMeasureLegendData",
          "type": "{\n  name?: string;\n  symbol?: {\n    fill?: string;\n    type?: string;\n  };\n}[]",
          "description": "Specify data via the data prop. ChartLegend expects data as an\narray of objects with name (required), symbol, and labels properties.\nThe data prop must be given as an array.\n\n@example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}"
        },
        {
          "name": "qualitativeRangeComponent",
          "type": "React.ReactElement<any>",
          "description": "The qualitative range component to render with the chart",
          "defaultValue": "<ChartBulletQualitativeRange />"
        },
        {
          "name": "qualitativeRangeData",
          "type": "any[]",
          "description": "The data prop specifies the data to be plotted. Data should be in the form of an array\nof data points, or an array of arrays of data points for multiple datasets.\nEach data point may be any format you wish (depending on the `comparativeErrorMeasureDataY` accessor prop),\nbut by default, an object with y properties is expected.\n\n@example qualitativeRangeData={[{ y: 50 }]}"
        },
        {
          "name": "qualitativeRangeDataY",
          "type": "number | string | Function | string[]",
          "description": "The qualitativeRangeDataY prop specifies how to access the Y value of each data point.\nIf given as a function, it will be run on each data point, and returned value will be used.\nIf given as an integer, it will be used as an array index for array-type data points.\nIf given as a string, it will be used as a property key for object-type data points.\nIf given as an array of strings, or a string containing dots or brackets,\nit will be used as a nested object property path (for details see Lodash docs for _.get).\nIf `null` or `undefined`, the data value will be used as is (identity function/pass-through).\n\n\n@example 0, 'y', 'y.value.nested.1.thing', 'y[2].also.nested', null, d => Math.sin(d)"
        },
        {
          "name": "qualitativeRangeDataY0",
          "type": "number | string | Function | string[]",
          "description": "Use qualitativeRangeDataY0 data accessor prop to determine how the component defines the baseline y0 data.\nThis prop is useful for defining custom baselines for components like ChartBar.\nThis prop may be given in a variety of formats.\n\n\n@example 'last_quarter_profit', () => 10, 1, 'employees.salary', [\"employees\", \"salary\"]"
        },
        {
          "name": "qualitativeRangeLegendData",
          "type": "{\n  name?: string;\n  symbol?: {\n    fill?: string;\n    type?: string;\n  };\n}[]",
          "description": "Specify data via the data prop. ChartLegend expects data as an\narray of objects with name (required), symbol, and labels properties.\nThe data prop must be given as an array.\n\n@example legendData={[{ name: `GBps capacity - 45%` }, { name: 'Unused' }]}"
        },
        {
          "name": "standalone",
          "type": "boolean",
          "description": "The standalone prop determines whether the component will render a standalone svg\nor a <g> tag that will be included in an external svg. Set standalone to false to\ncompose Chart with other components within an enclosing <svg> tag.",
          "defaultValue": "true"
        },
        {
          "name": "subTitle",
          "type": "string",
          "description": "The subtitle for the chart"
        },
        {
          "name": "theme",
          "type": "object",
          "description": "The theme prop specifies a theme to use for determining styles and layout properties for a component. Any styles or\nprops defined in theme may be overwritten by props specified on the component instance.",
          "defaultValue": "getBulletThemeWithLegendColorScale({\n  comparativeErrorMeasureData,\n  comparativeErrorMeasureLegendData,\n  comparativeWarningMeasureData,\n  comparativeWarningMeasureLegendData,\n  invert,\n  primaryDotMeasureData,\n  primaryDotMeasureLegendData,\n  primarySegmentedMeasureData,\n  primarySegmentedMeasureLegendData,\n  qualitativeRangeData,\n  qualitativeRangeLegendData,\n  themeColor\n})"
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
          "description": "The title for the chart"
        },
        {
          "name": "titleComponent",
          "type": "React.ReactElement<any>",
          "description": "The label component to render the chart title.",
          "defaultValue": "<ChartBulletTitle />"
        },
        {
          "name": "titlePosition",
          "type": "'left' | 'top-left'",
          "description": "The title position relation to the chart. Valid values are 'left', and 'top-left'\n\nNote: These properties are only valid for horizontal layouts"
        },
        {
          "name": "width",
          "type": "number",
          "description": "Specifies the width of the svg viewBox of the chart container. This value should be given as a\nnumber of pixels.\n\nBecause Victory renders responsive containers, the width and height props do not determine the width and\nheight of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of\npixels will depend on the size of the container the chart is rendered into. Typically, the parent container is set\nto the same width in order to maintain the aspect ratio.",
          "defaultValue": "horizontal ? theme.chart.width : theme.chart.height"
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
      "name": "ChartThreshold",
      "description": "",
      "props": [
        {
          "name": "animate",
          "type": "boolean | object",
          "description": "The animate prop specifies props for VictoryAnimation to use.\nThe animate prop should also be used to specify enter and exit\ntransition configurations with the `onExit` and `onEnter` namespaces respectively.\n\n\n@example\n{duration: 500, onExit: () => {}, onEnter: {duration: 500, before: () => ({y: 0})})}"
        },
        {
          "name": "categories",
          "type": "string[] | { x: string[], y: string[] }",
          "description": "The categories prop specifies how categorical data for a chart should be ordered.\nThis prop should be given as an array of string values, or an object with\nthese arrays of values specified for x and y. If this prop is not set,\ncategorical data will be plotted in the order it was given in the data array\n\n\n@example [\"dogs\", \"cats\", \"mice\"]"
        },
        {
          "name": "containerComponent",
          "type": "React.ReactElement<any>",
          "description": "The containerComponent prop takes an entire component which will be used to\ncreate a container element for standalone charts.\nThe new element created from the passed containerComponent wil be provided with\nthese props from ChartLine: height, width, children\n(the chart itself) and style. Props that are not provided by the\nchild chart component include title and desc, both of which\nare intended to add accessibility to Victory components. The more descriptive these props\nare, the more accessible your data will be for people using screen readers.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartLine will use the default ChartContainer component.\n\n@example <ChartContainer title=\"Chart of Dog Breeds\" desc=\"This chart shows...\" />"
        },
        {
          "name": "data",
          "type": "any[]",
          "description": "The data prop specifies the data to be plotted. Data should be in the form of an array\nof data points, or an array of arrays of data points for multiple datasets.\nEach data point may be any format you wish (depending on the `x` and `y` accessor props),\nbut by default, an object with x and y properties is expected.\n\n@example [{x: 1, y: 2}, {x: 2, y: 3}], [[1, 2], [2, 3]],\n[[{x: \"a\", y: 1}, {x: \"b\", y: 2}], [{x: \"a\", y: 2}, {x: \"b\", y: 3}]]"
        },
        {
          "name": "dataComponent",
          "type": "React.ReactElement<any>",
          "description": "The dataComponent prop takes an entire component which will be used to create an area.\nThe new element created from the passed dataComponent will be provided with the\nfollowing properties calculated by ChartLine: a scale, style, events, interpolation,\nand an array of modified data objects (including x, y, and calculated y0 and y1).\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartLine will use its default Line component."
        },
        {
          "name": "domain",
          "type": "number[] | { x: number[], y: number[] }",
          "description": "The domain prop describes the range of values your chart will cover. This prop can be\ngiven as a array of the minimum and maximum expected values for your bar chart,\nor as an object that specifies separate arrays for x and y.\nIf this prop is not provided, a domain will be calculated from data, or other\navailable information.\n\n\n@example [low, high], { x: [low, high], y: [low, high] }\n\n[-1, 1], {x: [0, 100], y: [0, 1]}"
        },
        {
          "name": "domainPadding",
          "type": "number | number[] | { x: number[], y: [number, number] }",
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
          "description": "The event prop take an array of event objects. Event objects are composed of\na target, an eventKey, and eventHandlers. Targets may be any valid style namespace\nfor a given component, so \"data\" and \"labels\" are all valid targets for ChartLine events.\nSince ChartLine only renders a single element, the eventKey property is not used.\nThe eventHandlers object should be given as an object whose keys are standard\nevent names (i.e. onClick) and whose values are event callbacks. The return value\nof an event handler is used to modify elemnts. The return value should be given\nas an object or an array of objects with optional target and eventKey keys,\nand a mutation key whose value is a function. The target and eventKey keys\nwill default to those corresponding to the element the event handler was attached to.\nThe mutation function will be called with the calculated props for the individual selected\nelement (i.e. a line), and the object returned from the mutation function\nwill override the props of the selected element via object assignment.\n\n\n@example\nevents={[\n  {\n    target: \"data\",\n    eventHandlers: {\n      onClick: () => {\n        return [\n           {\n             mutation: (props) => {\n               return {style: merge({}, props.style, {stroke: \"orange\"})};\n             }\n           }, {\n             target: \"labels\",\n             mutation: () => {\n               return {text: \"hey\"};\n             }\n           }\n         ];\n      }\n    }\n  }\n]}"
        },
        {
          "name": "externalEventMutations",
          "type": "object[]",
          "description": "ChartLine uses the standard externalEventMutations prop."
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
          "description": "The labelComponent prop takes in an entire label component which will be used\nto create a label for the area. The new element created from the passed labelComponent\nwill be supplied with the following properties: x, y, index, data, verticalAnchor,\ntextAnchor, angle, style, text, and events. any of these props may be overridden\nby passing in props to the supplied component, or modified or ignored within\nthe custom component itself. If labelComponent is omitted, a new ChartLabel\nwill be created with props described above. This labelComponent prop should be used to\nprovide a series label for ChartLine. If individual labels are required for each\ndata point, they should be created by composing ChartLine with VictoryScatter"
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
          "type": "[number, number] | { x: [number, number], y: [number, number] }",
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
          "type": "string | string[] | Function",
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
          "description": "The standalone prop determines whether the component will render a standalone svg\nor a <g> tag that will be included in an external svg. Set standalone to false to\ncompose ChartLine with other components within an enclosing <svg> tag."
        },
        {
          "name": "style",
          "type": "{ parent: object, data: object, labels: object }",
          "description": "The style prop specifies styles for your ChartLine. Any valid inline style properties\nwill be applied. Height, width, and padding should be specified via the height,\nwidth, and padding props, as they are used to calculate the alignment of\ncomponents within chart.\n\n\n@example {data: {fill: \"red\"}, labels: {fontSize: 12}}",
          "defaultValue": "{}"
        },
        {
          "name": "theme",
          "type": "object",
          "description": "The theme prop takes a style object with nested data, labels, and parent objects.\nYou can create this object yourself, or you can use a theme provided by\nWhen using ChartLine as a solo component, implement the theme directly on\nChartLine. If you are wrapping ChartLine in ChartChart or ChartGroup,\nplease call the theme on the outermost wrapper component instead.",
          "defaultValue": "getThresholdTheme(themeColor)"
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
          "description": "Use y0 data accessor prop to determine how the component defines the baseline y0 data.\nThis prop is useful for defining custom baselines for components like ChartLine.\nThis prop may be given in a variety of formats.\n\n\n@example 'last_quarter_profit', () => 10, 1, 'employees.salary', [\"employees\", \"salary\"]"
        }
      ]
    },
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
  "examples": [
    "Responsive bullet chart with wrapping legend",
    "Responsive threshold chart with wrapping legend",
    "Responsive stack chart with reducible axis tick labels"
  ]
};
pageData.liveContext = {
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartBullet,
  ChartGroup,
  ChartLegend,
  ChartStack,
  ChartThemeColor,
  ChartThreshold,
  ChartTooltip,
  ChartVoronoiContainer,
  getResizeObserver,
  chart_color_blue_300,
  chart_color_orange_300
};
pageData.examples = {
  'Responsive bullet chart with wrapping legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet, getResizeObserver } from '@patternfly/react-charts';\n\nclass BulletChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.containerRef = React.createRef();\n    this.observer = () => {};\n    this.state = {\n      width: 0\n    };\n    this.handleResize = () => {\n      if (this.containerRef.current && this.containerRef.current.clientWidth) {\n        this.setState({ width: this.containerRef.current.clientWidth });\n      }\n    };\n  }\n\n  componentDidMount() {\n    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);\n    this.handleResize();\n  }\n\n  componentWillUnmount() {\n    this.observer();\n  }\n\n  render() {\n    const { width } = this.state;\n    return (\n      <div ref={this.containerRef} style={{ height: '250px' }}>\n        <ChartBullet\n          ariaDesc=\"Storage capacity\"\n          ariaTitle=\"Bullet chart example\"\n          comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}\n          comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n          constrainToVisibleArea\n          height={250}\n          labels={({ datum }) => `${datum.name}: ${datum.y}`}\n          legendAllowWrap\n          legendPosition=\"bottom-left\"\n          maxDomain={{y: 100}}\n          padding={{\n            bottom: 50,\n            left: 50,\n            right: 50,\n            top: 100 // Adjusted to accommodate labels\n          }}\n          primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}\n          primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}\n          qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}\n          qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n          subTitle=\"Measure details\"\n          title=\"Text label\"\n          titlePosition=\"top-left\"\n          width={width}\n        />\n      </div>\n    );\n  }\n}","title":"Responsive bullet chart with wrapping legend","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to use a `}
        
        <code {...{"className":"ws-code"}}>
          {`ResizeObserver`}
        </code>
        {` to update the chart's width, while its height remains fixed. The `}
        
        <code {...{"className":"ws-code"}}>
          {`legendAllowWrap`}
        </code>
        {` prop is used to automatically wrap legend items.`}
      </p>
    </Example>,
  'Responsive threshold chart with wrapping legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Chart,\n  ChartArea,\n  ChartAxis,\n  ChartLegend,\n  ChartGroup,\n  ChartThreshold,\n  ChartThemeColor,\n  ChartVoronoiContainer,\n  getResizeObserver\n} from '@patternfly/react-charts';\nimport chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';\nimport chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';\n\nclass MultiColorChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.containerRef = React.createRef();\n    this.observer = () => {};\n    this.state = {\n      width: 0\n    };\n    this.handleResize = () => {\n      if (this.containerRef.current && this.containerRef.current.clientWidth) {\n        this.setState({ width: this.containerRef.current.clientWidth });\n      }\n    };\n  }\n\n  componentDidMount() {\n    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);\n    this.handleResize();\n  }\n\n  componentWillUnmount() {\n    this.observer();\n  }\n\n  render() {\n    const { width } = this.state;\n    const itemsPerRow = width > 650 ? 4 : 2;\n\n    return (\n      <div ref={this.containerRef}>\n        <div style={{ height: '250px' }}>\n          <Chart\n            ariaDesc=\"Average number of pets\"\n            ariaTitle=\"Area chart example\"\n            containerComponent={\n              <ChartVoronoiContainer\n                labels={({ datum }) => `${datum.name}: ${datum.y}`}\n                constrainToVisibleArea\n              />\n            }\n            legendPosition=\"bottom-left\"\n            legendComponent={\n              <ChartLegend\n                data={[\n                  { name: 'Cats' },\n                  { name: 'Birds' },\n                  {\n                    name: 'Cats Threshold',\n                    symbol: { fill: chart_color_blue_300.var, type: 'threshold' }\n                  },\n                  {\n                    name: 'Birds Threshold',\n                    symbol: { fill: chart_color_orange_300.var, type: 'threshold' }\n                  }\n                ]}\n                itemsPerRow={itemsPerRow}\n              />\n            }\n            height={250}\n            padding={{\n              bottom: 100, // Adjusted to accomodate legend\n              left: 50,\n              right: 50,\n              top: 50\n            }}\n            maxDomain={{ y: 9 }}\n            themeColor={ChartThemeColor.multiUnordered}\n            width={width}\n          >\n            <ChartAxis />\n            <ChartAxis dependentAxis showGrid />\n            <ChartGroup>\n              <ChartArea\n                data={[\n                  { name: 'Cats', x: 1, y: 3 },\n                  { name: 'Cats', x: 2, y: 4 },\n                  { name: 'Cats', x: 3, y: 8 },\n                  { name: 'Cats', x: 4, y: 6 }\n                ]}\n                interpolation=\"monotoneX\"\n              />\n              <ChartArea\n                data={[\n                  { name: 'Birds', x: 1, y: 2 },\n                  { name: 'Birds', x: 2, y: 3 },\n                  { name: 'Birds', x: 3, y: 4 },\n                  { name: 'Birds', x: 4, y: 5 },\n                  { name: 'Birds', x: 5, y: 6 }\n                ]}\n                interpolation=\"monotoneX\"\n              />\n            </ChartGroup>\n            <ChartThreshold\n              data={[\n                { name: 'Cats Threshold', x: 0, y: 4 },\n                { name: 'Cats Threshold', x: 3, y: 4 },\n                { name: 'Cats Threshold', x: 3, y: 6 },\n                { name: 'Cats Threshold', x: 5, y: 6 }\n              ]}\n              style={{\n                data: {\n                  stroke: chart_color_blue_300.var\n                }\n              }}\n            />\n            <ChartThreshold\n              data={[\n                { name: 'Birds Threshold', x: 0, y: 2 },\n                { name: 'Birds Threshold', x: 2, y: 2 },\n                { name: 'Birds Threshold', x: 2, y: 3 },\n                { name: 'Birds Threshold', x: 5, y: 3 }\n              ]}\n              style={{\n                data: {\n                  stroke: chart_color_orange_300.var\n                }\n              }}\n            />\n          </Chart>\n        </div>\n      </div>\n    );\n  }\n}","title":"Responsive threshold chart with wrapping legend","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to use a `}
        
        <code {...{"className":"ws-code"}}>
          {`ResizeObserver`}
        </code>
        {` to update the chart's width, while its height remains fixed. In this example, `}
        
        <code {...{"className":"ws-code"}}>
          {`itemsPerRow`}
        </code>
        {` is used to wrap legend items manually.`}
      </p>
    </Example>,
  'Responsive stack chart with reducible axis tick labels': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartBar, ChartStack, ChartTooltip, getResizeObserver } from '@patternfly/react-charts';\n\nclass MonthlyResponsiveStack extends React.Component {\n  constructor(props) {\n    super(props);\n    this.containerRef = React.createRef();\n    this.observer = () => {};\n    this.state = {\n      width: 0\n    };\n\n    this.handleResize = () => {\n      if(this.containerRef.current && this.containerRef.current.clientWidth){\n        this.setState({ width: this.containerRef.current.clientWidth });\n      }\n    };\n\n    this.bars = [];\n    for(let i = 1; i < 32; i++){\n      this.bars.push({ x: `Aug. ${i}`, y: Math.floor(Math.random() * 6) + 1 });\n    };\n\n    this.renderSocketBars = () => {\n      let socketBars = this.bars.map((tick, index) => {\n        return {\n          x: tick.x,\n          y: tick.y,\n          name: 'Sockets',\n          label: `${tick.x} Sockets: ${tick.y}`\n        };\n      });\n      return <ChartBar data={socketBars} labelComponent={<ChartTooltip constrainToVisibleArea />} />;\n    }\n\n    this.renderCoresBars = () => {\n      let coresBars = this.bars.map((tick, index) => {\n        return {\n          x: tick.x,\n          y: tick.y,\n          name: 'Cores',\n          label: `${tick.x} Cores: ${tick.y}`\n        };\n      });\n      return <ChartBar data={coresBars} labelComponent={<ChartTooltip constrainToVisibleArea />} />;\n    }\n\n    this.renderNodesBars = () => {\n      let nodesBars = this.bars.map((tick, index) => {\n        return {\n          key: index,\n          x: tick.x,\n          y: tick.y,\n          name: 'Nodes',\n          label: `${tick.x} Nodes: ${tick.y}`\n        };\n      });\n      return <ChartBar data={nodesBars} labelComponent={<ChartTooltip constrainToVisibleArea />} />;\n    }\n\n    this.getTickValues = (offset = 2) => {\n      let tickValues = [];\n      for(let i = 1; i < 32; i++){\n        if (i % offset == 0){\n          tickValues.push(`Aug. ${i}`);\n        }\n      }\n      return tickValues;\n    }\n  }\n\n  componentDidMount() {\n    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);\n    this.handleResize();\n  }\n\n  componentWillUnmount() {\n    this.observer();\n  }\n\n  render(){\n    const { width } = this.state;\n    return (\n      <div ref={this.containerRef}>\n        <div style={{ height: '225px' }}>\n          <Chart\n            ariaDesc=\"Stack Chart with monthly metric data\"\n            ariaTitle=\"Monthly Stack Chart\"\n            domainPadding={{ x: [30, 25] }}\n            legendData={[{ name: 'Sockets' }, { name: 'Cores' }, { name: 'Nodes' }]}\n            legendPosition=\"bottom\"\n            height={225}\n            padding={{\n              bottom: 75, // Adjusted to accommodate legend\n              left: 50,\n              right: 50, \n              top: 50\n            }}\n            width={width}\n          >\n            <ChartAxis tickValues = {this.getTickValues()} fixLabelOverlap />\n            <ChartAxis dependentAxis showGrid />\n            <ChartStack domainPadding={{x: [10, 2]}}>\n              { this.renderSocketBars() }\n              { this.renderCoresBars() }\n              { this.renderNodesBars() }\n            </ChartStack>\n          </Chart>\n        </div>\n      </div>\n    )\n  }\n}","title":"Responsive stack chart with reducible axis tick labels","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to use a `}
        
        <code {...{"className":"ws-code"}}>
          {`ResizeObserver`}
        </code>
        {` to update the chart's width, while its height remains fixed. In this example, `}
        
        <code {...{"className":"ws-code"}}>
          {`fixLabelOverlap`}
        </code>
        {` is used to dynamically adjust the number of axis tick labels.`}
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
    <p {...{"className":"ws-p"}}>
      {`Charts scale within the parent container by default, so the `}
      <code {...{"className":"ws-code"}}>
        {`width`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`height`}
      </code>
      {` props do not actually determine the
width and height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number
of pixels will depend on the size of the container the chart is rendered into. In order to maintain the aspect ratio,
the parent container may be set to the same height and/or width.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Responsive bullet chart with wrapping legend"])}
    {React.createElement(pageData.examples["Responsive threshold chart with wrapping legend"])}
    {React.createElement(pageData.examples["Responsive stack chart with reducible axis tick labels"])}
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
          {`ChartBullet`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-bar"}}>
          {`VictoryBar`}
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
          {`ChartLine`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-line"}}>
          {`Victoryline`}
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
          {`ChartTooltip`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-tooltip"}}>
          {`VictoryTooltip`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`For `}
        <code {...{"className":"ws-code"}}>
          {`ChartThreshold`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-line"}}>
          {`VictoryLine`}
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
Component.displayName = 'ChartsResizeObserverReactDocs';
Component.pageData = pageData;

export default Component;
