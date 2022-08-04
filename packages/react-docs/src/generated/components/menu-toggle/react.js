import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../react-core/src/components/MenuToggle/examples/./MenuToggle.css'
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import imgAvatar from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';
const pageData = {
  "id": "Menu toggle",
  "section": "components",
  "source": "react",
  "slug": "/components/menu-toggle/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/MenuToggle/examples/MenuToggle.md",
  "propComponents": [
    {
      "name": "MenuToggle",
      "description": "",
      "props": [
        {
          "name": "badge",
          "type": "BadgeProps | React.ReactNode",
          "description": "Optional badge rendered inside the toggle, after the children content"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the toggle"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the toggle"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Optional icon rendered inside the toggle, before the children content"
        },
        {
          "name": "innerRef",
          "type": "React.Ref<HTMLButtonElement>",
          "description": "Forwarded ref"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag indicating the toggle is disabled"
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Flag indicating the toggle has expanded styling"
        },
        {
          "name": "isFullHeight",
          "type": "boolean",
          "description": "Flag indicating the toggle is full height"
        },
        {
          "name": "isFullWidth",
          "type": "boolean",
          "description": "Flag indicating the toggle takes up the full width of its parent"
        },
        {
          "name": "variant",
          "type": "'default' | 'plain' | 'primary' | 'plainText' | 'secondary'",
          "description": "Variant styles of the menu toggle"
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-menu-toggle"
  ],
  "examples": [
    "Collapsed",
    "Expanded",
    "Disabled",
    "Count",
    "Primary",
    "Secondary",
    "Plain",
    "Plain with text",
    "With icon/image and text",
    "With avatar and text",
    "Full height",
    "Full width"
  ]
};
pageData.liveContext = {
  CogIcon,
  EllipsisVIcon,
  imgAvatar
};
pageData.examples = {
  'Collapsed': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { MenuToggle } from '@patternfly/react-core';\n\nconst Collapsed = () => <MenuToggle>Collapsed</MenuToggle>","title":"Collapsed","lang":"ts"}}>
      
    </Example>,
  'Expanded': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { MenuToggle } from '@patternfly/react-core';\n\nconst Expanded = () => <MenuToggle isExpanded>Expanded</MenuToggle>;","title":"Expanded","lang":"ts"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { MenuToggle } from '@patternfly/react-core';\n\nconst Disabled = () => <MenuToggle isDisabled>Disabled</MenuToggle>","title":"Disabled","lang":"ts"}}>
      
    </Example>,
  'Count': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { MenuToggle, Badge } from '@patternfly/react-core';\n\nconst Count = () => <MenuToggle badge={<Badge>4 selected</Badge>}>Count</MenuToggle>","title":"Count","lang":"ts"}}>
      
    </Example>,
  'Primary': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { MenuToggle } from '@patternfly/react-core';\nimport CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';\n\nconst Primary = () => (\n  <React.Fragment>\n    <MenuToggle variant=\"primary\">Collapsed</MenuToggle>{' '}\n    <MenuToggle variant=\"primary\" icon={<CogIcon />}>\n      Icon\n    </MenuToggle>{' '}\n    <MenuToggle variant=\"primary\" isExpanded>\n      Expanded\n    </MenuToggle>{' '}\n    <MenuToggle variant=\"primary\" isDisabled>\n      Disabled\n    </MenuToggle>\n  </React.Fragment>\n)","title":"Primary","lang":"ts"}}>
      
    </Example>,
  'Secondary': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { MenuToggle } from '@patternfly/react-core';\nimport CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';\n\nconst Secondary = () => (\n  <React.Fragment>\n    <MenuToggle variant=\"secondary\">Collapsed</MenuToggle>{' '}\n      <MenuToggle variant=\"secondary\" icon={<CogIcon />}>\n      Icon\n    </MenuToggle>{' '}\n    <MenuToggle variant=\"secondary\" isExpanded>\n      Expanded\n    </MenuToggle>{' '}\n    <MenuToggle variant=\"secondary\" isDisabled>\n      Disabled\n    </MenuToggle>\n  </React.Fragment>\n)","title":"Secondary","lang":"ts"}}>
      
    </Example>,
  'Plain': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { MenuToggle } from '@patternfly/react-core';\nimport EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';\n\nconst Plain = () => (\n  <React.Fragment>\n    <MenuToggle variant=\"plain\" aria-label=\"plain kebab\">\n      <EllipsisVIcon />\n    </MenuToggle>\n    <MenuToggle variant=\"plain\" isExpanded aria-label=\"plain expanded kebab\">\n      <EllipsisVIcon />\n    </MenuToggle>\n    <MenuToggle variant=\"plain\" isDisabled aria-label=\"disabled kebab\">\n      <EllipsisVIcon />\n    </MenuToggle>\n  </React.Fragment>\n)","title":"Plain","lang":"ts"}}>
      
    </Example>,
  'Plain with text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { MenuToggle } from '@patternfly/react-core';\n\nconst PlainWithText = () => (\n  <React.Fragment>\n    <MenuToggle variant=\"plainText\" isDisabled aria-label=\"Disabled plain menu toggle\">\n      Disabled\n    </MenuToggle>\n    &nbsp;\n    <MenuToggle variant=\"plainText\" aria-label=\"Plain menu toggle\">\n      Custom text\n    </MenuToggle>\n    <MenuToggle variant=\"plainText\" isExpanded aria-label=\"Expanded plain menu toggle\">\n      Custom text (expanded)\n    </MenuToggle>\n  </React.Fragment>\n)","title":"Plain with text","lang":"ts"}}>
      
    </Example>,
  'With icon/image and text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { MenuToggle, Avatar } from '@patternfly/react-core';\nimport CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';\n\nconst WithIconimageAndText = () => (\n  <React.Fragment>\n    <MenuToggle icon={<CogIcon />} variant=\"secondary\">Icon</MenuToggle>{' '}\n    <MenuToggle icon={<CogIcon />} variant=\"secondary\" isDisabled>Icon</MenuToggle>\n  </React.Fragment>\n)","title":"With icon/image and text","lang":"ts"}}>
      
    </Example>,
  'With avatar and text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { MenuToggle, Avatar } from '@patternfly/react-core';\nimport imgAvatar from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';\n\nconst WithAvatarAndText = () => (\n  <React.Fragment>\n    <MenuToggle icon={<Avatar src={imgAvatar} alt=\"avatar\" />}>Ned Username</MenuToggle>{' '}\n    <MenuToggle icon={<Avatar src={imgAvatar} alt=\"avatar\" />} isExpanded>Ned Username</MenuToggle>{' '}\n    <MenuToggle icon={<Avatar src={imgAvatar} alt=\"avatar\" />} isDisabled>Ned Username</MenuToggle>\n  </React.Fragment>\n)","title":"With avatar and text","lang":"ts"}}>
      
    </Example>,
  'Full height': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { MenuToggle } from '@patternfly/react-core';\n\nconst FullHeight = () => (\n  <div style={{ height: \"80px\" }}>\n    <MenuToggle isFullHeight aria-label=\"Full height menu toggle\">\n      Full height\n    </MenuToggle>\n  </div>\n)","title":"Full height","lang":"ts"}}>
      
    </Example>,
  'Full width': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { MenuToggle } from '@patternfly/react-core';\n\nconst fullWidth: React.FunctionComponent = () => {\n  return (\n    <MenuToggle isFullWidth aria-label=\"Full width menu toggle\" >\n      Full width \n    </MenuToggle>\n  );\n}","title":"Full width","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Collapsed"])}
    {React.createElement(pageData.examples["Expanded"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Count"])}
    {React.createElement(pageData.examples["Primary"])}
    {React.createElement(pageData.examples["Secondary"])}
    {React.createElement(pageData.examples["Plain"])}
    {React.createElement(pageData.examples["Plain with text"])}
    {React.createElement(pageData.examples["With icon/image and text"])}
    {React.createElement(pageData.examples["With avatar and text"])}
    {React.createElement(pageData.examples["Full height"])}
    {React.createElement(pageData.examples["Full width"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsMenuToggleReactDocs';
Component.pageData = pageData;

export default Component;
