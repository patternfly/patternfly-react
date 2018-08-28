import React from 'react';
import PropTypes from 'prop-types';
import { EmptyState, EmptyStateIcon, EmptyStateTitle } from '../../EmptyState';

const NotificationDrawerEmptyState = ({ title, className, ...props }) => (
  <EmptyState>
    <EmptyStateIcon name="info" />
    <EmptyStateTitle>{title}</EmptyStateTitle>
  </EmptyState>
);
NotificationDrawerEmptyState.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Title */
  title: PropTypes.string
};
NotificationDrawerEmptyState.defaultProps = {
  className: '',
  title: 'No Notifications Available'
};

export default NotificationDrawerEmptyState;
