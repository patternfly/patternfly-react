import {
  Select,
  SelectOption,
  SelectOptionObject,
  SelectGroup,
  SelectVariant,
  Checkbox,
  Button
} from '@patternfly/react-core';
import React, { Component } from 'react';

/* eslint-disable no-console */
export interface SelectFooterFilteringDemoState {
  isOpen: boolean;
  selections: string[];
}

export class SelectFooterFilteringDemo extends Component<SelectFooterFilteringDemoState> {
  state = {
    isOpen: false,
    selections: [''],
    isSingle: false
  };

  options = [
    <SelectGroup label="Status" key="group1">
      {['Running', 'Stopped', 'Down', 'Degraded', 'Needs-Maintenence'].map((option, index) => (
        <SelectOption key={index} value={option} id={option} inputId={option} />
      ))}
    </SelectGroup>,
    <SelectGroup label="Vendor Names" key="group2">
      <SelectOption key={5} value="Dell" />
      <SelectOption key={6} value="Samsung" isDisabled />
      <SelectOption key={7} value="Hewlett-Packard" />
    </SelectGroup>
  ];

  onToggle = (isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  onSelect = (_event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    const { selections } = this.state;
    if (selections.includes(selection.toString())) {
      this.setState(
        (prevState: SelectFooterFilteringDemoState) => ({
          selections: prevState.selections.filter(item => item !== selection)
        }),
        () => console.log('selections: ', this.state.selections)
      );
    } else {
      this.setState(
        (prevState: SelectFooterFilteringDemoState) => ({ selections: [...prevState.selections, selection] }),
        () => console.log('selections: ', this.state.selections)
      );
    }
  };

  onFilter = (_: any, textInput: string) => {
    if (textInput === '') {
      return this.options;
    } else {
      return this.options
        .map((group: React.ReactElement) => {
          const filteredGroup = React.cloneElement(group, {
            children: group.props.children.filter((item: React.ReactElement) =>
              item.props.value.toLowerCase().includes(textInput.toLowerCase())
            )
          });
          if (filteredGroup.props.children.length > 0) {
            return filteredGroup;
          } else {
            return <></>;
          }
        })
        .filter(newGroup => newGroup.props.children);
    }
  };

  clearSelection = () => {
    this.setState({
      selections: []
    });
  };

  render() {
    const { isOpen, selections, isSingle } = this.state;
    const titleId = 'checkbox-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Filtering Select Title
        </span>
        <Select
          toggleId="filter-select"
          variant={isSingle ? SelectVariant.single : SelectVariant.checkbox}
          aria-label="Select Input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selections.filter(string => string)}
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
          onFilter={this.onFilter}
          isGrouped
          hasInlineFilter
          footer={
            <Button tabIndex={1} variant="link" isInline>
              Action
            </Button>
          }
        >
          {this.options}
        </Select>
        <Checkbox
          id="single-toggle"
          label="Is single select"
          isChecked={isSingle}
          onChange={() => this.setState({ isSingle: !isSingle, selections: [] })}
        />
      </div>
    );
  }
}
