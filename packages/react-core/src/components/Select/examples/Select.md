---
id: Select
section: components
cssPrefix: pf-c-select
propComponents: ['Select', 'SelectOption', 'SelectGroup', 'SelectOptionObject']
ouia: true
---

import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';

## Examples

### Single

```js
import React from 'react';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';
import { Select, SelectOption, SelectVariant, SelectDirection, Checkbox, Divider } from '@patternfly/react-core';

class SingleSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      <SelectOption key={0} value="Choose..." isPlaceholder />,
      <SelectOption key={1} value="Mr" />,
      <SelectOption key={2} value="Miss" />,
      <SelectOption key={3} value="Mrs" />,
      <SelectOption key={4} value="Ms" />,
      <Divider component="li" key={5} />,
      <SelectOption key={6} value="Dr" />,
      <SelectOption key={7} value="Other" />
    ];

    this.state = {
      isToggleIcon: false,
      isOpen: false,
      selected: null,
      isDisabled: false,
      direction: SelectDirection.down
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isOpen: false
        });
        console.log('selected:', selection);
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };

    this.toggleDisabled = checked => {
      this.setState({
        isDisabled: checked
      });
    };

    this.setIcon = checked => {
      this.setState({
        isToggleIcon: checked
      });
    };

    this.toggleDirection = () => {
      if (this.state.direction === SelectDirection.up) {
        this.setState({
          direction: SelectDirection.down
        });
      } else {
        this.setState({
          direction: SelectDirection.up
        });
      }
    };
  }

  render() {
    const { isOpen, selected, isDisabled, direction, isToggleIcon } = this.state;
    const titleId = 'title-id-1';
    return (
      <div>
        <span id={titleId} hidden>
          Title
        </span>
        <Select
          toggleIcon={isToggleIcon && <CubeIcon />}
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          isDisabled={isDisabled}
          direction={direction}
        >
          {this.options}
        </Select>
        <Checkbox
          label="isDisabled"
          isChecked={this.state.isDisabled}
          onChange={this.toggleDisabled}
          aria-label="disabled checkbox"
          id="toggle-disabled"
          name="toggle-disabled"
        />
        <Checkbox
          label="Expands up"
          isChecked={direction === SelectDirection.up}
          onChange={this.toggleDirection}
          aria-label="direction checkbox"
          id="toggle-direction"
          name="toggle-direction"
        />
        <Checkbox
          label="Show icon"
          isChecked={isToggleIcon}
          onChange={this.setIcon}
          aria-label="show icon checkbox"
          id="toggle-icon"
          name="toggle-icon"
        />
      </div>
    );
  }
}
```

### Single with description

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

class SingleSelectDescription extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      { value: 'Mr', disabled: false },
      { value: 'Miss', disabled: false },
      { value: 'Mrs', disabled: false },
      { value: 'Ms', disabled: false },
      { value: 'Dr', disabled: false },
      { value: 'Other', disabled: false }
    ];

    this.state = {
      isOpen: false,
      selected: null,
      isDisabled: false
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isOpen: false
        });
        console.log('selected:', selection);
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };
  }

  render() {
    const { isOpen, selected, isDisabled, direction, isToggleIcon } = this.state;
    const titleId = 'select-descriptions-title';
    return (
      <div>
        <span id={titleId} hidden>
          Title
        </span>
        <Select
          variant={SelectVariant.single}
          placeholderText="Select an option"
          aria-label="Select Input with descriptions"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          isDisabled={isDisabled}
        >
          {this.options.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
              isPlaceholder={option.isPlaceholder}
              description="This is a description"
            />
          ))}
        </Select>
      </div>
    );
  }
}
```

### Grouped single

```js
import React from 'react';
import { Select, SelectOption, SelectVariant, SelectGroup, Divider } from '@patternfly/react-core';

class GroupedSingleSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selected: null
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      this.setState({
        selected: selection,
        isOpen: false
      });
    };

    this.clearSelection = () => {
      this.setState({
        selected: null
      });
    };

    this.options = [
      <SelectGroup label="Status" key="group1">
        <SelectOption key={0} value="Running" />
        <SelectOption key={1} value="Stopped" />
        <SelectOption key={2} value="Down" />
        <SelectOption key={3} value="Degraded" />
        <SelectOption key={4} value="Needs Maintenence" />
      </SelectGroup>,
      <Divider key="divider" />,
      <SelectGroup label="Vendor Names" key="group2">
        <SelectOption key={5} value="Dell" />
        <SelectOption key={6} value="Samsung" isDisabled />
        <SelectOption key={7} value="Hewlett-Packard" />
      </SelectGroup>
    ];
  }

  render() {
    const { isOpen, selected } = this.state;
    const titleId = 'grouped-single-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Grouped Checkbox Title
        </span>
        <Select
          variant={SelectVariant.single}
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          placeholderText="Filter by status/vendor"
          aria-labelledby={titleId}
          isGrouped
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Checkbox input

```js
import React from 'react';
import { Select, SelectOption, SelectVarian, Divider } from '@patternfly/react-core';

class CheckboxSelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selected: []
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: []
      });
    };

    this.options = [
      <SelectOption key={0} value="Active" description="This is a description" />,
      <SelectOption key={1} value="Cancelled" />,
      <SelectOption key={2} value="Paused" />,
      <Divider key={3} />,
      <SelectOption key={4} value="Warning" />,
      <SelectOption key={5} value="Restarted" />
    ];
  }

  render() {
    const { isOpen, selected } = this.state;
    const titleId = 'checkbox-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Checkbox Title
        </span>
        <Select
          variant={SelectVariant.checkbox}
          aria-label="Select Input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Checkbox input no badge

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

class CheckboxSelectInputNoBadge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selected: []
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: []
      });
    };

    this.options = [
      <SelectOption key={0} value="Debug" />,
      <SelectOption key={1} value="Info" />,
      <SelectOption key={2} value="Warn" />,
      <SelectOption key={3} value="Error" />
    ];
  }

  render() {
    const { isOpen, selected } = this.state;
    const titleId = 'checkbox-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Checkbox Title
        </span>
        <Select
          variant={SelectVariant.checkbox}
          aria-label="Select Input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isCheckboxSelectionBadgeHidden
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Grouped checkbox input

```js
import React from 'react';
import { Select, SelectOption, SelectVariant, SelectGroup } from '@patternfly/react-core';

class GroupedCheckboxSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selected: []
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: []
      });
    };

    this.options = [
      <SelectGroup label="Status" key="group1">
        <SelectOption key={0} value="Running" />
        <SelectOption key={1} value="Stopped" />
        <SelectOption key={2} value="Down" />
        <SelectOption key={3} value="Degraded" />
        <SelectOption key={4} value="Needs Maintenance" />
      </SelectGroup>,
      <SelectGroup label="Vendor Names" key="group2">
        <SelectOption key={5} value="Dell" />
        <SelectOption key={6} value="Samsung" isDisabled />
        <SelectOption key={7} value="Hewlett-Packard" />
      </SelectGroup>
    ];
  }

  render() {
    const { isOpen, selected } = this.state;
    const titleId = 'grouped-checkbox-select-id-1';
    return (
      <div>
        <span id={titleId} hidden>
          Grouped Checkbox Title
        </span>
        <Select
          variant={SelectVariant.checkbox}
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
          isGrouped
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Grouped checkbox input with filtering

```js
import React from 'react';
import { Select, SelectOption, SelectGroup, SelectVariant } from '@patternfly/react-core';

class FilteringCheckboxSelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selected: []
    };

    this.options = [
      <SelectGroup label="Status" key="group1">
        <SelectOption key={0} value="Running" />
        <SelectOption key={1} value="Stopped" />
        <SelectOption key={2} value="Down" />
        <SelectOption key={3} value="Degraded" />
        <SelectOption key={4} value="Needs Maintenence" />
      </SelectGroup>,
      <SelectGroup label="Vendor Names" key="group2">
        <SelectOption key={5} value="Dell" />
        <SelectOption key={6} value="Samsung" isDisabled />
        <SelectOption key={7} value="Hewlett-Packard" />
      </SelectGroup>
    ];

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.onFilter = evt => {
      const textInput = evt.target.value;
      if (textInput === '') {
        return this.options;
      } else {
        let filteredGroups = this.options
          .map(group => {
            let filteredGroup = React.cloneElement(group, {
              children: group.props.children.filter(item => {
                return item.props.value.toLowerCase().includes(textInput.toLowerCase());
              })
            });
            if (filteredGroup.props.children.length > 0) return filteredGroup;
          })
          .filter(newGroup => newGroup);
        return filteredGroups;
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: []
      });
    };
  }

  render() {
    const { isOpen, selected, filteredOptions } = this.state;
    const titleId = 'checkbox-filtering-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Checkbox Title
        </span>
        <Select
          variant={SelectVariant.checkbox}
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
          onFilter={this.onFilter}
          onClear={this.clearSelection}
          isGrouped
          hasInlineFilter
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Grouped checkbox input with filtering and placeholder text

```js
import React from 'react';
import { Select, SelectOption, SelectGroup, SelectVariant } from '@patternfly/react-core';

class FilteringCheckboxSelectInputWithPlaceholder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selected: []
    };

    this.options = [
      <SelectGroup label="Status" key="group1">
        <SelectOption key={0} value="Running" />
        <SelectOption key={1} value="Stopped" />
        <SelectOption key={2} value="Down" />
        <SelectOption key={3} value="Degraded" />
        <SelectOption key={4} value="Needs Maintenence" />
      </SelectGroup>,
      <SelectGroup label="Vendor Names" key="group2">
        <SelectOption key={5} value="Dell" />
        <SelectOption key={6} value="Samsung" isDisabled />
        <SelectOption key={7} value="Hewlett-Packard" />
      </SelectGroup>
    ];

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.onFilter = evt => {
      const textInput = evt.target.value;
      if (textInput === '') {
        return this.options;
      } else {
        let filteredGroups = this.options
          .map(group => {
            let filteredGroup = React.cloneElement(group, {
              children: group.props.children.filter(item => {
                return item.props.value.toLowerCase().includes(textInput.toLowerCase());
              })
            });
            if (filteredGroup.props.children.length > 0) return filteredGroup;
          })
          .filter(newGroup => newGroup);
        return filteredGroups;
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: []
      });
    };
  }

  render() {
    const { isOpen, selected, filteredOptions } = this.state;
    const titleId = 'checkbox-filtering-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Checkbox Title
        </span>
        <Select
          variant={SelectVariant.checkbox}
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
          onFilter={this.onFilter}
          onClear={this.clearSelection}
          isGrouped
          hasInlineFilter
          inlineFilterPlaceholderText="Filter by status"
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Grouped checkbox input with filtering and custom badging

```js
import React from 'react';
import { Select, SelectOption, SelectGroup, SelectVariant } from '@patternfly/react-core';

class FilteringCheckboxSelectInputWithBadging extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selected: [],
      customBadgeText: 0
    };

    this.options = [
      <SelectGroup label="Status" key="group1">
        <SelectOption key={0} value="Running" />
        <SelectOption key={1} value="Stopped" />
        <SelectOption key={2} value="Down" />
        <SelectOption key={3} value="Degraded" />
        <SelectOption key={4} value="Needs Maintenence" />
      </SelectGroup>,
      <SelectGroup label="Vendor Names" key="group2">
        <SelectOption key={5} value="Dell" />
        <SelectOption key={6} value="Samsung" isDisabled />
        <SelectOption key={7} value="Hewlett-Packard" />
      </SelectGroup>
    ];

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({
            selected: prevState.selected.filter(item => item !== selection),
            customBadgeText: this.setBadgeText(prevState.selected.length - 1)
          }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({
            selected: [...prevState.selected, selection],
            customBadgeText: this.setBadgeText(prevState.selected.length + 1)
          }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.onFilter = evt => {
      const textInput = evt.target.value;
      if (textInput === '') {
        return this.options;
      } else {
        let filteredGroups = this.options
          .map(group => {
            let filteredGroup = React.cloneElement(group, {
              children: group.props.children.filter(item => {
                return item.props.value.toLowerCase().includes(textInput.toLowerCase());
              })
            });
            if (filteredGroup.props.children.length > 0) return filteredGroup;
          })
          .filter(newGroup => newGroup);
        return filteredGroups;
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: [],
        customBadgeText: this.setBadgeText(0)
      });
    };

    this.setBadgeText = selected => {
      if (selected === 7) {
        return 'All';
      }
      if (selected === 0) {
        return 0;
      }
      return null;
    };
  }

  render() {
    const { isOpen, selected, filteredOptions, customBadgeText } = this.state;
    const titleId = 'checkbox-filtering-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Checkbox Title
        </span>
        <Select
          variant={SelectVariant.checkbox}
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
          onFilter={this.onFilter}
          onClear={this.clearSelection}
          isGrouped
          hasInlineFilter
          customBadgeText={customBadgeText}
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Typeahead

```js
import React from 'react';
import { Checkbox, Select, SelectOption, SelectVariant } from '@patternfly/react-core';

class TypeaheadSelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { value: 'Alabama' },
        { value: 'Florida', description: 'This is a description' },
        { value: 'New Jersey' },
        { value: 'New Mexico' },
        { value: 'New York' },
        { value: 'North Carolina' }
      ],
      isOpen: false,
      selected: null,
      isDisabled: false,
      isCreatable: false,
      hasOnCreateOption: false
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isOpen: false
        });
        console.log('selected:', selection);
      }
    };

    this.onCreateOption = newValue => {
      this.setState({
        options: [...this.state.options, { value: newValue }]
      });
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };

    this.toggleDisabled = checked => {
      this.setState({
        isDisabled: checked
      });
    };

    this.toggleCreatable = checked => {
      this.setState({
        isCreatable: checked
      });
    };

    this.toggleCreateNew = checked => {
      this.setState({
        hasOnCreateOption: checked
      });
    };
  }

  render() {
    const { isOpen, selected, isDisabled, isCreatable, hasOnCreateOption, options } = this.state;
    const titleId = 'typeahead-select-id-1';
    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          variant={SelectVariant.typeahead}
          typeAheadAriaLabel="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          placeholderText="Select a state"
          isDisabled={isDisabled}
          isCreatable={isCreatable}
          onCreateOption={(hasOnCreateOption && this.onCreateOption) || undefined}
        >
          {options.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
              {...(option.description && { description: option.description })}
            />
          ))}
        </Select>
        <Checkbox
          label="isDisabled"
          isChecked={this.state.isDisabled}
          onChange={this.toggleDisabled}
          aria-label="toggle disabled checkbox"
          id="toggle-disabled-typeahead"
          name="toggle-disabled-typeahead"
        />
        <Checkbox
          label="isCreatable"
          isChecked={this.state.isCreatable}
          onChange={this.toggleCreatable}
          aria-label="toggle creatable checkbox"
          id="toggle-creatable-typeahead"
          name="toggle-creatable-typeahead"
        />
        <Checkbox
          label="onCreateOption"
          isChecked={this.state.hasOnCreateOption}
          onChange={this.toggleCreateNew}
          aria-label="toggle new checkbox"
          id="toggle-new-typeahead"
          name="toggle-new-typeahead"
        />
      </div>
    );
  }
}
```

### Grouped typeahead

```js
import React from 'react';
import { Checkbox, Select, SelectGroup, SelectOption, SelectVariant, Divider } from '@patternfly/react-core';

class GroupedTypeaheadSelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        <SelectGroup label="Status" key="group1">
          <SelectOption key={0} value="Running" />
          <SelectOption key={1} value="Stopped" />
          <SelectOption key={2} value="Down" />
          <SelectOption key={3} value="Degraded" />
          <SelectOption key={4} value="Needs Maintenence" />
        </SelectGroup>,
        <Divider key="divider" />,
        <SelectGroup label="Vendor Names" key="group2">
          <SelectOption key={5} value="Dell" />
          <SelectOption key={6} value="Samsung" isDisabled />
          <SelectOption key={7} value="Hewlett-Packard" />
        </SelectGroup>
      ],
      newOptions: [],
      isOpen: false,
      selected: null,
      isCreatable: false,
      hasOnCreateOption: false
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isOpen: false
        });
        console.log('selected:', selection);
      }
    };

    this.onCreateOption = newValue => {
      this.setState({
        newOptions: [...this.state.newOptions, <SelectOption key={newValue} value={newValue} />]
      });
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };

    this.toggleCreatable = checked => {
      this.setState({
        isCreatable: checked
      });
    };

    this.toggleCreateNew = checked => {
      this.setState({
        hasOnCreateOption: checked
      });
    };
  }

  render() {
    const { isOpen, selected, isDisabled, isCreatable, hasOnCreateOption, options, newOptions } = this.state;
    const titleId = 'grouped-typeahead-select-id';
    const allOptions =
      newOptions.length > 0
        ? options.concat(
            <SelectGroup label="Created" key="create-group">
              {newOptions}
            </SelectGroup>
          )
        : options;
    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          variant={SelectVariant.typeahead}
          typeAheadAriaLabel="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          placeholderText="Select a state"
          isGrouped
          isCreatable={isCreatable}
          onCreateOption={(hasOnCreateOption && this.onCreateOption) || undefined}
        >
          {allOptions}
        </Select>
        <Checkbox
          label="isCreatable"
          isChecked={this.state.isCreatable}
          onChange={this.toggleCreatable}
          aria-label="toggle creatable checkbox"
          id="toggle-creatable-typeahead"
          name="toggle-creatable-typeahead"
        />
        <Checkbox
          label="onCreateOption"
          isChecked={this.state.hasOnCreateOption}
          onChange={this.toggleCreateNew}
          aria-label="toggle new checkbox"
          id="toggle-new-typeahead"
          name="toggle-new-typeahead"
        />
      </div>
    );
  }
}
```

### Custom filtering

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

class TypeaheadSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      <SelectOption key={0} value="Alabama" />,
      <SelectOption key={1} value="Florida" />,
      <SelectOption key={2} value="New Jersey" />,
      <SelectOption key={3} value="New Mexico" />,
      <SelectOption key={4} value="New York" />,
      <SelectOption key={5} value="North Carolina" />
    ];
    this.state = {
      isOpen: false,
      selected: null
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isOpen: false
        });
        console.log('selected:', selection);
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };

    this.customFilter = e => {
      let input;
      try {
        input = new RegExp(e.target.value, 'i');
      } catch (err) {}
      return e.target.value !== '' ? this.options.filter(child => input.test(child.props.value)) : this.options;
    };
  }

  render() {
    const { isOpen, selected } = this.state;
    const titleId = 'typeahead-select-id-2';
    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          variant={SelectVariant.typeahead}
          typeAheadAriaLabel="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          onFilter={this.customFilter}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          placeholderText="Select a state"
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Multiple

```js
import React from 'react';
import { Checkbox, Select, SelectOption, SelectVariant } from '@patternfly/react-core';

class MultiTypeaheadSelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { value: 'Alabama', disabled: false },
        { value: 'Florida', disabled: false },
        { value: 'New Jersey', disabled: false },
        { value: 'New Mexico', disabled: false, description: 'This is a description' },
        { value: 'New York', disabled: false },
        { value: 'North Carolina', disabled: false }
      ],
      isOpen: false,
      selected: [],
      isCreatable: false,
      hasOnCreateOption: false
    };

    this.onCreateOption = newValue => {
      this.setState({
        options: [...this.state.options, { value: newValue }]
      });
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: [],
        isOpen: false
      });
    };

    this.toggleCreatable = checked => {
      this.setState({
        isCreatable: checked
      });
    };

    this.toggleCreateNew = checked => {
      this.setState({
        hasOnCreateOption: checked
      });
    };
  }

  render() {
    const { isOpen, selected, isCreatable, hasOnCreateOption } = this.state;
    const titleId = 'multi-typeahead-select-id-1';

    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          variant={SelectVariant.typeaheadMulti}
          typeAheadAriaLabel="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          placeholderText="Select a state"
          isCreatable={isCreatable}
          onCreateOption={(hasOnCreateOption && this.onCreateOption) || undefined}
        >
          {this.state.options.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
              {...(option.description && { description: option.description })}
            />
          ))}
        </Select>
        <Checkbox
          label="isCreatable"
          isChecked={this.state.isCreatable}
          onChange={this.toggleCreatable}
          aria-label="toggle creatable checkbox"
          id="toggle-creatable-typeahead-multi"
          name="toggle-creatable-typeahead-multi"
        />
        <Checkbox
          label="onCreateOption"
          isChecked={this.state.hasOnCreateOption}
          onChange={this.toggleCreateNew}
          aria-label="toggle new checkbox"
          id="toggle-new-typeahead-multi"
          name="toggle-new-typeahead-multi"
        />
      </div>
    );
  }
}
```

### Multiple with Custom Chip Group Props

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

class MultiTypeaheadSelectInputWithChipGroupProps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { value: 'Alabama', disabled: false },
        { value: 'Florida', disabled: false },
        { value: 'New Jersey', disabled: false },
        { value: 'New Mexico', disabled: false, description: 'This is a description' },
        { value: 'New York', disabled: false },
        { value: 'North Carolina', disabled: false }
      ],
      isOpen: false,
      selected: []
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: [],
        isOpen: false
      });
    };
  }

  render() {
    const { isOpen, selected, isCreatable, hasOnCreateOption } = this.state;
    const titleId = 'multi-typeahead-custom-chip-group-props-id-1';

    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          chipGroupProps={{ numChips: 1, expandedText: 'Hide', collapsedText: 'Show ${remaining}' }}
          variant={SelectVariant.typeaheadMulti}
          typeAheadAriaLabel="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          placeholderText="Select a state"
        >
          {this.state.options.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
              {...(option.description && { description: option.description })}
            />
          ))}
        </Select>
      </div>
    );
  }
}
```

### Multiple with Render Custom Chip Group

```js
import React from 'react';
import { Select, SelectOption, SelectVariant, ChipGroup, Chip } from '@patternfly/react-core';

class MultiTypeaheadSelectInputWithChipGroupProps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { value: 'Alabama', disabled: false },
        { value: 'Florida', disabled: false },
        { value: 'New Jersey', disabled: false },
        { value: 'New Mexico', disabled: false, description: 'This is a description' },
        { value: 'New York', disabled: false },
        { value: 'North Carolina', disabled: false }
      ],
      isOpen: false,
      selected: []
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: [],
        isOpen: false
      });
    };
    this.chipGroupComponent = () => {
      const { selected } = this.state;
      return (
        <ChipGroup>
          {(selected || []).map((currentChip, index) => (
            <Chip
              isReadOnly={index === 0 ? true : false}
              key={currentChip}
              onClick={event => this.onSelect(event, currentChip)}
            >
              {currentChip}
            </Chip>
          ))}
        </ChipGroup>
      );
    };
  }

  render() {
    const { isOpen, selected, isCreatable, hasOnCreateOption } = this.state;
    const titleId = 'multi-typeahead-custom-chip-group-props-id-1';

    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          chipGroupProps={{ numChips: 1, expandedText: 'Hide', collapsedText: 'Show ${remaining}' }}
          variant={SelectVariant.typeaheadMulti}
          typeAheadAriaLabel="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          placeholderText="Select a state"
          chipGroupComponent={this.chipGroupComponent()}
        >
          {this.state.options.map((option, index) => (
            <SelectOption
              isDisabled={option.disabled}
              key={index}
              value={option.value}
              {...(option.description && { description: option.description })}
            />
          ))}
        </Select>
      </div>
    );
  }
}
```

### Multiple with custom objects

```js
import React from 'react';
import { Select, SelectOption, SelectVariant, Divider } from '@patternfly/react-core';

class MultiTypeaheadSelectInputCustomObjects extends React.Component {
  constructor(props) {
    super(props);
    this.createState = (name, abbreviation, capital, founded) => {
      return {
        name: name,
        abbreviation: abbreviation,
        capital: capital,
        founded: founded,
        toString: function() {
          return `${this.name} (${this.abbreviation}) - Founded: ${this.founded}`;
        },
        compareTo: function(value) {
          return this.toString()
            .toLowerCase()
            .includes(value.toString().toLowerCase());
        }
      };
    };
    this.options = [
      <SelectOption key={0} value={this.createState('Alabama', 'AL', 'Montgomery', 1846)} />,
      <Divider component="li" key={111} />,
      <SelectOption key={1} value={this.createState('Florida', 'FL', 'Tailahassee', 1845)} />,
      <SelectOption key={2} value={this.createState('New Jersey', 'NJ', 'Trenton', 1787)} />,
      <SelectOption key={3} value={this.createState('New Mexico', 'NM', 'Santa Fe', 1912)} />,
      <SelectOption key={4} value={this.createState('New York', 'NY', 'Albany', 1788)} />,
      <SelectOption key={5} value={this.createState('North Carolina', 'NC', 'Raleigh', 1789)} />
    ];

    this.state = {
      isOpen: false,
      selected: []
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: [],
        isOpen: false
      });
    };
  }

  render() {
    const { isOpen, selected } = this.state;
    const titleId = 'multi-typeahead-select-id-2';

    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          variant={SelectVariant.typeaheadMulti}
          typeAheadAriaLabel="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          onFilter={this.customFilter}
          selections={selected}
          isOpen={isOpen}
          aria-labelledby={titleId}
          placeholderText="Select a state"
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Plain multiple typeahead

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

class PlainSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      { value: 'Alabama', disabled: false },
      { value: 'Florida', disabled: false },
      { value: 'New Jersey', disabled: false },
      { value: 'New Mexico', disabled: false },
      { value: 'New York', disabled: false },
      { value: 'North Carolina', disabled: false }
    ];

    this.state = {
      isOpen: false,
      isPlain: true,
      selected: []
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: [],
        isOpen: false
      });
    };
  }

  render() {
    const { isOpen, isPlain, selected } = this.state;
    const titleId = 'plain-typeahead-select-id';

    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          variant={SelectVariant.typeaheadMulti}
          typeAheadAriaLabel="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          selections={selected}
          isOpen={isOpen}
          isPlain={isPlain}
          aria-labelledby={titleId}
          placeholderText="Select a state"
        >
          {this.options.map((option, index) => (
            <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
          ))}
        </Select>
      </div>
    );
  }
}
```

### Panel

```js
import React from 'react';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';
import { Select, SelectOption, SelectVariant, SelectDirection, Checkbox } from '@patternfly/react-core';

class SingleSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isDisabled: false,
      direction: SelectDirection.down
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.toggleDisabled = checked => {
      this.setState({
        isDisabled: checked
      });
    };

    this.toggleDirection = () => {
      if (this.state.direction === SelectDirection.up) {
        this.setState({
          direction: SelectDirection.down
        });
      } else {
        this.setState({
          direction: SelectDirection.up
        });
      }
    };
  }

  render() {
    const { isOpen, selected, isDisabled, direction } = this.state;
    const titleId = 'title-id-2';
    return (
      <div>
        <span id={titleId} hidden>
          Title
        </span>
        <Select
          variant={SelectVariant.panel}
          aria-label="Select Input"
          onToggle={this.onToggle}
          isOpen={isOpen}
          aria-labelledby={titleId}
          isDisabled={isDisabled}
          direction={direction}
          customContent="[Panel contents here]"
          placeholderText="Filter by birth month"
        />
        <Checkbox
          label="isDisabled"
          isChecked={this.state.isDisabled}
          onChange={this.toggleDisabled}
          aria-label="disabled checkbox panel"
          id="toggle-disabled-panel"
          name="toggle-disabled-panel"
        />
        <Checkbox
          label="Expands up"
          isChecked={direction === SelectDirection.up}
          onChange={this.toggleDirection}
          aria-label="direction checkbox panel"
          id="toggle-direction-panel"
          name="toggle-direction-panel"
        />
      </div>
    );
  }
}
```

### select menu document body

```js
import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

class SelectMenuDocumentBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selected: []
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection) => {
      const { selected } = this.state;
      if (selected.includes(selection)) {
        this.setState(
          prevState => ({ selected: prevState.selected.filter(item => item !== selection) }),
          () => console.log('selections: ', this.state.selected)
        );
      } else {
        this.setState(
          prevState => ({ selected: [...prevState.selected, selection] }),
          () => console.log('selections: ', this.state.selected)
        );
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: []
      });
    };

    this.options = [
      <SelectOption key={0} value="Debug" />,
      <SelectOption key={1} value="Info" />,
      <SelectOption key={2} value="Warn" />,
      <SelectOption key={3} value="Error" />
    ];
  }

  render() {
    const { isOpen, selected } = this.state;
    const titleId = 'checkbox-select-id-document-body';
    return (
      <div style={{ height: '50px', overflow: 'hidden' }}>
        <span id={titleId} hidden>
          Checkbox Title
        </span>
        <Select
          variant={SelectVariant.checkbox}
          aria-label="Select Input"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          selections={selected}
          isCheckboxSelectionBadgeHidden
          isOpen={isOpen}
          placeholderText="Filter by status"
          aria-labelledby={titleId}
          menuAppendTo={() => document.body}
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
```

### Favorites

```js
import React from 'react';
import { Select, SelectOption, SelectVariant, SelectGroup } from '@patternfly/react-core';

class FavoritesSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selected: null,
      favorites: []
    };

    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isOpen: false
        });
        console.log('selected:', selection);
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };

    this.onFavorite = (itemId, isFavorite) => {
      if (isFavorite) {
        this.setState({
          favorites: this.state.favorites.filter(id => id !== itemId)
        });
      } else
        this.setState({
          favorites: [...this.state.favorites, itemId]
        });
    };

    this.options = [
      <SelectGroup label="Status" key="group1">
        <SelectOption id={'option-1'} key={0} value="Running" description="This is a description." />
        <SelectOption id={'option-2'} key={1} value="Stopped" />
        <SelectOption id={'option-3'} key={2} value="Down (disabled)" isDisabled />
        <SelectOption id={'option-4'} key={3} value="Degraded" />
        <SelectOption id={'option-5'} key={4} value="Needs Maintenence" />
      </SelectGroup>,
      <SelectGroup label="Vendor Names" key="group2">
        <SelectOption id={'option-6'} key={5} value="Dell" />
        <SelectOption id={'option-7'} key={6} value="Samsung" description="This is a description." />
        <SelectOption id={'option-8'} key={7} value="Hewlett-Packard" />
      </SelectGroup>
    ];
  }

  render() {
    const { isOpen, selected, favorites } = this.state;
    const titleId = 'grouped-single-select-id';
    return (
      <Select
        variant={SelectVariant.typeahead}
        typeAheadAriaLabel="Select value"
        onToggle={this.onToggle}
        onSelect={this.onSelect}
        selections={selected}
        isOpen={isOpen}
        placeholderText="Favorites"
        aria-labelledby={titleId}
        isGrouped
        onFavorite={this.onFavorite}
        favorites={favorites}
        onClear={this.clearSelection}
      >
        {this.options}
      </Select>
    );
  }
}
```
