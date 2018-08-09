import React from 'react';
import PropTypes from 'prop-types';
import ApplicationLauncher from '../ApplicationLauncher';
import ApplicationLauncherItem from '../ApplicationLauncherItem';
import { noop } from '../../../common/helpers';

const ApplicationLauncherWrapper = ({ apps, noIcons, grid, tooltip, tooltipPlacement, toggleLauncher, open }) => {
  const renderApps = apps.map((app, i) => (
    <ApplicationLauncherItem
      key={i}
      icon={app.icon}
      title={app.title}
      tooltip={app.tooltip}
      tooltipPlacement={tooltipPlacement}
      onClick={app.onClick}
      noIcons={noIcons}
    />
  ));

  return (
    <ApplicationLauncher
      grid={grid}
      tooltip={tooltip}
      tooltipPlacement={tooltipPlacement}
      open={open}
      toggleLauncher={toggleLauncher}
    >
      {renderApps}
    </ApplicationLauncher>
  );
};
ApplicationLauncherWrapper.propTypes = {
  /** Array of App Objects */
  apps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.string,
      tooltip: PropTypes.string,
      onClick: PropTypes.func
    })
  ),
  /** No Icons Bool */
  noIcons: PropTypes.bool,
  /** Grid instead of List (List is Default) */
  grid: PropTypes.bool,
  /** Toggle Tooltip */
  tooltip: PropTypes.string,
  /** Tooltip Placement */
  tooltipPlacement: PropTypes.string,
  /** Launcher open bool */
  open: PropTypes.bool.isRequired,
  /** Toggle launcher func */
  toggleLauncher: PropTypes.func
};
ApplicationLauncherWrapper.defaultProps = {
  noIcons: false,
  tooltip: '',
  tooltipPlacement: 'left',
  grid: false,
  toggleLauncher: noop,
  apps: [
    {
      title: 'Royal',
      icon: 'virtual-machine',
      tooltip: 'Tooltip!',
      onClick: e => {
        e.preventDefault();
      }
    }
  ]
};

export default ApplicationLauncherWrapper;
