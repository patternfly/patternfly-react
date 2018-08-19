import React from 'react';
import { TextInput } from '@patternfly/react-core';

class DisabledTextInput extends React.Component {
  static title = 'Disabled TextInput';

  render() {
    return <TextInput type="text" aria-label="disabled text input example" isDisabled />;
  }
}

export default DisabledTextInput;
