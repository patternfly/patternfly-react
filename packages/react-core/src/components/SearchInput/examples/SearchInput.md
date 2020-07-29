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
      resultsCount: 0
    };

    this.onChange = (value, event) => {
      this.setState({
        value: value,
        resultsCount: 3
      });
    };
    
    this.onClear = (event) => {
      this.setState({
        value: '',
        resultsCount: 0
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
        resultsCount={this.state.resultsCount}
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
      resultsCount: 0,
      currentResult: 1
    };
  
    this.onChange = (value, event) => {
      this.setState({
        value: value,
        resultsCount: 3
      });
    };
    
    this.onClear = (event) => {
      this.setState({
        value: '',
        resultsCount: 0,
        currentResult: 1
      });
    }
    
    this.onNext = (event) => {
      this.setState(prevState => {
        const newCurrentResult = prevState.currentResult + 1;
        return {
          currentResult: newCurrentResult <= prevState.resultsCount ? newCurrentResult : prevState.resultsCount
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
        resultsCount={`${this.state.currentResult} / ${this.state.resultsCount}`}
        onNextClick={this.onNext}
        onPreviousClick={this.onPrevious}
      />
    );
  }
}
```
