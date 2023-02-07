import * as React from 'react';
import { SearchInput, SearchInputProps, Button } from '@patternfly/react-core';

interface SearchInputState {
  value: string;
  resultsCount: number;
  currentResult: number;
}

export class SearchInputDemo extends React.Component<SearchInputProps, SearchInputState> {
  static displayName = 'SearchInputDemo';
  inputRef: React.RefObject<HTMLInputElement> = null;
  constructor(props: SearchInputProps) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      value: '',
      resultsCount: 0,
      currentResult: 1
    };
  }

  onChange = (value: string) => {
    this.setState({
      value,
      resultsCount: 3
    });
  };

  onClear = () => {
    this.setState({
      value: '',
      resultsCount: 0,
      currentResult: 1
    });
  };

  onNext = () => {
    this.setState(prevState => {
      const newCurrentResult = prevState.currentResult + 1;
      return {
        currentResult: newCurrentResult <= prevState.resultsCount ? newCurrentResult : prevState.resultsCount
      };
    });
  };

  onPrevious = () => {
    this.setState(prevState => {
      const newCurrentResult = prevState.currentResult - 1;
      return {
        currentResult: newCurrentResult > 0 ? newCurrentResult : 1
      };
    });
  };

  onInputFocus = () => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };

  onSearch = (value: string) => {
    this.setState({
      value
    });
  };

  render() {
    return (
      <React.Fragment>
        <SearchInput
          id="enabled-search"
          ref={this.inputRef}
          attributes={[
            { attr: 'username', display: 'Username' },
            { attr: 'firstname', display: 'First name' }
          ]}
          placeholder="Find by name"
          advancedSearchDelimiter=":"
          value={this.state.value}
          onChange={(_event, value) => this.onChange(value)}
          onSearch={(_event, value) => this.onSearch(value)}
          onClear={this.onClear}
          resultsCount={`${this.state.currentResult} / ${this.state.resultsCount}`}
          onNextClick={this.onNext}
          onPreviousClick={this.onPrevious}
        />
        <Button id="focus_button" onClick={this.onInputFocus}>
          Focus on search
        </Button>
        <SearchInput
          id="disabled-search"
          attributes={[
            { attr: 'username', display: 'Username' },
            { attr: 'firstname', display: 'First name' }
          ]}
          placeholder="Find by name"
          advancedSearchDelimiter=":"
          onChange={(_event, value) => this.onChange(value)}
          onSearch={(_event, value) => this.onSearch(value)}
          onClear={this.onClear}
          isDisabled
        />
        <SearchInput id="hinted-search" hint="hint" />
      </React.Fragment>
    );
  }
}
