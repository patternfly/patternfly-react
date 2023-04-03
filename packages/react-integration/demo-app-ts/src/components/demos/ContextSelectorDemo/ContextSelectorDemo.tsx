import React from 'react';
import { Button } from '@patternfly/react-core';
import { ContextSelector, ContextSelectorItem, ContextSelectorFooter } from '@patternfly/react-core/deprecated';

interface ContextSelectorState {
  isOpen: boolean;
  selected: React.ReactNode;
  searchValue: string;
  filteredItems: string[];
}

export class ContextSelectorDemo extends React.Component<{}, ContextSelectorState> {
  static displayName = 'ContextSelectorDemo';
  items = [
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

  state = {
    isOpen: false,
    selected: this.items[0],
    searchValue: '',
    filteredItems: this.items
  };

  onToggle = (event: React.SyntheticEvent, isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  onSelect = (event: React.SyntheticEvent, value: React.ReactNode) => {
    this.setState({
      selected: value,
      isOpen: !this.state.isOpen
    });
  };

  onSearchInputChange = (value: string) => {
    this.setState({ searchValue: value });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSearchButtonClick = (event?: React.SyntheticEvent<HTMLButtonElement, Event>) => {
    const filtered =
      this.state.searchValue === ''
        ? this.items
        : this.items.filter(str => str.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1);

    this.setState({ filteredItems: filtered || [] });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { isOpen, selected, searchValue, filteredItems } = this.state;
    return (
      <ContextSelector
        toggleText={selected}
        onSearchInputChange={this.onSearchInputChange}
        isOpen={isOpen}
        searchInputValue={searchValue}
        onToggle={(event: any) => this.onToggle(event, !isOpen)}
        onSelect={this.onSelect}
        onSearchButtonClick={this.onSearchButtonClick}
        screenReaderLabel="Selected Project:"
        footer={
          <ContextSelectorFooter>
            <Button variant="link">Footer action</Button>
          </ContextSelectorFooter>
        }
        isPlain
        isText
      >
        {filteredItems.map((item, index) => (
          <ContextSelectorItem key={index}>{item}</ContextSelectorItem>
        ))}
      </ContextSelector>
    );
  }
}
