import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

class TagSelector extends React.Component {
  handleChange = (selectedOption) => {
    this.props.onTagCategoryChange({
      id: selectedOption.value,
      description: this.props.tagCategories.find(category => (category.id === selectedOption.value)).description,
    });
  }


  tagCategories = this.props.tagCategories.map(category => ((category.singleValue &&
        {
          value: category.id,
          label:
  <div>
    <span>
      {category.description}
    </span>
    <span
      className="pull-right pficon pficon-info tag-icon"
      aria-hidden="true"
      title={this.props.infoText}
    />
    <span className="sr-only">{this.props.infoText}</span>
  </div>,
        }) ||
        { value: category.id, label: category.description }));

  render() {
    const label = this.props.selectedOption.description;
    const value = this.props.selectedOption.id;
    return (
      <Select
        className="selected-option"
        name="form-field-name"
        value={value}
        label={label}
        inputProps={{'foo' : 'bar'}}
        onChange={this.handleChange}
        options={this.tagCategories}
        clearable={false}
      />

    );
  }
}
TagSelector.propTypes = {
  tagCategories: PropTypes.arrayOf(PropTypes.object),
  selectedOption: PropTypes.object.isRequired,
  onTagCategoryChange: PropTypes.func.isRequired,
  infoText: PropTypes.string,
};

TagSelector.defaultProps = {
  infoText: 'Only a single value can be assigned from these categories',
};

export default TagSelector;
