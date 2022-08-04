import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Context selector",
  "section": "components",
  "source": "react",
  "slug": "/components/context-selector/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/ContextSelector/examples/ContextSelector.md",
  "propComponents": [
    {
      "name": "ContextSelector",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the Context Selector",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Classes applied to root element of Context Selector",
          "defaultValue": "''"
        },
        {
          "name": "disableFocusTrap",
          "type": "boolean",
          "description": "Flag to disable focus trap",
          "defaultValue": "false"
        },
        {
          "name": "footer",
          "type": "React.ReactNode",
          "description": "Footer of the context selector",
          "defaultValue": "null"
        },
        {
          "name": "isFlipEnabled",
          "type": "boolean",
          "description": "Flag for indicating that the context selector menu should automatically flip vertically when\nit reaches the boundary. This prop can only be used when the context selector component is not\nappended inline, e.g. `menuAppendTo=\"parent\"`",
          "defaultValue": "false"
        },
        {
          "name": "isFullHeight",
          "type": "boolean",
          "description": "Flag indicating that the context selector should expand to full height"
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "Flag to indicate if Context Selector is opened",
          "defaultValue": "false"
        },
        {
          "name": "isPlain",
          "type": "boolean",
          "description": "Flag to indicate the toggle has no border or background",
          "defaultValue": "false"
        },
        {
          "name": "isText",
          "type": "boolean",
          "description": "Flag to indicate if toggle is textual toggle",
          "defaultValue": "false"
        },
        {
          "name": "menuAppendTo",
          "type": "HTMLElement | (() => HTMLElement) | 'inline' | 'parent'",
          "description": "The container to append the menu to. Defaults to 'inline'.\nIf your menu is being cut off you can append it to an element higher up the DOM tree.\nSome examples:\nmenuAppendTo=\"parent\"\nmenuAppendTo={() => document.body}\nmenuAppendTo={document.getElementById('target')}",
          "defaultValue": "'inline'"
        },
        {
          "name": "onSearchButtonClick",
          "type": "(event?: React.SyntheticEvent<HTMLButtonElement>) => void",
          "description": "Function callback for when Search Button is clicked",
          "defaultValue": "() => undefined as any"
        },
        {
          "name": "onSearchInputChange",
          "type": "(value: string) => void",
          "description": "Function callback called when user changes the Search Input",
          "defaultValue": "() => undefined as any"
        },
        {
          "name": "onSelect",
          "type": "(event: any, value: React.ReactNode) => void",
          "description": "Function callback called when user selects item",
          "defaultValue": "() => undefined as any"
        },
        {
          "name": "onToggle",
          "type": "(event: any, value: boolean) => void",
          "description": "Function callback called when user clicks toggle button",
          "defaultValue": "() => undefined as any"
        },
        {
          "name": "ouiaSafe",
          "type": "No type info",
          "defaultValue": "true"
        },
        {
          "name": "screenReaderLabel",
          "type": "string",
          "description": "Labels the Context Selector for Screen Readers",
          "defaultValue": "''"
        },
        {
          "name": "searchButtonAriaLabel",
          "type": "string",
          "description": "Aria-label for the Context Selector Search Button",
          "defaultValue": "'Search menu items'"
        },
        {
          "name": "searchInputPlaceholder",
          "type": "string",
          "description": "Search Input placeholder",
          "defaultValue": "'Search'"
        },
        {
          "name": "searchInputValue",
          "type": "string",
          "description": "Value in the Search field",
          "defaultValue": "''"
        },
        {
          "name": "toggleText",
          "type": "string",
          "description": "Text that appears in the Context Selector Toggle",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "ContextSelectorItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything which can be rendered as Context Selector item",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Classes applied to root element of the Context Selector item",
          "defaultValue": "''"
        },
        {
          "name": "href",
          "type": "string",
          "description": "Link href, indicates item should render as anchor tag",
          "defaultValue": "null"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Render Context  Selector item as disabled",
          "defaultValue": "false"
        },
        {
          "name": "onClick",
          "type": "(event: React.MouseEvent) => void",
          "description": "Callback for click event",
          "defaultValue": "(): any => undefined"
        },
        {
          "name": "sendRef",
          "type": "(index: number, current: any) => void",
          "description": "Internal callback for ref tracking",
          "defaultValue": "() => {}"
        }
      ]
    },
    {
      "name": "ContextSelectorFooter",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the ContextSelectorFooter",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the ContextSelectorFooter",
          "defaultValue": "''"
        }
      ]
    }
  ],
  "examples": [
    "Basic",
    "Plain with text",
    "With footer"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ContextSelector, ContextSelectorItem } from '@patternfly/react-core';\n\nexport const ContextSelectorBasic: React.FunctionComponent = () => {\n  const items = [\n    {\n      text: 'Link',\n      href: '#'\n    },\n    'Action',\n    {\n      text: 'Disabled link',\n      href: '#',\n      isDisabled: true\n    },\n    {\n      text: 'Disabled action',\n      isDisabled: true\n    },\n    'My project',\n    'OpenShift cluster',\n    'Production Ansible',\n    'AWS',\n    'Azure',\n    'My project 2',\n    'OpenShift cluster ',\n    'Production Ansible 2 ',\n    'AWS 2',\n    'Azure 2'\n  ];\n\n  const firstItemText = typeof items[0] === 'string' ? items[0] : items[0].text;\n  const [isOpen, setOpen] = React.useState(false);\n  const [selected, setSelected] = React.useState(firstItemText);\n  const [searchValue, setSearchValue] = React.useState('');\n  const [filteredItems, setFilteredItems] = React.useState(items);\n\n  const onToggle = (event: any, isOpen: boolean) => {\n    setOpen(isOpen);\n  };\n\n  const onSelect = (event: any, value: React.ReactNode) => {\n    setSelected(value as string);\n    setOpen(!isOpen);\n  };\n\n  const onSearchInputChange = (value: string) => {\n    setSearchValue(value);\n  };\n\n  const onSearchButtonClick = (_event: React.SyntheticEvent<HTMLButtonElement>) => {\n    const filtered =\n      searchValue === ''\n        ? items\n        : items.filter(item => {\n            const str = typeof item === 'string' ? item : item.text;\n            return str.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;\n          });\n\n    setFilteredItems(filtered || []);\n  };\n  return (\n    <ContextSelector\n      toggleText={selected}\n      onSearchInputChange={onSearchInputChange}\n      isOpen={isOpen}\n      searchInputValue={searchValue}\n      onToggle={onToggle}\n      onSelect={onSelect}\n      onSearchButtonClick={onSearchButtonClick}\n      screenReaderLabel=\"Selected Project:\"\n    >\n      {filteredItems.map((item, index) => {\n        const [text = null, href = null, isDisabled] =\n          typeof item === 'string' ? [item, null, false] : [item.text, item.href, item.isDisabled];\n        return (\n          <ContextSelectorItem key={index} href={href} isDisabled={isDisabled}>\n            {text || item}\n          </ContextSelectorItem>\n        );\n      })}\n    </ContextSelector>\n  );\n};\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Plain with text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ContextSelector, ContextSelectorItem } from '@patternfly/react-core';\n\nconst items = [\n  {\n    text: 'Link',\n    href: '#'\n  },\n  'Action',\n  {\n    text: 'Disabled link',\n    href: '#',\n    isDisabled: true\n  },\n  {\n    text: 'Disabled action',\n    isDisabled: true\n  },\n  'My Project',\n  'OpenShift Cluster',\n  'Production Ansible',\n  'AWS',\n  'Azure',\n  'My Project 2',\n  'OpenShift Cluster ',\n  'Production Ansible 2 ',\n  'AWS 2',\n  'Azure 2'\n];\n\nexport const ContextSelectorPlainText: React.FunctionComponent = () => {\n  const firstItemText = typeof items[0] === 'string' ? items[0] : items[0].text;\n  const [isOpen, setOpen] = React.useState(false);\n  const [selected, setSelected] = React.useState(firstItemText);\n  const [searchValue, setSearchValue] = React.useState('');\n  const [filteredItems, setFilteredItems] = React.useState(items);\n  const onToggle = (event: any, isOpen: boolean) => {\n    setOpen(isOpen);\n  };\n\n  const onSelect = (event: any, value: React.ReactNode) => {\n    setSelected(value as string);\n    setOpen(!isOpen);\n  };\n\n  const onSearchInputChange = (value: string) => {\n    setSearchValue(value);\n  };\n\n  const onSearchButtonClick = (_event: React.SyntheticEvent<HTMLButtonElement>) => {\n    const filtered =\n      searchValue === ''\n        ? items\n        : items.filter(item => {\n            const str = typeof item === 'string' ? item : item.text;\n            return str.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;\n          });\n\n    setFilteredItems(filtered || []);\n  };\n  return (\n    <ContextSelector\n      toggleText={selected}\n      onSearchInputChange={onSearchInputChange}\n      isOpen={isOpen}\n      searchInputValue={searchValue}\n      onToggle={onToggle}\n      onSelect={onSelect}\n      onSearchButtonClick={onSearchButtonClick}\n      screenReaderLabel=\"Selected Project:\"\n      isPlain\n      isText\n    >\n      {filteredItems.map((item, index) => {\n        const [text, href = null, isDisabled = false] =\n          typeof item === 'string' ? [item, null, false] : [item.text, item.href, item.isDisabled];\n        return (\n          <ContextSelectorItem key={index} href={href} isDisabled={isDisabled}>\n            {text}\n          </ContextSelectorItem>\n        );\n      })}\n    </ContextSelector>\n  );\n};\n","title":"Plain with text","lang":"ts"}}>
      
    </Example>,
  'With footer': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, ContextSelector, ContextSelectorItem, ContextSelectorFooter } from '@patternfly/react-core';\n\nexport const ContextSelectorWithFooter: React.FunctionComponent = () => {\n  const items = [\n    {\n      text: 'Link',\n      href: '#'\n    },\n    'Action',\n    {\n      text: 'Disabled link',\n      href: '#',\n      isDisabled: true\n    },\n    {\n      text: 'Disabled action',\n      isDisabled: true\n    },\n    'My project',\n    'OpenShift cluster',\n    'Production Ansible',\n    'AWS',\n    'Azure',\n    'My project 2',\n    'OpenShift cluster ',\n    'Production Ansible 2 ',\n    'AWS 2',\n    'Azure 2'\n  ];\n  const firstItemText = typeof items[0] === 'string' ? items[0] : items[0].text;\n  const [isOpen, setOpen] = React.useState(false);\n  const [selected, setSelected] = React.useState(firstItemText);\n  const [searchValue, setSearchValue] = React.useState('');\n  const [filteredItems, setFilteredItems] = React.useState(items);\n\n  const onToggle = (event: any, isOpen: boolean) => {\n    setOpen(isOpen);\n  };\n\n  const onSelect = (event: any, value: React.ReactNode) => {\n    setSelected(value as string);\n    setOpen(!isOpen);\n  };\n\n  const onSearchInputChange = (value: string) => {\n    setSearchValue(value);\n  };\n\n  const onSearchButtonClick = (_event: React.SyntheticEvent<HTMLButtonElement>) => {\n    const filtered =\n      searchValue === ''\n        ? items\n        : items.filter(item => {\n            const str = typeof item === 'string' ? item : item.text;\n            return str.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;\n          });\n\n    setFilteredItems(filtered || []);\n  };\n\n  return (\n    <ContextSelector\n      toggleText={selected}\n      onSearchInputChange={onSearchInputChange}\n      isOpen={isOpen}\n      searchInputValue={searchValue}\n      onToggle={onToggle}\n      onSelect={onSelect}\n      onSearchButtonClick={onSearchButtonClick}\n      screenReaderLabel=\"Selected Project:\"\n      footer={\n        <ContextSelectorFooter>\n          <Button variant=\"link\" isInline>\n            Footer action\n          </Button>\n        </ContextSelectorFooter>\n      }\n    >\n      {filteredItems.map((item, index) => {\n        const [text = null, href = null, isDisabled] =\n          typeof item === 'string' ? [item, null, false] : [item.text, item.href, item.isDisabled];\n        return (\n          <ContextSelectorItem key={index} href={href} isDisabled={isDisabled}>\n            {text || item}\n          </ContextSelectorItem>\n        );\n      })}\n    </ContextSelector>\n  );\n};\n","title":"With footer","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Plain with text"])}
    {React.createElement(pageData.examples["With footer"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsContextSelectorReactDocs';
Component.pageData = pageData;

export default Component;
