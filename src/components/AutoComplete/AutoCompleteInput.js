import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl } from '../../index';

class AutoCompleteInput extends Component {
  componentDidMount() {
    this.ref.addEventListener('keydown', this.handeKeyPress);
  }

  componentWillUnmount() {
    this.ref.removeEventListener('keydown', this.handeKeyPress);
  }

  handeKeyPress = e => {
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
