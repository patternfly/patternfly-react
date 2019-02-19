import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onSelect: PropTypes.func
};
const defaultProps = {
  children: null,
  className: '',
  onSelect: null
};

const SelectColumn = ({ children, className, onSelect, ...props }) => (
  <React.Fragment>
    <input {...props} type="checkbox" onChange={onSelect} />
    {children}
  </React.Fragment>
);

SelectColumn.propTypes = propTypes;
SelectColumn.defaultProps = defaultProps;

export default SelectColumn;
