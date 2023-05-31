import React from 'react';
import DollarSignIcon from '@patternfly/react-icons/dist/esm/icons/dollar-sign-icon';
import { Button, TextArea, InputGroup, InputGroupText, InputGroupItem, TextInput } from '@patternfly/react-core';

export const InputGroupWithSiblings: React.FunctionComponent = () => (
  <React.Fragment>
    <InputGroup>
      <InputGroupItem>
        <Button id="textAreaButton1" variant="control">
          Button
        </Button>
      </InputGroupItem>
      <InputGroupItem isFill>
        <TextArea name="textarea1" id="textarea1" aria-label="textarea with buttons" />
      </InputGroupItem>
      <InputGroupItem>
        <Button variant="control">Button</Button>
      </InputGroupItem>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupItem>
        <Button id="textAreaButton3" variant="control">
          Button
        </Button>
      </InputGroupItem>
      <InputGroupItem>
        <Button variant="control">Button</Button>
      </InputGroupItem>
      <InputGroupItem isFill>
        <TextArea name="textarea2" id="textarea2" aria-label="textarea with 3 buttons" />
      </InputGroupItem>
      <InputGroupItem>
        <Button variant="control">Button</Button>
      </InputGroupItem>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupText>
        <DollarSignIcon />
      </InputGroupText>
      <InputGroupItem isFill>
        <TextInput
          id="textInput-with-siblings"
          name="textInput-with-siblings"
          type="number"
          aria-label="Dollar amount input example"
        />
      </InputGroupItem>
      <InputGroupText>.00</InputGroupText>
    </InputGroup>
  </React.Fragment>
);
