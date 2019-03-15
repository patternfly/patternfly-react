import React from 'react';
import { ContextSelector, ContextSelectorItem } from '@patternfly/react-core';

class SimpleContextSelector extends React.Component {
  items = ['My Project', 'OpenShift Cluster', 'Production Ansible', 'AWS', 'Azure'];

  state = {
    isOpen: false,
    selected: this.items[0],
    searchValue: '',
    filteredItems: this.items
  };

  onToggle = isOpen => {
    this.setState({
      isOpen
    });
  };

  onSelect = (event, value) => {
    this.setState({
      selected: value,
      isOpen: !this.state.isOpen
    });
  };

  onSearchInputChange = value => {
    const filtered =
      value === '' ? this.items : this.items.filter(str => str.toLowerCase().indexOf(value.toLowerCase()) !== -1);

    this.setState({ searchValue: value, filteredItems: filtered || [] });
  };

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
        screenReaderLabel="Selected Project:"
      >
        {filteredItems &&
          filteredItems.map((item, index) => <ContextSelectorItem key={index}>{item}</ContextSelectorItem>)}
      </ContextSelector>
    );
  }
}

export default SimpleContextSelector;
