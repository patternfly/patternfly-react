---
title: 'Search Input'
section: components
cssPrefix: 'pf-c-search-input'
typescript: true 
propComponents: ['SearchInput']
---
import { SearchInput } from '@patternfly/react-core';

## Examples
```js title=Basic
import React from 'react';
import { SearchInput } from '@patternfly/react-core';

class BasicSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.onChange = (value, event) => {
      this.setState({
        value: value
      });
    };
  }

  render() {
    return (
      <SearchInput
        placeholder='Find by name'
        value={this.state.value}
        onChange={this.onChange}
        onClear={(evt) => this.onChange('', evt)}
      />
    );
  }
}

```

```js title=Match-with-result-count
import React from 'react';
import { SearchInput } from '@patternfly/react-core';

class SearchInputWithResultCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      results: 0
    };

    this.onChange = (value, event) => {
      this.setState({
        value: value,
        results: 3
      });
    };
    
    this.onClear = (event) => {
      this.setState({
        value: '',
        results: 0
      });
    }
  }

  render() {
    return (
      <SearchInput
        placeholder='Find by name'
        value={this.state.value}
        onChange={this.onChange}
        onClear={this.onClear}
        results={this.state.results}
      />
    );
  }
}

```

```js title=Match-with-navigable-options
import React from 'react';
import { SearchInput } from '@patternfly/react-core';

class SearchInputWithNavigableOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      results: 0,
      currentResult: 1
    };
  
    this.onChange = (value, event) => {
      this.setState({
        value: value,
        results: 3
      });
    };
    
    this.onClear = (event) => {
      this.setState({
        value: '',
        results: 0,
        currentResult: 1
      });
    }
    
    this.onNext = (event) => {
      this.setState(prevState => {
        const newCurrentResult = prevState.currentResult + 1;
        return {
          currentResult: newCurrentResult <= prevState.results ? newCurrentResult : prevState.results
        } 
      });
    }
    
    this.onPrevious = (event) => {
      this.setState(prevState => {
        const newCurrentResult = prevState.currentResult - 1;
        return {
          currentResult: newCurrentResult > 0 ? newCurrentResult : 1 
        }
      });
    }
  }
  
  render() {
    return (
      <SearchInput
        placeholder='Find by name'
        value={this.state.value}
        onChange={this.onChange}
        onClear={this.onClear}
        results={`${this.state.currentResult} / ${this.state.results}`}
        onNextClick={this.onNext}
        onPreviousClick={this.onPrevious}
      />
    );
  }
}
```
