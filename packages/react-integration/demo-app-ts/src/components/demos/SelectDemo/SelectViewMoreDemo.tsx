import React, { Component } from 'react';
import { Select, SelectOption, SelectVariant, StackItem, Title } from '@patternfly/react-core';

/* eslint-disable no-console */
export interface SelectViewMoreDemoState {
  isOpen: boolean;
  selected: string[];
  numOptions: number;
  isLoading: boolean;
}

export class SelectViewMoreDemo extends Component<SelectViewMoreDemoState> {
  state = {
    isOpen: false,
    selected: [] as string[],
    numOptions: 3,
    isLoading: false
  };

  options = [
    <SelectOption key={0} value="Choose..." isPlaceholder id="Choose..." />,
    <SelectOption key={1} value="Mr" id="Mr" />,
    <SelectOption key={2} value="Miss" id="Miss" />,
    <SelectOption key={3} value="Mrs" id="Mrs" />,
    <SelectOption key={4} value="Ms" id="Ms" />,
    <SelectOption key={5} value="Dr" id="Dr" />,
    <SelectOption key={6} value="Other" id="Other" />
  ];

  onToggle = (isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  onSelect = (event: React.MouseEvent | React.ChangeEvent, selection: string, isPlaceholder: boolean) => {
    if (isPlaceholder) {
      this.clearSelection();
    } else {
      this.setState({
        selected: selection,
        isOpen: false
      });
      console.log('selected:', selection);
    }
  };

  clearSelection = () => {
    this.setState({
      selected: null,
      isOpen: false
    });
  };

  simulateNetworkCall = (callback: any) => {
    setTimeout(callback, 8000);
  };

  onViewMoreClick = () => {
    // Set select loadingVariant to spinner then simulate network call before loading more options
    this.setState({ isLoading: true });
    this.simulateNetworkCall(() => {
      const newLength =
        this.state.numOptions + 3 < this.options.length ? this.state.numOptions + 3 : this.options.length;
      this.setState({ numOptions: newLength, isLoading: false });
    });
  };

  render() {
    const { isOpen, selected, isLoading, numOptions } = this.state;
    const titleId = 'view-more-select-id';

    return (
      <div>
        <StackItem isFilled={false}>
          <Title headingLevel="h2" size="2xl">
            View more select
          </Title>
          <Select
            toggleId="view-more-select"
            variant={SelectVariant.single}
            placeholderText="Select an option"
            aria-label="Select Input validated"
            onToggle={this.onToggle}
            onSelect={this.onSelect}
            selections={selected}
            isOpen={isOpen}
            aria-labelledby={titleId}
            {...(!isLoading &&
              numOptions < this.options.length && {
                loadingVariant: { text: 'View more', onClick: this.onViewMoreClick }
              })}
            {...(isLoading && { loadingVariant: 'spinner' })}
          >
            {this.options.slice(0, numOptions)}
          </Select>
        </StackItem>
      </div>
    );
  }
}
