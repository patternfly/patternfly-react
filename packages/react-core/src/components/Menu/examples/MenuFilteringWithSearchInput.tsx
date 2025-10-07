import { useState } from 'react';
import {
  Menu,
  MenuList,
  MenuItem,
  MenuContent,
  MenuSearch,
  MenuSearchInput,
  Divider,
  SearchInput
} from '@patternfly/react-core';

export const MenuFilteringWithSearchInput: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [input, setInput] = useState('');

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
    .filter((item) => !input || item.toLowerCase().includes(input.toString().toLowerCase()))
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
      <MenuSearch>
        <MenuSearchInput>
          <SearchInput
            value={input}
            aria-label="Filter menu items"
            onChange={(_event, value) => handleTextInputChange(value)}
            onClear={() => handleTextInputChange('')}
          />
        </MenuSearchInput>
      </MenuSearch>
      <Divider />
      <MenuContent>
        <MenuList>{menuListItems}</MenuList>
      </MenuContent>
    </Menu>
  );
};
