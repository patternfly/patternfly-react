import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
const pageData = {
  "id": "Breadcrumb",
  "section": "components",
  "source": "react",
  "slug": "/components/breadcrumb/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Breadcrumb/examples/Breadcrumb.md",
  "propComponents": [
    {
      "name": "Breadcrumb",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Aria label added to the breadcrumb nav.",
          "defaultValue": "'Breadcrumb'"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Children nodes be rendered to the BreadCrumb. Should be of type BreadCrumbItem.",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the breadcrumb nav.",
          "defaultValue": "''"
        },
        {
          "name": "ouiaSafe",
          "type": "No type info",
          "defaultValue": "true"
        }
      ]
    },
    {
      "name": "BreadcrumbItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the breadcrumb item.",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the breadcrumb item.",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "React.ElementType",
          "description": "Sets the base component to render. Defaults to <a>",
          "defaultValue": "'a'"
        },
        {
          "name": "isActive",
          "type": "boolean",
          "description": "Flag indicating whether the item is active.",
          "defaultValue": "false"
        },
        {
          "name": "isDropdown",
          "type": "boolean",
          "description": "Flag indicating whether the item contains a dropdown.",
          "defaultValue": "false"
        },
        {
          "name": "render",
          "type": "(props: BreadcrumbItemRenderArgs) => React.ReactNode",
          "description": "A render function to render the component inside the breadcrumb item.",
          "defaultValue": "undefined"
        },
        {
          "name": "showDivider",
          "type": "boolean",
          "description": "Internal prop set by Breadcrumb on all but the first crumb"
        },
        {
          "name": "target",
          "type": "string",
          "description": "Target for breadcrumb link.",
          "defaultValue": "undefined"
        },
        {
          "name": "to",
          "type": "string",
          "description": "HREF for breadcrumb link.",
          "defaultValue": "undefined"
        }
      ]
    },
    {
      "name": "BreadcrumbHeading",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the breadcrumb title.",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the breadcrumb item.",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "React.ReactNode",
          "description": "Sets the base component to render. Defaults to <a>",
          "defaultValue": "'a'"
        },
        {
          "name": "showDivider",
          "type": "boolean",
          "description": "Internal prop set by Breadcrumb on all but the first crumb"
        },
        {
          "name": "target",
          "type": "string",
          "description": "Target for breadcrumb link.",
          "defaultValue": "undefined"
        },
        {
          "name": "to",
          "type": "string",
          "description": "HREF for breadcrumb link.",
          "defaultValue": "undefined"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-breadcrumb"
  ],
  "examples": [
    "Basic",
    "Without home link",
    "With heading",
    "With dropdown"
  ]
};
pageData.liveContext = {
  AngleLeftIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';\n\nexport const BreadcrumbBasic: React.FunctionComponent = () => (\n  <Breadcrumb>\n    <BreadcrumbItem to=\"#\">Section home</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\" isActive>\n      Section landing\n    </BreadcrumbItem>\n  </Breadcrumb>\n);\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Without home link': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';\n\nexport const BreadcrumbHomeLink: React.FunctionComponent = () => (\n  <Breadcrumb>\n    <BreadcrumbItem>Section Home</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\" isActive>\n      Section landing\n    </BreadcrumbItem>\n  </Breadcrumb>\n);\n","title":"Without home link","lang":"ts"}}>
      
    </Example>,
  'With heading': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Breadcrumb, BreadcrumbItem, BreadcrumbHeading } from '@patternfly/react-core';\n\nexport const BreadcrumbWithHeading: React.FunctionComponent = () => (\n  <Breadcrumb>\n    <BreadcrumbItem to=\"#\">Section home</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbHeading to=\"#\">Section title</BreadcrumbHeading>\n  </Breadcrumb>\n);\n","title":"With heading","lang":"ts"}}>
      
    </Example>,
  'With dropdown': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Breadcrumb,\n  BreadcrumbItem,\n  BreadcrumbHeading,\n  Dropdown,\n  BadgeToggle,\n  DropdownItem\n} from '@patternfly/react-core';\nimport AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';\n\nconst dropdownItems: JSX.Element[] = [\n  <DropdownItem key=\"edit\" component=\"button\" icon={<AngleLeftIcon />}>\n    Edit\n  </DropdownItem>,\n  <DropdownItem key=\"action\" component=\"button\" icon={<AngleLeftIcon />}>\n    Deployment\n  </DropdownItem>,\n  <DropdownItem key=\"apps\" component=\"button\" icon={<AngleLeftIcon />}>\n    Applications\n  </DropdownItem>\n];\n\nexport const BreadcrumbDropdown: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n  const badgeToggleRef = React.useRef<HTMLButtonElement>();\n\n  const onToggle = (isOpen: boolean) => setIsOpen(isOpen);\n\n  const onSelect = () => {\n    setIsOpen((prevIsOpen: boolean) => !prevIsOpen);\n    badgeToggleRef.current.focus();\n  };\n\n  return (\n    <Breadcrumb>\n      <BreadcrumbItem component=\"button\">Section home</BreadcrumbItem>\n      <BreadcrumbItem isDropdown>\n        <Dropdown\n          onSelect={onSelect}\n          toggle={\n            <BadgeToggle ref={badgeToggleRef} onToggle={onToggle}>\n              {dropdownItems.length}\n            </BadgeToggle>\n          }\n          isOpen={isOpen}\n          dropdownItems={dropdownItems}\n        />\n      </BreadcrumbItem>\n      <BreadcrumbHeading component=\"button\">Section title</BreadcrumbHeading>\n    </Breadcrumb>\n  );\n};\n","title":"With dropdown","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Without home link"])}
    {React.createElement(pageData.examples["With heading"])}
    {React.createElement(pageData.examples["With dropdown"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsBreadcrumbReactDocs';
Component.pageData = pageData;

export default Component;
