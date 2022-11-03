import React from 'react';
import { Checkbox, TextInput } from '@patternfly/react-core';

export const TextInputReadOnly: React.FunctionComponent = () => {
  const [isPlainChecked, setIsPlainChecked] = React.useState(false);
  return (
    <>
      <div style={{ marginBottom: '12px' }}>
        <Checkbox
          id="isPlain"
          key="isPlain"
          label="Plain read only variant"
          isChecked={isPlainChecked}
          onChange={checked => setIsPlainChecked(checked)}
        />
      </div>
      <TextInput
        value="read only text input example"
        type="text"
        readOnlyVariant={isPlainChecked ? 'plain' : 'default'}
        aria-label="readonly input example"
      />
    </>
  );
};
