import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

class ValueSelector extends React.Component {
  getTagValues = tagValues =>
    tagValues.map(tag => ({ value: tag.id, label: tag.description }));

  handleChange = selectedOption => {
    this.props.onTagValueChange({
      description: selectedOption.label,
      id: selectedOption.value
    });
  };

  selector = (value, label, tagValues) => (
    <Select
      name="form-field-name"
      value={value}
      label={label}
      onChange={this.handleChange}
      options={tagValues}
      clearable={false}
      ignoreCase
    />
  );

  render() {
    return this.selector(
      this.props.selectedOption.id,
      this.props.selectedOption.description,
      this.getTagValues(this.props.tagValues)
    );
  }
}

ValueSelector.propTypes = {
  selectedOption: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string
  }),
  tagValues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTagValueChange: PropTypes.func.isRequired
};

ValueSelector.defaultProps = {
  selectedOption: {}
};

export default ValueSelector;
