import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';
const pageData = {
  "id": "Options menu",
  "section": "components",
  "source": "react",
  "slug": "/components/options-menu/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/OptionsMenu/examples/OptionsMenu.md",
  "propComponents": [
    {
      "name": "OptionsMenu",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Classes applied to root element of the options menu",
          "defaultValue": "''"
        },
        {
          "name": "direction",
          "type": "'up' | 'down'",
          "description": "Menu will open up or open down from the options menu toggle"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Id of the root element of the options menu",
          "required": true
        },
        {
          "name": "isGrouped",
          "type": "boolean",
          "description": "Flag to indicate if menu is groupped",
          "defaultValue": "false"
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "Flag to indicate if menu is open"
        },
        {
          "name": "isPlain",
          "type": "boolean",
          "description": "Flag to indicate the toggle has no border or background"
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
          "name": "menuItems",
          "type": "React.ReactNode[]",
          "description": "Array of OptionsMenuItem and/or OptionMenuGroup nodes that will be rendered in the options menu list",
          "required": true
        },
        {
          "name": "ouiaSafe",
          "type": "No type info",
          "defaultValue": "true"
        },
        {
          "name": "position",
          "type": "'right' | 'left'",
          "description": "Indicates where menu will be aligned horizontally"
        },
        {
          "name": "toggle",
          "type": "React.ReactElement",
          "description": "Either an OptionsMenuToggle or an OptionsMenuToggleWithText to use to toggle the options menu",
          "required": true
        }
      ]
    },
    {
      "name": "OptionsMenuItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything which can be rendered as an options menu item",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Classes applied to root element of an options menu item"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Unique id of this options menu item",
          "defaultValue": "''"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Render options menu item as disabled option"
        },
        {
          "name": "isSelected",
          "type": "boolean",
          "description": "Render options menu item as selected",
          "defaultValue": "false"
        },
        {
          "name": "onSelect",
          "type": "(event?: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent) => void",
          "description": "Callback for when this options menu item is selected",
          "defaultValue": "() => null as any"
        }
      ]
    },
    {
      "name": "OptionsMenuSeparator",
      "description": "",
      "props": [
        {
          "name": "component",
          "type": "No type info",
          "defaultValue": "'li'"
        }
      ]
    },
    {
      "name": "OptionsMenuToggle",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Provides an accessible name for the button when an icon is used instead of text",
          "defaultValue": "'Options menu'"
        },
        {
          "name": "hideCaret",
          "type": "boolean",
          "description": "hide the toggle caret",
          "defaultValue": "false"
        },
        {
          "name": "isActive",
          "type": "boolean",
          "description": "Forces display of the active state of the options menu",
          "defaultValue": "false"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Disables the options menu toggle",
          "defaultValue": "false"
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "Flag to indicate if menu is open",
          "defaultValue": "false"
        },
        {
          "name": "isPlain",
          "type": "boolean",
          "description": "Flag to indicate if the button is plain",
          "defaultValue": "false"
        },
        {
          "name": "isSplitButton",
          "type": "boolean",
          "description": "",
          "defaultValue": "false"
        },
        {
          "name": "onToggle",
          "type": "(isOpen: boolean) => void",
          "description": "Callback for when this options menu is toggled"
        },
        {
          "name": "parentId",
          "type": "string",
          "description": "Id of the parent options menu component",
          "defaultValue": "''"
        },
        {
          "name": "toggleTemplate",
          "type": "React.ReactNode",
          "description": "Content to be rendered in the options menu toggle button",
          "defaultValue": "<React.Fragment />"
        }
      ]
    },
    {
      "name": "OptionsMenuToggleWithText",
      "description": "",
      "props": [
        {
          "name": "aria-haspopup",
          "type": "boolean | 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid'",
          "description": "Indicates that the element has a popup context menu or sub-level menu"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Provides an accessible name for the button when an icon is used instead of text",
          "defaultValue": "'Options menu'"
        },
        {
          "name": "isActive",
          "type": "boolean",
          "description": "Forces display of the active state of the options menu button",
          "defaultValue": "false"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Disables the options menu toggle",
          "defaultValue": "false"
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "Flag to indicate if menu is open",
          "defaultValue": "false"
        },
        {
          "name": "isPlain",
          "type": "boolean",
          "description": "Flag to indicate if the button is plain",
          "defaultValue": "false"
        },
        {
          "name": "onEnter",
          "type": "(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<Element>) => void",
          "description": "Inner function to indicate open on Enter"
        },
        {
          "name": "onToggle",
          "type": "(event: boolean) => void",
          "description": "Callback for when this options menu is toggled",
          "defaultValue": "() => null as any"
        },
        {
          "name": "parentId",
          "type": "string",
          "description": "Id of the parent options menu component",
          "defaultValue": "''"
        },
        {
          "name": "toggleButtonContents",
          "type": "React.ReactNode",
          "description": "Content to be rendered inside the options menu toggle button"
        },
        {
          "name": "toggleButtonContentsClassName",
          "type": "string",
          "description": "Classes to be added to the options menu toggle button",
          "defaultValue": "''"
        },
        {
          "name": "toggleText",
          "type": "React.ReactNode",
          "description": "Content to be rendered inside the options menu toggle as text or another non-interactive element",
          "required": true
        },
        {
          "name": "toggleTextClassName",
          "type": "string",
          "description": "classes to be added to the options menu toggle text",
          "defaultValue": "''"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-options-menu"
  ],
  "examples": [
    "Single option",
    "Disabled",
    "Multiple options",
    "Plain",
    "Align top",
    "Align right",
    "Plain with text",
    "Plain with text disabled",
    "Grouped items with titles",
    "Single option with menu on document body"
  ]
};
pageData.liveContext = {
  CaretDownIcon,
  SortAmountDownIcon
};
pageData.examples = {
  'Single option': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { OptionsMenu, OptionsMenuItem, OptionsMenuToggle } from '@patternfly/react-core';\n\nclass SingleOption extends React.Component {\n  constructor(props) {\n      super(props);\n      this.state = {\n        isOpen: false,\n        toggleTemplateText: \"Options menu\",\n        selectedOption: \"singleOption1\"\n      };\n\n      this.onToggle = () => {\n          this.setState({\n              isOpen: !this.state.isOpen\n          });\n      };\n      \n      this.onSelect = event => {\n        const id = event.currentTarget.id;\n        this.setState(() => {\n          return { selectedOption: id };\n        });\n      };\n      \n    }\n    \n  render() {\n    const { selectedOption, toggleTemplateText, isOpen } = this.state;\n    const menuItems = [\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={selectedOption === \"singleOption1\"} id=\"singleOption1\" key=\"option 1\">Option 1</OptionsMenuItem>,\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={selectedOption === \"singleOption2\"} id=\"singleOption2\" key=\"option 2\">Option 2</OptionsMenuItem>,\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={selectedOption === \"singleOption3\"} id=\"singleOption3\" key=\"option 3\">Option 3</OptionsMenuItem>\n    ];\n    const toggle = <OptionsMenuToggle onToggle={this.onToggle} toggleTemplate={toggleTemplateText} />\n\n    return (\n      <OptionsMenu \n        id=\"options-menu-single-option-example\" \n        menuItems={menuItems} \n        isOpen={isOpen} \n        toggle={toggle}/>\n    );\n  }\n}","title":"Single option","lang":"js"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { OptionsMenu, OptionsMenuItem, OptionsMenuToggle } from '@patternfly/react-core';\n\nclass DisabledOptionsMenu extends React.Component {\n  constructor(props) {\n      super(props);\n      this.state = {\n        isOpen: false,\n        toggleTemplateText: \"Disabled options menu\"\n      };\n\n      this.onToggle = () => {\n          this.setState({\n              isOpen: !this.state.isOpen\n          });\n      };\n    }\n    \n  render() {\n    const { toggleTemplateText, isOpen } = this.state;\n    const menuItems = [];\n    const toggle = <OptionsMenuToggle isDisabled onToggle={this.onToggle} toggleTemplate={toggleTemplateText} />\n\n    return (\n      <OptionsMenu \n        id=\"options-menu-single-disabled-example-toggle\" \n        isOpen={isOpen} \n        menuItems={menuItems}\n        toggle={toggle}/>\n    );\n  }\n}","title":"Disabled","lang":"js"}}>
      
    </Example>,
  'Multiple options': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { OptionsMenu, OptionsMenuItem, OptionsMenuSeparator, OptionsMenuItemGroup, OptionsMenuToggle} from '@patternfly/react-core';\n\nclass MultipleOptions extends React.Component {\n  constructor(props) {\n      super(props);\n      this.state = {\n        isOpen: false,\n        toggleTemplateText: \"Sort by\",\n        sortColumn: \"date\",\n        sortDirection: \"ascending\"\n      };\n\n      this.onToggle = () => {\n          this.setState({\n              isOpen: !this.state.isOpen\n          });\n      };\n      \n      this.onSelectColumn = event => {\n        const id = event.currentTarget.id;\n        this.setState(() => {\n          return { sortColumn: id };\n        });\n      };\n      \n      this.onSelectDirection = event => {\n        const id = event.currentTarget.id;\n        this.setState(() => {\n          return { sortDirection: id };\n        });\n      };\n    }\n\n  render() {\n    const { sortColumn, sortDirection, toggleTemplateText, isOpen } = this.state;\n    const menuItems = [\n        <OptionsMenuItemGroup key=\"first group\" aria-label=\"Sort Column\">\n          <OptionsMenuItem onSelect={this.onSelectColumn} isSelected={sortColumn === \"name\"} id=\"name\" key=\"name\">Name</OptionsMenuItem>\n          <OptionsMenuItem onSelect={this.onSelectColumn} isSelected={sortColumn === \"date\"} id=\"date\" key=\"date\">Date</OptionsMenuItem>\n          <OptionsMenuItem isDisabled onSelect={this.onSelectColumn} isSelected={sortColumn === \"disabled\"} id=\"disabled\" key=\"disabled\">Disabled</OptionsMenuItem>\n          <OptionsMenuItem onSelect={this.onSelectColumn} isSelected={sortColumn === \"size\"} id=\"size\" key=\"size\">Size</OptionsMenuItem>\n        </OptionsMenuItemGroup>,\n        <OptionsMenuSeparator key=\"separator\"/>,\n        <OptionsMenuItemGroup key=\"second group\" aria-label=\"Sort Direction\">\n          <OptionsMenuItem onSelect={this.onSelectDirection} isSelected={sortDirection === \"ascending\"} id=\"ascending\" key=\"ascending\">Ascending</OptionsMenuItem>\n          <OptionsMenuItem onSelect={this.onSelectDirection} isSelected={sortDirection === \"descending\"} id=\"descending\" key=\"descending\">Descending</OptionsMenuItem>\n        </OptionsMenuItemGroup>\n      ];\n    const toggle = <OptionsMenuToggle onToggle={this.onToggle} toggleTemplate={toggleTemplateText} />\n\n    return (\n      <OptionsMenu \n        id=\"options-menu-multiple-options-example\" \n        menuItems={menuItems} \n        isOpen={isOpen}\n        toggle={toggle}\n        isGrouped />\n    );\n  }\n}","title":"Multiple options","lang":"js"}}>
      
    </Example>,
  'Plain': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { OptionsMenu, OptionsMenuItem, OptionsMenuToggle } from '@patternfly/react-core';\nimport SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';\n\nclass Plain extends React.Component {\n  constructor(props) {\n      super(props);\n      this.state = {\n        isOpen: false,\n        isDisabledOpen: false,\n        plainOption1: true,\n        plainOption2: false,\n        plainOption3: false,\n        disabledPlainOption1: true,\n        disabledPlainOption2: false,\n        disabledPlainOption3: false\n      };\n\n      this.onToggle = () => {\n          this.setState({\n              isOpen: !this.state.isOpen\n          });\n      };\n\n      this.onDisabledToggle = () => {\n          this.setState({\n              isDisabledOpen: !this.state.isDisabledOpen\n          });\n      };\n      \n      this.onSelect = event => {\n        const id = event.currentTarget.id;\n        this.setState((prevState) => {\n          return { [id]: !prevState[id] };\n        });\n      };\n    }\n\n  render() {\n    const { isOpen, isDisabledOpen, plainOption1, plainOption2, plainOption3, disabledPlainOption1, disabledPlainOption2, disabledPlainOption3 } = this.state\n    const menuItems = [\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={plainOption1} id=\"plainOption1\" key=\"option 1\">Option 1</OptionsMenuItem>,\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={plainOption2} id=\"plainOption2\" key=\"option 2\">Option 2</OptionsMenuItem>,\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={plainOption3} id=\"plainOption3\" key=\"option 3\">Option 3</OptionsMenuItem>\n    ];\n\n    const disabledMenuItems = [\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={disabledPlainOption1} id=\"disabledPlainOption1\" key=\"disabled option 1\">Option 1</OptionsMenuItem>,\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={disabledPlainOption2} id=\"disabledPlainOption2\" key=\"disabled option 2\">Option 2</OptionsMenuItem>,\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={disabledPlainOption3} id=\"disabledPlainOption3\" key=\"disabled option 3\">Option 3</OptionsMenuItem>\n    ];\n    const toggleTemplate = <SortAmountDownIcon aria-hidden=\"true\"/>\n    \n    const toggle = <OptionsMenuToggle onToggle={this.onToggle} toggleTemplate={toggleTemplate} aria-label=\"Sort by\" hideCaret/>\n\n    const disabledToggle = <OptionsMenuToggle isDisabled onToggle={this.onDisabledToggle} toggleTemplate={toggleTemplate} aria-label=\"Sort by\" hideCaret/>\n\n    return (\n      <React.Fragment>\n        <OptionsMenu id=\"options-menu-plain-disabled-example\" \n          isPlain\n          menuItems={disabledMenuItems}  \n          isOpen={isDisabledOpen}\n          toggle={disabledToggle}/>\n        <OptionsMenu id=\"options-menu-plain-example\" \n          isPlain\n          menuItems={menuItems}  \n          isOpen={isOpen}\n          toggle={toggle}/>\n      </React.Fragment>\n    );\n  }\n}","title":"Plain","lang":"js"}}>
      
    </Example>,
  'Align top': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { OptionsMenu, OptionsMenuItem, OptionsMenuDirection, OptionsMenuToggle } from '@patternfly/react-core';\n\nclass Top extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false,\n      toggleTemplateText: \"Options menu\",\n      topOption1: false,\n      topOption2: false,\n      topOption3: false\n    };\n\n    this.onToggle = () => {\n        this.setState({\n            isOpen: !this.state.isOpen\n        });\n    };\n    \n    this.onSelect = event => {\n      const id = event.currentTarget.id;\n      this.setState((prevState) => {\n        return { [id]: !prevState[id] };\n      });\n    };\n  }\n\n  render() {\n    const { isOpen, topOption1, topOption2, topOption3, toggleTemplateText } = this.state\n    const menuItems = [\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={topOption1} id=\"topOption1\" key=\"option 1\">Option 1</OptionsMenuItem>,\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={topOption2} id=\"topOption2\" key=\"option 2\">Option 2</OptionsMenuItem>,\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={topOption3} id=\"topOption3\" key=\"option 3\">Option 3</OptionsMenuItem>\n    ];\n    const toggle = <OptionsMenuToggle onToggle={this.onToggle} toggleTemplate={toggleTemplateText} />\n\n    return (\n      <OptionsMenu \n        id=\"options-menu-top-example\" \n        direction={OptionsMenuDirection.up} \n        menuItems={menuItems} \n        toggle={toggle} \n        isOpen={isOpen} />\n    );\n  }\n}","title":"Align top","lang":"js"}}>
      
    </Example>,
  'Align right': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { OptionsMenu, OptionsMenuItem, OptionsMenuPosition, OptionsMenuToggle } from '@patternfly/react-core';\n\nclass AlignRight extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false,\n      toggleTemplateText: \"Align right\",\n      rightOption1: true,\n      rightOption2: false,\n      rightOption3: false\n    };\n\n    this.onToggle = () => {\n        this.setState({\n            isOpen: !this.state.isOpen\n        });\n    };\n    \n    this.onSelect = event => {\n      const id = event.currentTarget.id;\n      this.setState((prevState) => {\n        return { [id]: !prevState[id] };\n      });\n    };\n  }\n\n  render() {\n    const { isOpen, toggleTemplateText, rightOption1, rightOption2, rightOption3 } = this.state;\n    const menuItems = [\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={rightOption1} id=\"rightOption1\" key=\"option 1\">Right option 1</OptionsMenuItem>,\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={rightOption2} id=\"rightOption2\" key=\"option 2\">Right option 2</OptionsMenuItem>,\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={rightOption3} id=\"rightOption3\" key=\"option 3\">Right option 3</OptionsMenuItem>\n    ];\n    const toggle = <OptionsMenuToggle onToggle={this.onToggle} toggleTemplate={toggleTemplateText} />\n\n    return (\n      <OptionsMenu \n        id=\"options-menu-align-right-example\" \n        position={OptionsMenuPosition.right} \n        menuItems={menuItems} \n        toggle={toggle} \n        isOpen={isOpen} />\n    );\n  }\n}","title":"Align right","lang":"js"}}>
      
    </Example>,
  'Plain with text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { OptionsMenu, OptionsMenuItem, OptionsMenuToggleWithText } from '@patternfly/react-core';\nimport CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';\n\nclass PlainWithText extends React.Component {\n  constructor(props) {\n      super(props);\n      this.state = {\n        isOpen: false,\n        toggleText: <React.Fragment>Custom text</React.Fragment>,\n        buttonContents: <CaretDownIcon/>,\n        customOption1: true,\n        customOption2: false,\n        customOption3: false\n      };\n\n      this.onToggle = () => {\n          this.setState({\n              isOpen: !this.state.isOpen\n          });\n      };\n      \n      this.onSelect = event => {\n        const id = event.currentTarget.id;\n        this.setState((prevState) => {\n          return { [id]: !prevState[id] };\n        });\n      };\n\n      this.onToggle = () => {\n        this.setState({\n          isOpen: !this.state.isOpen\n        });\n      };\n    }\n\n  render() {\n    const { isOpen, toggleText, buttonContents } = this.state;\n    const menuItems = [\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={this.state.customOption1} id=\"customOption1\" key=\"option 1\">Option 1</OptionsMenuItem>,\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={this.state.customOption2} id=\"customOption2\" key=\"option 2\">Option 2</OptionsMenuItem>,\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={this.state.customOption3} id=\"customOption3\" key=\"option 3\">Option 3</OptionsMenuItem>\n    ];\n    const toggle = <OptionsMenuToggleWithText toggleText={toggleText} toggleButtonContents={buttonContents} onToggle={this.onToggle} />;\n\n    return (\n      <OptionsMenu \n        id=\"options-menu-plain-with-text-example\" \n        menuItems={menuItems} \n        isOpen={isOpen} \n        isPlain\n        isText\n        toggle={toggle} />\n    );\n  }\n}","title":"Plain with text","lang":"js"}}>
      
    </Example>,
  'Plain with text disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { OptionsMenu, OptionsMenuItem, OptionsMenuToggleWithText } from '@patternfly/react-core';\nimport CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';\n\nclass PlainWithText extends React.Component {\n  constructor(props) {\n      super(props);\n      this.state = {\n        isOpen: false,\n        toggleText: <React.Fragment>Custom text</React.Fragment>,\n        buttonContents: <CaretDownIcon/>,\n        customOption1: true,\n        customOption2: false,\n        customOption3: false\n      };\n\n      this.onToggle = () => {\n          this.setState({\n              isOpen: !this.state.isOpen\n          });\n      };\n      \n      this.onSelect = event => {\n        const id = event.currentTarget.id;\n        this.setState((prevState) => {\n          return { [id]: !prevState[id] };\n        });\n      };\n\n      this.onToggle = () => {\n        this.setState({\n          isOpen: !this.state.isOpen\n        });\n      };\n    }\n\n  render() {\n    const { isOpen, toggleText, buttonContents } = this.state;\n    const menuItems = [\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={this.state.customOption1} id=\"customOption1\" key=\"option 1\">Option 1</OptionsMenuItem>,\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={this.state.customOption2} id=\"customOption2\" key=\"option 2\">Option 2</OptionsMenuItem>,\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={this.state.customOption3} id=\"customOption3\" key=\"option 3\">Option 3</OptionsMenuItem>\n    ];\n    const toggle = <OptionsMenuToggleWithText isDisabled toggleText={toggleText} toggleButtonContents={buttonContents} onToggle={this.onToggle} />;\n\n    return (\n      <OptionsMenu \n        id=\"options-menu-plain-with-text-example\" \n        menuItems={menuItems} \n        isOpen={isOpen} \n        isPlain\n        isText\n        toggle={toggle} />\n    );\n  }\n}","title":"Plain with text disabled","lang":"js"}}>
      
    </Example>,
  'Grouped items with titles': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { OptionsMenu, OptionsMenuItem, OptionsMenuToggle, OptionsMenuItemGroup } from '@patternfly/react-core';\n\nclass GroupedItems extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false,\n      toggleTemplateText: \"Options menu\",\n      selectedOption: \"groupOption1\"\n    };\n    \n    this.onToggle = () => {\n      this.setState({\n        isOpen: !this.state.isOpen\n      });\n    };\n    \n    this.onSelect = event => {\n      const id = event.currentTarget.id;\n      this.setState(() => {\n        return { selectedOption: id };\n      });\n    };\n  }\n  \n  render() {\n    const { isOpen, selectedOption, toggleTemplateText } = this.state;\n    \n    const menuGroups = [\n      <OptionsMenuItemGroup hasSeparator key=\"group0\">\n        <OptionsMenuItem onSelect={this.onSelect} isSelected={selectedOption === \"groupOption1\"} id=\"groupOption1\" key=\"option 1\">Option 1</OptionsMenuItem>\n        <OptionsMenuItem onSelect={this.onSelect} isSelected={selectedOption === \"groupOption2\"} id=\"groupOption2\" key=\"option 2\">Option 2</OptionsMenuItem>\n      </OptionsMenuItemGroup>,\n      <OptionsMenuItemGroup groupTitle=\"Group 1\" hasSeparator key=\"group1\">\n        <OptionsMenuItem onSelect={this.onSelect} isSelected={selectedOption === \"groupOption3\"} id=\"groupOption3\" key=\"option 3\">Option 1</OptionsMenuItem>\n        <OptionsMenuItem onSelect={this.onSelect} isSelected={selectedOption === \"groupOption4\"} id=\"groupOption4\" key=\"option 4\">Option 2</OptionsMenuItem>\n      </OptionsMenuItemGroup>,\n      <OptionsMenuItemGroup groupTitle=\"Group 2\" key=\"group2\">\n        <OptionsMenuItem onSelect={this.onSelect} isSelected={selectedOption === \"groupOption5\"} id=\"groupOption5\" key=\"option 5\">Option 1</OptionsMenuItem>\n        <OptionsMenuItem onSelect={this.onSelect} isSelected={selectedOption === \"groupOption6\"} id=\"groupOption6\" key=\"option 6\">Option 2</OptionsMenuItem>\n      </OptionsMenuItemGroup>\n    ];\n    const toggle = <OptionsMenuToggle onToggle={this.onToggle} toggleTemplate={toggleTemplateText} />\n    \n    return (\n      <OptionsMenu \n        id=\"options-menu-align-right-example\" \n        position={OptionsMenuPosition.right} \n        menuItems={menuGroups} \n        toggle={toggle} \n        isOpen={isOpen} \n        isGrouped />\n    );\n  }\n}","title":"Grouped items with titles","lang":"js"}}>
      
    </Example>,
  'Single option with menu on document body': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { OptionsMenu, OptionsMenuItem, OptionsMenuToggle } from '@patternfly/react-core';\n\nclass SingleOption extends React.Component {\n  constructor(props) {\n      super(props);\n      this.state = {\n        isOpen: false,\n        toggleTemplateText: \"Options menu\",\n        selectedOption: \"singleOption1\"\n      };\n\n      this.onToggle = () => {\n          this.setState({\n              isOpen: !this.state.isOpen\n          });\n      };\n      \n      this.onSelect = event => {\n        const id = event.currentTarget.id;\n        this.setState(() => {\n          return { selectedOption: id };\n        });\n      };\n      \n    }\n    \n  render() {\n    const { selectedOption, toggleTemplateText, isOpen } = this.state;\n    const menuItems = [\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={selectedOption === \"singleOption1\"} id=\"singleOption1\" key=\"option 1\">Option 1</OptionsMenuItem>,\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={selectedOption === \"singleOption2\"} id=\"singleOption2\" key=\"option 2\">Option 2</OptionsMenuItem>,\n      <OptionsMenuItem onSelect={this.onSelect} isSelected={selectedOption === \"singleOption3\"} id=\"singleOption3\" key=\"option 3\">Option 3</OptionsMenuItem>\n    ];\n    const toggle = <OptionsMenuToggle onToggle={this.onToggle} toggleTemplate={toggleTemplateText} />\n\n    return (\n      <OptionsMenu \n        id=\"options-menu-single-option-example\" \n        menuItems={menuItems} \n        isOpen={isOpen} \n        toggle={toggle}\n        menuAppendTo={() => document.body}\n      />\n    );\n  }\n}","title":"Single option with menu on document body","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Single option"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Multiple options"])}
    {React.createElement(pageData.examples["Plain"])}
    {React.createElement(pageData.examples["Align top"])}
    {React.createElement(pageData.examples["Align right"])}
    {React.createElement(pageData.examples["Plain with text"])}
    {React.createElement(pageData.examples["Plain with text disabled"])}
    {React.createElement(pageData.examples["Grouped items with titles"])}
    {React.createElement(pageData.examples["Single option with menu on document body"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsOptionsMenuReactDocs';
Component.pageData = pageData;

export default Component;
