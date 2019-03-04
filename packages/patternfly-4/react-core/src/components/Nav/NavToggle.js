import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.func.isRequired,
  defaultValue: PropTypes.bool,
  groupId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onToggle: PropTypes.func
};

const defaultProps = {
  defaultValue: false,
  groupId: 0,
  onToggle: () => undefined
};

class NavToggle extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;
  state = {
    toggleValue: this.props.defaultValue
  };
  componentDidUpdate(prevProps) {
    if (this.props.isExpanded !== prevProps.isExpanded) {
      this.setState({ toggleValue: this.props.isExpanded });
    }
  }

  handleToggle = e => {
    // Item events can bubble up, ignore those
    if (e.target.getAttribute('data-component') !== 'pf-nav-expandable') {
      return;
    }
    const { toggleValue } = this.state;
    const { groupId, onToggle } = this.props;
    this.setState({
      toggleValue: !toggleValue
    });
    onToggle(e, groupId, !toggleValue);
  };

  render() {
    return this.props.children({
      toggleValue: this.state.toggleValue,
      toggle: this.handleToggle
    });
  }
}

export default NavToggle;
