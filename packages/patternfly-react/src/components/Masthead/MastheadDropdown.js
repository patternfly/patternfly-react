import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownButton } from '../Button';

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
  const dropdownClasses = classNames(
    'dropdown-toggle',
    'nav-item-iconic',
    className
  );

  return (
    <li className="dropdown" {...props}>
      <DropdownButton
        id={id}
        className={dropdownClasses}
        bsStyle="link"
        title={title}
        noCaret={noCaret}
      >
        {children}
      </DropdownButton>
    </li>
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
