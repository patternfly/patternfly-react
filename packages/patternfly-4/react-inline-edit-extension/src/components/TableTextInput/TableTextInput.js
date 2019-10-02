import React from 'react';
import { TextInput } from '@patternfly/react-core';
import PropTypes from 'prop-types';

const textInputProptypes = { ...TextInput.propTypes };
const textInputDefaultProptypes = { ...TextInput.defaultProps };
[textInputProptypes, textInputDefaultProptypes].forEach(types => {
  ['value', 'onChange'].forEach(value => {
    delete types[value];
  });
});

const propTypes = {
  ...textInputProptypes,
  defaultValue: PropTypes.string,
  onBlur: PropTypes.func,
  autoFocus: PropTypes.bool
};

const defaultProps = {
  ...textInputDefaultProptypes,
  defaultValue: null,
  onBlur: null,
  autoFocus: false
};

class TableTextInput extends React.Component {
  handleBlur = event => {
    this.props.onBlur(event.currentTarget.value, event);
  };

  render() {
    const { defaultValue, onBlur, autoFocus, value, onChange, ...textInputProps } = this.props;
    return (
      <React.Fragment>
        <TextInput
          {...textInputProps}
          value={undefined}
          defaultValue={defaultValue}
          onBlur={this.handleBlur}
          autoFocus={autoFocus}
        />
      </React.Fragment>
    );
  }
}

TableTextInput.propTypes = propTypes;
TableTextInput.defaultProps = defaultProps;

export default TableTextInput;
