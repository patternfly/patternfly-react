import React from 'react';
import { Select, SelectVariant, CheckboxSelectOption } from '@patternfly/react-core';

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
    <CheckboxSelectOption key={0} value="Active" />,
    <CheckboxSelectOption key={1} value="Cancelled" />,
    <CheckboxSelectOption key={2} value="Paused" />,
    <CheckboxSelectOption key={3} value="Warning" />,
    <CheckboxSelectOption key={4} value="Restarted" />
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
          placeholderText="Filter by status"
          aria-labelledby={titleId}
        >
          {this.options}
        </Select>
      </div>
    );
  }
}

export default CheckboxSelectInput;
