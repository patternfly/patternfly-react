import * as React from 'react';
import { SearchInput, SearchInputProps } from '@patternfly/react-core';

interface SearchInputState {
  value: string;
  resultsCount: number;
  currentResult: number;
}

export class SearchInputDemo extends React.Component<SearchInputProps, SearchInputState> {
  static displayName = 'SearchInputDemo';
  constructor(props: SearchInputProps) {
    super(props);
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

  render() {
    return (
      <SearchInput
        placeholder="Find by name"
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
