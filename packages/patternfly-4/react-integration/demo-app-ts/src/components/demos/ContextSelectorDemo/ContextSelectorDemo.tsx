import React from 'react';
import { ContextSelector, ContextSelectorItem } from '@patternfly/react-core';

interface ContextSelectorState {
  isOpen: boolean;
  selected: string;
  searchValue: string;
  filteredItems: Array<string>;
}

export class ContextSelectorDemo extends React.Component<{}, ContextSelectorState> {
  items: Array<string>; 
  onToggle: (event: any, isOpen: any) => void;
  onSelect: (event: any, value: string) => void; 
  onSearchInputChange: (value: string) => void; 
  onSearchButtonClick: (event: any) => void;
  constructor(props) {
    super(props);
    this.items = [
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

  componentDidMount() {
    window.scrollTo(0, 0)
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
      >
        {filteredItems.map((item, index) => (
          <ContextSelectorItem key={index}>{item}</ContextSelectorItem>
        ))}
      </ContextSelector>
    );
  }
}
