---
title: 'DataToolbar'
cssPrefix: 'pf-c-data-toolbar'
typescript: true
propComponents: ['DataToolbar']
section: 'experimental'
---

import { DataToolbar , DataToolbarItem, DataToolbarGroup, DataToolbarContent } from '@patternfly/react-core/dist/esm/experimental';
import { Alert, Button, InputGroup, TextInput, SearchIcon } from '@patternfly/react-core';

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
          <TextInput name="textInput11" id="textInput11" type="search" aria-label="search input example" />
          <Button variant={ButtonVariant.tertiary} aria-label="search button for search input">
            <SearchIcon />
          </Button>
        </InputGroup>
      </DataToolbarItem>
      <DataToolbarItem><Button variant="secondary">Action</Button></DataToolbarItem>
      <DataToolbarItem mod="separator"></DataToolbarItem>
      <DataToolbarItem><Button variant="primary">Action</Button></DataToolbarItem>
    </React.Fragment>;
    
    return <DataToolbar><DataToolbarContent>{items}</DataToolbarContent></DataToolbar>;
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
          <DataToolbarItem mod="separator"></DataToolbarItem>
          <DataToolbarItem spacers={fifthSpacers}><Button variant="secondary">Action</Button></DataToolbarItem>
          <DataToolbarItem><Button variant="primary">Action</Button></DataToolbarItem>
      </React.Fragment>;
    
    return <DataToolbar><DataToolbarContent>{items}</DataToolbarContent></DataToolbar>;
  }
}

```

## Data toolbar group types
```js
import React from 'react';
import { DataToolbar, DataToolbarContent, DataToolbarGroup, DataToolbarItem, Select, SelectOption, EditIcon, CloneIcon, SyncIcon, Button } from '@patternfly/react-core/dist/esm/experimental';


class DataToolbarGroupTypes extends React.Component {
  constructor(props) {
    super(props);
    
    this.firstOptions = [
      { value: 'A', disabled: false },
      { value: 'B', disabled: false },
      { value: 'C', disabled: false },
    ];
    
    this.secondOptions = [
      { value: '1', disabled: false },
      { value: '2', disabled: false },
      { value: '3', disabled: false },
    ];
    
    this.thirdOptions = [
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
    
    const items = <React.Fragment>
        <DataToolbarGroup mod="filter-group">
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
        </DataToolbarGroup>
        <DataToolbarGroup mod="icon-button-group">
          <DataToolbarItem><Button variant="plain"><EditIcon /></Button></DataToolbarItem>
          <DataToolbarItem><Button variant="plain"><CloneIcon /></Button></DataToolbarItem>
          <DataToolbarItem><Button variant="plain"><SyncIcon /></Button></DataToolbarItem>
        </DataToolbarGroup>
        <DataToolbarGroup mod="button-group">
          <DataToolbarItem><Button variant="primary">Action</Button></DataToolbarItem>
          <DataToolbarItem><Button variant="secondary">Secondary</Button></DataToolbarItem>
          <DataToolbarItem><Button variant="tertiary">Tertiary</Button></DataToolbarItem>
        </DataToolbarGroup>
      </React.Fragment>;
    
    return <DataToolbar><DataToolbarContent>{items}</DataToolbarContent></DataToolbar>;
  }
}

```
## Data toolbar toggle groups
```js
import React from 'react';
import { DataToolbar , DataToolbarItem, DataToolbarContent, DataToolbarToggleGroup } from '@patternfly/react-core/dist/esm/experimental';
import { Button, InputGroup, TextInput, SearchIcon, FilterIcon } from '@patternfly/react-core';

class DataToolbarToggleGroup extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const items =  <DataToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint='xl'>
        <DataToolbarItem>
          <InputGroup>
            <TextInput name="textInput11" id="textInput11" type="search" aria-label="search input example" />
            <Button variant={ButtonVariant.tertiary} aria-label="search button for search input">
              <SearchIcon />
            </Button>
          </InputGroup>
        </DataToolbarItem>
        <DataToolbarItem><Button variant="secondary">Action</Button></DataToolbarItem>
        <DataToolbarItem mod="separator"></DataToolbarItem>
        <DataToolbarItem><Button variant="primary">Action</Button></DataToolbarItem>
    </DataToolbarToggleGroup>;
    
    return <DataToolbar><DataToolbarContent>{items}</DataToolbarContent></DataToolbar>;
  }
}

```
