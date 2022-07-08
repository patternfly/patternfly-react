import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import ThIcon from '@patternfly/react-icons/dist/esm/icons/th-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import { Link } from '@reach/router';
import avatarImg from '../../../../../react-core/src/components/Dropdown/examples/../../Avatar/examples/avatarImg.svg';
const pageData = {
  "id": "Dropdown",
  "section": "components",
  "source": "react",
  "slug": "/components/dropdown/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Dropdown/examples/Dropdown.md",
  "propComponents": [
    {
      "name": "Dropdown",
      "description": "",
      "props": [
        {
          "name": "alignments",
          "type": "{\n  sm?: 'right' | 'left';\n  md?: 'right' | 'left';\n  lg?: 'right' | 'left';\n  xl?: 'right' | 'left';\n  '2xl'?: 'right' | 'left';\n}",
          "description": "Indicates how the menu will align at screen size breakpoints. Default alignment is set via the position property."
        },
        {
          "name": "autoFocus",
          "type": "boolean",
          "description": "Flag to indicate if the first dropdown item should gain initial focus, set false when adding\na specific auto-focus item (like a current selection) otherwise leave as true"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything which can be rendered in a dropdown"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Classes applied to root element of dropdown"
        },
        {
          "name": "contextProps",
          "type": "DropdownContext",
          "description": "Props for extreme customization of dropdown"
        },
        {
          "name": "direction",
          "type": "DropdownDirection | 'up' | 'down'",
          "description": "Display menu above or below dropdown toggle"
        },
        {
          "name": "dropdownItems",
          "type": "any[]",
          "description": "Array of DropdownItem nodes that will be rendered in the dropdown Menu list"
        },
        {
          "name": "isFlipEnabled",
          "type": "boolean",
          "description": "Flag for indicating that the dropdown menu should automatically flip vertically when\nit reaches the boundary. This prop can only be used when the dropdown component is not\nappended inline, e.g. `menuAppendTo=\"parent\"`",
          "defaultValue": "false"
        },
        {
          "name": "isFullHeight",
          "type": "boolean",
          "description": "Flag indicating that the dropdown should expand to full height"
        },
        {
          "name": "isGrouped",
          "type": "boolean",
          "description": "Flag to indicate if dropdown has groups"
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "Flag to indicate if menu is opened"
        },
        {
          "name": "isPlain",
          "type": "boolean",
          "description": "Display the toggle with no border or background"
        },
        {
          "name": "isText",
          "type": "boolean",
          "description": "Display the toggle in text only mode"
        },
        {
          "name": "menuAppendTo",
          "type": "HTMLElement | (() => HTMLElement) | 'inline' | 'parent'",
          "description": "The container to append the menu to. Defaults to 'inline'.\nIf your menu is being cut off you can append it to an element higher up the DOM tree.\nSome examples:\nmenuAppendTo=\"parent\"\nmenuAppendTo={() => document.body}\nmenuAppendTo={document.getElementById('target')}",
          "defaultValue": "'inline'"
        },
        {
          "name": "onSelect",
          "type": "(event?: React.SyntheticEvent<HTMLDivElement>) => void",
          "description": "Function callback called when user selects item"
        },
        {
          "name": "position",
          "type": "DropdownPosition | 'right' | 'left'",
          "description": "Indicates where menu will be aligned horizontally"
        },
        {
          "name": "toggle",
          "type": "React.ReactElement<any>",
          "description": "Toggle for the dropdown, examples: <DropdownToggle> or <DropdownToggleCheckbox>",
          "required": true
        }
      ]
    },
    {
      "name": "DropdownGroup",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Checkboxes within group",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DropdownGroup control",
          "defaultValue": "''"
        },
        {
          "name": "label",
          "type": "React.ReactNode",
          "description": "Group label",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "DropdownItem",
      "description": "",
      "props": [
        {
          "name": "additionalChild",
          "type": "React.ReactNode",
          "description": "Additional node to include alongside item within the <li>"
        },
        {
          "name": "autoFocus",
          "type": "boolean",
          "description": "Initial focus on the item when the menu is opened (Note: Only applicable to one of the items)"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything which can be rendered as dropdown item"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Classes applied to root element of dropdown item"
        },
        {
          "name": "component",
          "type": "React.ReactNode",
          "description": "A ReactElement to render, or a string to use as the component tag.\nExample: component={<Link to=\"/components/alert/\">Alert</Link>}\nExample: component=\"button\"\nIf React.isValidElement(component) the className prop will be injected unless styleChildren=\"false\"",
          "defaultValue": "'a'"
        },
        {
          "name": "componentID",
          "type": "string",
          "description": "ID for the component element"
        },
        {
          "name": "customChild",
          "type": "React.ReactNode",
          "description": "Custom item rendering that receives the DropdownContext"
        },
        {
          "name": "description",
          "type": "React.ReactNode",
          "description": "A short description of the dropdown item, displayed under the dropdown item content",
          "defaultValue": "null"
        },
        {
          "name": "href",
          "type": "string",
          "description": "Default hyperlink location"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "An image to display within the DropdownItem, appearing before any component children",
          "defaultValue": "null"
        },
        {
          "name": "isAriaDisabled",
          "type": "boolean",
          "description": "Render dropdown item as aria-disabled option",
          "defaultValue": "false"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Render dropdown item as disabled option",
          "defaultValue": "false"
        },
        {
          "name": "isHovered",
          "type": "boolean",
          "description": "Forces display of the hover state of the element",
          "defaultValue": "false"
        },
        {
          "name": "isPlainText",
          "type": "boolean",
          "description": "Render dropdown item as non-interactive item",
          "defaultValue": "false"
        },
        {
          "name": "listItemClassName",
          "type": "string",
          "description": "Class to be applied to list item"
        },
        {
          "name": "styleChildren",
          "type": "boolean",
          "description": "Whether to set className on component when React.isValidElement(component)"
        },
        {
          "name": "tabIndex",
          "type": "number | null",
          "description": "tabIndex to use, null to unset it",
          "defaultValue": "-1"
        },
        {
          "name": "tooltip",
          "type": "React.ReactNode",
          "description": "Tooltip to display when hovered over the item"
        },
        {
          "name": "tooltipProps",
          "type": "any",
          "description": "Additional tooltip props forwarded to the Tooltip component",
          "defaultValue": "{}"
        }
      ]
    },
    {
      "name": "DropdownToggle",
      "description": "",
      "props": [
        {
          "name": "aria-haspopup",
          "type": "boolean | 'listbox' | 'menu' | 'dialog' | 'grid' | 'tree'",
          "description": "Accessibility property to indicate correct has popup"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessible label for the dropdown toggle button"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything which can be rendered as dropdown toggle button",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Classes applied to root element of dropdown toggle button",
          "defaultValue": "''"
        },
        {
          "name": "getMenuRef",
          "type": "() => HTMLElement",
          "description": "The menu element",
          "defaultValue": "null"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "An image to display within the dropdown toggle, appearing before any component children",
          "defaultValue": "null"
        },
        {
          "name": "id",
          "type": "string",
          "description": "HTML ID of dropdown toggle",
          "defaultValue": "''"
        },
        {
          "name": "isActive",
          "type": "boolean",
          "description": "Forces active state",
          "defaultValue": "false"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Whether or not the <div> has a disabled state",
          "defaultValue": "false"
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "Flag to indicate if menu is opened",
          "defaultValue": "false"
        },
        {
          "name": "isPlain",
          "type": "boolean",
          "description": "Display the toggle with no border or background",
          "defaultValue": "false"
        },
        {
          "name": "isPrimary",
          "type": "boolean",
          "description": "Use `toggleVariant` instead. Whether or not the dropdown toggle button should have primary button styling",
          "defaultValue": "false",
          "deprecated": true
        },
        {
          "name": "isText",
          "type": "boolean",
          "description": "Display the toggle in text only mode",
          "defaultValue": "false"
        },
        {
          "name": "onEnter",
          "type": "(event?: React.MouseEvent<HTMLButtonElement>) => void",
          "description": "Callback called when the Enter key is pressed"
        },
        {
          "name": "onToggle",
          "type": "(value: boolean, event: any) => void",
          "description": "Callback called when toggle is clicked",
          "defaultValue": "(_isOpen: boolean) => undefined as any"
        },
        {
          "name": "parentRef",
          "type": "HTMLElement",
          "description": "Element which wraps toggle",
          "defaultValue": "null"
        },
        {
          "name": "splitButtonItems",
          "type": "React.ReactNode[]",
          "description": "Elements to display before the toggle button. When included, renders the toggle as a split button."
        },
        {
          "name": "splitButtonVariant",
          "type": "'action' | 'checkbox'",
          "description": "Variant of split button toggle",
          "defaultValue": "'checkbox'"
        },
        {
          "name": "toggleIndicator",
          "type": "React.ElementType | null",
          "description": "The icon to display for the toggle, appearing after any component children. Defaults to CaretDownIcon. Set to null to not show an icon.",
          "defaultValue": "CaretDownIcon"
        },
        {
          "name": "toggleVariant",
          "type": "'primary' | 'secondary' | 'default'",
          "description": "Alternate styles for the dropdown toggle button",
          "defaultValue": "'default'"
        },
        {
          "name": "type",
          "type": "'button' | 'submit' | 'reset'",
          "description": "Type to put on the button"
        }
      ]
    },
    {
      "name": "DropdownToggleCheckbox",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Aria-label of the checkbox",
          "required": true
        },
        {
          "name": "checked",
          "type": "boolean | null",
          "description": "Alternate Flag to show if the checkbox is checked"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Element to be rendered inside the <span>"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DropdownToggleCheckbox",
          "defaultValue": "''"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Id of the checkbox",
          "required": true
        },
        {
          "name": "isChecked",
          "type": "boolean | null",
          "description": "Flag to show if the checkbox is checked"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag to show if the checkbox is disabled",
          "defaultValue": "false"
        },
        {
          "name": "isValid",
          "type": "boolean",
          "description": "Flag to show if the checkbox selection is valid or invalid",
          "defaultValue": "true"
        },
        {
          "name": "onChange",
          "type": "(checked: boolean, event: React.FormEvent<HTMLInputElement>) => void",
          "description": "A callback for when the checkbox selection changes",
          "defaultValue": "() => undefined as any"
        }
      ]
    },
    {
      "name": "DropdownToggleAction",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Aria-label of the action button"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Element to be rendered inside the <button>"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DropdownToggleAction",
          "defaultValue": "''"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Id of the action button"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag to show if the action button is disabled",
          "defaultValue": "false"
        },
        {
          "name": "onClick",
          "type": "(event: React.MouseEvent<HTMLButtonElement>) => void",
          "description": "A callback for when the action button is clicked",
          "defaultValue": "() => {}"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-dropdown"
  ],
  "examples": [
    "Basic",
    "With initial selection",
    "With groups",
    "Disabled",
    "Primary toggle",
    "Secondary toggle",
    "Plain with text toggle",
    "Position right",
    "Alignments on different breakpoints",
    "Direction up",
    "With kebab",
    "With badge",
    "Icon only",
    "Split button",
    "Split button (with text)",
    "Split button (indeterminate state)",
    "Split button (disabled)",
    "Split button action",
    "Split button primary action",
    "Basic panel",
    "Router link",
    "Dropdown with image and text",
    "Appending document body vs parent",
    "Dropdown with descriptions"
  ]
};
pageData.liveContext = {
  ThIcon,
  CaretDownIcon,
  CogIcon,
  BellIcon,
  CubesIcon,
  AngleLeftIcon,
  Link,
  avatarImg
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';\n\nexport const DropdownBasic: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-basic');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\" tooltip=\"Tooltip for enabled link\">\n      Link\n    </DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\" tooltip=\"Tooltip for enabled button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"disabled action\"\n      isAriaDisabled\n      component=\"button\"\n      tooltip=\"Tooltip for disabled item\"\n      tooltipProps={{ position: 'top' }}\n    >\n      Disabled action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated action\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={\n        <DropdownToggle id=\"toggle-basic\" onToggle={onToggle}>\n          Dropdown\n        </DropdownToggle>\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'With initial selection': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';\n\nexport const DropdownInitialSelection: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-initial-selection');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\" autoFocus>\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"disabled action\"\n      isAriaDisabled\n      component=\"button\"\n      tooltip=\"Tooltip for disabled item\"\n      tooltipProps={{ position: 'top' }}\n    >\n      Disabled action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated action\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={\n        <DropdownToggle id=\"toggle-initial-selection\" onToggle={onToggle}>\n          Dropdown\n        </DropdownToggle>\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"With initial selection","lang":"ts"}}>
      
    </Example>,
  'With groups': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownGroup, DropdownItem } from '@patternfly/react-core';\n\nexport const DropdownGroups: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-groups');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownGroup key=\"group 1\">\n      <DropdownItem key=\"group 1 link\">Link</DropdownItem>\n      <DropdownItem key=\"group 1 action\" component=\"button\">\n        Action\n      </DropdownItem>\n    </DropdownGroup>,\n    <DropdownGroup label=\"Group 2\" key=\"group 2\">\n      <DropdownItem key=\"group 2 link\">Group 2 link</DropdownItem>\n      <DropdownItem key=\"group 2 action\" component=\"button\">\n        Group 2 action\n      </DropdownItem>\n    </DropdownGroup>,\n    <DropdownGroup label=\"Group 3\" key=\"group 3\">\n      <DropdownItem key=\"group 3 link\">Group 3 link</DropdownItem>\n      <DropdownItem key=\"group 3 action\" component=\"button\">\n        Group 3 action\n      </DropdownItem>\n    </DropdownGroup>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={\n        <DropdownToggle id=\"toggle-groups\" onToggle={onToggle}>\n          Dropdown\n        </DropdownToggle>\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n      isGrouped\n    />\n  );\n};\n","title":"With groups","lang":"ts"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';\n\nexport const DropdownDisabled: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-disabled');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"disabled action\"\n      isAriaDisabled\n      component=\"button\"\n      tooltip=\"Tooltip for disabled item\"\n      tooltipProps={{ position: 'top' }}\n    >\n      Disabled action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated action\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={\n        <DropdownToggle id=\"toggle-disabled\" isDisabled onToggle={onToggle}>\n          Dropdown\n        </DropdownToggle>\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"Disabled","lang":"ts"}}>
      
    </Example>,
  'Primary toggle': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';\n\nexport const DropdownPrimaryToggle: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-primary');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"disabled action\"\n      isAriaDisabled\n      component=\"button\"\n      tooltip=\"Tooltip for disabled item\"\n      tooltipProps={{ position: 'top' }}\n    >\n      Disabled action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated action\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={\n        <DropdownToggle id=\"toggle-primary\" isPrimary onToggle={onToggle}>\n          Dropdown\n        </DropdownToggle>\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"Primary toggle","lang":"ts"}}>
      
    </Example>,
  'Secondary toggle': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';\n\nexport const DropdownPrimaryToggle: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-secondary');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"disabled action\"\n      isAriaDisabled\n      component=\"button\"\n      tooltip=\"Tooltip for disabled item\"\n      tooltipProps={{ position: 'top' }}\n    >\n      Disabled action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated action\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={\n        <DropdownToggle id=\"toggle-secondary\" toggleVariant=\"secondary\" onToggle={onToggle}>\n          Dropdown\n        </DropdownToggle>\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"Secondary toggle","lang":"ts"}}>
      
    </Example>,
  'Plain with text toggle': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';\n\nexport const DropdownPlainTextToggle: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-plain-text');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"disabled action\"\n      isAriaDisabled\n      component=\"button\"\n      tooltip=\"Tooltip for disabled item\"\n      tooltipProps={{ position: 'top' }}\n    >\n      Disabled action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated action\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      isText\n      isPlain\n      onSelect={onSelect}\n      toggle={\n        <DropdownToggle id=\"toggle-plain-text\" onToggle={onToggle}>\n          Dropdown\n        </DropdownToggle>\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"Plain with text toggle","lang":"ts"}}>
      
    </Example>,
  'Position right': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownPosition } from '@patternfly/react-core';\n\nexport const DropdownPositionRight: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-position-right');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"disabled action\"\n      isAriaDisabled\n      component=\"button\"\n      tooltip=\"Tooltip for disabled item\"\n      tooltipProps={{ position: 'top' }}\n    >\n      Disabled action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated action\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      position={DropdownPosition.right}\n      toggle={\n        <DropdownToggle id=\"toggle-position-right\" onToggle={onToggle}>\n          Dropdown\n        </DropdownToggle>\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"Position right","lang":"ts"}}>
      
    </Example>,
  'Alignments on different breakpoints': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';\n\nexport const DropdownAlignmentOnBreakpoints: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-breakpoints');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"disabled action\"\n      isAriaDisabled\n      component=\"button\"\n      tooltip=\"Tooltip for disabled item\"\n      tooltipProps={{ position: 'top' }}\n    >\n      Disabled action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated action\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      alignments={{\n        sm: 'left',\n        md: 'right',\n        lg: 'left',\n        xl: 'right',\n        '2xl': 'left'\n      }}\n      toggle={\n        <DropdownToggle id=\"toggle-breakpoints\" onToggle={onToggle}>\n          Dropdown\n        </DropdownToggle>\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"Alignments on different breakpoints","lang":"ts"}}>
      
    </Example>,
  'Direction up': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownDirection } from '@patternfly/react-core';\n\nexport const DropdownDirectionUp: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-direction-up');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"disabled action\"\n      isAriaDisabled\n      component=\"button\"\n      tooltip=\"Tooltip for disabled item\"\n      tooltipProps={{ position: 'top' }}\n    >\n      Disabled action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated action\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      direction={DropdownDirection.up}\n      toggle={\n        <DropdownToggle id=\"toggle-direction-up\" onToggle={onToggle}>\n          Dropdown\n        </DropdownToggle>\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"Direction up","lang":"ts"}}>
      
    </Example>,
  'With kebab': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownItem, DropdownSeparator, KebabToggle } from '@patternfly/react-core';\n\nexport const DropdownKebab: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-kebab');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"disabled action\"\n      isAriaDisabled\n      component=\"button\"\n      tooltip=\"Tooltip for disabled item\"\n      tooltipProps={{ position: 'top' }}\n    >\n      Disabled action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated action\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={<KebabToggle id=\"toggle-kebab\" onToggle={onToggle} />}\n      isOpen={isOpen}\n      isPlain\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"With kebab","lang":"ts"}}>
      
    </Example>,
  'With badge': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownItem, BadgeToggle } from '@patternfly/react-core';\nimport AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';\n\nexport const DropdownBadge: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-badge');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"edit\" component=\"button\" icon={<AngleLeftIcon />}>\n      Edit\n    </DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\" icon={<AngleLeftIcon />}>\n      Deployment\n    </DropdownItem>,\n    <DropdownItem key=\"apps\" component=\"button\" icon={<AngleLeftIcon />}>\n      Applications\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={\n        <BadgeToggle id=\"toggle-badge\" onToggle={onToggle}>\n          {dropdownItems.length}\n        </BadgeToggle>\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"With badge","lang":"ts"}}>
      
    </Example>,
  'Icon only': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';\nimport ThIcon from '@patternfly/react-icons/dist/esm/icons/th-icon';\n\nexport const DropdownIconOnly: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-icon-only');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"disabled action\"\n      isAriaDisabled\n      component=\"button\"\n      tooltip=\"Tooltip for disabled item\"\n      tooltipProps={{ position: 'top' }}\n    >\n      Disabled action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated action\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={\n        <DropdownToggle toggleIndicator={null} onToggle={onToggle} aria-label=\"Applications\" id=\"toggle-icon-only\">\n          <ThIcon />\n        </DropdownToggle>\n      }\n      isOpen={isOpen}\n      isPlain\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"Icon only","lang":"ts"}}>
      
    </Example>,
  'Split button': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Dropdown,\n  DropdownToggle,\n  DropdownToggleCheckbox,\n  DropdownItem,\n  DropdownSeparator\n} from '@patternfly/react-core';\n\nexport const DropdownSplitButton: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-split-button');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"disabled action\"\n      isAriaDisabled\n      component=\"button\"\n      tooltip=\"Tooltip for disabled item\"\n      tooltipProps={{ position: 'top' }}\n    >\n      Disabled action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated action\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={\n        <DropdownToggle\n          splitButtonItems={[\n            <DropdownToggleCheckbox id=\"split-button-checkbox\" key=\"split-checkbox\" aria-label=\"Select all\" />\n          ]}\n          onToggle={onToggle}\n          id=\"toggle-split-button\"\n        />\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"Split button","lang":"ts"}}>
      
    </Example>,
  'Split button (with text)': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Dropdown,\n  DropdownToggle,\n  DropdownToggleCheckbox,\n  DropdownItem,\n  DropdownSeparator\n} from '@patternfly/react-core';\n\nexport const DropdownSplitButtonText: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-split-button-text');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"disabled action\"\n      isAriaDisabled\n      component=\"button\"\n      tooltip=\"Tooltip for disabled item\"\n      tooltipProps={{ position: 'top' }}\n    >\n      Disabled action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated action\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={\n        <DropdownToggle\n          splitButtonItems={[\n            <DropdownToggleCheckbox id=\"split-button-text-checkbox\" key=\"split-checkbox\" aria-label=\"Select all\">\n              10 selected\n            </DropdownToggleCheckbox>\n          ]}\n          onToggle={onToggle}\n          id=\"toggle-split-button-text\"\n        />\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"Split button (with text)","lang":"ts"}}>
      
    </Example>,
  'Split button (indeterminate state)': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Dropdown,\n  DropdownToggle,\n  DropdownToggleCheckbox,\n  DropdownItem,\n  DropdownSeparator\n} from '@patternfly/react-core';\n\nexport const DropdownSplitButtonIndeterminate: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n  const [isChecked, setIsChecked] = React.useState(null);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-split-button-indeterminate');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const onChange = (isChecked: boolean) => {\n    setIsChecked(isChecked);\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"disabled action\"\n      isAriaDisabled\n      component=\"button\"\n      tooltip=\"Tooltip for disabled item\"\n      tooltipProps={{ position: 'top' }}\n    >\n      Disabled action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated action\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={\n        <DropdownToggle\n          splitButtonItems={[\n            <DropdownToggleCheckbox\n              id=\"split-button-indeterminate-checkbox\"\n              key=\"split-checkbox\"\n              aria-label=\"Select all\"\n              onChange={checked => onChange(checked)}\n              isChecked={isChecked}\n            />\n          ]}\n          onToggle={onToggle}\n          id=\"toggle-split-button-indeterminate\"\n        />\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"Split button (indeterminate state)","lang":"ts"}}>
      
    </Example>,
  'Split button (disabled)': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Dropdown,\n  DropdownToggle,\n  DropdownToggleCheckbox,\n  DropdownItem,\n  DropdownSeparator\n} from '@patternfly/react-core';\n\nexport const DropdownSplitButtonDisabled: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-split-button');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"disabled action\"\n      isAriaDisabled\n      component=\"button\"\n      tooltip=\"Tooltip for disabled item\"\n      tooltipProps={{ position: 'top' }}\n    >\n      Disabled action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated action\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={\n        <DropdownToggle\n          splitButtonItems={[\n            <DropdownToggleCheckbox\n              isDisabled\n              id=\"split-button-disabled-checkbox\"\n              key=\"split-checkbox\"\n              aria-label=\"Select all\"\n            />\n          ]}\n          onToggle={onToggle}\n          isDisabled\n          id=\"toggle-split-button-disabled\"\n        />\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"Split button (disabled)","lang":"ts"}}>
      
    </Example>,
  'Split button action': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownToggleAction, DropdownItem } from '@patternfly/react-core';\nimport CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';\nimport BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';\nimport CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';\n\nexport const DropdownSplitButtonAction: React.FunctionComponent = () => {\n  const [isActionOpen, setIsActionOpen] = React.useState(false);\n  const [isCogOpen, setIsCogOpen] = React.useState(false);\n\n  const onActionToggle = (isActionOpen: boolean) => {\n    setIsActionOpen(isActionOpen);\n  };\n  const onCogToggle = (isCogOpen: boolean) => {\n    setIsCogOpen(isCogOpen);\n  };\n\n  const onActionClick = () => {\n    window.alert('You selected an action button!');\n  };\n  const onCogClick = () => {\n    window.alert('You selected the Cog!');\n  };\n\n  const onActionFocus = () => {\n    const element = document.getElementById('toggle-split-button-action');\n    element.focus();\n  };\n  const onCogFocus = () => {\n    const element = document.getElementById('toggle-split-button-cog');\n    element.focus();\n  };\n\n  const onActionSelect = () => {\n    setIsActionOpen(false);\n    onActionFocus();\n  };\n  const onCogSelect = () => {\n    setIsCogOpen(false);\n    onCogFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"action\" component=\"button\" onClick={onActionClick}>\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" component=\"button\" isDisabled onClick={onActionClick}>\n      Disabled action\n    </DropdownItem>,\n    <DropdownItem key=\"other action\" component=\"button\" onClick={onActionClick}>\n      Other action\n    </DropdownItem>\n  ];\n\n  const dropdownIconItems = [\n    <DropdownItem key=\"action\" component=\"button\" icon={<CogIcon />} onClick={onActionClick}>\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" component=\"button\" icon={<BellIcon />} isDisabled onClick={onActionClick}>\n      Disabled action\n    </DropdownItem>,\n    <DropdownItem key=\"other action\" component=\"button\" icon={<CubesIcon />} onClick={onActionClick}>\n      Other action\n    </DropdownItem>\n  ];\n\n  return (\n    <React.Fragment>\n      <Dropdown\n        onSelect={onActionSelect}\n        toggle={\n          <DropdownToggle\n            id=\"toggle-split-button-action\"\n            splitButtonItems={[\n              <DropdownToggleAction key=\"action\" onClick={onActionClick}>\n                Action\n              </DropdownToggleAction>\n            ]}\n            splitButtonVariant=\"action\"\n            onToggle={onActionToggle}\n          />\n        }\n        isOpen={isActionOpen}\n        dropdownItems={dropdownItems}\n      />{' '}\n      <Dropdown\n        onSelect={onCogSelect}\n        toggle={\n          <DropdownToggle\n            id=\"toggle-split-button-cog\"\n            splitButtonItems={[\n              <DropdownToggleAction key=\"cog-action\" aria-label=\"Action\" onClick={onCogClick}>\n                <CogIcon />\n              </DropdownToggleAction>\n            ]}\n            splitButtonVariant=\"action\"\n            onToggle={onCogToggle}\n          />\n        }\n        isOpen={isCogOpen}\n        dropdownItems={dropdownIconItems}\n      />\n    </React.Fragment>\n  );\n};\n","title":"Split button action","lang":"ts"}}>
      
    </Example>,
  'Split button primary action': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownToggleAction, DropdownItem } from '@patternfly/react-core';\nimport CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';\nimport BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';\nimport CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';\n\nexport const DropdownSplitButtonActionPrimary: React.FunctionComponent = () => {\n  const [isActionOpen, setIsActionOpen] = React.useState(false);\n  const [isCogOpen, setIsCogOpen] = React.useState(false);\n\n  const onActionToggle = (isActionOpen: boolean) => {\n    setIsActionOpen(isActionOpen);\n  };\n  const onCogToggle = (isCogOpen: boolean) => {\n    setIsCogOpen(isCogOpen);\n  };\n\n  const onActionClick = () => {\n    window.alert('You selected an action button!');\n  };\n  const onCogClick = () => {\n    window.alert('You selected the Cog!');\n  };\n\n  const onActionFocus = () => {\n    const element = document.getElementById('toggle-split-button-action-primary');\n    element.focus();\n  };\n  const onCogFocus = () => {\n    const element = document.getElementById('toggle-split-button-cog-primary');\n    element.focus();\n  };\n\n  const onActionSelect = () => {\n    setIsActionOpen(false);\n    onActionFocus();\n  };\n  const onCogSelect = () => {\n    setIsCogOpen(false);\n    onCogFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"action\" component=\"button\" onClick={onActionClick}>\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" component=\"button\" isDisabled onClick={onActionClick}>\n      Disabled action\n    </DropdownItem>,\n    <DropdownItem key=\"other action\" component=\"button\" onClick={onActionClick}>\n      Other action\n    </DropdownItem>\n  ];\n\n  const dropdownIconItems = [\n    <DropdownItem key=\"action\" component=\"button\" icon={<CogIcon />} onClick={onActionClick}>\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" component=\"button\" icon={<BellIcon />} isDisabled onClick={onActionClick}>\n      Disabled action\n    </DropdownItem>,\n    <DropdownItem key=\"other action\" component=\"button\" icon={<CubesIcon />} onClick={onActionClick}>\n      Other action\n    </DropdownItem>\n  ];\n\n  return (\n    <React.Fragment>\n      <Dropdown\n        onSelect={onActionSelect}\n        toggle={\n          <DropdownToggle\n            id=\"toggle-split-button-action-primary\"\n            splitButtonItems={[\n              <DropdownToggleAction key=\"action\" onClick={onActionClick}>\n                Action\n              </DropdownToggleAction>\n            ]}\n            toggleVariant=\"primary\"\n            splitButtonVariant=\"action\"\n            onToggle={onActionToggle}\n          />\n        }\n        isOpen={isActionOpen}\n        dropdownItems={dropdownItems}\n      />{' '}\n      <Dropdown\n        onSelect={onCogSelect}\n        toggle={\n          <DropdownToggle\n            id=\"toggle-split-button-cog-primary\"\n            splitButtonItems={[\n              <DropdownToggleAction key=\"cog-action\" aria-label=\"Action\" onClick={onCogClick}>\n                <CogIcon />\n              </DropdownToggleAction>\n            ]}\n            toggleVariant=\"primary\"\n            splitButtonVariant=\"action\"\n            onToggle={onCogToggle}\n          />\n        }\n        isOpen={isCogOpen}\n        dropdownItems={dropdownIconItems}\n      />\n    </React.Fragment>\n  );\n};\n","title":"Split button primary action","lang":"ts"}}>
      
    </Example>,
  'Basic panel': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle } from '@patternfly/react-core';\n\nexport const DropdownBasicPanel: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-panel');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={\n        <DropdownToggle id=\"toggle-panel\" onToggle={onToggle}>\n          Expanded dropdown\n        </DropdownToggle>\n      }\n      isOpen={isOpen}\n    >\n      [Panel contents here]\n    </Dropdown>\n  );\n};\n","title":"Basic panel","lang":"ts"}}>
      
    </Example>,
  'Router link': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownItem } from '@patternfly/react-core';\nimport { Link } from '@reach/router';\n\nexport const DropdownRouterLink: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-router-link');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [<DropdownItem key=\"routerlink\" component={<Link to=\"/\">@reach/router Link</Link>} />];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={\n        <DropdownToggle id=\"toggle-router-link\" onToggle={onToggle}>\n          Dropdown\n        </DropdownToggle>\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"Router link","lang":"ts"}}>
      
    </Example>,
  'Dropdown with image and text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Avatar,\n  Dropdown,\n  DropdownGroup,\n  DropdownToggle,\n  DropdownItem,\n  DropdownSeparator\n} from '@patternfly/react-core';\nimport avatarImg from '../../Avatar/examples/avatarImg.svg';\n\nexport const DropdownImageAndText: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-image-and-text');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownGroup key=\"group 1\">\n      <DropdownItem key=\"group 1 plaintext\" component=\"div\" isPlainText>\n        Text\n      </DropdownItem>\n      <DropdownItem key=\"group 1 plaintext2\" component=\"div\" isPlainText>\n        More text\n      </DropdownItem>\n    </DropdownGroup>,\n    <DropdownSeparator key=\"dropdown separator\" />,\n    <DropdownGroup key=\"group 2\">\n      <DropdownItem key=\"group 2 profile\">My profile</DropdownItem>\n      <DropdownItem key=\"group 2 user\" component=\"button\">\n        User management\n      </DropdownItem>\n      <DropdownItem key=\"group 2 logout\">Logout</DropdownItem>\n    </DropdownGroup>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={\n        <DropdownToggle\n          id=\"toggle-image-and-text\"\n          onToggle={onToggle}\n          icon={<Avatar src={avatarImg} alt=\"avatar\"></Avatar>}\n        >\n          Ned Username\n        </DropdownToggle>\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"Dropdown with image and text","lang":"ts"}}>
      
    </Example>,
  'Appending document body vs parent': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, Flex } from '@patternfly/react-core';\n\nexport const DropdownAppendBodyVsParent: React.FunctionComponent = () => {\n  const [isBodyOpen, setIsBodyOpen] = React.useState(false);\n  const [isParentOpen, setIsParentOpen] = React.useState(false);\n\n  const onBodyToggle = (isBodyOpen: boolean) => {\n    setIsBodyOpen(isBodyOpen);\n  };\n  const onParentToggle = (isParentOpen: boolean) => {\n    setIsParentOpen(isParentOpen);\n  };\n\n  const onBodyFocus = () => {\n    const element = document.getElementById('toggle-append-body');\n    element.focus();\n  };\n  const onParentFocus = () => {\n    const element = document.getElementById('toggle-append-parent');\n    element.focus();\n  };\n\n  const onBodySelect = () => {\n    setIsBodyOpen(false);\n    onBodyFocus();\n  };\n  const onParentSelect = () => {\n    setIsParentOpen(false);\n    onParentFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\">Link</DropdownItem>,\n    <DropdownItem key=\"action\" component=\"button\">\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled href=\"www.google.com\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"disabled action\"\n      isAriaDisabled\n      component=\"button\"\n      tooltip=\"Tooltip for disabled item\"\n      tooltipProps={{ position: 'top' }}\n    >\n      Disabled action\n    </DropdownItem>,\n    <DropdownSeparator key=\"separator\" />,\n    <DropdownItem key=\"separated link\">Separated link</DropdownItem>,\n    <DropdownItem key=\"separated action\" component=\"button\">\n      Separated action\n    </DropdownItem>\n  ];\n\n  return (\n    <Flex>\n      <Dropdown\n        onSelect={onBodySelect}\n        toggle={\n          <DropdownToggle id=\"toggle-append-body\" onToggle={onBodyToggle}>\n            Dropdown appended to body\n          </DropdownToggle>\n        }\n        isOpen={isBodyOpen}\n        dropdownItems={dropdownItems}\n        menuAppendTo={() => document.body}\n      />\n      <Dropdown\n        onSelect={onParentSelect}\n        toggle={\n          <DropdownToggle id=\"toggle-append-parent\" onToggle={onParentToggle}>\n            Dropdown appended to parent\n          </DropdownToggle>\n        }\n        isOpen={isParentOpen}\n        dropdownItems={dropdownItems}\n        menuAppendTo=\"parent\"\n      />\n    </Flex>\n  );\n};\n","title":"Appending document body vs parent","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Avoid passing in `}
        
        <code {...{"className":"ws-code"}}>
          {`document.body`}
        </code>
        {` when passing a value to the `}
        
        <code {...{"className":"ws-code"}}>
          {`menuAppendTo`}
        </code>
        {` prop on the Dropdown component, as it can cause accessibility issues. These issues can include, but are not limited to, being unable to enter the contents of the Dropdown options via assistive technologies (like keyboards or screen readers).`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`Instead append to `}
        
        <code {...{"className":"ws-code"}}>
          {`"parent"`}
        </code>
        {` to achieve the same result without sacrificing accessibility.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`In this example, while, after making a selection, both variants retain focus on their respective Dropdown component, the options for the `}
        
        <code {...{"className":"ws-code"}}>
          {`document.body`}
        </code>
        {` variant cannot be navigated to via Voice Over.`}
      </p>
    </Example>,
  'Dropdown with descriptions': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Dropdown, DropdownToggle, DropdownItem } from '@patternfly/react-core';\nimport BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';\nimport CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';\n\nexport const DropdownDescriptions: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n\n  const onToggle = (isOpen: boolean) => {\n    setIsOpen(isOpen);\n  };\n\n  const onFocus = () => {\n    const element = document.getElementById('toggle-descriptions');\n    element.focus();\n  };\n\n  const onSelect = () => {\n    setIsOpen(false);\n    onFocus();\n  };\n\n  const dropdownItems = [\n    <DropdownItem key=\"link\" description=\"This is a description\" icon={<CubesIcon />}>\n      Link\n    </DropdownItem>,\n    <DropdownItem\n      key=\"action\"\n      component=\"button\"\n      icon={<BellIcon />}\n      description=\"This is a very long description that describes the menu item\"\n    >\n      Action\n    </DropdownItem>,\n    <DropdownItem key=\"disabled link\" isDisabled description=\"Disabled link description\">\n      Disabled link\n    </DropdownItem>,\n    <DropdownItem key=\"disabled action\" isDisabled component=\"button\" description=\"This is a description\">\n      Disabled action\n    </DropdownItem>\n  ];\n\n  return (\n    <Dropdown\n      onSelect={onSelect}\n      toggle={\n        <DropdownToggle id=\"toggle-descriptions\" onToggle={onToggle}>\n          Dropdown\n        </DropdownToggle>\n      }\n      isOpen={isOpen}\n      dropdownItems={dropdownItems}\n    />\n  );\n};\n","title":"Dropdown with descriptions","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With initial selection"])}
    {React.createElement(pageData.examples["With groups"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Primary toggle"])}
    {React.createElement(pageData.examples["Secondary toggle"])}
    {React.createElement(pageData.examples["Plain with text toggle"])}
    {React.createElement(pageData.examples["Position right"])}
    {React.createElement(pageData.examples["Alignments on different breakpoints"])}
    {React.createElement(pageData.examples["Direction up"])}
    {React.createElement(pageData.examples["With kebab"])}
    {React.createElement(pageData.examples["With badge"])}
    {React.createElement(pageData.examples["Icon only"])}
    {React.createElement(pageData.examples["Split button"])}
    {React.createElement(pageData.examples["Split button (with text)"])}
    {React.createElement(pageData.examples["Split button (indeterminate state)"])}
    {React.createElement(pageData.examples["Split button (disabled)"])}
    {React.createElement(pageData.examples["Split button action"])}
    {React.createElement(pageData.examples["Split button primary action"])}
    {React.createElement(pageData.examples["Basic panel"])}
    {React.createElement(pageData.examples["Router link"])}
    {React.createElement(pageData.examples["Dropdown with image and text"])}
    {React.createElement(pageData.examples["Appending document body vs parent"])}
    {React.createElement(pageData.examples["Dropdown with descriptions"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsDropdownReactDocs';
Component.pageData = pageData;

export default Component;
