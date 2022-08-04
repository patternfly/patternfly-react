import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
const pageData = {
  "id": "Text input group",
  "section": "components",
  "source": "react-demos",
  "slug": "/components/text-input-group/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/TextInputGroupDemo.md",
  "beta": true,
  "examples": [
    "Attribute-value filtering",
    "Auto-complete search with typeahead"
  ]
};
pageData.liveContext = {
  SearchIcon,
  TimesIcon
};
pageData.examples = {
  'Attribute-value filtering': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  TextInputGroup,\n  TextInputGroupMain,\n  TextInputGroupUtilities,\n  Button,\n  Menu,\n  MenuContent,\n  MenuList,\n  MenuItem,\n  Popper,\n  Chip,\n  ChipGroup,\n  Divider\n} from '@patternfly/react-core';\nimport SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';\nimport TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';\n\nexport const AttributeValueFiltering: React.FunctionComponent = () => {\n  const [inputValue, setInputValue] = React.useState('');\n  const [selectedKey, setSelectedKey] = React.useState('');\n  const [menuIsOpen, setMenuIsOpen] = React.useState(false);\n  const [currentChips, setCurrentChips] = React.useState<string[]>([]);\n\n  interface attributeValueData {\n    [attribute: string]: string[];\n  }\n\n  /** key and value data to be shown in the menu */\n  const data: attributeValueData = {\n    Cluster: ['acmeqe-managed-1', 'local-cluster'],\n    Kind: ['Template', 'ReplicationController', 'ReplicaSet', 'Deployment'],\n    Label: ['release', 'environment', 'partition'],\n    Name: ['backup-1', 'backup-2', 'production-1', 'production-2', 'testing'],\n    Namespace: ['default', 'public'],\n    Status: ['running', 'idle', 'stopped']\n  };\n  const keyNames = ['Cluster', 'Kind', 'Label', 'Name', 'Namespace', 'Status'];\n  const [menuItemsText, setMenuItemsText] = React.useState(keyNames);\n  const [menuItems, setMenuItems] = React.useState<React.ReactElement[]>([]);\n\n  /** refs used to detect when clicks occur inside vs outside of the textInputGroup and menu popper */\n  const menuRef = React.useRef<HTMLDivElement>();\n  const textInputGroupRef = React.useRef<HTMLDivElement>();\n\n  /** callback for updating the inputValue state in this component so that the input can be controlled */\n  const handleInputChange = (value: string, _event: React.FormEvent<HTMLInputElement>) => {\n    setInputValue(value);\n  };\n\n  /** callback for removing a chip from the chip selections */\n  const deleteChip = (chipToDelete: string) => {\n    const newChips = currentChips.filter(chip => !Object.is(chip, chipToDelete));\n    setCurrentChips(newChips);\n  };\n\n  /** reset state hooks associated with key selection */\n  const clearSelectedKey = () => {\n    setInputValue('');\n    setSelectedKey('');\n    setMenuItemsText(keyNames);\n  };\n\n  /** callback for clearing all selected chips, the text input, and any selected keys */\n  const clearChipsAndInput = () => {\n    setCurrentChips([]);\n    clearSelectedKey();\n  };\n\n  React.useEffect(() => {\n    /** in the menu only show items that include the text in the input */\n    const filteredMenuItems = menuItemsText\n      .filter(\n        item =>\n          !inputValue ||\n          item.toLowerCase().includes(\n            inputValue\n              .toString()\n              .slice(selectedKey.length && selectedKey.length + 2)\n              .toLowerCase()\n          )\n      )\n      .map((currentValue, index) => (\n        <MenuItem key={currentValue} itemId={index}>\n          {currentValue}\n        </MenuItem>\n      ));\n\n    /** in the menu show a disabled \"no result\" when all menu items are filtered out */\n    if (filteredMenuItems.length === 0) {\n      const noResultItem = (\n        <MenuItem isDisabled key=\"no result\">\n          No results found\n        </MenuItem>\n      );\n      setMenuItems([noResultItem]);\n      return;\n    }\n\n    /** determine the menu heading text based on key selection; or lack thereof */\n    const headingItem = (\n      <MenuItem isDisabled key=\"heading\">\n        {selectedKey.length ? `${selectedKey} values` : 'Attributes'}\n      </MenuItem>\n    );\n\n    const divider = <Divider key=\"divider\" />;\n\n    setMenuItems([headingItem, divider, ...filteredMenuItems]);\n  }, [inputValue]);\n\n  /** add selected key/value pair as a chip in the chip group */\n  const selectValue = (selectedValue: string) => {\n    setCurrentChips([...currentChips, `${selectedKey}: ${selectedValue}`]);\n    clearSelectedKey();\n  };\n\n  /** update the input to show the selected key and the menu to show the values associated with that specific key */\n  const selectKey = (selectedText: string) => {\n    setInputValue(`${selectedText}: `);\n    setSelectedKey(selectedText);\n    setMenuItemsText(data[selectedText]);\n  };\n\n  const handleEnter = () => {\n    /** do nothing if the menu contains no real results */\n    if (menuItems.length === 1) {\n      return;\n    }\n\n    /** perform the appropriate action based on key selection state */\n    if (selectedKey.length) {\n      selectValue(menuItems[2].props.children);\n    } else {\n      selectKey(menuItems[2].props.children);\n    }\n  };\n\n  /** allow the user to backspace at the selected key name to drop the currently selected key */\n  const handleBackspace = () => {\n    if (selectedKey.length && inputValue === `${selectedKey}: `) {\n      clearSelectedKey();\n    }\n  };\n\n  /** allow the user to select a key by simply typing it and entering a colon, exact (case sensitive) matches only */\n  const handleColon = () => {\n    if (!selectedKey.length && keyNames.includes(inputValue)) {\n      selectKey(inputValue);\n      event.preventDefault();\n    }\n  };\n\n  /** allow the user to focus on the menu and navigate using the arrow keys */\n  const handleArrowKey = () => {\n    if (menuRef.current) {\n      const firstElement = menuRef.current.querySelector<HTMLButtonElement>('li > button:not(:disabled)');\n      firstElement && firstElement.focus();\n    }\n  };\n\n  /** enable keyboard only usage */\n  const handleTextInputKeyDown = (event: React.KeyboardEvent) => {\n    switch (event.key) {\n      case 'Enter':\n        handleEnter();\n        break;\n      case 'Escape':\n        clearSelectedKey();\n        break;\n      case 'Backspace':\n        handleBackspace();\n        break;\n      case ':':\n        handleColon();\n        break;\n      case 'ArrowUp':\n      case 'ArrowDown':\n        handleArrowKey();\n        break;\n    }\n  };\n\n  /** perform the proper key or value selection when a menu item is selected */\n  const onSelect = (event: React.MouseEvent<Element, MouseEvent>, _itemId: string | number) => {\n    const selectedText = (event.target as HTMLElement).innerText;\n\n    if (selectedKey.length) {\n      selectValue(selectedText);\n    } else {\n      selectKey(selectedText);\n    }\n    event.stopPropagation();\n    textInputGroupRef.current.querySelector('input').focus();\n  };\n\n  /** close the menu when a click occurs outside of the menu or text input group */\n  const handleClick = (event: MouseEvent) => {\n    if (\n      menuRef.current &&\n      !menuRef.current.contains(event.target as HTMLElement) &&\n      !textInputGroupRef.current.contains(event.target as HTMLElement)\n    ) {\n      setMenuIsOpen(false);\n    }\n  };\n\n  /** show the search icon only when there are no chips to prevent the chips from being displayed behind the icon */\n  const showSearchIcon = !currentChips.length;\n\n  /** only show the clear button when there is something that can be cleared */\n  const showClearButton = !!inputValue || !!currentChips.length;\n\n  /** render the utilities component only when a component it contains is being rendered */\n  const showUtilities = showClearButton;\n\n  const inputGroup = (\n    <div ref={textInputGroupRef}>\n      <TextInputGroup>\n        <TextInputGroupMain\n          icon={showSearchIcon && <SearchIcon />}\n          value={inputValue}\n          onChange={handleInputChange}\n          onFocus={() => setMenuIsOpen(true)}\n          onKeyDown={handleTextInputKeyDown}\n        >\n          <ChipGroup>\n            {currentChips.map(currentChip => (\n              <Chip key={currentChip} onClick={() => deleteChip(currentChip)}>\n                {currentChip}\n              </Chip>\n            ))}\n          </ChipGroup>\n        </TextInputGroupMain>\n        {showUtilities && (\n          <TextInputGroupUtilities>\n            {showClearButton && (\n              <Button variant=\"plain\" onClick={clearChipsAndInput} aria-label=\"Clear button and input\">\n                <TimesIcon />\n              </Button>\n            )}\n          </TextInputGroupUtilities>\n        )}\n      </TextInputGroup>\n    </div>\n  );\n\n  const menu = (\n    <div ref={menuRef}>\n      <Menu onSelect={onSelect}>\n        <MenuContent>\n          <MenuList>{menuItems}</MenuList>\n        </MenuContent>\n      </Menu>\n    </div>\n  );\n\n  return <Popper trigger={inputGroup} popper={menu} isVisible={menuIsOpen} onDocumentClick={handleClick} />;\n};\n","title":"Attribute-value filtering","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demo showcases the selection of attribute-value pairs based on a predefined set of data.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`Available attributes are shown in a menu when focus is placed on the text input. Once an attribute is selected the values for that attribute will be shown in the menu. When a value is selected for the attribute the pair will be converted into a chip and placed into the chip group. Typing in the text input will filter the entries shown in the menu.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`Attributes and values can both be selected by:`}
      </p>
      
      <ul {...{"className":"ws-ul"}}>
        

        
        <li {...{"className":"ws-li"}}>
          {`clicking the entry shown in the menu`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`hitting the up or down arrows (while focused on the text input) to switch focus to the menu, navigating the menu using the arrow keys, and hitting `}
          
          <code {...{"className":"ws-code"}}>
            {`enter`}
          </code>
          {` on an entry`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`hitting `}
          
          <code {...{"className":"ws-code"}}>
            {`enter`}
          </code>
          {` (while focused on the text input) to select the first entry shown in the menu at the time`}
        </li>
        

      </ul>
      
      <p {...{"className":"ws-p"}}>
        {`Additionally, attributes can be selected by typing the full (case sensitive) name of an attribute, then typing `}
        
        <code {...{"className":"ws-code"}}>
          {`:`}
        </code>
        {`.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`Attributes can be deselected (returning you to attribute selection mode) by hitting `}
        
        <code {...{"className":"ws-code"}}>
          {`escape`}
        </code>
        {`, or by hitting `}
        
        <code {...{"className":"ws-code"}}>
          {`backspace`}
        </code>
        {` when the only text in the text input is the attribute.`}
      </p>
    </Example>,
  'Auto-complete search with typeahead': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  TextInputGroup,\n  TextInputGroupMain,\n  TextInputGroupUtilities,\n  Button,\n  Menu,\n  MenuContent,\n  MenuList,\n  MenuItem,\n  Popper,\n  Chip,\n  ChipGroup,\n  Divider\n} from '@patternfly/react-core';\nimport SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';\nimport TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';\n\nexport const AutoCompleteSearch: React.FunctionComponent = () => {\n  const [inputValue, setInputValue] = React.useState('');\n  const [menuIsOpen, setMenuIsOpen] = React.useState(false);\n  const [currentChips, setCurrentChips] = React.useState<string[]>([]);\n  const [hint, setHint] = React.useState('');\n\n  /** auto-completing suggestion text items to be shown in the menu */\n  const suggestionItems = ['Cluster', 'Kind', 'Label', 'Name', 'Namespace', 'Status'];\n  const [menuItems, setMenuItems] = React.useState<React.ReactElement[]>([]);\n\n  /** refs used to detect when clicks occur inside vs outside of the textInputGroup and menu popper */\n  const menuRef = React.useRef<HTMLDivElement>();\n  const textInputGroupRef = React.useRef<HTMLDivElement>();\n\n  /** callback for updating the inputValue state in this component so that the input can be controlled */\n  const handleInputChange = (value: string, _event: React.FormEvent<HTMLInputElement>) => {\n    setInputValue(value);\n  };\n\n  /** callback for removing a chip from the chip selections */\n  const deleteChip = (chipToDelete: string) => {\n    const newChips = currentChips.filter(chip => !Object.is(chip, chipToDelete));\n    setCurrentChips(newChips);\n  };\n\n  /** callback for clearing all selected chips and the text input */\n  const clearChipsAndInput = () => {\n    setCurrentChips([]);\n    setInputValue('');\n  };\n\n  React.useEffect(() => {\n    /** in the menu only show items that include the text in the input */\n    const filteredMenuItems = suggestionItems\n      .filter(item => !inputValue || item.toLowerCase().includes(inputValue.toString().toLowerCase()))\n      .map((currentValue, index) => (\n        <MenuItem key={currentValue} itemId={index}>\n          {currentValue}\n        </MenuItem>\n      ));\n\n    /** in the menu show a disabled \"no result\" when all menu items are filtered out */\n    if (filteredMenuItems.length === 0) {\n      const noResultItem = (\n        <MenuItem isDisabled key=\"no result\">\n          No results found\n        </MenuItem>\n      );\n      setMenuItems([noResultItem]);\n      setHint('');\n      return;\n    }\n\n    /** The hint is set whenever there is only one autocomplete option left. */\n    if (filteredMenuItems.length === 1) {\n      const hint = filteredMenuItems[0].props.children;\n      if (hint.toLowerCase().indexOf(inputValue.toLowerCase())) {\n        // the match was found in a place other than the start, so typeahead wouldn't work right\n        setHint('');\n      } else {\n        // use the input for the first part, otherwise case difference could make things look wrong\n        setHint(inputValue + hint.substr(inputValue.length));\n      }\n    } else {\n      setHint('');\n    }\n\n    /** add a heading to the menu */\n    const headingItem = (\n      <MenuItem isDisabled key=\"heading\">\n        Suggestions\n      </MenuItem>\n    );\n\n    const divider = <Divider key=\"divider\" />;\n\n    setMenuItems([headingItem, divider, ...filteredMenuItems]);\n  }, [inputValue]);\n\n  /** add the given string as a chip in the chip group and clear the input */\n  const addChip = (newChipText: string) => {\n    setCurrentChips([...currentChips, `${newChipText}`]);\n    setInputValue('');\n  };\n\n  /** add the current input value as a chip */\n  const handleEnter = () => {\n    if (inputValue.length) {\n      addChip(inputValue);\n    }\n  };\n\n  const handleTab = () => {\n    if (menuItems.length === 3) {\n      setInputValue(menuItems[2].props.children);\n    }\n    setMenuIsOpen(false);\n  };\n\n  /** close the menu when escape is hit */\n  const handleEscape = () => {\n    setMenuIsOpen(false);\n  };\n\n  /** allow the user to focus on the menu and navigate using the arrow keys */\n  const handleArrowKey = () => {\n    if (menuRef.current) {\n      const firstElement = menuRef.current.querySelector<HTMLButtonElement>('li > button:not(:disabled)');\n      firstElement && firstElement.focus();\n    }\n  };\n\n  /** reopen the menu if it's closed and any un-designated keys are hit */\n  const handleDefault = () => {\n    if (!menuIsOpen) {\n      setMenuIsOpen(true);\n    }\n  };\n\n  /** enable keyboard only usage while focused on the text input */\n  const handleTextInputKeyDown = (event: React.KeyboardEvent) => {\n    switch (event.key) {\n      case 'Enter':\n        handleEnter();\n        break;\n      case 'Escape':\n        handleEscape();\n        break;\n      case 'Tab':\n        handleTab();\n        break;\n      case 'ArrowUp':\n      case 'ArrowDown':\n        handleArrowKey();\n        break;\n      default:\n        handleDefault();\n    }\n  };\n\n  /** apply focus to the text input */\n  const focusTextInput = () => {\n    textInputGroupRef.current.querySelector('input').focus();\n  };\n\n  /** add the text of the selected item as a new chip */\n  const onSelect = (event: React.MouseEvent<Element, MouseEvent>, _itemId: string | number) => {\n    const selectedText = (event.target as HTMLElement).innerText;\n    addChip(selectedText);\n    event.stopPropagation();\n    focusTextInput();\n  };\n\n  /** close the menu when a click occurs outside of the menu or text input group */\n  const handleClick = (event: MouseEvent) => {\n    if (\n      menuRef.current &&\n      !menuRef.current.contains(event.target as HTMLElement) &&\n      !textInputGroupRef.current.contains(event.target as HTMLElement)\n    ) {\n      setMenuIsOpen(false);\n    }\n  };\n\n  /** enable keyboard only usage while focused on the menu */\n  const handleMenuKeyDown = (event: React.KeyboardEvent) => {\n    switch (event.key) {\n      case 'Tab':\n      case 'Escape':\n        event.preventDefault();\n        focusTextInput();\n        setMenuIsOpen(false);\n        break;\n      case 'Enter':\n      case ' ':\n        setTimeout(() => setMenuIsOpen(false), 0);\n        break;\n    }\n  };\n\n  /** show the search icon only when there are no chips to prevent the chips from being displayed behind the icon */\n  const showSearchIcon = !currentChips.length;\n\n  /** only show the clear button when there is something that can be cleared */\n  const showClearButton = !!inputValue || !!currentChips.length;\n\n  /** render the utilities component only when a component it contains is being rendered */\n  const showUtilities = showClearButton;\n\n  const inputGroup = (\n    <div ref={textInputGroupRef}>\n      <TextInputGroup>\n        <TextInputGroupMain\n          icon={showSearchIcon && <SearchIcon />}\n          value={inputValue}\n          hint={hint}\n          onChange={handleInputChange}\n          onFocus={() => setMenuIsOpen(true)}\n          onKeyDown={handleTextInputKeyDown}\n          placeholder=\"search\"\n          aria-label=\"Search input\"\n        >\n          <ChipGroup>\n            {currentChips.map(currentChip => (\n              <Chip key={currentChip} onClick={() => deleteChip(currentChip)}>\n                {currentChip}\n              </Chip>\n            ))}\n          </ChipGroup>\n        </TextInputGroupMain>\n        {showUtilities && (\n          <TextInputGroupUtilities>\n            {showClearButton && (\n              <Button variant=\"plain\" onClick={clearChipsAndInput} aria-label=\"Clear button for chips and input\">\n                <TimesIcon />\n              </Button>\n            )}\n          </TextInputGroupUtilities>\n        )}\n      </TextInputGroup>\n    </div>\n  );\n\n  const menu = (\n    <div ref={menuRef}>\n      <Menu onSelect={onSelect} onKeyDown={handleMenuKeyDown}>\n        <MenuContent>\n          <MenuList>{menuItems}</MenuList>\n        </MenuContent>\n      </Menu>\n    </div>\n  );\n\n  return (\n    <Popper\n      trigger={inputGroup}\n      popper={menu}\n      appendTo={() => textInputGroupRef.current}\n      isVisible={menuIsOpen}\n      onDocumentClick={handleClick}\n    />\n  );\n};\n","title":"Auto-complete search with typeahead","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demo showcases a search input with suggestions, which filters possible selections based on the text you've entered. Unlike the attribute-value filtering demo, it allows creation of new chip items when the text entered is not available in the list of suggestions.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`The current text in the input can be converted to a chip at any time by hitting `}
        
        <code {...{"className":"ws-code"}}>
          {`enter`}
        </code>
        {`. Auto-complete suggestions can be chosen by clicking the corresponding entry in the menu, or by navigating to an entry using the up/down arrow keys and selecting it with `}
        
        <code {...{"className":"ws-code"}}>
          {`enter`}
        </code>
        {`.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`Hitting `}
        
        <code {...{"className":"ws-code"}}>
          {`escape`}
        </code>
        {` while focused on the input or menu will close the menu, and the menu will reopen when text is entered.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`When only one item remains in the suggestion list, a typeahead hint will show and tab can be used to auto-complete the typing of that item.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Attribute-value filtering"])}
    {React.createElement(pageData.examples["Auto-complete search with typeahead"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsTextInputGroupReactDemosDocs';
Component.pageData = pageData;

export default Component;
