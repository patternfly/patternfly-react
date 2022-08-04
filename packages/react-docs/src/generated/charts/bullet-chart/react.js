import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { ChartAxis, ChartBullet, ChartContainer, ChartThemeColor, getResizeObserver } from '@patternfly/react-charts';
const pageData = {
  "id": "Bullet chart",
  "section": "charts",
  "source": "react",
  "slug": "/charts/bullet-chart/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-charts/src/components/ChartBullet/examples/ChartBullet.md",
  "propComponents": [
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
      "name": "ChartContainer",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactElement | React.ReactElement[]",
          "description": "The children prop specifies the child or children that will be rendered within the container. It will be set by\nwhatever Victory component is rendering the container."
        },
        {
          "name": "className",
          "type": "string",
          "description": "The className prop specifies a className that will be applied to the outer-most div rendered by ChartContainer"
        },
        {
          "name": "containerId",
          "type": "number | string",
          "description": "The containerId prop may be used to set a deterministic id for the container. When a containerId is not manually\nset, a unique id will be generated. It is usually necessary to set deterministic ids for automated testing."
        },
        {
          "name": "containerRef",
          "type": "React.RefObject<HTMLElement>",
          "description": "The containerRef prop may be used to attach a ref to the outermost element rendered by the container.\n\n@example containerRef={(ref) => { this.chartRef = ref; }}"
        },
        {
          "name": "desc",
          "type": "string",
          "description": "The desc prop specifies the description of the chart/SVG to assist with\naccessibility for screen readers. The more info about the chart provided in\nthe description, the more usable it will be for people using screen readers.\nThis prop defaults to an empty string.\n\n@example \"Golden retreivers make up 30%, Labs make up 25%, and other dog breeds are\nnot represented above 5% each.\""
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
          "name": "portalComponent",
          "type": "React.ReactElement",
          "description": "The portalComponent prop takes a component instance which will be used as a container for children that should\nrender inside a top-level container so that they will always appear above other elements. VictoryTooltip renders\ninside a portal so that tooltips always render above data. VictoryPortal is used to define elements that should\nrender in the portal container. This prop defaults to Portal, and should only be overridden when changing rendered\nelements from SVG to another type of element e.g., react-native-svg elements."
        },
        {
          "name": "portalZIndex",
          "type": "number",
          "description": "The portalZIndex prop determines the z-index of the div enclosing the portal component. If a portalZIndex prop is\nnot set, the z-index of the enclosing div will be set to 99."
        },
        {
          "name": "responsive",
          "type": "boolean",
          "description": "The responsive prop specifies whether the rendered container should be a responsive container\nwith a viewBox attribute, or a static container with absolute width and height."
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
          "name": "title",
          "type": "string",
          "description": "The title prop specifies the title to be applied to the SVG to assist\naccessibility for screen readers. The more descriptive this title is, the more\nuseful it will be. If no title prop is passed, it will default to Chart.\n\n@example \"Popularity of Dog Breeds by Percentage\""
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
    "Basic",
    "Segmented primary measure",
    "Responsive container with bottom aligned legend",
    "Primary measure dot",
    "Error measure and custom axis ticks",
    "Primary measure outside range",
    "Negative primary measure",
    "Reversed with right aligned legend",
    "Negative and positive primary measures",
    "Vertical with segmented primary measure",
    "Vertical primary measure outside max range",
    "Custom labels",
    "Custom size",
    "Horizontal group",
    "Vertical group",
    "Horizontal group with title",
    "Vertical group with title"
  ]
};
pageData.liveContext = {
  ChartAxis,
  ChartBullet,
  ChartContainer,
  ChartThemeColor,
  getResizeObserver
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet } from '@patternfly/react-charts';\n\nconst Basic = () => (\n  <div style={{ height: '150px', width: '600px' }}>\n    <ChartBullet\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Bullet chart example\"\n      comparativeWarningMeasureData={[{ name: 'Warning', y: 88 }]}\n      constrainToVisibleArea\n      height={150}\n      labels={({ datum }) => `${datum.name}: ${datum.y}`}\n      maxDomain={{y: 100}}\n      primarySegmentedMeasureData={[{ name: 'Measure', y: 60 }]}\n      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}\n      width={600}\n    />\n  </div>\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Segmented primary measure': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet } from '@patternfly/react-charts';\n\nconst SegmentedPrimaryMeasure = () => (\n  <div style={{ height: '200px', width: '600px' }}>\n    <ChartBullet\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Bullet chart example\"\n      comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}\n      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n      constrainToVisibleArea\n      height={200}\n      labels={({ datum }) => `${datum.name}: ${datum.y}`}\n      maxDomain={{y: 100}}\n      padding={{\n        bottom: 50,\n        left: 150, // Adjusted to accommodate labels\n        right: 50,\n        top: 50\n      }}\n      primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}\n      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}\n      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}\n      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n      subTitle=\"Measure details\"\n      title=\"Text label\"\n      width={600}\n    />\n  </div>\n)","title":"Segmented primary measure","lang":"js"}}>
      
    </Example>,
  'Responsive container with bottom aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet, getResizeObserver } from '@patternfly/react-charts';\n\nclass BulletChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.containerRef = React.createRef();\n    this.observer = () => {};\n    this.state = {\n      width: 0\n    };\n    this.handleResize = () => {\n      if (this.containerRef.current && this.containerRef.current.clientWidth) {\n        this.setState({ width: this.containerRef.current.clientWidth });\n      }\n    };\n  }\n\n  componentDidMount() {\n    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);\n    this.handleResize();\n  }\n\n  componentWillUnmount() {\n    this.observer();\n  }\n\n  render() {\n    const { width } = this.state;\n    return (\n      <div ref={this.containerRef} style={{ height: '250px' }}>\n        <ChartBullet\n          ariaDesc=\"Storage capacity\"\n          ariaTitle=\"Bullet chart example\"\n          comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}\n          comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n          constrainToVisibleArea\n          height={250}\n          labels={({ datum }) => `${datum.name}: ${datum.y}`}\n          legendAllowWrap\n          legendPosition=\"bottom-left\"\n          maxDomain={{y: 100}}\n          padding={{\n            bottom: 50,\n            left: 50,\n            right: 50,\n            top: 100 // Adjusted to accommodate labels\n          }}\n          primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}\n          primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}\n          qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}\n          qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n          subTitle=\"Measure details\"\n          title=\"Text label\"\n          titlePosition=\"top-left\"\n          width={width}\n        />\n      </div>\n    );\n  }\n}","title":"Responsive container with bottom aligned legend","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates a responsive legend which wraps when items are wider than its container.`}
      </p>
    </Example>,
  'Primary measure dot': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet } from '@patternfly/react-charts';\n\nconst PrimaryMeasureDot = () => (\n  <div style={{ height: '200px', width: '600px' }}>\n    <ChartBullet\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Bullet chart example\"\n      comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}\n      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n      constrainToVisibleArea\n      height={200}\n      labels={({ datum }) => `${datum.name}: ${datum.y}`}\n      maxDomain={{y: 100}}\n      padding={{\n        bottom: 50,\n        left: 150, // Adjusted to accommodate labels\n        right: 50,\n        top: 50\n      }}\n      primaryDotMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}\n      primaryDotMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}\n      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}\n      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n      subTitle=\"Measure details\"\n      title=\"Text label\"\n      width={600}\n    />\n  </div>\n)","title":"Primary measure dot","lang":"js"}}>
      
    </Example>,
  'Error measure and custom axis ticks': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartAxis, ChartBullet } from '@patternfly/react-charts';\n\nconst ErrorMeasureAndCustomAxisTicks = () => (\n  <div style={{ height: '200px', width: '600px' }}>\n    <ChartBullet\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Bullet chart example\"\n      axisComponent={<ChartAxis tickValues={[0, 75, 150]} />}\n      comparativeErrorMeasureData={[{name: 'Error', y: 120}]}\n      comparativeErrorMeasureLegendData={[{ name: 'Error' }]}\n      comparativeWarningMeasureData={[{name: 'Warning', y: 80}]}\n      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n      constrainToVisibleArea\n      height={200}\n      labels={({ datum }) => `${datum.name}: ${datum.y}`}\n      legendItemsPerRow={3}\n      padding={{\n        bottom: 50,\n        left: 150, // Adjusted to accommodate labels\n        right: 50,\n        top: 50\n      }}\n      primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 75 }]}\n      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}\n      qualitativeRangeData={[{ name: 'Range', y: 65 }, { name: 'Range', y: 100 }, { name: 'Range', y: 150 }]}\n      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n      themeColor={ChartThemeColor.green}\n      subTitle=\"Measure details\"\n      title=\"Text label\"\n      width={600}\n    />\n  </div>\n)","title":"Error measure and custom axis ticks","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This is a green bullet chart with error measure and custom axis ticks with 3 legend items per row.`}
      </p>
    </Example>,
  'Primary measure outside range': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet } from '@patternfly/react-charts';\n\nconst PrimaryMeasureOutsideRange = () => (\n  <div style={{ height: '200px', width: '600px' }}>\n    <ChartBullet\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Bullet chart example\"\n      comparativeWarningMeasureData={[{name: 'Warning', y: 80}]}\n      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n      constrainToVisibleArea\n      labels={({ datum }) => `${datum.name}: ${datum.y}`}\n      height={200}\n      maxDomain={{y: 125}}\n      minDomain={{y: 50}}\n      padding={{\n        bottom: 50,\n        left: 150, // Adjusted to accommodate labels\n        right: 75,\n        top: 50\n      }}\n      primarySegmentedMeasureData={[{ name: 'Measure', y: 75 }, { name: 'Measure', y: 135 }]}\n      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}\n      qualitativeRangeData={[{ name: 'Range', y: 85 }, { name: 'Range', y: 125 }]}\n      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n      themeColor={ChartThemeColor.gold}\n      subTitle=\"Measure details\"\n      title=\"Text label\"\n      width={600}\n    />\n  </div>\n)","title":"Primary measure outside range","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This is a gold bullet chart with primary measure greater than max range.`}
      </p>
    </Example>,
  'Negative primary measure': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet } from '@patternfly/react-charts';\n\nconst NegativePrimaryMeasure = () => (\n  <div style={{ height: '200px', width: '600px' }}>\n    <ChartBullet\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Bullet chart example\"\n      comparativeWarningMeasureData={[{name: 'Warning', y: 60}]}\n      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n      constrainToVisibleArea\n      height={200}\n      labels={({ datum }) => `${datum.name}: ${datum.y}`}\n      maxDomain={{y: 75}}\n      minDomain={{y: -25}}\n      padding={{\n        bottom: 50,\n        left: 150, // Adjusted to accommodate labels\n        right: 50,\n        top: 65\n      }}\n      primarySegmentedMeasureData={[{ name: 'Measure', y: -15 }]}\n      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }]}\n      qualitativeRangeData={[{ name: 'Range', y: 25, y0: -25 }, { name: 'Range', y: 50 }]}\n      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n      subTitle=\"Measure details\"\n      title=\"Text label\"\n      width={600}\n    />\n  </div>\n)","title":"Negative primary measure","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This bullet chart with negative primary measure is for measures considered to be bad when they are low.`}
      </p>
    </Example>,
  'Reversed with right aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet } from '@patternfly/react-charts';\n\nconst ReversedWithRightAlignedLegend = () => (\n  <div style={{ height: '200px', width: '700px' }}>\n    <ChartBullet\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Bullet chart example\"\n      comparativeWarningMeasureData={[{name: 'Warning', y: -88}]}\n      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n      constrainToVisibleArea\n      invert\n      height={200}\n      labels={({ datum }) => `${datum.name}: ${datum.y}`}\n      legendPosition=\"right\"\n      legendOrientation=\"vertical\"\n      maxDomain={{y: 0}}\n      minDomain={{y: -100}}\n      padding={{\n        bottom: 50,\n        left: 150, // Adjusted to accommodate labels\n        right: 150, // Adjusted to accommodate legend\n        top: 80\n      }}\n      primarySegmentedMeasureData={[{ name: 'Measure', y: -60 }, { name: 'Measure', y: -25 }]}\n      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}\n      qualitativeRangeData={[{ name: 'Range', y: -50 }, { name: 'Range', y: -75 }]}\n      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n      subTitle=\"Measure details\"\n      title=\"Text label\"\n      width={700}\n    />\n  </div>\n)","title":"Reversed with right aligned legend","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This reversed bullet chart with right aligned legend is for measures considered to be good when they are low.`}
      </p>
    </Example>,
  'Negative and positive primary measures': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet } from '@patternfly/react-charts';\n\nconst NegativeAndPositivePrimaryMeasures = () => (\n  <div style={{ height: '200px', width: '600px' }}>\n    <ChartBullet\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Bullet chart example\"\n      comparativeWarningMeasureData={[{name: 'Warning', y: 60}]}\n      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n      constrainToVisibleArea\n      height={200}\n      labels={({ datum }) => `${datum.name}: ${datum.y}`}\n      legendItemsPerRow={4}\n      maxDomain={{y: 75}}\n      minDomain={{y: -25}}\n      padding={{\n        bottom: 50,\n        left: 150, // Adjusted to accommodate labels\n        right: 50,\n        top: 65\n      }}\n      primarySegmentedMeasureData={[{ name: 'Measure', y: -10 }, { name: 'Measure', y: -20 }, { name: 'Measure', y: 10 }, { name: 'Measure', y: 40 }]}\n      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }, { name: 'Measure 3' }, { name: 'Measure 4' }]}\n      qualitativeRangeData={[{ name: 'Range', y: 25, y0: -25 }, { name: 'Range', y: 50 }]}\n      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n      subTitle=\"Measure details\"\n      title=\"Text label\"\n      width={600}\n    />\n  </div>\n)","title":"Negative and positive primary measures","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This bullet chart with negative and positive primary measures has 4 legend items per row.`}
      </p>
    </Example>,
  'Vertical with segmented primary measure': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet } from '@patternfly/react-charts';\n\nconst VerticalWithSegmentedPrimaryMeasure = () => (\n  <div style={{ height: '500px', width: '500px' }}>\n    <ChartBullet\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Bullet chart example\"\n      comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}\n      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n      constrainToVisibleArea\n      height={500}\n      horizontal={false}\n      labels={({ datum }) => `${datum.name}: ${datum.y}`}\n      maxDomain={{y: 100}}\n      padding={{\n        bottom: 125, // Adjusted to accommodate legend\n        left: 400,\n        right: 50,\n        top: 50\n      }}\n      primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}\n      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}\n      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}\n      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n      subTitle=\"Measure details\"\n      title=\"Text label\"\n      width={500}\n    />\n  </div>\n)","title":"Vertical with segmented primary measure","lang":"js"}}>
      
    </Example>,
  'Vertical primary measure outside max range': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet } from '@patternfly/react-charts';\n\nconst VerticalPrimaryMeasureOutsideMaxRange = () => (\n  <div style={{ height: '500px', width: '500px' }}>\n    <ChartBullet\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Bullet chart example\"\n      comparativeWarningMeasureData={[{name: 'Warning', y: 100}]}\n      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n      constrainToVisibleArea\n      height={500}\n      horizontal={false}\n      labels={({ datum }) => `${datum.name}: ${datum.y}`}\n      maxDomain={{y: 125}}\n      minDomain={{y: 50}}\n      padding={{\n        bottom: 125, // Adjusted to accommodate legend\n        left: 400,\n        right: 50,\n        top: 50 // Adjusted to accommodate primary segmented measure tooltip\n      }}\n      primarySegmentedMeasureData={[{ name: 'Measure', y: 75 }, { name: 'Measure', y: 135 }]}\n      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}\n      qualitativeRangeData={[{ name: 'Range', y: 85 }, { name: 'Range', y: 125 }]}\n      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n      subTitle=\"Measure details\"\n      title=\"Text label\"\n      themeColor={ChartThemeColor.gold}\n      width={500}\n    />\n  </div>\n)","title":"Vertical primary measure outside max range","lang":"js"}}>
      
    </Example>,
  'Custom labels': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartAxis, ChartBullet } from '@patternfly/react-charts';\n\nconst CustomLabels = () => (\n  <div style={{ height: '150px', width: '600px' }}>\n    <ChartBullet\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Bullet chart example\"\n      axisComponent={\n        <ChartAxis \n          tickValues={[0, 25, 50, 75, 100]}\n          tickFormat={val => {\n            switch (val) {\n              case 0:\n                return 'New';\n              case 25:\n                return 'Beginner';\n              case 50:\n                return 'Intermediate';\n              case 75:\n                return 'Advanced';\n              case 100:\n                return 'Expert';\n            }\n          }}\n        />\n      }\n      comparativeWarningMeasureData={[{ name: 'Warning', y: 88 }]}\n      constrainToVisibleArea\n      height={150}\n      labels={({ datum }) => `${datum.name}: ${datum.y}`}\n      maxDomain={{y: 100}}\n      primarySegmentedMeasureData={[{ name: 'Measure', y: 60 }]}\n      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}\n      width={600}\n    />\n  </div>\n)","title":"Custom labels","lang":"js"}}>
      
    </Example>,
  'Custom size': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet } from '@patternfly/react-charts';\n\nconst CustomSize = () => (\n  <div style={{ height: '200px', width: '600px' }}>\n    <ChartBullet\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Bullet chart example\"\n      bulletSize={160}\n      comparativeWarningMeasureData={[{ name: 'Warning', y: 88 }]}\n      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n      height={200}\n      labels={({ datum }) => `${datum.name}: ${datum.y}`}\n      maxDomain={{y: 100}}\n      padding={{\n        bottom: 50,\n        left: 150, // Adjusted to accomodate labels\n        right: 50,\n        top: 50\n      }}\n      primarySegmentedMeasureData={[{ name: 'Measure', y: 60 }]}\n      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }]}\n      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}\n      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n      subTitle=\"Measure details\"\n      title=\"Text label\"\n      width={600}\n    />\n  </div>\n)","title":"Custom size","lang":"js"}}>
      
    </Example>,
  'Horizontal group': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet, ChartContainer } from '@patternfly/react-charts';\n\nconst HorizontalGroup = () => (\n  <div style={{ height: '500px', width: '600px' }}>\n    <ChartContainer \n        ariaDesc=\"Storage capacity\"\n        ariaTitle=\"Bullet chart example\"\n        height={500}\n        width={600}\n      >\n      <ChartBullet\n        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}\n        constrainToVisibleArea\n        height={500}\n        labels={({ datum }) => `${datum.name}: ${datum.y}`}\n        maxDomain={{y: 100}}\n        padding={{\n          bottom: 100, // Adjusted to accommodate legend\n          left: 150, // Adjusted to accommodate labels\n          right: 50,\n          top: 75\n        }}\n        primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}\n        qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}\n        standalone={false}\n        subTitle=\"Measure details\"\n        title=\"Text label\"\n        width={600}\n      />\n      <ChartBullet\n        comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}\n        constrainToVisibleArea\n        height={500}\n        labels={({ datum }) => `${datum.name}: ${datum.y}`}\n        maxDomain={{y: 100}}\n        padding={{\n          bottom: 100, // Adjusted to accommodate legend\n          left: 150, // Adjusted to accommodate labels\n          right: 50,\n          top: 300\n        }}\n        primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}\n        qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}\n        standalone={false}\n        subTitle=\"Measure details\"\n        title=\"Text label\"\n        width={600}\n      />\n      <ChartBullet\n        comparativeWarningMeasureData={[{name: 'Warning', y: 98}]}\n        constrainToVisibleArea\n        height={500}\n        labels={({ datum }) => `${datum.name}: ${datum.y}`}\n        maxDomain={{y: 100}}\n        padding={{\n          bottom: 100, // Adjusted to accommodate legend\n          left: 150, // Adjusted to accommodate labels\n          right: 50,\n          top: 525\n        }}\n        primarySegmentedMeasureData={[{ name: 'Measure', y: 35 }, { name: 'Measure', y: 70 }]}\n        qualitativeRangeData={[{ name: 'Range', y: 60 }, { name: 'Range', y: 85 }]}\n        standalone={false}\n        subTitle=\"Measure details\"\n        title=\"Text label\"\n        width={600}\n      />\n      <ChartBullet\n        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}\n        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n        constrainToVisibleArea\n        height={500}\n        labels={({ datum }) => `${datum.name}: ${datum.y}`}\n        maxDomain={{y: 100}}\n        padding={{\n          bottom: 100, // Adjusted to accommodate legend\n          left: 150, // Adjusted to accommodate labels\n          right: 50,\n          top: 750\n        }}\n        primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}\n        primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}\n        qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}\n        qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n        standalone={false}\n        subTitle=\"Measure details\"\n        title=\"Text label\"\n        width={600}\n      />\n    </ChartContainer>\n  </div>\n)","title":"Horizontal group","lang":"js"}}>
      
    </Example>,
  'Vertical group': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet, ChartContainer } from '@patternfly/react-charts';\n\nconst VerticalGroup = () => (\n  <div style={{ height: '600px', width: '500px' }}>\n    <ChartContainer \n        ariaDesc=\"Storage capacity\"\n        ariaTitle=\"Bullet chart example\"\n        height={600}\n        width={500}\n      >\n      <ChartBullet\n        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}\n        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n        constrainToVisibleArea\n        height={600}\n        horizontal={false}\n        labels={({ datum }) => `${datum.name}: ${datum.y}`}\n        maxDomain={{y: 100}}\n        padding={{\n          bottom: 125, // Adjusted to accommodate legend\n          left: 50,\n          right: 50,\n          top: 50\n        }}\n        primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}\n        primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}\n        qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}\n        qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n        standalone={false}\n        subTitle=\"Measure details\"\n        title=\"Text label\"\n        width={500}\n      />\n      <ChartBullet\n        comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}\n        constrainToVisibleArea\n        height={600}\n        horizontal={false}\n        labels={({ datum }) => `${datum.name}: ${datum.y}`}\n        maxDomain={{y: 100}}\n        padding={{\n          bottom: 125, // Adjusted to accommodate legend\n          left: 300,\n          right: 50,\n          top: 50\n        }}\n        primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}\n        qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}\n        standalone={false}\n        subTitle=\"Measure details\"\n        title=\"Text label\"\n        width={500}\n      />\n      <ChartBullet\n        comparativeWarningMeasureData={[{name: 'Warning', y: 98}]}\n        constrainToVisibleArea\n        height={600}\n        horizontal={false}\n        labels={({ datum }) => `${datum.name}: ${datum.y}`}\n        maxDomain={{y: 100}}\n        padding={{\n          bottom: 125, // Adjusted to accommodate legend\n          left: 550,\n          right: 50,\n          top: 50\n        }}\n        primarySegmentedMeasureData={[{ name: 'Measure', y: 35 }, { name: 'Measure', y: 70 }]}\n        qualitativeRangeData={[{ name: 'Range', y: 60 }, { name: 'Range', y: 85 }]}\n        standalone={false}\n        subTitle=\"Measure details\"\n        title=\"Text label\"\n        width={500}\n      />\n      <ChartBullet\n        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}\n        constrainToVisibleArea\n        height={600}\n        horizontal={false}\n        labels={({ datum }) => `${datum.name}: ${datum.y}`}\n        maxDomain={{y: 100}}\n        padding={{\n          bottom: 125, // Adjusted to accommodate legend\n          left: 800,\n          right: 50,\n          top: 50\n        }}\n        primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}\n        qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}\n        standalone={false}\n        subTitle=\"Measure details\"\n        title=\"Text label\"\n        width={500}\n      />\n    </ChartContainer>\n  </div>\n)","title":"Vertical group","lang":"js"}}>
      
    </Example>,
  'Horizontal group with title': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet, ChartContainer } from '@patternfly/react-charts';\n\nconst HorizontalGroupWithTitle = () => (\n  <div style={{ height: '600px', width: '600px' }}>\n    <ChartContainer \n        ariaDesc=\"Storage capacity\"\n        ariaTitle=\"Bullet chart example\"\n        height={600}\n        width={600}\n      >\n      <ChartBullet\n        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}\n        constrainToVisibleArea\n        groupSubTitle=\"Measure details\"\n        groupTitle=\"Text label\"\n        height={575}\n        labels={({ datum }) => `${datum.name}: ${datum.y}`}\n        maxDomain={{y: 100}}\n        padding={{\n          bottom: 100, // Adjusted to accommodate legend\n          left: 150, // Adjusted to accommodate labels\n          right: 50,\n          top: 275 // Adjusted to accommodate group labels\n        }}\n        primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}\n        qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}\n        standalone={false}\n        subTitle=\"Measure details\"\n        title=\"Text label\"\n        width={600}\n      />\n      <ChartBullet\n        comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}\n        constrainToVisibleArea\n        height={600}\n        labels={({ datum }) => `${datum.name}: ${datum.y}`}\n        maxDomain={{y: 100}}\n        padding={{\n          bottom: 100, // Adjusted to accommodate legend\n          left: 150, // Adjusted to accommodate labels\n          right: 50,\n          top: 500 // Adjusted to accommodate group labels\n        }}\n        primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}\n        qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}\n        standalone={false}\n        subTitle=\"Measure details\"\n        title=\"Text label\"\n        width={600}\n      />\n      <ChartBullet\n        comparativeWarningMeasureData={[{name: 'Warning', y: 98}]}\n        constrainToVisibleArea\n        height={600}\n        labels={({ datum }) => `${datum.name}: ${datum.y}`}\n        maxDomain={{y: 100}}\n        padding={{\n          bottom: 100, // Adjusted to accommodate legend\n          left: 150, // Adjusted to accommodate labels\n          right: 50,\n          top: 725 // Adjusted to accommodate group labels\n        }}\n        primarySegmentedMeasureData={[{ name: 'Measure', y: 35 }, { name: 'Measure', y: 70 }]}\n        qualitativeRangeData={[{ name: 'Range', y: 60 }, { name: 'Range', y: 85 }]}\n        standalone={false}\n        subTitle=\"Measure details\"\n        title=\"Text label\"\n        width={600}\n      />\n      <ChartBullet\n        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}\n        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n        constrainToVisibleArea\n        height={600}\n        labels={({ datum }) => `${datum.name}: ${datum.y}`}\n        maxDomain={{y: 100}}\n        padding={{\n          bottom: 100, // Adjusted to accommodate legend\n          left: 150, // Adjusted to accommodate labels\n          right: 50,\n          top: 950 // Adjusted to accommodate group labels\n        }}\n        primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}\n        primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}\n        qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}\n        qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n        standalone={false}\n        subTitle=\"Measure details\"\n        title=\"Text label\"\n        width={600}\n      />\n    </ChartContainer>\n  </div>\n)","title":"Horizontal group with title","lang":"js"}}>
      
    </Example>,
  'Vertical group with title': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartBullet, ChartContainer } from '@patternfly/react-charts';\n\nconst VerticalGroupWithTitle = () => (\n  <div style={{ height: '600px', width: '500px' }}>\n    <ChartContainer \n        ariaDesc=\"Storage capacity\"\n        ariaTitle=\"Bullet chart example\"\n        height={600}\n        width={500}\n      >\n      <ChartBullet\n        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}\n        comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}\n        constrainToVisibleArea\n        groupSubTitle=\"Measure details\"\n        groupTitle=\"Text label\"\n        height={600}\n        horizontal={false}\n        labels={({ datum }) => `${datum.name}: ${datum.y}`}\n        maxDomain={{y: 100}}\n        padding={{\n          bottom: 125, // Adjusted to accommodate legend\n          left: 50,\n          right: 50,\n          top: 150 // Adjusted to accommodate group labels\n        }}\n        primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}\n        primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}\n        qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}\n        qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}\n        standalone={false}\n        subTitle=\"Measure details\"\n        title=\"Text label\"\n        width={500}\n      />\n      <ChartBullet\n        comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}\n        constrainToVisibleArea\n        height={600}\n        horizontal={false}\n        labels={({ datum }) => `${datum.name}: ${datum.y}`}\n        maxDomain={{y: 100}}\n        padding={{\n          bottom: 125, // Adjusted to accommodate legend\n          left: 300,\n          right: 50,\n          top: 150 // Adjusted to accommodate group labels\n        }}\n        primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}\n        qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}\n        standalone={false}\n        subTitle=\"Measure details\"\n        title=\"Text label\"\n        width={500}\n      />\n      <ChartBullet\n        comparativeWarningMeasureData={[{name: 'Warning', y: 98}]}\n        constrainToVisibleArea\n        height={600}\n        horizontal={false}\n        labels={({ datum }) => `${datum.name}: ${datum.y}`}\n        maxDomain={{y: 100}}\n        padding={{\n          bottom: 125, // Adjusted to accommodate legend\n          left: 550,\n          right: 50,\n          top: 150 // Adjusted to accommodate group labels\n        }}\n        primarySegmentedMeasureData={[{ name: 'Measure', y: 35 }, { name: 'Measure', y: 70 }]}\n        qualitativeRangeData={[{ name: 'Range', y: 60 }, { name: 'Range', y: 85 }]}\n        standalone={false}\n        subTitle=\"Measure details\"\n        title=\"Text label\"\n        width={500}\n      />\n      <ChartBullet\n        comparativeWarningMeasureData={[{name: 'Warning', y: 78}]}\n        constrainToVisibleArea\n        height={600}\n        horizontal={false}\n        labels={({ datum }) => `${datum.name}: ${datum.y}`}\n        maxDomain={{y: 100}}\n        padding={{\n          bottom: 125, // Adjusted to accommodate legend\n          left: 800,\n          right: 50,\n          top: 150 // Adjusted to accommodate group labels\n        }}\n        primarySegmentedMeasureData={[{ name: 'Measure', y: 15 }, { name: 'Measure', y: 50 }]}\n        qualitativeRangeData={[{ name: 'Range', y: 40 }, { name: 'Range', y: 65 }]}\n        standalone={false}\n        subTitle=\"Measure details\"\n        title=\"Text label\"\n        width={500}\n      />\n    </ChartContainer>\n  </div>\n)","title":"Vertical group with title","lang":"js"}}>
      
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
      {`Learn to build a bullet chart using a Katacoda tutorial starting with a simple chart, adding qualitative ranges, primary comparative measures, a comparative warning measure, tooltips, labels, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"https://katacoda.com/patternfly/courses/react-charts/bullet-chart"}}>
        {`Start course`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Segmented primary measure"])}
    {React.createElement(pageData.examples["Responsive container with bottom aligned legend"])}
    {React.createElement(pageData.examples["Primary measure dot"])}
    {React.createElement(pageData.examples["Error measure and custom axis ticks"])}
    {React.createElement(pageData.examples["Primary measure outside range"])}
    {React.createElement(pageData.examples["Negative primary measure"])}
    {React.createElement(pageData.examples["Reversed with right aligned legend"])}
    {React.createElement(pageData.examples["Negative and positive primary measures"])}
    {React.createElement(pageData.examples["Vertical with segmented primary measure"])}
    {React.createElement(pageData.examples["Vertical primary measure outside max range"])}
    {React.createElement(pageData.examples["Custom labels"])}
    {React.createElement(pageData.examples["Custom size"])}
    {React.createElement(pageData.examples["Horizontal group"])}
    {React.createElement(pageData.examples["Vertical group"])}
    {React.createElement(pageData.examples["Horizontal group with title"])}
    {React.createElement(pageData.examples["Vertical group with title"])}
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
          {`ChartContainer`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-container"}}>
          {`VictoryContainer`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ChartsBulletChartReactDocs';
Component.pageData = pageData;

export default Component;
