import React from 'react';
import PropTypes from 'prop-types';

const TreeViewIndents = ({ level }) => {
  const indents = [];

  if (level === 1) {
    return null;
  }
  for (let i = 1; i <= (level - 1) * 4; i++) {
    indents.push(<span className="indent" key={i} />);
  }

  return <React.Fragment>{indents}</React.Fragment>;
};

TreeViewIndents.propTypes = {
  level: PropTypes.number.isRequired
};

export default TreeViewIndents;
