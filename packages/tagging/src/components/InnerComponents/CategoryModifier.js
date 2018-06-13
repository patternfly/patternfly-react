import React from 'react';
import PropTypes from 'prop-types';
import { Col, ControlLabel, FormGroup } from 'patternfly-react';
import TagSelector from './TagSelector';

const CategoryModifier = ({
  tagCategories,
  onTagCategoryChange,
  selectedTagCategory,
  categoryLabel
}) => (
  <FormGroup>
    <Col xs={12} md={4} lg={6}>
      <ControlLabel>{categoryLabel}</ControlLabel>
    </Col>
    <Col xs={12} md={8} lg={6}>
      <TagSelector
        tagCategories={tagCategories}
        onTagCategoryChange={onTagCategoryChange}
        selectedOption={selectedTagCategory}
      />
    </Col>
  </FormGroup>
);

CategoryModifier.propTypes = {
  tagCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  selectedTagCategory: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string
  }),
  onTagCategoryChange: PropTypes.func.isRequired,
  categoryLabel: PropTypes.string
};

CategoryModifier.defaultProps = {
  categoryLabel: 'Category',
  selectedTagCategory: {}
};

export default CategoryModifier;
