import React from 'react';
import { Button, TextArea, InputGroup } from '@patternfly/react-core';

export const InputGroupWithTextarea: React.FunctionComponent = () => (
  <React.Fragment>
    <InputGroup>
      <TextArea name="inputGroup-with-textarea" id="inputGroup-with-textarea" aria-label="textarea with button" />
      <Button id="textAreaButton2" variant="control">
        Button
      </Button>
    </InputGroup>
  </React.Fragment>
);
