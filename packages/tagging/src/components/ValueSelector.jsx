import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';


class ValueSelector extends React.Component {
  getTagValues = tagValues => tagValues.map(tag => ({ value: tag.id, label: tag.description }));

  handleChange = (selectedOption) => {
    this.props.onTagValueChange({ description: selectedOption.label, id: selectedOption.value });
  }

  selector = (value, label, tagValues) => (<Select
    name="form-field-name"
    value={value}
    label={label}
    onChange={this.handleChange}
    options={tagValues}
    clearable={false}
  />)


  render() {
    return this.selector(this.props.selectedOption.id, this.props.selectedOption.description, this.getTagValues(this.props.tagValues));
  }
}

ValueSelector.propTypes = {
  selectedOption: PropTypes.object.isRequired,
  tagValues: PropTypes.arrayOf(PropTypes.object),
  onTagValueChange: PropTypes.func.isRequired,
};

export default ValueSelector;
