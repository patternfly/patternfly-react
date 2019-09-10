---
title: 'DataToolbar'
cssPrefix: 'pf-c-data-toolbar'
typescript: true
propComponents: ['DataToolbar', 'DataToolbarContent', 'DataToolbarItem', 'DataToolbarGroup', 'DataToolbarToggleGroup', 'DataToolbarBreakpointMod', 'DataToolbarSpacer']
section: 'experimental'
stage: 'early'
---

import { DataToolbar , DataToolbarItem, DataToolbarGroup, DataToolbarContent, DataToolbarToggleGroup } from '@patternfly/react-core/dist/esm/experimental';
import { Alert, Button, InputGroup, TextInput, Select, SelectOption } from '@patternfly/react-core';
import { EditIcon, CloneIcon, SyncIcon, SearchIcon, FilterIcon } from '@patternfly/react-icons'
import '@patternfly/react-styles/css/components/Divider/divider';

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
import { DataToolbar , DataToolbarItem, DataToolbarGroup, DataToolbarContent } from '@patternfly/react-core/dist/esm/experimental';
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
          <DataToolbarItem variant="separator"></DataToolbarItem>
          <DataToolbarGroup itemSpacers={[{spacerSize: 'lg'}]}>
            <DataToolbarItem><Button variant="secondary">Action</Button></DataToolbarItem>
            <DataToolbarItem><Button variant="secondary">Action</Button></DataToolbarItem>
          </DataToolbarGroup>
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
- The Toggle group can either have the toggle state managed by the consumer, or the component. The first Toggle group example demonstrates a component managed toggle state.
- The second Toggle group example below demonstrates a consumer managed toggle state. If the consumer would prefer to manage the expanded state of the toggle group for smaller screen widths:

  1. Add a toggleIsExpanded callback to DataToolbar
  1. Pass in a boolean into the isExpanded prop to DataToolbar

- Note: Although the toggle group is aware of the consumer provided breakpoint, the expandable content is not. So if the expandable content is expanded and the screen width surpasses that of the breakpoint, then the expandable content will not know that and will remain open, this case should be considered and handled by the consumer as well.

### Data toolbar component managed toggle groups
```js
import React from 'react';
import { DataToolbar , DataToolbarItem, DataToolbarContent, DataToolbarToggleGroup, DataToolbarGroup } from '@patternfly/react-core/dist/esm/experimental';
import { Button, InputGroup, Select, SelectOption } from '@patternfly/react-core';
import { TextInput, SearchIcon, FilterIcon } from '@patternfly/react-icons'

class DataToolbarComponentMangedToggleGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      statusIsExpanded: false,
      statusSelected: null,
      riskIsExpanded: false,
      riskSelected: null
    };
    
    this.statusOptions = [
      { value: 'Status', disabled: false, isPlaceholder: true },
      { value: 'New', disabled: false },
      { value: 'Pending', disabled: false },
      { value: 'Running', disabled: false },
      { value: 'Cancelled', disabled: false },
    ];
    
    this.riskOptions = [
      { value: 'Risk', disabled: false, isPlaceholder: true },
      { value: 'Low', disabled: false },
      { value: 'Medium', disabled: false },
      { value: 'High', disabled: false },
    ];
    
    this.onInputChange = (newValue) => {
         this.setState({inputValue: newValue});
        };
    
    this.onStatusToggle = isExpanded => {
      this.setState({
        statusIsExpanded: isExpanded
      });
    };
    
    this.onStatusSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearStatusSelection();
      this.setState({
        statusSelected: selection,
        statusIsExpanded: false
      });
    };
    
    this.clearStatusSelection = () => {
      this.setState({
        statusSelected: null,
        statusIsExpanded: false
      });
    };
    
    this.onRiskToggle = isExpanded => {
      this.setState({
        riskIsExpanded: isExpanded
      });
    };
    
    this.onRiskSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearRiskSelection();
      this.setState({
        riskSelected: selection,
        riskIsExpanded: false
      });
    };
    
    this.clearRiskSelection = () => {
      this.setState({
        riskSelected: null,
        riskIsExpanded: false
      });
    };
  }
  
  render() {
    const { inputValue, statusIsExpanded, statusSelected, riskIsExpanded, riskSelected } = this.state;

    const toggleGroupItems = <React.Fragment>
      <DataToolbarItem>
        <InputGroup>
          <TextInput name="textInput2" id="textInput2" type="search" aria-label="search input example" onChange={this.onInputChange} value={inputValue}/>
          <Button variant={ButtonVariant.tertiary} aria-label="search button for search input">
            <SearchIcon />
          </Button>
        </InputGroup>
      </DataToolbarItem>
      <DataToolbarGroup>
          <DataToolbarItem spacers={[{spacerSize: 'none'}]}>
            <Select
              variant={SelectVariant.single}
              aria-label="Select Input"
              onToggle={this.onStatusToggle}
              onSelect={this.onStatusSelect}
              selections={statusSelected}
              isExpanded={statusIsExpanded}
            >
              {this.statusOptions.map((option, index) => (
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
              onToggle={this.onRiskToggle}
              onSelect={this.onRiskSelect}
              selections={riskSelected}
              isExpanded={riskIsExpanded}
            >
              {this.riskOptions.map((option, index) => (
                <SelectOption
                   isDisabled={option.disabled}
                   key={index}
                   value={option.value}
                 />
               ))}
            </Select>
          </DataToolbarItem>
       </DataToolbarGroup>
    </React.Fragment>;
    
    const items =  <DataToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint='xl'>{toggleGroupItems}</DataToolbarToggleGroup>;
    
    return <DataToolbar id="data-toolbar-component-managed-toggle-groups" ><DataToolbarContent>{items}</DataToolbarContent></DataToolbar>;
  }
}
```

### Data toolbar consumer managed toggle groups
```js
import React from 'react';
import { DataToolbar , DataToolbarItem, DataToolbarContent, DataToolbarToggleGroup, DataToolbarGroup } from '@patternfly/react-core/dist/esm/experimental';
import { Button, InputGroup, Select, SelectOption } from '@patternfly/react-core';
import { TextInput, SearchIcon, FilterIcon } from '@patternfly/react-icons'

class DataToolbarConsumerMangedToggleGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      inputValue: "",
      statusIsExpanded: false,
      statusSelected: null,
      riskIsExpanded: false,
      riskSelected: null
    };
    
    this.toggleIsExpanded = () => {
      this.setState((prevState) => ({
        isExpanded: !prevState.isExpanded
      }));
    };
    
    this.statusOptions = [
      { value: 'Status', disabled: false, isPlaceholder: true },
      { value: 'New', disabled: false },
      { value: 'Pending', disabled: false },
      { value: 'Running', disabled: false },
      { value: 'Cancelled', disabled: false },
    ];
    
    this.riskOptions = [
      { value: 'Risk', disabled: false, isPlaceholder: true },
      { value: 'Low', disabled: false },
      { value: 'Medium', disabled: false },
      { value: 'High', disabled: false },
    ];
    
    this.onInputChange = (newValue) => {
         this.setState({inputValue: newValue});
        };
    
    this.onStatusToggle = isExpanded => {
      this.setState({
        statusIsExpanded: isExpanded
      });
    };
    
    this.onStatusSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearStatusSelection();
      this.setState({
        statusSelected: selection,
        statusIsExpanded: false
      });
    };
    
    this.clearStatusSelection = () => {
      this.setState({
        statusSelected: null,
        statusIsExpanded: false
      });
    };
    
    this.onRiskToggle = isExpanded => {
      this.setState({
        riskIsExpanded: isExpanded
      });
    };
    
    this.onRiskSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearRiskSelection();
      this.setState({
        riskSelected: selection,
        riskIsExpanded: false
      });
    };
    
    this.clearRiskSelection = () => {
      this.setState({
        riskSelected: null,
        riskIsExpanded: false
      });
    };
  }
  
  render() {
    const { isExpanded, inputValue, statusIsExpanded, statusSelected, riskIsExpanded, riskSelected } = this.state;

    const toggleGroupItems = <React.Fragment>
      <DataToolbarItem>
        <InputGroup>
          <TextInput name="textInput2" id="textInput2" type="search" aria-label="search input example" onChange={this.onInputChange} value={inputValue}/>
          <Button variant={ButtonVariant.tertiary} aria-label="search button for search input">
            <SearchIcon />
          </Button>
        </InputGroup>
      </DataToolbarItem>
      <DataToolbarGroup variant="filter-group">
          <DataToolbarItem>
            <Select
              variant={SelectVariant.single}
              aria-label="Select Input"
              onToggle={this.onStatusToggle}
              onSelect={this.onStatusSelect}
              selections={statusSelected}
              isExpanded={statusIsExpanded}
            >
              {this.statusOptions.map((option, index) => (
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
              onToggle={this.onRiskToggle}
              onSelect={this.onRiskSelect}
              selections={riskSelected}
              isExpanded={riskIsExpanded}
            >
              {this.riskOptions.map((option, index) => (
                <SelectOption
                  isDisabled={option.disabled}
                  key={index}
                  value={option.value}
                />
              ))}
            </Select>
        </DataToolbarItem>
      </DataToolbarGroup>
    </React.Fragment>;
    
    const items =  <DataToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint='xl'>{toggleGroupItems}</DataToolbarToggleGroup>;
    
    return <DataToolbar id="data-toolbar-consumer-managed-toggle-groups" isExpanded={isExpanded} toggleIsExpanded={this.toggleIsExpanded}><DataToolbarContent>{items}</DataToolbarContent></DataToolbar>;
  }
}
```

## Data toolbar group stacked
```js
import React from 'react';
import { DataToolbar, DataToolbarContent, DataToolbarToggleGroup, DataToolbarGroup, DataToolbarItem } from '@patternfly/react-core/dist/esm/experimental';
import { Button, Select, SelectOption, Pagination, Dropdown, DropdownToggle, DropdownToggleCheckbox, DropdownItem } from '@patternfly/react-core';
import { FilterIcon, CloneIcon, SyncIcon } from '@patternfly/react-icons'

class DataToolbarStacked extends React.Component {
  constructor(props) {
    super(props);
    
    // toggle group - three option menus with labels, two icon buttons, Kebab menu - right aligned
    // pagination - right aligned
    this.resourceOptions = [
      { value: 'All', disabled: false },
      { value: 'Deployment', disabled: false },
      { value: 'Pod', disabled: false },
    ];
    
    this.statusOptions = [
      { value: 'Running', disabled: false, },
      { value: 'New', disabled: false },
      { value: 'Pending', disabled: false },
      { value: 'Cancelled', disabled: false },
    ];
    
    this.typeOptions = [
      { value: 'Any', disabled: false, isPlaceholder: true },
      { value: 'No Type', disabled: false },
    ];
    
    this.state = {
      resourceIsExpanded: false,
      resourceSelected: null,
      statusIsExpanded: false,
      statusSelected: null,
      typeIsExpanded: false,
      typeSelected: null,
      splitButtonDropdownIsOpen: false,
      page: 1,
      perPage: 20
    };
    
    this.onResourceToggle = isExpanded => {
      this.setState({
        resourceIsExpanded: isExpanded
      });
    };
    
    this.onResourceSelect = (event, selection) => {
      this.setState({
        resourceSelected: selection,
        resourceIsExpanded: false
      });
    };
    
    this.onStatusToggle = isExpanded => {
      this.setState({
        statusIsExpanded: isExpanded
      });
    };
    
    this.onStatusSelect = (event, selection) => {
      this.setState({
        statusSelected: selection,
        statusIsExpanded: false
      });
    };
    
    this.onTypeToggle = isExpanded => {
      this.setState({
        typeIsExpanded: isExpanded
      });
    };
    
    this.onTypeSelect = (event, selection) => {
      this.setState({
        typeSelected: selection,
        typeIsExpanded: false
      });
    };
    
    this.onSetPage = (_event, pageNumber) => {
      this.setState({
        page: pageNumber
      });
    };

    this.onPerPageSelect = (_event, perPage) => {
      this.setState({
        perPage
      });
    };
    
    this.onSplitButtonToggle = isOpen => {
      console.log("hm");
      this.setState({
        splitButtonDropdownIsOpen: isOpen
      });
    };
    
    this.onSplitButtonSelect = event => {
      this.setState({
        splitButtonDropdownIsOpen: !this.state.splitButtonDropdownIsOpen
      });
    };
    
  }
  
  render() {
    const { resourceIsExpanded, resourceSelected, statusIsExpanded, statusSelected, typeIsExpanded, typeSelected, splitButtonDropdownIsOpen } = this.state;
    
    const splitButtonDropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>
    ];
    
    const toggleGroupItems = <React.Fragment>
      <DataToolbarItem variant="label" id="stacked-example-resource-select">Resource</DataToolbarItem>
      <DataToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onResourceToggle}
          onSelect={this.onResourceSelect}
          selections={resourceSelected}
          isExpanded={resourceIsExpanded}
          ariaLabelledBy="stacked-example-resource-select"
        >
          {this.resourceOptions.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
            />
          ))}
        </Select>
     </DataToolbarItem>
     <DataToolbarItem variant="label" id="stacked-example-status-select">Status</DataToolbarItem>
     <DataToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onStatusToggle}
          onSelect={this.onStatusSelect}
          selections={statusSelected}
          isExpanded={statusIsExpanded}
          ariaLabelledBy="stacked-example-status-select"
        >
        {this.statusOptions.map((option, index) => (
          <SelectOption
            isDisabled={option.disabled}
            key={index}
            value={option.value}
           />
         ))}
        </Select>
      </DataToolbarItem>
      <DataToolbarItem variant="label" id="stacked-example-type-select">Type</DataToolbarItem>
      <DataToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onTypeToggle}
          onSelect={this.onTypeSelect}
          selections={typeSelected}
          isExpanded={typeIsExpanded}
          ariaLabelledBy="stacked-example-type-select"
        >
          {this.typeOptions.map((option, index) => (
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
      <DataToolbarItem><Button variant="plain"><CloneIcon /></Button></DataToolbarItem>
      <DataToolbarItem><Button variant="plain"><SyncIcon /></Button></DataToolbarItem>
    </React.Fragment>;
   
    
    const firstRowItems = <React.Fragment>
      <DataToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint='xl'>{toggleGroupItems}</DataToolbarToggleGroup>
      <DataToolbarGroup variant="icon-button-group">{iconButtonGroupItems}</DataToolbarGroup>
      <DataToolbarItem variant="overflow-menu" breakpointMods={[{modifier:"align-right"}]}>Overflow Menu</DataToolbarItem>
    </React.Fragment>;
    
    const secondRowItems = <React.Fragment>
      <DataToolbarItem variant="bulk-select">
        <Dropdown
            onSelect={this.onSplitButtonSelect}
            toggle={(
              <DropdownToggle
                splitButtonItems={[
                  <DropdownToggleCheckbox
                    id="example-checkbox-1"
                    key="split-checkbox"
                    aria-label="Select all"
                  />
                ]}
                onToggle={this.onSplitButtonToggle}
              />
            )}
            isOpen={splitButtonDropdownIsOpen}
            dropdownItems={splitButtonDropdownItems}
          />
      </DataToolbarItem>
      <DataToolbarItem variant="pagination" breakpointMods={[{modifier:"align-right"}]}>
        <Pagination
          itemCount={37}
          perPage={this.state.perPage}
          page={this.state.page}
          onSetPage={this.onSetPage}
          widgetId="pagination-options-menu-top"
          onPerPageSelect={this.onPerPageSelect}
        />
      </DataToolbarItem>
    </React.Fragment>;
    
    return <DataToolbar id="data-toolbar-group-types">
      <DataToolbarContent>{firstRowItems}</DataToolbarContent>
      <hr className="pf-c-divider"/>
      <DataToolbarContent>{secondRowItems}</DataToolbarContent>
    </DataToolbar>;
  }
}

```

