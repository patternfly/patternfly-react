import React from 'react';
import { Select, SelectOption, SelectVariant, Button } from '@patternfly/react-core';

/* eslint-disable no-console */
export interface SelectTypeaheadFooterDemoState {
  isOpen: boolean;
  selected: string[];
}

export class SelectTypeaheadFooterDemo extends React.Component<SelectTypeaheadFooterDemoState> {
  static displayName = 'SelectTypeaheadFooterDemo';
  state = {
    isOpen: false,
    selected: [] as string[]
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

  render() {
    const { isOpen, selected } = this.state;
    const titleId = 'footer-typeahead-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          isInputValuePersisted
          variant={SelectVariant.typeahead}
          typeAheadAriaLabel="Select an option"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          placeholderText="Select a state"
          footer={
            <Button tabIndex={1} variant="link" isInline>
              Action
            </Button>
          }
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
