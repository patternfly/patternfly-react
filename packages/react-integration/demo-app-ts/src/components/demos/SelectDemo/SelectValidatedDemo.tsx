import React, { Component } from 'react';
import { Select, SelectOption, SelectVariant, StackItem, Title, ValidatedOptions } from '@patternfly/react-core';

/* eslint-disable no-console */
export interface SelectValidatedDemoState {
  isOpen: boolean;
  selected: string[];
  validated: ValidatedOptions.default | ValidatedOptions.error | ValidatedOptions.warning | ValidatedOptions.success;
}

export class SelectValidatedDemo extends Component<SelectValidatedDemoState> {
  state = {
    isOpen: false,
    selected: [] as string[],
    validated: ValidatedOptions.default
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

  onToggle = (_event: any, isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  onSelect = (event: React.MouseEvent | React.ChangeEvent, selection: string, isPlaceholder: boolean) => {
    let validatedState = 'success';
    if (isPlaceholder) {
      this.clearSelection();
      validatedState = 'error';
    } else {
      if (selection === 'Other') {
        validatedState = 'warning';
      } else {
        validatedState = 'success';
      }
      this.setState({
        selected: selection,
        isOpen: false
      });
      console.log('selected:', selection);
    }
    this.setState({
      validated: validatedState
    });
  };

  clearSelection = () => {
    this.setState({
      selected: null,
      isOpen: false
    });
  };

  render() {
    const { isOpen, selected, validated } = this.state;
    const titleId = 'validated-select-id';

    return (
      <div id="select-validated-demo">
        <StackItem isFilled={false}>
          <Title headingLevel="h2" size="2xl">
            Validated Select
          </Title>
          <Select
            toggleId="validated-select"
            variant={SelectVariant.single}
            placeholderText="Select an option"
            aria-label="Select Input validated"
            onToggle={this.onToggle}
            onSelect={this.onSelect}
            selections={selected}
            isOpen={isOpen}
            aria-labelledby={titleId}
            aria-describedby="validated-helper"
            aria-invalid={validated === 'error' ? true : false}
            validated={validated}
          >
            {this.options}
          </Select>
          <div aria-live="polite" id="validated-helper" hidden>
            {validated}
          </div>
        </StackItem>
      </div>
    );
  }
}
