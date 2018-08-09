import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../../../Dropdown';
import { Icon } from '../../../Icon';

const NotificationDrawerDropDown = ({ id, children, className, pullRight, ...props }) => {
  const classes = classNames('dropdown', { 'pull-right': pullRight }, 'dropdown-kebab-pf', className);

  return (
    <Dropdown className={classes} id={id}>
      <Dropdown.Toggle bsStyle="link" noCaret>
        <Icon name="ellipsis-v" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-right">{children}</Dropdown.Menu>
    </Dropdown>
  );
};
NotificationDrawerDropDown.propTypes = {
  /** dropdown button id */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** menu right aligned */
  pullRight: PropTypes.bool
};
NotificationDrawerDropDown.defaultProps = {
  pullRight: true,
  id: null,
  className: ''
};
export default NotificationDrawerDropDown;
