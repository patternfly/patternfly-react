import * as React from 'react';
import {
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuContent,
  OverflowMenuContentGroup,
  OverflowMenuContentItem,
  OverflowMenuDropdownItem 
} from '@patternfly/react-core/dist/esm/experimental';
import {
  Dropdown,
  KebabToggle,
  Button
} from '@patternfly/react-core';

export class OverflowMenuDemo extends React.Component {
  state = {
    isOpen: false
  }
  
  onToggle = isOpen => {
    this.setState({
      isOpen
    });
  };
  
  onSelect = event => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  renderSimpleOverflowMenu() {
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

  renderOverflowMenuGroupTypes() {
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

  renderOverflowMenuAdditionalOptions() {
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

  renderOverflowMenuPersist() {
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

  render() {
    return (
      <React.Fragment>
        { this.renderSimpleOverflowMenu() }
        { this.renderOverflowMenuGroupTypes() }
        { this.renderOverflowMenuAdditionalOptions() }
        { this.renderOverflowMenuPersist() }
      </React.Fragment>
    )
  }
}
