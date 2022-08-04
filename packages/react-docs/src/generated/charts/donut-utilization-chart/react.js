import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts';
const pageData = {
  "id": "Donut utilization chart",
  "section": "charts",
  "source": "react",
  "slug": "/charts/donut-utilization-chart/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-charts/src/components/ChartDonutUtilization/examples/ChartDonutUtilization.md",
  "propComponents": [
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
    }
  ],
  "examples": [
    "Basic",
    "Right aligned legend",
    "Inverted with right aligned legend",
    "Right aligned vertical legend",
    "Bottom aligned legend",
    "Small",
    "Small with right aligned legend",
    "Small with bottom aligned subtitle",
    "Small with right aligned subtitle",
    "Static thresholds",
    "Static thresholds with right aligned legend",
    "Inverted static thresholds with right aligned legend",
    "Static thresholds with custom legend",
    "Static thresholds with bottom aligned legend",
    "Small with static thresholds",
    "Small with static thresholds and right aligned legend",
    "Small with subtitle",
    "Small with right aligned subtitle"
  ]
};
pageData.liveContext = {
  ChartDonutThreshold,
  ChartDonutUtilization,
  ChartThemeColor
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutUtilization } from '@patternfly/react-charts';\n\nconst Basic = () => (\n  <div style={{ height: '230px', width: '230px' }}>\n    <ChartDonutUtilization\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Donut utilization chart example\"\n      constrainToVisibleArea\n      data={{ x: 'GBps capacity', y: 75 }}\n      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n      subTitle=\"of 100 GBps\"\n      title=\"75%\"\n    />\n  </div>\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Right aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutUtilization } from '@patternfly/react-charts';\n\nclass DonutUtilizationChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      spacer: '',\n      used: 0\n    };\n  }\n\n  componentDidMount() {\n    this.interval = setInterval(() => {\n      const { used } = this.state;\n      const val = (used + 10) % 100;\n      this.setState({\n        spacer: val < 10 ? ' ' : '',\n        used: val\n      });\n    }, 1000);\n  }\n\n  componentWillUnmount() {\n    clearInterval(this.interval);\n  }\n\n  render() {\n    const { spacer, used } = this.state;\n    return (\n      <div style={{  height: '230px', width: '435px' }}>\n        <ChartDonutUtilization\n          ariaDesc=\"Storage capacity\"\n          ariaTitle=\"Donut utilization chart example\"\n          constrainToVisibleArea\n          data={{ x: 'GBps capacity', y: used }}\n          labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n          legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}\n          legendOrientation=\"vertical\"\n          padding={{\n            bottom: 20,\n            left: 20,\n            right: 225, // Adjusted to accommodate legend\n            top: 20\n          }}\n          subTitle=\"of 100 GBps\"\n          title={`${used}%`}\n          thresholds={[{ value: 60 }, { value: 90 }]}\n          width={435}\n        />\n      </div>\n    );\n  }\n}","title":"Right aligned legend","lang":"js"}}>
      
    </Example>,
  'Inverted with right aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutUtilization } from '@patternfly/react-charts';\n\nclass InvertedDonutUtilizationChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      spacer: '',\n      used: 100\n    };\n  }\n\n  componentDidMount() {\n    this.interval = setInterval(() => {\n      const { used } = this.state;\n      const val = (((used - 10) % 100) + 100) % 100;\n      this.setState({\n        spacer: val < 10 ? ' ' : '',\n        used: val\n      });\n    }, 1000);\n  }\n\n  componentWillUnmount() {\n    clearInterval(this.interval);\n  }\n\n  render() {\n    const { spacer, used } = this.state;\n    return (\n      <div style={{ height: '230px', width: '435px' }}>\n        <ChartDonutUtilization\n          ariaDesc=\"Storage capacity\"\n          ariaTitle=\"Donut utilization chart example\"\n          constrainToVisibleArea\n          data={{ x: 'GBps capacity', y: used }}\n          invert\n          labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n          legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}\n          legendOrientation=\"vertical\"\n          padding={{\n            bottom: 20,\n            left: 20,\n            right: 225, // Adjusted to accommodate legend\n            top: 20\n          }}\n          subTitle=\"of 100 GBps\"\n          title={`${used}%`}\n          thresholds={[{ value: 60 }, { value: 20 }]}\n          width={435}\n        />\n      </div>\n    );\n  }\n}","title":"Inverted with right aligned legend","lang":"js"}}>
      
    </Example>,
  'Right aligned vertical legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts';\n\nclass VerticalLegendUtilizationChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      spacer: '',\n      used: 0\n    };\n  }\n\n  componentDidMount() {\n    this.interval = setInterval(() => {\n      const { used } = this.state;\n      const val = (used + 10) % 100;\n      this.setState({\n        spacer: val < 10 ? ' ' : '',\n        used: val\n      });\n    }, 1000);\n  }\n\n  componentWillUnmount() {\n    clearInterval(this.interval);\n  }\n\n  render() {\n    const { spacer, used } = this.state;\n    return (\n      <div style={{ height: '300px', width: '230px' }}>\n        <ChartDonutUtilization\n          ariaDesc=\"Storage capacity\"\n          ariaTitle=\"Donut utilization chart example\"\n          constrainToVisibleArea\n          data={{ x: 'Storage capacity', y: used }}\n          height={300}\n          labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n          legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}\n          legendOrientation=\"vertical\"\n          legendPosition=\"bottom\"\n          padding={{\n            bottom: 75, // Adjusted to accommodate legend\n            left: 20,\n            right: 20,\n            top: 20\n          }}\n          subTitle=\"of 100 GBps\"\n          title={`${used}%`}\n          themeColor={ChartThemeColor.green}\n          thresholds={[{ value: 60 }, { value: 90 }]}\n          width={230}\n        />\n      </div>\n    );\n  }\n}","title":"Right aligned vertical legend","lang":"js"}}>
      
    </Example>,
  'Bottom aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutUtilization } from '@patternfly/react-charts';\n\nconst BottomAlignedLegend = () => (\n  <div style={{ height: '275px', width: '300px' }}>\n    <ChartDonutUtilization\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Donut utilization chart example\"\n      constrainToVisibleArea\n      data={{ x: 'Storage capacity', y: 45 }}\n      height={275}\n      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n      legendData={[{ name: `Storage capacity: 45%` }, { name: 'Unused' }]}\n      legendPosition=\"bottom\"\n      padding={{\n        bottom: 65, // Adjusted to accommodate legend\n        left: 20,\n        right: 20,\n        top: 20\n      }}\n      subTitle=\"of 100 GBps\"\n      title=\"45%\"\n      thresholds={[{ value: 60 }, { value: 90 }]}\n      width={300}\n    />\n  </div>\n)","title":"Bottom aligned legend","lang":"js"}}>
      
    </Example>,
  'Small': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutUtilization } from '@patternfly/react-charts';\n\nconst Small = () => (\n  <div style={{ height: '175px', width: '175px' }}>\n    <ChartDonutUtilization\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Donut utilization chart example\"\n      constrainToVisibleArea\n      data={{ x: 'Storage capacity', y: 75 }}\n      height={175}\n      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n      subTitle=\"of 100 GBps\"\n      title=\"75%\"\n      width={175}\n    />\n  </div>\n)","title":"Small","lang":"js"}}>
      
    </Example>,
  'Small with right aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutUtilization } from '@patternfly/react-charts';\n\nclass UtilizationChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      spacer: '',\n      used: 0\n    };\n  }\n\n  componentDidMount() {\n    this.interval = setInterval(() => {\n      const { used } = this.state;\n      const val = (used + 10) % 100;\n      this.setState({\n        spacer: val < 10 ? ' ' : '',\n        used: val\n      });\n    }, 1000);\n  }\n\n  componentWillUnmount() {\n    clearInterval(this.interval);\n  }\n\n  render() {\n    const { spacer, used } = this.state;\n    return (\n      <div style={{ width: '350px', height: '175px' }}>\n        <ChartDonutUtilization\n          ariaDesc=\"Storage capacity\"\n          ariaTitle=\"Donut utilization chart example\"\n          constrainToVisibleArea\n          data={{ x: 'Storage capacity', y: used }}\n          height={175}\n          labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n          legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}\n          legendOrientation=\"vertical\"\n          padding={{\n            bottom: 20,\n            left: 20,\n            right: 195, // Adjusted to accommodate legend\n            top: 20\n          }}\n          subTitle=\"of 100 GBps\"\n          title={`${used}%`}\n          thresholds={[{ value: 60 }, { value: 90 }]}\n          width={350}\n        />\n      </div>\n    );\n  }\n}","title":"Small with right aligned legend","lang":"js"}}>
      
    </Example>,
  'Small with bottom aligned subtitle': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutUtilization } from '@patternfly/react-charts';\n\nconst SmallWithBottomAlignedSubtitle = () => (\n  <div style={{ height: '185px', width: '350px' }}>\n    <ChartDonutUtilization\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Donut utilization chart example\"\n      constrainToVisibleArea\n      data={{ x: 'Storage capacity', y: 45 }}\n      height={185}\n      labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n      legendData={[{ name: `Storage capacity: 45%` }, { name: 'Unused' }]}\n      legendOrientation=\"vertical\"\n      padding={{\n        bottom: 25, // Adjusted to accommodate subTitle\n        left: 20,\n        right: 195, // Adjusted to accommodate legend\n        top: 20\n      }}\n      subTitle=\"of 100 GBps\"\n      subTitlePosition=\"bottom\"\n      title=\"45%\"\n      thresholds={[{ value: 60 }, { value: 90 }]}\n      width={350}\n    />\n  </div>\n)","title":"Small with bottom aligned subtitle","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This is a small donut utilization chart with bottom aligned legend and right aligned subtitle.`}
      </p>
    </Example>,
  'Small with right aligned subtitle': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';\n\nconst SmallWithRightAlignedSubtitle = () => (\n  <div style={{ height: '225px', width: '675px' }}>\n    <ChartDonutThreshold\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Donut utilization chart with static threshold example\"\n      constrainToVisibleArea\n      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}\n      height={225}\n      labels={({ datum }) => datum.x ? datum.x : null}\n      padding={{\n        bottom: 60, // Adjusted to accommodate legend\n        left: 20,\n        right: 20,\n        top: 20\n      }}\n      subTitlePosition=\"right\"\n      width={675}\n    >\n      <ChartDonutUtilization\n        data={{ x: 'Storage capacity', y: 45 }}\n        labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n        legendData={[{ name: `Storage capacity: 45%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]}\n        legendPosition=\"bottom\"\n        subTitle=\"of 100 GBps\"\n        title=\"45%\"\n        thresholds={[{ value: 60 }, { value: 90 }]}\n      />\n    </ChartDonutThreshold>\n  </div>\n)","title":"Small with right aligned subtitle","lang":"js"}}>
      
    </Example>,
  'Static thresholds': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';\n\nconst StaticThresholds = () => (\n  <div style={{ height: '230px', width: '230px' }}>\n    <ChartDonutThreshold\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Donut utilization chart with static threshold example\"\n      constrainToVisibleArea\n      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}\n      labels={({ datum }) => datum.x ? datum.x : null}\n    >\n      <ChartDonutUtilization\n        data={{ x: 'Storage capacity', y: 45 }}\n        labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n        subTitle=\"of 100 GBps\"\n        title=\"45%\"\n      />\n    </ChartDonutThreshold>\n  </div>\n)","title":"Static thresholds","lang":"js"}}>
      
    </Example>,
  'Static thresholds with right aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';\n\nclass ThresholdChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      used: 0\n    };\n  }\n\n  componentDidMount() {\n    this.interval = setInterval(() => {\n      const { used } = this.state;\n      this.setState({ used: (used + 10) % 100 });\n    }, 1000);\n  }\n\n  componentWillUnmount() {\n    clearInterval(this.interval);\n  }\n\n  render() {\n    const { used } = this.state;\n    return (\n      <div style={{ height: '230px', width: '500px' }}>\n        <ChartDonutThreshold\n          ariaDesc=\"Storage capacity\"\n          ariaTitle=\"Donut utilization chart with static threshold example\"\n          constrainToVisibleArea\n          data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}\n          labels={({ datum }) => datum.x ? datum.x : null}\n          padding={{\n            bottom: 20,\n            left: 20,\n            right: 290, // Adjusted to accommodate legend\n            top: 20\n          }}\n          width={500}\n        >\n          <ChartDonutUtilization\n            data={{ x: 'Storage capacity', y: used }}\n            labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n            legendData={[{ name: `Storage capacity: ${used}%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]}\n            legendOrientation=\"vertical\"\n            subTitle=\"of 100 GBps\"\n            title={`${used}%`}\n            thresholds={[{ value: 60 }, { value: 90 }]}\n          />\n        </ChartDonutThreshold>\n      </div>\n    );\n  }\n}","title":"Static thresholds with right aligned legend","lang":"js"}}>
      
    </Example>,
  'Inverted static thresholds with right aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';\n\nclass InvertedThresholdChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      spacer: '',\n      used: 100\n    };\n  }\n  \n  componentDidMount() {\n    this.interval = setInterval(() => {\n      const { used } = this.state;\n      const val = (((used - 10) % 100) + 100) % 100;\n      this.setState({\n        spacer: val < 10 ? ' ' : '',\n        used: val\n      });\n    }, 1000);\n  }\n    \n  componentWillUnmount() {\n    clearInterval(this.interval);\n  }\n\n  render() {\n    const { used } = this.state;\n    return (\n      <div style={{ height: '230px', width: '500px' }}>\n        <ChartDonutThreshold\n          ariaDesc=\"Storage capacity\"\n          ariaTitle=\"Donut utilization chart with static threshold example\"\n          constrainToVisibleArea\n          data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 20%', y: 20 }]}\n          invert\n          labels={({ datum }) => datum.x ? datum.x : null}\n          padding={{\n            bottom: 20,\n            left: 20,\n            right: 290, // Adjusted to accommodate legend\n            top: 20\n          }}\n          width={500}\n        >\n          <ChartDonutUtilization\n            data={{ x: 'Storage capacity', y: used }}\n            labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n            legendData={[{ name: `Storage capacity: ${used}%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 20%' }]}\n            legendOrientation=\"vertical\"\n            subTitle=\"of 100 GBps\"\n            title={`${used}%`}\n            thresholds={[{ value: 60 }, { value: 20 }]}\n          />\n        </ChartDonutThreshold>\n      </div>\n    );\n  }\n}","title":"Inverted static thresholds with right aligned legend","lang":"js"}}>
      
    </Example>,
  'Static thresholds with custom legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutThreshold, ChartDonutUtilization, ChartThemeColor } from '@patternfly/react-charts';\n\nclass CustomLegendThresholdChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      used: 0\n    };\n  }\n\n  componentDidMount() {\n    this.interval = setInterval(() => {\n      const { used } = this.state;\n      this.setState({ used: (used + 10) % 100 });\n    }, 1000);\n  }\n\n  componentWillUnmount() {\n    clearInterval(this.interval);\n  }\n\n  render() {\n    const { used } = this.state;\n    return (\n      <div style={{ height: '350px', width: '230px' }}>\n        <ChartDonutThreshold\n          ariaDesc=\"Storage capacity\"\n          ariaTitle=\"Donut utilization chart with static threshold example\"\n          constrainToVisibleArea\n          data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}\n          height={350}\n          labels={({ datum }) => datum.x ? datum.x : null}\n          padding={{\n            bottom: 125, // Adjusted to accommodate legend\n            left: 20,\n            right: 20,\n            top: 20\n          }}\n          width={230}\n        >\n          <ChartDonutUtilization\n            data={{ x: 'Storage capacity', y: used }}\n            labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n            legendData={[{ name: `Storage capacity: ${used}%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]}\n            legendOrientation=\"vertical\"\n            legendPosition=\"bottom\"\n            subTitle=\"of 100 GBps\"\n            title={`${used}%`}\n            themeColor={ChartThemeColor.green}\n            thresholds={[{ value: 60 }, { value: 90 }]}\n          />\n        </ChartDonutThreshold>\n      </div>\n    );\n  }\n}","title":"Static thresholds with custom legend","lang":"js"}}>
      
    </Example>,
  'Static thresholds with bottom aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';\n\nconst StaticThresholdsWithBottomAlignedLegend = () => (\n  <div style={{ height: '275px', width: '675px' }}>\n    <ChartDonutThreshold\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Donut utilization chart with static threshold example\"\n      constrainToVisibleArea\n      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}\n      height={275}\n      labels={({ datum }) => datum.x ? datum.x : null}\n      padding={{\n        bottom: 65, // Adjusted to accommodate legend\n        left: 20,\n        right: 20,\n        top: 20\n      }}\n      width={675}\n    >\n      <ChartDonutUtilization\n        data={{ x: 'Storage capacity', y: 45 }}\n        labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n        legendData={[{ name: `Storage capacity: 45%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]}\n        legendPosition=\"bottom\"\n        subTitle=\"of 100 GBps\"\n        title=\"45%\"\n      />\n    </ChartDonutThreshold>\n  </div>\n)","title":"Static thresholds with bottom aligned legend","lang":"js"}}>
      
    </Example>,
  'Small with static thresholds': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';\n\nconst SmallWithStaticThresholds = () => (\n  <div style={{ height: '185px', width: '185px' }}>\n    <ChartDonutThreshold\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Donut utilization chart with static threshold example\"\n      constrainToVisibleArea\n      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}\n      height={185}\n      labels={({ datum }) => datum.x ? datum.x : null}\n      width={185}\n    >\n      <ChartDonutUtilization\n        data={{ x: 'Storage capacity', y: 45 }}\n        labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n        subTitle=\"of 100 GBps\"\n        title=\"45%\"\n      />\n    </ChartDonutThreshold>\n  </div>\n)","title":"Small with static thresholds","lang":"js"}}>
      
    </Example>,
  'Small with static thresholds and right aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';\n\nclass ThresholdChart extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      used: 0\n    };\n  }\n\n  componentDidMount() {\n    this.interval = setInterval(() => {\n      const { used } = this.state;\n      this.setState({ used: (used + 10) % 100 });\n    }, 1000);\n  }\n\n  componentWillUnmount() {\n    clearInterval(this.interval);\n  }\n\n  render() {\n    const { used } = this.state;\n    return (\n      <div style={{ height: '185px', width: '425px' }}>\n        <ChartDonutThreshold\n          ariaDesc=\"Storage capacity\"\n          ariaTitle=\"Donut utilization chart with static threshold example\"\n          constrainToVisibleArea\n          data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}\n          height={185}\n          labels={({ datum }) => datum.x ? datum.x : null}\n          padding={{\n            bottom: 20,\n            left: 20,\n            right: 260, // Adjusted to accommodate legend\n            top: 20\n          }}\n          width={425}\n        >\n          <ChartDonutUtilization\n            data={{ x: 'Storage capacity', y: used }}\n            labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n            legendData={[{ name: `Storage capacity: ${used}%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]}\n            legendOrientation=\"vertical\"\n            subTitle=\"of 100 GBps\"\n            title={`${used}%`}\n            thresholds={[{ value: 60 }, { value: 90 }]}\n          />\n        </ChartDonutThreshold>\n      </div>\n    );\n  }\n}","title":"Small with static thresholds and right aligned legend","lang":"js"}}>
      
    </Example>,
  'Small with subtitle': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';\n\nconst SmallWithSubtitle = () => (\n  <div style={{ height: '200px', width: '425px' }}>\n    <ChartDonutThreshold\n      ariaDesc=\"Storage capacity\"\n      ariaTitle=\"Donut utilization chart with static threshold example\"\n      constrainToVisibleArea\n      data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]}\n      height={200}\n      labels={({ datum }) => datum.x ? datum.x : null}\n      padding={{\n        bottom: 30, // Adjusted to accommodate label\n        left: 20,\n        right: 260, // Adjusted to accommodate legend\n        top: 20\n      }}\n      subTitlePosition=\"bottom\"\n      width={425}\n    >\n      <ChartDonutUtilization\n        data={{ x: 'Storage capacity', y: 45 }}\n        labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}\n        legendData={[{ name: `Storage capacity: 45%` }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at  90%' }]}\n        legendOrientation=\"vertical\"\n        subTitle=\"of 100 GBps\"\n        title=\"45%\"\n        thresholds={[{ value: 60 }, { value: 90 }]}\n      />\n    </ChartDonutThreshold>\n  </div>\n)","title":"Small with subtitle","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This is a small donut utilization chart with static thresholds with right aligned legend and bottom aligned subtitle.`}
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
      {`Learn to build a donut utilization chart using a Katacoda tutorial starting with a simple chart, adding thresholds, tooltips, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"https://katacoda.com/patternfly/courses/react-charts/donut-utilization-chart"}}>
        {`Start course`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"id":"donut-utilization-examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Donut utilization examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Right aligned legend"])}
    {React.createElement(pageData.examples["Inverted with right aligned legend"])}
    {React.createElement(pageData.examples["Right aligned vertical legend"])}
    {React.createElement(pageData.examples["Bottom aligned legend"])}
    {React.createElement(pageData.examples["Small"])}
    {React.createElement(pageData.examples["Small with right aligned legend"])}
    {React.createElement(pageData.examples["Small with bottom aligned subtitle"])}
    {React.createElement(pageData.examples["Small with right aligned subtitle"])}
    <AutoLinkHeader {...{"id":"donut-utilization-threshold-examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Donut utilization threshold examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Static thresholds"])}
    {React.createElement(pageData.examples["Static thresholds with right aligned legend"])}
    {React.createElement(pageData.examples["Inverted static thresholds with right aligned legend"])}
    {React.createElement(pageData.examples["Static thresholds with custom legend"])}
    {React.createElement(pageData.examples["Static thresholds with bottom aligned legend"])}
    {React.createElement(pageData.examples["Small with static thresholds"])}
    {React.createElement(pageData.examples["Small with static thresholds and right aligned legend"])}
    {React.createElement(pageData.examples["Small with subtitle"])}
    {React.createElement(pageData.examples["Small with right aligned subtitle"])}
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
    </ul>
  </React.Fragment>
);
Component.displayName = 'ChartsDonutUtilizationChartReactDocs';
Component.pageData = pageData;

export default Component;
