import React from 'react';
import { Select } from '@patternfly/react-core';

class SelectInputDisabled extends React.Component {
  static title = 'Select Input Disabled';

  state = {
    value: '1'
  };

  onChange = event => {
    this.setState({ value: event.currentTarget.value });
  };

  options = [
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
    { value: 4, label: 'Four' },
    { value: 5, label: 'Five' }
  ];
  getOptionLbl = option => option.label;
  getOptionVal = option => option.value;

  render() {
    return (
      <React.Fragment>
        <Select
          value={this.state.value}
          options={this.options}
          getOptionLabel={this.getOptionLbl}
          getOptionValue={this.getOptionVal}
          onChange={this.onChange}
          isDisabled
          aria-label="Select Input"
        />
      </React.Fragment>
    );
  }
}

export default SelectInputDisabled;
