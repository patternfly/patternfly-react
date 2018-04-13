import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationDrawerPanelCounter = ({ text, className, ...props }) => {
  const classes = classNames('panel-counter', className);

  return (
    <span className={classes} {...props}>
      {text}
    </span>
  );
};
NotificationDrawerPanelCounter.propTypes = {
  /** Text prop for the Panel Counter */
  text: PropTypes.string,
  /** Additional element css classes */
  className: PropTypes.string
};
NotificationDrawerPanelCounter.defaultProps = {
  className: '',
  text: ''
};

export default NotificationDrawerPanelCounter;
