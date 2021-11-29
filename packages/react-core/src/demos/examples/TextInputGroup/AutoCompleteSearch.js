import React from 'react';
import {
  TextInputGroup,
  TextInputGroupMain,
  TextInputGroupUtilities,
  Button,
  Menu,
  MenuContent,
  MenuList,
  MenuItem,
  Popper,
  Chip,
  ChipGroup,
  Divider
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

export const AutoCompleteSearch = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [currentChips, setCurrentChips] = React.useState([]);

  /** auto-completing suggestion text items to be shown in the menu */
  const suggestionItems = ['Cluster', 'Kind', 'Label', 'Name', 'Namespace', 'Status'];
  const [menuItems, setMenuItems] = React.useState([]);

  /** refs used to detect when clicks occur inside vs outside of the textInputGroup and menu popper */
  const menuRef = React.useRef();
  const textInputGroupRef = React.useRef();

  /** callback for updating the inputValue state in this component so that the input can be controlled */
  const handleInputChange = (value, _event) => {
    setInputValue(value);
  };

  /** callback for removing a chip from the chip selections */
  const deleteChip = chipToDelete => {
    const newChips = currentChips.filter(chip => !Object.is(chip, chipToDelete));
    setCurrentChips(newChips);
  };

  /** callback for clearing all selected chips and the text input */
  const clearChipsAndInput = () => {
    setCurrentChips([]);
    setInputValue('');
  };

  React.useEffect(() => {
    /** in the menu only show items that include the text in the input */
    const filteredMenuItems = suggestionItems
      .filter(item => !inputValue || item.toLowerCase().includes(inputValue.toString().toLowerCase()))
      .map((currentValue, index) => (
        <MenuItem key={currentValue} itemId={index}>
          {currentValue}
        </MenuItem>
      ));

    /** in the menu show a disabled "no result" when all menu items are filtered out */
    if (filteredMenuItems.length === 0) {
      const noResultItem = (
        <MenuItem isDisabled key="no result">
          No results found
        </MenuItem>
      );
      setMenuItems([noResultItem]);
      return;
    }

    /** add a heading to the menu */
    const headingItem = (
      <MenuItem isDisabled key="heading">
        Suggestions
      </MenuItem>
    );

    const divider = <Divider key="divider" />;

    setMenuItems([headingItem, divider, ...filteredMenuItems]);
  }, [inputValue]);

  /** add the given string as a chip in the chip group and clear the input */
  const addChip = newChipText => {
    setCurrentChips([...currentChips, `${newChipText}`]);
    setInputValue('');
  };

  /** add the current input value as a chip */
  const handleEnter = () => {
    if (inputValue.length) {
      addChip(inputValue);
    }
  };

  /** close the menu when escape is hit */
  const handleEscape = () => {
    setMenuIsOpen(false);
  };

  /** allow the user to focus on the menu and navigate using the arrow keys */
  const handleArrowKey = () => {
    if (menuRef.current) {
      const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
      firstElement && firstElement.focus();
    }
  };

  /** reopen the menu if it's closed and any un-designated keys are hit */
  const handleDefault = () => {
    if (!menuIsOpen) {
      setMenuIsOpen(true);
    }
  };

  /** enable keyboard only usage */
  const handleTextInputKeyDown = event => {
    switch (event.key) {
      case 'Enter':
        handleEnter();
        break;
      case 'Escape':
        handleEscape();
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        handleArrowKey();
        break;
      default:
        handleDefault();
    }
  };

  /** add the text of the selected item as a new chip */
  const onSelect = (event, _itemId) => {
    const selectedText = event.target.innerText;
    addChip(selectedText);
    event.stopPropagation();
    textInputGroupRef.current.querySelector('input').focus();
  };

  /** close the menu when a click occurs outside of the menu or text input group */
  const handleClick = event => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !textInputGroupRef.current.contains(event.target)
    ) {
      setMenuIsOpen(false);
    }
  };

  /** only show the search icon when no chips are selected */
  const showSearchIcon = !currentChips.length;

  /** only show the clear button when there is something that can be cleared */
  const showClearButton = inputValue || !!currentChips.length;

  const inputGroup = (
    <div ref={textInputGroupRef}>
      <TextInputGroup>
        <TextInputGroupMain
          icon={showSearchIcon && <SearchIcon />}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setMenuIsOpen(true)}
          onKeyDown={handleTextInputKeyDown}
        >
          <ChipGroup>
            {currentChips.map(currentChip => (
              <Chip key={currentChip} onClick={() => deleteChip(currentChip)}>
                {currentChip}
              </Chip>
            ))}
          </ChipGroup>
        </TextInputGroupMain>
        <TextInputGroupUtilities>
          {showClearButton && (
            <Button variant="plain" onClick={clearChipsAndInput} aria-label="Clear button and input">
              <TimesIcon />
            </Button>
          )}
        </TextInputGroupUtilities>
      </TextInputGroup>
    </div>
  );

  const menu = (
    <div ref={menuRef}>
      <Menu onSelect={onSelect}>
        <MenuContent>
          <MenuList>{menuItems}</MenuList>
        </MenuContent>
      </Menu>
    </div>
  );

  return <Popper trigger={inputGroup} popper={menu} isVisible={menuIsOpen} onDocumentClick={handleClick} />;
};
