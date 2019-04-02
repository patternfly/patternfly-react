import {
  Alert,
  AlertActionCloseButton,
  AlertActionLink,
  AlertVariant,
  Avatar,
  ContextSelector,
  ContextSelectorItem,
  InputGroup,
  InputGroupText,
  Popover,
  Select,
  SelectOption,
  SelectVariant,
  Tab,
  Tabs,
  TabContent,
  TextInput,
  Title,
  Tooltip
} from '@patternfly/react-core';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavTest from './Nav';
import WizardTest from './Wizard';

class App extends Component {
  state = {
    isExpanded: false,
    selected: 'Placeholder text'
  };

  contentRef1 = React.createRef<HTMLDivElement>();
  contentRef2 = React.createRef<HTMLDivElement>();
  contentRef3 = React.createRef<HTMLDivElement>();

  onToggle = isExpanded => {
    this.setState({
      isExpanded
    });
  };

  onSelect = event => {
    this.setState({
      selected: event.target.innerHTML,
      isExpanded: false
    });
    console.log('selected:', event.target.innerHTML);
  };

  render() {
    const { isExpanded, selected } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Title style={{ color: '#fff', padding: '12px 0' }} headingLevel="h1" size="4xl">
            PF4 Integration Sandbox
          </Title>
          <Avatar src={logo} alt={'avatar'} />
        </header>
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
        <Tabs aria-label="Accessible tabs example" variant="nav">
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
        <Tabs>
          <Tab eventKey={0} title="Tab item 1" tabContentId="refTab1Section" tabContentRef={this.contentRef1} />
          <Tab eventKey={1} title="Tab item 2" tabContentId="refTab2Section" tabContentRef={this.contentRef2} />
          <Tab eventKey={2} title="Tab item 3" tabContentId="refTab3Section" tabContentRef={this.contentRef3} />
        </Tabs>
        <TabContent eventKey={0} id="refTab1Section" ref={this.contentRef1} aria-label="Tab item 1">Tab 1 section</TabContent>
        <TabContent eventKey={1} id="refTab2Section" ref={this.contentRef2} aria-label="Tab item 2" hidden>Tab 2 section</TabContent>
        <TabContent eventKey={2} id="refTab3Section" ref={this.contentRef3} aria-label="Tab item 3" hidden>Tab 3 section</TabContent>
        <Tooltip content={<div>World</div>}>
          <div>Hello</div>
        </Tooltip>
        <Popover bodyContent={<div>World</div>}>
          <div>Hello</div>
        </Popover>
        <NavTest />
        <WizardTest />
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
        <Select
          variant={SelectVariant.single}
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isExpanded={isExpanded}
        >
          <SelectOption value="option 1" />
          <SelectOption value="option 2" />
          <SelectOption value="option 3" />
        </Select>
        <InputGroup>
          <InputGroupText component="label" htmlFor="dollar_number">
            $
          </InputGroupText>
          <TextInput id="dollar_number" type="number" />
        </InputGroup>
        <ContextSelector
          toggleText="My Project"
          onSearchInputChange={() => {}}
          isOpen={true}
          searchInputValue=""
          onToggle={() => {}}
          onSelect={() => {}}
          screenReaderLabel="screenReader Label"
          searchInputPlaceholder="test"
          searchButtonAriaLabel="Aria Lable"
        >
          <ContextSelectorItem key="0">My Project</ContextSelectorItem>
          <ContextSelectorItem key="1">OpenShift Cluster</ContextSelectorItem>
          <ContextSelectorItem key="2">Production Ansible</ContextSelectorItem>
          <ContextSelectorItem key="3">AWS</ContextSelectorItem>
          <ContextSelectorItem key="4">Azure</ContextSelectorItem>
        </ContextSelector>
      </div>
    );
  }
}
export default App;
