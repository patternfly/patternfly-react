import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
const pageData = {
  "id": "Select",
  "section": "components",
  "source": "react",
  "slug": "/components/select/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Select/examples/Select.md",
  "propComponents": [
    {
      "name": "Select",
      "description": "",
      "props": [
        {
          "name": "aria-describedby",
          "type": "string",
          "description": "Id of div for the select aria-labelledby",
          "defaultValue": "''"
        },
        {
          "name": "aria-invalid",
          "type": "boolean",
          "description": "Flag indicating if the select is an invalid state",
          "defaultValue": "false"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Adds accessible text to Select",
          "defaultValue": "''"
        },
        {
          "name": "aria-labelledby",
          "type": "string",
          "description": "Id of label for the Select aria-labelledby",
          "defaultValue": "''"
        },
        {
          "name": "children",
          "type": "React.ReactElement[]",
          "description": "Content rendered inside the Select. Must be React.ReactElement<SelectGroupProps>[]",
          "defaultValue": "[]"
        },
        {
          "name": "chipGroupComponent",
          "type": "React.ReactNode",
          "description": "Optional props to render custom chip group in the typeaheadmulti variant",
          "defaultValue": "null"
        },
        {
          "name": "chipGroupProps",
          "type": "Omit<ChipGroupProps, 'children' | 'ref'>",
          "description": "Optional props to pass to the chip group in the typeaheadmulti variant"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Classes applied to the root of the Select",
          "defaultValue": "''"
        },
        {
          "name": "clearSelectionsAriaLabel",
          "type": "string",
          "description": "Label for clear selection button of type ahead select variants",
          "defaultValue": "'Clear all'"
        },
        {
          "name": "createText",
          "type": "string",
          "description": "Text displayed in typeahead select to prompt the user to create an item",
          "defaultValue": "'Create'"
        },
        {
          "name": "customBadgeText",
          "type": "string | number",
          "description": "Custom text for select badge",
          "defaultValue": "null"
        },
        {
          "name": "customContent",
          "type": "React.ReactNode",
          "description": "Custom content to render in the select menu.  If this prop is defined, the variant prop will be ignored and the select will render with a single select toggle",
          "defaultValue": "null"
        },
        {
          "name": "direction",
          "type": "'up' | 'down'",
          "description": "Flag specifying which direction the Select menu expands",
          "defaultValue": "SelectDirection.down"
        },
        {
          "name": "favorites",
          "type": "string[]",
          "description": "ID list of favorited select items",
          "defaultValue": "[]"
        },
        {
          "name": "favoritesLabel",
          "type": "string",
          "description": "Label for the favorites group",
          "defaultValue": "'Favorites'"
        },
        {
          "name": "footer",
          "type": "React.ReactNode",
          "description": "Content rendered in the footer of the select menu"
        },
        {
          "name": "hasInlineFilter",
          "type": "boolean",
          "description": "Flag indicating if select should have an inline text input for filtering",
          "defaultValue": "false"
        },
        {
          "name": "hasPlaceholderStyle",
          "type": "boolean",
          "description": "Flag indicating if placeholder styles should be applied",
          "defaultValue": "false"
        },
        {
          "name": "inlineFilterPlaceholderText",
          "type": "string",
          "description": "Placeholder text for inline filter",
          "defaultValue": "null"
        },
        {
          "name": "inputAutoComplete",
          "type": "string",
          "description": "Value for the typeahead and inline filtering input autocomplete attribute. When targeting Chrome this property should be a random string.",
          "defaultValue": "'off'"
        },
        {
          "name": "inputIdPrefix",
          "type": "string",
          "description": "Prefix for the id of the input in the checkbox select variant",
          "defaultValue": "''"
        },
        {
          "name": "isCheckboxSelectionBadgeHidden",
          "type": "boolean",
          "description": "Flag indicating if selection badge should be hidden for checkbox variant,default false"
        },
        {
          "name": "isCreatable",
          "type": "boolean",
          "description": "Flag to indicate if the typeahead select allows new items",
          "defaultValue": "false"
        },
        {
          "name": "isCreateSelectOptionObject",
          "type": "boolean",
          "description": "Flag indicating if the creatable option should set its value as a SelectOptionObject",
          "defaultValue": "false",
          "beta": true
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag to indicate if select is disabled",
          "defaultValue": "false"
        },
        {
          "name": "isFlipEnabled",
          "type": "boolean",
          "description": "Flag for indicating that the select menu should automatically flip vertically when\nit reaches the boundary. This prop can only be used when the select component is not\nappended inline, e.g. `menuAppendTo=\"parent\"`",
          "defaultValue": "false"
        },
        {
          "name": "isGrouped",
          "type": "boolean",
          "description": "Flag to indicate if select options are grouped",
          "defaultValue": "false"
        },
        {
          "name": "isInputFilterPersisted",
          "type": "boolean",
          "description": "Flag for retaining filter results on blur from keyboard-entered typeahead text",
          "defaultValue": "false",
          "beta": true
        },
        {
          "name": "isInputValuePersisted",
          "type": "boolean",
          "description": "Flag for retaining keyboard-entered value in typeahead text field when focus leaves input away",
          "defaultValue": "false"
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "Flag to indicate if select is open",
          "defaultValue": "false"
        },
        {
          "name": "isPlain",
          "type": "boolean",
          "description": "Display the toggle with no border or background",
          "defaultValue": "false"
        },
        {
          "name": "loadingVariant",
          "type": "'spinner' | SelectViewMoreObject",
          "description": "Loading variant to display either the spinner or the view more text button",
          "beta": true
        },
        {
          "name": "maxHeight",
          "type": "string | number",
          "description": "Max height of the select container as a number of px or string percentage"
        },
        {
          "name": "menuAppendTo",
          "type": "HTMLElement | (() => HTMLElement) | 'inline' | 'parent'",
          "description": "The container to append the menu to. Defaults to 'inline'.\nIf your menu is being cut off you can append it to an element higher up the DOM tree.\nSome examples:\nmenuAppendTo=\"parent\"\nmenuAppendTo={() => document.body}\nmenuAppendTo={document.getElementById('target')}",
          "defaultValue": "'inline'"
        },
        {
          "name": "noResultsFoundText",
          "type": "string",
          "description": "Text to display in typeahead select when no results are found",
          "defaultValue": "'No results found'"
        },
        {
          "name": "onBlur",
          "type": "(event?: any) => void",
          "description": "Callback for toggle blur"
        },
        {
          "name": "onClear",
          "type": "(event: React.MouseEvent) => void",
          "description": "Callback for typeahead clear button",
          "defaultValue": "() => undefined as void"
        },
        {
          "name": "onCreateOption",
          "type": "(newOptionValue: string) => void",
          "description": "Optional callback for newly created options",
          "defaultValue": "() => undefined as void"
        },
        {
          "name": "onFavorite",
          "type": "(itemId: string, isFavorite: boolean) => void",
          "description": "Enables favorites. Callback called when a select options's favorite button is clicked"
        },
        {
          "name": "onFilter",
          "type": "(e: React.ChangeEvent<HTMLInputElement> | null, value: string) => React.ReactElement[] | undefined",
          "description": "Optional callback for custom filtering",
          "defaultValue": "null"
        },
        {
          "name": "onSelect",
          "type": "(\n  event: React.MouseEvent | React.ChangeEvent,\n  value: string | SelectOptionObject,\n  isPlaceholder?: boolean\n) => void",
          "description": "Callback for selection behavior"
        },
        {
          "name": "onToggle",
          "type": "(isExpanded: boolean, event: React.MouseEvent | React.ChangeEvent | React.KeyboardEvent | Event) => void",
          "description": "Callback for toggle button behavior",
          "required": true
        },
        {
          "name": "onTypeaheadInputChanged",
          "type": "(value: string) => void",
          "description": "Optional event handler called each time the value in the typeahead input changes.",
          "defaultValue": "null"
        },
        {
          "name": "ouiaSafe",
          "type": "No type info",
          "defaultValue": "true"
        },
        {
          "name": "placeholderText",
          "type": "string | React.ReactNode",
          "description": "Title text of Select",
          "defaultValue": "''"
        },
        {
          "name": "position",
          "type": "SelectPosition | 'right' | 'left'",
          "description": "Indicates where menu will be aligned horizontally",
          "defaultValue": "SelectPosition.left"
        },
        {
          "name": "removeSelectionAriaLabel",
          "type": "string",
          "description": "Label for remove chip button of multiple type ahead select variant",
          "defaultValue": "'Remove'"
        },
        {
          "name": "selections",
          "type": "string | SelectOptionObject | (string | SelectOptionObject)[]",
          "description": "Array of selected items for multi select variants.",
          "defaultValue": "[]"
        },
        {
          "name": "shouldResetOnSelect",
          "type": "boolean",
          "description": "Flag indicating the typeahead input value should reset upon selection",
          "defaultValue": "true"
        },
        {
          "name": "toggleAriaLabel",
          "type": "string",
          "description": "Label for toggle of type ahead select variants",
          "defaultValue": "'Options menu'"
        },
        {
          "name": "toggleIcon",
          "type": "React.ReactElement",
          "description": "Icon element to render inside the select toggle",
          "defaultValue": "null"
        },
        {
          "name": "toggleId",
          "type": "string",
          "description": "Id for select toggle element",
          "defaultValue": "null"
        },
        {
          "name": "typeAheadAriaDescribedby",
          "type": "string",
          "description": "Id of div for input field of type ahead select variants",
          "defaultValue": "''"
        },
        {
          "name": "typeAheadAriaLabel",
          "type": "string",
          "description": "Label for input field of type ahead select variants",
          "defaultValue": "''"
        },
        {
          "name": "validated",
          "type": "'success' | 'warning' | 'error' | 'default'",
          "description": "Value to indicate if the select is modified to show that validation state.\nIf set to success, select will be modified to indicate valid state.\nIf set to error, select will be modified to indicate error state.\nIf set to warning, select will be modified to indicate warning state.",
          "defaultValue": "'default'"
        },
        {
          "name": "variant",
          "type": "'single' | 'checkbox' | 'typeahead' | 'typeaheadmulti'",
          "description": "Variant of rendered Select",
          "defaultValue": "SelectVariant.single"
        },
        {
          "name": "width",
          "type": "string | number",
          "description": "Width of the select container as a number of px or string percentage",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "SelectOption",
      "description": "",
      "props": [
        {
          "name": "ariaIsFavoriteLabel",
          "type": "string",
          "description": "Aria label text for favoritable button when favorited"
        },
        {
          "name": "ariaIsNotFavoriteLabel",
          "type": "string",
          "description": "Aria label text for favoritable button when not favorited"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Optional alternate display for the option"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Select Option",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "React.ReactNode",
          "description": "Indicates which component will be used as select item",
          "defaultValue": "'button'"
        },
        {
          "name": "description",
          "type": "React.ReactNode",
          "description": "Description of the item for single and both typeahead select variants"
        },
        {
          "name": "id",
          "type": "string",
          "description": "ID of the item. Required for tracking favorites"
        },
        {
          "name": "inputId",
          "type": "string",
          "description": "Id of the checkbox input",
          "defaultValue": "''"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag indicating if the option is disabled",
          "defaultValue": "false"
        },
        {
          "name": "isFocused",
          "type": "boolean",
          "description": "Flag forcing the focused state"
        },
        {
          "name": "isNoResultsOption",
          "type": "boolean",
          "description": "Flag indicating if the option acts as a \"no results\" indicator",
          "defaultValue": "false"
        },
        {
          "name": "isPlaceholder",
          "type": "boolean",
          "description": "Flag indicating if the option acts as a placeholder",
          "defaultValue": "false"
        },
        {
          "name": "itemCount",
          "type": "number",
          "description": "Number of items matching the option"
        },
        {
          "name": "onClick",
          "type": "(event: React.MouseEvent | React.ChangeEvent) => void",
          "description": "Optional callback for click event",
          "defaultValue": "() => {}"
        },
        {
          "name": "value",
          "type": "string | SelectOptionObject",
          "description": "The value for the option, can be a string or select option object",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "SelectGroup",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Checkboxes within group. Must be React.ReactElement<SelectOptionProps>[]",
          "defaultValue": "[]"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the CheckboxSelectGroup control",
          "defaultValue": "''"
        },
        {
          "name": "label",
          "type": "string",
          "description": "Group label",
          "defaultValue": "''"
        },
        {
          "name": "titleId",
          "type": "string",
          "description": "ID for title label",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "SelectOptionObject",
      "description": "",
      "props": [
        {
          "name": "compareTo",
          "type": "boolean",
          "description": "Function returns a true if the passed in select option is equal to this select option object, false otherwise"
        },
        {
          "name": "toString",
          "type": "string",
          "description": "Function returns a string to represent the select option object",
          "required": true
        }
      ]
    },
    {
      "name": "SelectViewMoreObject",
      "description": "",
      "props": [
        {
          "name": "onClick",
          "type": "(event: React.MouseEvent | React.ChangeEvent) => void",
          "description": "Callback for when the view more button is clicked",
          "required": true
        },
        {
          "name": "text",
          "type": "string",
          "description": "View more text",
          "required": true
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-select"
  ],
  "examples": [
    "Single",
    "Single with description",
    "Grouped single",
    "Validated",
    "Checkbox input",
    "Checkbox input with counts",
    "Checkbox input no badge",
    "Grouped checkbox input",
    "Grouped single with filtering",
    "Grouped checkbox input with filtering",
    "Grouped checkbox input with filtering and placeholder text",
    "Grouped checkbox input with filtering and custom badging",
    "Typeahead",
    "Grouped typeahead",
    "Custom filtering",
    "Multiple",
    "Multiple with Custom Chip Group Props",
    "Multiple with Render Custom Chip Group",
    "Multiple with custom objects",
    "Plain multiple typeahead",
    "Panel",
    "Appending document body vs parent",
    "Favorites",
    "Footer",
    "Footer with checkboxes",
    "View more",
    "View more with checkboxes",
    "With a style applied to the placeholder text",
    "With a style applied to the placeholder option"
  ]
};
pageData.liveContext = {
  CubeIcon
};
pageData.examples = {
  'Single': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';\nimport { Select, SelectOption, SelectVariant, SelectDirection, Checkbox, Divider } from '@patternfly/react-core';\n\nclass SingleSelectInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.options = [\n      <SelectOption key={0} value=\"Select a title\" isPlaceholder />,\n      <SelectOption key={1} value=\"Mr\" />,\n      <SelectOption key={2} value=\"Miss\" />,\n      <SelectOption key={3} value=\"Mrs\" />,\n      <SelectOption key={4} value=\"Ms\" />,\n      <Divider component=\"li\" key={5} />,\n      <SelectOption key={6} value=\"Dr\" />,\n      <SelectOption key={7} value=\"Other\" />\n    ];\n\n    this.state = {\n      isToggleIcon: false,\n      isOpen: false,\n      selected: null,\n      isDisabled: false,\n      direction: SelectDirection.down\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection, isPlaceholder) => {\n      if (isPlaceholder) this.clearSelection();\n      else {\n        this.setState({\n          selected: selection,\n          isOpen: false\n        });\n        console.log('selected:', selection);\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: null,\n        isOpen: false\n      });\n    };\n\n    this.toggleDisabled = checked => {\n      this.setState({\n        isDisabled: checked\n      });\n    };\n\n    this.setIcon = checked => {\n      this.setState({\n        isToggleIcon: checked\n      });\n    };\n\n    this.toggleDirection = () => {\n      if (this.state.direction === SelectDirection.up) {\n        this.setState({\n          direction: SelectDirection.down\n        });\n      } else {\n        this.setState({\n          direction: SelectDirection.up\n        });\n      }\n    };\n  }\n\n  render() {\n    const { isOpen, selected, isDisabled, direction, isToggleIcon } = this.state;\n    const titleId = 'title-id-1';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Title\n        </span>\n        <Select\n          toggleIcon={isToggleIcon && <CubeIcon />}\n          variant={SelectVariant.single}\n          aria-label=\"Select Input\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          selections={selected}\n          isOpen={isOpen}\n          aria-labelledby={titleId}\n          isDisabled={isDisabled}\n          direction={direction}\n        >\n          {this.options}\n        </Select>\n        <Checkbox\n          label=\"isDisabled\"\n          isChecked={this.state.isDisabled}\n          onChange={this.toggleDisabled}\n          aria-label=\"disabled checkbox\"\n          id=\"toggle-disabled\"\n          name=\"toggle-disabled\"\n        />\n        <Checkbox\n          label=\"Expands up\"\n          isChecked={direction === SelectDirection.up}\n          onChange={this.toggleDirection}\n          aria-label=\"direction checkbox\"\n          id=\"toggle-direction\"\n          name=\"toggle-direction\"\n        />\n        <Checkbox\n          label=\"Show icon\"\n          isChecked={isToggleIcon}\n          onChange={this.setIcon}\n          aria-label=\"show icon checkbox\"\n          id=\"toggle-icon\"\n          name=\"toggle-icon\"\n        />\n      </div>\n    );\n  }\n}","title":"Single","lang":"js"}}>
      
    </Example>,
  'Single with description': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectVariant } from '@patternfly/react-core';\n\nclass SingleSelectDescription extends React.Component {\n  constructor(props) {\n    super(props);\n    this.options = [\n      { value: 'Mr', disabled: false },\n      { value: 'Miss', disabled: false },\n      { value: 'Mrs', disabled: false },\n      { value: 'Ms', disabled: false },\n      { value: 'Dr', disabled: false },\n      { value: 'Other', disabled: false }\n    ];\n\n    this.state = {\n      isOpen: false,\n      selected: null,\n      isDisabled: false\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection, isPlaceholder) => {\n      if (isPlaceholder) this.clearSelection();\n      else {\n        this.setState({\n          selected: selection,\n          isOpen: false\n        });\n        console.log('selected:', selection);\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: null,\n        isOpen: false\n      });\n    };\n  }\n\n  render() {\n    const { isOpen, selected, isDisabled, direction, isToggleIcon } = this.state;\n    const titleId = 'select-descriptions-title';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Title\n        </span>\n        <Select\n          variant={SelectVariant.single}\n          placeholderText=\"Select an option\"\n          aria-label=\"Select Input with descriptions\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          selections={selected}\n          isOpen={isOpen}\n          aria-labelledby={titleId}\n          isDisabled={isDisabled}\n        >\n          {this.options.map((option, index) => (\n            <SelectOption\n              isDisabled={option.disabled}\n              key={index}\n              value={option.value}\n              isPlaceholder={option.isPlaceholder}\n              description=\"This is a description\"\n            />\n          ))}\n        </Select>\n      </div>\n    );\n  }\n}","title":"Single with description","lang":"js"}}>
      
    </Example>,
  'Grouped single': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectVariant, SelectGroup, Divider } from '@patternfly/react-core';\n\nclass GroupedSingleSelectInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false,\n      selected: null\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection) => {\n      this.setState({\n        selected: selection,\n        isOpen: false\n      });\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: null\n      });\n    };\n\n    this.options = [\n      <SelectGroup label=\"Status\" key=\"group1\">\n        <SelectOption key={0} value=\"Running\" />\n        <SelectOption key={1} value=\"Stopped\" />\n        <SelectOption key={2} value=\"Down\" />\n        <SelectOption key={3} value=\"Degraded\" />\n        <SelectOption key={4} value=\"Needs maintenance\" />\n      </SelectGroup>,\n      <Divider key=\"divider\" />,\n      <SelectGroup label=\"Vendor names\" key=\"group2\">\n        <SelectOption key={5} value=\"Dell\" />\n        <SelectOption key={6} value=\"Samsung\" isDisabled />\n        <SelectOption key={7} value=\"Hewlett-Packard\" />\n      </SelectGroup>\n    ];\n  }\n\n  render() {\n    const { isOpen, selected } = this.state;\n    const titleId = 'grouped-single-select-id';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Grouped Checkbox Title\n        </span>\n        <Select\n          variant={SelectVariant.single}\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          selections={selected}\n          isOpen={isOpen}\n          placeholderText=\"Filter by status/vendor\"\n          aria-labelledby={titleId}\n          isGrouped\n        >\n          {this.options}\n        </Select>\n      </div>\n    );\n  }\n}","title":"Grouped single","lang":"js"}}>
      
    </Example>,
  'Validated': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectVariant } from '@patternfly/react-core';\n\nclass ValidatedSelect extends React.Component {\n  constructor(props) {\n    super(props);\n    this.options = [\n      <SelectOption key={0} value=\"Select a title\" isPlaceholder />,\n      <SelectOption key={1} value=\"Mr\" />,\n      <SelectOption key={2} value=\"Miss\" />,\n      <SelectOption key={3} value=\"Mrs\" />,\n      <SelectOption key={4} value=\"Ms\" />,\n      <SelectOption key={5} value=\"Dr\" />,\n      <SelectOption key={6} value=\"Other\" />\n    ];\n\n    this.state = {\n      isOpen: false,\n      selected: null,\n      isDisabled: false,\n      validated: 'default'\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection, isPlaceholder) => {\n      let validatedState = 'success';\n      if (isPlaceholder) {\n        this.clearSelection();\n        validatedState = 'error';\n      } else {\n        if (selection === 'Other') {\n          validatedState = 'warning';\n        } else {\n          validatedState = 'success';\n        }\n        this.setState({\n          selected: selection,\n          isOpen: false\n        });\n        console.log('selected:', selection);\n      }\n      this.setState({\n        validated: validatedState\n      });\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: null,\n        isOpen: false\n      });\n    };\n  }\n\n  render() {\n    const { isOpen, selected, isDisabled, direction, isToggleIcon, validated } = this.state;\n    const titleId = 'select-validated-title';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Title\n        </span>\n        <Select\n          variant={SelectVariant.single}\n          placeholderText=\"Select an option\"\n          aria-label=\"Select Input with validation\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          selections={selected}\n          isOpen={isOpen}\n          aria-labelledby={titleId}\n          isDisabled={isDisabled}\n          validated={validated}\n          aria-describedby=\"validated-helper\"\n          aria-invalid={validated === 'error' ? true : false}\n        >\n          {this.options}\n        </Select>\n        <div aria-live=\"polite\" id=\"validated-helper\" hidden>\n          {validated}\n        </div>\n      </div>\n    );\n  }\n}","title":"Validated","lang":"js"}}>
      
    </Example>,
  'Checkbox input': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectVariant, Divider } from '@patternfly/react-core';\n\nclass CheckboxSelectInput extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      isOpen: false,\n      selected: []\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection) => {\n      const { selected } = this.state;\n      if (selected.includes(selection)) {\n        this.setState(\n          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      } else {\n        this.setState(\n          prevState => ({ selected: [...prevState.selected, selection] }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: []\n      });\n    };\n\n    this.options = [\n      <SelectOption key={0} value=\"Active\" description=\"This is a description\" />,\n      <SelectOption key={1} value=\"Cancelled\" />,\n      <SelectOption key={2} value=\"Paused\" />,\n      <Divider key={3} />,\n      <SelectOption key={4} value=\"Warning\" />,\n      <SelectOption key={5} value=\"Restarted\" />\n    ];\n  }\n\n  render() {\n    const { isOpen, selected } = this.state;\n    const titleId = 'checkbox-select-id';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Checkbox Title\n        </span>\n        <Select\n          variant={SelectVariant.checkbox}\n          aria-label=\"Select Input\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          selections={selected}\n          isOpen={isOpen}\n          placeholderText=\"Filter by status\"\n          aria-labelledby={titleId}\n        >\n          {this.options}\n        </Select>\n      </div>\n    );\n  }\n}","title":"Checkbox input","lang":"js"}}>
      
    </Example>,
  'Checkbox input with counts': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectVariant, Divider } from '@patternfly/react-core';\n\nclass CheckboxSelectWithCounts extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      isOpen: false,\n      selected: []\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection) => {\n      const { selected } = this.state;\n      if (selected.includes(selection)) {\n        this.setState(\n          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      } else {\n        this.setState(\n          prevState => ({ selected: [...prevState.selected, selection] }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: []\n      });\n    };\n\n    this.options = [\n      <SelectOption key={0} value=\"Active\" description=\"This is a description\" itemCount={3} />,\n      <SelectOption key={1} value=\"Cancelled\" itemCount={1} />,\n      <SelectOption key={2} value=\"Paused\" itemCount={15} />,\n      <SelectOption key={3} value=\"Warning\" itemCount={2} />,\n      <SelectOption key={4} value=\"Restarted\" itemCount={8} />\n    ];\n  }\n\n  render() {\n    const { isOpen, selected } = this.state;\n    const titleId = 'checkbox-select-with-counts-id';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Checkbox With Counts Title\n        </span>\n        <Select\n          variant={SelectVariant.checkbox}\n          aria-label=\"Select Input\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          selections={selected}\n          isOpen={isOpen}\n          placeholderText=\"Filter by status\"\n          aria-labelledby={titleId}\n        >\n          {this.options}\n        </Select>\n      </div>\n    );\n  }\n}","title":"Checkbox input with counts","lang":"js"}}>
      
    </Example>,
  'Checkbox input no badge': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectVariant } from '@patternfly/react-core';\n\nclass CheckboxSelectInputNoBadge extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      isOpen: false,\n      selected: []\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection) => {\n      const { selected } = this.state;\n      if (selected.includes(selection)) {\n        this.setState(\n          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      } else {\n        this.setState(\n          prevState => ({ selected: [...prevState.selected, selection] }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: []\n      });\n    };\n\n    this.options = [\n      <SelectOption key={0} value=\"Debug\" />,\n      <SelectOption key={1} value=\"Info\" />,\n      <SelectOption key={2} value=\"Warn\" />,\n      <SelectOption key={3} value=\"Error\" />\n    ];\n  }\n\n  render() {\n    const { isOpen, selected } = this.state;\n    const titleId = 'checkbox-select-id';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Checkbox Title\n        </span>\n        <Select\n          variant={SelectVariant.checkbox}\n          aria-label=\"Select Input\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          selections={selected}\n          isCheckboxSelectionBadgeHidden\n          isOpen={isOpen}\n          placeholderText=\"Filter by status\"\n          aria-labelledby={titleId}\n        >\n          {this.options}\n        </Select>\n      </div>\n    );\n  }\n}","title":"Checkbox input no badge","lang":"js"}}>
      
    </Example>,
  'Grouped checkbox input': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectVariant, SelectGroup } from '@patternfly/react-core';\n\nclass GroupedCheckboxSelectInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false,\n      selected: []\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection) => {\n      const { selected } = this.state;\n      if (selected.includes(selection)) {\n        this.setState(\n          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      } else {\n        this.setState(\n          prevState => ({ selected: [...prevState.selected, selection] }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: []\n      });\n    };\n\n    this.options = [\n      <SelectGroup label=\"Status\" key=\"group1\">\n        <SelectOption key={0} value=\"Running\" />\n        <SelectOption key={1} value=\"Stopped\" />\n        <SelectOption key={2} value=\"Down\" />\n        <SelectOption key={3} value=\"Degraded\" />\n        <SelectOption key={4} value=\"Needs maintenance\" />\n      </SelectGroup>,\n      <SelectGroup label=\"Vendor names\" key=\"group2\">\n        <SelectOption key={5} value=\"Dell\" />\n        <SelectOption key={6} value=\"Samsung\" isDisabled />\n        <SelectOption key={7} value=\"Hewlett-Packard\" />\n      </SelectGroup>\n    ];\n  }\n\n  render() {\n    const { isOpen, selected } = this.state;\n    const titleId = 'grouped-checkbox-select-id-1';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Grouped Checkbox Title\n        </span>\n        <Select\n          variant={SelectVariant.checkbox}\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          selections={selected}\n          isOpen={isOpen}\n          placeholderText=\"Filter by status\"\n          aria-labelledby={titleId}\n          isGrouped\n        >\n          {this.options}\n        </Select>\n      </div>\n    );\n  }\n}","title":"Grouped checkbox input","lang":"js"}}>
      
    </Example>,
  'Grouped single with filtering': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectGroup, SelectVariant, Checkbox } from '@patternfly/react-core';\n\nclass FilteringSingleSelectInput extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      isOpen: false,\n      selected: '',\n      isCreatable: false,\n      isInputValuePersisted: false,\n      isInputFilterPersisted: false\n    };\n\n    this.options = [\n      <SelectGroup label=\"Status\" key=\"group1\">\n        <SelectOption key={0} value=\"Running\" />\n        <SelectOption key={1} value=\"Stopped\" />\n        <SelectOption key={2} value=\"Down\" />\n        <SelectOption key={3} value=\"Degraded\" />\n        <SelectOption key={4} value=\"Needs maintenance\" />\n      </SelectGroup>,\n      <SelectGroup label=\"Vendor names\" key=\"group2\">\n        <SelectOption key={5} value=\"Dell\" />\n        <SelectOption key={6} value=\"Samsung\" isDisabled />\n        <SelectOption key={7} value=\"Hewlett-Packard\" />\n      </SelectGroup>\n    ];\n\n    this.onToggle = isOpen => {\n      this.setState({ isOpen });\n    };\n\n    this.onSelect = (event, selection) => {\n      this.setState({ selected: selection, isOpen: false }), console.log('selected: ', selection);\n    };\n\n    this.onFilter = (_, textInput) => {\n      if (textInput === '') {\n        return this.options;\n      } else {\n        let filteredGroups = this.options\n          .map(group => {\n            let filteredGroup = React.cloneElement(group, {\n              children: group.props.children.filter(item => {\n                return item.props.value.toLowerCase().includes(textInput.toLowerCase());\n              })\n            });\n            if (filteredGroup.props.children.length > 0) return filteredGroup;\n          })\n          .filter(Boolean);\n        return filteredGroups;\n      }\n    };\n\n    this.toggleCreatable = checked => {\n      this.setState({\n        isCreatable: checked\n      });\n    };\n\n    this.toggleInputValuePersisted = checked => {\n      this.setState({\n        isInputValuePersisted: checked\n      });\n    };\n\n    this.toggleInputFilterPersisted = checked => {\n      this.setState({\n        isInputFilterPersisted: checked\n      });\n    };\n  }\n\n  render() {\n    const {\n      isOpen,\n      selected,\n      filteredOptions,\n      isInputValuePersisted,\n      isInputFilterPersisted,\n      isCreatable\n    } = this.state;\n    const titleId = 'single-filtering-select-id';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Single select with filter\n        </span>\n        <Select\n          variant={SelectVariant.single}\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          selections={selected}\n          isOpen={isOpen}\n          placeholderText=\"Filter by status\"\n          aria-labelledby={titleId}\n          onFilter={this.onFilter}\n          isGrouped\n          hasInlineFilter\n          isCreatable={isCreatable}\n          isInputValuePersisted={isInputValuePersisted}\n          isInputFilterPersisted={isInputFilterPersisted}\n        >\n          {this.options}\n        </Select>\n        <Checkbox\n          label=\"isInputValuePersisted\"\n          isChecked={isInputValuePersisted}\n          onChange={this.toggleInputValuePersisted}\n          aria-label=\"toggle input value persisted\"\n          id=\"toggle-inline-filter-input-value-persisted\"\n          name=\"toggle-inline-filter-input-value-persisted\"\n        />\n        <Checkbox\n          label=\"isInputFilterPersisted\"\n          isChecked={isInputFilterPersisted}\n          onChange={this.toggleInputFilterPersisted}\n          aria-label=\"toggle input filter persisted\"\n          id=\"toggle-inline-filter-input-filter-persisted\"\n          name=\"toggle-inline-filter-input-filter-persisted\"\n        />\n        <Checkbox\n          label=\"isCreatable\"\n          isChecked={this.state.isCreatable}\n          onChange={this.toggleCreatable}\n          aria-label=\"toggle creatable checkbox\"\n          id=\"toggle-inline-filter-creatable-typeahead\"\n          name=\"toggle-inline-filter-creatable-typeahead\"\n        />\n      </div>\n    );\n  }\n}","title":"Grouped single with filtering","lang":"js"}}>
      
    </Example>,
  'Grouped checkbox input with filtering': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectGroup, SelectVariant } from '@patternfly/react-core';\n\nclass FilteringCheckboxSelectInput extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      isOpen: false,\n      selected: []\n    };\n\n    this.options = [\n      <SelectGroup label=\"Status\" key=\"group1\">\n        <SelectOption key={0} value=\"Running\" />\n        <SelectOption key={1} value=\"Stopped\" />\n        <SelectOption key={2} value=\"Down\" />\n        <SelectOption key={3} value=\"Degraded\" />\n        <SelectOption key={4} value=\"Needs maintenance\" />\n      </SelectGroup>,\n      <SelectGroup label=\"Vendor names\" key=\"group2\">\n        <SelectOption key={5} value=\"Dell\" />\n        <SelectOption key={6} value=\"Samsung\" isDisabled />\n        <SelectOption key={7} value=\"Hewlett-Packard\" />\n      </SelectGroup>\n    ];\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection) => {\n      const { selected } = this.state;\n      if (selected.includes(selection)) {\n        this.setState(\n          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      } else {\n        this.setState(\n          prevState => ({ selected: [...prevState.selected, selection] }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      }\n    };\n\n    this.onFilter = (_, textInput) => {\n      if (textInput === '') {\n        return this.options;\n      } else {\n        let filteredGroups = this.options\n          .map(group => {\n            let filteredGroup = React.cloneElement(group, {\n              children: group.props.children.filter(item => {\n                return item.props.value.toLowerCase().includes(textInput.toLowerCase());\n              })\n            });\n            if (filteredGroup.props.children.length > 0) return filteredGroup;\n          })\n          .filter(newGroup => newGroup);\n        return filteredGroups;\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: []\n      });\n    };\n  }\n\n  render() {\n    const { isOpen, selected, filteredOptions } = this.state;\n    const titleId = 'checkbox-filtering-select-id';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Checkbox Title\n        </span>\n        <Select\n          variant={SelectVariant.checkbox}\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          selections={selected}\n          isOpen={isOpen}\n          placeholderText=\"Filter by status\"\n          aria-labelledby={titleId}\n          onFilter={this.onFilter}\n          onClear={this.clearSelection}\n          isGrouped\n          hasInlineFilter\n        >\n          {this.options}\n        </Select>\n      </div>\n    );\n  }\n}","title":"Grouped checkbox input with filtering","lang":"js"}}>
      
    </Example>,
  'Grouped checkbox input with filtering and placeholder text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectGroup, SelectVariant } from '@patternfly/react-core';\n\nclass FilteringCheckboxSelectInputWithPlaceholder extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      isOpen: false,\n      selected: []\n    };\n\n    this.options = [\n      <SelectGroup label=\"Status\" key=\"group1\">\n        <SelectOption key={0} value=\"Running\" />\n        <SelectOption key={1} value=\"Stopped\" />\n        <SelectOption key={2} value=\"Down\" />\n        <SelectOption key={3} value=\"Degraded\" />\n        <SelectOption key={4} value=\"Needs maintenance\" />\n      </SelectGroup>,\n      <SelectGroup label=\"Vendor names\" key=\"group2\">\n        <SelectOption key={5} value=\"Dell\" />\n        <SelectOption key={6} value=\"Samsung\" isDisabled />\n        <SelectOption key={7} value=\"Hewlett-Packard\" />\n      </SelectGroup>\n    ];\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection) => {\n      const { selected } = this.state;\n      if (selected.includes(selection)) {\n        this.setState(\n          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      } else {\n        this.setState(\n          prevState => ({ selected: [...prevState.selected, selection] }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      }\n    };\n\n    this.onFilter = (_, textInput) => {\n      if (textInput === '') {\n        return this.options;\n      } else {\n        let filteredGroups = this.options\n          .map(group => {\n            let filteredGroup = React.cloneElement(group, {\n              children: group.props.children.filter(item => {\n                return item.props.value.toLowerCase().includes(textInput.toLowerCase());\n              })\n            });\n            if (filteredGroup.props.children.length > 0) return filteredGroup;\n          })\n          .filter(newGroup => newGroup);\n        return filteredGroups;\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: []\n      });\n    };\n  }\n\n  render() {\n    const { isOpen, selected, filteredOptions } = this.state;\n    const titleId = 'checkbox-filtering-select-id';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Checkbox Title\n        </span>\n        <Select\n          variant={SelectVariant.checkbox}\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          selections={selected}\n          isOpen={isOpen}\n          placeholderText=\"Filter by status\"\n          aria-labelledby={titleId}\n          onFilter={this.onFilter}\n          onClear={this.clearSelection}\n          isGrouped\n          hasInlineFilter\n          inlineFilterPlaceholderText=\"Filter by status\"\n        >\n          {this.options}\n        </Select>\n      </div>\n    );\n  }\n}","title":"Grouped checkbox input with filtering and placeholder text","lang":"js"}}>
      
    </Example>,
  'Grouped checkbox input with filtering and custom badging': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectGroup, SelectVariant } from '@patternfly/react-core';\n\nclass FilteringCheckboxSelectInputWithBadging extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      isOpen: false,\n      selected: [],\n      customBadgeText: 0\n    };\n\n    this.options = [\n      <SelectGroup label=\"Status\" key=\"group1\">\n        <SelectOption key={0} value=\"Running\" />\n        <SelectOption key={1} value=\"Stopped\" />\n        <SelectOption key={2} value=\"Down\" />\n        <SelectOption key={3} value=\"Degraded\" />\n        <SelectOption key={4} value=\"Needs maintenance\" />\n      </SelectGroup>,\n      <SelectGroup label=\"Vendor names\" key=\"group2\">\n        <SelectOption key={5} value=\"Dell\" />\n        <SelectOption key={6} value=\"Samsung\" isDisabled />\n        <SelectOption key={7} value=\"Hewlett-Packard\" />\n      </SelectGroup>\n    ];\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection) => {\n      const { selected } = this.state;\n      if (selected.includes(selection)) {\n        this.setState(\n          prevState => ({\n            selected: prevState.selected.filter(item => item !== selection),\n            customBadgeText: this.setBadgeText(prevState.selected.length - 1)\n          }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      } else {\n        this.setState(\n          prevState => ({\n            selected: [...prevState.selected, selection],\n            customBadgeText: this.setBadgeText(prevState.selected.length + 1)\n          }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      }\n    };\n\n    this.onFilter = (_, textInput) => {\n      if (textInput === '') {\n        return this.options;\n      } else {\n        let filteredGroups = this.options\n          .map(group => {\n            let filteredGroup = React.cloneElement(group, {\n              children: group.props.children.filter(item => {\n                return item.props.value.toLowerCase().includes(textInput.toLowerCase());\n              })\n            });\n            if (filteredGroup.props.children.length > 0) return filteredGroup;\n          })\n          .filter(newGroup => newGroup);\n        return filteredGroups;\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: [],\n        customBadgeText: this.setBadgeText(0)\n      });\n    };\n\n    this.setBadgeText = selected => {\n      if (selected === 7) {\n        return 'All';\n      }\n      if (selected === 0) {\n        return 0;\n      }\n      return null;\n    };\n  }\n\n  render() {\n    const { isOpen, selected, filteredOptions, customBadgeText } = this.state;\n    const titleId = 'checkbox-filtering-select-id';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Checkbox Title\n        </span>\n        <Select\n          variant={SelectVariant.checkbox}\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          selections={selected}\n          isOpen={isOpen}\n          placeholderText=\"Filter by status\"\n          aria-labelledby={titleId}\n          onFilter={this.onFilter}\n          onClear={this.clearSelection}\n          isGrouped\n          hasInlineFilter\n          customBadgeText={customBadgeText}\n        >\n          {this.options}\n        </Select>\n      </div>\n    );\n  }\n}","title":"Grouped checkbox input with filtering and custom badging","lang":"js"}}>
      
    </Example>,
  'Typeahead': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Checkbox, Select, SelectOption, SelectVariant } from '@patternfly/react-core';\n\nclass TypeaheadSelectInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.defaultOptions = [\n      { value: 'Alabama' },\n      { value: 'Florida', description: 'This is a description' },\n      { value: 'New Jersey' },\n      { value: 'New Mexico' },\n      { value: 'New York' },\n      { value: 'North Carolina' }\n    ];\n\n    this.state = {\n      options: this.defaultOptions,\n      isOpen: false,\n      selected: null,\n      isDisabled: false,\n      isCreatable: false,\n      isInputValuePersisted: false,\n      isInputFilterPersisted: false,\n      hasOnCreateOption: false,\n      resetOnSelect: true\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection, isPlaceholder) => {\n      if (isPlaceholder) this.clearSelection();\n      else {\n        this.setState({\n          selected: selection,\n          isOpen: this.state.resetOnSelect ? false : this.state.isOpen\n        });\n        console.log('selected:', selection);\n      }\n    };\n\n    this.onCreateOption = newValue => {\n      this.setState({\n        options: [...this.state.options, { value: newValue }]\n      });\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: null,\n        isOpen: false,\n        options: this.defaultOptions\n      });\n    };\n\n    this.toggleDisabled = checked => {\n      this.setState({\n        isDisabled: checked\n      });\n    };\n\n    this.toggleCreatable = checked => {\n      this.setState({\n        isCreatable: checked\n      });\n    };\n\n    this.toggleCreateNew = checked => {\n      this.setState({\n        hasOnCreateOption: checked\n      });\n    };\n\n    this.toggleInputValuePersisted = checked => {\n      this.setState({\n        isInputValuePersisted: checked\n      });\n    };\n\n    this.toggleInputFilterPersisted = checked => {\n      this.setState({\n        isInputFilterPersisted: checked\n      });\n    };\n\n    this.toggleResetOnSelect = checked => {\n      this.setState({\n        resetOnSelect: checked\n      });\n    };\n  }\n\n  render() {\n    const {\n      isOpen,\n      selected,\n      isDisabled,\n      isCreatable,\n      hasOnCreateOption,\n      isInputValuePersisted,\n      isInputFilterPersisted,\n      resetOnSelect,\n      options\n    } = this.state;\n    const titleId = 'typeahead-select-id-1';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Select a state\n        </span>\n        <Select\n          variant={SelectVariant.typeahead}\n          typeAheadAriaLabel=\"Select a state\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          onClear={this.clearSelection}\n          selections={selected}\n          isOpen={isOpen}\n          aria-labelledby={titleId}\n          isInputValuePersisted={isInputValuePersisted}\n          isInputFilterPersisted={isInputFilterPersisted}\n          placeholderText=\"Select a state\"\n          isDisabled={isDisabled}\n          isCreatable={isCreatable}\n          onCreateOption={(hasOnCreateOption && this.onCreateOption) || undefined}\n          shouldResetOnSelect={resetOnSelect}\n        >\n          {options.map((option, index) => (\n            <SelectOption\n              isDisabled={option.disabled}\n              key={index}\n              value={option.value}\n              {...(option.description && { description: option.description })}\n            />\n          ))}\n        </Select>\n        <Checkbox\n          label=\"isDisabled\"\n          isChecked={this.state.isDisabled}\n          onChange={this.toggleDisabled}\n          aria-label=\"toggle disabled checkbox\"\n          id=\"toggle-disabled-typeahead\"\n          name=\"toggle-disabled-typeahead\"\n        />\n        <Checkbox\n          label=\"isCreatable\"\n          isChecked={this.state.isCreatable}\n          onChange={this.toggleCreatable}\n          aria-label=\"toggle creatable checkbox\"\n          id=\"toggle-creatable-typeahead\"\n          name=\"toggle-creatable-typeahead\"\n        />\n        <Checkbox\n          label=\"onCreateOption\"\n          isChecked={this.state.hasOnCreateOption}\n          onChange={this.toggleCreateNew}\n          aria-label=\"toggle new checkbox\"\n          id=\"toggle-new-typeahead\"\n          name=\"toggle-new-typeahead\"\n        />\n        <Checkbox\n          label=\"isInputValuePersisted\"\n          isChecked={isInputValuePersisted}\n          onChange={this.toggleInputValuePersisted}\n          aria-label=\"toggle input value persisted\"\n          id=\"toggle-input-value-persisted\"\n          name=\"toggle-input-value-persisted\"\n        />\n        <Checkbox\n          label=\"isInputFilterPersisted\"\n          isChecked={isInputFilterPersisted}\n          onChange={this.toggleInputFilterPersisted}\n          aria-label=\"toggle input filter persisted\"\n          id=\"toggle-input-filter-persisted\"\n          name=\"toggle-input-filter-persisted\"\n        />\n        <Checkbox\n          label=\"shouldResetOnSelect\"\n          isChecked={this.state.resetOnSelect}\n          onChange={this.toggleResetOnSelect}\n          aria-label=\"toggle reset checkbox\"\n          id=\"toggle-reset-typeahead\"\n          name=\"toggle-reset-typeahead\"\n        />\n      </div>\n    );\n  }\n}","title":"Typeahead","lang":"js"}}>
      
    </Example>,
  'Grouped typeahead': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Checkbox, Select, SelectGroup, SelectOption, SelectVariant, Divider } from '@patternfly/react-core';\n\nclass GroupedTypeaheadSelectInput extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      options: [\n        <SelectGroup label=\"Status\" key=\"group1\">\n          <SelectOption key={0} value=\"Running\" />\n          <SelectOption key={1} value=\"Stopped\" />\n          <SelectOption key={2} value=\"Down\" />\n          <SelectOption key={3} value=\"Degraded\" />\n          <SelectOption key={4} value=\"Needs maintenance\" />\n        </SelectGroup>,\n        <Divider key=\"divider\" />,\n        <SelectGroup label=\"Vendor names\" key=\"group2\">\n          <SelectOption key={5} value=\"Dell\" />\n          <SelectOption key={6} value=\"Samsung\" isDisabled />\n          <SelectOption key={7} value=\"Hewlett-Packard\" />\n        </SelectGroup>\n      ],\n      newOptions: [],\n      isOpen: false,\n      selected: null,\n      isCreatable: false,\n      hasOnCreateOption: false\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection, isPlaceholder) => {\n      if (isPlaceholder) this.clearSelection();\n      else {\n        this.setState({\n          selected: selection,\n          isOpen: false\n        });\n        console.log('selected:', selection);\n      }\n    };\n\n    this.onCreateOption = newValue => {\n      this.setState({\n        newOptions: [...this.state.newOptions, <SelectOption key={newValue} value={newValue} />]\n      });\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: null,\n        isOpen: false\n      });\n    };\n\n    this.toggleCreatable = checked => {\n      this.setState({\n        isCreatable: checked\n      });\n    };\n\n    this.toggleCreateNew = checked => {\n      this.setState({\n        hasOnCreateOption: checked\n      });\n    };\n  }\n\n  render() {\n    const { isOpen, selected, isDisabled, isCreatable, hasOnCreateOption, options, newOptions } = this.state;\n    const titleId = 'grouped-typeahead-select-id';\n    const allOptions =\n      newOptions.length > 0\n        ? options.concat(\n            <SelectGroup label=\"Created\" key=\"create-group\">\n              {newOptions}\n            </SelectGroup>\n          )\n        : options;\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Select a state\n        </span>\n        <Select\n          variant={SelectVariant.typeahead}\n          typeAheadAriaLabel=\"Select a state\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          onClear={this.clearSelection}\n          selections={selected}\n          isOpen={isOpen}\n          aria-labelledby={titleId}\n          placeholderText=\"Select a state\"\n          isGrouped\n          isCreatable={isCreatable}\n          onCreateOption={(hasOnCreateOption && this.onCreateOption) || undefined}\n        >\n          {allOptions}\n        </Select>\n        <Checkbox\n          label=\"isCreatable\"\n          isChecked={this.state.isCreatable}\n          onChange={this.toggleCreatable}\n          aria-label=\"toggle creatable checkbox\"\n          id=\"toggle-creatable-typeahead\"\n          name=\"toggle-creatable-typeahead\"\n        />\n        <Checkbox\n          label=\"onCreateOption\"\n          isChecked={this.state.hasOnCreateOption}\n          onChange={this.toggleCreateNew}\n          aria-label=\"toggle new checkbox\"\n          id=\"toggle-new-typeahead\"\n          name=\"toggle-new-typeahead\"\n        />\n      </div>\n    );\n  }\n}","title":"Grouped typeahead","lang":"js"}}>
      
    </Example>,
  'Custom filtering': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectVariant } from '@patternfly/react-core';\n\nclass TypeaheadSelectInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.options = [\n      <SelectOption key={0} value=\"Alabama\" />,\n      <SelectOption key={1} value=\"Florida\" />,\n      <SelectOption key={2} value=\"New Jersey\" />,\n      <SelectOption key={3} value=\"New Mexico\" />,\n      <SelectOption key={4} value=\"New York\" />,\n      <SelectOption key={5} value=\"North Carolina\" />\n    ];\n    this.state = {\n      isOpen: false,\n      selected: null\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection, isPlaceholder) => {\n      if (isPlaceholder) this.clearSelection();\n      else {\n        this.setState({\n          selected: selection,\n          isOpen: false\n        });\n        console.log('selected:', selection);\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: null,\n        isOpen: false\n      });\n    };\n\n    this.customFilter = (_, value) => {\n      if (!value) {\n        return this.options;\n      }\n\n      const input = new RegExp(value, 'i');\n      return this.options.filter(child => input.test(child.props.value));\n    };\n  }\n\n  render() {\n    const { isOpen, selected } = this.state;\n    const titleId = 'typeahead-select-id-2';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Select a state\n        </span>\n        <Select\n          variant={SelectVariant.typeahead}\n          typeAheadAriaLabel=\"Select a state\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          onClear={this.clearSelection}\n          onFilter={this.customFilter}\n          selections={selected}\n          isOpen={isOpen}\n          aria-labelledby={titleId}\n          placeholderText=\"Select a state\"\n        >\n          {this.options}\n        </Select>\n      </div>\n    );\n  }\n}","title":"Custom filtering","lang":"js"}}>
      
    </Example>,
  'Multiple': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Checkbox, Select, SelectOption, SelectVariant } from '@patternfly/react-core';\n\nclass MultiTypeaheadSelectInput extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      options: [\n        { value: 'Alabama', disabled: false },\n        { value: 'Florida', disabled: false },\n        { value: 'New Jersey', disabled: false },\n        { value: 'New Mexico', disabled: false, description: 'This is a description' },\n        { value: 'New York', disabled: false },\n        { value: 'North Carolina', disabled: false }\n      ],\n      isOpen: false,\n      selected: [],\n      isCreatable: false,\n      hasOnCreateOption: false,\n      hasDisabledOption: false,\n      resetOnSelect: true\n    };\n\n    this.onCreateOption = newValue => {\n      this.setState({\n        options: [...this.state.options, { value: newValue }]\n      });\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection) => {\n      const { selected } = this.state;\n      if (selected.includes(selection)) {\n        this.setState(\n          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      } else {\n        this.setState(\n          prevState => ({ selected: [...prevState.selected, selection] }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: [],\n        isOpen: false\n      });\n    };\n\n    this.toggleCreatable = checked => {\n      this.setState({\n        isCreatable: checked\n      });\n    };\n\n    this.toggleCreateNew = checked => {\n      this.setState({\n        hasOnCreateOption: checked\n      });\n    };\n\n    this.toggleOptionDisabled = toggleIndex => () => {\n      this.setState(prevState => ({\n        hasDisabledOption: !prevState.hasDisabledOption,\n        options: prevState.options.map((option, index) =>\n          index === toggleIndex ? { ...option, disabled: !option.disabled } : option\n        )\n      }));\n    };\n\n    this.toggleResetOnSelect = checked => {\n      this.setState({\n        resetOnSelect: checked\n      });\n    };\n  }\n\n  render() {\n    const { isOpen, selected, isCreatable, hasOnCreateOption, resetOnSelect, options } = this.state;\n    const titleId = 'multi-typeahead-select-id-1';\n\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Select a state\n        </span>\n        <Select\n          variant={SelectVariant.typeaheadMulti}\n          typeAheadAriaLabel=\"Select a state\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          onClear={this.clearSelection}\n          selections={selected}\n          isOpen={isOpen}\n          aria-labelledby={titleId}\n          placeholderText=\"Select a state\"\n          isCreatable={isCreatable}\n          onCreateOption={(hasOnCreateOption && this.onCreateOption) || undefined}\n          shouldResetOnSelect={resetOnSelect}\n        >\n          {options.map((option, index) => (\n            <SelectOption\n              isDisabled={option.disabled}\n              key={index}\n              value={option.value}\n              {...(option.description && { description: option.description })}\n            />\n          ))}\n        </Select>\n        <Checkbox\n          label=\"isCreatable\"\n          isChecked={this.state.isCreatable}\n          onChange={this.toggleCreatable}\n          aria-label=\"toggle creatable checkbox\"\n          id=\"toggle-creatable-typeahead-multi\"\n          name=\"toggle-creatable-typeahead-multi\"\n        />\n        <Checkbox\n          label=\"onCreateOption\"\n          isChecked={this.state.hasOnCreateOption}\n          onChange={this.toggleCreateNew}\n          aria-label=\"toggle new checkbox\"\n          id=\"toggle-new-typeahead-multi\"\n          name=\"toggle-new-typeahead-multi\"\n        />\n        <Checkbox\n          label=\"isDisabled (1st option only)\"\n          isChecked={this.state.hasDisabledOption}\n          onChange={this.toggleOptionDisabled(0)}\n          aria-label=\"toggle disable first option\"\n          id=\"toggle-disable-first-option\"\n          name=\"toggle-disable-first-option\"\n        />\n        <Checkbox\n          label=\"shouldResetOnSelect\"\n          isChecked={this.state.resetOnSelect}\n          onChange={this.toggleResetOnSelect}\n          aria-label=\"toggle multi reset checkbox\"\n          id=\"toggle-reset-multi-typeahead\"\n          name=\"toggle-reset-multi-typeahead\"\n        />\n      </div>\n    );\n  }\n}","title":"Multiple","lang":"js"}}>
      
    </Example>,
  'Multiple with Custom Chip Group Props': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectVariant } from '@patternfly/react-core';\n\nclass MultiTypeaheadSelectInputWithChipGroupProps extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      options: [\n        { value: 'Alabama', disabled: false },\n        { value: 'Florida', disabled: false },\n        { value: 'New Jersey', disabled: false },\n        { value: 'New Mexico', disabled: false, description: 'This is a description' },\n        { value: 'New York', disabled: false },\n        { value: 'North Carolina', disabled: false }\n      ],\n      isOpen: false,\n      selected: []\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection) => {\n      const { selected } = this.state;\n      if (selected.includes(selection)) {\n        this.setState(\n          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      } else {\n        this.setState(\n          prevState => ({ selected: [...prevState.selected, selection] }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: [],\n        isOpen: false\n      });\n    };\n  }\n\n  render() {\n    const { isOpen, selected, isCreatable, hasOnCreateOption } = this.state;\n    const titleId = 'multi-typeahead-custom-chip-group-props-id-1';\n\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Select a state\n        </span>\n        <Select\n          chipGroupProps={{ numChips: 1, expandedText: 'Hide', collapsedText: 'Show ${remaining}' }}\n          variant={SelectVariant.typeaheadMulti}\n          typeAheadAriaLabel=\"Select a state\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          onClear={this.clearSelection}\n          selections={selected}\n          isOpen={isOpen}\n          aria-labelledby={titleId}\n          placeholderText=\"Select a state\"\n        >\n          {this.state.options.map((option, index) => (\n            <SelectOption\n              isDisabled={option.disabled}\n              key={index}\n              value={option.value}\n              {...(option.description && { description: option.description })}\n            />\n          ))}\n        </Select>\n      </div>\n    );\n  }\n}","title":"Multiple with Custom Chip Group Props","lang":"js"}}>
      
    </Example>,
  'Multiple with Render Custom Chip Group': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectVariant, ChipGroup, Chip } from '@patternfly/react-core';\n\nclass MultiTypeaheadSelectInputWithChipGroupProps extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      options: [\n        { value: 'Alabama', disabled: false },\n        { value: 'Florida', disabled: false },\n        { value: 'New Jersey', disabled: false },\n        { value: 'New Mexico', disabled: false, description: 'This is a description' },\n        { value: 'New York', disabled: false },\n        { value: 'North Carolina', disabled: false }\n      ],\n      isOpen: false,\n      selected: []\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection) => {\n      const { selected } = this.state;\n      if (selected.includes(selection)) {\n        this.setState(\n          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      } else {\n        this.setState(\n          prevState => ({ selected: [...prevState.selected, selection] }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: [],\n        isOpen: false\n      });\n    };\n    this.chipGroupComponent = () => {\n      const { selected } = this.state;\n      return (\n        <ChipGroup>\n          {(selected || []).map((currentChip, index) => (\n            <Chip\n              isReadOnly={index === 0 ? true : false}\n              key={currentChip}\n              onClick={event => this.onSelect(event, currentChip)}\n            >\n              {currentChip}\n            </Chip>\n          ))}\n        </ChipGroup>\n      );\n    };\n  }\n\n  render() {\n    const { isOpen, selected, isCreatable, hasOnCreateOption } = this.state;\n    const titleId = 'multi-typeahead-custom-chip-group-props-id-1';\n\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Select a state\n        </span>\n        <Select\n          chipGroupProps={{ numChips: 1, expandedText: 'Hide', collapsedText: 'Show ${remaining}' }}\n          variant={SelectVariant.typeaheadMulti}\n          typeAheadAriaLabel=\"Select a state\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          onClear={this.clearSelection}\n          selections={selected}\n          isOpen={isOpen}\n          aria-labelledby={titleId}\n          placeholderText=\"Select a state\"\n          chipGroupComponent={this.chipGroupComponent()}\n        >\n          {this.state.options.map((option, index) => (\n            <SelectOption\n              isDisabled={option.disabled}\n              key={index}\n              value={option.value}\n              {...(option.description && { description: option.description })}\n            />\n          ))}\n        </Select>\n      </div>\n    );\n  }\n}","title":"Multiple with Render Custom Chip Group","lang":"js"}}>
      
    </Example>,
  'Multiple with custom objects': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectVariant, Divider } from '@patternfly/react-core';\n\nclass MultiTypeaheadSelectInputCustomObjects extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createState = (name, abbreviation, capital, founded) => {\n      return {\n        name: name,\n        abbreviation: abbreviation,\n        capital: capital,\n        founded: founded,\n        toString: function() {\n          return `${this.name} (${this.abbreviation}) - Founded: ${this.founded}`;\n        },\n        compareTo: function(value) {\n          return this.toString()\n            .toLowerCase()\n            .includes(value.toString().toLowerCase());\n        }\n      };\n    };\n    this.options = [\n      <SelectOption key={0} value={this.createState('Alabama', 'AL', 'Montgomery', 1846)} />,\n      <Divider component=\"li\" key={111} />,\n      <SelectOption key={1} value={this.createState('Florida', 'FL', 'Tailahassee', 1845)} />,\n      <SelectOption key={2} value={this.createState('New Jersey', 'NJ', 'Trenton', 1787)} />,\n      <SelectOption key={3} value={this.createState('New Mexico', 'NM', 'Santa Fe', 1912)} />,\n      <SelectOption key={4} value={this.createState('New York', 'NY', 'Albany', 1788)} />,\n      <SelectOption key={5} value={this.createState('North Carolina', 'NC', 'Raleigh', 1789)} />\n    ];\n\n    this.state = {\n      isOpen: false,\n      selected: []\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection) => {\n      const { selected } = this.state;\n      if (selected.includes(selection)) {\n        this.setState(\n          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      } else {\n        this.setState(\n          prevState => ({ selected: [...prevState.selected, selection] }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: [],\n        isOpen: false\n      });\n    };\n  }\n\n  render() {\n    const { isOpen, selected } = this.state;\n    const titleId = 'multi-typeahead-select-id-2';\n\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Select a state\n        </span>\n        <Select\n          variant={SelectVariant.typeaheadMulti}\n          typeAheadAriaLabel=\"Select a state\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          onClear={this.clearSelection}\n          onFilter={this.customFilter}\n          selections={selected}\n          isOpen={isOpen}\n          aria-labelledby={titleId}\n          placeholderText=\"Select a state\"\n        >\n          {this.options}\n        </Select>\n      </div>\n    );\n  }\n}","title":"Multiple with custom objects","lang":"js"}}>
      
    </Example>,
  'Plain multiple typeahead': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectVariant } from '@patternfly/react-core';\n\nclass PlainSelectInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.options = [\n      { value: 'Alabama', disabled: false },\n      { value: 'Florida', disabled: false },\n      { value: 'New Jersey', disabled: false },\n      { value: 'New Mexico', disabled: false },\n      { value: 'New York', disabled: false },\n      { value: 'North Carolina', disabled: false }\n    ];\n\n    this.state = {\n      isOpen: false,\n      isPlain: true,\n      selected: []\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection) => {\n      const { selected } = this.state;\n      if (selected.includes(selection)) {\n        this.setState(\n          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      } else {\n        this.setState(\n          prevState => ({ selected: [...prevState.selected, selection] }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: [],\n        isOpen: false\n      });\n    };\n  }\n\n  render() {\n    const { isOpen, isPlain, selected } = this.state;\n    const titleId = 'plain-typeahead-select-id';\n\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Select a state\n        </span>\n        <Select\n          variant={SelectVariant.typeaheadMulti}\n          typeAheadAriaLabel=\"Select a state\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          onClear={this.clearSelection}\n          selections={selected}\n          isOpen={isOpen}\n          isPlain={isPlain}\n          aria-labelledby={titleId}\n          placeholderText=\"Select a state\"\n        >\n          {this.options.map((option, index) => (\n            <SelectOption isDisabled={option.disabled} key={index} value={option.value} />\n          ))}\n        </Select>\n      </div>\n    );\n  }\n}","title":"Plain multiple typeahead","lang":"js"}}>
      
    </Example>,
  'Panel': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';\nimport { Select, SelectOption, SelectDirection, Checkbox } from '@patternfly/react-core';\n\nclass SingleSelectInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false,\n      isDisabled: false,\n      direction: SelectDirection.down\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.toggleDisabled = checked => {\n      this.setState({\n        isDisabled: checked\n      });\n    };\n\n    this.toggleDirection = () => {\n      if (this.state.direction === SelectDirection.up) {\n        this.setState({\n          direction: SelectDirection.down\n        });\n      } else {\n        this.setState({\n          direction: SelectDirection.up\n        });\n      }\n    };\n  }\n\n  render() {\n    const { isOpen, selected, isDisabled, direction } = this.state;\n    const titleId = 'title-id-2';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Title\n        </span>\n        <Select\n          aria-label=\"Select Input\"\n          onToggle={this.onToggle}\n          isOpen={isOpen}\n          aria-labelledby={titleId}\n          isDisabled={isDisabled}\n          direction={direction}\n          customContent=\"[Panel contents here]\"\n          placeholderText=\"Filter by birth month\"\n        />\n        <Checkbox\n          label=\"isDisabled\"\n          isChecked={this.state.isDisabled}\n          onChange={this.toggleDisabled}\n          aria-label=\"disabled checkbox panel\"\n          id=\"toggle-disabled-panel\"\n          name=\"toggle-disabled-panel\"\n        />\n        <Checkbox\n          label=\"Expands up\"\n          isChecked={direction === SelectDirection.up}\n          onChange={this.toggleDirection}\n          aria-label=\"direction checkbox panel\"\n          id=\"toggle-direction-panel\"\n          name=\"toggle-direction-panel\"\n        />\n      </div>\n    );\n  }\n}","title":"Panel","lang":"js"}}>
      
    </Example>,
  'Appending document body vs parent': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, Flex, FlexItem } from '@patternfly/react-core';\n\nclass SelectDocumentBodyVsParent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.bodyOptions = [\n      <SelectOption key={0} value=\"Select a title - document body\" isPlaceholder />,\n      <SelectOption key={1} value=\"Mr\" />,\n      <SelectOption key={2} value=\"Miss\" />,\n      <SelectOption key={3} value=\"Mrs\" />,\n      <SelectOption key={4} value=\"Ms\" />,\n      <SelectOption key={6} value=\"Dr\" />,\n      <SelectOption key={7} value=\"Other\" />\n    ];\n\n    this.parentOptions = [\n      <SelectOption key={0} value=\"Select a title - parent\" isPlaceholder />,\n      <SelectOption key={1} value=\"Mr\" />,\n      <SelectOption key={2} value=\"Miss\" />,\n      <SelectOption key={3} value=\"Mrs\" />,\n      <SelectOption key={4} value=\"Ms\" />,\n      <SelectOption key={6} value=\"Dr\" />,\n      <SelectOption key={7} value=\"Other\" />\n    ];\n\n    this.state = {\n      isBodyOpen: false,\n      isParentOpen: false,\n      bodySelected: null,\n      parentSelected: null\n    };\n\n    this.onBodyToggle = isBodyOpen => {\n      this.setState({\n        isBodyOpen\n      });\n    };\n\n    this.onParentToggle = isParentOpen => {\n      this.setState({\n        isParentOpen\n      });\n    };\n\n    this.onBodySelect = (event, selection, isPlaceholder) => {\n      if (isPlaceholder) this.clearSelection();\n      else {\n        this.setState({\n          bodySelected: selection,\n          isBodyOpen: false\n        });\n        console.log('selected on document body:', selection);\n      }\n    };\n\n    this.onParentSelect = (event, selection, isPlaceholder) => {\n      if (isPlaceholder) this.clearSelection();\n      else {\n        this.setState({\n          parentSelected: selection,\n          isParentOpen: false\n        });\n        console.log('selected on parent:', selection);\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: null,\n        isOpen: false\n      });\n    };\n  }\n\n  render() {\n    const { isBodyOpen, isParentOpen, bodySelected, parentSelected } = this.state;\n\n    return (\n      <Flex space={{ default: 'spacerMd' }} direction={{ default: 'column' }}>\n        <FlexItem>\n          <Select\n            aria-label=\"Select Input for Document Body\"\n            onToggle={this.onBodyToggle}\n            onSelect={this.onBodySelect}\n            selections={bodySelected}\n            isOpen={isBodyOpen}\n            menuAppendTo={() => document.body}\n          >\n            {this.bodyOptions}\n          </Select>\n        </FlexItem>\n        <FlexItem>\n          <Select\n            aria-label=\"Select Input for Parent\"\n            onToggle={this.onParentToggle}\n            onSelect={this.onParentSelect}\n            selections={parentSelected}\n            isOpen={isParentOpen}\n            menuAppendTo=\"parent\"\n          >\n            {this.parentOptions}\n          </Select>\n        </FlexItem>\n      </Flex>\n    );\n  }\n}","title":"Appending document body vs parent","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Avoid passing in `}
        
        <code {...{"className":"ws-code"}}>
          {`document.body`}
        </code>
        {` when passing a value to the `}
        
        <code {...{"className":"ws-code"}}>
          {`menuAppendTo`}
        </code>
        {` prop on the Select component, as it can cause accessibility issues. These issues can include, but are not limited to, being unable to enter the contents of the Select options via assistive technologies (like keyboards or screen readers).`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`Instead append to `}
        
        <code {...{"className":"ws-code"}}>
          {`"parent"`}
        </code>
        {` to achieve the same result without sacrificing accessibility.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`In this example, while, when the dropdown is opened, both Select variants handle focus management within their dropdown contents the same way, you'll notice a difference when you try pressing the Tab key after selecting an option.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`For the `}
        
        <code {...{"className":"ws-code"}}>
          {`document.body`}
        </code>
        {` variant, the focus will be placed at the end of the page, since that is where the dropdown content is appended to in the DOM (rather than focus being placed on the second Select variant as one might expect). For the `}
        
        <code {...{"className":"ws-code"}}>
          {`"parent"`}
        </code>
        {` variant, however, the focus will be placed on the next tab-able element (the "Toggle JS code" button for the code editor in this case).`}
      </p>
    </Example>,
  'Favorites': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectVariant, SelectGroup } from '@patternfly/react-core';\n\nclass FavoritesSelect extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false,\n      selected: null,\n      favorites: []\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection, isPlaceholder) => {\n      if (isPlaceholder) this.clearSelection();\n      else {\n        this.setState({\n          selected: selection,\n          isOpen: false\n        });\n        console.log('selected:', selection);\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: null,\n        isOpen: false\n      });\n    };\n\n    this.onFavorite = (itemId, isFavorite) => {\n      if (isFavorite) {\n        this.setState({\n          favorites: this.state.favorites.filter(id => id !== itemId)\n        });\n      } else\n        this.setState({\n          favorites: [...this.state.favorites, itemId]\n        });\n    };\n\n    this.options = [\n      <SelectGroup label=\"Status\" key=\"group1\">\n        <SelectOption id={'option-1'} key={0} value=\"Running\" description=\"This is a description.\" />\n        <SelectOption id={'option-2'} key={1} value=\"Stopped\" />\n        <SelectOption id={'option-3'} key={2} value=\"Down (disabled)\" isDisabled />\n        <SelectOption id={'option-4'} key={3} value=\"Degraded\" />\n        <SelectOption id={'option-5'} key={4} value=\"Needs maintenance\" />\n      </SelectGroup>,\n      <SelectGroup label=\"Vendor names\" key=\"group2\">\n        <SelectOption id={'option-6'} key={5} value=\"Dell\" />\n        <SelectOption id={'option-7'} key={6} value=\"Samsung\" description=\"This is a description.\" />\n        <SelectOption id={'option-8'} key={7} value=\"Hewlett-Packard\" />\n      </SelectGroup>\n    ];\n  }\n\n  render() {\n    const { isOpen, selected, favorites } = this.state;\n    const titleId = 'grouped-single-select-id';\n    return (\n      <Select\n        variant={SelectVariant.typeahead}\n        typeAheadAriaLabel=\"Select value\"\n        onToggle={this.onToggle}\n        onSelect={this.onSelect}\n        selections={selected}\n        isOpen={isOpen}\n        placeholderText=\"Favorites\"\n        aria-labelledby={titleId}\n        isGrouped\n        onFavorite={this.onFavorite}\n        favorites={favorites}\n        onClear={this.clearSelection}\n      >\n        {this.options}\n      </Select>\n    );\n  }\n}","title":"Favorites","lang":"js"}}>
      
    </Example>,
  'Footer': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';\nimport { Select, SelectOption, SelectVariant, SelectDirection, Divider, Button } from '@patternfly/react-core';\n\nclass SelectWithFooter extends React.Component {\n  constructor(props) {\n    super(props);\n    this.options = [\n      <SelectOption key={0} value=\"Select a title\" isPlaceholder />,\n      <SelectOption key={1} value=\"Mr\" />,\n      <SelectOption key={2} value=\"Miss\" />,\n      <SelectOption key={3} value=\"Mrs\" />,\n      <SelectOption key={4} value=\"Ms\" />,\n      <Divider component=\"li\" key={5} />,\n      <SelectOption key={6} value=\"Dr\" />,\n      <SelectOption key={7} value=\"Other\" />\n    ];\n\n    this.state = {\n      isToggleIcon: false,\n      isOpen: false,\n      selected: null,\n      isDisabled: false,\n      direction: SelectDirection.down\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection, isPlaceholder) => {\n      if (isPlaceholder) this.clearSelection();\n      else {\n        this.setState({\n          selected: selection,\n          isOpen: false\n        });\n        console.log('selected:', selection);\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: null,\n        isOpen: false\n      });\n    };\n  }\n\n  render() {\n    const { isOpen, selected, isDisabled, direction, isToggleIcon } = this.state;\n    const titleId = 'title-id-footer';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Title\n        </span>\n        <Select\n          toggleIcon={isToggleIcon && <CubeIcon />}\n          variant={SelectVariant.single}\n          aria-label=\"Select Input\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          selections={selected}\n          isOpen={isOpen}\n          aria-labelledby={titleId}\n          isDisabled={isDisabled}\n          direction={direction}\n          footer={\n            <>\n              <Button variant=\"link\" isInline>\n                Action\n              </Button>\n            </>\n          }\n        >\n          {this.options}\n        </Select>\n      </div>\n    );\n  }\n}","title":"Footer","lang":"js"}}>
      
    </Example>,
  'Footer with checkboxes': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectVariant, Button } from '@patternfly/react-core';\n\nclass SelectWithFooterCheckbox extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false,\n      selected: [],\n      numOptions: 3,\n      isLoading: false\n    };\n\n    this.options = [\n      <SelectOption key={0} value=\"Active\" description=\"This is a description\" />,\n      <SelectOption key={1} value=\"Cancelled\" />,\n      <SelectOption key={2} value=\"Paused\" />,\n      <SelectOption key={4} value=\"Warning\" />,\n      <SelectOption key={5} value=\"Restarted\" />\n    ];\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection) => {\n      const { selected } = this.state;\n      if (selected.includes(selection)) {\n        this.setState(\n          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      } else {\n        this.setState(\n          prevState => ({ selected: [...prevState.selected, selection] }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: []\n      });\n    };\n  }\n\n  render() {\n    const { isOpen, selected, isDisabled, direction, isToggleIcon } = this.state;\n    const titleId = 'title-id-footer-checkbox';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Title\n        </span>\n        <Select\n          variant={SelectVariant.checkbox}\n          aria-label=\"Select input\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          selections={selected}\n          isOpen={isOpen}\n          placeholderText=\"Filter by status\"\n          aria-labelledby={titleId}\n          footer={\n            <Button variant=\"link\" isInline>\n              Action\n            </Button>\n          }\n        >\n          {this.options}\n        </Select>\n      </div>\n    );\n  }\n}","title":"Footer with checkboxes","lang":"js"}}>
      
    </Example>,
  'View more': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectVariant } from '@patternfly/react-core';\n\nclass SelectViewMore extends React.Component {\n  constructor(props) {\n    super(props);\n    this.options = [\n      <SelectOption key={0} value=\"Select a title\" isPlaceholder />,\n      <SelectOption key={1} value=\"Mr\" />,\n      <SelectOption key={2} value=\"Miss\" />,\n      <SelectOption key={3} value=\"Mrs\" />,\n      <SelectOption key={4} value=\"Ms\" />,\n      <SelectOption key={5} value=\"Dr\" />,\n      <SelectOption key={6} value=\"Other\" />\n    ];\n\n    this.state = {\n      isOpen: false,\n      selected: null,\n      numOptions: 3,\n      isLoading: false\n    };\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection, isPlaceholder) => {\n      if (isPlaceholder) this.clearSelection();\n      else {\n        this.setState({\n          selected: selection,\n          isOpen: false\n        });\n        console.log('selected:', selection);\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: null,\n        isOpen: false\n      });\n    };\n\n    this.simulateNetworkCall = callback => {\n      setTimeout(callback, 2000);\n    };\n\n    this.onViewMoreClick = () => {\n      // Set select loadingVariant to spinner then simulate network call before loading more options\n      this.setState({ isLoading: true });\n      this.simulateNetworkCall(() => {\n        const newLength =\n          this.state.numOptions + 3 <= this.options.length ? this.state.numOptions + 3 : this.options.length;\n        this.setState({ numOptions: newLength, isLoading: false });\n      });\n    };\n  }\n\n  render() {\n    const { isOpen, selected, isToggleIcon, numOptions, loadingVariant, isLoading } = this.state;\n    const titleId = 'title-id-view-more';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Title\n        </span>\n        <Select\n          variant={SelectVariant.single}\n          aria-label=\"Select Input\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          selections={selected}\n          isOpen={isOpen}\n          aria-labelledby={titleId}\n          {...(!isLoading &&\n            numOptions < this.options.length && {\n              loadingVariant: { text: 'View more', onClick: this.onViewMoreClick }\n            })}\n          {...(isLoading && { loadingVariant: 'spinner' })}\n        >\n          {this.options.slice(0, numOptions)}\n        </Select>\n      </div>\n    );\n  }\n}","title":"View more","lang":"js","isBeta":true}}>
      
    </Example>,
  'View more with checkboxes': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption, SelectVariant } from '@patternfly/react-core';\n\nclass SelectViewMoreCheckbox extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      isOpen: false,\n      selected: [],\n      numOptions: 3,\n      isLoading: false\n    };\n\n    this.options = [\n      <SelectOption key={0} value=\"Active\" description=\"This is a description\" />,\n      <SelectOption key={1} value=\"Cancelled\" />,\n      <SelectOption key={2} value=\"Paused\" />,\n      <SelectOption key={4} value=\"Warning\" />,\n      <SelectOption key={5} value=\"Restarted\" />,\n      <SelectOption key={6} value=\"Down\" />,\n      <SelectOption key={7} value=\"Disabled\" />,\n      <SelectOption key={8} value=\"Needs maintenance \" />,\n      <SelectOption key={9} value=\"Degraded \" />\n    ];\n\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, selection) => {\n      const { selected } = this.state;\n      if (selected.includes(selection)) {\n        this.setState(\n          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      } else {\n        this.setState(\n          prevState => ({ selected: [...prevState.selected, selection] }),\n          () => console.log('selections: ', this.state.selected)\n        );\n      }\n    };\n\n    this.clearSelection = () => {\n      this.setState({\n        selected: []\n      });\n    };\n\n    this.simulateNetworkCall = callback => {\n      setTimeout(callback, 2000);\n    };\n\n    this.onViewMoreClick = () => {\n      // Set select loadingVariant to spinner then simulate network call before loading more options\n      this.setState({ isLoading: true });\n      this.simulateNetworkCall(() => {\n        const newLength =\n          this.state.numOptions + 3 <= this.options.length ? this.state.numOptions + 3 : this.options.length;\n        this.setState({ numOptions: newLength, isLoading: false });\n      });\n    };\n  }\n\n  render() {\n    const { isOpen, selected, numOptions, isLoading } = this.state;\n    const titleId = 'view-more-checkbox-select-id';\n    return (\n      <div>\n        <span id={titleId} hidden>\n          Checkbox View more check\n        </span>\n        <Select\n          variant={SelectVariant.checkbox}\n          aria-label=\"Select input\"\n          onToggle={this.onToggle}\n          onSelect={this.onSelect}\n          selections={selected}\n          isOpen={isOpen}\n          placeholderText=\"Filter by status\"\n          aria-labelledby={titleId}\n          {...(!isLoading &&\n            numOptions < this.options.length && {\n              loadingVariant: { text: 'View more', onClick: this.onViewMoreClick }\n            })}\n          {...(isLoading && { loadingVariant: 'spinner' })}\n        >\n          {this.options.slice(0, numOptions)}\n        </Select>\n      </div>\n    );\n  }\n}","title":"View more with checkboxes","lang":"js","isBeta":true}}>
      
    </Example>,
  'With a style applied to the placeholder text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption } from '@patternfly/react-core';\n\nfunction SelectWithPlaceholderStyle() {\n  const [isOpen, setIsOpen] = React.useState(false);\n  const [selected, setSelected] = React.useState([]);\n\n  const options = [\n    <SelectOption key={0} value=\"Active\" />,\n    <SelectOption key={1} value=\"Cancelled\" />,\n    <SelectOption key={2} value=\"Paused\" />\n  ];\n\n  const onToggle = isOpen => setIsOpen(isOpen);\n\n  const onSelect = (event, selection, isPlaceholder) => {\n    setSelected(selection);\n    setIsOpen(false);\n  };\n\n  const clearSelection = () => {\n    setSelected(null);\n    setIsOpen(false);\n  };\n\n  const titleId = 'placeholder-style-select-id';\n\n  return (\n    <div>\n      <span id={titleId} hidden>\n        Placeholder styles\n      </span>\n      <Select\n        variant={SelectVariant.single}\n        hasPlaceholderStyle\n        aria-label=\"Select input\"\n        onToggle={onToggle}\n        onSelect={onSelect}\n        onClear={clearSelection}\n        selections={selected}\n        isOpen={isOpen}\n        placeholderText=\"Filter by status\"\n        aria-labelledby={titleId}\n      >\n        {options}\n      </Select>\n    </div>\n  );\n}","title":"With a style applied to the placeholder text","lang":"js"}}>
      
    </Example>,
  'With a style applied to the placeholder option': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Select, SelectOption } from '@patternfly/react-core';\n\nfunction SelectWithPlaceholderStyle() {\n  const [isOpen, setIsOpen] = React.useState(false);\n  const [selected, setSelected] = React.useState([]);\n\n  const options = [\n    <SelectOption key={0} value=\"Filter by status\" isPlaceholder />,\n    <SelectOption key={1} value=\"Active\" />,\n    <SelectOption key={2} value=\"Cancelled\" />,\n    <SelectOption key={3} value=\"Paused\" />\n  ];\n\n  const onToggle = isOpen => setIsOpen(isOpen);\n\n  const onSelect = (event, selection, isPlaceholder) => {\n    setSelected(selection);\n    setIsOpen(false);\n  };\n\n  const clearSelection = () => {\n    setSelected(null);\n    setIsOpen(false);\n  };\n\n  const titleId = 'placeholder-style-select-option-id';\n\n  return (\n    <div>\n      <span id={titleId} hidden>\n        Placeholder styles - select option\n      </span>\n      <Select\n        variant={SelectVariant.single}\n        hasPlaceholderStyle\n        aria-label=\"Select input\"\n        onToggle={onToggle}\n        onSelect={onSelect}\n        onClear={clearSelection}\n        selections={selected}\n        isOpen={isOpen}\n        aria-labelledby={titleId}\n      >\n        {options}\n      </Select>\n    </div>\n  );\n}","title":"With a style applied to the placeholder option","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Single"])}
    {React.createElement(pageData.examples["Single with description"])}
    {React.createElement(pageData.examples["Grouped single"])}
    {React.createElement(pageData.examples["Validated"])}
    {React.createElement(pageData.examples["Checkbox input"])}
    {React.createElement(pageData.examples["Checkbox input with counts"])}
    {React.createElement(pageData.examples["Checkbox input no badge"])}
    {React.createElement(pageData.examples["Grouped checkbox input"])}
    {React.createElement(pageData.examples["Grouped single with filtering"])}
    {React.createElement(pageData.examples["Grouped checkbox input with filtering"])}
    {React.createElement(pageData.examples["Grouped checkbox input with filtering and placeholder text"])}
    {React.createElement(pageData.examples["Grouped checkbox input with filtering and custom badging"])}
    {React.createElement(pageData.examples["Typeahead"])}
    {React.createElement(pageData.examples["Grouped typeahead"])}
    {React.createElement(pageData.examples["Custom filtering"])}
    {React.createElement(pageData.examples["Multiple"])}
    {React.createElement(pageData.examples["Multiple with Custom Chip Group Props"])}
    {React.createElement(pageData.examples["Multiple with Render Custom Chip Group"])}
    {React.createElement(pageData.examples["Multiple with custom objects"])}
    {React.createElement(pageData.examples["Plain multiple typeahead"])}
    {React.createElement(pageData.examples["Panel"])}
    {React.createElement(pageData.examples["Appending document body vs parent"])}
    {React.createElement(pageData.examples["Favorites"])}
    {React.createElement(pageData.examples["Footer"])}
    {React.createElement(pageData.examples["Footer with checkboxes"])}
    {React.createElement(pageData.examples["View more"])}
    {React.createElement(pageData.examples["View more with checkboxes"])}
    {React.createElement(pageData.examples["With a style applied to the placeholder text"])}
    {React.createElement(pageData.examples["With a style applied to the placeholder option"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsSelectReactDocs';
Component.pageData = pageData;

export default Component;
