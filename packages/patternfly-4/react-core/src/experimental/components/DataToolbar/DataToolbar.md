---
title: 'DataToolbar'
cssPrefix: 'pf-c-data-toolbar'
typescript: true
propComponents: ['DataToolbar', 'DataToolbarContent', 'DataToolbarItem', 'DataToolbarGroup', 'DataToolbarToggleGroup', 'DataToolbarBreakpointMod', 'DataToolbarSpacer']
section: 'experimental'
---

import { DataToolbar , DataToolbarItem, DataToolbarGroup, DataToolbarContent, DataToolbarToggleGroup } from '@patternfly/react-core/dist/esm/experimental';
import { Alert, Button, InputGroup, TextInput, Select, SelectOption } from '@patternfly/react-core';
import { EditIcon, CloneIcon, SyncIcon, SearchIcon, FilterIcon } from '@patternfly/react-icons'

<Alert variant="danger" title="Warning">
  Please don't use this component, it's only an example of what an experimental component could be
  and likely going away in our next release.
</Alert>
<br />

## Data toolbar
```js
import React from 'react';
import { DataToolbar , DataToolbarItem, DataToolbarContent } from '@patternfly/react-core/dist/esm/experimental';
import { Button, InputGroup, TextInput, SearchIcon } from '@patternfly/react-core';

class DataToolbarItems extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const items = <React.Fragment>
      <DataToolbarItem>
        <InputGroup>
          <TextInput name="textInput1" id="textInput1" type="search" aria-label="search input example" />
          <Button variant={ButtonVariant.tertiary} aria-label="search button for search input">
            <SearchIcon />
          </Button>
        </InputGroup>
      </DataToolbarItem>
      <DataToolbarItem><Button variant="secondary">Action</Button></DataToolbarItem>
      <DataToolbarItem variant="separator" />
      <DataToolbarItem><Button variant="primary">Action</Button></DataToolbarItem>
    </React.Fragment>;
    
    return <DataToolbar id="data-toolbar"><DataToolbarContent>{items}</DataToolbarContent></DataToolbar>;
  }
}

```

## Data toolbar spacers
```js
import React from 'react';
import { DataToolbar , DataToolbarItem, DataToolbarContent } from '@patternfly/react-core/dist/esm/experimental';
import { Button } from '@patternfly/react-core';

class DataToolbarSpacers extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const firstSpacers = [
      {spacerSize: 'none'}
    ];
    const secondSpacers = [
      {spacerSize: 'sm'}
    ];
    const thirdSpacers = [
      {spacerSize: 'md'}
    ];
    const fourthSpacers = [
      {spacerSize: 'lg'}
    ];
    const fifthSpacers = [
      {spacerSize: 'none'},
      {spacerSize: 'sm', breakpoint: 'md'},
      {spacerSize: 'md', breakpoint: 'lg'},
      {spacerSize: 'lg', breakpoint: 'xl'}
    ];
    
    const items = <React.Fragment>
          <DataToolbarItem spacers={firstSpacers}><Button variant="secondary">Action</Button></DataToolbarItem>
          <DataToolbarItem spacers={secondSpacers}><Button variant="secondary">Action</Button></DataToolbarItem>
          <DataToolbarItem spacers={thirdSpacers}><Button variant="secondary">Action</Button></DataToolbarItem>
          <DataToolbarItem spacers={fourthSpacers}><Button variant="secondary">Action</Button></DataToolbarItem>
          <DataToolbarItem variant="separator"></DataToolbarItem>
          <DataToolbarItem spacers={fifthSpacers}><Button variant="secondary">Action</Button></DataToolbarItem>
          <DataToolbarItem><Button variant="primary">Action</Button></DataToolbarItem>
      </React.Fragment>;
    
    return <DataToolbar id="data-toolbar-spacers"><DataToolbarContent>{items}</DataToolbarContent></DataToolbar>;
  }
}

```

## Data toolbar group types
```js
import React from 'react';
import { DataToolbar, DataToolbarContent, DataToolbarGroup, DataToolbarItem } from '@patternfly/react-core/dist/esm/experimental';
import { Button, Select, SelectOption } from '@patternfly/react-core';
import { EditIcon, CloneIcon, SyncIcon } from '@patternfly/react-icons'

class DataToolbarGroupTypes extends React.Component {
  constructor(props) {
    super(props);
    
    this.firstOptions = [
      { value: 'Filter 1', disabled: false, isPlaceholder: true },
      { value: 'A', disabled: false },
      { value: 'B', disabled: false },
      { value: 'C', disabled: false },
    ];
    
    this.secondOptions = [
      { value: 'Filter 2', disabled: false, isPlaceholder: true },
      { value: '1', disabled: false },
      { value: '2', disabled: false },
      { value: '3', disabled: false },
    ];
    
    this.thirdOptions = [
      { value: 'Filter 3', disabled: false, isPlaceholder: true },
      { value: 'I', disabled: false },
      { value: 'II', disabled: false },
      { value: 'III', disabled: false },
    ];
    
    this.state = {
      firstIsExpanded: false,
      firstSelected: null,
      secondIsExpanded: false,
      secondSelected: null,
      thirdIsExpanded: false,
      thirdSelected: null,
    };
    
    this.onFirstToggle = isExpanded => {
      this.setState({
        firstIsExpanded: isExpanded
      });
    };
    
    this.onFirstSelect = (event, selection) => {
      this.setState({
        firstSelected: selection,
        firstIsExpanded: false
      });
    };
    
    this.onSecondToggle = isExpanded => {
      this.setState({
        secondIsExpanded: isExpanded
      });
    };
    
    this.onSecondSelect = (event, selection) => {
      this.setState({
        secondSelected: selection,
        secondIsExpanded: false
      });
    };
    
    this.onThirdToggle = isExpanded => {
      this.setState({
        thirdIsExpanded: isExpanded
      });
    };
    
    this.onThirdSelect = (event, selection) => {
      this.setState({
        thirdSelected: selection,
        thirdIsExpanded: false
      });
    };
    
  }
  
  render() {
    const { firstIsExpanded, firstSelected, secondIsExpanded, secondSelected, thirdIsExpanded, thirdSelected } = this.state;
    
    const filterGroupItems = <React.Fragment>
      <DataToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onFirstToggle}
          onSelect={this.onFirstSelect}
          selections={firstSelected}
          isExpanded={firstIsExpanded}
        >
          {this.firstOptions.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
            />
          ))}
        </Select>
     </DataToolbarItem>
     <DataToolbarItem>
        <Select
        variant={SelectVariant.single}
        aria-label="Select Input"
        onToggle={this.onSecondToggle}
        onSelect={this.onSecondSelect}
        selections={secondSelected}
        isExpanded={secondIsExpanded}
      >
        {this.secondOptions.map((option, index) => (
           <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
            />
          ))}
        </Select>
      </DataToolbarItem>
      <DataToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onThirdToggle}
          onSelect={this.onThirdSelect}
          selections={thirdSelected}
          isExpanded={thirdIsExpanded}
        >
          {this.thirdOptions.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
            />
          ))}
        </Select>
      </DataToolbarItem>
    </React.Fragment>;
    
    const iconButtonGroupItems = <React.Fragment>
      <DataToolbarItem><Button variant="plain"><EditIcon /></Button></DataToolbarItem>
      <DataToolbarItem><Button variant="plain"><CloneIcon /></Button></DataToolbarItem>
      <DataToolbarItem><Button variant="plain"><SyncIcon /></Button></DataToolbarItem>
    </React.Fragment>;
    
    const buttonGroupItems = <React.Fragment>
      <DataToolbarItem><Button variant="primary">Action</Button></DataToolbarItem>
      <DataToolbarItem><Button variant="secondary">Secondary</Button></DataToolbarItem>
      <DataToolbarItem><Button variant="tertiary">Tertiary</Button></DataToolbarItem>
    </React.Fragment>;
    
    const items = <React.Fragment>
      <DataToolbarGroup variant="filter-group">{filterGroupItems}</DataToolbarGroup>
      <DataToolbarGroup variant="icon-button-group">{iconButtonGroupItems}</DataToolbarGroup>
      <DataToolbarGroup variant="button-group">{buttonGroupItems}</DataToolbarGroup>
    </React.Fragment>;
    
    return <DataToolbar id="data-toolbar-group-types"><DataToolbarContent>{items}</DataToolbarContent></DataToolbar>;
  }
}

```
## Data toolbar toggle groups
```js
import React from 'react';
import { DataToolbar , DataToolbarItem, DataToolbarContent, DataToolbarToggleGroup } from '@patternfly/react-core/dist/esm/experimental';
import { Button, InputGroup, Select, SelectOption } from '@patternfly/react-core';
import { TextInput, SearchIcon, FilterIcon } from '@patternfly/react-icons'

class DataToolbarToggleGroupExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      inputValue: "",
      firstIsExpanded: false,
      firstSelected: null,
      secondIsExpanded: false,
      secondSelected: null
    };
    
    this.toggleIsExpanded = () => {
      this.setState((prevState) => ({
        isExpanded: !prevState.isExpanded
      }));
    };
    
    this.firstOptions = [
      { value: 'Status', disabled: false, isPlaceholder: true },
      { value: 'New', disabled: false },
      { value: 'Pending', disabled: false },
      { value: 'Running', disabled: false },
      { value: 'Cancelled', disabled: false },
    ];
    
    this.secondOptions = [
      { value: 'Risk', disabled: false, isPlaceholder: true },
      { value: 'Low', disabled: false },
      { value: 'Medium', disabled: false },
      { value: 'High', disabled: false },
    ];
    
    this.onInputChange = (newValue) => {
         this.setState({inputValue: newValue});
        };
    
    this.onFirstToggle = isExpanded => {
      this.setState({
        firstIsExpanded: isExpanded
      });
    };
    
    this.onFirstSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearFirstSelection();
      this.setState({
        firstSelected: selection,
        firstIsExpanded: false
      });
    };
    
    this.clearFirstSelection = () => {
      this.setState({
        firstSelected: null,
        firstIsExpanded: false
      });
    };
    
    this.onSecondToggle = isExpanded => {
      this.setState({
        secondIsExpanded: isExpanded
      });
    };
    
    this.onSecondSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSecondSelection();
      this.setState({
        secondSelected: selection,
        secondIsExpanded: false
      });
    };
    
    this.clearSecondSelection = () => {
      this.setState({
        secondSelected: null,
        secondIsExpanded: false
      });
    };
  }
  
  render() {
    const { inputValue, firstIsExpanded, firstSelected, secondIsExpanded, secondSelected } = this.state;

    const toggleGroupItems = <React.Fragment>
      <DataToolbarItem>
        <InputGroup>
          <TextInput name="textInput2" id="textInput2" type="search" aria-label="search input example" onChange={this.onInputChange} value={inputValue}/>
          <Button variant={ButtonVariant.tertiary} aria-label="search button for search input">
            <SearchIcon />
          </Button>
        </InputGroup>
      </DataToolbarItem>
      <DataToolbarItem spacers={[{spacerSize: 'none'}]}>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onFirstToggle}
          onSelect={this.onFirstSelect}
          selections={firstSelected}
          isExpanded={firstIsExpanded}
        >
          {this.firstOptions.map((option, index) => (
             <SelectOption
               isDisabled={option.disabled}
               key={index}
               value={option.value}
             />
          ))}
        </Select>
      </DataToolbarItem>
      <DataToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onSecondToggle}
          onSelect={this.onSecondSelect}
          selections={secondSelected}
          isExpanded={secondIsExpanded}
        >
          {this.secondOptions.map((option, index) => (
            <SelectOption
               isDisabled={option.disabled}
               key={index}
               value={option.value}
             />
           ))}
        </Select>
      </DataToolbarItem>
    </React.Fragment>;
    
    const items =  <DataToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint='xl'>{toggleGroupItems}</DataToolbarToggleGroup>;
    
    return <DataToolbar id="data-toolbar-toggle-groups" toggleIsExpanded={this.toggleIsExpanded}><DataToolbarContent>{items}</DataToolbarContent></DataToolbar>;
  }
}

```
