import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'patternfly-react';
import TagCategory from './TagCategory';

class TagView extends React.Component {
  generateTagCategories = tag =>
    (<TagCategory
      key={tag.tagCategory.id}
      tagCategory={tag.tagCategory}
      tagValues={tag.tagValues}
      onTagDeleteClick={this.props.onTagDeleteClick}
    />);

  render() {
    return (
      <React.Fragment>
        <Row><Col lg={12}><h2>{this.props.header}</h2></Col></Row>
        <Row>
          <Col lg={12}>
            <ul className="list-inline">
              {this.props.assignedTags.map(this.generateTagCategories)}
            </ul>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

TagView.propTypes = {
  assignedTags: PropTypes.arrayOf(PropTypes.object),
  onTagDeleteClick: PropTypes.func.isRequired,
  header: PropTypes.string,
};

TagView.defaultProps = {
  header: 'Assigned tags',
};

export default TagView;
