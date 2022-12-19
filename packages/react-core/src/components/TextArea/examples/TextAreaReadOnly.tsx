import React from 'react';
import { Checkbox, TextArea } from '@patternfly/react-core';

export const TextAreaReadOnly: React.FunctionComponent = () => {
  const [isPlainChecked, setIsPlainChecked] = React.useState(false);

  return (
    <React.Fragment>
      <div style={{ marginBottom: '12px' }}>
        <Checkbox
          id="isPlain"
          key="isPlain"
          label="Plain read only variant"
          isChecked={isPlainChecked}
          onChange={checked => setIsPlainChecked(checked)}
        />
      </div>
      <TextArea
        aria-label="read only text area example"
        value="read only text area example"
        readOnlyVariant={isPlainChecked ? 'plain' : 'default'}
      />
    </React.Fragment>
  );
};
