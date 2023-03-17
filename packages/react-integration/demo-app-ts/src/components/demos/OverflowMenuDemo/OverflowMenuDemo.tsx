import * as React from 'react';
import {
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuContent,
  OverflowMenuGroup,
  OverflowMenuItem,
  OverflowMenuDropdownItem,
  MenuToggle,
  Button
} from '@patternfly/react-core';
import { Dropdown, DropdownList } from '@patternfly/react-core/dist/esm/next/index';
import AlignLeftIcon from '@patternfly/react-icons/dist/esm/icons/align-left-icon';
import AlignCenterIcon from '@patternfly/react-icons/dist/esm/icons/align-center-icon';
import AlignRightIcon from '@patternfly/react-icons/dist/esm/icons/align-right-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export class OverflowMenuDemo extends React.Component {
  static displayName = 'OverflowMenuDemo';
  state = {
    isSimpleOpen: false,
    isAdditionalOptionsOpen: false,
    isPersistOpen: false,
    isContainerBreakpointOpen: false
  };

  breakpointContainerRef = React.createRef<HTMLDivElement>();

  style = {
    display: 'flex',
    marginBottom: '2rem'
  };

  onSimpleToggle = (_event: any) => {
    this.setState({
      isSimpleOpen: !this.state.isSimpleOpen
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSimpleSelect = () => {
    this.setState({
      isSimpleOpen: !this.state.isSimpleOpen
    });
  };

  renderSimpleOverflowMenu() {
    const { isSimpleOpen } = this.state;
    const dropdownItems = [
      <OverflowMenuDropdownItem itemId={0} key="action">
        Action
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={1} key="item1" isShared>
        Item 1
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={2} key="item2" isShared>
        Item 2
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={3} key="item3" isShared>
        Item 3
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={4} key="item4" isShared>
        Item 4
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={5} key="item5" isShared>
        Item 5
      </OverflowMenuDropdownItem>
    ];
    return (
      <OverflowMenu breakpoint="md" id="simple-overflow-menu" style={this.style}>
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
            onSelect={this.onSimpleSelect}
            toggle={toggleRef => (
              <MenuToggle
                ref={toggleRef}
                aria-label="Simple example overflow menu"
                variant="plain"
                onClick={this.onSimpleToggle}
                isExpanded={isSimpleOpen}
              >
                <EllipsisVIcon />
              </MenuToggle>
            )}
            isOpen={isSimpleOpen}
          >
            <DropdownList>{dropdownItems}</DropdownList>
          </Dropdown>
        </OverflowMenuControl>
      </OverflowMenu>
    );
  }

  onAdditionalOptionsToggle = (_event: any) => {
    this.setState({
      isAdditionalOptionsOpen: !this.state.isAdditionalOptionsOpen
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onAdditionalOptionsSelect = () => {
    this.setState({
      isAdditionalOptionsOpen: !this.state.isAdditionalOptionsOpen
    });
  };

  renderOverflowMenuAdditionalOptions() {
    const { isAdditionalOptionsOpen } = this.state;
    const dropdownItems = [
      <OverflowMenuDropdownItem itemId={1} key="1" isShared>
        Primary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={2} key="2" isShared>
        Secondary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={3} key="3" isShared>
        Tertiary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={4} key="4" isShared>
        Action 4
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={5} key="5" isShared>
        Action 5
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={6} key="6" isShared>
        Action 6
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={7} key="7">
        Action 7
      </OverflowMenuDropdownItem>
    ];
    return (
      <OverflowMenu breakpoint="lg" id="additional-options-overflow-menu" style={this.style}>
        <OverflowMenuContent>
          <OverflowMenuGroup groupType="button">
            <OverflowMenuItem>
              <Button variant="primary">Primary</Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant="secondary">Secondary</Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant="tertiary">Tertiary</Button>
            </OverflowMenuItem>
          </OverflowMenuGroup>
          <OverflowMenuGroup groupType="icon">
            <OverflowMenuItem>
              <Button variant="link" aria-label="Align left">
                <AlignLeftIcon />
              </Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant="link" aria-label="Align center">
                <AlignCenterIcon />
              </Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant="link" aria-label="Align right">
                <AlignRightIcon />
              </Button>
            </OverflowMenuItem>
          </OverflowMenuGroup>
        </OverflowMenuContent>
        <OverflowMenuControl hasAdditionalOptions>
          <Dropdown
            onSelect={this.onAdditionalOptionsSelect}
            toggle={toggleRef => (
              <MenuToggle
                ref={toggleRef}
                aria-label="Simple example overflow menu"
                variant="plain"
                onClick={this.onAdditionalOptionsToggle}
                isExpanded={isAdditionalOptionsOpen}
              >
                <EllipsisVIcon />
              </MenuToggle>
            )}
            isOpen={isAdditionalOptionsOpen}
          >
            <DropdownList>{dropdownItems}</DropdownList>
          </Dropdown>
        </OverflowMenuControl>
      </OverflowMenu>
    );
  }

  onPersistToggle = () => {
    this.setState({
      isPersistOpen: !this.state.isPersistOpen
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onPersistSelect = () => {
    this.setState({
      isPersistOpen: !this.state.isPersistOpen
    });
  };

  renderOverflowMenuPersist() {
    const { isPersistOpen } = this.state;
    const dropdownItems = [
      <OverflowMenuDropdownItem itemId={0} key="primary" isShared>
        Primary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={1} key="secondary" isShared>
        Secondary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={2} key="tertiary" isShared>
        Tertiary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={3} key="action">
        Action 4
      </OverflowMenuDropdownItem>
    ];
    return (
      <OverflowMenu breakpoint="xl" id="persist-overflow-menu" style={this.style}>
        <OverflowMenuContent isPersistent>
          <OverflowMenuGroup groupType="button" isPersistent>
            <OverflowMenuItem isPersistent>
              <Button variant="primary">Primary</Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant="secondary">Secondary</Button>
            </OverflowMenuItem>
            <OverflowMenuItem>
              <Button variant="tertiary">Tertiary</Button>
            </OverflowMenuItem>
          </OverflowMenuGroup>
        </OverflowMenuContent>
        <OverflowMenuControl hasAdditionalOptions>
          <Dropdown
            onSelect={this.onPersistSelect}
            toggle={toggleRef => (
              <MenuToggle
                ref={toggleRef}
                aria-label="Additional options overflow menu"
                variant="plain"
                onClick={this.onPersistToggle}
                isExpanded={isPersistOpen}
              >
                <EllipsisVIcon />
              </MenuToggle>
            )}
            isOpen={isPersistOpen}
          >
            <DropdownList>{dropdownItems}</DropdownList>
          </Dropdown>
        </OverflowMenuControl>
      </OverflowMenu>
    );
  }

  onContainerBreakpointToggle = () => {
    this.setState({
      isContainerBreakpointOpen: !this.state.isContainerBreakpointOpen
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onContainerBreakpointSelect = () => {
    this.setState({
      isContainerBreakpointOpen: !this.state.isContainerBreakpointOpen
    });
  };

  renderContainerBreakpointOverflowMenu() {
    const { isContainerBreakpointOpen } = this.state;
    const dropdownItems = [
      <OverflowMenuDropdownItem itemId={0} key="action">
        Action
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={1} key="item1" isShared>
        Item 1
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={2} key="item2" isShared>
        Item 2
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={3} key="item3" isShared>
        Item 3
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={4} key="item4" isShared>
        Item 4
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem itemId={5} key="item5" isShared>
        Item 5
      </OverflowMenuDropdownItem>
    ];
    return (
      <div id="container-breakpoint-container" ref={this.breakpointContainerRef} style={{ width: '600px' }}>
        <OverflowMenu
          breakpointReference={this.breakpointContainerRef}
          breakpoint="sm"
          id="container-breakpoint-overflow-menu"
          style={this.style}
        >
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
              onSelect={this.onContainerBreakpointSelect}
              toggle={toggleRef => (
                <MenuToggle
                  ref={toggleRef}
                  aria-label="Additional options overflow menu"
                  variant="plain"
                  onClick={this.onContainerBreakpointToggle}
                  isExpanded={isContainerBreakpointOpen}
                >
                  <EllipsisVIcon />
                </MenuToggle>
              )}
              isOpen={isContainerBreakpointOpen}
            >
              <DropdownList>{dropdownItems}</DropdownList>
            </Dropdown>
          </OverflowMenuControl>
        </OverflowMenu>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderSimpleOverflowMenu()}
        {this.renderOverflowMenuAdditionalOptions()}
        {this.renderOverflowMenuPersist()}
        {this.renderContainerBreakpointOverflowMenu()}
      </React.Fragment>
    );
  }
}
