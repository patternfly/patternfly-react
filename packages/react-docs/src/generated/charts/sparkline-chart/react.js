import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { ChartArea, ChartContainer, ChartGroup, ChartLabel, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';
import '../../../../../react-charts/src/components/Sparkline/examples/./sparkline.css';
const pageData = {
  "id": "Sparkline chart",
  "section": "charts",
  "source": "react",
  "slug": "/charts/sparkline-chart/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-charts/src/components/Sparkline/examples/sparkline.md",
  "propComponents": [
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
      "name": "ChartLabel",
      "description": "",
      "props": [
        {
          "name": "active",
          "type": "boolean",
          "description": "The active prop specifies whether the label is active or not. The active prop is set by defaultEvents in components\nlike ChartTooltip and VictorySelectionContainer. The active prop is used when evaluating functional styles and\nprops."
        },
        {
          "name": "angle",
          "type": "string | number",
          "description": "Specifies the angle to rotate the text by."
        },
        {
          "name": "capHeight",
          "type": "number | string | Function",
          "description": "The capHeight prop defines a text metric for the font being used: the expected height of capital letters.\nThis is necessary because of SVG, which (a) positions the *bottom* of the text at `y`, and (b) has no notion of\nline height. The value should ideally use the same units as `lineHeight` and `dy`, preferably ems. If given a\nunitless number, it is assumed to be ems."
        },
        {
          "name": "className",
          "type": "string",
          "description": "The className prop specifies a class name that will be applied to the rendered text element."
        },
        {
          "name": "data",
          "type": "any[]",
          "description": "Labels that apply to an entire data series will recieve the entire series as `data` instead of an individual datum\nprop."
        },
        {
          "name": "datum",
          "type": "{}",
          "description": "Victory components can pass a datum prop to their label component. This can be used to calculate functional styles,\nand determine child text"
        },
        {
          "name": "desc",
          "type": "string",
          "description": "The desc prop specifies the description of the chart/SVG to assist with accessibility for screen readers. The more\ndescriptive this title is, the more useful it will be for people using screen readers."
        },
        {
          "name": "direction",
          "type": "'rtl' | 'ltr' | 'inherit'",
          "description": "The direction prop determines which text direction to apply to the rendered text element"
        },
        {
          "name": "dx",
          "type": "number | string | Function",
          "description": "The dx prop defines a horizontal shift from the `x` coordinate."
        },
        {
          "name": "dy",
          "type": "number | string | Function",
          "description": "The dy prop defines a vertical shift from the `y` coordinate. Since this component already accounts for\n`capHeight`, `lineHeight`, and `verticalAnchor`, this will usually not be necessary."
        },
        {
          "name": "events",
          "type": "React.DOMAttributes<any>",
          "description": "The events prop attaches arbitrary event handlers to the label component.\nEvent handlers are currently only called with their corresponding events."
        },
        {
          "name": "inline",
          "type": "boolean",
          "description": "When the text property contains an array of strings, the inline property lets the <tspan /> elements lay out next\nto each other. If this property is not specified, the <tspan /> elements will stack vertically instead."
        },
        {
          "name": "labelPlacement",
          "type": "string",
          "description": "The labelPlacement prop is used to specify the placement of labels relative to the data point they represent.\nThis prop may be given as “vertical”, “parallel” or “perpendicular”. This props is particularly useful in polar\ncharts, where it may be desireable to position a label either parallel or perpendicular to its corresponding angle.\nWhen this prop is not set, perpendicular label placement will be used for polar charts, and vertical label\nplacement will be used for cartesian charts."
        },
        {
          "name": "lineHeight",
          "type": "number | string | Function",
          "description": "The lineHeight prop defines how much space a single line of text should take up.\nNote that SVG has no notion of line-height, so the positioning may differ slightly from what you would expect with CSS,\nbut the result is similar: a roughly equal amount of extra space is distributed above and below the line of text.\nThe value should ideally use the same units as `capHeight` and `dy`, preferably ems.\nIf given a unitless number, it is assumed to be ems."
        },
        {
          "name": "origin",
          "type": "{ x: number, y: number }",
          "description": "Victory components will pass an origin prop is to define the center point in svg coordinates for polar charts.\n\nNote: It will not typically be necessary to set an origin prop manually"
        },
        {
          "name": "renderInPortal",
          "type": "boolean",
          "description": "The renderInPortal prop specifies whether ChartLabel should render text in place or within a VictoryPortal.\nSetting renderInPortal to true is equivalent to wrapping ChartLabel in a VictoryPortal. This prop is false by default."
        },
        {
          "name": "style",
          "type": "React.CSSProperties | React.CSSProperties[]",
          "description": "The style prop applies CSS properties to the rendered `<text>` element."
        },
        {
          "name": "text",
          "type": "number | string | Function | string[]",
          "description": "The text prop defines the text ChartLabel will render. The text prop may be given as a string, number, a function\nof datum, or an array of any of these. Strings may include newline characters, which ChartLabel will split into\nseparate <tspan/> elements. When text is given as an array, separate <tspan/> elements will be created for each\nelement in the array."
        },
        {
          "name": "textAnchor",
          "type": "string | Function",
          "description": "The textAnchor prop defines how the text is horizontally positioned relative to the given `x` and `y` coordinates.\nOptions are \"start\", \"middle\" and \"end\". Note that this overrides the style prop."
        },
        {
          "name": "transform",
          "type": "string | {} | (() => string | {})",
          "description": "The transform prop applies a transform to the rendered `<text>` element.\nIn addition to being a string, it can be an object containing transform definitions for easier authoring."
        },
        {
          "name": "verticalAnchor",
          "type": "string",
          "description": "The verticalAnchor prop defines how the text is vertically positioned relative to the given `x` and `y`\ncoordinates. Options are \"start\", \"middle\" and \"end\"."
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
    "Basic",
    "Green"
  ]
};
pageData.liveContext = {
  ChartArea,
  ChartContainer,
  ChartGroup,
  ChartLabel,
  ChartThemeColor,
  ChartVoronoiContainer
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartArea, ChartContainer, ChartGroup, ChartLabel, ChartVoronoiContainer } from '@patternfly/react-charts';\n\nconst Basic = () => (\n  <div style={{ marginLeft: '50px', marginTop: '50px', height: '135px' }}>\n    <div style={{ height: '100px', width: '400px' }}>\n      <ChartGroup\n        ariaDesc=\"Average number of pets\"\n        ariaTitle=\"Sparkline chart example\"\n        containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}\n        height={100}\n        maxDomain={{y: 9}}\n        padding={0}\n        width={400}\n      >\n        <ChartArea\n          data={[\n            { name: 'Cats', x: '2015', y: 3 },\n            { name: 'Cats', x: '2016', y: 4 },\n            { name: 'Cats', x: '2017', y: 8 },\n            { name: 'Cats', x: '2018', y: 6 }\n          ]}\n        />\n      </ChartGroup>\n    </div>\n    <ChartContainer>\n      <ChartLabel text=\"CPU utilization\" dy={15}/>\n    </ChartContainer>\n  </div>\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Green': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartArea, ChartContainer, ChartGroup, ChartLabel, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';\n\nconst Green = () => (\n  <div className=\"ws-react-charts-sparkline-overflow\">\n    <div style={{ height: '100px', width: '400px' }}>\n      <ChartGroup\n        ariaDesc=\"Average number of pets\"\n        ariaTitle=\"Sparkline chart example\"\n        containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} />}\n        height={100}\n        maxDomain={{y: 9}}\n        padding={0}\n        themeColor={ChartThemeColor.green}\n        width={400}\n      >\n        <ChartArea\n          data={[\n            { name: 'Cats', x: '2015', y: 3 },\n            { name: 'Cats', x: '2016', y: 4 },\n            { name: 'Cats', x: '2017', y: 8 },\n            { name: 'Cats', x: '2018', y: 6 }\n          ]}\n        />\n      </ChartGroup>\n    </div>\n    <ChartContainer>\n      <ChartLabel text=\"CPU utilization\" dy={15}/>\n    </ChartContainer>\n  </div>\n)","title":"Green","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demonstrates an alternate way of applying tooltips using CSS overflow`}
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
      {`Learn to build a sparkline chart using a Katacoda tutorial starting with a simple chart, adding tooltips, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"https://katacoda.com/patternfly/courses/react-charts/sparkline-chart"}}>
        {`Start course`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Green"])}
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
        {`Use `}
        <code {...{"className":"ws-code"}}>
          {`ChartGroup`}
        </code>
        {` in place of `}
        <code {...{"className":"ws-code"}}>
          {`Chart`}
        </code>
        {` when an axis and labels are not desired`}
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
          {`ChartLabel`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-label"}}>
          {`VictoryLabel`}
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
Component.displayName = 'ChartsSparklineChartReactDocs';
Component.pageData = pageData;

export default Component;
