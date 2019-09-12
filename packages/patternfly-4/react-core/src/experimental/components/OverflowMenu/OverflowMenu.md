---
title: 'OverflowMenu'
cssPrefix: 'pf-c-overflow-menu'
typescript: true
propComponents: ['OverflowMenu', 'OverflowMenuControl', 'OverflowMenuContent']
section: 'experimental'
stage: 'early'
---

import { OverflowMenu, OverflowMenuControl, OverflowMenuContent, OverflowMenuGroup, OverflowMenuItem, OverflowMenuDropdownItem } from '@patternfly/react-core/dist/esm/experimental';
import { Dropdown, KebabToggle, Button } from '@patternfly/react-core';

## Overflow menu simple (responsive)
```js
import * as React from 'react';
import { OverflowMenu, OverflowMenuControl, OverflowMenuContent, OverflowMenuGroup, OverflowMenuItem, OverflowMenuDropdownItem } from '@patternfly/react-core/dist/esm/experimental';
import { Dropdown, KebabToggle, Button } from '@patternfly/react-core';

class SimpleOverflowMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <OverflowMenuDropdownItem>
        Action
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem>
        Item 1
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem>
        Item 2
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem>
        Item 3
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem>
        Item 4
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem>
        Item 5
      </OverflowMenuDropdownItem>,
    ];
    return (
      <OverflowMenu breakpoint="Lg">
        <OverflowMenuContent>
          <OverflowMenuItem>Item</OverflowMenuItem>
          <OverflowMenuItem>Item</OverflowMenuItem>
          <OverflowMenuGroup>
            <OverflowMenuItem>Item</OverflowMenuItem>
            <OverflowMenuItem>Item</OverflowMenuItem>
            <OverflowMenuItem>Item</OverflowMenuItem>
          </OverflowMenuGroup>
        </OverflowMenuContent>
        <OverflowMenuControl>
          <Dropdown
            onSelect={this.onSelect}
            toggle={<KebabToggle onToggle={this.onToggle} />}
            isOpen={isOpen}
            isPlain
            dropdownItems={dropdownItems}
          />
        </OverflowMenuControl>
      </OverflowMenu>
    )
  }
}
```

## Overflow menu group types
```js
import * as React from 'react';
import { OverflowMenu, OverflowMenuControl, OverflowMenuContent, OverflowMenuGroup, OverflowMenuItem, OverflowMenuDropdownItem } from '@patternfly/react-core/dist/esm/experimental';
import { Dropdown, KebabToggle, Button } from '@patternfly/react-core';

class OverflowMenuGroupTypes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <OverflowMenuDropdownItem shared>
        Action
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem shared>
        Item 1
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem shared>
        Item 2
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem shared>
        Item 3
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem shared>
        Item 4
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem shared>
        Item 5
      </OverflowMenuDropdownItem>,
    ];
    return (
      <OverflowMenu breakpoint="Lg">
        <OverflowMenuContent>
          <OverflowMenuGroup> 
            <OverflowMenuItem>Item</OverflowMenuItem>
            <OverflowMenuItem>Item</OverflowMenuItem>
            <OverflowMenuItem>Item</OverflowMenuItem>
          </OverflowMenuGroup>
          <OverflowMenuGroup groupType="button">
            <OverflowMenuItem>
              <Button variant="primary">
                Primary
              </Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant="secondary">
                Secondary
              </Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant="tertiary">
                Tertiary
              </Button>
            </OverflowMenuItem>
          </OverflowMenuGroup>
          <OverflowMenuGroup groupType="icon">
            <OverflowMenuItem>
              <Button variant="link" aria-label="Align left">
                <i className="fas fa-align-left" aria-hidden="true"></i>
              </Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant="link" aria-label="Align center">
                <i className="fas fa-align-center" aria-hidden="true"></i>
              </Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant="link" aria-label="Align right">
                <i className="fas fa-align-right" aria-hidden="true"></i>
              </Button>
            </OverflowMenuItem>
          </OverflowMenuGroup>
        </OverflowMenuContent>
        <OverflowMenuControl>
          <Dropdown
            onSelect={this.onSelect}
            toggle={<KebabToggle onToggle={this.onToggle} />}
            isOpen={isOpen}
            isPlain
            dropdownItems={dropdownItems}
          />
        </OverflowMenuControl>
      </OverflowMenu>
    )
  }
}
```


## Overflow menu multiple groups - additional options
```js
import * as React from 'react';
import { OverflowMenu, OverflowMenuControl, OverflowMenuContent, OverflowMenuGroup, OverflowMenuItem, OverflowMenuDropdownItem } from '@patternfly/react-core/dist/esm/experimental';
import { Dropdown, KebabToggle, Button } from '@patternfly/react-core';

class OverflowMenuAdditionalOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <OverflowMenuDropdownItem shared>
        Primary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem shared>
        Secondary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem shared>
        Tertiary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem shared>
        Action 4
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem shared>
        Action 5
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem shared>
        Action 6
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem>
        Action 7
      </OverflowMenuDropdownItem>,
    ];
    return (
      <OverflowMenu breakpoint="Lg">
        <OverflowMenuContent>
          <OverflowMenuGroup groupType="button">
            <OverflowMenuItem>
              <Button variant="primary">
                Primary
              </Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant="secondary">
                Secondary
              </Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant="tertiary">
                Tertiary
              </Button>
            </OverflowMenuItem>
          </OverflowMenuGroup>
          <OverflowMenuGroup groupType="icon">
            <OverflowMenuItem>
              <Button variant="link" aria-label="Align left">
                <i className="fas fa-align-left" aria-hidden="true"></i>
              </Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant="link" aria-label="Align center">
                <i className="fas fa-align-center" aria-hidden="true"></i>
              </Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant="link" aria-label="Align right">
                <i className="fas fa-align-right" aria-hidden="true"></i>
              </Button>
            </OverflowMenuItem>
          </OverflowMenuGroup>
        </OverflowMenuContent>
        <OverflowMenuControl additionalOptions>
          <Dropdown
            onSelect={this.onSelect}
            toggle={<KebabToggle onToggle={this.onToggle} />}
            isOpen={isOpen}
            isPlain
            dropdownItems={dropdownItems}
          />
        </OverflowMenuControl>
      </OverflowMenu>
    )
  }
}
```


## Overflow menu persistent - additional options
```js
import * as React from 'react';
import { OverflowMenu, OverflowMenuControl, OverflowMenuContent, OverflowMenuGroup, OverflowMenuItem, OverflowMenuDropdownItem } from '@patternfly/react-core/dist/esm/experimental';
import { Dropdown, KebabToggle, Button } from '@patternfly/react-core';

class OverflowMenuAdditionalOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <OverflowMenuDropdownItem shared>
        Primary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem shared>
        Secondary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem shared>
        Tertiary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem>
        Action 4
      </OverflowMenuDropdownItem>
    ];
    return (
      <OverflowMenu breakpoint="Lg">
        <OverflowMenuContent>
          <OverflowMenuGroup groupType="button" persistent>
            <OverflowMenuItem persistent>
              <Button variant="primary">
                Primary
              </Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant="secondary">
                Secondary
              </Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant="tertiary">
                Tertiary
              </Button>
            </OverflowMenuItem>
          </OverflowMenuGroup>
        </OverflowMenuContent>
        <OverflowMenuControl additionalOptions>
          <Dropdown
            onSelect={this.onSelect}
            toggle={<KebabToggle onToggle={this.onToggle} />}
            isOpen={isOpen}
            isPlain
            dropdownItems={dropdownItems}
          />
        </OverflowMenuControl>
      </OverflowMenu>
    )
  }
}
```