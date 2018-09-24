import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PropertyItem from './PropertyItem';

const PropertiesSidePanel = ({ children, className, ...otherProps }) => {
  const classes = classNames('properties-side-panel-pf', className);

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

PropertiesSidePanel.propTypes = {
  /** Children, should be PropertyItem items plus any action buttons, etc */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

PropertiesSidePanel.defaultProps = {
  children: null,
  className: ''
};

PropertiesSidePanel.Property = PropertyItem;

export default PropertiesSidePanel;
