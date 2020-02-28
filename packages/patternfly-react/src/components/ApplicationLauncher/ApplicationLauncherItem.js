import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '../Tooltip';
import { OverlayTrigger } from '../OverlayTrigger';
import { Icon } from '../Icon';

const ApplicationLauncherItem = ({ onClick, tooltip, tooltipPlacement, title, icon, noIcons, className, ...props }) => {
  const classes = classNames('applauncher-pf-item', className);

  if (tooltip !== null) {
    return (
      <OverlayTrigger
        overlay={<Tooltip id={title}>{tooltip}</Tooltip>}
        placement={tooltipPlacement}
        trigger={['hover', 'focus']}
        rootClose={false}
      >
        <li className={classes} role="presentation">
          <a className="applauncher-pf-link" href="#" onClick={e => onClick(e)} role="menuitem">
            {!noIcons && <Icon type="pf" name={icon} className="applauncher-pf-link-icon" />}
            <span className="applauncher-pf-link-title">{title}</span>
          </a>
        </li>
      </OverlayTrigger>
    );
  }
  return (
    <li className={classes} role="presentation">
      <a className="applauncher-pf-link" href="#" onClick={e => onClick(e)} role="menuitem">
        {!noIcons && <Icon type="pf" name={icon} className="applauncher-pf-link-icon" />}
        <span className="applauncher-pf-link-title">{title}</span>
      </a>
    </li>
  );
};
ApplicationLauncherItem.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** onClick func */
  onClick: PropTypes.func,
  /** Title String */
  title: PropTypes.string.isRequired,
  /** Icon Type */
  icon: PropTypes.string.isRequired,
  /** App Tooltip */
  tooltip: PropTypes.string,
  /** Tooltip Placement */
  tooltipPlacement: PropTypes.string,
  /** No Icons Bool */
  noIcons: PropTypes.bool
};
ApplicationLauncherItem.defaultProps = {
  className: '',
  onClick: null,
  noIcons: false,
  tooltipPlacement: 'left',
  tooltip: null
};
export default ApplicationLauncherItem;
