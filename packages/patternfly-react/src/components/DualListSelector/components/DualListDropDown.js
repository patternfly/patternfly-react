import React from 'react';
import PropTypes from 'prop-types';
import UUID from 'uuid/v1';
import { DropdownKebab } from '../../../index';

const DualListDropDown = ({ id, children }) => {
  const kebabID = id || `dual-list-pf-kebab-${UUID()}`;
  return children ? (
    <DropdownKebab id={kebabID} pullRight>
      {children}
    </DropdownKebab>
  ) : null;
};

DualListDropDown.propTypes = {
  /** The menu items */
  children: PropTypes.node,
  /** ID for the kebab container */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DualListDropDown.defaultProps = {
  children: null,
  id: null
};

export default DualListDropDown;
