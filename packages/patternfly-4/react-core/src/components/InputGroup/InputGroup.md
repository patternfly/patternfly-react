---
title: 'Input group'
cssPrefix: null
propComponents: ['InputGroup', 'InputGroupText']
---

## Simple input group

import { DollarSignIcon, AtIcon, CalendarAltIcon, SearchIcon, QuestionCircleIcon } from '@patternfly/react-icons';
import {
  Button,
  ButtonVariant,
  TextArea,
  InputGroup,
  InputGroupText,
  TextInput,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  Popover,
  PopoverPosition
} from '@patternfly/react-core';

Buttons and TextArea

```js
import React from 'react';
import { DollarSignIcon, AtIcon, CalendarAltIcon, SearchIcon, QuestionCircleIcon } from '@patternfly/react-icons';
import {
  Button,
  ButtonVariant,
  TextArea,
  InputGroup,
  InputGroupText,
  TextInput,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  Popover,
  PopoverPosition
} from '@patternfly/react-core';

class SimpleInputGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selected: ''
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: false,
        selected: event.currentTarget.value
      });
    };
  }

  render() {
    return (
      <React.Fragment>
        <InputGroup>
          <Button id="textAreaButton1" variant={ButtonVariant.secondary}>
            Button
          </Button>
          <TextArea name="textarea1" id="textarea1" aria-label="textarea with buttons" />
          <Button variant={ButtonVariant.tertiary}>Button</Button>
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <TextArea name="textarea2" id="textarea2" aria-label="textarea with button" />
          <Button id="textAreaButton2" variant={ButtonVariant.tertiary}>
            Button
          </Button>
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <Button id="textAreaButton3" variant={ButtonVariant.primary}>
            Button
          </Button>
          <Button variant={ButtonVariant.secondary}>Button</Button>
          <TextArea name="textarea3" id="textarea3" aria-label="textarea with 3 buttons" />
          <Button variant={ButtonVariant.tertiary}>Button</Button>
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <Dropdown
            onSelect={this.onSelect}
            toggle={
              <DropdownToggle onToggle={this.onToggle}>
                {this.state.selected ? this.state.selected : 'Dropdown'}
              </DropdownToggle>
            }
            isOpen={this.state.isOpen}
            dropdownItems={[
              <DropdownItem key="opt-1" value="Option 1" component="button">
                Option 1
              </DropdownItem>,
              <DropdownItem key="opt-2" value="Option 2" component="button">
                Option 2
              </DropdownItem>,
              <DropdownItem key="opt-3" value="Option 3" component="button">
                Option 3
              </DropdownItem>
            ]}
          >
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
          <Button variant={ButtonVariant.tertiary} aria-label="search button for search input">
            <SearchIcon />
          </Button>
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <TextInput name="textInput10" id="textInput10" type="search" aria-label="input example with popover" />
          <Popover
            aria-label="popover example"
            position={PopoverPosition.top}
            bodyContent="This field is an example of input group with popover"
          >
            <Button variant={ButtonVariant.tertiary} aria-label="popover for input">
              <QuestionCircleIcon />
            </Button>
          </Popover>
        </InputGroup>
      </React.Fragment>
    );
  }
}
```
