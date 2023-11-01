import React from 'react';
import {
  Menu,
  MenuList,
  MenuContent,
  MenuSearch,
  MenuSearchInput,
  Divider,
  SearchInput,
  SelectOption,
  MenuToggle,
  MenuContainer
} from '@patternfly/react-core';

export const InlineSearchFilterMenuDemo: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  const [input, setInput] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleRef = React.useRef<any>();
  const menuRef = React.useRef<any>();

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: number | string | undefined) => {
    const item = itemId as number;
    // eslint-disable-next-line no-console
    console.log(`clicked ${itemId}`);
    setActiveItem(item);
  };

  const handleTextInputChange = (value: string) => {
    if (!isOpen) {
      setIsOpen(true);
    }
    setInput(value);
  };

  const menuListItemsText = [
    'Action 1',
    'Action 2',
    'Action 3',
    'My project',
    'OpenShift cluster',
    'Production Ansible',
    'AWS',
    'Azure',
    'My project 2',
    'OpenShift cluster ',
    'Production Ansible 2 ',
    'AWS 2',
    'Azure 2'
  ];

  const menuListItems = menuListItemsText
    .filter((item) => !input || item.toLowerCase().includes(input.toString().toLowerCase()))
    .map((currentValue, index) => (
      <SelectOption key={currentValue} itemId={index}>
        {currentValue}
      </SelectOption>
    ));
  if (input && menuListItems.length === 0) {
    menuListItems.push(
      <SelectOption isDisabled key="no result">
        No results found
      </SelectOption>
    );
  }

  const toggle = (
    <MenuToggle ref={toggleRef} onClick={() => setIsOpen(!isOpen)} isExpanded={isOpen}>
      {isOpen ? 'Expanded' : 'Collapsed'}
    </MenuToggle>
  );

  const menu = (
    <Menu ref={menuRef} onSelect={onSelect} activeItemId={activeItem} isScrollable>
      <MenuSearch>
        <MenuSearchInput>
          <SearchInput
            value={input}
            aria-label="Filter menu items"
            onChange={(_event, value) => handleTextInputChange(value)}
          />
        </MenuSearchInput>
      </MenuSearch>
      <Divider />
      <MenuContent maxMenuHeight="200px">
        <MenuList>{menuListItems}</MenuList>
      </MenuContent>
    </Menu>
  );

  return (
    <MenuContainer
      menu={menu}
      menuRef={menuRef}
      toggle={toggle}
      toggleRef={toggleRef}
      isOpen={isOpen}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      onOpenChangeKeys={['Escape']}
    />
  );
};
