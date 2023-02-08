import React from 'react';
import { Select, SelectOption, SelectVariant, SelectGroup, StackItem, Title } from '@patternfly/react-core';

/* eslint-disable no-console */
interface TypeAheadOption {
  value?: string;
  disabled?: boolean;
}

/* eslint-disable no-console */
export interface SelectViewMoreTypeaheadGroupedDemoState {
  isOpen: boolean;
  selected: string[];
  numOptions: number;
  isLoading: boolean;
  isCreatable: boolean;
  newOptions: boolean;
  options: TypeAheadOption[];
}

export class SelectViewMoreTypeaheadGroupedDemo extends React.Component<SelectViewMoreTypeaheadGroupedDemoState> {
  static displayName = 'SelectViewMoreTypeaheadDemo';
  state = {
    isOpen: false,
    selected: [] as string[],
    numOptions: 1,
    isLoading: false,
    isCreatable: false,
    newOptions: false,
    inputValuePersisted: false
  };

  options = [
    <SelectGroup label="Status" key="group1">
      <SelectOption id={'option-grouped-1'} key={0} value="Running" />
      <SelectOption id={'option-grouped-2'} key={1} value="Stopped" />
      <SelectOption id={'option-grouped-3'} key={2} value="Down" />
      <SelectOption id={'option-grouped-4'} key={3} value="Degraded" />
      <SelectOption id={'option-grouped-5'} key={4} value="Needs Maintenance" />
    </SelectGroup>,
    <SelectGroup label="Vendor Names" key="group2">
      <SelectOption id={'option-grouped-6'} key={5} value="Dell" />
      <SelectOption id={'option-grouped-7'} key={6} value="Samsung" isDisabled />
      <SelectOption id={'option-grouped-8'} key={7} value="Hewlett-Packard" />
    </SelectGroup>
  ];

  onToggle = (_event: any, isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  clearSelection = () => {
    this.setState({
      selected: null,
      isOpen: false
    });
  };

  onSelect = (_event: React.MouseEvent | React.ChangeEvent, selection: string, isPlaceholder: boolean) => {
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

  simulateNetworkCall = (callback: any) => {
    setTimeout(callback, 1200);
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
    const titleId = 'view-more-typeahead-select-id';
    const { isOpen, selected, isLoading, numOptions } = this.state;
    return (
      <StackItem isFilled={false}>
        <Title headingLevel="h2" size="2xl">
          Typeahead Select
        </Title>
        <div>
          <span id={titleId} hidden>
            Select a state
          </span>
          <Select
            toggleId="view-more-typeahead-select"
            variant={SelectVariant.typeahead}
            aria-label="Select a state"
            onToggle={this.onToggle}
            onSelect={this.onSelect}
            onClear={this.clearSelection}
            selections={selected}
            isOpen={isOpen}
            aria-labelledby={titleId}
            placeholderText="Select a state"
            noResultsFoundText="Item not found"
            {...(!isLoading &&
              numOptions < this.options.length && {
                loadingVariant: { text: 'View more', onClick: this.onViewMoreClick }
              })}
            {...(isLoading && { loadingVariant: 'spinner' })}
          >
            {this.options.slice(0, numOptions)}
          </Select>
        </div>
      </StackItem>
    );
  }
}
