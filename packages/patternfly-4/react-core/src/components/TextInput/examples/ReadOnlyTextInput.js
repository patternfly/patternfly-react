import React from 'react';
import { TextInput } from '../index';

class ReadOnlyTextInput extends React.Component {
  state = {
    readOnly: 'read only text input example'
  };

  render() {
    const { readOnly } = this.state;

    return <TextInput value={readOnly} type="text" isReadOnly aria-label="readonly input example" />;
  }
}

export default ReadOnlyTextInput;
