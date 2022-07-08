import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { 
  Button, 
  Card, 
  CardBody, 
  CardFooter, 
  DatePicker,
  Form, 
  FormGroup,
  Grid,
  GridItem, 
  Menu,
  MenuContent,
  MenuItem,
  MenuList,
  MenuToggle,
  Popper, 
  SearchInput, 
  TextInput 
} from '@patternfly/react-core';
import { words } from '../../../../../react-core/src/demos/SearchInput/./words.js';
const pageData = {
  "id": "Search input",
  "section": "components",
  "source": "react-demos",
  "slug": "/components/search-input/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/SearchInput/SearchInput.md",
  "beta": true,
  "examples": [
    "Search with autocomplete",
    "Composable advanced search"
  ]
};
pageData.liveContext = {
  Button,
  Card,
  CardBody,
  CardFooter,
  DatePicker,
  Form,
  FormGroup,
  Grid,
  GridItem,
  Menu,
  MenuContent,
  MenuItem,
  MenuList,
  MenuToggle,
  Popper,
  SearchInput,
  TextInput,
  words
};
pageData.examples = {
  'Search with autocomplete': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { \n  Menu,\n  MenuContent,\n  MenuItem,\n  MenuList,\n  Popper, \n  SearchInput\n} from '@patternfly/react-core';\n\nimport { words } from './words.js';\n\nSearchAutocomplete = () => {\n  const [value, setValue] = React.useState('');\n  const [hint, setHint] = React.useState('');\n  const [autocompleteOptions, setAutocompleteOptions] = React.useState([]);\n  \n  const [isAutocompleteOpen, setIsAutocompleteOpen] = React.useState(false);\n  \n  const searchInputRef = React.useRef(null);\n  const autocompleteRef = React.useRef(null);\n  \n  const onClear = () => {\n    setValue('');\n  };\n  \n  const onChange = (newValue) => {\n    if (newValue !== '' && searchInputRef && searchInputRef.current && searchInputRef.current.contains(document.activeElement)) {\n      setIsAutocompleteOpen(true);\n      \n      // When the value of the search input changes, build a list of no more than 10 autocomplete options.\n      // Options which start with the search input value are listed first, followed by options which contain\n      // the search input value.\n      let options = words.filter((option) => option.startsWith(newValue.toLowerCase())).map((option) => <MenuItem itemId={option} key={option}>{option}</MenuItem>);\n      if (options.length > 10) {\n        options = options.slice(0,10);\n      } else {\n        options = [...options, ...words.filter((option) => !option.startsWith(newValue.toLowerCase()) && option.includes(newValue.toLowerCase())).map((option) => <MenuItem itemId={option} key={option}>{option}</MenuItem>)].slice(0, 10)\n      }\n      \n      // The hint is set whenever there is only one autocomplete option left.\n      setHint(options.length === 1? options[0].props.itemId : '');\n      // The menu is hidden if there are no options\n      setIsAutocompleteOpen(options.length > 0);\n      setAutocompleteOptions(options);\n    } else {\n      setIsAutocompleteOpen(false);\n    }\n    setValue(newValue);\n  };\n  \n  // Whenever an autocomplete option is selected, set the search input value, close the menu, and put the browser\n  // focus back on the search input\n  const onSelect = (e, itemId) => {\n    e.stopPropagation();\n    setValue(itemId);\n    setIsAutocompleteOpen(false);\n    searchInputRef.current.focus();\n  };\n  \n  const handleMenuKeys = event => {\n    // If there is a hint while the browser focus is on the search input, tab or right arrow will 'accept' the hint value \n    // and set it as the search input value\n    if (hint && (event.key === 'Tab' || event.key === 'ArrowRight') && searchInputRef.current === event.target) {\n      setValue(hint);\n      setHint('');\n      setIsAutocompleteOpen(false);\n      if (event.key === 'ArrowRight') {\n        event.preventDefault();   \n      }\n    // if the autocomplete is open and the browser focus is on the search input,\n    } else if (isAutocompleteOpen && searchInputRef.current && searchInputRef.current === event.target) {\n      // the escape key closes the autocomplete menu and keeps the focus on the search input.\n      if (event.key === 'Escape') {\n        setIsAutocompleteOpen(false);\n        searchInputRef.current.focus();\n      // the up and down arrow keys move browser focus into the autocomplete menu\n      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {\n        const firstElement = autocompleteRef.current.querySelector('li > button:not(:disabled)');\n        firstElement && firstElement.focus();\n        event.preventDefault(); // by default, the up and down arrow keys scroll the window\n      // the tab, enter, and space keys will close the menu, and the tab key will move browser\n      // focus forward one element (by default)\n      }  else if (event.key === 'Tab'|| event.key === \"Enter\" || event.key === 'Space'){\n        setIsAutocompleteOpen(false);\n        if (event.key === \"Enter\" || event.key === 'Space') {\n          event.preventDefault();\n        }\n      }\n    // If the autocomplete is open and the browser focus is in the autocomplete menu\n    // hitting tab will close the autocomplete and but browser focus back on the search input.  \n    } else if (isAutocompleteOpen && autocompleteRef.current.contains(event.target) && (event.key === 'Tab')) {\n      event.preventDefault();\n      setIsAutocompleteOpen(false);\n      searchInputRef.current.focus();\n    }\n    \n  };\n  \n  // The autocomplete menu should close if the user clicks outside the menu.\n  const handleClickOutside = event => {\n    if (isAutocompleteOpen && autocompleteRef && autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {\n      setIsAutocompleteOpen(false);\n    }\n  };\n  \n  React.useEffect(() => {\n    window.addEventListener('keydown', handleMenuKeys);\n    window.addEventListener('click', handleClickOutside);\n    return () => {\n      window.removeEventListener('keydown', handleMenuKeys);\n      window.removeEventListener('click', handleClickOutside);\n    };\n  }, [isAutocompleteOpen, hint, searchInputRef.current]);\n  \n  const searchInput = (\n    <SearchInput\n      value={value}\n      onChange={onChange}\n      onClear={onClear}\n      ref={searchInputRef}\n      hint={hint}\n      id=\"autocomplete-search\"\n    />\n  );\n  \n  const autocomplete = (\n    <Menu ref={autocompleteRef} onSelect={onSelect}>\n      <MenuContent>\n        <MenuList>\n          {autocompleteOptions}\n        </MenuList>\n      </MenuContent>\n    </Menu>\n  );\n  \n\n  return (\n    <Popper\n      trigger={searchInput}\n      popper={autocomplete}\n      isVisible={isAutocompleteOpen}\n      enableFlip={false}\n      // append the autocomplete menu to the search input in the DOM for the sake of the keyboard navigation experience\n      appendTo={() => document.querySelector('#autocomplete-search')}\n    />\n  );\n};","title":"Search with autocomplete","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demo handles building the advanced search form using the composable Menu, and the `}
        
        <code {...{"className":"ws-code"}}>
          {`SearchInput`}
        </code>
        {`'s `}
        
        <code {...{"className":"ws-code"}}>
          {`hint`}
        </code>
        {` prop.
It also demonstrates wiring up the appropriate keyboard interactions, focus management, and general event handling.`}
      </p>
    </Example>,
  'Composable advanced search': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { \n  ActionGroup,\n  Button, \n  DatePicker,\n  Form, \n  FormGroup,\n  Grid,\n  GridItem, \n  isValidDate,\n  Menu,\n  MenuContent,\n  MenuItem,\n  MenuList,\n  MenuToggle,\n  Panel,\n  PanelMain,\n  PanelMainBody,\n  Popper, \n  SearchInput, \n  TextInput,\n  yyyyMMddFormat\n} from '@patternfly/react-core';\n\nAdvancedComposableSearchInput = () => {\n  const [value, setValue] = React.useState('');\n  const [hasWords, setHasWords] = React.useState('');\n  const [dateWithin, setDateWithin] = React.useState('1 day');\n  const [date, setDate] = React.useState();\n  \n  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = React.useState(false);\n  const [isDateWithinOpen, setIsDateWithinOpen] = React.useState(false);\n    \n  const isInitialMount = React.useRef(true);\n  const firstAttrRef = React.useRef(null);\n  const searchInputRef = React.useRef(null);\n  const advancedSearchPaneRef = React.useRef(null);\n  const dateWithinToggleRef = React.useRef();\n  const dateWithinMenuRef = React.useRef();\n  \n  const onClear = () => {\n    setValue('');\n    setHasWords('');\n    setDateWithin('');\n    setDate('');\n  };\n  \n  const onChange = (value) => {\n    if (value.length <= hasWords.length + 1) {\n      setValue(value);\n      setHasWords(value);\n    } else {\n      setValue(hasWords);\n    }\n  };\n  \n  // After initial page load, whenever the advanced search menu is opened, the browser focus should be placed on the\n  // first advanced search form input. Whenever the advanced search menu is closed, the browser focus should\n  // be returned to the search input.\n  React.useEffect(() => {\n    if (isInitialMount.current) {\n      isInitialMount.current = false;\n    } else {\n      if (isAdvancedSearchOpen && firstAttrRef && firstAttrRef.current) {\n        firstAttrRef.current.focus();\n      } else if (!isAdvancedSearchOpen && searchInputRef) {\n        searchInputRef.current.focus();\n      }\n    }\n  }, [isAdvancedSearchOpen]);\n  \n  // If a menu is open and has browser focus, then the escape key closes them and puts the browser focus onto their \n  // respective toggle. The 'date within' menu also needs to close when the 'tab' key is hit. However, hitting tab while\n  // focus is in the advanced search form should move the focus to the next form input, not close the advanced search\n  // menu.\n  const handleMenuKeys = event => {\n    if (isDateWithinOpen && dateWithinMenuRef.current && dateWithinMenuRef.current.contains(event.target)) {\n      if (event.key === 'Escape' || event.key === 'Tab') {\n        setIsDateWithinOpen(!isDateWithinOpen);\n        dateWithinToggleRef.current.focus();\n      }\n    } \n    if (isAdvancedSearchOpen && advancedSearchPaneRef.current && advancedSearchPaneRef.current.contains(event.target)) {\n      if (event.key === 'Escape' || \n      (event.key === 'Tab' && !event.shiftKey && advancedSearchPaneRef.current.querySelector('button[type=reset]') === event.target)\n      ) {\n        setIsAdvancedSearchOpen(!isAdvancedSearchOpen);\n        searchInputRef.current.focus();\n      }\n    }  \n  };\n  \n  // If a menu is open and has browser focus, then clicking outside the menu should close it.\n  const handleClickOutside = event => {\n    if (isDateWithinOpen && dateWithinMenuRef && dateWithinMenuRef.current && !dateWithinMenuRef.current.contains(event.target)) {\n      setIsDateWithinOpen(false);\n    } \n    if (isAdvancedSearchOpen && advancedSearchPaneRef && advancedSearchPaneRef.current && !advancedSearchPaneRef.current.contains(event.target)) {\n      setIsAdvancedSearchOpen(false);\n    }\n  };\n  \n  React.useEffect(() => {\n    window.addEventListener('keydown', handleMenuKeys);\n    window.addEventListener('click', handleClickOutside);\n    return () => {\n      window.removeEventListener('keydown', handleMenuKeys);\n      window.removeEventListener('click', handleClickOutside);\n    };\n  }, [dateWithinMenuRef.current, advancedSearchPaneRef.current, isAdvancedSearchOpen, isDateWithinOpen]);\n  \n  \n  // This demo and its handling of 'date within' and a date picker is modeled after the gmail advanced search form.\n  const onSubmit = (value, event) => {\n    event.preventDefault();\n    \n    if (isValidDate(new Date(date)) && dateWithin) {\n      let afterDate = new Date(date);\n      let toDate = new Date(date);\n      switch (dateWithin) {\n        case '1 day':\n          afterDate.setDate(afterDate.getDate());\n          toDate.setDate(toDate.getDate() + 2);\n          break;\n        case '3 days':\n          afterDate.setDate(afterDate.getDate() - 2);\n          toDate.setDate(toDate.getDate() + 4);\n          break;\n        case '1 week':\n          afterDate.setDate(afterDate.getDate() - 6);\n          toDate.setDate(toDate.getDate() + 8);\n          break;\n        case '2 weeks':\n          afterDate.setDate(afterDate.getDate() - 13);\n          toDate.setDate(toDate.getDate() + 15);\n          break;\n        case '1 month':\n          afterDate.setMonth(afterDate.getMonth() - 1);\n          afterDate.setDate(afterDate.getDate() + 1);\n          toDate.setMonth(toDate.getMonth() + 1);\n          toDate.setDate(toDate.getDate() + 1);\n          break;\n        case '2 months':\n          afterDate.setMonth(afterDate.getMonth() - 2);\n          afterDate.setDate(afterDate.getDate() + 1);\n          toDate.setMonth(toDate.getMonth() + 2);\n          toDate.setDate(toDate.getDate() + 1);\n          break;\n        case '6 months':\n          afterDate.setMonth(afterDate.getMonth() - 6);\n          afterDate.setDate(afterDate.getDate() + 1);\n          toDate.setMonth(toDate.getMonth() + 6);\n          toDate.setDate(toDate.getDate() + 1);\n          break;\n        case '1 year':\n          afterDate.setFullYear(afterDate.getFullYear() - 1);\n          afterDate.setDate(afterDate.getDate() + 1);\n          toDate.setFullYear(toDate.getFullYear() + 1);\n          toDate.setDate(toDate.getDate() + 1);\n          break;\n      }\n      setValue(`${hasWords && (hasWords + \" \")}after:${yyyyMMddFormat(afterDate)} to:${yyyyMMddFormat(toDate)}`)\n    } else {\n      setValue(hasWords);\n    }\n    \n    setIsAdvancedSearchOpen(false);\n  };\n  \n  const searchInput = (\n    <SearchInput\n      value={value}\n      onChange={onChange}\n      onToggleAdvancedSearch={(e, isOpen) => {\n        e.stopPropagation();\n        setIsAdvancedSearchOpen(isOpen)\n      }}\n      isAdvancedSearchOpen={isAdvancedSearchOpen}\n      onClear={onClear}\n      onSearch={onSubmit}\n      ref={searchInputRef}\n      id=\"custom-advanced-search\"\n    />\n  );\n  \n  // Clicking the 'date within' toggle should open its associated menu and then place the browser \n  // focus on the first menu item. \n  const toggleDateWithinMenu = ev => {\n    ev.stopPropagation(); // Stop handleClickOutside from handling\n    setTimeout(() => {\n      if (dateWithinMenuRef.current) {\n        const firstElement = dateWithinMenuRef.current.querySelector('li > button:not(:disabled)');\n        firstElement && firstElement.focus();\n      }\n    }, 0);\n    setIsDateWithinOpen(!isDateWithinOpen);\n  };\n  \n  // Selecting a date within option closes the menu, sets the value of date within, and puts browser focus back\n  // on the date within toggle.\n  const onDateWithinSelect = (e, itemId) => {\n    e.stopPropagation();\n    setIsDateWithinOpen(false);\n    setDateWithin(itemId);\n    if (dateWithinToggleRef && dateWithinToggleRef.current) {\n      dateWithinToggleRef.current.focus();\n    }\n  };\n  \n  const dateWithinOptions = (\n    <Menu ref={dateWithinMenuRef} selected={dateWithin} onSelect={onDateWithinSelect}>\n      <MenuContent>\n        <MenuList>\n          <MenuItem itemId=\"1 day\">1 day</MenuItem>\n          <MenuItem itemId=\"3 days\">3 days</MenuItem>\n          <MenuItem itemId=\"1 week\">1 week</MenuItem>\n          <MenuItem itemId=\"2 weeks\">2 weeks</MenuItem>\n          <MenuItem itemId=\"1 month\">1 month</MenuItem>\n          <MenuItem itemId=\"2 months\">2 months</MenuItem>\n          <MenuItem itemId=\"6 months\">6 months</MenuItem>\n          <MenuItem itemId=\"1 year\">1 year</MenuItem>\n        </MenuList>\n      </MenuContent>\n    </Menu>\n  );\n  \n  const dateWithinToggle = (\n    <MenuToggle ref={dateWithinToggleRef} onClick={toggleDateWithinMenu} isExpanded={isDateWithinOpen} style={{width: \"100%\"}}>\n      {dateWithin}\n    </MenuToggle>\n  );\n  \n  const advancedForm = (\n    <div ref={advancedSearchPaneRef} role=\"dialog\" aria-label=\"Advanced search form\">\n      <Panel variant='raised'>\n        <PanelMain>\n          <PanelMainBody>\n            <Form>\n              <FormGroup label='Has the words' fieldId='has-words' key='has-words'>\n                <TextInput\n                  type='text'\n                  id='has-words'\n                  value={hasWords}\n                  onChange={value => {\n                    setHasWords(value);\n                    setValue(value);\n                  }}\n                  ref={firstAttrRef}\n                />\n              </FormGroup>\n              <Grid hasGutter md={6}>\n                <GridItem>\n                  <FormGroup label='Date within' fieldId='date-within' key='date-within'>\n                    <Popper trigger={dateWithinToggle} popper={dateWithinOptions} isVisible={isDateWithinOpen} />\n                  </FormGroup>\n                </GridItem>\n                <GridItem>\n                  <FormGroup label='Of date' fieldId='date' key='date'>\n                    <DatePicker \n                      id=\"datePicker\" \n                      style={{width: \"100%\"}} \n                      value={date} \n                      onChange={setDate} \n                      appendTo={() => document.querySelector(\"#datePicker\")}\n                    />\n                  </FormGroup>\n                </GridItem>\n              </Grid>\n              <ActionGroup>\n                <Button variant=\"primary\" type=\"submit\" onClick={(e) => onSubmit(null, e)}>Submit</Button>\n                {!!onClear && (\n                  <Button variant=\"link\" type=\"reset\" onClick={onClear}>Reset</Button>\n                )}\n              </ActionGroup>\n            </Form>\n          </PanelMainBody>\n        </PanelMain>\n      </Panel>\n    </div>\n  );\n\n  // Popper is just one way to build a relationship between a toggle and a menu.\n  return (\n    <Popper\n      trigger={searchInput}\n      popper={advancedForm}\n      isVisible={isAdvancedSearchOpen}\n      enableFlip={false}\n      appendTo={() => document.querySelector(\"#custom-advanced-search\")}\n    />\n  );\n};","title":"Composable advanced search","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demo handles building the advanced search form using the composable Menu, as well as wiring up a
select using the composable Menu and MenuToggle components. This demo also demonstrates wiring up the appropriate
keyboard interactions, focus management, and general event handling.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`Note: This demo and its handling of 'date within' and a date picker is modeled after the gmail advanced search form.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Search with autocomplete"])}
    {React.createElement(pageData.examples["Composable advanced search"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsSearchInputReactDemosDocs';
Component.pageData = pageData;

export default Component;
