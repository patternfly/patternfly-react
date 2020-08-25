---
id: Toggle group
section: components
cssPrefix: pf-c-toggle-group
propComponents: ['ToggleGroup', 'ToggleGroupItem']
beta: true
---
import './toggleGroup.css';

import { ToggleGroup, ToggleGroupItem, ToggleGroupItemVariant } from '@patternfly/react-core';
import { UndoIcon, CopyIcon, ShareSquareIcon } from '@patternfly/react-icons'; 

## Examples
### Default with multiple selectable
```js
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

class DefaultToggleGroupExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: {
        first: false,
        second: false
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
      <ToggleGroup aria-label="Default with multiple selectable">
        <ToggleGroupItem key={0} buttonId="first" isSelected={isSelected.first} onChange={this.handleItemClick}>
          Option 1
        </ToggleGroupItem>
        <ToggleGroupItem key={1} buttonId="second" isSelected={isSelected.second} onChange={this.handleItemClick}>
          Option 2
        </ToggleGroupItem>
        <ToggleGroupItem key={2} isDisabled>
          Option 3
        </ToggleGroupItem>
      </ToggleGroup>
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
        <ToggleGroupItem buttonId="firstRadio" isSelected={isSelected === "firstRadio"} onChange={this.handleItemClick}>
          Option 1
        </ToggleGroupItem>
        <ToggleGroupItem buttonId="secondRadio" isSelected={isSelected === "secondRadio"} onChange={this.handleItemClick}>
          Option 2
        </ToggleGroupItem>
        <ToggleGroupItem buttonId="thirdRadio" isSelected={isSelected === "thirdRadio"} onChange={this.handleItemClick}>
          Option 3
        </ToggleGroupItem>
      </ToggleGroup>
    );
  }
}
```
### Icons
```js
import React from 'react';
import { ToggleGroup, ToggleGroupItem, ToggleGroupItemVariant } from '@patternfly/react-core';
import { UndoIcon, CopyIcon, ShareSquareIcon } from '@patternfly/react-icons';

class IconToggleGroupExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: {
        third: false,
        fourth: false,
        fifth: true
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
        <ToggleGroupItem aria-label="copy icon button" buttonId="third" variant={ToggleGroupItemVariant.icon} isSelected={isSelected.third} onChange={this.handleItemClick}>
          <CopyIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="undo icon button" buttonId="fourth" variant={ToggleGroupItemVariant.icon} isSelected={isSelected.fourth} onChange={this.handleItemClick}>
          <UndoIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="share square icon button" buttonId="fifth"  variant={ToggleGroupItemVariant.icon} isSelected={isSelected.fifth} onChange={this.handleItemClick}>
          <ShareSquareIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    );
  }
}
```

### Light variant
```js
import React from 'react';
import { ToggleGroup, ToggleGroupItem, ToggleGroupVariant } from '@patternfly/react-core';

class LightToggleGroupExample extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      isSelected: {
        sixth: false,
        seventh: false
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
      <ToggleGroup variant={ToggleGroupVariant.light} aria-label="Light variant toggle group">
        <ToggleGroupItem buttonId="sixth" isSelected={isSelected.sixth} onChange={this.handleItemClick}>
          Option 1
        </ToggleGroupItem>
        <ToggleGroupItem buttonId="seventh" isSelected={isSelected.seventh} onChange={this.handleItemClick}>
          Option 2
        </ToggleGroupItem>
        <ToggleGroupItem isDisabled>
          Option 3
        </ToggleGroupItem>
      </ToggleGroup>
    );
  }
}
```
