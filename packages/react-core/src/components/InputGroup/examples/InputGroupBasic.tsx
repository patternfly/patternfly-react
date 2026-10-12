import { Fragment } from 'react';
import AtIcon from '@rh-felt/react-icons/dist/esm/icons/at-icon';
import { InputGroup, InputGroupText, InputGroupItem, TextInput, ValidatedOptions } from '@rh-felt/react-core';

export const InputGroupBasic: React.FunctionComponent = () => (
  <Fragment>
    <InputGroup>
      <InputGroupItem isFill>
        <TextInput id="textInput-basic-1" type="email" aria-label="email input field" />
      </InputGroupItem>
      <InputGroupText id="email-example">@example.com</InputGroupText>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupText id="username">
        <AtIcon />
      </InputGroupText>
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
      <InputGroupText id="plain-example" isPlain>
        %
      </InputGroupText>
    </InputGroup>
  </Fragment>
);
