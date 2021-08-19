---
id: Context selector
section: components
propComponents: ['ContextSelector', 'ContextSelectorItem', 'ContextSelectorFooter']

ouia: true
---

## Examples

### Basic

```js
import React from 'react';
import { Button, ContextSelector, ContextSelectorItem, ContextSelectorFooter } from '@patternfly/react-core';

class SimpleContextSelector extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
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

    this.state = {
      isOpen: false,
      selected: this.items[0],
      searchValue: '',
      filteredItems: this.items
    };

    this.onToggle = (event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, value) => {
      this.setState({
        selected: value,
        isOpen: !this.state.isOpen
      });
    };

    this.onSearchInputChange = value => {
      this.setState({ searchValue: value });
    };

    this.onSearchButtonClick = event => {
      const filtered =
        this.state.searchValue === ''
          ? this.items
          : this.items.filter(str => str.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1);

      this.setState({ filteredItems: filtered || [] });
    };
  }

  render() {
    const { isOpen, selected, searchValue, filteredItems } = this.state;
    return (
      <ContextSelector
        toggleText={selected}
        onSearchInputChange={this.onSearchInputChange}
        isOpen={isOpen}
        searchInputValue={searchValue}
        onToggle={this.onToggle}
        onSelect={this.onSelect}
        onSearchButtonClick={this.onSearchButtonClick}
        screenReaderLabel="Selected Project:"
      >
        {filteredItems.map((item, index) => (
          <ContextSelectorItem key={index}>{item}</ContextSelectorItem>
        ))}
      </ContextSelector>
    );
  }
}
```

### Plain with text

```ts
import React from 'react';
import { ContextSelector, ContextSelectorItem } from '@patternfly/react-core';

const items = [
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

const PlainTextContextSelector: React.FunctionComponent = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(items[0]);
  const [searchValue, setSearchValue] = React.useState('');
  const [filteredItems, setFilteredItems] = React.useState(items);

  function onToggle(event: any, isOpen: boolean) {
    setOpen(isOpen);
  };

  function onSelect(event: any, value: string) {
    setSelected(value);
    setOpen(!isOpen);
  };

  function onSearchInputChange(value: string) {
    setSearchValue(value);
  };

  function onSearchButtonClick(event: React.SyntheticEvent<HTMLButtonElement>) {
    const filtered =
      searchValue === '' ? items : items.filter(str => str.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);

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
      {filteredItems.map((item, index) => (
        <ContextSelectorItem key={index}>{item}</ContextSelectorItem>
      ))}
    </ContextSelector>
  );
};
```

### With footer

```js
import React from 'react';
import { Button, ContextSelector, ContextSelectorItem, ContextSelectorFooter } from '@patternfly/react-core';

class FooterContextSelector extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
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

    this.state = {
      isOpen: false,
      selected: this.items[0],
      searchValue: '',
      filteredItems: this.items
    };

    this.onToggle = (event, isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, value) => {
      this.setState({
        selected: value,
        isOpen: !this.state.isOpen
      });
    };

    this.onSearchInputChange = value => {
      this.setState({ searchValue: value });
    };

    this.onSearchButtonClick = event => {
      const filtered =
        this.state.searchValue === ''
          ? this.items
          : this.items.filter(str => str.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1);

      this.setState({ filteredItems: filtered || [] });
    };
  }

  render() {
    const { isOpen, selected, searchValue, filteredItems } = this.state;
    return (
      <ContextSelector
        toggleText={selected}
        onSearchInputChange={this.onSearchInputChange}
        isOpen={isOpen}
        searchInputValue={searchValue}
        onToggle={this.onToggle}
        onSelect={this.onSelect}
        onSearchButtonClick={this.onSearchButtonClick}
        screenReaderLabel="Selected Project:"
        footer={
          <ContextSelectorFooter>
            <Button variant="link" isInline>Footer action</Button>
          </ContextSelectorFooter>
        }
      >
        {filteredItems.map((item, index) => (
          <ContextSelectorItem key={index}>{item}</ContextSelectorItem>
        ))}
      </ContextSelector>
    );
  }
}
```
