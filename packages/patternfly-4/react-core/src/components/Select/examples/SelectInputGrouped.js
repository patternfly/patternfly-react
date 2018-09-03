import React from 'react';
import { Select } from '@patternfly/react-core';

class SelectInputGrouped extends React.Component {
  static title = 'Select Input with grouping';

  state = {
    value: '2'
  };

  onChange = event => {
    this.setState({ value: event.currentTarget.value });
  };

  options = [
    {
      groupLabel: 'Group1',
      options: [
        { value: '1', label: 'The First Option' },
        { value: '2', label: 'Second option is selected by default' }
      ]
    },
    {
      groupLabel: 'Group2',
      options: [{ value: '3', label: 'The Third Option' }, { value: '4', label: 'The Fourth option' }]
    }
  ];
  getOptionLbl = option => option.label;
  getOptionVal = option => option.value;
  getOptionsGroupLbl = group => group && group.groupLabel;
  getOptionFromGroup = group => group && group.options;

  render() {
    return (
      <React.Fragment>
        <Select
          value={this.state.value}
          options={this.options}
          getOptionLabel={this.getOptionLbl}
          getOptionValue={this.getOptionVal}
          isOptionsGrouped
          getOptionGroupLabel={this.getOptionsGroupLbl}
          getOptionFromGroup={this.getOptionFromGroup}
          onChange={this.onChange}
          aria-label="Select Input"
        />
      </React.Fragment>
    );
  }
}

export default SelectInputGrouped;
