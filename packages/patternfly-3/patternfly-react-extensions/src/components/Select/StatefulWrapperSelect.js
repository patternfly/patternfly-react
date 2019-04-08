import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import { Select } from './index';
import { optionsArray } from './Select.fixtures';

class StatefulWrapperSelect extends Component {
  state = {
    open: false,
    isSearching: false,
    searchValue: '',
    selected: { id: '3', name: 'selected' },
    isLoading: false,
    options: optionsArray,
    matched: []
  };

  onToggle = () => this.setState({ open: !this.state.open, isSearching: false, searchValue: '' });

  matcher = search => {
    const { options } = this.state;
    const results = [];
    options.forEach(opt => {
      if (opt.name.includes(search)) results.push(opt);
    });
    return results;
  };

  onSearch = e => {
    e.persist();
    if (e.target.value !== '') {
      this.setState(
        {
          searchValue: e.target.value,
          isSearching: true,
          isLoading: true
        },
        () => {
          setTimeout(() => {
            this.setState({
              isLoading: false,
              matched: this.matcher(e.target.value)
            });
          }, 700);
        }
      );
    } else this.setState({ isSearching: false, searchValue: '' });
  };

  onClear = () => this.setState({ searchValue: '', isSearching: false });

  onItemClick = host =>
    this.setState({ selected: { id: host.id, name: host.name }, open: false, isSearching: false, searchValue: '' });

  handleClickOutside = () => {
    if (this.state.open === true) this.onToggle();
  };

  render() {
    const { open, isSearching, searchValue, selected, isLoading, options, matched } = this.state;
    return (
      <Select
        options={isSearching ? matched : options}
        placeholder="Filter Host..."
        open={open}
        onToggle={this.onToggle}
        searchValue={searchValue}
        onSearchChange={this.onSearch}
        onSearchClear={this.onClear}
        onItemClick={this.onItemClick}
        selectedItem={selected}
        isLoading={isLoading}
      />
    );
  }
}

export default enhanceWithClickOutside(StatefulWrapperSelect);
