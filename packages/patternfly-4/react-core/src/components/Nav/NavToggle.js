import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.func.isRequired,
  defaultValue: PropTypes.bool,
  groupId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onToggle: PropTypes.func
};

const defaultProps = {
  defaultValue: true,
  groupId: 0,
  onToggle: () => undefined
};

class NavToggle extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;
  state = {
    value: this.props.defaultValue
  };

  handleToggle = e => {
    // Item events can bubble up, ignore those
    if (e.target.getAttribute('data-component') !== 'pf-nav-expandable') {
      return;
    }
    const { value } = this.state;
    const { groupId, onToggle } = this.props;
    this.setState({
      value: !value
    });
    onToggle(e, groupId, !value);
  };

  render() {
    return this.props.children({
      value: this.state.value,
      toggle: this.handleToggle
    });
  }
}

export default NavToggle;
