import React from 'react';
import PropTypes from 'prop-types';

const TreeViewIndents = ({ level }) => {
  let indents = [];

  if (level === 1) {
    return null;
  } else {
    for (let i = 1; i <= (level - 1) * 4; i++) {
      indents.push(<span className="indent" key={i} />);
    }
  }

  return <React.Fragment>{indents}</React.Fragment>;
};

TreeViewIndents.propTypes = {
  level: PropTypes.number
};

export default TreeViewIndents;
