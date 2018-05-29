import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

class TagCategory extends React.Component {

  generateTag = tagValue =>
    (<Tag
      key={tagValue.id}
      tagCategory={this.props.tagCategory}
      tagValue={tagValue}
      onTagDeleteClick={this.props.onTagDeleteClick}
      truncate={this.props.valueTruncate}
    />);

  render() {
    let values = [...this.props.tagValues];
    return (
      <ul className="tag-category list-inline">
        <div className="category-label" title={this.props.tagCategory.description}>{this.props.categoryTruncate(this.props.tagCategory.description)}</div>
        {values.sort((a,b) => a.description < b.description ? -1 : 1).map(tagValue => this.generateTag(tagValue))}
      </ul>
    );
  }
}

TagCategory.propTypes = {
  onTagDeleteClick: PropTypes.func.isRequired,
  tagCategory: PropTypes.object.isRequired,
  tagValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  categoryTruncate: PropTypes.func,
  valueTruncate: PropTypes.func,
};

TagCategory.defaultProps = {
  categoryTruncate: str => ( str.length > 18 ? str.substring(0, 18) + '...' : str ),
  valueTruncate: str => ( str.length > 18 ? str.substring(0, 18) + '...' : str ),
}

export default TagCategory;
