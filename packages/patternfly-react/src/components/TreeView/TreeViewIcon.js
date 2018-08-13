import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TreeViewIcon = ({ icon }) => {
  const classes = classNames('icon node-icon indent', icon);
  return <span className={classes} aria-hidden />;
};

TreeViewIcon.propTypes = {
  icon: PropTypes.string
};

TreeViewIcon.defaultProps = {
  icon: 'fa fa-folder'
};

export default TreeViewIcon;
