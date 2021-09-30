---
id: Dual list selector
section: components
cssPrefix: 'pf-c-dual-list-selector'
propComponents: [
  'DualListSelector', 
  'DualListSelectorPane', 
  'DualListSelectorControl', 
  'DualListSelectorControlsWrapper', 
  'DualListSelectorTree',
  'DualListSelectorListItem',
  'DualListSelectorTreeItemData'
]
beta: true
---

import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-asc-icon';

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

### Basic with tooltips

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
        addAllTooltip="Add all options"
        addAllTooltipProps={{ position: 'top' }}
        addSelectedTooltip="Add selected options"
        addSelectedTooltipProps={{ position: 'right' }}
        removeSelectedTooltip="Remove selected options"
        removeSelectedTooltipProps={{ position: 'left' }}
        removeAllTooltip="Remove all options"
        removeAllTooltipProps={{ position: 'bottom' }}
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
import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-asc-icon';

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

### Expandable options

```js
import React from 'react';
import { DualListSelector } from '@patternfly/react-core';

class TreeDualListSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenOptions: [
        {
          id: 'CF1',
          text: 'Chosen Folder 1',
          isChecked: false,
          checkProps: { 'aria-label': 'Chosen Folder 1' },
          hasBadge: true,
          badgeProps: { isRead: true },
          children: [
            { id: 'CO1', text: 'Chosen Option 1', isChecked: false, checkProps: { 'aria-label': 'Chosen Option 1' } },
            {
              id: 'CF1A',
              text: 'Chosen Folder 1A',
              isChecked: false,
              checkProps: { 'aria-label': 'Chosen Folder 1A' },
              children: [
                {
                  id: 'CO2',
                  text: 'Chosen Option 2',
                  isChecked: false,
                  checkProps: { 'aria-label': 'Chosen Option 2' }
                },
                {
                  id: 'CO3',
                  text: 'Chosen Option 3',
                  isChecked: false,
                  checkProps: { 'aria-label': 'Chosen Option 3' }
                }
              ]
            },
            { id: 'CO4', text: 'Chosen Option 4', isChecked: false, checkProps: { 'aria-label': 'Chosen Option 4' } }
          ]
        }
      ],
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

### Composable dual list selector

```js
import React from 'react';
import { 
  Button,
  ButtonVariant,
  DualListSelector, 
  DualListSelectorPane,
  DualListSelectorList,
  DualListSelectorListItem,
  DualListSelectorControlsWrapper,
  DualListSelectorControl,
  SearchInput
} from '@patternfly/react-core';
import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-asc-icon';

const ComposableDualListSelector = () => {
  const [availableOptions, setAvailableOptions] = React.useState([
    { text: 'Apple', selected: false, isVisible: true },
    { text: 'Banana', selected: false, isVisible: true },
    { text: 'Pineapple', selected: false, isVisible: true },
    { text: 'Orange', selected: false, isVisible: true },
    { text: 'Grape', selected: false, isVisible: true },
    { text: 'Peach', selected: false, isVisible: true },
    { text: 'Strawberry', selected: false, isVisible: true }
    ]);
  const [chosenOptions, setChosenOptions] = React.useState([]);
  const [availableFilter, setAvailableFilter] = React.useState('');
  const [chosenFilter, setChosenFilter] = React.useState('');

  const moveSelected = (fromAvailable) => {
    const sourceOptions = fromAvailable ? availableOptions : chosenOptions;
    const destinationOptions = fromAvailable ? chosenOptions : availableOptions;
    for (let i = 0; i < sourceOptions.length; i++) {
      const option = sourceOptions[i];
      if (option.selected && option.isVisible) {
        sourceOptions.splice(i, 1);
        destinationOptions.push(option);
        option.selected = false;
        i--;
      }
    }
    if (fromAvailable) {
      setAvailableOptions([...sourceOptions]);
      setChosenOptions([...destinationOptions]);
    } else {
      setChosenOptions([...sourceOptions]);
      setAvailableOptions([...destinationOptions]);
    }
  };
  
  const moveAll = (fromAvailable) => {
    if (fromAvailable) {
      setChosenOptions([...availableOptions.filter(x => x.isVisible), ...chosenOptions]);
      setAvailableOptions([...availableOptions.filter(x => !x.isVisible)]);
    } else {
      setAvailableOptions([...chosenOptions.filter(x => x.isVisible), ...availableOptions]);
      setChosenOptions([...chosenOptions.filter(x => !x.isVisible)]);
    }
  };
  
  const onOptionSelect = (event, index, isChosen) => {
    if (isChosen) {
      const newChosen = [...chosenOptions];
      newChosen[index].selected = !chosenOptions[index].selected;
      setChosenOptions(newChosen);
    } else {
      const newAvailable = [...availableOptions];
      newAvailable[index].selected = !availableOptions[index].selected;
      setAvailableOptions(newAvailable);
    }
  };
  
  const buildSearchInput = (isAvailable) => {
    const onChange = (value) => {
      isAvailable ? setAvailableFilter(value) : setChosenFilter(value);
      const toFilter = isAvailable ? [...availableOptions] : [...chosenOptions];
      toFilter.forEach((option) => {
        option.isVisible = value === '' || option.text.toLowerCase().includes(value.toLowerCase());
      })
    };
    
    return (
      <SearchInput
        value={isAvailable ? availableFilter : chosenFilter}
        onChange={onChange}
        onClear={() => onChange('')}
      />
    );
  };
  
  const buildSort = (isAvailable) => {
    const onSort = () => {
      const toSort = isAvailable ? [...availableOptions] : [...chosenOptions];
      toSort.sort((a,b) => {
        if (a.text > b.text) return 1;
        if (a.text < b.text) return -1;
        return 0;
      });
      if (isAvailable) {
        setAvailableOptions(toSort);
      } else {
        setChosenOptions(toSort);
      }
    };
    
    return (
      <Button
        variant={ButtonVariant.plain}
        onClick={onSort}
        aria-label="Sort"
        key="sortButton"
      >
        <PficonSortCommonAscIcon />
      </Button>
    );
  };

  return (
    <DualListSelector>
      <DualListSelectorPane
        title="Available"
        status={`${availableOptions.filter(x => x.selected && x.isVisible).length} of ${availableOptions.filter(x => x.isVisible).length} options selected`}
        searchInput={buildSearchInput(true)}
        actions={[buildSort(true)]}
      >
        <DualListSelectorList>
          {availableOptions.map((option, index) => {
            return option.isVisible ? (
              <DualListSelectorListItem
                key={index}
                isSelected={option.selected}
                id={`composable-option-${index}`}
                onOptionSelect={(e) => onOptionSelect(e, index, false)}
              >
                {option.text}
              </DualListSelectorListItem>
            ) : null;
          })}
        </DualListSelectorList>
      </DualListSelectorPane>
      <DualListSelectorControlsWrapper
        aria-label="Selector controls"
      >
        <DualListSelectorControl
          isDisabled={!availableOptions.some(option => option.selected)}
          onClick={() => moveSelected(true)}
          aria-label="Add selected"
          tooltipContent="Add selected"
        >
          <AngleRightIcon />
        </DualListSelectorControl>
        <DualListSelectorControl
          isDisabled={availableOptions.length === 0}
          onClick={() => moveAll(true)}
          aria-label="Add all"
          tooltipContent="Add all"
        >
          <AngleDoubleRightIcon />
        </DualListSelectorControl>
        <DualListSelectorControl
          isDisabled={chosenOptions.length === 0}
          onClick={() => moveAll(false)}
          aria-label="Remove all"
          tooltipContent="Remove all"
        >
          <AngleDoubleLeftIcon />
        </DualListSelectorControl>
        <DualListSelectorControl
          onClick={() => moveSelected(false)}
          isDisabled={!chosenOptions.some(option => option.selected)}
          aria-label="Remove selected"
          tooltipContent="Remove selected"
        >
          <AngleLeftIcon />
        </DualListSelectorControl>
      </DualListSelectorControlsWrapper>
      <DualListSelectorPane
        title="Chosen"
        status={`${chosenOptions.filter(x => x.selected && x.isVisible).length} of ${chosenOptions.filter(x => x.isVisible).length} options selected`}
        searchInput={buildSearchInput(false)}
        actions={[buildSort(false)]}
        isChosen
      >
        <DualListSelectorList>
          {chosenOptions.map((option, index) => {
            return option.isVisible ? (
              <DualListSelectorListItem
                key={index}
                isSelected={option.selected}
                id={`composable-option-${index}`}
                onOptionSelect={(e) => onOptionSelect(e, index, true)}
              >
                {option.text}
              </DualListSelectorListItem>
            ) : null;
          })}
        </DualListSelectorList>
      </DualListSelectorPane>
    </DualListSelector>
  );
}
```

### Composable dual list selector tree

```js
import React from 'react';
import { 
  DualListSelector, 
  DualListSelectorPane,
  DualListSelectorList,
  DualListSelectorControlsWrapper,
  DualListSelectorControl,
  DualListSelectorTree
} from '@patternfly/react-core';
import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';

const ComposableDualListSelectorTree = () => {
  const [availableOptions, setAvailableOptions] = React.useState([
    {
      id: 'fruit',
      text: 'Fruit',
      isChecked: false,
      checkProps: { 'aria-label': 'Folder 1' },
      hasBadge: true,
      badgeProps: { isRead: true },
      children: [
        { id: 'apple', text: 'Apple', isChecked: false, checkProps: { 'aria-label': 'Select apple' }, parentId: 'fruit' },
        {
          id: 'berries',
          text: 'Berries',
          isChecked: false,
          checkProps: { 'aria-label': 'Select fruit' },
          children: [
            { id: 'blueberry', text: 'Blueberry', isChecked: false, checkProps: { 'aria-label': 'Select blueberry' }, parentId: 'berries' },
            { id: 'strawberry', text: 'Strawberry', isChecked: false, checkProps: { 'aria-label': 'Select strawberry' }, parentId: 'berries' }
          ]
        },
        { id: 'banana', text: 'Banana', isChecked: false, checkProps: { 'aria-label': 'Select banana' }, parentId: 'fruit'}
      ]
    },
    { id: 'bread', text: 'Bread', isChecked: false, checkProps: { 'aria-label': 'Select bread' } },
    {
      id: 'vegetables',
      text: 'Vegetables',
      isChecked: false,
      checkProps: { 'aria-label': 'Select vegetables' },
      hasBadge: true,
      badgeProps: { isRead: true },
      children: [
        { id: 'broccoli', text: 'Broccoli', isChecked: false, checkProps: { 'aria-label': 'Select broccoli' }, parentId: 'vegetables' },
        { id: 'cauliflower', text: 'Cauliflower', isChecked: false, checkProps: { 'aria-label': 'Select Cauliflower' }, parentId: 'vegetables'}
      ]
    }
  ]);
  const [chosenOptions, setChosenOptions] = React.useState([
    {
      id: 'proteins',
      text: 'Proteins',
      isChecked: false,
      checkProps: { 'aria-label': 'Select proteins' },
      hasBadge: true,
      badgeProps: { isRead: true },
      children: [
        { id: 'beans', text: 'Beans', isChecked: false, checkProps: { 'aria-label': 'Select beans' }, parentId: 'proteins' },
        {
          id: 'meats',
          text: 'Meats',
          isChecked: false,
          hasBadge: true,
          badgeProps: { isRead: true },
          checkProps: { 'aria-label': 'Select meats' },
          parentId: 'proteins',
          children: [
            {
              id: 'beef',
              text: 'Beef',
              isChecked: false,
              checkProps: { 'aria-label': 'Select beef' },
              parentId: 'meats'
            },
            {
              id: 'chicken',
              text: 'Chicken',
              isChecked: false,
              checkProps: { 'aria-label': 'Select chicken' },
              parentId: 'meats'
            }
          ]
        },
        { id: 'tofu', text: 'Tofu', isChecked: false, checkProps: { 'aria-label': 'Select tofu' }, parentId: 'proteins' }
      ]
    }
  ]);
  
  const areAllDescendantsChecked = (treeItem) =>
      treeItem.children
        ? treeItem.children.every(child => areAllDescendantsChecked(child))
        : treeItem.isChecked;
  const areSomeDescendantsChecked = (treeItem) =>
      treeItem.children
        ? treeItem.children.some(child => areSomeDescendantsChecked(child))
        : treeItem.isChecked;
  
  // set this option checked and all its children also checked
  const setOptionIsChecked = (checked, treeToUpdate) => {
    treeToUpdate.isChecked = checked;
    if (treeToUpdate.children) {
      treeToUpdate.children = treeToUpdate.children.map((child) => {
        return setOptionIsChecked(checked, child);
      });
    }
    return treeToUpdate;
  };
  
  const setTreeChecked = (originalTree, treeToUpdate, checkedId) => {
    if (originalTree.id === checkedId) {
      return treeToUpdate;
    } else if (originalTree.children) {
      if (areAllDescendantsChecked(originalTree)) {
        originalTree.isChecked = true;
      } else if (areSomeDescendantsChecked(originalTree)) {
        originalTree.isChecked = null;
      }
      originalTree.children.forEach((option, index) => {
        originalTree.children[index] = setTreeChecked(option, treeToUpdate, checkedId);
      });
    }
    return originalTree;
  };
  
  const onOptionCheck = (e, checked, treeToUpdate, isAvailable) => {
    let updatedOptions = isAvailable ? [...availableOptions] : [...chosenOptions];
    updatedOptions.forEach(tree => {
      setTreeChecked(tree, setOptionIsChecked(checked, treeToUpdate), treeToUpdate.id);
    });
    if (isAvailable) {
      setAvailableOptions(updatedOptions);
    } else {
      setChosenOptions(updatedOptions);
    }
  };
  
  const moveAll = (fromAvailable) => {
    let source = fromAvailable ? [...availableOptions] : [...chosenOptions];
    let dest = fromAvailable ? [...chosenOptions] : [...availableOptions];
    source.forEach(option => {
      if (!option.parentId) {
        dest = [...dest, option];
      } else {
        // find parent and append it to parent's children
      }
    });
    if (fromAvailable) {
      setAvailableOptions([]);
      setChosenOptions(dest);
    } else {
      setAvailableOptions(dest);
      setChosenOptions([]);
    }
  };
  
  const findCheckedTrees = (tree) => {
    if (tree.isChecked) return tree;
    if (tree.children) {
      return findCheckedTrees(tree)
    }
  };
  
  const moveChecked = (fromAvailable) => {
    
  };

  return (
    <DualListSelector isTree>
      <DualListSelectorPane
        title="Available"
        status={`${availableOptions.filter(x => x.selected && x.isVisible).length} of ${availableOptions.filter(x => x.isVisible).length} options selected`}
      >
        <DualListSelectorList>
          <DualListSelectorTree
            data={availableOptions}
            onOptionCheck={(e, checked, checkedId, newCheckedItems) => onOptionCheck(e, checked,checkedId, newCheckedItems, true)}
          />
        </DualListSelectorList>
      </DualListSelectorPane>
      <DualListSelectorControlsWrapper
        aria-label="Selector controls"
      >
        <DualListSelectorControl
          isDisabled={!availableOptions.some(option => option.isChecked || areSomeDescendantsChecked(option))}
          onClick={() => moveChecked(true)}
          aria-label="Add selected"
        >
          <AngleRightIcon />
        </DualListSelectorControl>
        <DualListSelectorControl
          isDisabled={availableOptions.length === 0}
          onClick={() => moveAll(true)}
          aria-label="Add all"
        >
          <AngleDoubleRightIcon />
        </DualListSelectorControl>
        <DualListSelectorControl
          isDisabled={chosenOptions.length === 0}
          onClick={() => moveAll(false)}
          aria-label="Remove all"
        >
          <AngleDoubleLeftIcon />
        </DualListSelectorControl>
        <DualListSelectorControl
          onClick={() => moveChecked(false)}
          isDisabled={!chosenOptions.some(option => option.isChecked || areSomeDescendantsChecked(option))}
          aria-label="Remove selected"
        >
          <AngleLeftIcon />
        </DualListSelectorControl>
      </DualListSelectorControlsWrapper>
      <DualListSelectorPane
        title="Chosen"
        status={`${chosenOptions.filter(x => x.selected && x.isVisible).length} of ${chosenOptions.filter(x => x.isVisible).length} options selected`}
        isChosen
      >
        <DualListSelectorList>
          <DualListSelectorTree
            data={chosenOptions}
            onOptionCheck={(e, checked, newCheckedItems) => onOptionCheck(e, checked, newCheckedItems, false)}
          />
        </DualListSelectorList>
      </DualListSelectorPane>
    </DualListSelector>
  );
}
```
