import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../react-core/src/layouts/Grid/examples/./grid.css';
const pageData = {
  "id": "Grid",
  "section": "layouts",
  "source": "react",
  "slug": "/layouts/grid/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/layouts/Grid/examples/Grid.md",
  "propComponents": [
    {
      "name": "Grid",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the Grid layout",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the Grid layout",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "React.ElementType<any> | React.ComponentType<any>",
          "description": "Sets the base component to render. defaults to div",
          "defaultValue": "'div'"
        },
        {
          "name": "hasGutter",
          "type": "boolean",
          "description": "Adds space between children."
        },
        {
          "name": "lg",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns all grid items should span on a large device"
        },
        {
          "name": "md",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns all grid items should span on a medium device"
        },
        {
          "name": "order",
          "type": "{\n  default?: string;\n  md?: string;\n  lg?: string;\n  xl?: string;\n  '2xl'?: string;\n}",
          "description": "Modifies the flex layout element order property"
        },
        {
          "name": "sm",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns all grid items should span on a small device"
        },
        {
          "name": "span",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "The number of rows a column in the grid should span.  Value should be a number 1-12",
          "defaultValue": "null"
        },
        {
          "name": "xl",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns all grid items should span on a xLarge device"
        },
        {
          "name": "xl2",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns all grid items should span on a 2xLarge device"
        }
      ]
    },
    {
      "name": "GridItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the Grid Layout Item",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the Grid Layout Item",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "React.ElementType<any> | React.ComponentType<any>",
          "description": "Sets the base component to render. defaults to div",
          "defaultValue": "'div'"
        },
        {
          "name": "lg",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns the grid item spans on large device. Value should be a number 1-12"
        },
        {
          "name": "lgOffset",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns the grid item is offset on large device. Value should be a number 1-12"
        },
        {
          "name": "lgRowSpan",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of rows the grid item spans on large device. Value should be a number 1-12"
        },
        {
          "name": "md",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns the grid item spans on medium device. Value should be a number 1-12"
        },
        {
          "name": "mdOffset",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns the grid item is offset on medium device. Value should be a number 1-12"
        },
        {
          "name": "mdRowSpan",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of rows the grid item spans on medium device. Value should be a number 1-12"
        },
        {
          "name": "offset",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns a grid item is offset",
          "defaultValue": "null"
        },
        {
          "name": "order",
          "type": "{\n  default?: string;\n  md?: string;\n  lg?: string;\n  xl?: string;\n  '2xl'?: string;\n}",
          "description": "Modifies the flex layout element order property"
        },
        {
          "name": "rowSpan",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of rows the grid item spans. Value should be a number 1-12",
          "defaultValue": "null"
        },
        {
          "name": "sm",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns the grid item spans on small device. Value should be a number 1-12"
        },
        {
          "name": "smOffset",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns the grid item is offset on small device. Value should be a number 1-12"
        },
        {
          "name": "smRowSpan",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of rows the grid item spans on medium device. Value should be a number 1-12"
        },
        {
          "name": "span",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns the grid item spans. Value should be a number 1-12",
          "defaultValue": "null"
        },
        {
          "name": "xl",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns the grid item spans on xLarge device. Value should be a number 1-12"
        },
        {
          "name": "xl2",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns the grid item spans on 2xLarge device. Value should be a number 1-12"
        },
        {
          "name": "xl2Offset",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns the grid item is offset on 2xLarge device. Value should be a number 1-12"
        },
        {
          "name": "xl2RowSpan",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of rows the grid item spans on 2xLarge device. Value should be a number 1-12"
        },
        {
          "name": "xlOffset",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of columns the grid item is offset on xLarge device. Value should be a number 1-12"
        },
        {
          "name": "xlRowSpan",
          "type": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",
          "description": "the number of rows the grid item spans on large device. Value should be a number 1-12"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-l-grid"
  ],
  "examples": [
    "Basic",
    "With gutters",
    "With overrides",
    "Ordering",
    "Responsive ordering",
    "Grouped ordering",
    "Alternative components"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Grid, GridItem } from '@patternfly/react-core';\n\nconst Basic = () => (\n  <Grid>\n    <GridItem span={8}>span = 8</GridItem>\n    <GridItem span={4} rowSpan={2}>\n      span = 4, rowSpan = 2\n    </GridItem>\n    <GridItem span={2} rowSpan={3}>\n      span = 2, rowSpan = 3\n    </GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={4}>span = 4</GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={4}>span = 4</GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={4}>span = 4</GridItem>\n    <GridItem span={4}>span = 4</GridItem>\n  </Grid>\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'With gutters': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Grid, GridItem } from '@patternfly/react-core';\n\nconst WithGutters = () => (\n  <Grid hasGutter>\n    <GridItem span={8}>span = 8</GridItem>\n    <GridItem span={4} rowSpan={2}>\n      span = 4, rowSpan = 2\n    </GridItem>\n    <GridItem span={2} rowSpan={3}>\n      span = 2, rowSpan = 3\n    </GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={4}>span = 4</GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={4}>span = 4</GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={4}>span = 4</GridItem>\n    <GridItem span={4}>span = 4</GridItem>\n  </Grid>\n)","title":"With gutters","lang":"js"}}>
      
    </Example>,
  'With overrides': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Grid, GridItem } from '@patternfly/react-core';\n\nconst WithOverrides = () => (\n  <Grid sm={6} md={4} lg={3} xl2={1}>\n    <GridItem span={3} rowSpan={2}>\n      span = 3 rowSpan= 2\n    </GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n  </Grid>\n)","title":"With overrides","lang":"js"}}>
      
    </Example>,
  'Ordering': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Grid, GridItem } from '@patternfly/react-core';\n\nconst Ordering = () => (\n  <Grid hasGutter span={3}>\n    <GridItem order={{default: \"2\"}}>Item A</GridItem>\n    <GridItem>Item B</GridItem>\n    <GridItem order={{default: \"-1\"}}>Item C</GridItem>\n  </Grid>\n)","title":"Ordering","lang":"js"}}>
      
    </Example>,
  'Responsive ordering': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Grid, GridItem } from '@patternfly/react-core';\n\nconst ResponsiveOrdering = () => (\n  <Grid hasGutter span={3}>\n    <GridItem order={{lg: \"2\"}}>Item A</GridItem>\n    <GridItem>Item B</GridItem>\n    <GridItem order={{default: \"-1\", md: \"1\"}}>Item C</GridItem>\n  </Grid>\n)","title":"Responsive ordering","lang":"js"}}>
      
    </Example>,
  'Grouped ordering': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Grid, GridItem } from '@patternfly/react-core';\n\nconst GroupedOrdering = () => (\n  <Grid hasGutter span={12}>\n    <Grid hasGutter span={6} order={{default: \"2\"}}>\n      <GridItem order={{default: \"3\"}}>Set 1, Item A</GridItem>\n      <GridItem order={{default: \"1\"}}>Set 1, Item B</GridItem>\n      <GridItem>Set 1, Item C</GridItem>\n      <GridItem order={{default: \"2\"}}>Set 1, Item D</GridItem>\n    </Grid>\n    <Grid hasGutter span={6}>\n      <GridItem order={{default: \"2\"}}>Set 2, Item A</GridItem>\n      <GridItem order={{default: \"1\"}}>Set 2, Item B</GridItem>\n      <GridItem>Set 2, Item C</GridItem>\n      <GridItem order={{default: \"2\"}}>Set 2, Item D</GridItem>\n    </Grid>\n  </Grid>\n)","title":"Grouped ordering","lang":"js"}}>
      
    </Example>,
  'Alternative components': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Grid, GridItem } from '@patternfly/react-core';\n\nconst AlternativeComponents = () => (\n  <Grid component='ul'>\n    <GridItem component='li'>Grid item</GridItem>\n    <GridItem component='li'>Grid item</GridItem>\n    <GridItem component='li'>Grid item</GridItem>\n    <GridItem component='li'>Grid item</GridItem>\n    <GridItem component='li'>Grid item</GridItem>\n  </Grid>\n)","title":"Alternative components","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With gutters"])}
    {React.createElement(pageData.examples["With overrides"])}
    <AutoLinkHeader {...{"id":"ordering","size":"h2","className":"ws-title ws-h2"}}>
      {`Ordering`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Ordering"])}
    {React.createElement(pageData.examples["Responsive ordering"])}
    {React.createElement(pageData.examples["Grouped ordering"])}
    {React.createElement(pageData.examples["Alternative components"])}
  </React.Fragment>
);
Component.displayName = 'LayoutsGridReactDocs';
Component.pageData = pageData;

export default Component;
