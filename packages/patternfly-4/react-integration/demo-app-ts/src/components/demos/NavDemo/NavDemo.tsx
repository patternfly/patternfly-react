import React, { Component } from 'react';

import {
  Nav,
  NavExpandable,
  NavList,
  NavItem,
  NavVariants,
  NavItemSeparator,
  Stack,
  StackItem,
  Title
} from '@patternfly/react-core';

export class NavDemo extends Component {
  state = {
    simpleActiveItem: 0,
    defaultActiveItem: 0,
    expandableActiveGroup: 'grp-1',
    expandableActiveItem: 'itm-1-1',
    horizontalActiveItem: 0,
    expandableClickedGroup: '',
    expandableClickedItem: ''
  };

  onSimpleSelect = result => {
    this.setState({ simpleActiveItem: result.itemId });
  };

  renderSimpleNav() {
    const { simpleActiveItem } = this.state;
    return (
      <StackItem isFilled>
        <Title size="2xl">Simple Nav</Title>
        <div className="example" style={{ border: '1px solid rgb(114, 118, 123)', backgroundColor: '#fff' }}>
          <Nav onSelect={this.onSimpleSelect} id="nav-primary-simple">
            <NavList id="nav-list-simple" variant={NavVariants.simple}>
              <NavItem id="simple-link1" preventDefault to="#simple-link1" itemId={0} isActive={simpleActiveItem === 0}>
                Link 1
              </NavItem>
              <NavItem id="simple-link2" preventDefault to="#simple-link2" itemId={1} isActive={simpleActiveItem === 1}>
                Link 2
              </NavItem>
              <NavItem id="simple-link3" preventDefault to="#simple-link3" itemId={2} isActive={simpleActiveItem === 2}>
                Link 3
              </NavItem>
              <NavItemSeparator />
              <NavItem id="simple-link4" preventDefault to="#simple-link4" itemId={3} isActive={simpleActiveItem === 3}>
                Link 4
              </NavItem>
            </NavList>
          </Nav>
        </div>
      </StackItem>
    );
  }

  onDefaultSelect = result => {
    this.setState({defaultActiveItem: result.itemId});
  };

  handleNoNavigateLink = (
    e: React.FormEvent<HTMLInputElement>,
    itemId: number | string,
    groupId: number | string,
    to: string
  ):void =>  {
    console.log(`No Navigate Link clicked: ${itemId}`);
  };

  renderDefaultNav() {
    const { defaultActiveItem } = this.state;
    return (
      <StackItem isFilled>
        <Title size="2xl">Default Nav</Title>
        <div className="example" style={{ border: '1px solid rgb(114, 118, 123)', backgroundColor: '#fff' }}>
          <Nav onSelect={this.onDefaultSelect} id="nav-primary-default">
            <NavList>
              <NavItem id="default-link1" to="#default-link1" itemId={0} isActive={defaultActiveItem === 0}>
                Link 1
              </NavItem>
              <NavItem id="default-link2" to="#default-link2" itemId={1} isActive={defaultActiveItem === 1}>
                Link 2
              </NavItem>
              <NavItem id="default-link3" to="#default-link3" itemId={2} isActive={defaultActiveItem === 2}>
                Link 3
              </NavItem>
              <NavItem id="default-link4" to="#default-link4" itemId={3} isActive={defaultActiveItem === 3}>
                Link 4
              </NavItem>
              <NavItemSeparator />
              <NavItem
                id="default-no-navigate-link"
                preventDefault
                to="#default-no-navigate-link"
                itemId={4}
                isActive={defaultActiveItem === 4}
                onClick={this.handleNoNavigateLink as (
                  e: React.FormEvent<HTMLInputElement>,
                  itemId: number | string,
                  groupId: number | string,
                  to: string
                ) => void}
              >
                No Navigate Link
              </NavItem>
            </NavList>
          </Nav>
        </div>
      </StackItem>
    )
  }

  onExpandableSelect = result => {
    this.setState({
      expandableActiveGroup: result.groupId,
      expandableActiveItem: result.itemId
    });
  };

  handleItemOnclick = (
    e: React.FormEvent<HTMLInputElement>,
    itemId: number | string,
    groupId: number | string
  ):void => {
    this.setState({
      expandableClickedGroup: groupId,
      expandableClickedItem: itemId,
    });
  };

  renderExpandableNav() {
    const { expandableActiveGroup, expandableActiveItem, expandableClickedGroup, expandableClickedItem } = this.state;
    return (
      <StackItem isFilled>
        <Title size="2xl">Expandable Nav</Title>
        <div className="example" style={{ border: '1px solid rgb(114, 118, 123)', backgroundColor: '#fff' }}>
          <Nav onSelect={this.onExpandableSelect} id="nav-primary-expandable">
            <NavList>
              <NavExpandable id="grp-1" title="Group 1" groupId="grp-1" isActive={expandableActiveGroup === 'grp-1'} isExpanded>
                <NavItem
                  id="itm-1-1"
                  preventDefault
                  to="#expandable-1"
                  groupId="grp-1"
                  itemId="itm-1-1"
                  isActive={expandableActiveGroup === 'grp-1' && expandableActiveItem === 'itm-1-1'}
                  onClick={this.handleItemOnclick}
                >
                  Item 1
                </NavItem>
                <NavItemSeparator />
                <NavItem
                  id="itm-1-2"
                  preventDefault
                  groupId="grp-1"
                  itemId="itm-1-2"
                  isActive={expandableActiveGroup === 'grp-1' && expandableActiveItem === 'itm-1-2'}
                  onClick={this.handleItemOnclick}
                >
                  Item 2
                </NavItem>
                <NavItem
                  id="itm-1-3"
                  to="#expandable-3"
                  groupId="grp-1"
                  itemId="itm-1-3"
                  isActive={expandableActiveGroup === 'grp-1' && expandableActiveItem === 'itm-1-3'}
                  onClick={this.handleItemOnclick}
                >
                  Item 3
                </NavItem>
              </NavExpandable>
              <NavExpandable id="grp-2" title="Group 2" groupId="grp-2" isActive={expandableActiveGroup === 'grp-2'} isExpanded>
                <NavItem
                  id="itm-2-1"
                  preventDefault
                  groupId="grp-2"
                  itemId="itm-2-1"
                  isActive={expandableActiveGroup === 'grp-2' && expandableActiveItem === 'itm-2-1'}
                  onClick={this.handleItemOnclick}
                >
                  Item 1
                </NavItem>
                <NavItem
                  id="itm-2-2"
                  preventDefault
                  to="#expandable-4"
                  groupId="grp-2"
                  itemId="itm-2-2"
                  isActive={expandableActiveGroup === 'grp-2' && expandableActiveItem === 'itm-2-2'}
                  onClick={this.handleItemOnclick}
                >
                  Item 2
                </NavItem>
                <NavItem
                  id="itm-2-3"
                  preventDefault
                  to="#expandable-5"
                  groupId="grp-2"
                  itemId="itm-2-3"
                  isActive={expandableActiveGroup === 'grp-2' && expandableActiveItem === 'itm-2-3'}
                  onClick={this.handleItemOnclick}
                >
                  Item 3
                </NavItem>
                <NavItem
                  id="itm-2-4"
                  preventDefault
                  to="#expandable-6"
                  groupId="grp-2"
                  itemId="itm-2-4"
                  isActive={expandableActiveGroup === 'grp-2' && expandableActiveItem === 'itm-2-4'}
                  onClick={this.handleItemOnclick}
                >
                  Item 4
                </NavItem>
              </NavExpandable>
            </NavList>
          </Nav>
        </div>
        {expandableClickedGroup && (
          <div>
            <span>Last Clicked: </span>
            <span id="expand-click-group"> {expandableClickedGroup}</span>
            <span id="expand-click-item"> {expandableClickedItem}</span>
          </div>
        )}
      </StackItem>
    );
  }

  onHorizontalSelect = result => {
    this.setState({ horizontalActiveItem: result.itemId });
  };

  renderHorizontalNav() {
    const { horizontalActiveItem } = this.state;

    return (
      <StackItem isFilled>
        <Title size="2xl">Horizontal Nav</Title>
        <div style={{ backgroundColor: '#292e34', padding: '1rem' }}>
          <Nav onSelect={this.onHorizontalSelect} id="nav-primary-horizontal">
            <NavList variant={NavVariants.horizontal}>
              <NavItem
                id="horizontal-link1"
                preventDefault
                itemId={0}
                isActive={horizontalActiveItem === 0}
              >
                Item 1
              </NavItem>
              <NavItem
                id="horizontal-link2"
                preventDefault
                itemId={1}
                isActive={horizontalActiveItem === 1}
              >
                Item 2
              </NavItem>
              <NavItem
                id="horizontal-link3"
                preventDefault
                itemId={2}
                isActive={horizontalActiveItem === 2}
              >
                Item 3
              </NavItem>
            </NavList>
          </Nav>
        </div>
      </StackItem>
    )
  }

  render() {
    // Nav onToggle and onSelect should be optional
    // https://github.com/patternfly/patternfly-react/issues/1234
    return (
      <Stack gutter="md">
        {this.renderSimpleNav()}
        {this.renderDefaultNav()}
        {this.renderExpandableNav()}
        {this.renderHorizontalNav()}
      </Stack>
    );
  }
}
