import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown } from '../Dropdown';
import { noop } from '../../common/helpers';
import ApplicationLauncherToggle from './ApplicationLauncherToggle';
import ApplicationLauncherItem from './ApplicationLauncherItem';

const ApplicationLauncher = ({
  open,
  grid,
  tooltip,
  tooltipPlacement,
  children,
  toggleLauncher,
  className,
  ...propTypes
}) => {
  const classes = classNames(
    'applauncher-pf dropdown',
    {
      'applauncher-pf-block-list': grid
    },
    { open }
  );
  return (
    <li className={classes}>
      <ApplicationLauncherToggle
        tooltip={tooltip}
        tooltipPlacement={tooltipPlacement}
        onClick={() => toggleLauncher()}
        open={open}
      />
      <Dropdown.Menu className="dropdown-menu-right">{children}</Dropdown.Menu>
    </li>
  );
};

ApplicationLauncher.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Children Node */
  children: PropTypes.node.isRequired,
  /** Toggle Tooltip */
  tooltip: PropTypes.string,
  /** tooltipPlacement */
  tooltipPlacement: PropTypes.string,
  /** Application Launcher Type (Default List) */
  grid: PropTypes.bool,
  /** open bool */
  open: PropTypes.bool,
  /** Toggle launcher func */
  toggleLauncher: PropTypes.func
};
ApplicationLauncher.defaultProps = {
  className: '',
  tooltip: '',
  tooltipPlacement: 'left',
  toggleLauncher: noop,
  grid: false,
  open: false
};

ApplicationLauncher.Toggle = ApplicationLauncherToggle;
ApplicationLauncher.Item = ApplicationLauncherItem;

export default ApplicationLauncher;
