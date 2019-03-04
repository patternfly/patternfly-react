import React from 'react';
import { DollarSignIcon, AtIcon, CalendarAltIcon, SearchIcon, QuestionCircleIcon } from '@patternfly/react-icons';
import {
  Button,
  TextArea,
  InputGroup,
  InputGroupText,
  TextInput,
  Dropdown,
  DropdownToggle,
  Popover
} from '@patternfly/react-core';

class SimpleInputGroups extends React.Component {
  render() {
    return (
      <React.Fragment>
        <InputGroup>
          <Button id="textAreaButton1" variant="secondary">
            Button
          </Button>
          <TextArea name="textarea1" id="textarea1" aria-label="textarea with buttons" />
          <Button variant="tertiary">Button</Button>
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <TextArea name="textarea2" id="textarea2" aria-label="textarea with button" />
          <Button id="textAreaButton2" variant="tertiary">
            Button
          </Button>
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <Button id="textAreaButton3" variant="primary">
            Button
          </Button>
          <Button variant="secondary">Button</Button>
          <TextArea name="textarea3" id="textarea3" aria-label="textarea with 3 buttons" />
          <Button variant="tertiary">Button</Button>
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <Dropdown onSelect={() => {}} toggle={<DropdownToggle onToggle={() => {}}>Dropdown</DropdownToggle>}>
            Dropdown
          </Dropdown>
          <TextInput id="textInput3" aria-label="input with dropdown and button" />
          <Button id="inputDropdownButton1">Button</Button>
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <InputGroupText>
            <DollarSignIcon />
          </InputGroupText>
          <TextInput id="textInput5" type="number" aria-label="Dollar amount input example" />
          <InputGroupText>.00</InputGroupText>
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <TextInput id="textInput6" type="email" aria-label="email input field" />
          <InputGroupText id="email-example">@example.com</InputGroupText>
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <InputGroupText id="username" aria-label="@">
            <AtIcon />
          </InputGroupText>
          <TextInput isValid={false} id="textInput7" type="email" aria-label="Error state username example" />
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <InputGroupText component="label" htmlFor="textInput9">
            <CalendarAltIcon />
          </InputGroupText>
          <TextInput name="textInput9" id="textInput9" type="date" aria-label="Date input example" />
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <TextInput name="textInput11" id="textInput11" type="search" aria-label="search input example" />
          <Button variant="tertiary" aria-label="search button for search input">
            <SearchIcon />
          </Button>
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <TextInput name="textInput10" id="textInput10" type="search" aria-label="input example with popover" />
          <Popover position="top" bodyContent={'This field is an example of input group with popover'}>
            <Button variant="tertiary" aria-label="popover for input">
              <QuestionCircleIcon />
            </Button>
          </Popover>
        </InputGroup>
      </React.Fragment>
    );
  }
}

export default SimpleInputGroups;
