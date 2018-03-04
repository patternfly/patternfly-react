import React from 'react';
import PropTypes from 'prop-types';

const TreeView2Indent = ({ level }) => {
  const indents = [];

  for (let i = 1; i < level; i++) {
    indents.push(<span className="indent" key={i} />);
  }

  return indents;
};

TreeView2Indent.propTypes = {
  /** level of indentation  */
  level: PropTypes.number
};

TreeView2Indent.defaultProps = {
  level: 1
};

export default TreeView2Indent;
