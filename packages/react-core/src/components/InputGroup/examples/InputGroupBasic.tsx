import React from 'react';
import AtIcon from '@patternfly/react-icons/dist/esm/icons/at-icon';
import {
  InputGroup,
  InputGroupText,
  InputGroupItem,
  TextInput,
  ValidatedOptions
} from '@patternfly/react-core';

export const InputGroupBasic: React.FunctionComponent = () => (
  <React.Fragment>
    <InputGroup>
      <InputGroupItem isFill>
        <TextInput id="textInput-basic-1" type="email" aria-label="email input field" />
      </InputGroupItem>
      <InputGroupItem isBox>
        <InputGroupText id="email-example">@example.com</InputGroupText>
      </InputGroupItem>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupItem isBox>
        <InputGroupText id="username">
          <AtIcon />
        </InputGroupText>
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
        <InputGroupText id="plain-example">
          %
        </InputGroupText>
      </InputGroupItem>
    </InputGroup>
  </React.Fragment>
);
