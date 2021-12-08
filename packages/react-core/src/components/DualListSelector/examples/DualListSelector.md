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
import { Button, ButtonVariant, Checkbox, Dropdown, DropdownItem, DualListSelector, KebabToggle } from '@patternfly/react-core';
import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-asc-icon';

class ComplexDualListSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableOptions: [<span>Option 1</span>, <span>Option 3</span>, <span>Option 4</span>, <span>Option 2</span>],
      chosenOptions: [],
      isAvailableKebabOpen: false,
      isChosenKebabOpen: false,
      isDisabled: false
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
        isDisabled={this.state.isDisabled}
      >
        <PficonSortCommonAscIcon />
      </Button>,
      <Dropdown
        toggle={<KebabToggle isDisabled={this.state.isDisabled} onToggle={isOpen => this.onToggle(isOpen, 'available')} id="toggle-id-1" />}
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
        isDisabled={this.state.isDisabled}
      >
        <PficonSortCommonAscIcon />
      </Button>,
      <Dropdown
        toggle={<KebabToggle isDisabled={this.state.isDisabled} onToggle={isOpen => this.onToggle(isOpen, 'chosen')} id="toggle-id-2" />}
        isOpen={this.state.isChosenKebabOpen}
        isPlain
        dropdownItems={dropdownItems}
        key="chosenDropdown"
      />
    ];

    return (
      <React.Fragment>
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
            isDisabled={this.state.isDisabled}
            id="withActions"
          />
        <Checkbox
          key="isDisabled"
          id="isDisabled"
          label="isDisabled"
          aria-label="isDisabled"
          isChecked={this.state.isDisabled}
          onChange={() =>
            this.setState({
              isDisabled: !this.state.isDisabled
            })
          }
        />
      </React.Fragment>
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

For more flexibility, a Dual list selector can be built using sub components. When doing so, the intended component
relationships are arranged as follows:

```js noLive
import React from 'react';
import { DualListSelector, DualListSelectorPane, DualListSelectorList, DualListSelectorListItem, DualListSelectorControlsWrapper, DualListSelectorControl } from '@patternfly/react-core';

<DualListSelector>

  <DualListSelectorPane>
    <DualListSelectorList>
      <DualListSelectorListItem/>
    </DualListSelectorList>
  </DualListSelectorPane>
  
  <DualListSelectorControlsWrapper>
    <DualListSelectorControl/> {/* The standard Dual list selector has 4 controls */}
  </DualListSelectorControlsWrapper>
  
  <DualListSelectorPane isChosen>
    <DualListSelectorList>
      <DualListSelectorListItem/>
    </DualListSelectorList>
  </DualListSelectorPane>
  
</DualListSelector>
```

Note: Keyboard accessibility and screen reader accessibility for the `DragDrop` component are still in development.

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

  // callback for moving selected options between lists
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
  
  // callback for moving all options between lists
  const moveAll = (fromAvailable) => {
    if (fromAvailable) {
      setChosenOptions([...availableOptions.filter(x => x.isVisible), ...chosenOptions]);
      setAvailableOptions([...availableOptions.filter(x => !x.isVisible)]);
    } else {
      setAvailableOptions([...chosenOptions.filter(x => x.isVisible), ...availableOptions]);
      setChosenOptions([...chosenOptions.filter(x => !x.isVisible)]);
    }
  };
  
  // callback when option is selected
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
  
  // builds a search input - used in each dual list selector pane
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
  
  // builds a sort control - passed to both dual list selector panes
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

### Reordering lists using drag and drop

To make a pane able to be reordered:
 - wrap the `DualListSelectorPane` in a `DragDrop` component
 - wrap the `DualListSelectorList` in a `Droppable` component
 - wrap the `DualListSelectorListItem` components in a `Draggable` component
 - define an `onDrop` callback which reorders the sortable options. 
    - The `onDrop` function provides the starting location and destination location for a dragged item. It should return 
    true to enable the 'drop' animation in the new location and false to enable the 'drop' animation back to the item's 
    old position.
    - define an `onDrag` callback which ensures that the drag event will not cross hairs with the `onOptionSelect` click 
    event set on the option. Note: the `ignoreNextOptionSelect` state value is used to prevent selection while dragging.

```js
import React from 'react';
import { 
  DragDrop,
  Droppable,
  Draggable,
  DualListSelector, 
  DualListSelectorPane,
  DualListSelectorList,
  DualListSelectorListItem,
  DualListSelectorControlsWrapper,
  DualListSelectorControl,
} from '@patternfly/react-core';
import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';

const ComposableDualListSelector = () => {
  const [ignoreNextOptionSelect, setIgnoreNextOptionSelect] = React.useState(false);
  const [availableOptions, setAvailableOptions] = React.useState([
    { text: 'Apple', selected: false, isVisible: true },
    { text: 'Banana', selected: false, isVisible: true },
    { text: 'Pineapple', selected: false, isVisible: true }
  ]);
  const [chosenOptions, setChosenOptions] = React.useState([
    { text: 'Orange', selected: false, isVisible: true },
    { text: 'Grape', selected: false, isVisible: true },
    { text: 'Peach', selected: false, isVisible: true },
    { text: 'Strawberry', selected: false, isVisible: true }
  ]);

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
    if (ignoreNextOptionSelect) {
      setIgnoreNextOptionSelect(false);
      return;
    }
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
  
  const onDrop = (source, dest) => {
    if (dest){
      const newList = [...chosenOptions];
      const [removed] = newList.splice(source.index, 1);
      newList.splice(dest.index, 0, removed);
      setChosenOptions(newList);
      return true;
    }
    return false;
  };

  return (
    <DualListSelector>
      <DualListSelectorPane
        title="Available"
        status={`${availableOptions.filter(x => x.selected && x.isVisible).length} of ${availableOptions.filter(x => x.isVisible).length} options selected`}
      >
        <DualListSelectorList>
          {availableOptions.map((option, index) => {
            return option.isVisible ? (
              <DualListSelectorListItem
                key={index}
                isSelected={option.selected}
                id={`composable-available-option-${index}`}
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
          onClick={() => moveSelected(false)}
          isDisabled={!chosenOptions.some(option => option.selected)}
          aria-label="Remove selected"
        >
          <AngleLeftIcon />
        </DualListSelectorControl>
      </DualListSelectorControlsWrapper>
      <DragDrop onDrag={() => { setIgnoreNextOptionSelect(true); return true; }} onDrop={onDrop}>
        <DualListSelectorPane
          title="Chosen"
          status={`${chosenOptions.filter(x => x.selected && x.isVisible).length} of ${chosenOptions.filter(x => x.isVisible).length} options selected`}
          isChosen
        >
          <Droppable hasNoWrapper>
            <DualListSelectorList>
            {chosenOptions.map((option, index) => {
              return option.isVisible ? (
                <Draggable key={index} hasNoWrapper>
                  <DualListSelectorListItem
                    isSelected={option.selected}
                    id={`composable-chosen-option-${index}`}
                    onOptionSelect={(e) => onOptionSelect(e, index, true)}
                    isDraggable
                  >
                    {option.text}
                  </DualListSelectorListItem>
                </Draggable>
              ) : null;
            })}
            </DualListSelectorList>
          </Droppable>
        </DualListSelectorPane>
      </DragDrop>
    </DualListSelector>
  );
}
```

### Composable dual list selector tree
```ts file="ComposableTree.tsx"
```

