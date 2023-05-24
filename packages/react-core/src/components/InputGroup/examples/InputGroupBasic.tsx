import React from 'react';
import AtIcon from '@patternfly/react-icons/dist/esm/icons/at-icon';
import { InputGroup, InputGroupItem, TextInput, ValidatedOptions } from '@patternfly/react-core';

export const InputGroupBasic: React.FunctionComponent = () => (
  <React.Fragment>
    <InputGroup>
      <InputGroupItem isFill>
        <TextInput id="textInput-basic-1" type="email" aria-label="email input field" />
      </InputGroupItem>
      <InputGroupItem isBox>@example.com</InputGroupItem>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupItem isBox>
        <AtIcon />
      </InputGroupItem>
      <InputGroupItem isFill>
        <TextInput
          validated={ValidatedOptions.error}
          id="textInput-basic-2"
          type="email"
          aria-label="Error state username example"
        />
      </InputGroupItem>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupItem isFill>
        <TextInput name="textInput-basic-3" id="textInput-basic-3" type="text" aria-label="percentage" />
      </InputGroupItem>
      <InputGroupItem isPlain isBox>
        %
      </InputGroupItem>
    </InputGroup>
  </React.Fragment>
);
