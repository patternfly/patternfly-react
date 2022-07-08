import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartStack,
  ChartLegendTooltip,
  ChartThemeColor,
  ChartTooltip,
  ChartVoronoiContainer,
  createContainer,
  getResizeObserver
} from '@patternfly/react-charts';
const pageData = {
  "id": "Stack chart",
  "section": "charts",
  "source": "react",
  "slug": "/charts/stack-chart/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-charts/src/components/ChartStack/examples/ChartStack.md",
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
    "Basic with right aligned legend",
    "Horizontal with bottom aligned legend",
    "Multi-color (ordered) horizontal with bottom aligned legend",
    "Monthly data with responsive container",
    "Multi-color (unordered) responsive container"
  ]
};
pageData.liveContext = {
  Chart,
  ChartArea,
  ChartAxis,
  ChartBar,
  ChartStack,
  ChartLegendTooltip,
  ChartThemeColor,
  ChartTooltip,
  ChartVoronoiContainer,
  createContainer,
  getResizeObserver
};
pageData.examples = {
  'Basic with right aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartBar, ChartStack, ChartVoronoiContainer } from '@patternfly/react-charts';\n\nconst BasicWithRightAlignedLegend = () => (\n  <div style={{ height: '250px', width: '600px' }}>\n    <Chart\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Stack chart example\"\n      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}\n      domainPadding={{ x: [30, 25] }}\n      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}\n      legendOrientation=\"vertical\"\n      legendPosition=\"right\"\n      height={250}\n      padding={{\n        bottom: 50,\n        left: 50,\n        right: 200, // Adjusted to accommodate legend\n        top: 50\n      }}\n      width={600}\n    >\n      <ChartAxis />\n      <ChartAxis dependentAxis showGrid />\n      <ChartStack>\n        <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />\n        <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />\n        <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />\n        <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />\n      </ChartStack>\n    </Chart>\n  </div>\n)","title":"Basic with right aligned legend","lang":"js"}}>
      
    </Example>,
  'Horizontal with bottom aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartBar, ChartStack, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';\n\nconst HorizontalWithBottomAlignedLegend = () => (\n  <div style={{ height: '275px', width: '450px' }}>\n    <Chart\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Stack chart example\"\n      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}\n      domainPadding={{ x: [30, 25] }}\n      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}\n      legendPosition=\"bottom\"\n      height={275}\n      padding={{\n        bottom: 75, // Adjusted to accommodate legend\n        left: 50,\n        right: 50, \n        top: 50\n      }}\n      themeColor={ChartThemeColor.gold}\n      width={450}\n    >\n      <ChartAxis />\n      <ChartAxis dependentAxis showGrid />\n      <ChartStack>\n        <ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]} />\n        <ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]} />\n        <ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]} />\n        <ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]} />\n      </ChartStack>\n    </Chart>\n  </div>\n)","title":"Horizontal with bottom aligned legend","lang":"js"}}>
      
    </Example>,
  'Multi-color (ordered) horizontal with bottom aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartBar, ChartAxis, ChartStack, ChartThemeColor, ChartTooltip } from '@patternfly/react-charts';\n\nconst MulticolororderedHorizontalWithBottomAlignedLegend = () => (\n  <div style={{ height: '275px', width: '450px' }}>\n    <Chart\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Stack chart example\"\n      domainPadding={{ x: [30, 25] }}\n      legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}\n      legendPosition=\"bottom-left\"\n      height={275}\n      padding={{\n        bottom: 75, // Adjusted to accommodate legend\n        left: 50,\n        right: 50, \n        top: 50\n      }}\n      themeColor={ChartThemeColor.multiOrdered}\n      width={450}\n    >\n      <ChartAxis />\n      <ChartAxis dependentAxis showGrid />\n      <ChartStack horizontal>\n        <ChartBar \n          data={[\n            { name: 'Cats', x: '2015', y: 1, label: 'Cats: 1' }, \n            { name: 'Cats', x: '2016', y: 2, label: 'Cats: 2' }, \n            { name: 'Cats', x: '2017', y: 5, label: 'Cats: 5' }, \n            { name: 'Cats', x: '2018', y: 3, label: 'Cats: 3' }\n          ]} \n          labelComponent={<ChartTooltip constrainToVisibleArea />}\n        />\n        <ChartBar \n          data={[\n            { name: 'Dogs', x: '2015', y: 2, label: 'Dogs: 2' }, \n            { name: 'Dogs', x: '2016', y: 1, label: 'Dogs: 1' }, \n            { name: 'Dogs', x: '2017', y: 7, label: 'Dogs: 7' }, \n            { name: 'Dogs', x: '2018', y: 4, label: 'Dogs: 4' }\n          ]}\n          labelComponent={<ChartTooltip constrainToVisibleArea />}\n        />\n        <ChartBar \n          data={[\n            { name: 'Birds', x: '2015', y: 4, label: 'Birds: 4' }, \n            { name: 'Birds', x: '2016', y: 4, label: 'Birds: 4' }, \n            { name: 'Birds', x: '2017', y: 9, label: 'Birds: 9' }, \n            { name: 'Birds', x: '2018', y: 7, label: 'Birds: 7' }\n          ]}\n          labelComponent={<ChartTooltip constrainToVisibleArea />}\n        />\n        <ChartBar \n          data={[\n            { name: 'Mice', x: '2015', y: 3, label: 'Mice: 3' }, \n            { name: 'Mice', x: '2016', y: 3, label: 'Mice: 3' }, \n            { name: 'Mice', x: '2017', y: 8, label: 'Mice: 8' }, \n            { name: 'Mice', x: '2018', y: 5, label: 'Mice: 5' }\n          ]}\n          labelComponent={<ChartTooltip constrainToVisibleArea />}\n        />\n      </ChartStack>\n    </Chart>\n  </div>\n)","title":"Multi-color (ordered) horizontal with bottom aligned legend","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates an alternate way of applying tooltips using data labels.`}
      </p>
    </Example>,
  'Monthly data with responsive container': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartBar, ChartStack, ChartTooltip, getResizeObserver } from '@patternfly/react-charts';\n\nclass MonthlyResponsiveStack extends React.Component {\n  constructor(props) {\n    super(props);\n    this.containerRef = React.createRef();\n    this.observer = () => {};\n    this.state = {\n      width: 0\n    };\n\n    this.handleResize = () => {\n      if(this.containerRef.current && this.containerRef.current.clientWidth){\n        this.setState({ width: this.containerRef.current.clientWidth });\n      }\n    };\n\n    this.bars = [];\n    for(let i = 1; i < 32; i++){\n      this.bars.push({ x: `Aug. ${i}`, y: Math.floor(Math.random() * 6) + 1 });\n    };\n\n    this.renderSocketBars = () => {\n      let socketBars = this.bars.map((tick, index) => {\n        return {\n          x: tick.x,\n          y: tick.y,\n          name: 'Sockets',\n          label: `${tick.x} Sockets: ${tick.y}`\n        };\n      });\n      return <ChartBar data={socketBars} labelComponent={<ChartTooltip constrainToVisibleArea />} />;\n    }\n\n    this.renderCoresBars = () => {\n      let coresBars = this.bars.map((tick, index) => {\n        return {\n          x: tick.x,\n          y: tick.y,\n          name: 'Cores',\n          label: `${tick.x} Cores: ${tick.y}`\n        };\n      });\n      return <ChartBar data={coresBars} labelComponent={<ChartTooltip constrainToVisibleArea />} />;\n    }\n\n    this.renderNodesBars = () => {\n      let nodesBars = this.bars.map((tick, index) => {\n        return {\n          key: index,\n          x: tick.x,\n          y: tick.y,\n          name: 'Nodes',\n          label: `${tick.x} Nodes: ${tick.y}`\n        };\n      });\n      return <ChartBar data={nodesBars} labelComponent={<ChartTooltip constrainToVisibleArea />} />;\n    }\n\n    this.getTickValues = (offset = 2) => {\n      let tickValues = [];\n      for(let i = 1; i < 32; i++){\n        if (i % offset == 0){\n          tickValues.push(`Aug. ${i}`);\n        }\n      }\n      return tickValues;\n    }\n  }\n\n  componentDidMount() {\n    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);\n    this.handleResize();\n  }\n\n  componentWillUnmount() {\n    this.observer();\n  }\n\n  render(){\n    const { width } = this.state;\n    return (\n      <div ref={this.containerRef}>\n        <div style={{ height: '225px' }}>\n          <Chart\n            ariaDesc=\"Stack Chart with monthly metric data\"\n            ariaTitle=\"Monthly Stack Chart\"\n            domainPadding={{ x: [30, 25] }}\n            legendData={[{ name: 'Sockets' }, { name: 'Cores' }, { name: 'Nodes' }]}\n            legendPosition=\"bottom\"\n            height={225}\n            padding={{\n              bottom: 75, // Adjusted to accommodate legend\n              left: 50,\n              right: 50, \n              top: 50\n            }}\n            width={width}\n          >\n            <ChartAxis tickValues = {this.getTickValues()} fixLabelOverlap />\n            <ChartAxis dependentAxis showGrid />\n            <ChartStack domainPadding={{x: [10, 2]}}>\n              { this.renderSocketBars() }\n              { this.renderCoresBars() }\n              { this.renderNodesBars() }\n            </ChartStack>\n          </Chart>\n        </div>\n      </div>\n    )\n  }\n}","title":"Monthly data with responsive container","lang":"js"}}>
      
    </Example>,
  'Multi-color (unordered) responsive container': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartArea, ChartAxis, ChartStack, ChartLegendTooltip, ChartThemeColor, ChartVoronoiContainer, createContainer, getResizeObserver } from '@patternfly/react-charts';\n\nclass MultiColorChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.containerRef = React.createRef();\n    this.observer = () => {};\n    this.state = {\n      width: 0\n    };\n    this.handleResize = () => {\n      if(this.containerRef.current && this.containerRef.current.clientWidth){\n        this.setState({ width: this.containerRef.current.clientWidth });\n      }\n    };\n  }\n\n  componentDidMount() {\n    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);\n    this.handleResize();\n  }\n\n  componentWillUnmount() {\n    this.observer();\n  }\n\n  render() {\n    const { width } = this.state;\n    \n    // Note: Container order is important\n    const CursorVoronoiContainer = createContainer(\"voronoi\", \"cursor\");\n    const legendData = [{ childName: 'cats', name: 'Cats' }, { childName: 'dogs', name: 'Dogs' }, { childName: 'birds', name: 'Birds' }];\n    \n    return (\n      <div ref={this.containerRef}>\n        <div style={{ height: '225px' }}>\n          <Chart\n            ariaDesc=\"Average number of pets\"\n            ariaTitle=\"Area chart example\"\n            containerComponent={\n              <CursorVoronoiContainer\n                cursorDimension=\"x\"\n                labels={({ datum }) => `${datum.y !== null ? datum.y : 'no data'}`}\n                labelComponent={<ChartLegendTooltip legendData={legendData} title={(datum) => datum.x}/>}\n                mouseFollowTooltips\n                voronoiDimension=\"x\"\n                voronoiPadding={50}\n              />\n            }\n            legendData={legendData}\n            legendPosition=\"bottom-left\"\n            height={225}\n            padding={{\n              bottom: 75, // Adjusted to accomodate legend\n              left: 50,\n              right: 50,\n              top: 50,\n            }}\n            maxDomain={{y: 30}}\n            themeColor={ChartThemeColor.multiUnordered}\n            width={width}\n          >\n            <ChartAxis />\n            <ChartAxis dependentAxis showGrid />\n            <ChartStack>\n              <ChartArea\n                data={[\n                  { x: 'Sunday', y: 6 },\n                  { x: 'Monday', y: 2 },\n                  { x: 'Tuesday', y: 8 },\n                  { x: 'Wednesday', y: 15 },\n                  { x: 'Thursday', y: 6 },\n                  { x: 'Friday', y: 2 },\n                  { x: 'Saturday', y: 0 }\n                ]}\n                interpolation=\"monotoneX\"\n                name=\"cats\"\n              />\n             <ChartArea\n               data={[\n                  { x: 'Sunday', y: 4 },\n                  { x: 'Monday', y: 5 },\n                  { x: 'Tuesday', y: 7 },\n                  { x: 'Wednesday', y: 6 },\n                  { x: 'Thursday', y: 10 },\n                  { x: 'Friday', y: 3 },\n                  { x: 'Saturday', y: 5 }\n                ]}\n                interpolation=\"monotoneX\"\n                name=\"dogs\"\n              />\n              <ChartArea\n                data={[\n                  { x: 'Sunday', y: 8 },\n                  { x: 'Monday', y: 18 },\n                  { x: 'Tuesday', y: 14 },\n                  { x: 'Wednesday', y: 8 },\n                  { x: 'Thursday', y: 6 },\n                  { x: 'Friday', y: 8 },\n                  { x: 'Saturday', y: 12 }\n                ]}\n                interpolation=\"monotoneX\"\n                name=\"birds\"\n              />\n            </ChartStack>\n          </Chart>\n        </div>\n      </div>\n    );\n  }\n}","title":"Multi-color (unordered) responsive container","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates monthly data with a bottom aligned legend and responsiveness for mobile.`}
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
      {`Learn to build a stack chart using a Katacoda tutorial starting with a simple chart, adding multiple datasets, tooltips, axis labels, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"https://katacoda.com/patternfly/courses/react-charts/stack-chart"}}>
        {`Start course`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic with right aligned legend"])}
    {React.createElement(pageData.examples["Horizontal with bottom aligned legend"])}
    {React.createElement(pageData.examples["Multi-color (ordered) horizontal with bottom aligned legend"])}
    {React.createElement(pageData.examples["Monthly data with responsive container"])}
    {React.createElement(pageData.examples["Multi-color (unordered) responsive container"])}
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
        {`For single data points or zero values, you may want to set the `}
        <code {...{"className":"ws-code"}}>
          {`domain`}
        </code>
        {` prop`}
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
      <li {...{"className":"ws-li"}}>
        {`Themes are inherited, so a default theme may override `}
        <code {...{"className":"ws-code"}}>
          {`themeColor`}
        </code>
        {` for a child component`}
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
    </ul>
  </React.Fragment>
);
Component.displayName = 'ChartsStackChartReactDocs';
Component.pageData = pageData;

export default Component;
