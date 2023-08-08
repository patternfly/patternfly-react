import React from 'react';
import { ContextSelector, ContextSelectorItem } from '@patternfly/react-core/deprecated';

const items = [
  {
    text: 'Link',
    href: '#'
  },
  'Action',
  {
    text: 'Disabled link',
    href: '#',
    isDisabled: true
  },
  {
    text: 'Disabled action',
    isDisabled: true
  },
  'My Project',
  'OpenShift Cluster',
  'Production Ansible',
  'AWS',
  'Azure',
  'My Project 2',
  'OpenShift Cluster ',
  'Production Ansible 2 ',
  'AWS 2',
  'Azure 2'
];

export const ContextSelectorPlainText: React.FunctionComponent = () => {
  const firstItemText = typeof items[0] === 'string' ? items[0] : items[0].text;
  const [isOpen, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(firstItemText);
  const [searchValue, setSearchValue] = React.useState('');
  const [filteredItems, setFilteredItems] = React.useState(items);
  const onToggle = (event: any, isOpen: boolean) => {
    setOpen(isOpen);
  };

  const onSelect = (event: any, value: React.ReactNode) => {
    setSelected(value as string);
    setOpen(!isOpen);
  };

  const onSearchInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setSearchValue(value);
  };

  const onSearchButtonClick = () => {
    const filtered =
      searchValue === ''
        ? items
        : items.filter((item) => {
            const str = typeof item === 'string' ? item : item.text;
            return str.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
          });

    setFilteredItems(filtered || []);
  };
  return (
    <ContextSelector
      toggleText={selected}
      onSearchInputChange={onSearchInputChange}
      isOpen={isOpen}
      searchInputValue={searchValue}
      onToggle={onToggle}
      onSelect={onSelect}
      onSearchButtonClick={onSearchButtonClick}
      screenReaderLabel="Selected Project:"
      isPlain
      isText
    >
      {filteredItems.map((item, index) => {
        const [text, href = undefined, isDisabled = false] =
          typeof item === 'string' ? [item, undefined, false] : [item.text, item.href, item.isDisabled];
        return (
          <ContextSelectorItem key={index} href={href} isDisabled={isDisabled}>
            {text}
          </ContextSelectorItem>
        );
      })}
    </ContextSelector>
  );
};
