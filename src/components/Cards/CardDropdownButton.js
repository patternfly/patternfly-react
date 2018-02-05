import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton } from '../Button/';

const CardDropdownButton = ({ children, className, ...props }) => {
  const classes = ClassNames('card-pf-time-frame-filter', className);

  return (
    <DropdownButton className={classes} {...props}>
      {children}
    </DropdownButton>
  );
};
CardDropdownButton.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
export default CardDropdownButton;
