import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../Icon';

const NotificationDrawerTitle = ({ expandable, onCloseClick, onExpandClick, title, children, className, ...props }) => {
  const classes = classNames('drawer-pf-title', className);

  return (
    <div className={classes} {...props}>
      {expandable && <a className="drawer-pf-toggle-expand" onClick={onExpandClick} />}
      <a className="drawer-pf-close" onClick={onCloseClick}>
        <Icon name="close" />
      </a>
      <h3 className="text-center">{title}</h3>
      {children}
    </div>
  );
};

NotificationDrawerTitle.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Title prop */
  title: PropTypes.string,
  /** Close/Expand Functions */
  onCloseClick: PropTypes.func,
  onExpandClick: PropTypes.func,
  /** is the Drawer expandable prop */
  expandable: PropTypes.bool
};
NotificationDrawerTitle.defaultProps = {
  className: '',
  title: 'Notifications',
  onCloseClick: null,
  onExpandClick: null,
  children: null,
  expandable: true
};

export default NotificationDrawerTitle;
