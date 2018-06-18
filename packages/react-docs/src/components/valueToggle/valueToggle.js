import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.func.isRequired,
  defaultValue: PropTypes.bool
};

const defaultProps = {
  defaultValue: false
};

class ValueToggle extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {
    value: this.props.defaultValue
  };

  handleToggle = () => {
    this.setState(({ value }) => ({
      value: !value
    }));
  };

  render() {
    return this.props.children({
      value: this.state.value,
      toggle: this.handleToggle
    });
  }
}

export default ValueToggle;
