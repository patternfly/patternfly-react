import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import EmptyStateIcon from './EmptyStateIcon';
import EmptyStateTitle from './EmptyStateTitle';
import EmptyStateInfo from './EmptyStateInfo';
import EmptyStateHelp from './EmptyStateHelp';
import EmptyStateAction from './EmptyStateAction';

/**
 * Empty State Component for Patternfly React
 */
const EmptyState = ({ children, className, ...props }) => {
  const classes = classNames('blank-slate-pf', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
EmptyState.propTypes = {
  /** Child nodes */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
EmptyState.defaultProps = {
  className: ''
};

EmptyState.Title = EmptyStateTitle;
EmptyState.Icon = EmptyStateIcon;
EmptyState.Info = EmptyStateInfo;
EmptyState.Help = EmptyStateHelp;
EmptyState.Action = EmptyStateAction;

export default EmptyState;
