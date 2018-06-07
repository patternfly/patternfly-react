import * as React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'patternfly-react';


const Tag = ({
  onTagDeleteClick, tagCategory, tagValue, truncate,
}) => (
  <li key={tagValue.id} className="tag">
    <Label
      key={tagValue.id}
      bsStyle="primary"
      onRemoveClick={() => onTagDeleteClick(tagCategory, tagValue)}
      className="tagColor"
      title={tagValue.description}
    >
      {truncate(tagValue.description)}
    </Label>
  </li>
);

Tag.propTypes = {
  onTagDeleteClick: PropTypes.func.isRequired,
  tagCategory: PropTypes.PropTypes.shape({ id: PropTypes.number, description: PropTypes.string }).isRequired,
  tagValue: PropTypes.object.isRequired,
  truncate: PropTypes.func,
};

export default Tag;
