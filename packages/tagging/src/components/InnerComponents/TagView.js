import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'patternfly-react';
import TagCategory from './TagCategory';

class TagView extends React.Component {
  generateTagCategories = tag => (
    <TagCategory
      key={tag.id}
      tagCategory={{ id: tag.id, description: tag.description }}
      tagValues={tag.tagValues}
      onTagDeleteClick={this.props.onTagDeleteClick}
    />
  );

  render() {
    const assignedTags = [...this.props.assignedTags];
    return (
      <React.Fragment>
        <Row>
          <Col lg={12}>
            <h2>{this.props.header}</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <ul className="list-inline">
              {assignedTags
                .sort((a, b) => (a.description < b.description ? -1 : 1))
                .map(this.generateTagCategories)}
            </ul>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
TagView.propTypes = {
  assignedTags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      tagValues: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          description: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    })
  ).isRequired,
  onTagDeleteClick: PropTypes.func.isRequired,
  header: PropTypes.string
};

TagView.defaultProps = {
  header: 'Assigned tags'
};

export default TagView;
