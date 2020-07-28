import * as React from 'react';
import { SearchInput, SearchInputProps } from '@patternfly/react-core';

interface SearchInputState {
  value: string;
  numberOfResults: number;
  currentResult: number;
}

export class SearchInputDemo extends React.Component<SearchInputProps, SearchInputState> {
  static displayName = 'SearchInputDemo';
  constructor(props: SearchInputProps) {
    super(props);
    this.state = {
      value: '',
      numberOfResults: 0,
      currentResult: 1
    };
  }

  onChange = (value: string) => {
    this.setState({
      value,
      numberOfResults: 3
    });
  };

  onClear = () => {
    this.setState({
      value: '',
      numberOfResults: 0,
      currentResult: 1
    });
  };

  onNext = () => {
    this.setState(prevState => {
      const newCurrentResult = prevState.currentResult + 1;
      return {
        currentResult: newCurrentResult <= prevState.numberOfResults ? newCurrentResult : prevState.numberOfResults
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
        numberOfResults={`${this.state.currentResult} / ${this.state.numberOfResults}`}
        onNextClick={this.onNext}
        onPreviousClick={this.onPrevious}
      />
    );
  }
}
