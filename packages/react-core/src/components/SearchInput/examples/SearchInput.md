---
id: 'Search input'
section: components
cssPrefix: 'pf-c-search-input'
propComponents: ['SearchInput']
beta: true
---
import { SearchInput } from '@patternfly/react-core';

## Examples
### Basic
```js
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

### Match with result count
```js
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

### Match with navigable options
```js
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
