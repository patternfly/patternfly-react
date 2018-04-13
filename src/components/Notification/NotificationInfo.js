import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import NotificationInfoRight from './NotificationInfoRight';
import NotificationInfoLeft from './NotificationInfoLeft';

const NotificationInfo = ({ rightText, leftText, className, ...props }) => {
  const classes = classNames('drawer-pf-notification-info', className);

  return (
    <div className={classes}>
      <NotificationInfoLeft text={leftText} />
      <NotificationInfoRight text={rightText} />
    </div>
  );
};
NotificationInfo.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** leftText and rightText Strings */
  leftText: PropTypes.string,
  rightText: PropTypes.string
};
NotificationInfo.defaultProps = {
  className: '',
  leftText: '',
  rightText: ''
};

export default NotificationInfo;
