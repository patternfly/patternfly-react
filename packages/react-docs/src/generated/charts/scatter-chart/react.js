import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import {
  Chart,
  ChartArea,
  ChartAxis,
  ChartGroup,
  ChartLine,
  ChartScatter,
  ChartThemeColor,
  ChartVoronoiContainer,
  getResizeObserver
} from '@patternfly/react-charts';
const pageData = {
  "id": "Scatter chart",
  "section": "charts",
  "source": "react",
  "slug": "/charts/scatter-chart/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-charts/src/components/ChartScatter/examples/ChartScatter.md",
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
      "name": "ChartLine",
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
          "description": "The containerComponent prop takes an entire component which will be used to\ncreate a container element for standalone charts.\nThe new element created from the passed containerComponent wil be provided with\nthese props from ChartLine: height, width, children\n(the chart itself) and style. Props that are not provided by the\nchild chart component include title and desc, both of which\nare intended to add accessibility to Victory components. The more descriptive these props\nare, the more accessible your data will be for people using screen readers.\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartLine will use the default ChartContainer component.\n\n@example <ChartContainer title=\"Chart of Dog Breeds\" desc=\"This chart shows...\" />",
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
          "description": "The dataComponent prop takes an entire component which will be used to create an area.\nThe new element created from the passed dataComponent will be provided with the\nfollowing properties calculated by ChartLine: a scale, style, events, interpolation,\nand an array of modified data objects (including x, y, and calculated y0 and y1).\nAny of these props may be overridden by passing in props to the supplied component,\nor modified or ignored within the custom component itself. If a dataComponent is\nnot provided, ChartLine will use its default Line component."
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
          "description": "The style prop specifies styles for your ChartLine. Any valid inline style properties\nwill be applied. Height, width, and padding should be specified via the height,\nwidth, and padding props, as they are used to calculate the alignment of\ncomponents within chart.\n\n\n@example {data: {fill: \"red\"}, labels: {fontSize: 12}}"
        },
        {
          "name": "theme",
          "type": "object",
          "description": "The theme prop takes a style object with nested data, labels, and parent objects.\nYou can create this object yourself, or you can use a theme provided by\nWhen using ChartLine as a solo component, implement the theme directly on\nChartLine. If you are wrapping ChartLine in ChartChart or ChartGroup,\nplease call the theme on the outermost wrapper component instead.",
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
          "description": "Use y0 data accessor prop to determine how the component defines the baseline y0 data.\nThis prop is useful for defining custom baselines for components like ChartLine.\nThis prop may be given in a variety of formats.\n\n\n@example 'last_quarter_profit', () => 10, 1, 'employees.salary', [\"employees\", \"salary\"]"
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
    }
  ],
  "examples": [
    "Area chart",
    "Line chart"
  ]
};
pageData.liveContext = {
  Chart,
  ChartArea,
  ChartAxis,
  ChartGroup,
  ChartLine,
  ChartScatter,
  ChartThemeColor,
  ChartVoronoiContainer,
  getResizeObserver
};
pageData.examples = {
  'Area chart': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartArea, ChartAxis, ChartGroup, ChartScatter, ChartThemeColor, ChartVoronoiContainer, getResizeObserver } from '@patternfly/react-charts';\n// import '@patternfly/patternfly/patternfly-charts.css'; // For mixed blend mode\n\nclass ScatterAreaChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.containerRef = React.createRef();\n    this.observer = () => {};\n    this.state = {\n      width: 0\n    };\n    this.handleResize = () => {\n      if (this.containerRef.current && this.containerRef.current.clientWidth) {\n        this.setState({ width: this.containerRef.current.clientWidth });\n      }\n    };\n\n    this.series = [\n    {\n      datapoints: [\n        { name: 'Cats', x: '2015', y: 3 },\n        { name: 'Cats', x: '2016', y: 4 },\n        { name: 'Cats', x: '2017', y: 8 },\n        { name: 'Cats', x: '2018', y: 6 }\n      ],\n      legendItem: { name: 'Cats' }\n    },\n    {\n      datapoints: [\n        { name: 'Dogs', x: '2015', y: 2 },\n        { name: 'Dogs', x: '2016', y: 3 },\n        { name: 'Dogs', x: '2017', y: 4 },\n        { name: 'Dogs', x: '2018', y: 5 },\n        { name: 'Dogs', x: '2019', y: 6 }\n      ],\n      legendItem: { name: 'Dogs' }\n    },\n    {\n      datapoints: [\n        { name: 'Birds', x: '2015', y: 1 },\n        { name: 'Birds', x: '2016', y: 2 },\n        { name: 'Birds', x: '2017', y: 3 },\n        { name: 'Birds', x: '2018', y: 2 },\n        { name: 'Birds', x: '2019', y: 4 }\n      ],\n      legendItem: { name: 'Birds' }\n    }];\n  }\n\n  componentDidMount() {\n    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);\n    this.handleResize();\n  }\n\n  componentWillUnmount() {\n    this.observer();\n  }\n\n  render() {\n    const { width } = this.state;\n\n    return (\n      <div ref={this.containerRef}>\n        <div style={{ height: '250px' }}>\n          <Chart\n            ariaDesc=\"Average number of pets\"\n            ariaTitle=\"Area chart example\"\n            containerComponent={\n              <ChartVoronoiContainer \n                labels={({ datum }) => datum.childName.includes('area-') ? `${datum.name}: ${datum.y}` : null} \n                constrainToVisibleArea \n              />\n            }\n            height={225}\n            legendData={this.series.map(s => s.legendItem)}\n            legendPosition=\"bottom-left\"\n            padding={{\n              bottom: 75, // Adjusted to accommodate legend\n              left: 50,\n              right: 50,\n              top: 50,\n            }}\n            maxDomain={{y: 9}}\n            themeColor={ChartThemeColor.multiUnordered}\n            width={width}\n          >\n            <ChartAxis />\n            <ChartAxis dependentAxis showGrid />\n            <ChartGroup>\n              {this.series.map((s, idx) => {\n                return (\n                  <ChartScatter data={s.datapoints} key={'scatter-' + idx} name={'scatter-' + idx} />\n                );\n              })}\n            </ChartGroup>\n            <ChartGroup>\n              {this.series.map((s, idx) => {\n                return (\n                  <ChartArea \n                    interpolation=\"monotoneX\"\n                    key={'area-' + idx} name={'area-' + idx} data={s.datapoints} \n                  />\n                );\n              })}\n            </ChartGroup>\n          </Chart>\n        </div>\n      </div>\n    );\n  }\n}","title":"Area chart","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to add interactive data points to an area chart.`}
      </p>
    </Example>,
  'Line chart': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chart, ChartAxis, ChartGroup, ChartLine, ChartScatter, ChartThemeColor, ChartVoronoiContainer, getResizeObserver } from '@patternfly/react-charts';\n\nclass ScatterLineChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.containerRef = React.createRef();\n    this.observer = () => {};\n    this.state = {\n      width: 0\n    };\n    this.handleResize = () => {\n      if (this.containerRef.current && this.containerRef.current.clientWidth) {\n        this.setState({ width: this.containerRef.current.clientWidth });\n      }\n    };\n\n    this.series = [\n    {\n      datapoints: [\n        { name: 'Cats', x: '2015', y: 1 },\n        { name: 'Cats', x: '2016', y: 2 },\n        { name: 'Cats', x: '2017', y: 5 },\n        { name: 'Cats', x: '2018', y: 3 }\n      ],\n      legendItem: { name: 'Cats' }\n    },\n    {\n      datapoints: [\n        { name: 'Dogs', x: '2015', y: 2 },\n        { name: 'Dogs', x: '2016', y: 1 },\n        { name: 'Dogs', x: '2017', y: 7 },\n        { name: 'Dogs', x: '2018', y: 4 }\n      ],\n      legendItem: { name: 'Dogs' },\n      style: {\n        data: {\n          strokeDasharray: '3,3'\n        }\n      }\n    },\n    {\n      datapoints: [\n        { name: 'Birds', x: '2015', y: 3 },\n        { name: 'Birds', x: '2016', y: 4 },\n        { name: 'Birds', x: '2017', y: 9 },\n        { name: 'Birds', x: '2018', y: 5 }\n      ],\n      legendItem: { name: 'Birds' }\n    },\n    {\n      datapoints: [\n        { name: 'Mice', x: '2015', y: 3 },\n        { name: 'Mice', x: '2016', y: 3 },\n        { name: 'Mice', x: '2017', y: 8 },\n        { name: 'Mice', x: '2018', y: 7 }\n      ],\n      legendItem: { name: 'Birds' }\n    }];\n  }\n\n  componentDidMount() {\n    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);\n    this.handleResize();\n  }\n\n  componentWillUnmount() {\n    this.observer();\n  }\n\n  render() {\n    const { width } = this.state;\n\n    return (\n      <div ref={this.containerRef}>\n        <div style={{ height: '275px' }}>\n          <Chart\n            ariaDesc=\"Average number of pets\"\n            ariaTitle=\"Line chart example\"\n            containerComponent={\n              <ChartVoronoiContainer \n                labels={({ datum }) => datum.childName.includes('line-') ? `${datum.name}: ${datum.y}` : null}  \n                constrainToVisibleArea\n              />\n            }\n            legendData={this.series.map(s => s.legendItem)}\n            legendPosition=\"bottom-left\"\n            height={275}\n            maxDomain={{y: 10}}\n            minDomain={{y: 0}}\n            padding={{\n              bottom: 75, // Adjusted to accommodate legend\n              left: 50,\n              right: 50,\n              top: 50\n            }}\n            themeColor={ChartThemeColor.orange}\n            width={width}\n          >\n            <ChartAxis tickValues={[2, 3, 4]} />\n            <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />\n            <ChartGroup>\n              {this.series.map((s, idx) => {\n                return (\n                    <ChartScatter\n                      data={s.datapoints}\n                      key={'scatter-' + idx}\n                      name={'scatter-' + idx}\n                    />\n                );\n              })}\n            </ChartGroup>\n            <ChartGroup>\n              {this.series.map((s, idx) => {\n                return (\n                    <ChartLine\n                      key={'line-' + idx}\n                      name={'line-' + idx}\n                      data={s.datapoints}\n                    />\n                );\n              })}\n            </ChartGroup>\n          </Chart>\n        </div>\n      </div>\n    );\n  }\n}","title":"Line chart","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates how to add interactive data points to a line chart.`}
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
    {React.createElement(pageData.examples["Area chart"])}
    {React.createElement(pageData.examples["Line chart"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`For single data points or zero values, you may want to set the `}
        <code {...{"className":"ws-code"}}>
          {`domain`}
        </code>
        {` prop. See Victory's `}
                <a href="https://formidable.com/open-source/victory/docs/faq/#my-axis-labels-are-showing-very-small-numbers-how-do-i-fix-this" target="_blank">{`FAQ`}</a>
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
          {`ChartLine`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-line"}}>
          {`VictoryLine`}
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
    </ul>
  </React.Fragment>
);
Component.displayName = 'ChartsScatterChartReactDocs';
Component.pageData = pageData;

export default Component;
