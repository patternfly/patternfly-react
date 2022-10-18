import React from 'react';
import { TextArea } from '@patternfly/react-core';

export const TextAreaIconSprite: React.FunctionComponent = () => {
  const [success, setSuccess] = React.useState('');
  const [warning, setWarning] = React.useState('');
  const [error, setError] = React.useState('');

  return (
    <>
      <TextArea
        validated={'success'}
        isIconSprite
        type="text"
        onChange={value => setSuccess(value)}
        value={success}
        aria-label="success icon sprite text area example"
      />
      <br />
      <br />
      <TextArea
        validated={'warning'}
        isIconSprite
        type="text"
        onChange={value => setWarning(value)}
        value={warning}
        aria-label="warning icon sprite text area example"
      />
      <br />
      <br />
      <TextArea
        validated={'error'}
        isIconSprite
        type="text"
        onChange={value => setError(value)}
        value={error}
        aria-label="error icon sprite text area example"
      />
    </>
  );
};
