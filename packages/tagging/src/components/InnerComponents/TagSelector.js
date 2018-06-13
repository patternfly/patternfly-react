import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'patternfly-react';

class TagSelector extends React.Component {
  handleChange = selectedOption => {
    this.props.onTagCategoryChange({
      id: selectedOption.value,
      description: this.props.tagCategories.find(
        category => category.id === selectedOption.value
      ).description
    });
  };

  tooltip = text => <Tooltip id="tooltip">{text}</Tooltip>;

  labelWithIcon = (description, infoText) => (
    <div>
      <span>{description}</span>
      <OverlayTrigger placement="bottom" overlay={this.tooltip(infoText)}>
        <span
          className="pull-right pficon pficon-info tag-icon"
          aria-hidden="true"
        />
      </OverlayTrigger>
      <span className="sr-only">{infoText}</span>
    </div>
  );

  tagCategories = this.props.tagCategories.map(category => ({
    keyWord: category.description.toLowerCase(),
    value: category.id,
    label: category.singleValue
      ? this.labelWithIcon(category.description, this.props.infoText)
      : category.description
  }));

  render() {
    return (
      <Select
        value={this.props.selectedOption.id}
        label={this.props.selectedOption.description}
        options={this.tagCategories}
        onChange={this.handleChange}
        className="selected-option"
        name="form-field-name"
        filterOptions={(options, filter) =>
          options.filter(item => item.keyWord.includes(filter.toLowerCase()))
        }
        clearable={false}
      />
    );
  }
}
TagSelector.propTypes = {
  tagCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  selectedOption: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string
  }),
  onTagCategoryChange: PropTypes.func.isRequired,
  infoText: PropTypes.string
};

TagSelector.defaultProps = {
  infoText: 'Only a single value can be assigned from these categories',
  selectedOption: {}
};

export default TagSelector;
