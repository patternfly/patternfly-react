import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';

/**
 * Masthead
 */
const MastheadDropdown = ({
  className,
  id,
  title,
  noCaret,
  children,
  ...props
}) => {
  const dropdownComponentClass = dropdownProps => (
    <li className={dropdownProps.className}>{dropdownProps.children}</li>
  );

  return (
    <Dropdown
      id={id}
      componentClass={dropdownComponentClass}
      className={className}
      {...props}
    >
      <Dropdown.Toggle
        className="nav-item-iconic"
        bsStyle="link"
        noCaret={noCaret}
      >
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu>{children}</Dropdown.Menu>
    </Dropdown>
  );
};

MastheadDropdown.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** ID of dropdown */
  id: PropTypes.string.isRequired,
  /** Title of dropdown */
  title: PropTypes.node,
  /** Children (likely MenuItem's) */
  children: PropTypes.node,
  /** Caret in Dropdown */
  noCaret: PropTypes.bool
};

MastheadDropdown.defaultProps = {
  className: '',
  title: '',
  children: null,
  noCaret: false
};

export default MastheadDropdown;
