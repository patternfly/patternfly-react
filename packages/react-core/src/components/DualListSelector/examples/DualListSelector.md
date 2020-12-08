---
id: Dual list selector
section: components
cssPrefix: 'pf-c-dual-list-selector'
propComponents: ['DualListSelector']
beta: true
---

import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/js/icons/pficon-sort-common-asc-icon';

## Examples

### Basic

```js
import React from 'react';
import { DualListSelector } from '@patternfly/react-core';

class BasicDualListSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableOptions: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      chosenOptions: []
    };

    this.onListChange = (newAvailableOptions, newChosenOptions) => {
      this.setState({
        availableOptions: newAvailableOptions.sort(),
        chosenOptions: newChosenOptions.sort()
      });
    };
  }

  render() {
    return (
      <DualListSelector
        availableOptions={this.state.availableOptions}
        chosenOptions={this.state.chosenOptions}
        onListChange={this.onListChange}
        id="basicSelector"
      />
    );
  }
}
```

### Basic with search

```js
import React from 'react';
import { DualListSelector } from '@patternfly/react-core';

class BasicDualListSelectorWithSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableOptions: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      chosenOptions: []
    };

    this.onListChange = (newAvailableOptions, newChosenOptions) => {
      this.setState({
        availableOptions: newAvailableOptions.sort(),
        chosenOptions: newChosenOptions.sort()
      });
    };
  }

  render() {
    return (
      <DualListSelector
        isSearchable
        availableOptions={this.state.availableOptions}
        chosenOptions={this.state.chosenOptions}
        onListChange={this.onListChange}
        id="basicSelectorWithSearch"
      />
    );
  }
}
```

### Using more complex options with actions

```js
import React from 'react';
import { Button, ButtonVariant, Dropdown, DropdownItem, DualListSelector, KebabToggle } from '@patternfly/react-core';
import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/js/icons/pficon-sort-common-asc-icon';

class ComplexDualListSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableOptions: [<span>Option 1</span>, <span>Option 3</span>, <span>Option 4</span>, <span>Option 2</span>],
      chosenOptions: [],
      isAvailableKebabOpen: false,
      isChosenKebabOpen: false
    };

    this.onSort = panel => {
      if (panel === 'available') {
        this.setState(prevState => {
          const available = prevState.availableOptions.sort((a, b) => {
            let returnValue = 0;
            if (a.props.children > b.props.children) returnValue = 1;
            if (a.props.children < b.props.children) returnValue = -1;
            return returnValue;
          });
          return {
            availableOptions: available
          };
        });
      }

      if (panel === 'chosen') {
        this.setState(prevState => {
          const chosen = prevState.chosenOptions.sort((a, b) => {
            let returnValue = 0;
            if (a.props.children > b.props.children) returnValue = 1;
            if (a.props.children < b.props.children) returnValue = -1;
            return returnValue;
          });
          return {
            chosenOptions: chosen
          };
        });
      }
    };

    this.onListChange = (newAvailableOptions, newChosenOptions) => {
      this.setState({
        availableOptions: newAvailableOptions,
        chosenOptions: newChosenOptions
      });
    };

    this.onToggle = (isOpen, pane) => {
      this.setState(prevState => {
        return {
          isAvailableKebabOpen: pane === 'available' ? isOpen : prevState.isAvailableKebabOpen,
          isChosenKebabOpen: pane === 'chosen' ? isOpen : prevState.isChosenKebabOpen
        };
      });
    };

    this.filterOption = (option, input) => {
      return option.props.children.includes(input);
    };
  }

  render() {
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="second action" component="button">
        Second Action
      </DropdownItem>
    ];

    const availableOptionsActions = [
      <Button
        variant={ButtonVariant.plain}
        onClick={() => this.onSort('available')}
        aria-label="Sort"
        key="availableSortButton"
      >
        <PficonSortCommonAscIcon />
      </Button>,
      <Dropdown
        toggle={<KebabToggle onToggle={isOpen => this.onToggle(isOpen, 'available')} id="toggle-id-1" />}
        isOpen={this.state.isAvailableKebabOpen}
        isPlain
        dropdownItems={dropdownItems}
        key="availableDropdown"
      />
    ];

    const chosenOptionsActions = [
      <Button
        variant={ButtonVariant.plain}
        onClick={() => this.onSort('chosen')}
        aria-label="Sort"
        key="chosenSortButton"
      >
        <PficonSortCommonAscIcon />
      </Button>,
      <Dropdown
        toggle={<KebabToggle onToggle={isOpen => this.onToggle(isOpen, 'chosen')} id="toggle-id-2" />}
        isOpen={this.state.isChosenKebabOpen}
        isPlain
        dropdownItems={dropdownItems}
        key="chosenDropdown"
      />
    ];

    return (
      <DualListSelector
        isSearchable
        availableOptions={this.state.availableOptions}
        availableOptionsActions={availableOptionsActions}
        chosenOptions={this.state.chosenOptions}
        chosenOptionsActions={chosenOptionsActions}
        addAll={this.onListChange}
        removeAll={this.onListChange}
        addSelected={this.onListChange}
        removeSelected={this.onListChange}
        filterOption={this.filterOption}
        id="withActions"
      />
    );
  }
}
```

### Expandable options with checkboxes

```js
import React from 'react';
import { DualListSelector } from '@patternfly/react-core';

class TreeDualListSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenOptions: [],
      availableOptions: [
        {
          id: 'F1',
          text: 'Folder 1',
          isChecked: false,
          checkProps: { 'aria-label': 'Folder 1' },
          hasBadge: true,
          badgeProps: { isRead: true },
          children: [
            { id: 'O1', text: 'Option 1', isChecked: false, checkProps: { 'aria-label': 'Option 1' } },
            {
              id: 'F1A',
              text: 'Folder 1A',
              isChecked: false,
              checkProps: { 'aria-label': 'Folder 1A' },
              children: [
                { id: 'O2', text: 'Option 2', isChecked: false, checkProps: { 'aria-label': 'Option 2' } },
                { id: 'O3', text: 'Option 3', isChecked: false, checkProps: { 'aria-label': 'Option 3' } }
              ]
            },
            { id: 'O4', text: 'Option 4', isChecked: false, checkProps: { 'aria-label': 'Option 4' } }
          ]
        },
        { id: 'O5', text: 'Option 5', isChecked: false, checkProps: { 'aria-label': 'Option 5' } },
        {
          id: 'F2',
          text: 'Folder 2',
          isChecked: false,
          checkProps: { 'aria-label': 'Folder 2' },
          children: [
            { id: 'O6', text: 'Option 6', isChecked: false, checkProps: { 'aria-label': 'Option 6' } },
            { id: 'O7', text: 'Option 5', isChecked: false, checkProps: { 'aria-label': 'Option 5 duplicate' } }
          ]
        }
      ]
    };

    this.onListChange = (newAvailableOptions, newChosenOptions) => {
      this.setState({
        availableOptions: newAvailableOptions,
        chosenOptions: newChosenOptions
      });
    };
  }

  render() {
    return (
      <DualListSelector
        availableOptions={this.state.availableOptions}
        chosenOptions={this.state.chosenOptions}
        onListChange={this.onListChange}
        id="basicSelector"
        isSearchable
        isTree
      />
    );
  }
}
```
