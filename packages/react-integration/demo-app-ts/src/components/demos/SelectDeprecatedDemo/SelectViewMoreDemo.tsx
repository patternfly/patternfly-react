import React, { Component } from 'react';
import { StackItem, Title } from '@patternfly/react-core';
import { Select, SelectOption, SelectOptionObject, SelectVariant } from '@patternfly/react-core/deprecated';

/* eslint-disable no-console */
export interface SelectViewMoreDemoState {
  isOpen: boolean;
  isOpenCheck: boolean;
  selected: string[];
  selectedCheck: string[];
  numOptions: number;
  numOptionsCeck: number;
  isLoading: boolean;
  isLoadingCheck: boolean;
}

export class SelectViewMoreDemo extends Component<SelectViewMoreDemoState> {
  state = {
    isOpen: false,
    isOpenCheck: false,
    selected: [] as string[],
    selectedCheck: [] as string[],
    numOptions: 3,
    numOptionsCheck: 3,
    isLoading: false,
    isLoadingCheck: false
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

  optionsCheck = [
    <SelectOption key={0} value="Active" description="This is a description" />,
    <SelectOption key={1} value="Cancelled" />,
    <SelectOption key={2} value="Paused" />,
    <SelectOption key={4} value="Warning" />,
    <SelectOption key={5} value="Restarted" />,
    <SelectOption key={6} value="Down" />,
    <SelectOption key={7} value="Disabled" />,
    <SelectOption key={8} value="Needs Maintenance " />,
    <SelectOption key={9} value="Degraded " />
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
        (prevState: SelectViewMoreDemoState) => ({
          selectedCheck: prevState.selectedCheck.filter(item => item !== selection)
        }),
        () => console.log('selections: ', this.state.selectedCheck)
      );
    } else {
      this.setState(
        (prevState: SelectViewMoreDemoState) => ({ selectedCheck: [...prevState.selectedCheck, selection] }),
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
    const titleId = 'view-more-select-id';
    const titleIdCheck = 'view-more-check-select-id';

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
          <Title headingLevel="h2" size="2xl">
            Checkbox View more select
          </Title>
          <Select
            toggleId="view-more-select-check"
            variant={SelectVariant.checkbox}
            aria-label="Select input"
            onToggle={this.onToggleCheck}
            onSelect={this.onSelectCheck}
            selections={selectedCheck}
            isOpen={isOpenCheck}
            placeholderText="Filter by status"
            aria-labelledby={titleIdCheck}
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
