---
id: Toggle group
section: components
cssPrefix: pf-c-toggle-group
propComponents: ['ToggleGroup', 'ToggleGroupItem']
---
import './toggleGroup.css';

import { ToggleGroup, ToggleGroupItem, Button, Stack, StackItem } from '@patternfly/react-core';
import UndoIcon from '@patternfly/react-icons/dist/esm/icons/undo-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import ShareSquareIcon from '@patternfly/react-icons/dist/esm/icons/share-square-icon';

## Examples

### Default with multiple selectable
```js
import React from 'react';
import { ToggleGroup, ToggleGroupItem, Button, Stack, StackItem } from '@patternfly/react-core';

class DefaultToggleGroupExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: {
        first: false,
        second: false,
        disableAll: false
      }
    };
    this.handleItemClick = (isSelected, event) => {
      const id = event.currentTarget.id;
      this.setState(prevState => {
        prevState.isSelected[id] = isSelected;
        return {
          isSelected: prevState.isSelected
        };
      });
    };
    this.disableAllClick = () => {
      this.setState(prevState => ({ disableAll: !prevState.disableAll }));
    };
  }

  render() {
    const { isSelected } = this.state;

    return (
      <Stack hasGutter>
        <StackItem>
          <Button onClick={this.disableAllClick}>
            {this.state.disableAll ? "Enable back" : "Disable all"}
          </Button>
        </StackItem>
        <StackItem>
          <ToggleGroup areAllGroupsDisabled={this.state.disableAll} aria-label="Default with multiple selectable">
            <ToggleGroupItem text="Option 1" key={0} buttonId="first" isSelected={isSelected.first} onChange={this.handleItemClick} />
            <ToggleGroupItem text="Option 2" key={1} buttonId="second" isSelected={isSelected.second} onChange={this.handleItemClick} />
            <ToggleGroupItem text="Option 3" key={2} isDisabled/>
          </ToggleGroup>
        </StackItem>
      </Stack>
    );
  }
}
```

### Default with single selectable
```js
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

class DefaultAsRadioToggleGroupExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: ""
    };
    this.handleItemClick = (isSelected, event) => {
      const id = event.currentTarget.id;
      this.setState({ isSelected: id });
    };
  }

  render() {
    const { isSelected } = this.state;

    return (
      <ToggleGroup aria-label="Default with single selectable">
        <ToggleGroupItem text="Option 1" buttonId="firstRadio" isSelected={isSelected === "firstRadio"} onChange={this.handleItemClick} />
        <ToggleGroupItem text="Option 2" buttonId="secondRadio" isSelected={isSelected === "secondRadio"} onChange={this.handleItemClick} />
        <ToggleGroupItem text="Option 3" buttonId="thirdRadio" isSelected={isSelected === "thirdRadio"} onChange={this.handleItemClick} />
      </ToggleGroup>
    );
  }
}
```

### Icons
```js
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';
import UndoIcon from '@patternfly/react-icons/dist/esm/icons/undo-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import ShareSquareIcon from '@patternfly/react-icons/dist/esm/icons/share-square-icon';

class IconToggleGroupExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: {
        "icons-1": false,
        "icons-2": false,
        "icons-3": true
      }
    };
    this.handleItemClick = (isSelected, event) => {
      const id = event.currentTarget.id;
      this.setState(prevState => {
        prevState.isSelected[id] = isSelected;
        return {
          isSelected: prevState.isSelected
        };
      });
    };
  }

  render() {
    const { isSelected } = this.state;
    return (
      <ToggleGroup aria-label="Icon variant toggle group">
        <ToggleGroupItem icon={<CopyIcon />} aria-label="copy icon button" buttonId="icons-1" isSelected={isSelected["icons-1"]} onChange={this.handleItemClick} />
        <ToggleGroupItem icon={<UndoIcon />} aria-label="undo icon button" buttonId="icons-2" isSelected={isSelected["icons-2"]} onChange={this.handleItemClick} />
        <ToggleGroupItem icon={<ShareSquareIcon />} aria-label="share square icon button" buttonId="icons-3" isSelected={isSelected["icons-3"]} onChange={this.handleItemClick} />
      </ToggleGroup>
    );
  }
}
```

### Text and icons
```js
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';
import UndoIcon from '@patternfly/react-icons/dist/esm/icons/undo-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import ShareSquareIcon from '@patternfly/react-icons/dist/esm/icons/share-square-icon';

class TextIconToggleGroupExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: {
        "text-icons-1": false,
        "text-icons-2": false,
        "text-icons-3": true
      }
    };
    this.handleItemClick = (isSelected, event) => {
      const id = event.currentTarget.id;
      this.setState(prevState => {
        prevState.isSelected[id] = isSelected;
        return {
          isSelected: prevState.isSelected
        };
      });
    };
  }

  render() {
    const { isSelected } = this.state;
    return (
      <ToggleGroup aria-label="Icon variant toggle group">
        <ToggleGroupItem icon={<CopyIcon />} text="Copy" aria-label="copy icon button" buttonId="text-icons-1" isSelected={isSelected["text-icons-1"]} onChange={this.handleItemClick} />
        <ToggleGroupItem icon={<UndoIcon />} text="Undo" aria-label="undo icon button" buttonId="text-icons-2" isSelected={isSelected["text-icons-2"]} onChange={this.handleItemClick} />
        <ToggleGroupItem icon={<ShareSquareIcon />} text="Share" aria-label="share square icon button" buttonId="text-icons-3" isSelected={isSelected["text-icons-3"]} onChange={this.handleItemClick} />
      </ToggleGroup>
    );
  }
}
```

### Compact variant
```js
import React from 'react';
import { ToggleGroup, ToggleGroupItem, ToggleGroupVariant } from '@patternfly/react-core';

class CompactToggleGroupExample extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      isSelected: {
        "compact-1": false,
        "compact-2": false
      }
    };
    this.handleItemClick = (isSelected, event) => {
      const id = event.currentTarget.id;
      this.setState(prevState => {
        prevState.isSelected[id] = isSelected;
        return {
          isSelected: prevState.isSelected
        };
      });
    };
  }

  render() {
    const { isSelected } = this.state;

    return (
      <ToggleGroup isCompact aria-label="Compact variant toggle group">
        <ToggleGroupItem text="Option 1" buttonId="compact-1" isSelected={isSelected["compact-1"]} onChange={this.handleItemClick} />
        <ToggleGroupItem text="Option 2" buttonId="compact-2" isSelected={isSelected["compact-2"]} onChange={this.handleItemClick} />
        <ToggleGroupItem text="Option 3" isDisabled />
      </ToggleGroup>
    );
  }
}
```
