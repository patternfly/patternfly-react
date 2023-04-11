import React, { Component } from 'react';
import {
  StackItem,
  Title
} from '@patternfly/react-core';
import {
  Select,
  SelectGroup,
  SelectOption,
  SelectOptionObject,
  SelectVariant
} from '@patternfly/react-core/deprecated';

/* eslint-disable no-console */
export interface SelectViewMoreGroupedDemoState {
  isOpen: boolean;
  isOpenCheck: boolean;
  selected: string[];
  selectedCheck: string[];
  numOptions: number;
  numOptionsCeck: number;
  isLoading: boolean;
  isLoadingCheck: boolean;
}

export class SelectViewMoreGroupedDemo extends Component<SelectViewMoreGroupedDemoState> {
  state = {
    isOpen: false,
    isOpenCheck: false,
    selected: [] as string[],
    selectedCheck: [] as string[],
    numOptions: 1,
    numOptionsCheck: 1,
    isLoading: false,
    isLoadingCheck: false
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

  optionsCheck = [
    <SelectGroup label="Status" key="group1">
      <SelectOption key={0} value="Running" />
      <SelectOption key={1} value="Stopped" />
      <SelectOption key={2} value="Down" />
      <SelectOption key={3} value="Degraded" />
      <SelectOption key={4} value="Needs maintenance" />
    </SelectGroup>,
    <SelectGroup label="Vendor names" key="group2">
      <SelectOption key={5} value="Dell" />
      <SelectOption key={6} value="Samsung" isDisabled />
      <SelectOption key={7} value="Hewlett-Packard" />
    </SelectGroup>
  ];

  onToggle = (_event: any, isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  onToggleCheck = (_event: any, isOpenCheck: boolean) => {
    this.setState({
      isOpenCheck
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

  onSelectCheck = (event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    const { selectedCheck } = this.state;
    if (selectedCheck.includes(selection.toString())) {
      this.setState(
        (prevState: SelectViewMoreGroupedDemoState) => ({
          selectedCheck: prevState.selectedCheck.filter(item => item !== selection)
        }),
        () => console.log('selections: ', this.state.selectedCheck)
      );
    } else {
      this.setState(
        (prevState: SelectViewMoreGroupedDemoState) => ({ selectedCheck: [...prevState.selectedCheck, selection] }),
        () => console.log('selections: ', this.state.selectedCheck)
      );
    }
  };

  clearSelection = () => {
    this.setState({
      selected: null,
      isOpen: false
    });
  };

  simulateNetworkCall = (callback: any) => {
    setTimeout(callback, 12000);
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

  onViewMoreClickCheck = () => {
    // Set select loadingVariant to spinner then simulate network call before loading more options
    this.setState({ isLoadingCheck: true });
    this.simulateNetworkCall(() => {
      const newLength =
        this.state.numOptionsCheck + 3 <= this.optionsCheck.length
          ? this.state.numOptionsCheck + 3
          : this.optionsCheck.length;
      this.setState({ numOptionsCheck: newLength, isLoadingCheck: false });
    });
  };

  render() {
    const {
      isOpen,
      isOpenCheck,
      selected,
      selectedCheck,
      isLoading,
      isLoadingCheck,
      numOptions,
      numOptionsCheck
    } = this.state;
    const titleId = 'view-more-grouped-select-id';
    const titleIdCheck = 'view-more-grouped-check-select-id';

    return (
      <div>
        <StackItem isFilled={false}>
          <Title headingLevel="h2" size="2xl">
            View more select
          </Title>
          <Select
            toggleId="view-more-grouped-select"
            variant={SelectVariant.single}
            placeholderText="Select an option"
            aria-label="Select Input validated"
            onToggle={this.onToggle}
            onSelect={this.onSelect}
            selections={selected}
            isOpen={isOpen}
            aria-labelledby={titleId}
            isGrouped
            {...(!isLoading &&
              numOptions < this.options.length && {
                loadingVariant: { text: 'View more', onClick: this.onViewMoreClick }
              })}
            {...(isLoading && { loadingVariant: 'spinner' })}
          >
            {this.options.slice(0, numOptions)}
          </Select>
          <Title headingLevel="h2" size="2xl">
            Checkbox View more select
          </Title>
          <Select
            toggleId="view-more-grouped-select-check"
            variant={SelectVariant.checkbox}
            aria-label="Select input"
            onToggle={this.onToggleCheck}
            onSelect={this.onSelectCheck}
            selections={selectedCheck}
            isOpen={isOpenCheck}
            placeholderText="Filter by status"
            aria-labelledby={titleIdCheck}
            isGrouped
            {...(!isLoadingCheck &&
              numOptionsCheck < this.optionsCheck.length && {
                loadingVariant: { text: 'View more', onClick: this.onViewMoreClickCheck }
              })}
            {...(isLoadingCheck && { loadingVariant: 'spinner' })}
          >
            {this.optionsCheck.slice(0, numOptionsCheck)}
          </Select>
        </StackItem>
      </div>
    );
  }
}
