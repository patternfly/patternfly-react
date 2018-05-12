import React from 'react';
import PropTypes from 'prop-types';
import ApplicationLauncherWrapper from './ApplicationLauncherWrapper';
import enhanceWithClickOutside from 'react-click-outside';

class StatefulApplicationLauncherWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  toggleLauncher = () => {
    this.setState({ open: !this.state.open });
  };

  handleClickOutside = () => {
    if (this.state.open === true) this.toggleLauncher();
  };

  render() {
    return (
      <ApplicationLauncherWrapper
        apps={this.props.apps}
        noIcons={this.props.noIcons}
        grid={this.props.grid}
        tooltip={this.props.tooltip}
        tooltipPlacement={this.props.tooltipPlacement}
        open={this.state.open}
        toggleLauncher={this.toggleLauncher}
      />
    );
  }
}
StatefulApplicationLauncherWrapper.propTypes = {
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
  tooltipPlacement: PropTypes.string
};
StatefulApplicationLauncherWrapper.defaultProps = {
  noIcons: false,
  tooltip: '',
  tooltipPlacement: 'left',
  grid: false,
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
export default enhanceWithClickOutside(StatefulApplicationLauncherWrapper);
