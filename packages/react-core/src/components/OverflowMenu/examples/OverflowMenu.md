---
id: Overflow menu
section: components
cssPrefix: pf-c-overflow-menu
propComponents:
  [
    'OverflowMenu',
    'OverflowMenuContent',
    'OverflowMenuControl',
    'OverflowMenuDropdownItem',
    'OverflowMenuGroup',
    'OverflowMenuItem'
  ]
---

import AlignLeftIcon from '@patternfly/react-icons/dist/esm/icons/align-left-icon';
import AlignCenterIcon from '@patternfly/react-icons/dist/esm/icons/align-center-icon';
import AlignRightIcon from '@patternfly/react-icons/dist/esm/icons/align-right-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { Dropdown as DropdownNext, DropdownList } from '@patternfly/react-core/next';

## Examples

### Simple (responsive)

```js
import React from 'react';
import {
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuContent,
  OverflowMenuGroup,
  OverflowMenuItem,
  OverflowMenuDropdownItem,
  MenuToggle
} from '@patternfly/react-core';
import { Dropdown as DropdownNext, DropdownList } from '@patternfly/react-core/next';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

class SimpleOverflowMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
    this.onSelect = (event) => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <OverflowMenuDropdownItem itemId={0} key="item1" isShared>
        Item 1
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={1} key="item2" isShared>
        Item 2
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={2} key="item3" isShared>
        Item 3
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={3} key="item4" isShared>
        Item 4
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={5} key="item5" isShared>
        Item 5
      </OverflowMenuDropdownItem>
    ];
    return (
      <OverflowMenu breakpoint="lg">
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
          <DropdownNext
            onSelect={this.onSelect}
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                aria-label="Simple example overflow menu"
                variant="plain"
                onClick={this.onToggle}
                isExpanded={isOpen}
              >
                <EllipsisVIcon />
              </MenuToggle>
            )}
            isOpen={isOpen}
            onOpenChange={(isOpen) =>
              this.setState({
                isOpen
              })
            }
          >
            <DropdownList>{dropdownItems}</DropdownList>
          </DropdownNext>
        </OverflowMenuControl>
      </OverflowMenu>
    );
  }
}
```

### Group types

```js
import React from 'react';
import {
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuContent,
  OverflowMenuGroup,
  OverflowMenuItem,
  OverflowMenuDropdownItem,
  MenuToggle,
  Button,
  ButtonVariant
} from '@patternfly/react-core';
import { Dropdown as DropdownNext, DropdownList } from '@patternfly/react-core/next';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import AlignLeftIcon from '@patternfly/react-icons/dist/esm/icons/align-left-icon';
import AlignCenterIcon from '@patternfly/react-icons/dist/esm/icons/align-center-icon';
import AlignRightIcon from '@patternfly/react-icons/dist/esm/icons/align-right-icon';

class OverflowMenuGroupTypes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
    this.onSelect = (event) => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <OverflowMenuDropdownItem itemId={0} key="item1" isShared>
        Item 1
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={1} key="item2" isShared>
        Item 2
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={2} key="item3" isShared>
        Item 3
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={3} key="primary" isShared>
        Primary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={4} key="secondary" isShared>
        Secondary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={5} key="tertiary" isShared>
        Tertiary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={6} key="action1" isShared>
        Action 1
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={7} key="action2" isShared>
        Action 2
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={8} key="action3" isShared>
        Action 3
      </OverflowMenuDropdownItem>
    ];
    return (
      <OverflowMenu breakpoint="lg">
        <OverflowMenuContent>
          <OverflowMenuGroup>
            <OverflowMenuItem>Item</OverflowMenuItem>
            <OverflowMenuItem>Item</OverflowMenuItem>
            <OverflowMenuItem>Item</OverflowMenuItem>
          </OverflowMenuGroup>
          <OverflowMenuGroup groupType="button">
            <OverflowMenuItem>
              <Button variant={ButtonVariant.primary}>Primary</Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant={ButtonVariant.secondary}>Secondary</Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant={ButtonVariant.tertiary}>Tertiary</Button>
            </OverflowMenuItem>
          </OverflowMenuGroup>
          <OverflowMenuGroup groupType="icon">
            <OverflowMenuItem>
              <Button variant={ButtonVariant.plain} aria-label="Align left">
                <AlignLeftIcon />
              </Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant={ButtonVariant.plain} aria-label="Align center">
                <AlignCenterIcon />
              </Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant={ButtonVariant.plain} aria-label="Align right">
                <AlignRightIcon />
              </Button>
            </OverflowMenuItem>
          </OverflowMenuGroup>
        </OverflowMenuContent>
        <OverflowMenuControl>
          <DropdownNext
            onSelect={this.onSelect}
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                aria-label="Group example overflow menu"
                variant="plain"
                onClick={this.onToggle}
                isExpanded={isOpen}
              >
                <EllipsisVIcon />
              </MenuToggle>
            )}
            isOpen={isOpen}
            onOpenChange={(isOpen) =>
              this.setState({
                isOpen
              })
            }
          >
            <DropdownList>{dropdownItems}</DropdownList>
          </DropdownNext>
        </OverflowMenuControl>
      </OverflowMenu>
    );
  }
}
```

### Multiple groups

```js
import React from 'react';
import {
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuContent,
  OverflowMenuGroup,
  OverflowMenuItem,
  OverflowMenuDropdownItem,
  MenuToggle,
  Button,
  ButtonVariant
} from '@patternfly/react-core';
import { Dropdown as DropdownNext, DropdownList } from '@patternfly/react-core/next';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import AlignLeftIcon from '@patternfly/react-icons/dist/esm/icons/align-left-icon';
import AlignCenterIcon from '@patternfly/react-icons/dist/esm/icons/align-center-icon';
import AlignRightIcon from '@patternfly/react-icons/dist/esm/icons/align-right-icon';

class OverflowMenuAdditionalOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
    this.onSelect = (event) => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <OverflowMenuDropdownItem itemId={0} key="1" isShared>
        Primary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={1} key="2" isShared>
        Secondary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={2} key="3" isShared>
        Tertiary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={3} key="4" isShared>
        Action 4
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={4} key="5" isShared>
        Action 5
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={5} key="6" isShared>
        Action 6
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={6} key="7">
        Action 7
      </OverflowMenuDropdownItem>
    ];
    return (
      <OverflowMenu breakpoint="lg">
        <OverflowMenuContent>
          <OverflowMenuGroup groupType="button">
            <OverflowMenuItem>
              <Button variant={ButtonVariant.primary}>Primary</Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant={ButtonVariant.secondary}>Secondary</Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant={ButtonVariant.tertiary}>Tertiary</Button>
            </OverflowMenuItem>
          </OverflowMenuGroup>
          <OverflowMenuGroup groupType="icon">
            <OverflowMenuItem>
              <Button variant={ButtonVariant.plain} aria-label="Align left">
                <AlignLeftIcon />
              </Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant={ButtonVariant.plain} aria-label="Align center">
                <AlignCenterIcon />
              </Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant={ButtonVariant.plain} aria-label="Align right">
                <AlignRightIcon />
              </Button>
            </OverflowMenuItem>
          </OverflowMenuGroup>
        </OverflowMenuContent>
        <OverflowMenuControl hasAdditionalOptions>
          <DropdownNext
            onSelect={this.onSelect}
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                aria-label="Multiple group example overflow menu"
                variant="plain"
                onClick={this.onToggle}
                isExpanded={isOpen}
              >
                <EllipsisVIcon />
              </MenuToggle>
            )}
            isOpen={isOpen}
            onOpenChange={(isOpen) =>
              this.setState({
                isOpen
              })
            }
          >
            <DropdownList>{dropdownItems}</DropdownList>
          </DropdownNext>
        </OverflowMenuControl>
      </OverflowMenu>
    );
  }
}
```

### Persistent

```js
import React from 'react';
import {
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuContent,
  OverflowMenuGroup,
  OverflowMenuItem,
  OverflowMenuDropdownItem,
  MenuToggle,
  Button,
  ButtonVariant
} from '@patternfly/react-core';
import { Dropdown as DropdownNext, DropdownList } from '@patternfly/react-core/next';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

class OverflowMenuPersist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
    this.onSelect = (event, itemId) => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <OverflowMenuDropdownItem itemId={0} key="secondary" isShared>
        Secondary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={1} key="tertiary" isShared>
        Tertiary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={2} key="action">
        Action 4
      </OverflowMenuDropdownItem>
    ];
    return (
      <OverflowMenu breakpoint="lg">
        <OverflowMenuContent isPersistent>
          <OverflowMenuGroup groupType="button" isPersistent>
            <OverflowMenuItem isPersistent>
              <Button variant={ButtonVariant.primary}>Primary</Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant={ButtonVariant.secondary}>Secondary</Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant={ButtonVariant.tertiary}>Tertiary</Button>
            </OverflowMenuItem>
          </OverflowMenuGroup>
        </OverflowMenuContent>
        <OverflowMenuControl hasAdditionalOptions>
          <DropdownNext
            onSelect={this.onSelect}
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                aria-label="Persistent example overflow menu"
                variant="plain"
                onClick={this.onToggle}
                isExpanded={isOpen}
              >
                <EllipsisVIcon />
              </MenuToggle>
            )}
            isOpen={isOpen}
            onOpenChange={(isOpen) =>
              this.setState({
                isOpen
              })
            }
          >
            <DropdownList>{dropdownItems}</DropdownList>
          </DropdownNext>
        </OverflowMenuControl>
      </OverflowMenu>
    );
  }
}
```

### Breakpoint on container

By passing in the `breakpointReference` property, the overflow menu's breakpoint will be relative to the width of the reference container rather than the viewport width.

You can change the container width in this example by adjusting the slider. As the container width changes, the overflow menu will change between a horizontal menu and a vertical dropdown despite the viewport width not changing.

```ts file="./OverflowMenuBreakpointOnContainer.tsx"

```
