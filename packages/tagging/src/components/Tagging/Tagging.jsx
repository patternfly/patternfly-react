import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'patternfly-react';
import TagModifier from '../InnerComponents/TagModifier';
import TagView from '../InnerComponents/TagView';
import CategoryModifier from '../InnerComponents/CategoryModifier';
import ValueModifier from '../InnerComponents/ValueModifier';

class Tagging extends React.Component {
  onTagValueChange = (selectedTagValue) => {
    const action = { tagCategory: this.props.selectedTagCategory, tagValue: selectedTagValue };
    if (this.findSelectedCat(this.props.selectedTagCategory).singleValue) {
      this.props.onTagValueChange(action);
    } else {
      this.props.onTagMultiValueChange(action);
    }
  }

  onTagCategoryChange = selectedTagCategory => this.props.onTagCategoryChange(selectedTagCategory);

  onTagDeleteClick = (tagCategory, tagValue) => {
    this.props.onTagDeleteClick({ tagCategory, tagValue });
  }

  getTagValues = () => (this.findSelectedCat(this.props.selectedTagCategory) && this.findSelectedCat(this.props.selectedTagCategory).values) || [];

  findSelectedCat = (selectedTagCategory = { id: undefined }) => this.props.tags.find(tag => (tag.id === selectedTagCategory.id));

  isSelectedCategoryMultiValue = (selectedTagCategory) => {
    (this.findSelectedCat(selectedTagCategory.id) &&
      this.findSelectedCat(selectedTagCategory.id).singleValue) === true;
  }

  tagCategories = this.props.tags.map(tag => ({ description: tag.description, id: tag.id, singleValue: tag.singleValue })) || [];

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={8} lg={6}>
            <TagModifier>
              <CategoryModifier
                selectedTagCategory={this.props.selectedTagCategory}
                onTagCategoryChange={this.props.onTagCategoryChange}
                tagCategories={this.tagCategories}
              />
              <ValueModifier
                onTagValueChange={this.onTagValueChange}
                selectedTagValue={this.props.selectedTagValue}
                multiValue={this.isSelectedCategoryMultiValue(this.props.selectedTagCategory)}
                tagValues={this.getTagValues()}
              />
            </TagModifier>
          </Col>
          <Col xs={12} md={4} lg={6}>
            <TagView assignedTags={this.props.assignedTags} onTagDeleteClick={this.onTagDeleteClick} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

Tagging.propTypes = {
  selectedTagCategory: PropTypes.object.isRequired,
  selectedTagValue: PropTypes.object.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object),
  assignedTags: PropTypes.arrayOf(PropTypes.object),
  onTagDeleteClick: PropTypes.func.isRequired,
  onTagCategoryChange: PropTypes.func.isRequired,
  onTagValueChange: PropTypes.func.isRequired,
  onTagMultiValueChange: PropTypes.func.isRequired,
};

export default Tagging;
