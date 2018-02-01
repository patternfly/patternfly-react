import React from 'react';
import PropTypes from 'prop-types';

const TreeViewTextAndIconWrapper = ({ children, handleSelect }) => (
  <span onClick={handleSelect}>{children}</span>
);

TreeViewTextAndIconWrapper.propTypes = {
  children: PropTypes.node,
  handleSelect: PropTypes.func
};

export default TreeViewTextAndIconWrapper;
