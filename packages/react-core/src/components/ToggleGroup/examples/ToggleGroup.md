---
id: Toggle group
section: components
cssPrefix: pf-c-toggle-group
propComponents: ['ToggleGroup', 'ToggleGroupItem']
---
import './toggleGroup.css';

import { ToggleGroup, ToggleGroupItem, ToggleGroupIconVariant } from '@patternfly/react-core';
import { UndoIcon, CopyIcon, ShareSquareIcon } from '@patternfly/react-icons'; 

## Examples
### Default as checkbox group
```js
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

class DefaultToggleGroupExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        first: false,
        second: false
      }
    };
    this.handleItemClick = (selected, event) => {
      const id = event.currentTarget.id;
      this.setState(prevState => {
        prevState.selected[id] = selected;
        return {
          selected: prevState.selected
        };
      });
    };
  }
  
  render() {
    const { selected } = this.state;
    
    return (
      <ToggleGroup>
        <ToggleGroupItem key={0} buttonId="first" selected={selected.first} onChange={this.handleItemClick}>
          Option 1
        </ToggleGroupItem>
        <ToggleGroupItem key={1} buttonId="second" selected={selected.second} onChange={this.handleItemClick}>
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
### Default as radio group
```js
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

class DefaultAsRadioToggleGroupExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
    this.handleItemClick = (selected, event) => {
      const id = event.currentTarget.id;
      this.setState({ selected: id });
    };
  }
  
  render() {
    const { selected } = this.state;
    
    return (
      <ToggleGroup>
        <ToggleGroupItem key={3} buttonId="firstRadio" selected={selected === "firstRadio"} onChange={this.handleItemClick}>
          Option 1
        </ToggleGroupItem>
        <ToggleGroupItem key={4} buttonId="secondRadio" selected={selected === "secondRadio"} onChange={this.handleItemClick}>
          Option 2
        </ToggleGroupItem>
        <ToggleGroupItem key={5} buttonId="thirdRadio" selected={selected === "thirdRadio"} onChange={this.handleItemClick}>
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
      selected: {
        third: false,
        fourth: false,
        fifth: true
      }
    };
    this.handleItemClick = (selected, event) => {
      const id = event.currentTarget.id;
      this.setState(prevState => {
        prevState.selected[id] = selected;
        return {
          selected: prevState.selected
        };
      });
    };
  }
  
  render() {
    const { selected } = this.state;
    return (
      <ToggleGroup>
        <ToggleGroupItem key={6} aria-label="copy icon button" buttonId="third" variant={ToggleGroupItemVariant.icon} selected={selected.third} onChange={this.handleItemClick}>
          <CopyIcon />
        </ToggleGroupItem>
        <ToggleGroupItem key={7} aria-label="undo icon button" buttonId="fourth" variant={ToggleGroupItemVariant.icon} selected={selected.fourth} onChange={this.handleItemClick}>
          <UndoIcon />
        </ToggleGroupItem>
        <ToggleGroupItem key={8} aria-label="share square icon button" buttonId="fifth"  variant={ToggleGroupItemVariant.icon} selected={selected.fifth} onChange={this.handleItemClick}>
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
      selected: {
        sixth: false,
        seventh: false
      }
    };
    this.handleItemClick = (selected, event) => {
      const id = event.currentTarget.id;
      this.setState(prevState => {
        prevState.selected[id] = selected;
        return {
          selected: prevState.selected
        };
      });
    };
  }
  
  render() {
    const { selected } = this.state;
    
    return (
      <ToggleGroup variant={ToggleGroupVariant.light}>
        <ToggleGroupItem key={9} buttonId="sixth" selected={selected.sixth} onChange={this.handleItemClick}>
          Option 1
        </ToggleGroupItem>
        <ToggleGroupItem key={10} buttonId="seventh" selected={selected.seventh} onChange={this.handleItemClick}>
          Option 2
        </ToggleGroupItem>
        <ToggleGroupItem key={11} isDisabled>
          Option 3
        </ToggleGroupItem>
      </ToggleGroup>
    );
  }
}
```
