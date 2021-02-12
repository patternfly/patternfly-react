---
id: 'Search input'
section: components
cssPrefix: 'pf-c-search-input'
propComponents: ['SearchInput', 'SearchAttribute']
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

### Focus search input using ref
```js
import React from 'react';
import { SearchInput, Button } from '@patternfly/react-core';

TextInputSelectAll = () => {
  const [value, setValue] = React.useState('');
  const ref = React.useRef(null);
  return (
    <React.Fragment>
      <SearchInput
        ref={ref}
        value={value}
        onChange={setValue}
        onClear={() => setValue('')}
      />
      <Button onClick={() => ref.current && ref.current.focus()}>Focus on the search input</Button>
    </React.Fragment>
  );
};
```

### Advanced
```js
import React from 'react';
import { Checkbox, SearchInput } from '@patternfly/react-core';

class AdvancedSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'username:player firstname:john',
      useEqualsAsDelimiter: false,
    };
    
    this.toggleDelimiter = checked => {
      this.setState(prevState => {
        const newValue = prevState.value.replace(/:|=/g, checked ? "=" : ':' );
        return {
          useEqualsAsDelimiter: checked,
          value: newValue
          }
      });
    };

    this.onChange = (value) => {
      this.setState({
        value: value
      });
    };
    
    this.onSearch = (value, event, attrValueMap) => {
      this.setState({
        value: value
      });
      console.log(attrValueMap);
    }
  }

  render() {
    return (
      <>
        <Checkbox
          label="Use equal sign as search attribute delimiter"
          isChecked={this.state.useEqualsAsDelimiter}
          onChange={this.toggleDelimiter}
          aria-label="change delimiter checkbox"
          id="toggle-delimiter"
          name="toggle-delimiter"
        /> 
        <br />
        <SearchInput
          attributes={[{attr:"username", display:"Username"}, {attr: "firstname", display: "First name"}]}
          advancedSearchDelimiter={this.state.useEqualsAsDelimiter ? '=' : ':'}
          value={this.state.value}
          onChange={this.onChange}
          onSearch={this.onSearch}
          onClear={(evt) => this.onChange('', evt)}
        />
      </>
    );
  }
}

```
