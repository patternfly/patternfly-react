import React from 'react';
import {
  MenuToggle,
  MenuFooter,
  MenuSearch,
  MenuSearchInput,
  Divider,
  InputGroup,
  InputGroupItem,
  Button,
  ButtonVariant,
  SearchInput,
  Dropdown,
  DropdownList,
  DropdownItem
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

interface ItemData {
  text: string;
  href?: string;
  isDisabled?: boolean | undefined;
}

type ItemArrayType = (ItemData | string)[];

export const ContextSelectorDemo: React.FunctionComponent = () => {
  const items: ItemArrayType = [
    {
      text: 'Action'
    },
    {
      text: 'Link',
      href: '#'
    },
    {
      text: 'Disabled action',
      isDisabled: true
    },
    {
      text: 'Disabled link',
      href: '#',
      isDisabled: true
    },
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
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState(typeof items[0] === 'string' ? items[0] : items[0].text);
  const [filteredItems, setFilteredItems] = React.useState<ItemArrayType>(items);
  const [searchInputValue, setSearchInputValue] = React.useState<string>('');
  const menuRef = React.useRef<HTMLDivElement>(null);
  const menuFooterBtnRef = React.useRef<HTMLButtonElement>(null);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (ev: React.MouseEvent<Element, MouseEvent> | undefined, itemId: string | number | undefined) => {
    if (typeof itemId === 'number' || typeof itemId === 'undefined') {
      return;
    }
    setSelected(itemId.toString());
    setIsOpen(!isOpen);
  };

  const onSearchInputChange = (value: string) => {
    setSearchInputValue(value);
  };

  const onSearchButtonClick = () => {
    const filtered =
      searchInputValue === ''
        ? items
        : items.filter((item) => {
            const str = typeof item === 'string' ? item : item.text;
            return str.toLowerCase().indexOf(searchInputValue.toLowerCase()) !== -1;
          });

    setFilteredItems(filtered || []);
    setIsOpen(true); // Keep menu open after search executed
  };

  const onEnterPressed = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSearchButtonClick();
    }
  };

  return (
    <Dropdown
      isOpen={isOpen}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      onOpenChangeKeys={['Escape']}
      toggle={(toggleRef) => (
        <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
          {selected}
        </MenuToggle>
      )}
      ref={menuRef}
      id="context-selector"
      onSelect={onSelect}
      isScrollable
    >
      <MenuSearch>
        <MenuSearchInput>
          <InputGroup>
            <InputGroupItem isFill>
              <SearchInput
                value={searchInputValue}
                placeholder="Search"
                onChange={(_event, value) => onSearchInputChange(value)}
                onKeyPress={onEnterPressed}
                aria-labelledby="pf-v6-context-selector-search-button-id-1"
              />
            </InputGroupItem>
            <InputGroupItem>
              <Button
                variant={ButtonVariant.control}
                aria-label="Search menu items"
                id="pf-v6-context-selector-search-button-id-1"
                onClick={onSearchButtonClick}
                icon={<SearchIcon aria-hidden="true" />}
              />
            </InputGroupItem>
          </InputGroup>
        </MenuSearchInput>
      </MenuSearch>
      <Divider />
      <DropdownList>
        {filteredItems.map((item, index) => {
          const [itemText, isDisabled, href] =
            typeof item === 'string' ? [item, null, null] : [item.text, item.isDisabled || null, item.href || null];
          return (
            <DropdownItem
              itemId={itemText}
              key={index}
              isDisabled={isDisabled as boolean | undefined}
              to={href as string | undefined}
            >
              {itemText}
            </DropdownItem>
          );
        })}
      </DropdownList>
      <MenuFooter>
        <Button ref={menuFooterBtnRef} variant="link" isInline>
          Action
        </Button>
      </MenuFooter>
    </Dropdown>
  );
};
