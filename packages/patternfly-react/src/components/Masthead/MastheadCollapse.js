import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Masthead
 */
const MastheadCollapse = ({ className, children, ...props }) => {
  const menusClasses = classNames('collapse', 'navbar-collapse', className);

  return (
    <nav className={menusClasses} {...props}>
      <ul className="nav navbar-nav navbar-right navbar-iconic navbar-utility">{children}</ul>
    </nav>
  );
};

MastheadCollapse.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Children (likely MastheadDropdown's) */
  children: PropTypes.node
};

MastheadCollapse.defaultProps = {
  className: '',
  children: null
};

export default MastheadCollapse;
