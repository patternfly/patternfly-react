import React from 'react';
import PropTypes from 'prop-types';

const NotificationInfoLeft = ({ text }) => <span className="date">{text}</span>;

NotificationInfoLeft.propTypes = {
  /** Text */
  text: PropTypes.string.isRequired
};

export default NotificationInfoLeft;
