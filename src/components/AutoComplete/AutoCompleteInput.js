import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl } from '../../index';

class AutoCompleteInput extends Component {
  componentDidMount() {
    this.ref && this.ref.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    this.ref && this.ref.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    this.props.onKeyPress(e);
  };

  render() {
    return (
      <FormControl
        inputRef={ref => {
          this.ref = ref;
        }}
        type="text"
        {...this.props.passedProps}
      />
    );
  }
}

AutoCompleteInput.propTypes = {
  passedProps: PropTypes.object.isRequired,
  onKeyPress: PropTypes.func.isRequired
};

export default AutoCompleteInput;
