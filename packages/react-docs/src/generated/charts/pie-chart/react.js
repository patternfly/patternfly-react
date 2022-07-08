import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';
const pageData = {
  "id": "Pie chart",
  "section": "charts",
  "source": "react",
  "slug": "/charts/pie-chart/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-charts/src/components/ChartPie/examples/ChartPie.md",
  "propComponents": [
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
    }
  ],
  "examples": [
    "Basic with right aligned legend",
    "Orange with right aligned legend",
    "Multi-color (ordered) with bottom aligned legend"
  ]
};
pageData.liveContext = {
  ChartPie,
  ChartThemeColor
};
pageData.examples = {
  'Basic with right aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartPie } from '@patternfly/react-charts';\n\nconst BasicWithRightAlignedLegend = () => (\n  <div style={{ height: '230px', width: '350px' }}>\n    <ChartPie\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Pie chart example\"\n      constrainToVisibleArea\n      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}\n      height={230}\n      labels={({ datum }) => `${datum.x}: ${datum.y}`}\n      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}\n      legendOrientation=\"vertical\"\n      legendPosition=\"right\"\n      padding={{\n        bottom: 20,\n        left: 20,\n        right: 140, // Adjusted to accommodate legend\n        top: 20\n      }}\n      width={350}\n    />\n  </div>\n)","title":"Basic with right aligned legend","lang":"js"}}>
      
    </Example>,
  'Orange with right aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartPie, ChartThemeColor } from '@patternfly/react-charts';\n\nconst OrangeWithRightAlignedLegend = () => (\n  <div style={{ height: '230px', width: '350px' }}>\n    <ChartPie\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Pie chart example\"\n      constrainToVisibleArea\n      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}\n      height={230}\n      labels={({ datum }) => `${datum.x}: ${datum.y}`}\n      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}\n      legendOrientation=\"vertical\"\n      legendPosition=\"right\"\n      padding={{\n        bottom: 20,\n        left: 20,\n        right: 140, // Adjusted to accommodate legend\n        top: 20\n      }}\n      themeColor={ChartThemeColor.orange}\n      width={350}\n    />\n  </div>\n)","title":"Orange with right aligned legend","lang":"js"}}>
      
    </Example>,
  'Multi-color (ordered) with bottom aligned legend': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ChartPie, ChartThemeColor } from '@patternfly/react-charts';\n\nconst MulticolororderedWithBottomAlignedLegend = () => (\n  <div style={{ height: '275px', width: '300px' }}>\n    <ChartPie\n      ariaDesc=\"Average number of pets\"\n      ariaTitle=\"Pie chart example\"\n      constrainToVisibleArea\n      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}\n      height={275}\n      labels={({ datum }) => `${datum.x}: ${datum.y}`}\n      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}\n      legendPosition=\"bottom\"\n      padding={{\n        bottom: 65,\n        left: 20,\n        right: 20,\n        top: 20\n      }}\n      themeColor={ChartThemeColor.multiOrdered}\n      width={300}\n    />\n  </div>\n)","title":"Multi-color (ordered) with bottom aligned legend","lang":"js"}}>
      
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
      {`Learn to build a pie chart using a Katacoda tutorial starting with a simple chart, adding tooltips, a legend, and concluding by changing the theme color. You'll learn how to use React chart components together to build a consistent user experience.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"https://katacoda.com/patternfly/courses/react-charts/pie-chart"}}>
        {`Start course`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic with right aligned legend"])}
    {React.createElement(pageData.examples["Orange with right aligned legend"])}
    {React.createElement(pageData.examples["Multi-color (ordered) with bottom aligned legend"])}
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
          {`ChartPie`}
        </code>
        {` props, see `}
        <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/docs/victory-pie"}}>
          {`VictoryPie`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ChartsPieChartReactDocs';
Component.pageData = pageData;

export default Component;
