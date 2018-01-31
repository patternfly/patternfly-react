import React, { Component } from 'react';

import AutoComplete from '../AutoComplete';
import { getSearchItems } from '../AutoComplete.fixtures';

export class MockAutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    this.onInputUpdate();
  }

  onInputUpdate = (searchTerm = '') => {
    searchTerm = searchTerm.trimLeft();

    this.setState({
      items: getSearchItems(searchTerm)
    });
  };

  render() {
    return (
      <AutoComplete
        items={this.state.items}
        labelText="Type typing 'Orange is '"
        onInputUpdate={this.onInputUpdate}
        onSearch={selection => alert(`You selected ${selection}!`)}
      />
    );
  }
}

export const basicExampleSource = `class MockAutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    this.onInputUpdate();
  }

  onInputUpdate = (searchTerm = '') => {
    searchTerm = searchTerm.trimLeft();

    this.setState({
      items: getSearchItems(searchTerm)
    });
  };

  render() {
    return (
      <AutoComplete
        items={this.state.items}
        labelText="Type your favorite color"
        onInputUpdate={this.onInputUpdate}
        onSearch={selection => alert(\`You selected $\{selection}!\`)}
      />
    );
  }
}`;
