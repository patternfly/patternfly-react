import React from 'react';
import { TextInput } from '@patternfly/react-core';

export const LeftTruncatedTextInput: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  );
  return (
    <TextInput
      isLeftTruncated
      value={value}
      type="text"
      onChange={value => setValue(value)}
      aria-label="left-truncated text input example"
    />
  );
};
