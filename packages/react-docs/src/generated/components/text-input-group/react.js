import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
const pageData = {
  "id": "Text input group",
  "section": "components",
  "source": "react",
  "slug": "/components/text-input-group/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/TextInputGroup/examples/TextInputGroup.md",
  "propComponents": [
    {
      "name": "TextInputGroup",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the text input group"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes applied to the text input group container"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Adds disabled styling and a disabled context value which text input group main hooks into for the input itself"
        }
      ]
    },
    {
      "name": "TextInputGroupMain",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessibility label for the input",
          "defaultValue": "'Type to filter'"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the text input group main div"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes applied to the text input group main container"
        },
        {
          "name": "hint",
          "type": "string",
          "description": "Suggestion that will show up like a placeholder even with text in the input"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Icon to be shown on the left side of the text input group main container"
        },
        {
          "name": "onBlur",
          "type": "(event?: any) => void",
          "description": "Callback for when focus is lost on the input field"
        },
        {
          "name": "onChange",
          "type": "(value: string, event: React.FormEvent<HTMLInputElement>) => void",
          "description": "Callback for when there is a change in the input field",
          "defaultValue": "(): any => undefined"
        },
        {
          "name": "onFocus",
          "type": "(event?: any) => void",
          "description": "Callback for when the input field is focused"
        },
        {
          "name": "placeholder",
          "type": "string",
          "description": "Placeholder value for the input"
        },
        {
          "name": "type",
          "type": "'text'\n| 'date'\n| 'datetime-local'\n| 'email'\n| 'month'\n| 'number'\n| 'password'\n| 'search'\n| 'tel'\n| 'time'\n| 'url'",
          "description": "Type that the input accepts.",
          "defaultValue": "'text'"
        },
        {
          "name": "value",
          "type": "string | number",
          "description": "Value for the input"
        }
      ]
    },
    {
      "name": "TextInputGroupUtilities",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the text input group utilities div"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes applied to the text input group utilities container"
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-text-input-group"
  ],
  "examples": [
    "Basic",
    "Disabled",
    "Utilities and icon",
    "Filters"
  ]
};
pageData.liveContext = {
  SearchIcon,
  TimesIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextInputGroup, TextInputGroupMain } from '@patternfly/react-core';\n\nexport const TextInputGroupBasic: React.FunctionComponent = () => (\n  <TextInputGroup>\n    <TextInputGroupMain />\n  </TextInputGroup>\n);\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextInputGroup, TextInputGroupMain } from '@patternfly/react-core';\n\nexport const TextInputGroupDisabled: React.FunctionComponent = () => (\n  <TextInputGroup isDisabled>\n    <TextInputGroupMain value=\"Disabled\" type=\"text\" aria-label=\"Disabled text input group example input\" />\n  </TextInputGroup>\n);\n","title":"Disabled","lang":"ts"}}>
      
    </Example>,
  'Utilities and icon': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextInputGroup, TextInputGroupMain, TextInputGroupUtilities, Button } from '@patternfly/react-core';\nimport SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';\nimport TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';\n\nexport const TextInputGroupUtilitiesAndIcon: React.FunctionComponent = () => {\n  const [inputValue, setInputValue] = React.useState('');\n\n  /** callback for updating the inputValue state in this component so that the input can be controlled */\n  const handleInputChange = (value: string, _event: React.FormEvent<HTMLInputElement>) => {\n    setInputValue(value);\n  };\n\n  /** show the input clearing button only when the input is not empty */\n  const showClearButton = !!inputValue;\n\n  /** render the utilities component only when a component it contains is being rendered */\n  const showUtilities = showClearButton;\n\n  /** callback for clearing the text input */\n  const clearInput = () => {\n    setInputValue('');\n  };\n\n  return (\n    <TextInputGroup>\n      <TextInputGroupMain icon={<SearchIcon />} value={inputValue} onChange={handleInputChange} />\n      {showUtilities && (\n        <TextInputGroupUtilities>\n          {showClearButton && (\n            <Button variant=\"plain\" onClick={clearInput} aria-label=\"Clear button and input\">\n              <TimesIcon />\n            </Button>\n          )}\n        </TextInputGroupUtilities>\n      )}\n    </TextInputGroup>\n  );\n};\n","title":"Utilities and icon","lang":"ts"}}>
      
    </Example>,
  'Filters': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextInputGroup, TextInputGroupMain, TextInputGroupUtilities, Button } from '@patternfly/react-core';\nimport { Chip, ChipGroup } from '@patternfly/react-core';\nimport SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';\nimport TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';\n\nexport const TextInputGroupFilters: React.FunctionComponent = () => {\n  const [inputValue, setInputValue] = React.useState('');\n  const [currentChips, setCurrentChips] = React.useState([\n    'chip one',\n    'chip two',\n    'chip three',\n    'chip four',\n    'chip five',\n    'chip six',\n    'chip seven',\n    'chip eight',\n    'chip nine',\n    'chip ten',\n    'chip eleven',\n    'chip twelve',\n    'chip thirteen',\n    'chip fourteen'\n  ]);\n\n  /** show the search icon only when there are no chips to prevent the chips from being displayed behind the icon */\n  const showSearchIcon = !currentChips.length;\n\n  /** callback for updating the inputValue state in this component so that the input can be controlled */\n  const handleInputChange = (value: string, _event: React.FormEvent<HTMLInputElement>) => {\n    setInputValue(value);\n  };\n\n  /** callback for removing a chip from the chip selections */\n  const deleteChip = (chipToDelete: string) => {\n    const newChips = currentChips.filter(chip => !Object.is(chip, chipToDelete));\n    setCurrentChips(newChips);\n  };\n\n  /** show the input/chip clearing button only when either the text input or chip group are not empty */\n  const showClearButton = !!inputValue || !!currentChips.length;\n\n  /** render the utilities component only when a component it contains is being rendered */\n  const showUtilities = showClearButton;\n\n  /** callback for clearing all selected chips and the text input */\n  const clearChipsAndInput = () => {\n    setCurrentChips([]);\n    setInputValue('');\n  };\n\n  return (\n    <TextInputGroup>\n      <TextInputGroupMain icon={showSearchIcon && <SearchIcon />} value={inputValue} onChange={handleInputChange}>\n        <ChipGroup>\n          {currentChips.map(currentChip => (\n            <Chip key={currentChip} onClick={() => deleteChip(currentChip)}>\n              {currentChip}\n            </Chip>\n          ))}\n        </ChipGroup>\n      </TextInputGroupMain>\n      {showUtilities && (\n        <TextInputGroupUtilities>\n          {showClearButton && (\n            <Button variant=\"plain\" onClick={clearChipsAndInput} aria-label=\"Clear button and input\">\n              <TimesIcon />\n            </Button>\n          )}\n        </TextInputGroupUtilities>\n      )}\n    </TextInputGroup>\n  );\n};\n","title":"Filters","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Utilities and icon"])}
    {React.createElement(pageData.examples["Filters"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsTextInputGroupReactDocs';
Component.pageData = pageData;

export default Component;
