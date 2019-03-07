import React from 'react';
import { ContextSelector, ContextSelectorItem } from '@patternfly/react-core';

class SimpleContextSelector extends React.Component {
  items = ['My Project', 'OpenShift Cluster', 'Production Ansible', 'AWS', 'Azure'];

  state = {
    isOpen: false,
    selected: 0,
    searchValue: '',
    filteredItems: this.items
  };

  onToggle = isOpen => {
    this.setState({
      isOpen
    });
  };

  onSelect = (event, index) => {
    this.setState({
      selected: index,
      isOpen: !this.state.isOpen
    });
  };

  onSearchInputChange = value => {
    /* filter list */
    const filtered = value === '' ? this.items : this.state.filteredItems.filter(str => str.indexOf(value) !== -1);

    this.setState({ searchValue: value, filteredItems: filtered || [] });
  };

  render() {
    const { isOpen, selected, searchValue, filteredItems } = this.state;
    return (
      <ContextSelector
        toggleText={this.items[selected]}
        onSearchInputChange={this.onSearchInputChange}
        isOpen={isOpen}
        searchInputValue={searchValue}
        onToggle={this.onToggle}
        onSelect={this.onSelect}
      >
        {filteredItems &&
          filteredItems.map((item, index) => <ContextSelectorItem key={index}>{item}</ContextSelectorItem>)}
      </ContextSelector>
    );
  }
}

export default SimpleContextSelector;
