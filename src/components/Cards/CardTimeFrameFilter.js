import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const CardTimeFrameFilter = ({ children, className, ...props }) => {
  const classes = ClassNames('dropdown card-pf-time-frame-filter', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
CardTimeFrameFilter.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
export default CardTimeFrameFilter;
