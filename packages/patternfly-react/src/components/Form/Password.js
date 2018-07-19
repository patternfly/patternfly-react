import React from 'react';
import { default as FormControl } from './FormControl';

function PasswordPropertyViolation(message) {
  this.message = message;
  this.name = 'PasswordPropertyViolation';
}

class Password extends React.Component {
  constructor(props) {
    if (props.value !== undefined) { // eslint-disable-line react/prop-types,prettier/prettier
      throw new PasswordPropertyViolation(
        'The `value` property is forbidden for password fields'
      );
    }
    super(props);
  }

  render() {
    return <FormControl type="password" {...this.props} />;
  }
}

export { Password as default };
