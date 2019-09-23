---
title: 'OverflowMenu'
cssPrefix: 'pf-c-overflow-menu'
typescript: true
propComponents: ['OverflowMenu', 'OverflowMenuContent', 'OverflowMenuControl', 'OverflowMenuDropdownItem', 'OverflowMenuContentGroup', 'OverflowMenuContentItem']
section: 'experimental'
stage: 'early'
---

import { OverflowMenu, OverflowMenuControl, OverflowMenuContent, OverflowMenuContentGroup, OverflowMenuContentItem, OverflowMenuDropdownItem } from '@patternfly/react-core/dist/esm/experimental';
import { Dropdown, KebabToggle, Button } from '@patternfly/react-core';

## Overflow menu simple (responsive)
```js
import * as React from 'react';
import { OverflowMenu, OverflowMenuControl, OverflowMenuContent, OverflowMenuContentGroup, OverflowMenuContentItem, OverflowMenuDropdownItem } from '@patternfly/react-core/dist/esm/experimental';
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
      <OverflowMenuDropdownItem key="action">Action</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="item1" isShared>Item 1</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="item2" isShared>Item 2</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="item3" isShared>Item 3</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="item4" isShared>Item 4</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="item5" isShared>Item 5</OverflowMenuDropdownItem>
    ]
    return (
      <OverflowMenu breakpoint="lg">
        <OverflowMenuContent>
          <OverflowMenuContentItem>Item</OverflowMenuContentItem>
          <OverflowMenuContentItem>Item</OverflowMenuContentItem>
          <OverflowMenuContentGroup>
            <OverflowMenuContentItem>Item</OverflowMenuContentItem>
            <OverflowMenuContentItem>Item</OverflowMenuContentItem>
            <OverflowMenuContentItem>Item</OverflowMenuContentItem>
          </OverflowMenuContentGroup>
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
import { OverflowMenu, OverflowMenuControl, OverflowMenuContent, OverflowMenuContentGroup, OverflowMenuContentItem, OverflowMenuDropdownItem } from '@patternfly/react-core/dist/esm/experimental';
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
      <OverflowMenuDropdownItem key="action" isShared>Action</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="item1" isShared>Item 1</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="item2" isShared>Item 2</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="item3" isShared>Item 3</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="item4" isShared>Item 4</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="item5" isShared>Item 5</OverflowMenuDropdownItem>,
    ];
    return (
      <OverflowMenu breakpoint="lg">
        <OverflowMenuContent>
          <OverflowMenuContentGroup> 
            <OverflowMenuContentItem>Item</OverflowMenuContentItem>
            <OverflowMenuContentItem>Item</OverflowMenuContentItem>
            <OverflowMenuContentItem>Item</OverflowMenuContentItem>
          </OverflowMenuContentGroup>
          <OverflowMenuContentGroup groupType="button">
            <OverflowMenuContentItem>
              <Button variant="primary">Primary</Button>
            </OverflowMenuContentItem>
            <OverflowMenuContentItem>
              <Button variant="secondary">Secondary</Button>
            </OverflowMenuContentItem>
            <OverflowMenuContentItem>
              <Button variant="tertiary">Tertiary</Button>
            </OverflowMenuContentItem>
          </OverflowMenuContentGroup>
          <OverflowMenuContentGroup groupType="icon">
            <OverflowMenuContentItem>
              <Button variant="link" aria-label="Align left">
                <i className="fas fa-align-left" aria-hidden="true"></i>
              </Button>
            </OverflowMenuContentItem>
            <OverflowMenuContentItem>
              <Button variant="link" aria-label="Align center">
                <i className="fas fa-align-center" aria-hidden="true"></i>
              </Button>
            </OverflowMenuContentItem>
            <OverflowMenuContentItem>
              <Button variant="link" aria-label="Align right">
                <i className="fas fa-align-right" aria-hidden="true"></i>
              </Button>
            </OverflowMenuContentItem>
          </OverflowMenuContentGroup>
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
import { OverflowMenu, OverflowMenuControl, OverflowMenuContent, OverflowMenuContentGroup, OverflowMenuContentItem, OverflowMenuDropdownItem } from '@patternfly/react-core/dist/esm/experimental';
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
      <OverflowMenuDropdownItem key="1" isShared>Primary</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="2" isShared>Secondary</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="3" isShared>Tertiary</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="4" isShared>Action 4</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="5" isShared>Action 5</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="6" isShared>Action 6</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="7">Action 7</OverflowMenuDropdownItem>,
    ];
    return (
      <OverflowMenu breakpoint="lg">
        <OverflowMenuContent>
          <OverflowMenuContentGroup groupType="button">
            <OverflowMenuContentItem>
              <Button variant="primary">Primary</Button>
            </OverflowMenuContentItem>
            <OverflowMenuContentItem>
              <Button variant="secondary">Secondary</Button>
            </OverflowMenuContentItem>
            <OverflowMenuContentItem>
              <Button variant="tertiary">Tertiary</Button>
            </OverflowMenuContentItem>
          </OverflowMenuContentGroup>
          <OverflowMenuContentGroup groupType="icon">
            <OverflowMenuContentItem>
              <Button variant="link" aria-label="Align left">
                <i className="fas fa-align-left" aria-hidden="true"></i>
              </Button>
            </OverflowMenuContentItem>
            <OverflowMenuContentItem>
              <Button variant="link" aria-label="Align center">
                <i className="fas fa-align-center" aria-hidden="true"></i>
              </Button>
            </OverflowMenuContentItem>
            <OverflowMenuContentItem>
              <Button variant="link" aria-label="Align right">
                <i className="fas fa-align-right" aria-hidden="true"></i>
              </Button>
            </OverflowMenuContentItem>
          </OverflowMenuContentGroup>
        </OverflowMenuContent>
        <OverflowMenuControl alwaysPersist>
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
import { OverflowMenu, OverflowMenuControl, OverflowMenuContent, OverflowMenuContentGroup, OverflowMenuContentItem, OverflowMenuDropdownItem } from '@patternfly/react-core/dist/esm/experimental';
import { Dropdown, KebabToggle, Button } from '@patternfly/react-core';

class OverflowMenuPersist extends React.Component {
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
      <OverflowMenuDropdownItem key="primary" isShared>Primary</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="secondary" isShared>Secondary</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="tertiary" isShared>Tertiary</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="action">Action 4</OverflowMenuDropdownItem>
    ];
    return (
      <OverflowMenu breakpoint="lg">
        <OverflowMenuContent>
          <OverflowMenuContentGroup groupType="button" isPersistent>
            <OverflowMenuContentItem isPersistent>
              <Button variant="primary">Primary</Button>
            </OverflowMenuContentItem>
            <OverflowMenuContentItem>
              <Button variant="secondary">Secondary</Button>
            </OverflowMenuContentItem>
            <OverflowMenuContentItem>
              <Button variant="tertiary">Tertiary</Button>
            </OverflowMenuContentItem>
          </OverflowMenuContentGroup>
        </OverflowMenuContent>
        <OverflowMenuControl alwaysPersist>
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
