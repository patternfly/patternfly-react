import React from 'react';
import { TextInput } from '@patternfly/react-core';

export const StartTruncatedTextInput: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  );
  return (
    <TextInput
      isStartTruncated
      value={value}
      type="text"
      onChange={(_event, value) => setValue(value)}
      aria-label="start-truncated text input example"
    />
  );
};
