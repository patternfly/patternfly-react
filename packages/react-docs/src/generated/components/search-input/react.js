import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { SearchInput } from '@patternfly/react-core';
import { ExternalLinkSquareAltIcon } from '@patternfly/react-icons';
const pageData = {
  "id": "Search input",
  "section": "components",
  "source": "react",
  "slug": "/components/search-input/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/SearchInput/examples/SearchInput.md",
  "propComponents": [
    {
      "name": "SearchInput",
      "description": "",
      "props": [
        {
          "name": "advancedSearchDelimiter",
          "type": "string",
          "description": "Delimiter in the query string for pairing attributes with search values.\nRequired whenever attributes are passed as props"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "An accessible label for the search input"
        },
        {
          "name": "attributes",
          "type": "string[] | SearchAttribute[]",
          "description": "Array of attribute values used for dynamically generated advanced search"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the banner"
        },
        {
          "name": "formAdditionalItems",
          "type": "React.ReactNode",
          "description": ""
        },
        {
          "name": "hasWordsAttrLabel",
          "type": "React.ReactNode",
          "description": "Attribute label for strings unassociated with one of the provided listed attributes"
        },
        {
          "name": "hint",
          "type": "string",
          "description": "A suggestion for autocompleting"
        },
        {
          "name": "isAdvancedSearchOpen",
          "type": "boolean",
          "description": "A flag for controlling the open state of a custom advanced search implementation"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag indicating if search input is disabled"
        },
        {
          "name": "isNextNavigationButtonDisabled",
          "type": "boolean",
          "description": "Flag indicating if the next navigation button is disabled"
        },
        {
          "name": "isPreviousNavigationButtonDisabled",
          "type": "boolean",
          "description": "Flag indicating if the previous navigation button is disabled"
        },
        {
          "name": "nextNavigationButtonAriaLabel",
          "type": "string",
          "description": "Label for the button to navigate to next result"
        },
        {
          "name": "onChange",
          "type": "(value: string, event: React.FormEvent<HTMLInputElement>) => void",
          "description": "A callback for when the input value changes"
        },
        {
          "name": "onClear",
          "type": "(event: React.SyntheticEvent<HTMLButtonElement>) => void",
          "description": "A callback for when the user clicks the clear button"
        },
        {
          "name": "onNextClick",
          "type": "(event: React.SyntheticEvent<HTMLButtonElement>) => void",
          "description": "Function called when user clicks to navigate to next result"
        },
        {
          "name": "onPreviousClick",
          "type": "(event: React.SyntheticEvent<HTMLButtonElement>) => void",
          "description": "Function called when user clicks to navigate to previous result"
        },
        {
          "name": "onSearch",
          "type": "(\n  value: string,\n  event: React.SyntheticEvent<HTMLButtonElement>,\n  attrValueMap: { [key: string]: string }\n) => void",
          "description": "A callback for when the search button clicked changes"
        },
        {
          "name": "onToggleAdvancedSearch",
          "type": "(event: React.SyntheticEvent<HTMLButtonElement>, isOpen?: boolean) => void",
          "description": "A callback for when the open advanced search button is clicked"
        },
        {
          "name": "openMenuButtonAriaLabel",
          "type": "string",
          "description": "Label for the button which opens the advanced search form menu"
        },
        {
          "name": "placeholder",
          "type": "string",
          "description": "placeholder text of the search input"
        },
        {
          "name": "previousNavigationButtonAriaLabel",
          "type": "string",
          "description": "Label for the button to navigate to previous result"
        },
        {
          "name": "resetButtonLabel",
          "type": "string",
          "description": "Label for the buttons which reset the advanced search form and clear the search input"
        },
        {
          "name": "resultsCount",
          "type": "number | string",
          "description": "The number of search results returned. Either a total number of results,\nor a string representing the current result over the total number of results. i.e. \"1 / 5\""
        },
        {
          "name": "submitSearchButtonLabel",
          "type": "string",
          "description": "Label for the buttons which called the onSearch event handler"
        },
        {
          "name": "value",
          "type": "string",
          "description": "Value of the search input"
        }
      ]
    },
    {
      "name": "SearchAttribute",
      "description": "",
      "props": [
        {
          "name": "attr",
          "type": "string",
          "description": "The search attribute's value to be provided in the search input's query string.\nIt should have no spaces and be unique for every attribute",
          "required": true
        },
        {
          "name": "display",
          "type": "React.ReactNode",
          "description": "The search attribute's display name. It is used to label the field in the advanced search menu",
          "required": true
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-search-input"
  ],
  "examples": [
    "Basic",
    "Match with result count",
    "Match with navigable options",
    "With submit button",
    "Focus search input using ref",
    "Advanced"
  ]
};
pageData.liveContext = {
  SearchInput,
  ExternalLinkSquareAltIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { SearchInput } from '@patternfly/react-core';\n\nclass BasicSearchInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ''\n    };\n\n    this.onChange = (value, event) => {\n      this.setState({\n        value: value\n      });\n    };\n  }\n\n  render() {\n    return (\n      <SearchInput\n        placeholder=\"Find by name\"\n        value={this.state.value}\n        onChange={this.onChange}\n        onClear={evt => this.onChange('', evt)}\n      />\n    );\n  }\n}","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Match with result count': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { SearchInput } from '@patternfly/react-core';\n\nclass SearchInputWithResultCount extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: '',\n      resultsCount: 0\n    };\n\n    this.onChange = (value, event) => {\n      this.setState({\n        value: value,\n        resultsCount: 3\n      });\n    };\n\n    this.onClear = event => {\n      this.setState({\n        value: '',\n        resultsCount: 0\n      });\n    };\n  }\n\n  render() {\n    return (\n      <SearchInput\n        placeholder=\"Find by name\"\n        value={this.state.value}\n        onChange={this.onChange}\n        onClear={this.onClear}\n        resultsCount={this.state.resultsCount}\n      />\n    );\n  }\n}","title":"Match with result count","lang":"js"}}>
      
    </Example>,
  'Match with navigable options': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { SearchInput } from '@patternfly/react-core';\n\nclass SearchInputWithNavigableOptions extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: '',\n      resultsCount: 0,\n      currentResult: 1,\n      isPreviousNavigationButtonDisabled: false,\n      isNextNavigationButtonDisabled: false\n    };\n\n    this.onChange = (value, event) => {\n      this.setState({\n        value: value,\n        resultsCount: 3\n      });\n    };\n\n    this.onClear = event => {\n      this.setState({\n        value: '',\n        resultsCount: 0,\n        currentResult: 1\n      });\n    };\n\n    this.onNext = event => {\n      this.setState(prevState => {\n        const newCurrentResult = prevState.currentResult + 1;\n        return {\n          currentResult: newCurrentResult <= prevState.resultsCount ? newCurrentResult : prevState.resultsCount\n        };\n      });\n    };\n\n    this.onPrevious = event => {\n      this.setState(prevState => {\n        const newCurrentResult = prevState.currentResult - 1;\n        return {\n          currentResult: newCurrentResult > 0 ? newCurrentResult : 1\n        };\n      });\n    };\n  }\n  render() {\n    return (\n      <SearchInput\n        placeholder=\"Find by name\"\n        value={this.state.value}\n        onChange={this.onChange}\n        onClear={this.onClear}\n        isNextNavigationButtonDisabled={this.state.currentResult === 3}\n        isPreviousNavigationButtonDisabled={this.state.currentResult === 1}\n        resultsCount={`${this.state.currentResult} / ${this.state.resultsCount}`}\n        onNextClick={this.onNext}\n        onPreviousClick={this.onPrevious}\n      />\n    );\n  }\n}","title":"Match with navigable options","lang":"js"}}>
      
    </Example>,
  'With submit button': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { SearchInput } from '@patternfly/react-core';\n\nSubmitButtonSearchInput = () => {\n  const [value, setValue] = React.useState('');\n\n  return (\n    <SearchInput\n      placeholder='Find by name'\n      value={value}\n      onChange={setValue}\n      onSearch={setValue}\n      onClear={() => setValue('')}\n    />\n  );\n}","title":"With submit button","lang":"js"}}>
      
    </Example>,
  'Focus search input using ref': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { SearchInput, Button } from '@patternfly/react-core';\n\nTextInputSelectAll = () => {\n  const [value, setValue] = React.useState('');\n  const ref = React.useRef(null);\n  return (\n    <React.Fragment>\n      <SearchInput ref={ref} value={value} onChange={setValue} onClear={() => setValue('')} />\n      <Button onClick={() => ref.current && ref.current.focus()}>Focus on the search input</Button>\n    </React.Fragment>\n  );\n};","title":"Focus search input using ref","lang":"js"}}>
      
    </Example>,
  'Advanced': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Checkbox, FormGroup, SearchInput } from '@patternfly/react-core';\nimport ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-square-alt-icon';\n\nAdvancedSearchInput = () => {\n  const [value, setValue] = React.useState('username:player firstname:john');\n  const [useEqualsAsDelimiter, setUseEqualsAsDelimiter] = React.useState(false);\n  const [useCustomFooter, setUseCustomFooter] = React.useState(false);\n\n  const toggleDelimiter = checked => {\n    const newValue = value.replace(/:|=/g, checked ? '=' : ':');\n    setUseEqualsAsDelimiter(checked);\n    setValue(newValue);\n  };\n\n  return (\n    <>\n      <Checkbox\n        label=\"Use equal sign as search attribute delimiter\"\n        isChecked={useEqualsAsDelimiter}\n        onChange={toggleDelimiter}\n        aria-label=\"change delimiter checkbox\"\n        id=\"toggle-delimiter\"\n        name=\"toggle-delimiter\"\n      />\n      <Checkbox\n        label=\"Add custom footer element after the attributes in the menu\"\n        isChecked={useCustomFooter}\n        onChange={value => setUseCustomFooter(value)}\n        aria-label=\"change use custom footer checkbox\"\n        id=\"toggle-custom-footer\"\n        name=\"toggle-custom-footer\"\n      />\n      <br />\n      <SearchInput\n        attributes={[\n          { attr: 'username', display: 'Username' },\n          { attr: 'firstname', display: 'First name' }\n        ]}\n        advancedSearchDelimiter={useEqualsAsDelimiter ? '=' : ':'}\n        value={value}\n        onChange={setValue}\n        onSearch={setValue}\n        onClear={() => setValue('')}\n        formAdditionalItems={\n          useCustomFooter ? (\n            <FormGroup>\n              <Button variant=\"link\" isInline icon={<ExternalLinkSquareAltIcon />} iconPosition=\"right\">\n                Link\n              </Button>\n            </FormGroup>\n          ) : null\n        }\n      />\n    </>\n  );\n};","title":"Advanced","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`The search input component can be used to dynamically build a one to one attribute-value advanced search.
Using the `}
        
        <code {...{"className":"ws-code"}}>
          {`attributes`}
        </code>
        {` prop alongside the `}
        
        <code {...{"className":"ws-code"}}>
          {`advancedSearchDelimiter`}
        </code>
        {` will expose this functionality, as demonstrated in
the following example. The search input component can also be used as a composable component and paired with a Popper
or other elements to build a completely custom advanced search form. This feature is demonstrated
in the search input's `}
                <a href="/components/search-input/react-demos">{`react demos`}</a>
        {`.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Match with result count"])}
    {React.createElement(pageData.examples["Match with navigable options"])}
    {React.createElement(pageData.examples["With submit button"])}
    {React.createElement(pageData.examples["Focus search input using ref"])}
    {React.createElement(pageData.examples["Advanced"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsSearchInputReactDocs';
Component.pageData = pageData;

export default Component;
