import { FunctionComponent, Fragment } from 'react';
import { Button, TextArea, InputGroup, InputGroupItem } from '@patternfly/react-core';

export const InputGroupWithTextarea: FunctionComponent = () => (
  <Fragment>
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
  </Fragment>
);
