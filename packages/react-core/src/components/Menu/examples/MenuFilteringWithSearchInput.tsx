import React from 'react';
import { Menu, MenuList, MenuItem, MenuContent, MenuInput, Divider, SearchInput } from '@patternfly/react-core';

export const MenuFilteringWithSearchInput: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  const [input, setInput] = React.useState('');

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: number | string | undefined) => {
    const item = itemId as number; // eslint-disable-next-line no-console
    console.log(`clicked ${itemId}`);
    setActiveItem(item);
  };

  const handleTextInputChange = (value: string) => {
    setInput(value);
  };

  const menuListItemsText = ['Action 1', 'Action 2', 'Action 3'];

  const menuListItems = menuListItemsText
    .filter(item => !input || item.toLowerCase().includes(input.toString().toLowerCase()))
    .map((currentValue, index) => (
      <MenuItem key={currentValue} itemId={index}>
        {currentValue}
      </MenuItem>
    ));
  if (input && menuListItems.length === 0) {
    menuListItems.push(
      <MenuItem isDisabled key="no result">
        No results found
      </MenuItem>
    );
  }

  return (
    <Menu onSelect={onSelect} activeItemId={activeItem}>
      <MenuInput>
        <SearchInput
          value={input}
          aria-label="Filter menu items"
          type="search"
          onChange={(_event, value) => handleTextInputChange(value)}
        />
      </MenuInput>
      <Divider />
      <MenuContent>
        <MenuList>{menuListItems}</MenuList>
      </MenuContent>
    </Menu>
  );
};
