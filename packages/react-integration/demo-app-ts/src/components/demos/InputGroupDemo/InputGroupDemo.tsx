import React from 'react';
import DollarSignIcon from '@patternfly/react-icons/dist/esm/icons/dollar-sign-icon';
import AtIcon from '@patternfly/react-icons/dist/esm/icons/at-icon';
import CalendarAltIcon from '@patternfly/react-icons/dist/esm/icons/calendar-alt-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import {
  Button,
  ButtonVariant,
  TextArea,
  InputGroup,
  InputGroupText,
  InputGroupTextVariant,
  TextInput,
  Popover,
  PopoverPosition,
  ValidatedOptions,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle
} from '@patternfly/react-core';

interface InputGroupState {
  isOpen: boolean;
  selected: string;
}

export class InputGroupDemo extends React.Component<{}, InputGroupState> {
  static displayName = 'InputGroupDemo';
  onToggle: () => void;
  onSelect: (event: any) => void;
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
      selected: ''
    };
    this.onToggle = () => {
      this.setState((prevState) => ({
        isOpen: !prevState.isOpen
      }));
    };
    this.onSelect = (event) => {
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
          <Button id="textAreaButton1" variant={ButtonVariant.control}>
            Button
          </Button>
          <TextArea name="textarea1" id="textarea1" aria-label="textarea with buttons" />
          <Button variant={ButtonVariant.control}>Button</Button>
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <TextArea name="textarea2" id="textarea2" aria-label="textarea with button" />
          <Button id="textAreaButton2" variant={ButtonVariant.control}>
            Button
          </Button>
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <Button id="textAreaButton3" variant={ButtonVariant.control}>
            Button
          </Button>
          <Button variant={ButtonVariant.control}>Button</Button>
          <TextArea name="textarea3" id="textarea3" aria-label="textarea with 3 buttons" />
          <Button variant={ButtonVariant.control}>Button</Button>
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <Dropdown
            onSelect={this.onSelect}
            isOpen={this.state.isOpen}
            onOpenChange={(isOpen) => this.setState({ isOpen })}
            toggle={(toggleRef) => (
              <MenuToggle ref={toggleRef} onClick={this.onToggle} isExpanded={this.state.isOpen}>
                {this.state.selected ? this.state.selected : 'Dropdown'}
              </MenuToggle>
            )}
          >
            <DropdownList>
              <DropdownItem key="opt-1">Option 1</DropdownItem>
              <DropdownItem key="opt-2">Option 2</DropdownItem>
              <DropdownItem key="opt-3">Option 3</DropdownItem>
            </DropdownList>
          </Dropdown>
          <TextInput id="textInput3" aria-label="input with dropdown and button" />
          <Button id="inputDropdownButton1" variant={ButtonVariant.control}>
            Button
          </Button>
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
          <TextInput
            validated={ValidatedOptions.error}
            id="textInput7"
            type="email"
            aria-label="Error state username example"
          />
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
          <Button variant={ButtonVariant.control} aria-label="search button for search input">
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
            <Button variant={ButtonVariant.control} aria-label="popover for input">
              <QuestionCircleIcon />
            </Button>
          </Popover>
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <TextInput name="textIndex12" id="textInput12" type="text" aria-label="percentage" />
          <InputGroupText id="plain-example" variant={InputGroupTextVariant.plain}>
            %
          </InputGroupText>
        </InputGroup>
      </React.Fragment>
    );
  }
}
