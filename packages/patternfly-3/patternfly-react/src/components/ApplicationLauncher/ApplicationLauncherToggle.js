import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger } from '../OverlayTrigger';
import { Tooltip } from '../Tooltip';
import { Icon } from '../Icon';
import { Button } from '../Button';

const ApplicationLauncherToggle = ({ open, tooltip, onClick, tooltipPlacement }) => {
  if (tooltip)
    return (
      <OverlayTrigger
        placement={tooltipPlacement}
        id="applauncher-pf-block-list"
        overlay={<Tooltip id={tooltip}>{tooltip}</Tooltip>}
      >
        <Button onClick={onClick} bsStyle="link" className="nav-item-iconic dropdown-toggle" aria-expanded={open}>
          <Icon name="th applauncher-pf-icon" />
        </Button>
      </OverlayTrigger>
    );
  return (
    <Button onClick={onClick} bsStyle="link" className="nav-item-iconic dropdown-toggle" aria-expanded={open}>
      <Icon name="th applauncher-pf-icon" />
      <span className="dropdown-title">
        <span className="applauncher-pf-title">
          Application Launcher
          <span className="caret" aria-hidden="true" />
        </span>
      </span>
    </Button>
  );
};
ApplicationLauncherToggle.propTypes = {
  /** onClick func */
  onClick: PropTypes.func,
  /** tooltipPlacement */
  tooltipPlacement: PropTypes.string,
  /** Toggle Tooltip */
  tooltip: PropTypes.string,
  /** is Open bool */
  open: PropTypes.bool.isRequired
};
ApplicationLauncherToggle.defaultProps = {
  onClick: null,
  tooltipPlacement: 'bottom',
  tooltip: ''
};

export default ApplicationLauncherToggle;
