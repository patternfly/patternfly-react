import React from 'react';
import PropTypes from 'prop-types';

const OptionsMenuItemsGroup = ({
  children,
  className,
  ariaLabel,
}) => (
  <li>
    <ul className={className} aria-label={ariaLabel}>
      {children}
    </ul>
  </li>
);

OptionsMenuItemsGroup.propTypes = {
  /** Content to be rendered in the Options menu items component */
  children: PropTypes.node,
  /** Classes applied to root element of the Options menu items group */
  className: PropTypes.string,
  /** Provides an accessible name for the Options menu items group */
  ariaLabel: PropTypes.string,
};

OptionsMenuItemsGroup.defaultValues = {
  children: null,
  className: '',
  ariaLabel: '',
};

export default OptionsMenuItemsGroup;
