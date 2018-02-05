import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from '../Button/';

const CardTimeFrameFilter = ({ children, className, ...props }) => {
  const classes = ClassNames('dropdown card-pf-time-frame-filter', className);

  return (
    <ButtonGroup className={classes} {...props} bsClass=" ">
      {children}
    </ButtonGroup>
  );
};
CardTimeFrameFilter.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
export default CardTimeFrameFilter;
