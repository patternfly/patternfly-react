import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PropertyItem = ({ className, label, value, ...otherProps }) => {
  const classes = classNames('properties-side-panel-pf-property', className);

  return (
    <div className={classes} {...otherProps}>
      <h5 className="properties-side-panel-pf-property-label">{label}</h5>
      <div className="properties-side-panel-pf-property-value">{value}</div>
    </div>
  );
};

PropertyItem.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Label for the property */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Value of the property */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

PropertyItem.defaultProps = {
  className: '',
  value: null
};

export default PropertyItem;
