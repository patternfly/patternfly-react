import * as React from 'react';
import Label from '../Label/Label';
import PropTypes from 'prop-types';

const Tag = ({ name, value }) => (
  <span className="tag-pair">
    <Label bsStyle="primary" className="tag-key">
      {name}
    </Label>
    <Label bsStyle="primary" className="tag-value">
      {value || ''}
    </Label>
  </span>
);

Tag.propTypes = {
  /** Label name */
  name: PropTypes.string,
  /** Label value  */
  value: PropTypes.string
};

Tag.defaultProps = {
  name: '',
  value: ''
};

export default Tag;
