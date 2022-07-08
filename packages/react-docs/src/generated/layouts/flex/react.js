import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../react-core/src/layouts/Flex/examples/./flex.css';
const pageData = {
  "id": "Flex",
  "section": "layouts",
  "source": "react",
  "slug": "/layouts/flex/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/layouts/Flex/examples/Flex.md",
  "propComponents": [
    {
      "name": "Flex",
      "description": "",
      "props": [
        {
          "name": "align",
          "type": "{\n  default?: 'alignLeft' | 'alignRight';\n  sm?: 'alignLeft' | 'alignRight';\n  md?: 'alignLeft' | 'alignRight';\n  lg?: 'alignLeft' | 'alignRight';\n  xl?: 'alignLeft' | 'alignRight';\n  '2xl'?: 'alignLeft' | 'alignRight';\n}",
          "description": "Value to use for margin: auto at various breakpoints"
        },
        {
          "name": "alignContent",
          "type": "{\n  default?:\n    | 'alignContentFlexStart'\n    | 'alignContentFlexEnd'\n    | 'alignContentCenter'\n    | 'alignContentStretch'\n    | 'alignContentSpaceBetween'\n    | 'alignContentSpaceAround';\n  sm?:\n    | 'alignContentFlexStart'\n    | 'alignContentFlexEnd'\n    | 'alignContentCenter'\n    | 'alignContentStretch'\n    | 'alignContentSpaceBetween'\n    | 'alignContentSpaceAround';\n  md?:\n    | 'alignContentFlexStart'\n    | 'alignContentFlexEnd'\n    | 'alignContentCenter'\n    | 'alignContentStretch'\n    | 'alignContentSpaceBetween'\n    | 'alignContentSpaceAround';\n  lg?:\n    | 'alignContentFlexStart'\n    | 'alignContentFlexEnd'\n    | 'alignContentCenter'\n    | 'alignContentStretch'\n    | 'alignContentSpaceBetween'\n    | 'alignContentSpaceAround';\n  xl?:\n    | 'alignContentFlexStart'\n    | 'alignContentFlexEnd'\n    | 'alignContentCenter'\n    | 'alignContentStretch'\n    | 'alignContentSpaceBetween'\n    | 'alignContentSpaceAround';\n  '2xl'?:\n    | 'alignContentFlexStart'\n    | 'alignContentFlexEnd'\n    | 'alignContentCenter'\n    | 'alignContentStretch'\n    | 'alignContentSpaceBetween'\n    | 'alignContentSpaceAround';\n}",
          "description": "Value to add for align-content property at various breakpoints"
        },
        {
          "name": "alignItems",
          "type": "{\n  default?:\n    | 'alignItemsFlexStart'\n    | 'alignItemsFlexEnd'\n    | 'alignItemsCenter'\n    | 'alignItemsStretch'\n    | 'alignItemsBaseline';\n  sm?: 'alignItemsFlexStart' | 'alignItemsFlexEnd' | 'alignItemsCenter' | 'alignItemsStretch' | 'alignItemsBaseline';\n  md?: 'alignItemsFlexStart' | 'alignItemsFlexEnd' | 'alignItemsCenter' | 'alignItemsStretch' | 'alignItemsBaseline';\n  lg?: 'alignItemsFlexStart' | 'alignItemsFlexEnd' | 'alignItemsCenter' | 'alignItemsStretch' | 'alignItemsBaseline';\n  xl?: 'alignItemsFlexStart' | 'alignItemsFlexEnd' | 'alignItemsCenter' | 'alignItemsStretch' | 'alignItemsBaseline';\n  '2xl'?:\n    | 'alignItemsFlexStart'\n    | 'alignItemsFlexEnd'\n    | 'alignItemsCenter'\n    | 'alignItemsStretch'\n    | 'alignItemsBaseline';\n}",
          "description": "Value to add for align-items property at various breakpoints"
        },
        {
          "name": "alignSelf",
          "type": "{\n  default?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';\n  sm?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';\n  md?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';\n  lg?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';\n  xl?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';\n  '2xl'?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';\n}",
          "description": "Value to add for align-self property at various breakpoints"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the Flex layout",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the Flex layout",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "React.ElementType<any> | React.ComponentType<any>",
          "description": "Sets the base component to render. defaults to div",
          "defaultValue": "'div'"
        },
        {
          "name": "direction",
          "type": "{\n  default?: 'column' | 'columnReverse' | 'row' | 'rowReverse';\n  sm?: 'column' | 'columnReverse' | 'row' | 'rowReverse';\n  md?: 'column' | 'columnReverse' | 'row' | 'rowReverse';\n  lg?: 'column' | 'columnReverse' | 'row' | 'rowReverse';\n  xl?: 'column' | 'columnReverse' | 'row' | 'rowReverse';\n  '2xl'?: 'column' | 'columnReverse' | 'row' | 'rowReverse';\n}",
          "description": "Value to add for flex-direction property at various breakpoints"
        },
        {
          "name": "display",
          "type": "{\n  default?: 'inlineFlex';\n  sm?: 'flex' | 'inlineFlex';\n  md?: 'flex' | 'inlineFlex';\n  lg?: 'flex' | 'inlineFlex';\n  xl?: 'flex' | 'inlineFlex';\n  '2xl'?: 'flex' | 'inlineFlex';\n}",
          "description": "Value to set to display property at various breakpoints"
        },
        {
          "name": "flex",
          "type": "{\n  default?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';\n  sm?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';\n  md?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';\n  lg?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';\n  xl?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';\n  '2xl'?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';\n}",
          "description": "Value to add for flex property at various breakpoints"
        },
        {
          "name": "flexWrap",
          "type": "{\n  default?: 'wrap' | 'wrapReverse' | 'nowrap';\n  sm?: 'wrap' | 'wrapReverse' | 'nowrap';\n  md?: 'wrap' | 'wrapReverse' | 'nowrap';\n  lg?: 'wrap' | 'wrapReverse' | 'nowrap';\n  xl?: 'wrap' | 'wrapReverse' | 'nowrap';\n  '2xl'?: 'wrap' | 'wrapReverse' | 'nowrap';\n}",
          "description": "Value to set for flex-wrap property at various breakpoints"
        },
        {
          "name": "fullWidth",
          "type": "{\n  default?: 'fullWidth';\n  sm?: 'fullWidth';\n  md?: 'fullWidth';\n  lg?: 'fullWidth';\n  xl?: 'fullWidth';\n  '2xl'?: 'fullWidth';\n}",
          "description": "Whether to set width: 100% at various breakpoints"
        },
        {
          "name": "grow",
          "type": "{\n  default?: 'grow';\n  sm?: 'grow';\n  md?: 'grow';\n  lg?: 'grow';\n  xl?: 'grow';\n  '2xl'?: 'grow';\n}",
          "description": "Whether to add flex: grow at various breakpoints"
        },
        {
          "name": "justifyContent",
          "type": "{\n  default?:\n    | 'justifyContentFlexStart'\n    | 'justifyContentFlexEnd'\n    | 'justifyContentCenter'\n    | 'justifyContentSpaceBetween'\n    | 'justifyContentSpaceAround'\n    | 'justifyContentSpaceEvenly';\n  sm?:\n    | 'justifyContentFlexStart'\n    | 'justifyContentFlexEnd'\n    | 'justifyContentCenter'\n    | 'justifyContentSpaceBetween'\n    | 'justifyContentSpaceAround'\n    | 'justifyContentSpaceEvenly';\n  md?:\n    | 'justifyContentFlexStart'\n    | 'justifyContentFlexEnd'\n    | 'justifyContentCenter'\n    | 'justifyContentSpaceBetween'\n    | 'justifyContentSpaceAround'\n    | 'justifyContentSpaceEvenly';\n  lg?:\n    | 'justifyContentFlexStart'\n    | 'justifyContentFlexEnd'\n    | 'justifyContentCenter'\n    | 'justifyContentSpaceBetween'\n    | 'justifyContentSpaceAround'\n    | 'justifyContentSpaceEvenly';\n  xl?:\n    | 'justifyContentFlexStart'\n    | 'justifyContentFlexEnd'\n    | 'justifyContentCenter'\n    | 'justifyContentSpaceBetween'\n    | 'justifyContentSpaceAround'\n    | 'justifyContentSpaceEvenly';\n  '2xl'?:\n    | 'justifyContentFlexStart'\n    | 'justifyContentFlexEnd'\n    | 'justifyContentCenter'\n    | 'justifyContentSpaceBetween'\n    | 'justifyContentSpaceAround'\n    | 'justifyContentSpaceEvenly';\n}",
          "description": "Value to add for justify-content property at various breakpoints"
        },
        {
          "name": "order",
          "type": "{\n  default?: string;\n  md?: string;\n  lg?: string;\n  xl?: string;\n  '2xl'?: string;\n}",
          "description": "Modifies the flex layout element order property"
        },
        {
          "name": "shrink",
          "type": "{\n  default?: 'shrink';\n  sm?: 'shrink';\n  md?: 'shrink';\n  lg?: 'shrink';\n  xl?: 'shrink';\n  '2xl'?: 'shrink';\n}",
          "description": "Whether to add flex: shrink at various breakpoints"
        },
        {
          "name": "spaceItems",
          "type": "{\n  default?:\n    | 'spaceItemsNone'\n    | 'spaceItemsXs'\n    | 'spaceItemsSm'\n    | 'spaceItemsMd'\n    | 'spaceItemsLg'\n    | 'spaceItemsXl'\n    | 'spaceItems2xl'\n    | 'spaceItems3xl'\n    | 'spaceItems4xl';\n  sm?:\n    | 'spaceItemsNone'\n    | 'spaceItemsXs'\n    | 'spaceItemsSm'\n    | 'spaceItemsMd'\n    | 'spaceItemsLg'\n    | 'spaceItemsXl'\n    | 'spaceItems2xl'\n    | 'spaceItems3xl'\n    | 'spaceItems4xl';\n  md?:\n    | 'spaceItemsNone'\n    | 'spaceItemsXs'\n    | 'spaceItemsSm'\n    | 'spaceItemsMd'\n    | 'spaceItemsLg'\n    | 'spaceItemsXl'\n    | 'spaceItems2xl'\n    | 'spaceItems3xl'\n    | 'spaceItems4xl';\n  lg?:\n    | 'spaceItemsNone'\n    | 'spaceItemsXs'\n    | 'spaceItemsSm'\n    | 'spaceItemsMd'\n    | 'spaceItemsLg'\n    | 'spaceItemsXl'\n    | 'spaceItems2xl'\n    | 'spaceItems3xl'\n    | 'spaceItems4xl';\n  xl?:\n    | 'spaceItemsNone'\n    | 'spaceItemsXs'\n    | 'spaceItemsSm'\n    | 'spaceItemsMd'\n    | 'spaceItemsLg'\n    | 'spaceItemsXl'\n    | 'spaceItems2xl'\n    | 'spaceItems3xl'\n    | 'spaceItems4xl';\n  '2xl'?:\n    | 'spaceItemsNone'\n    | 'spaceItemsXs'\n    | 'spaceItemsSm'\n    | 'spaceItemsMd'\n    | 'spaceItemsLg'\n    | 'spaceItemsXl'\n    | 'spaceItems2xl'\n    | 'spaceItems3xl'\n    | 'spaceItems4xl';\n}",
          "description": "Space items at various breakpoints"
        },
        {
          "name": "spacer",
          "type": "{\n  default?:\n    | 'spacerNone'\n    | 'spacerXs'\n    | 'spacerSm'\n    | 'spacerMd'\n    | 'spacerLg'\n    | 'spacerXl'\n    | 'spacer2xl'\n    | 'spacer3xl'\n    | 'spacer4xl';\n  sm?:\n    | 'spacerNone'\n    | 'spacerXs'\n    | 'spacerSm'\n    | 'spacerMd'\n    | 'spacerLg'\n    | 'spacerXl'\n    | 'spacer2xl'\n    | 'spacer3xl'\n    | 'spacer4xl';\n  md?:\n    | 'spacerNone'\n    | 'spacerXs'\n    | 'spacerSm'\n    | 'spacerMd'\n    | 'spacerLg'\n    | 'spacerXl'\n    | 'spacer2xl'\n    | 'spacer3xl'\n    | 'spacer4xl';\n  lg?:\n    | 'spacerNone'\n    | 'spacerXs'\n    | 'spacerSm'\n    | 'spacerMd'\n    | 'spacerLg'\n    | 'spacerXl'\n    | 'spacer2xl'\n    | 'spacer3xl'\n    | 'spacer4xl';\n  xl?:\n    | 'spacerNone'\n    | 'spacerXs'\n    | 'spacerSm'\n    | 'spacerMd'\n    | 'spacerLg'\n    | 'spacerXl'\n    | 'spacer2xl'\n    | 'spacer3xl'\n    | 'spacer4xl';\n  '2xl'?:\n    | 'spacerNone'\n    | 'spacerXs'\n    | 'spacerSm'\n    | 'spacerMd'\n    | 'spacerLg'\n    | 'spacerXl'\n    | 'spacer2xl'\n    | 'spacer3xl'\n    | 'spacer4xl';\n}",
          "description": "Spacers at various breakpoints"
        }
      ]
    },
    {
      "name": "FlexItem",
      "description": "",
      "props": [
        {
          "name": "align",
          "type": "{\n  default?: 'alignLeft' | 'alignRight';\n  sm?: 'alignLeft' | 'alignRight';\n  md?: 'alignLeft' | 'alignRight';\n  lg?: 'alignLeft' | 'alignRight';\n  xl?: 'alignLeft' | 'alignRight';\n  '2xl'?: 'alignLeft' | 'alignRight';\n}",
          "description": "Value to use for margin: auto at various breakpoints"
        },
        {
          "name": "alignSelf",
          "type": "{\n  default?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';\n  sm?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';\n  md?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';\n  lg?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';\n  xl?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';\n  '2xl'?: 'alignSelfFlexStart' | 'alignSelfFlexEnd' | 'alignSelfCenter' | 'alignSelfStretch' | 'alignSelfBaseline';\n}",
          "description": "Value to add for align-self property at various breakpoints"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the Flex layout",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the Flex layout",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "React.ElementType<any> | React.ComponentType<any>",
          "description": "Sets the base component to render. defaults to div",
          "defaultValue": "'div'"
        },
        {
          "name": "flex",
          "type": "{\n  default?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';\n  sm?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';\n  md?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';\n  lg?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';\n  xl?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';\n  '2xl'?: 'flexDefault' | 'flexNone' | 'flex_1' | 'flex_2' | 'flex_3' | 'flex_4';\n}",
          "description": "Value to add for flex property at various breakpoints"
        },
        {
          "name": "fullWidth",
          "type": "{\n  default?: 'fullWidth';\n  sm?: 'fullWidth';\n  md?: 'fullWidth';\n  lg?: 'fullWidth';\n  xl?: 'fullWidth';\n  '2xl'?: 'fullWidth';\n}",
          "description": "Whether to set width: 100% at various breakpoints"
        },
        {
          "name": "grow",
          "type": "{\n  default?: 'grow';\n  sm?: 'grow';\n  md?: 'grow';\n  lg?: 'grow';\n  xl?: 'grow';\n  '2xl'?: 'grow';\n}",
          "description": "Whether to add flex: grow at various breakpoints"
        },
        {
          "name": "order",
          "type": "{\n  default?: string;\n  md?: string;\n  lg?: string;\n  xl?: string;\n  '2xl'?: string;\n}",
          "description": "Modifies the flex layout element order property"
        },
        {
          "name": "shrink",
          "type": "{\n  default?: 'shrink';\n  sm?: 'shrink';\n  md?: 'shrink';\n  lg?: 'shrink';\n  xl?: 'shrink';\n  '2xl'?: 'shrink';\n}",
          "description": "Whether to add flex: shrink at various breakpoints"
        },
        {
          "name": "spacer",
          "type": "{\n  default?:\n    | 'spacerNone'\n    | 'spacerXs'\n    | 'spacerSm'\n    | 'spacerMd'\n    | 'spacerLg'\n    | 'spacerXl'\n    | 'spacer2xl'\n    | 'spacer3xl'\n    | 'spacer4xl';\n  sm?:\n    | 'spacerNone'\n    | 'spacerXs'\n    | 'spacerSm'\n    | 'spacerMd'\n    | 'spacerLg'\n    | 'spacerXl'\n    | 'spacer2xl'\n    | 'spacer3xl'\n    | 'spacer4xl';\n  md?:\n    | 'spacerNone'\n    | 'spacerXs'\n    | 'spacerSm'\n    | 'spacerMd'\n    | 'spacerLg'\n    | 'spacerXl'\n    | 'spacer2xl'\n    | 'spacer3xl'\n    | 'spacer4xl';\n  lg?:\n    | 'spacerNone'\n    | 'spacerXs'\n    | 'spacerSm'\n    | 'spacerMd'\n    | 'spacerLg'\n    | 'spacerXl'\n    | 'spacer2xl'\n    | 'spacer3xl'\n    | 'spacer4xl';\n  xl?:\n    | 'spacerNone'\n    | 'spacerXs'\n    | 'spacerSm'\n    | 'spacerMd'\n    | 'spacerLg'\n    | 'spacerXl'\n    | 'spacer2xl'\n    | 'spacer3xl'\n    | 'spacer4xl';\n  '2xl'?:\n    | 'spacerNone'\n    | 'spacerXs'\n    | 'spacerSm'\n    | 'spacerMd'\n    | 'spacerLg'\n    | 'spacerXl'\n    | 'spacer2xl'\n    | 'spacer3xl'\n    | 'spacer4xl';\n}",
          "description": "Spacers at various breakpoints"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-l-flex"
  ],
  "examples": [
    "Basic",
    "Nesting",
    "Nested with items",
    "Individually spaced",
    "Spacing xl",
    "Spacing none",
    "Default layout",
    "Inline",
    "Using canGrow",
    "Adjusting width",
    "Specifying column widths",
    "Column layout",
    "Stacking elements",
    "Nesting elements in columns",
    "Switching between direction column and row",
    "Controlling width of text",
    "Aligning right",
    "Align right on single item",
    "Align right on multiple groups",
    "Align adjacent content",
    "Align self flex end",
    "Align self center",
    "Align self baseline",
    "Align self stretch",
    "Justify content flex end",
    "Justify content space between",
    "Justify content flex start",
    "First last ordering",
    "Responsive first last ordering",
    "Ordering",
    "Responsive ordering",
    "Alternative components"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst Basic = () => (\n  <Flex>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Nesting': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst Nesting = () => (\n  <Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Nesting","lang":"js"}}>
      
    </Example>,
  'Nested with items': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst NestedWithItems = () => (\n  <Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Nested with items","lang":"js"}}>
      
    </Example>,
  'Individually spaced': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst IndividuallySpaced = () => (\n  <Flex>\n    <FlexItem spacer={{ default: 'spacerNone' }}>Item - none</FlexItem>\n    <FlexItem spacer={{ default: 'spacerXs' }}>Item - xs</FlexItem>\n    <FlexItem spacer={{ default: 'spacerSm' }}>Item -sm</FlexItem>\n    <FlexItem spacer={{ default: 'spacerMd' }}>Item - md</FlexItem>\n    <FlexItem spacer={{ default: 'spacerLg' }}>Item - lg</FlexItem>\n    <FlexItem spacer={{ default: 'spacerXl' }}>Item - xl</FlexItem>\n    <FlexItem spacer={{ default: 'spacer2xl' }}>Item - 2xl</FlexItem>\n    <FlexItem spacer={{ default: 'spacer3xl' }}>Item - 3xl</FlexItem>\n  </Flex>\n)","title":"Individually spaced","lang":"js"}}>
      
    </Example>,
  'Spacing xl': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst SpacingXl = () => (\n  <Flex spaceItems={{ default: 'spaceItemsXl' }}>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n)","title":"Spacing xl","lang":"js"}}>
      
    </Example>,
  'Spacing none': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst SpacingNone = () => (\n  <Flex spaceItems={{ default: 'spaceItemsNone' }}>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n)","title":"Spacing none","lang":"js"}}>
      
    </Example>,
  'Default layout': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst DefaultLayout = () => (\n  <Flex className=\"example-border\">\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n)","title":"Default layout","lang":"js"}}>
      
    </Example>,
  'Inline': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst Inline = () => (\n  <Flex className=\"example-border\" display={{ default: 'inlineFlex' }}>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n)","title":"Inline","lang":"js"}}>
      
    </Example>,
  'Using canGrow': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst UsingCanGrow = () => (\n  <Flex>\n    <Flex grow={{ default: 'grow' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Using canGrow","lang":"js"}}>
      
    </Example>,
  'Adjusting width': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst AdjustingWidth = () => (\n  <Flex>\n    <Flex flex={{ default: 'flex_1' }}>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex flex={{ default: 'flex_1' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex flex={{ default: 'flex_1' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Adjusting width","lang":"js"}}>
      
    </Example>,
  'Specifying column widths': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst SpecifyingColumnWidths = () => (\n  <Flex>\n    <Flex flex={{ default: 'flex_1' }}>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex flex={{ default: 'flex_2' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex flex={{ default: 'flex_3' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Specifying column widths","lang":"js"}}>
      
    </Example>,
  'Column layout': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst ColumnLayout = () => (\n  <Flex direction={{ default: 'column' }}>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n)","title":"Column layout","lang":"js"}}>
      
    </Example>,
  'Stacking elements': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst StackingElements = () => (\n  <Flex direction={{ default: 'column' }}>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Stacking elements","lang":"js"}}>
      
    </Example>,
  'Nesting elements in columns': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst NestingElementsInColumns = () => (\n  <Flex>\n    <Flex direction={{ default: 'column' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex direction={{ default: 'column' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Nesting elements in columns","lang":"js"}}>
      
    </Example>,
  'Switching between direction column and row': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst SwitchingBetweenDirectionColumnAndRow = () => (\n  <Flex direction={{ default: 'column', lg: 'row' }}>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex direction={{ default: 'column' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Switching between direction column and row","lang":"js"}}>
      
    </Example>,
  'Controlling width of text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst ControllingWidthOfText = () => (\n  <Flex direction={{ default: 'column', lg: 'row' }}>\n    <Flex flex={{ default: 'flex_1' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi modi temporibus, alias qui obcaecati ullam dolor nam, nulla magni iste rem praesentium numquam provident amet ut nesciunt harum accusamus.</FlexItem>\n    </Flex>\n    <Flex direction={{ default: 'column' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Controlling width of text","lang":"js"}}>
      
    </Example>,
  'Aligning right': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst AligningRight = () => (\n  <Flex className=\"example-border\">\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem align={{ default: 'alignRight' }}>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n)","title":"Aligning right","lang":"js"}}>
      
    </Example>,
  'Align right on single item': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst AlignRightOnSingleItem = () => (\n  <Flex className=\"example-border\">\n    <FlexItem align={{ default: 'alignRight' }}>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n)","title":"Align right on single item","lang":"js"}}>
      
    </Example>,
  'Align right on multiple groups': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst AlignRightOnMultipleGroups = () => (\n  <Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex align={{ default: 'alignRight' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex align={{ default: 'alignRight' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Align right on multiple groups","lang":"js"}}>
      
    </Example>,
  'Align adjacent content': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst AlignAdjacentContent = () => (\n  <Flex>\n    <Flex flex={{ default: 'flex_1' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Align adjacent content","lang":"js"}}>
      
    </Example>,
  'Align self flex end': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst AlignSelfFlexEnd = () => (\n  <Flex>\n    <Flex direction={{ default: 'column' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex direction={{ default: 'column' }} alignSelf={{ default: 'alignSelfFlexEnd' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Align self flex end","lang":"js"}}>
      
    </Example>,
  'Align self center': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst AlignSelfCenter = () => (\n  <Flex>\n    <Flex direction={{ default: 'column' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex direction={{ default: 'column' }} alignSelf={{ default: 'alignSelfCenter' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Align self center","lang":"js"}}>
      
    </Example>,
  'Align self baseline': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst AlignSelfBaseline = () => (\n  <Flex>\n    <Flex direction={{ default: 'column' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex direction={{ default: 'column' }} alignSelf={{ default: 'alignSelfBaseline' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Align self baseline","lang":"js"}}>
      
    </Example>,
  'Align self stretch': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst AlignSelfStretch = () => (\n  <Flex>\n    <Flex direction={{ default: 'column' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex direction={{ default: 'column' }} alignSelf={{ default: 'alignSelfStretch' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Align self stretch","lang":"js"}}>
      
    </Example>,
  'Justify content flex end': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst JustifyContentFlexEnd = () => (\n  <Flex className=\"example-border\" justifyContent={{ default: 'justifyContentFlexEnd' }}>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n)","title":"Justify content flex end","lang":"js"}}>
      
    </Example>,
  'Justify content space between': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem  } from '@patternfly/react-core';\n\nconst JustifyContentSpaceBetween = () => (\n  <Flex className=\"example-border\" justifyContent={{ default: 'justifyContentSpaceBetween' }}>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n)","title":"Justify content space between","lang":"js"}}>
      
    </Example>,
  'Justify content flex start': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst JustifyContentFlexStart = () => (\n  <Flex className=\"example-border\" justifyContent={{ default: 'justifyContentFlexStart' }}>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n)","title":"Justify content flex start","lang":"js"}}>
      
    </Example>,
  'First last ordering': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst FirstLastOrdering = () => (\n  <Flex className=\"example-border\">\n    <FlexItem spacer={{default: \"spacerNone\"}} order={{default: \"2\"}} >Item A</FlexItem>\n    <FlexItem>Item B</FlexItem>\n    <FlexItem spacer={{default: \"spacerMd\"}} order={{default: \"-1\"}}>Item C</FlexItem>\n  </Flex>\n)","title":"First last ordering","lang":"js"}}>
      
    </Example>,
  'Responsive first last ordering': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst ResponsiveFirstLastOrdering = () => (\n  <Flex className=\"example-border\">\n    <FlexItem spacer={{lg: \"spacerNone\"}} order={{lg: \"2\"}} >Item A</FlexItem>\n    <FlexItem spacer={{md: \"spacerNone\", lg: \"spacerMd\"}} order={{default: \"-1\", md: \"1\"}}>Item B</FlexItem>\n    <FlexItem spacer={{default: \"spacerMd\"}} order={{md: \"-1\"}}>Item C</FlexItem>\n  </Flex>\n)","title":"Responsive first last ordering","lang":"js"}}>
      
    </Example>,
  'Ordering': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst Ordering = () => (\n  <Flex className=\"example-border\">\n    <Flex spacer={{default: \"spacerNone\"}} order={{ lg: \"1\" }} className=\"example-border\">\n      <FlexItem order={{md: \"2\"}} >Set 1, Item A</FlexItem>\n      <FlexItem order={{ md: \"-1\" }}>Set 1, Item B</FlexItem>\n      <FlexItem order={{ xl: \"1\" }}>Set 1, Item C</FlexItem>\n      <FlexItem spacer={{xl: \"spacerNone\"}} order={{ xl: \"1\" }}>Set 1, Item D</FlexItem>\n    </Flex>\n    <Flex spacer={{lg: \"spacerMd\"}} className=\"example-border\">\n      <FlexItem spacer={{default: \"spacerNone\"}} order={{default: \"3\"}} >Set 2, Item A</FlexItem>\n      <FlexItem order={{ default: \"1\" }}>Set 2, Item B</FlexItem>\n      <FlexItem>Set 2, Item C</FlexItem>\n      <FlexItem spacer={{default: \"spacerMd\"}} order={{ default: \"2\" }}>Set 2, Item D</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Ordering","lang":"js"}}>
      
    </Example>,
  'Responsive ordering': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst ResponsiveOrdering = () => (\n  <Flex className=\"example-border\">\n    <Flex spacer={{default: \"spacerNone\"}} order={{ default: \"1\" }} className=\"example-border\">\n      <FlexItem spacer={{default: \"spacerNone\"}} order={{default: \"3\"}} >Set 1, Item A</FlexItem>\n      <FlexItem order={{ default: \"1\" }}>Set 1, Item B</FlexItem>\n      <FlexItem>Set 1, Item C</FlexItem>\n      <FlexItem spacer={{default: \"spacerMd\"}}>Set 1, Item D</FlexItem>\n    </Flex>\n  \n    <Flex spacer={{default: \"spacerMd\"}} className=\"example-border\">\n      <FlexItem spacer={{default: \"spacerNone\"}} order={{default: \"3\"}} >Set 2, Item A</FlexItem>\n      <FlexItem order={{ lg: \"1\" }}>Set 2, Item B</FlexItem>\n      <FlexItem>Set 2, Item C</FlexItem>\n      <FlexItem spacer={{default: \"spacerMd\"}} order={{ default: \"2\" }}>Set 2, Item D</FlexItem>\n    </Flex>\n  </Flex>\n)","title":"Responsive ordering","lang":"js"}}>
      
    </Example>,
  'Alternative components': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nconst AlternativeComponents = () => (\n  <Flex component='ul'>\n    <FlexItem component='li'>Flex item</FlexItem>\n    <FlexItem component='li'>Flex item</FlexItem>\n    <FlexItem component='li'>Flex item</FlexItem>\n    <FlexItem component='li'>Flex item</FlexItem>\n    <FlexItem component='li'>Flex item</FlexItem>\n  </Flex>\n)","title":"Alternative components","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"flex-basics","size":"h2","className":"ws-title ws-h2"}}>
      {`Flex Basics`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Nesting"])}
    {React.createElement(pageData.examples["Nested with items"])}
    <AutoLinkHeader {...{"id":"flex-spacing","size":"h3","className":"ws-title ws-h3"}}>
      {`Flex Spacing`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Individually spaced"])}
    {React.createElement(pageData.examples["Spacing xl"])}
    {React.createElement(pageData.examples["Spacing none"])}
    <AutoLinkHeader {...{"id":"flex-layout-modifiers","size":"h3","className":"ws-title ws-h3"}}>
      {`Flex layout modifiers`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default layout"])}
    {React.createElement(pageData.examples["Inline"])}
    {React.createElement(pageData.examples["Using canGrow"])}
    {React.createElement(pageData.examples["Adjusting width"])}
    {React.createElement(pageData.examples["Specifying column widths"])}
    <AutoLinkHeader {...{"id":"column-layout-modifiers","size":"h2","className":"ws-title ws-h2"}}>
      {`Column layout modifiers`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Column layout"])}
    {React.createElement(pageData.examples["Stacking elements"])}
    {React.createElement(pageData.examples["Nesting elements in columns"])}
    <AutoLinkHeader {...{"id":"responsive-layout-modifiers","size":"h2","className":"ws-title ws-h2"}}>
      {`Responsive layout modifiers`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Switching between direction column and row"])}
    {React.createElement(pageData.examples["Controlling width of text"])}
    <AutoLinkHeader {...{"id":"flex-alignment","size":"h2","className":"ws-title ws-h2"}}>
      {`Flex alignment`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Aligning right"])}
    {React.createElement(pageData.examples["Align right on single item"])}
    {React.createElement(pageData.examples["Align right on multiple groups"])}
    {React.createElement(pageData.examples["Align adjacent content"])}
    {React.createElement(pageData.examples["Align self flex end"])}
    {React.createElement(pageData.examples["Align self center"])}
    {React.createElement(pageData.examples["Align self baseline"])}
    {React.createElement(pageData.examples["Align self stretch"])}
    <AutoLinkHeader {...{"id":"flex-justification","size":"h2","className":"ws-title ws-h2"}}>
      {`Flex justification`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Justify content flex end"])}
    {React.createElement(pageData.examples["Justify content space between"])}
    {React.createElement(pageData.examples["Justify content flex start"])}
    <AutoLinkHeader {...{"id":"flex-item-order","size":"h2","className":"ws-title ws-h2"}}>
      {`Flex item order`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["First last ordering"])}
    {React.createElement(pageData.examples["Responsive first last ordering"])}
    {React.createElement(pageData.examples["Ordering"])}
    {React.createElement(pageData.examples["Responsive ordering"])}
    {React.createElement(pageData.examples["Alternative components"])}
  </React.Fragment>
);
Component.displayName = 'LayoutsFlexReactDocs';
Component.pageData = pageData;

export default Component;
