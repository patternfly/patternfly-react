import React from 'react';
import PropTypes from 'prop-types';

const NotificationInfoRight = ({ text }) => <span className="time">{text}</span>;

NotificationInfoRight.propTypes = {
  /** Text */
  text: PropTypes.string.isRequired
};

export default NotificationInfoRight;
