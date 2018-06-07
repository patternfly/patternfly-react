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

  labelWithIcon = (description, infoText) => (<div>
    <span>
      {description}
    </span>
    <span
      className="pull-right pficon pficon-info tag-icon"
      aria-hidden="true"
      title={infoText}
    />
    <span className="sr-only">{infoText}</span>
  </div>)


  tagCategories = this.props.tagCategories.map(category => ({
          keyWord: category.description.toLowerCase(),
          value: category.id,
          label: category.singleValue ? this.labelWithIcon(category.description, this.props.infoText) : category.description,
        }));

  render() {
    const id = this.props.selectedOption.id;
    const label = this.props.selectedOption.description;
    return (
      <Select
        value={id}
        label={label}
        options={this.tagCategories}
        onChange={this.handleChange}
        className="selected-option"
        name="form-field-name"
        filterOptions={(options, filter) => options.filter(item => item.keyWord.includes(filter.toLowerCase())) }
        clearable={false}

      />

    );
  }
}
TagSelector.propTypes = {
  tagCategories: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, description: PropTypes.string.isRequired }).isRequired).isRequired,
  selectedOption: PropTypes.shape({ id: PropTypes.number, description: PropTypes.string }),
  onTagCategoryChange: PropTypes.func.isRequired,
  infoText: PropTypes.string,
};

TagSelector.defaultProps = {
  infoText: 'Only a single value can be assigned from these categories',
  selectedOption: {},
};

export default TagSelector;
