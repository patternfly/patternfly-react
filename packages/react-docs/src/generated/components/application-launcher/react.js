import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import { Link } from '@reach/router';
import pfLogoSm from '../../../../../react-core/src/components/ApplicationLauncher/examples/./pf-logo-small.svg';
const pageData = {
  "id": "Application launcher",
  "section": "components",
  "source": "react",
  "slug": "/components/application-launcher/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/ApplicationLauncher/examples/ApplicationLauncher.md",
  "propComponents": [
    {
      "name": "ApplicationLauncher",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Adds accessible text to the button. Required for plain buttons",
          "defaultValue": "'Application launcher'"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional element css classes",
          "defaultValue": "''"
        },
        {
          "name": "direction",
          "type": "DropdownDirection | 'up' | 'down'",
          "description": "Display menu above or below dropdown toggle",
          "defaultValue": "DropdownDirection.down"
        },
        {
          "name": "favorites",
          "type": "string[]",
          "description": "ID list of favorited ApplicationLauncherItems",
          "defaultValue": "[]"
        },
        {
          "name": "favoritesLabel",
          "type": "string",
          "description": "Label for the favorites group",
          "defaultValue": "'Favorites'"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Render Application launcher toggle as disabled icon",
          "defaultValue": "false"
        },
        {
          "name": "isGrouped",
          "type": "boolean",
          "description": "Flag to indicate if application launcher has groups",
          "defaultValue": "false"
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "open bool",
          "defaultValue": "false"
        },
        {
          "name": "items",
          "type": "React.ReactNode[]",
          "description": "Array of application launcher items"
        },
        {
          "name": "menuAppendTo",
          "type": "HTMLElement | (() => HTMLElement) | 'inline' | 'parent'",
          "description": "The container to append the menu to. Defaults to 'inline'.\nIf your menu is being cut off you can append it to an element higher up the DOM tree.\nSome examples:\nmenuAppendTo=\"parent\"\nmenuAppendTo={() => document.body}\nmenuAppendTo={document.getElementById('target')}",
          "defaultValue": "'inline'"
        },
        {
          "name": "onFavorite",
          "type": "(itemId: string, isFavorite: boolean) => void",
          "description": "Enables favorites. Callback called when an ApplicationLauncherItem's favorite button is clicked"
        },
        {
          "name": "onSearch",
          "type": "(textInput: string) => void",
          "description": "Enables search. Callback called when text input is entered into search box"
        },
        {
          "name": "onSelect",
          "type": "(event: any) => void",
          "description": "Function callback called when user selects item",
          "defaultValue": "(_event: any): any => undefined"
        },
        {
          "name": "onToggle",
          "type": "(value: boolean) => void",
          "description": "Callback called when application launcher toggle is clicked",
          "defaultValue": "(_value: boolean): any => undefined"
        },
        {
          "name": "position",
          "type": "DropdownPosition | 'right' | 'left'",
          "description": "Indicates where menu will be alligned horizontally",
          "defaultValue": "DropdownPosition.left"
        },
        {
          "name": "searchNoResultsText",
          "type": "string",
          "description": "Text for search input when no results are found",
          "defaultValue": "'No results found'"
        },
        {
          "name": "searchPlaceholderText",
          "type": "string",
          "description": "Placeholder text for search input",
          "defaultValue": "'Filter by name...'"
        },
        {
          "name": "searchProps",
          "type": "any",
          "description": "Additional properties for search input"
        },
        {
          "name": "toggleIcon",
          "type": "React.ReactNode",
          "description": "Toggle Icon, optional to override the icon used for the toggle",
          "defaultValue": "<ThIcon />"
        },
        {
          "name": "toggleId",
          "type": "string",
          "description": "ID of toggle"
        }
      ]
    },
    {
      "name": "ApplicationLauncherItem",
      "description": "",
      "props": [
        {
          "name": "ariaIsFavoriteLabel",
          "type": "string",
          "description": "Aria label text for favoritable button when favorited",
          "defaultValue": "'starred'"
        },
        {
          "name": "ariaIsNotFavoriteLabel",
          "type": "string",
          "description": "Aria label text for favoritable button when not favorited",
          "defaultValue": "'not starred'"
        },
        {
          "name": "className",
          "type": "No type info",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "React.ReactNode",
          "description": "A ReactElement to render, or a string to use as the component tag.\nExample: component={<Link to=\"/components/alert/\">Alert</Link>}\nExample: component=\"button\"",
          "defaultValue": "'a'"
        },
        {
          "name": "customChild",
          "type": "React.ReactNode",
          "description": ""
        },
        {
          "name": "enterTriggersArrowDown",
          "type": "boolean",
          "description": "Flag indicating if hitting enter triggers an arrow down key press. Automatically passed to favorites list items.",
          "defaultValue": "false"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Icon rendered before the text",
          "defaultValue": "null"
        },
        {
          "name": "id",
          "type": "string",
          "description": "ID of the item. Required for tracking favorites."
        },
        {
          "name": "isExternal",
          "type": "boolean",
          "description": "If clicking on the item should open the page in a separate window",
          "defaultValue": "false"
        },
        {
          "name": "isFavorite",
          "type": "boolean",
          "description": "Flag indicating if the item is favorited",
          "defaultValue": "null"
        },
        {
          "name": "tooltip",
          "type": "React.ReactNode",
          "description": "Tooltip to display when hovered over the item",
          "defaultValue": "null"
        },
        {
          "name": "tooltipProps",
          "type": "any",
          "description": "Additional tooltip props forwarded to the Tooltip component",
          "defaultValue": "null"
        }
      ]
    },
    {
      "name": "ApplicationLauncherContent",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Main content to be rendered",
          "required": true
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-app-launcher"
  ],
  "examples": [
    "Basic",
    "Router link",
    "Disabled",
    "Aligned right",
    "Aligned top",
    "With tooltip",
    "With sections and icons",
    "With favorites and search",
    "With custom icon",
    "Basic with menu appended to document body"
  ]
};
pageData.liveContext = {
  HelpIcon,
  Link,
  pfLogoSm
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ApplicationLauncher, ApplicationLauncherItem } from '@patternfly/react-core';\n\nconst appLauncherItems: React.ReactElement[] = [\n  <ApplicationLauncherItem key=\"application_1a\" href=\"#\">\n    Application 1 (anchor link)\n  </ApplicationLauncherItem>,\n  <ApplicationLauncherItem key=\"application_2a\" component=\"button\" onClick={() => alert('Clicked item 2')}>\n    Application 2 (button with onClick)\n  </ApplicationLauncherItem>,\n  <ApplicationLauncherItem key=\"disabled_application_4a\" isDisabled>\n    Unavailable application\n  </ApplicationLauncherItem>\n];\n\nexport const ApplicationLauncherBasic: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => setIsOpen(isOpen);\n  const onSelect = (_event: any) => setIsOpen(prevIsOpen => !prevIsOpen);\n\n  return <ApplicationLauncher onSelect={onSelect} onToggle={onToggle} isOpen={isOpen} items={appLauncherItems} />;\n};\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Router link': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Link } from '@reach/router';\nimport { ApplicationLauncher, ApplicationLauncherItem, ApplicationLauncherContent } from '@patternfly/react-core';\nimport pfLogoSm from './pf-logo-small.svg';\n\nconst icon: JSX.Element = <img src={pfLogoSm} />;\n\nconst linkStyle: React.CSSProperties = {\n  color: 'var(--pf-c-app-launcher__menu-item--Color)',\n  textDecoration: 'none'\n};\n\nconst appLauncherItems: React.ReactElement[] = [\n  <ApplicationLauncherItem\n    key=\"router1\"\n    component={\n      <Link to=\"/\" style={linkStyle}>\n        @reach/router Link\n      </Link>\n    }\n  />,\n  <ApplicationLauncherItem\n    key=\"router2\"\n    isExternal\n    icon={icon}\n    component={\n      <Link to=\"/\" style={linkStyle}>\n        <ApplicationLauncherContent>@reach/router Link with icon</ApplicationLauncherContent>\n      </Link>\n    }\n  />,\n  <ApplicationLauncherItem key=\"application_1a\" href=\"#\">\n    Application 1 (anchor link)\n  </ApplicationLauncherItem>,\n  <ApplicationLauncherItem key=\"application_2a\" component=\"button\" onClick={() => alert('Clicked item 2')}>\n    Application 2 (button with onClick)\n  </ApplicationLauncherItem>,\n  <ApplicationLauncherItem key=\"disabled_application_4a\" isDisabled>\n    Unavailable application\n  </ApplicationLauncherItem>\n];\n\nexport const ApplicationLauncherRouterLink: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => setIsOpen(isOpen);\n  const onSelect = (_event: any) => setIsOpen(prevIsOpen => !prevIsOpen);\n\n  return <ApplicationLauncher onSelect={onSelect} onToggle={onToggle} isOpen={isOpen} items={appLauncherItems} />;\n};\n","title":"Router link","lang":"ts"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ApplicationLauncher, ApplicationLauncherItem } from '@patternfly/react-core';\n\nconst appLauncherItems: React.ReactElement[] = [\n  <ApplicationLauncherItem key=\"application_1a\" href=\"#\">\n    Application 1 (anchor link)\n  </ApplicationLauncherItem>,\n  <ApplicationLauncherItem key=\"application_2a\" component=\"button\" onClick={() => alert('Clicked item 2')}>\n    Application 2 (button with onClick)\n  </ApplicationLauncherItem>,\n  <ApplicationLauncherItem key=\"disabled_application_4a\" isDisabled>\n    Unavailable application\n  </ApplicationLauncherItem>\n];\n\nexport const ApplicationLauncherDisabled: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => setIsOpen(isOpen);\n  const onSelect = (_event: any) => setIsOpen(prevIsOpen => !prevIsOpen);\n\n  return (\n    <ApplicationLauncher onSelect={onSelect} onToggle={onToggle} isOpen={isOpen} items={appLauncherItems} isDisabled />\n  );\n};\n","title":"Disabled","lang":"ts"}}>
      
    </Example>,
  'Aligned right': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ApplicationLauncher, ApplicationLauncherItem, DropdownPosition } from '@patternfly/react-core';\n\nconst appLauncherItems: React.ReactElement[] = [\n  <ApplicationLauncherItem key=\"application_1a\" href=\"#\">\n    Application 1 (anchor link)\n  </ApplicationLauncherItem>,\n  <ApplicationLauncherItem key=\"application_2a\" component=\"button\" onClick={() => alert('Clicked item 2')}>\n    Application 2 (button with onClick)\n  </ApplicationLauncherItem>,\n  <ApplicationLauncherItem key=\"disabled_application_4a\" isDisabled>\n    Unavailable application\n  </ApplicationLauncherItem>\n];\n\nexport const ApplicationLauncherAlignRight: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => setIsOpen(isOpen);\n  const onSelect = (_event: any) => setIsOpen(prevIsOpen => !prevIsOpen);\n\n  return (\n    <ApplicationLauncher\n      onSelect={onSelect}\n      onToggle={onToggle}\n      isOpen={isOpen}\n      items={appLauncherItems}\n      position={DropdownPosition.right}\n      style={{ marginLeft: 'calc(100% - 46px)' }}\n    />\n  );\n};\n","title":"Aligned right","lang":"ts"}}>
      
    </Example>,
  'Aligned top': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ApplicationLauncher, ApplicationLauncherItem, DropdownDirection } from '@patternfly/react-core';\n\nconst appLauncherItems: React.ReactElement[] = [\n  <ApplicationLauncherItem key=\"application_1a\" href=\"#\">\n    Application 1 (anchor link)\n  </ApplicationLauncherItem>,\n  <ApplicationLauncherItem key=\"application_2a\" component=\"button\" onClick={() => alert('Clicked item 2')}>\n    Application 2 (button with onClick)\n  </ApplicationLauncherItem>,\n  <ApplicationLauncherItem key=\"disabled_application_4a\" isDisabled>\n    Unavailable application\n  </ApplicationLauncherItem>\n];\n\nexport const ApplicationLauncherAlignTop: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => setIsOpen(isOpen);\n  const onSelect = (_event: any) => setIsOpen(prevIsOpen => !prevIsOpen);\n\n  return (\n    <ApplicationLauncher\n      onSelect={onSelect}\n      onToggle={onToggle}\n      isOpen={isOpen}\n      items={appLauncherItems}\n      direction={DropdownDirection.up}\n    />\n  );\n};\n","title":"Aligned top","lang":"ts"}}>
      
    </Example>,
  'With tooltip': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ApplicationLauncher, ApplicationLauncherItem } from '@patternfly/react-core';\n\nconst appLauncherItems: React.ReactElement[] = [\n  <ApplicationLauncherItem key=\"application_1b\" href=\"#\" tooltip={<div>Launch Application 1</div>}>\n    Application 1 (anchor link)\n  </ApplicationLauncherItem>,\n  <ApplicationLauncherItem\n    key=\"application_2b\"\n    component=\"button\"\n    tooltip={<div>Launch Application 2</div>}\n    tooltipProps={{ position: 'right' }}\n    onClick={() => alert('Clicked item 2')}\n  >\n    Application 2 (onClick)\n  </ApplicationLauncherItem>,\n  <ApplicationLauncherItem\n    key=\"application_3b\"\n    component=\"button\"\n    tooltip={<div>Launch Application 3</div>}\n    tooltipProps={{ position: 'bottom' }}\n    onClick={() => alert('Clicked item 3')}\n  >\n    Application 3 (onClick)\n  </ApplicationLauncherItem>\n];\n\nexport const ApplicationLauncherTooltip: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => setIsOpen(isOpen);\n  const onSelect = (_event: any) => setIsOpen(prevIsOpen => !prevIsOpen);\n\n  return <ApplicationLauncher onSelect={onSelect} onToggle={onToggle} isOpen={isOpen} items={appLauncherItems} />;\n};\n","title":"With tooltip","lang":"ts"}}>
      
    </Example>,
  'With sections and icons': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  ApplicationLauncher,\n  ApplicationLauncherItem,\n  ApplicationLauncherGroup,\n  ApplicationLauncherSeparator\n} from '@patternfly/react-core';\nimport pfLogoSm from './pf-logo-small.svg';\n\nconst icon = <img src={pfLogoSm} />;\n\nconst appLauncherItems: React.ReactElement[] = [\n  <ApplicationLauncherGroup key=\"group 1c\">\n    <ApplicationLauncherItem key=\"group 1a\" icon={icon}>\n      Item without group title\n    </ApplicationLauncherItem>\n    <ApplicationLauncherSeparator key=\"separator\" />\n  </ApplicationLauncherGroup>,\n  <ApplicationLauncherGroup label=\"Group 2\" key=\"group 2c\">\n    <ApplicationLauncherItem key=\"group 2a\" isExternal icon={icon} component=\"button\">\n      Group 2 button\n    </ApplicationLauncherItem>\n    <ApplicationLauncherItem key=\"group 2b\" isExternal href=\"#\" icon={icon}>\n      Group 2 anchor link\n    </ApplicationLauncherItem>\n    <ApplicationLauncherSeparator key=\"separator\" />\n  </ApplicationLauncherGroup>,\n  <ApplicationLauncherGroup label=\"Group 3\" key=\"group 3c\">\n    <ApplicationLauncherItem key=\"group 3a\" isExternal icon={icon} component=\"button\">\n      Group 3 button\n    </ApplicationLauncherItem>\n    <ApplicationLauncherItem key=\"group 3b\" isExternal href=\"#\" icon={icon}>\n      Group 3 anchor link\n    </ApplicationLauncherItem>\n  </ApplicationLauncherGroup>\n];\n\nexport const ApplicationLauncherSectionsAndIcons: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => setIsOpen(isOpen);\n  const onSelect = (_event: any) => setIsOpen(prevIsOpen => !prevIsOpen);\n\n  return (\n    <ApplicationLauncher onSelect={onSelect} onToggle={onToggle} isOpen={isOpen} items={appLauncherItems} isGrouped />\n  );\n};\n","title":"With sections and icons","lang":"ts"}}>
      
    </Example>,
  'With favorites and search': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  ApplicationLauncher,\n  ApplicationLauncherItem,\n  ApplicationLauncherGroup,\n  ApplicationLauncherSeparator\n} from '@patternfly/react-core';\nimport pfLogoSm from './pf-logo-small.svg';\n\nconst icon: JSX.Element = <img src={pfLogoSm} />;\n\nconst appLauncherItems: React.ReactElement[] = [\n  <ApplicationLauncherGroup key=\"group 1c\">\n    <ApplicationLauncherItem key=\"group 1a\" id=\"item-1\" icon={icon}>\n      Item without group title\n    </ApplicationLauncherItem>\n    <ApplicationLauncherSeparator key=\"separator\" />\n  </ApplicationLauncherGroup>,\n  <ApplicationLauncherGroup label=\"Group 2\" key=\"group 2c\">\n    <ApplicationLauncherItem key=\"group 2a\" id=\"item-2\" isExternal icon={icon} component=\"button\">\n      Group 2 button\n    </ApplicationLauncherItem>\n    <ApplicationLauncherItem key=\"group 2b\" id=\"item-3\" isExternal href=\"#\" icon={icon}>\n      Group 2 anchor link\n    </ApplicationLauncherItem>\n    <ApplicationLauncherSeparator key=\"separator\" />\n  </ApplicationLauncherGroup>,\n  <ApplicationLauncherGroup label=\"Group 3\" key=\"group 3c\">\n    <ApplicationLauncherItem key=\"group 3a\" id=\"item-4\" isExternal icon={icon} component=\"button\">\n      Group 3 button\n    </ApplicationLauncherItem>\n    <ApplicationLauncherItem key=\"group 3b\" id=\"item-5\" isExternal href=\"#\" icon={icon}>\n      Group 3 anchor link\n    </ApplicationLauncherItem>\n  </ApplicationLauncherGroup>\n];\n\nexport const ApplicationLauncherFavoritesAndSearch: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n  const [favorites, setFavorites] = React.useState<string[]>([]);\n  const [filteredItems, setFilteredItems] = React.useState<React.ReactNode[]>(null);\n\n  const onToggle = (isOpen: boolean) => setIsOpen(isOpen);\n\n  const onFavorite = (itemId: string, isFavorite: boolean) => {\n    let updatedFavorites: string[] = [...favorites, itemId];\n\n    if (isFavorite) {\n      updatedFavorites = favorites.filter(id => id !== itemId);\n    }\n\n    setFavorites(updatedFavorites);\n  };\n\n  const onSearch = (textInput: string) => {\n    if (textInput === '') {\n      setFilteredItems(null);\n    } else {\n      const filteredGroups = appLauncherItems\n        .map((group: React.ReactElement) => {\n          const filteredGroup = React.cloneElement(group, {\n            children: group.props.children.filter((item: React.ReactElement) => {\n              if (item.type === ApplicationLauncherSeparator) {\n                return item;\n              }\n\n              return item.props.children.toLowerCase().includes(textInput.toLowerCase());\n            })\n          });\n\n          if (\n            filteredGroup.props.children.length > 0 &&\n            filteredGroup.props.children[0].type !== ApplicationLauncherSeparator\n          ) {\n            return filteredGroup;\n          }\n        })\n        .filter(newGroup => newGroup);\n\n      if (filteredGroups.length > 0) {\n        let lastGroup = filteredGroups.pop();\n\n        lastGroup = React.cloneElement(lastGroup, {\n          children: lastGroup.props.children.filter(item => item.type !== ApplicationLauncherSeparator)\n        });\n\n        filteredGroups.push(lastGroup);\n      }\n\n      setFilteredItems(filteredGroups);\n    }\n  };\n\n  return (\n    <ApplicationLauncher\n      onToggle={onToggle}\n      onFavorite={onFavorite}\n      onSearch={onSearch}\n      isOpen={isOpen}\n      items={filteredItems || appLauncherItems}\n      favorites={favorites}\n      isGrouped\n    />\n  );\n};\n","title":"With favorites and search","lang":"ts"}}>
      
    </Example>,
  'With custom icon': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ApplicationLauncher, ApplicationLauncherItem } from '@patternfly/react-core';\nimport HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';\n\nconst appLauncherItems: React.ReactElement[] = [\n  <ApplicationLauncherItem key=\"application_1a\" href=\"#\">\n    Application 1 (anchor link)\n  </ApplicationLauncherItem>,\n  <ApplicationLauncherItem key=\"application_2a\" component=\"button\" onClick={() => alert('Clicked item 2')}>\n    Application 2 (button with onClick)\n  </ApplicationLauncherItem>,\n  <ApplicationLauncherItem key=\"disabled_application_4a\" isDisabled>\n    Unavailable application\n  </ApplicationLauncherItem>\n];\n\nexport const ApplicationLauncherCustomIcon: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => setIsOpen(isOpen);\n  const onSelect = (_event: any) => setIsOpen(prevIsOpen => !prevIsOpen);\n\n  return (\n    <ApplicationLauncher\n      onSelect={onSelect}\n      onToggle={onToggle}\n      isOpen={isOpen}\n      items={appLauncherItems}\n      toggleIcon={<HelpIcon />}\n    />\n  );\n};\n","title":"With custom icon","lang":"ts"}}>
      
    </Example>,
  'Basic with menu appended to document body': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ApplicationLauncher, ApplicationLauncherItem } from '@patternfly/react-core';\n\nconst appLauncherItems: React.ReactElement[] = [\n  <ApplicationLauncherItem key=\"application_1a\" href=\"#\">\n    Application 1 (anchor link)\n  </ApplicationLauncherItem>,\n  <ApplicationLauncherItem key=\"application_2a\" component=\"button\" onClick={() => alert('Clicked item 2')}>\n    Application 2 (button with onClick)\n  </ApplicationLauncherItem>,\n  <ApplicationLauncherItem key=\"disabled_application_4a\" isDisabled>\n    Unavailable application\n  </ApplicationLauncherItem>\n];\n\nexport const ApplicationLauncherDocumentBody: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => setIsOpen(isOpen);\n  const onSelect = (_event: any) => setIsOpen(prevIsOpen => !prevIsOpen);\n\n  return (\n    <ApplicationLauncher\n      menuAppendTo={() => document.body}\n      onSelect={onSelect}\n      onToggle={onToggle}\n      isOpen={isOpen}\n      items={appLauncherItems}\n    />\n  );\n};\n","title":"Basic with menu appended to document body","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Note: Application launcher is built on Dropdown, for extended API go to `}
      <PatternflyThemeLink {...{"to":"/documentation/react/components/dropdown"}}>
        {`Dropdown`}
      </PatternflyThemeLink>
      {` documentation.
To add a tooltip, use the `}
      <code {...{"className":"ws-code"}}>
        {`tooltip`}
      </code>
      {` prop and optionally add more tooltip props by using `}
      <code {...{"className":"ws-code"}}>
        {`tooltipProps`}
      </code>
      {`. For more tooltip information go to `}
      <PatternflyThemeLink {...{"to":"/documentation/react/components/tooltip"}}>
        {`Tooltip`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Router link"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Aligned right"])}
    {React.createElement(pageData.examples["Aligned top"])}
    {React.createElement(pageData.examples["With tooltip"])}
    {React.createElement(pageData.examples["With sections and icons"])}
    {React.createElement(pageData.examples["With favorites and search"])}
    {React.createElement(pageData.examples["With custom icon"])}
    {React.createElement(pageData.examples["Basic with menu appended to document body"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsApplicationLauncherReactDocs';
Component.pageData = pageData;

export default Component;
