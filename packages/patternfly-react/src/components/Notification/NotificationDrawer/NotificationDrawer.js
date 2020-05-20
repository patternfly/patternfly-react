import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import NotificationDrawerTitle from './NotificationDrawerTitle';
import NotificationDrawerAccordion from './NotificationDrawerAccordion/NotificationDrawerAccordion';
import NotificationDrawerPanel from './NotificationDrawerAccordion/NotificationDrawerPanel';
import NotificationDrawerPanelAction from './NotificationDrawerAccordion/NotificationDrawerPanelAction';
import NotificationDrawerPanelActionLink from './NotificationDrawerAccordion/NotificationDrawerPanelActionLink';
import NotificationDrawerPanelBody from './NotificationDrawerAccordion/NotificationDrawerPanelBody';
import NotificationDrawerPanelCollapse from './NotificationDrawerAccordion/NotificationDrawerPanelCollapse';
import NotificationDrawerPanelCounter from './NotificationDrawerAccordion/NotificationDrawerPanelCounter';
import NotificationDrawerPanelHeading from './NotificationDrawerAccordion/NotificationDrawerPanelHeading';
import NotificationDrawerPanelTitle from './NotificationDrawerAccordion/NotificationDrawerPanelTitle';
import NotificationDrawerDropDown from './NotificationDrawerAccordion/NotificationDrawerDropDown';
import NotificationDrawerToggle from './NotificationDrawerToggle';
import NotificationDrawerEmptyState from './NotificationDrawerEmptyState';

const NotificationDrawer = ({ hide, expanded, children, className, ...props }) => {
  const classes = classNames(
    'drawer-pf drawer-alt-pf drawer-pf-notifications',
    { 'drawer-pf-expanded': expanded },
    { hide },
    className
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
NotificationDrawer.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Expanded bool */
  expanded: PropTypes.bool,
  /** Hide Bool */
  hide: PropTypes.bool
};
NotificationDrawer.defaultProps = {
  className: '',
  expanded: false,
  hide: false
};

NotificationDrawer.Accordion = NotificationDrawerAccordion;
NotificationDrawer.Panel = NotificationDrawerPanel;
NotificationDrawer.PanelAction = NotificationDrawerPanelAction;
NotificationDrawer.PanelActionLink = NotificationDrawerPanelActionLink;
NotificationDrawer.PanelBody = NotificationDrawerPanelBody;
NotificationDrawer.PanelCollapse = NotificationDrawerPanelCollapse;
NotificationDrawer.PanelCounter = NotificationDrawerPanelCounter;
NotificationDrawer.PanelHeading = NotificationDrawerPanelHeading;
NotificationDrawer.PanelTitle = NotificationDrawerPanelTitle;
NotificationDrawer.Title = NotificationDrawerTitle;
NotificationDrawer.Dropdown = NotificationDrawerDropDown;
NotificationDrawer.Toggle = NotificationDrawerToggle;
NotificationDrawer.EmptyState = NotificationDrawerEmptyState;

export default NotificationDrawer;
