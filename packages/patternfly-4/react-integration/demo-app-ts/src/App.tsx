import {
  Avatar,
  AvatarProps,
  Button,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  Tabs,
  Tab,
  Tooltip,
  Popover,
  Alert,
  AlertActionCloseButton,
  AlertActionLink,
  AlertVariant
} from '@patternfly/react-core';
import { Toolbar, ToolbarTotalItems, ToolbarActionGroup, ToolbarActionList } from '@patternfly/react-core/dist/js/experimental'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavTest from './Nav';

class myProps implements AvatarProps {
  alt: string = 'avatar';
}


class App extends Component<{},{isOpen: boolean}> {
  onToggle = isOpen => {
    this.setState({
      isOpen
    });
  };
  
  onSelect = event => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const toolbarButtons: React.ReactNode[] = [
      <Button>action 1</Button>
    ]

    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled>
        Disabled Action
      </DropdownItem>,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action">
        Separated Action
      </DropdownItem>
    ];
    return (
      <div className="App">
        <header className="App-header">
          <Avatar src={logo} alt={new myProps().alt} />
        </header>
        < Toolbar >  
          <ToolbarActionGroup actionItems={toolbarButtons}/>
          <ToolbarActionList dropdownItems={dropdownItems}/>
          <ToolbarTotalItems totalItems={37} />  
        </Toolbar>
        <Tabs>
          <Tab eventKey={0} title="Tab item 1">
            Tab 1 section
          </Tab>
          <Tab eventKey={1} title="Tab item 2">
            Tab 2 section
          </Tab>
          <Tab eventKey={2} title="Tab item 3">
            Tab 3 section
          </Tab>
        </Tabs>
        <Tooltip content={<div>World</div>}>
          <div>Hello</div>
        </Tooltip>
        <Popover bodyContent={<div>World</div>}>
          <div>Hello</div>
        </Popover>
        <NavTest />
        <Alert variant={AlertVariant.success} title="Success notification title" action={<AlertActionCloseButton />}>
          Success notification description. <a href="#">This is a link.</a>
        </Alert>
        <Alert variant={AlertVariant.success} title="Success notification title" action={<AlertActionCloseButton />} />
        <Alert
          variant={AlertVariant.success}
          title="Success notification title"
          action={<AlertActionLink>Action Button</AlertActionLink>}
        />
        <Alert variant="success" title="Success notification title" />
      </div>
    );
  }
}

export default App;
