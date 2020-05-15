import * as React from 'react';
import {
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuContent,
  OverflowMenuGroup,
  OverflowMenuItem,
  OverflowMenuDropdownItem,
  Dropdown,
  KebabToggle,
  Button
} from '@patternfly/react-core';
import AlignLeftIcon from '@patternfly/react-icons/dist/js/icons/align-left-icon';
import AlignCenterIcon from '@patternfly/react-icons/dist/js/icons/align-center-icon';
import AlignRightIcon from '@patternfly/react-icons/dist/js/icons/align-right-icon';
export class OverflowMenuDemo extends React.Component {
  state = {
    isSimpleOpen: false,
    isAdditionalOptionsOpen: false,
    isPersistOpen: false
  };

  style = {
    display: 'flex',
    marginBottom: '2rem'
  };

  onSimpleToggle = (isSimpleOpen: boolean) => {
    this.setState({
      isSimpleOpen
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSimpleSelect = (_event?: React.SyntheticEvent<HTMLDivElement>) => {
    this.setState({
      isSimpleOpen: !this.state.isSimpleOpen
    });
  };

  renderSimpleOverflowMenu() {
    const { isSimpleOpen } = this.state;
    const dropdownItems = [
      <OverflowMenuDropdownItem key="action">Action</OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="item1" isShared>
        Item 1
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="item2" isShared>
        Item 2
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="item3" isShared>
        Item 3
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="item4" isShared>
        Item 4
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="item5" isShared>
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
            toggle={<KebabToggle onToggle={this.onSimpleToggle} />}
            isOpen={isSimpleOpen}
            isPlain
            dropdownItems={dropdownItems}
          />
        </OverflowMenuControl>
      </OverflowMenu>
    );
  }

  onAdditionalOptionsToggle = (isAdditionalOptionsOpen: boolean) => {
    this.setState({
      isAdditionalOptionsOpen
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onAdditionalOptionsSelect = (_event?: React.SyntheticEvent<HTMLDivElement>) => {
    this.setState({
      isAdditionalOptionsOpen: !this.state.isAdditionalOptionsOpen
    });
  };

  renderOverflowMenuAdditionalOptions() {
    const { isAdditionalOptionsOpen } = this.state;
    const dropdownItems = [
      <OverflowMenuDropdownItem key="1" isShared>
        Primary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="2" isShared>
        Secondary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="3" isShared>
        Tertiary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="4" isShared>
        Action 4
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="5" isShared>
        Action 5
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="6" isShared>
        Action 6
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="7">Action 7</OverflowMenuDropdownItem>
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
            toggle={<KebabToggle onToggle={this.onAdditionalOptionsToggle} />}
            isOpen={isAdditionalOptionsOpen}
            isPlain
            dropdownItems={dropdownItems}
          />
        </OverflowMenuControl>
      </OverflowMenu>
    );
  }

  onPersistToggle = (isPersistOpen: boolean) => {
    this.setState({
      isPersistOpen
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onPersistSelect = (_event?: React.SyntheticEvent<HTMLDivElement>) => {
    this.setState({
      isPersistOpen: !this.state.isPersistOpen
    });
  };

  renderOverflowMenuPersist() {
    const { isPersistOpen } = this.state;
    const dropdownItems = [
      <OverflowMenuDropdownItem key="primary" isShared>
        Primary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="secondary" isShared>
        Secondary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="tertiary" isShared>
        Tertiary
      </OverflowMenuDropdownItem>,
      <OverflowMenuDropdownItem key="action">Action 4</OverflowMenuDropdownItem>
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
            toggle={<KebabToggle onToggle={this.onPersistToggle} />}
            isOpen={isPersistOpen}
            isPlain
            dropdownItems={dropdownItems}
          />
        </OverflowMenuControl>
      </OverflowMenu>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderSimpleOverflowMenu()}
        {this.renderOverflowMenuAdditionalOptions()}
        {this.renderOverflowMenuPersist()}
      </React.Fragment>
    );
  }
}
