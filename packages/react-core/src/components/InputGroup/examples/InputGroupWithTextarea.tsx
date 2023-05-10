import React from 'react';
import { Button, TextArea, InputGroup, InputGroupItem } from '@patternfly/react-core';

export const InputGroupWithTextarea: React.FunctionComponent = () => (
  <React.Fragment>
    <InputGroup>
      <InputGroupItem isFill>
        <TextArea name="inputGroup-with-textarea" id="inputGroup-with-textarea" aria-label="textarea with button" />
      </InputGroupItem>
      <InputGroupItem>
        <Button id="textAreaButton2" variant="control">
          Button
        </Button>
      </InputGroupItem>
    </InputGroup>
  </React.Fragment>
);
