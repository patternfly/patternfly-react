import React from 'react';
import { Select, SelectVariant, CheckboxSelectGroup, CheckboxSelectOption } from '../../index';

class CheckboxSelectInput extends React.Component {
  state = {
    isExpanded: false,
    selected: []
  };

  onToggle = isExpanded => {
    this.setState({
      isExpanded
    });
  };

  onSelect = (event, selection) => {
    const { selected } = this.state;
    if (selected.includes(selection)) {
      this.setState(
        prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
        () => console.log('selections: ', this.state.selected)
      );
    } else {
      this.setState(
        prevState => ({ selected: [...prevState.selected, selection] }),
        () => console.log('selections: ', this.state.selected)
      );
    }
  };

  clearSelection = () => {
    this.setState({
      selected: []
    });
  };

  options = [
    <CheckboxSelectGroup label="Status" key="group1">
      <CheckboxSelectOption key={0} value="Running" />
      <CheckboxSelectOption key={1} value="Stopped" />
      <CheckboxSelectOption key={2} value="Down" />
      <CheckboxSelectOption key={3} value="Degraded" />
      <CheckboxSelectOption key={4} value="Needs Maintenence" />
    </CheckboxSelectGroup>,
    <CheckboxSelectGroup label="Vendor" key="group2">
      <CheckboxSelectOption key={5} value="Dell" />
      <CheckboxSelectOption key={6} value="Samsung" isDisabled />
      <CheckboxSelectOption key={7} value="Hewlett-Packard" />
    </CheckboxSelectGroup>
  ];

  render() {
    const { isExpanded, selected } = this.state;
    const titleId = 'checkbox-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Checkbox Title
        </span>
        <Select
          variant={SelectVariant.checkbox}
          aria-label="Select Input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isExpanded={isExpanded}
          title="Filter by status"
          ariaLabelledBy={titleId}
          isGrouped
        >
          {this.options}
        </Select>
      </div>
    );
  }
}

export default CheckboxSelectInput;
