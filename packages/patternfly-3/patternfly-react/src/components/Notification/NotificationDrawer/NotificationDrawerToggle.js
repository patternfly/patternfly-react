import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger } from '../../OverlayTrigger';
import { Tooltip } from '../../Tooltip';
import { Icon } from '../../Icon';
import { Button } from '../../Button';

const NotificationDrawerToggle = ({ hasUnreadMessages, onClick }) => {
  const iconName = hasUnreadMessages ? 'bell' : 'bell-o';
  const tooltip = <Tooltip id="tooltip">Notifications</Tooltip>;

  return (
    <OverlayTrigger placement="bottom" id="notifications-toggle-icon" overlay={tooltip}>
      <Button onClick={onClick} bsStyle="link" className="nav-item-iconic">
        <Icon name={iconName} aria-describedby="tooltip" />
      </Button>
    </OverlayTrigger>
  );
};
NotificationDrawerToggle.propTypes = {
  /** has Unread Messages Bool */
  hasUnreadMessages: PropTypes.bool,
  /** onClick func */
  onClick: PropTypes.func
};
NotificationDrawerToggle.defaultProps = {
  hasUnreadMessages: true,
  onClick: null
};

export default NotificationDrawerToggle;
