---
id: Input group
section: components
cssPrefix: null
propComponents: ['InputGroup', 'InputGroupText']
---
import AtIcon from '@patternfly/react-icons/dist/esm/icons/at-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import DollarSignIcon from '@patternfly/react-icons/dist/esm/icons/dollar-sign-icon';
import CalendarAltIcon from '@patternfly/react-icons/dist/esm/icons/calendar-alt-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
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

## Examples
### Basic
```js
import React from 'react';
import AtIcon from '@patternfly/react-icons/dist/esm/icons/at-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import {
  Button,
  InputGroup,
  InputGroupText,
  InputGroupTextVariant,
  TextInput,
  ValidatedOptions
} from '@patternfly/react-core';

class SimpleInputGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <InputGroup>
          <TextInput id="textInput6" type="email" aria-label="email input field" />
          <InputGroupText id="email-example">@example.com</InputGroupText>
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupText id="username" aria-label="@">
            <AtIcon />
          </InputGroupText>
          <TextInput validated={ValidatedOptions.error} id="textInput7" type="email" aria-label="Error state username example" />
        </InputGroup>
        <br />
        <InputGroup>
          <TextInput name="textInput11" id="textInput11" type="search" aria-label="search input example" />
          <Button variant="control" aria-label="search button for search input">
            <SearchIcon />
          </Button>
        </InputGroup>
        <br />
        <InputGroup>
          <TextInput name="textIndex12" id="textInput12" type="text" aria-label="percentage" />
          <InputGroupText id="plain-example" variant={InputGroupTextVariant.plain}>%</InputGroupText>
        </InputGroup>
      </React.Fragment>
    );
  }
}
```

### With textarea
```js
import React from 'react';
import {
  Button,
  TextArea,
  InputGroup
} from '@patternfly/react-core';

class SimpleInputGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <InputGroup>
          <TextArea name="textarea2" id="textarea2" aria-label="textarea with button" />
          <Button id="textAreaButton2" variant="control">
            Button
          </Button>
        </InputGroup>
      </React.Fragment>
    );
  }
}
```

### With dropdown
```js
import React from 'react';
import {
  Button,
  InputGroup,
  TextInput,
  Dropdown,
  DropdownToggle,
  DropdownItem
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
          />
          <TextInput id="textInput3" aria-label="input with dropdown and button" />
          <Button id="inputDropdownButton1" variant="control">Button</Button>
        </InputGroup>
      </React.Fragment>
    );
  }
}
```

### With popover
```js
import React from 'react';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import {
  Button,
  InputGroup,
  TextInput,
  Popover,
  PopoverPosition
} from '@patternfly/react-core';

class SimpleInputGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <InputGroup>
          <TextInput name="textInput10" id="textInput10" type="text" aria-label="input example with popover" />
          <Popover
            aria-label="popover example"
            position={PopoverPosition.top}
            bodyContent="This field is an example of an input group with a popover."
          >
            <Button variant="control" aria-label="popover for input">
              <QuestionCircleIcon />
            </Button>
          </Popover>
        </InputGroup>
        <br />
        <InputGroup>
          <TextInput name="textInput12" id="textInput12" type="text" aria-label="input example with popover" />
          <Popover
            aria-label="popover example"
            position={PopoverPosition.top}
            bodyContent="This field is an example of an input group with a popover."
          >
            <Button variant="plain" aria-label="Popover for input">
              <QuestionCircleIcon />
            </Button>
          </Popover>
        </InputGroup>
      </React.Fragment>
    );
  }
}
```


### With multiple group siblings
```js
import React from 'react';
import DollarSignIcon from '@patternfly/react-icons/dist/esm/icons/dollar-sign-icon';
import {
  Button,
  TextArea,
  InputGroup,
  InputGroupText,
  TextInput
} from '@patternfly/react-core';

class SimpleInputGroups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <InputGroup>
          <Button id="textAreaButton1" variant="control">
            Button
          </Button>
          <TextArea name="textarea1" id="textarea1" aria-label="textarea with buttons" />
          <Button variant="control">Button</Button>
        </InputGroup>
        <br />
        <InputGroup>
          <Button id="textAreaButton3" variant="control">
            Button
          </Button>
          <Button variant="control">Button</Button>
          <TextArea name="textarea3" id="textarea3" aria-label="textarea with 3 buttons" />
          <Button variant="control">Button</Button>
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupText>
            <DollarSignIcon />
          </InputGroupText>
          <TextInput id="textInput5" type="number" aria-label="Dollar amount input example" />
          <InputGroupText>.00</InputGroupText>
        </InputGroup>
      </React.Fragment>
    );
  }
}
```
