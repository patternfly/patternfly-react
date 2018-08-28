import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

/**
 * EmptyStateIcon renders element
 */
const EmptyStateIcon = ({ className, type, name, ...props }) => {
  const classes = classNames('blank-slate-pf-icon', className);

  return (
    <div className={classes}>
      <Icon type={type} name={name} {...props} />
    </div>
  );
};
EmptyStateIcon.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Icon type (pf or fa) */
  type: PropTypes.string,
  /** Name of the icon font */
  name: PropTypes.string
};
EmptyStateIcon.defaultProps = {
  type: 'pf',
  name: 'add-circle-o',
  className: ''
};
export default EmptyStateIcon;
