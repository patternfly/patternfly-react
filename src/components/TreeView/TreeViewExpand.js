import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TreeViewExpand = ({ nodes, expanded, toggleExpand }) => {
  const hasChildren = nodes.length > 0;
  const classes = cx(
    'icon indent',
    { 'expand-icon fa fa-angle-right': hasChildren && !expanded },
    { 'expand-icon fa fa-angle-down': hasChildren && expanded },
    { glyphicon: !hasChildren }
  );

  return <span onClick={toggleExpand} className={classes} />;
};

TreeViewExpand.propTypes = {
  nodes: PropTypes.array,
  expanded: PropTypes.bool,
  toggleExpand: PropTypes.func
};

TreeViewExpand.defaultProps = {
  nodes: []
};

export default TreeViewExpand;
