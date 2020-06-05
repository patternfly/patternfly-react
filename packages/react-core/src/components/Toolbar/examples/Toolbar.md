---
title: 'Toolbar'
cssPrefix: 'pf-c-toolbar'
typescript: true
propComponents: ['Toolbar', 'ToolbarContent', 'ToolbarItem', 'ToolbarToggleGroup', 'ToolbarFilter']
section: 'components'
---

import { Toolbar , ToolbarItem, ToolbarGroup, ToolbarContent, ToolbarToggleGroup, ToolbarFilter } from '@patternfly/react-core';
import { Alert, Button, ButtonVariant, Divider, InputGroup, TextInput, Select, SelectOption } from '@patternfly/react-core';
import { EditIcon, CloneIcon, SyncIcon, SearchIcon, FilterIcon } from '@patternfly/react-icons'

## Examples
Toolbar items are individual components that can be placed inside of a toolbar. Buttons or select lists are examples of items. (Note: This example does not demonstrate the desired responsive behavior of the toolbar. That is handled in later examples.)

```js title=Items
import React from 'react';
import { Toolbar , ToolbarItem, ToolbarContent } from '@patternfly/react-core';
import { Button, ButtonVariant, InputGroup, TextInput } from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons'

class ToolbarItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = <React.Fragment>
      <ToolbarItem>
        <InputGroup>
          <TextInput name="textInput1" id="textInput1" type="search" aria-label="search input example" />
          <Button variant={ButtonVariant.control} aria-label="search button for search input">
            <SearchIcon />
          </Button>
        </InputGroup>
      </ToolbarItem>
      <ToolbarItem><Button variant="secondary">Action</Button></ToolbarItem>
      <ToolbarItem variant="separator" />
      <ToolbarItem><Button variant="primary">Action</Button></ToolbarItem>
    </React.Fragment>;

    return <Toolbar id="toolbar"><ToolbarContent>{items}</ToolbarContent></Toolbar>;
  }
}

```

```js title=Adjusting-item-spacers
import React from 'react';
import { Toolbar , ToolbarItem, ToolbarGroup, ToolbarContent } from '@patternfly/react-core';
import { Button } from '@patternfly/react-core';

class ToolbarSpacers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const firstSpacers = {
      default: 'spacerNone'
    };
    const secondSpacers = {
      default: 'spacerSm'
    };
    const thirdSpacers = {
      default: 'spacerMd'
    };
    const fourthSpacers = {
      default: 'spacerLg'
    };
    const fifthSpacers = {
      default: 'spacerNone',
      md: 'spacerSm',
      lg: 'spacerMd',
      xl: 'spacerLg'
    };
    const spaceItems = {
      lg: 'spaceItemsLg'
    };

    const items = <React.Fragment>
          <ToolbarItem spacer={firstSpacers}><Button variant="secondary">Action</Button></ToolbarItem>
          <ToolbarItem spacer={secondSpacers}><Button variant="secondary">Action</Button></ToolbarItem>
          <ToolbarItem spacer={thirdSpacers}><Button variant="secondary">Action</Button></ToolbarItem>
          <ToolbarItem spacer={fourthSpacers}><Button variant="secondary">Action</Button></ToolbarItem>
          <ToolbarItem variant="separator"></ToolbarItem>
          <ToolbarItem spacer={fifthSpacers}><Button variant="secondary">Action</Button></ToolbarItem>
          <ToolbarItem><Button variant="primary">Action</Button></ToolbarItem>
          <ToolbarItem variant="separator"></ToolbarItem>
          <ToolbarGroup spaceItems={spaceItems}>
            <ToolbarItem><Button variant="secondary">Action</Button></ToolbarItem>
            <ToolbarItem><Button variant="secondary">Action</Button></ToolbarItem>
          </ToolbarGroup>
      </React.Fragment>;

    return <Toolbar id="toolbar-spacers"><ToolbarContent>{items}</ToolbarContent></Toolbar>;
  }
}

```

Often, it makes sense to group sets of like items to create desired associations and to enable items to respond together to changes in viewport width. (Note: This example does not demonstrate the desired responsive behavior of the toolbar. That is handled in later examples.)

```js title=Groups
import React from 'react';
import { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';
import { Button, Select, SelectOption } from '@patternfly/react-core';
import { EditIcon, CloneIcon, SyncIcon } from '@patternfly/react-icons'

class ToolbarGroupTypes extends React.Component {
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
      <ToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onFirstToggle}
          onSelect={this.onFirstSelect}
          selections={firstSelected}
          isOpen={firstIsExpanded}
        >
          {this.firstOptions.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
            />
          ))}
        </Select>
     </ToolbarItem>
     <ToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onSecondToggle}
          onSelect={this.onSecondSelect}
          selections={secondSelected}
          isOpen={secondIsExpanded}
        >
          {this.secondOptions.map((option, index) => (
           <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
            />
          ))}
        </Select>
      </ToolbarItem>
      <ToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onThirdToggle}
          onSelect={this.onThirdSelect}
          selections={thirdSelected}
          isOpen={thirdIsExpanded}
        >
          {this.thirdOptions.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
            />
          ))}
        </Select>
      </ToolbarItem>
    </React.Fragment>;

    const iconButtonGroupItems = <React.Fragment>
      <ToolbarItem><Button variant="plain" aria-label="edit"><EditIcon /></Button></ToolbarItem>
      <ToolbarItem><Button variant="plain" aria-label="clone"><CloneIcon /></Button></ToolbarItem>
      <ToolbarItem><Button variant="plain" aria-label="sync"><SyncIcon /></Button></ToolbarItem>
    </React.Fragment>;

    const buttonGroupItems = <React.Fragment>
      <ToolbarItem><Button variant="primary">Action</Button></ToolbarItem>
      <ToolbarItem><Button variant="secondary">Secondary</Button></ToolbarItem>
      <ToolbarItem><Button variant="tertiary">Tertiary</Button></ToolbarItem>
    </React.Fragment>;

    const items = <React.Fragment>
      <ToolbarGroup variant="filter-group">{filterGroupItems}</ToolbarGroup>
      <ToolbarGroup variant="icon-button-group">{iconButtonGroupItems}</ToolbarGroup>
      <ToolbarGroup variant="button-group">{buttonGroupItems}</ToolbarGroup>
    </React.Fragment>;

    return <Toolbar id="toolbar-group-types"><ToolbarContent>{items}</ToolbarContent></Toolbar>;
  }
}

```

## Examples with toggle groups and filters
A toggle group can be used when you want to collapse a set of items into an overlay panel at a certain breakpoint. This allows complex toolbars with multiple items and groups of items to be responsive. A toggle group is useful for containing filter controls, for example. When the toolbar responds to adapt to a mobile viewport, the contents contained in a toggle group will collapse into an overlay panel that can be toggled by clicking the Filter icon.

The Toggle group can either have the toggle state managed by the consumer, or the component.

  - The first Toggle group example below demonstrates a component managed toggle state.
```js title=Component-managed-toggle-groups
import React from 'react';
import { Toolbar , ToolbarItem, ToolbarContent, ToolbarToggleGroup, ToolbarGroup } from '@patternfly/react-core';
import { Button, ButtonVariant, InputGroup, Select, SelectOption, TextInput } from '@patternfly/react-core';
import { SearchIcon, FilterIcon } from '@patternfly/react-icons'

class ToolbarComponentMangedToggleGroup extends React.Component {
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
      <ToolbarItem>
        <InputGroup>
          <TextInput name="textInput2" id="textInput2" type="search" aria-label="search input example" onChange={this.onInputChange} value={inputValue}/>
          <Button variant={ButtonVariant.control} aria-label="search button for search input">
            <SearchIcon />
          </Button>
        </InputGroup>
      </ToolbarItem>
      <ToolbarGroup variant="filter-group">
          <ToolbarItem>
            <Select
              variant={SelectVariant.single}
              aria-label="Select Input"
              onToggle={this.onStatusToggle}
              onSelect={this.onStatusSelect}
              selections={statusSelected}
              isOpen={statusIsExpanded}
            >
              {this.statusOptions.map((option, index) => (
               <SelectOption
                 isDisabled={option.disabled}
                 key={index}
                 value={option.value}
               />
              ))}
            </Select>
          </ToolbarItem>
          <ToolbarItem>
            <Select
              variant={SelectVariant.single}
              aria-label="Select Input"
              onToggle={this.onRiskToggle}
              onSelect={this.onRiskSelect}
              selections={riskSelected}
              isOpen={riskIsExpanded}
            >
              {this.riskOptions.map((option, index) => (
                <SelectOption
                   isDisabled={option.disabled}
                   key={index}
                   value={option.value}
                 />
               ))}
            </Select>
          </ToolbarItem>
       </ToolbarGroup>
    </React.Fragment>;

    const items =  <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">{toggleGroupItems}</ToolbarToggleGroup>;

    return <Toolbar id="toolbar-component-managed-toggle-groups" className='pf-m-toggle-group-container'>
      <ToolbarContent>
        {items}
      </ToolbarContent>
    </Toolbar>;
  }
}
```
The second Toggle group example below demonstrates a consumer managed toggle state. If the consumer would prefer to manage the expanded state of the toggle group for smaller screen widths:
  1. Add a toggleIsExpanded callback to Toolbar
  2. Pass in a boolean into the isExpanded prop to Toolbar

- Note: Although the toggle group is aware of the consumer provided breakpoint, the expandable content is not. So if the expandable content is expanded and the screen width surpasses that of the breakpoint, then the expandable content will not know that and will remain open, this case should be considered and handled by the consumer as well.

```js title=Consumer-managed-toggle-groups
import React from 'react';
import { Toolbar , ToolbarItem, ToolbarContent, ToolbarToggleGroup, ToolbarGroup } from '@patternfly/react-core';
import { Button, ButtonVariant, InputGroup, Select, SelectOption } from '@patternfly/react-core';
import { TextInput, SearchIcon, FilterIcon } from '@patternfly/react-icons'

class ToolbarConsumerMangedToggleGroup extends React.Component {
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
      <ToolbarItem>
        <InputGroup>
          <TextInput name="textInput2" id="textInput2" type="search" aria-label="search input example" onChange={this.onInputChange} value={inputValue}/>
          <Button variant={ButtonVariant.control} aria-label="search button for search input">
            <SearchIcon />
          </Button>
        </InputGroup>
      </ToolbarItem>
      <ToolbarGroup variant="filter-group">
          <ToolbarItem>
            <Select
              variant={SelectVariant.single}
              aria-label="Select Input"
              onToggle={this.onStatusToggle}
              onSelect={this.onStatusSelect}
              selections={statusSelected}
              isOpen={statusIsExpanded}
            >
              {this.statusOptions.map((option, index) => (
               <SelectOption
                 isDisabled={option.disabled}
                 key={index}
                 value={option.value}
               />
              ))}
            </Select>
          </ToolbarItem>
          <ToolbarItem>
            <Select
              variant={SelectVariant.single}
              aria-label="Select Input"
              onToggle={this.onRiskToggle}
              onSelect={this.onRiskSelect}
              selections={riskSelected}
              isOpen={riskIsExpanded}
            >
              {this.riskOptions.map((option, index) => (
                <SelectOption
                  isDisabled={option.disabled}
                  key={index}
                  value={option.value}
                />
              ))}
            </Select>
        </ToolbarItem>
      </ToolbarGroup>
    </React.Fragment>;

    const items =  <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">{toggleGroupItems}</ToolbarToggleGroup>;

    return (
      <Toolbar id="toolbar-consumer-managed-toggle-groups"
        isExpanded={isExpanded}
        className='pf-m-toggle-group-container'
        toggleIsExpanded={this.toggleIsExpanded}
      >
        <ToolbarContent>
          {items}
        </ToolbarContent>
      </Toolbar>
    );
  }
}
```

The ToolbarFilter component expects a consumer managed list of applied filters and a delete chip handler to be passed as props. Pass a deleteChipGroup prop to provide both a handler and visual styling to remove all chips in a group. Then the rendering of chips will be handled responsively by the Toolbar
When filters are applied, the toolbar will expand in height to make space for a row of filter chips. Upon clearing the applied filters, the toolbar will collapse to its default height.

```js title=Data-toolbar-with-filters
import React from 'react';
import {
    Toolbar,
    ToolbarItem,
    ToolbarContent,
    ToolbarFilter,
    ToolbarToggleGroup,
    ToolbarGroup } from '@patternfly/react-core';
import {
    Button,
    ButtonVariant,
    InputGroup,
    Select,
    SelectOption,
    Dropdown,
    DropdownItem,
    DropdownSeparator,
    KebabToggle } from '@patternfly/react-core';
import { TextInput, SearchIcon, FilterIcon, EditIcon, CloneIcon, SyncIcon } from '@patternfly/react-icons'

class ToolbarWithFilterExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      inputValue: "",
      statusIsExpanded: false,
      riskIsExpanded: false,
      filters: {
        risk: ['Low'],
        status: ['New', 'Pending'],
      },
      kebabIsOpen: false
    };

    this.toggleIsExpanded = () => {
      this.setState((prevState) => ({
        isExpanded: !prevState.isExpanded
      }));
    };

    this.closeExpandableContent = () => {
      this.setState(() => ({
        isExpanded: false
      }));
    };

    this.onInputChange = (newValue) => {
      this.setState({inputValue: newValue});
    };

    this.onSelect = (type, event, selection) => {
      const checked = event.target.checked;
      this.setState((prevState) => {
        const prevSelections = prevState.filters[type];
        return {
          filters: {
            ...prevState.filters,
            [type]: checked
              ? [...prevSelections, selection]
              : prevSelections.filter(value => value !== selection)
          }
        };
      });
    };

    this.onStatusSelect = (event, selection) => {
      this.onSelect('status', event, selection);
    };

    this.onRiskSelect = (event, selection) => {
      this.onSelect('risk', event, selection);
    };

    this.onDelete = (type = "", id = "") => {
      if (type) {
        this.setState((prevState) => {
          const newState = Object.assign(prevState);
          newState.filters[type.toLowerCase()] = newState.filters[type.toLowerCase()].filter(s => s !== id);
          return {
            filters: newState.filters
          };
        });
      } else {
        this.setState({
          filters: {
            risk: [],
            status: [],
          }
        })
      }
    };

    this.onDeleteGroup = (type) => {
      this.setState((prevState) => {
        prevState.filters[type.toLowerCase()] = [];
        return {
          filters: prevState.filters,
        }
      });
    };

    this.onStatusToggle = isExpanded => {
      this.setState({
        statusIsExpanded: isExpanded
      });
    };

    this.onRiskToggle = isExpanded => {
      this.setState({
        riskIsExpanded: isExpanded
      });
    };

    this.onKebabToggle = isOpen => {
      this.setState({
        kebabIsOpen: isOpen
      });
    };

  }

  componentDidMount() {
    window.addEventListener('resize', this.closeExpandableContent);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.closeExpandableContent);
  }

  render() {
    const {
      inputValue,
      filters,
      statusIsExpanded,
      riskIsExpanded,
      kebabIsOpen,
    } = this.state;

    const statusMenuItems = [
      <SelectOption key="statusNew" value="New" />,
      <SelectOption key="statusPending" value="Pending" />,
      <SelectOption key="statusRunning" value="Running" />,
      <SelectOption key="statusCancelled" value="Cancelled" />
    ];

    const riskMenuItems = [
      <SelectOption key="riskLow" value="Low" />,
      <SelectOption key="riskMedium" value="Medium" />,
      <SelectOption key="riskHigh" value="High" />
    ];

    const toggleGroupItems = <React.Fragment>
      <ToolbarItem>
        <InputGroup>
          <TextInput name="textInput2" id="textInput2" type="search" aria-label="search input example" onChange={this.onInputChange} value={inputValue}/>
          <Button variant={ButtonVariant.control} aria-label="search button for search input">
            <SearchIcon />
          </Button>
        </InputGroup>
      </ToolbarItem>
      <ToolbarGroup variant="filter-group">
          <ToolbarFilter chips={filters.status} deleteChip={this.onDelete} deleteChipGroup={this.onDeleteGroup} categoryName="Status">
            <Select
              variant={SelectVariant.checkbox}
              aria-label="Status"
              onToggle={this.onStatusToggle}
              onSelect={this.onStatusSelect}
              selections={filters.status}
              isOpen={statusIsExpanded}
              placeholderText="Status"
            >
              {statusMenuItems}
            </Select>
          </ToolbarFilter>
          <ToolbarFilter chips={filters.risk} deleteChip={this.onDelete} categoryName="Risk">
            <Select
              variant={SelectVariant.checkbox}
              aria-label="Risk"
              onToggle={this.onRiskToggle}
              onSelect={this.onRiskSelect}
              selections={filters.risk}
              isOpen={riskIsExpanded}
              placeholderText="Risk"
            >
              {riskMenuItems}
            </Select>
          </ToolbarFilter>
      </ToolbarGroup>
    </React.Fragment>;

    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];

    const toolbarItems = <React.Fragment>
      <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
        {toggleGroupItems}
      </ToolbarToggleGroup>
      <ToolbarGroup variant="icon-button-group">
        <ToolbarItem><Button variant="plain" aria-label="edit"><EditIcon /></Button></ToolbarItem>
        <ToolbarItem><Button variant="plain" aria-label="clone"><CloneIcon /></Button></ToolbarItem>
        <ToolbarItem><Button variant="plain" aria-label="sync"><SyncIcon /></Button></ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem>
        <Dropdown
          toggle={<KebabToggle onToggle={this.onKebabToggle} />}
          isOpen={kebabIsOpen}
          isPlain
          dropdownItems={dropdownItems}
        />
      </ToolbarItem>
    </React.Fragment>;

    return (
      <Toolbar id="toolbar-with-filter"
        className='pf-m-toggle-group-container'
        collapseListedFiltersBreakpoint='xl'
        clearAllFilters={this.onDelete}
      >
        <ToolbarContent>{toolbarItems}</ToolbarContent>
      </Toolbar>
    );
  }
}

```

There may be situations where all of the required elements simply cannot fit in a single line.

```js title=Stacked-example
import React from 'react';
import { Toolbar, ToolbarContent, ToolbarToggleGroup, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';
import { Button, Select, SelectOption, Pagination, Dropdown, DropdownToggle, DropdownToggleCheckbox, DropdownItem, Divider } from '@patternfly/react-core';
import { FilterIcon, CloneIcon, SyncIcon } from '@patternfly/react-icons'

class ToolbarStacked extends React.Component {
  constructor(props) {
    super(props);

    // toggle group - three option menus with labels, two icon buttons, Kebab menu - right aligned
    // pagination - right aligned
    this.resourceOptions = [
      { value: 'All resources', disabled: false },
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
      { value: 'Any type', disabled: false, isPlaceholder: true },
      { value: 'No type', disabled: false },
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
      <ToolbarItem variant="label" id="stacked-example-resource-select">Resource</ToolbarItem>
      <ToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onResourceToggle}
          onSelect={this.onResourceSelect}
          selections={resourceSelected}
          isOpen={resourceIsExpanded}
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
     </ToolbarItem>
     <ToolbarItem variant="label" id="stacked-example-status-select">Status</ToolbarItem>
     <ToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onStatusToggle}
          onSelect={this.onStatusSelect}
          selections={statusSelected}
          isOpen={statusIsExpanded}
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
      </ToolbarItem>
      <ToolbarItem variant="label" id="stacked-example-type-select">Type</ToolbarItem>
      <ToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onTypeToggle}
          onSelect={this.onTypeSelect}
          selections={typeSelected}
          isOpen={typeIsExpanded}
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
      </ToolbarItem>
    </React.Fragment>;

    const iconButtonGroupItems = <React.Fragment>
      <ToolbarItem><Button variant="plain" aria-label="clone"><CloneIcon /></Button></ToolbarItem>
      <ToolbarItem><Button variant="plain" aria-label="sync"><SyncIcon /></Button></ToolbarItem>
    </React.Fragment>;


    const firstRowItems = <React.Fragment>
      <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">{toggleGroupItems}</ToolbarToggleGroup>
      <ToolbarGroup variant="icon-button-group">{iconButtonGroupItems}</ToolbarGroup>
      <ToolbarItem variant="overflow-menu">Overflow Menu</ToolbarItem>
    </React.Fragment>;

    const secondRowItems = <React.Fragment>
      <ToolbarItem variant="bulk-select">
        <Dropdown
            onSelect={this.onSplitButtonSelect}
            toggle={(
              <DropdownToggle
                id="stacked-example-toggle"
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
      </ToolbarItem>
      <ToolbarItem variant="pagination" align={{ default: 'alignRight' }}>
        <Pagination
          itemCount={37}
          perPage={this.state.perPage}
          page={this.state.page}
          onSetPage={this.onSetPage}
          widgetId="pagination-options-menu-top"
          onPerPageSelect={this.onPerPageSelect}
        />
      </ToolbarItem>
    </React.Fragment>;

    return <Toolbar id="toolbar-group-types">
      <ToolbarContent className='pf-m-toggle-group-container'>{firstRowItems}</ToolbarContent>
      <Divider />
      <ToolbarContent>{secondRowItems}</ToolbarContent>
    </Toolbar>;
  }
}
```
