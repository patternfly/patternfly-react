import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from '../../common/helpers';

const TreeViewExpand = ({ nodes, expanded, toggleExpand }) => {
  const hasChildren = nodes.length > 0;
  const classes = classNames(
    'icon indent',
    { 'expand-icon fa fa-angle-right': hasChildren && !expanded },
    { 'expand-icon fa fa-angle-down': hasChildren && expanded },
    { glyphicon: !hasChildren }
  );

  return <span onClick={toggleExpand} className={classes} aria-hidden />;
};

TreeViewExpand.propTypes = {
  nodes: PropTypes.array,
  expanded: PropTypes.bool,
  toggleExpand: PropTypes.func
};

TreeViewExpand.defaultProps = {
  nodes: [],
  expanded: false,
  toggleExpand: noop
};

export default TreeViewExpand;
