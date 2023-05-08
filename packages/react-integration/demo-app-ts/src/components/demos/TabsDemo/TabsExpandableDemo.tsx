import { Tabs, Tab, TabTitleText } from '@patternfly/react-core';
import React, { Component } from 'react';

export class TabsExpandableDemo extends Component {
  state = {
    activeTabKeyControlled: 0,
    activeTabKeyUncontrolled: 0,
    activeTabKeyBreakpoint1: 0,
    activeTabKeyBreakpoint2: 0,
    activeTabKeyBreakpoint3: 0,
    isExpandedControlled: false,
    isExpandedBreakpoint1: false,
    isExpandedBreakpoint2: false,
    isExpandedBreakpoint3: false
  };

  // Toggle currently active tab
  private handleTabClickControlled = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number | string) => {
    this.setState({
      activeTabKey: tabIndex
    });
  };

  private handleTabClickUncontrolled = (
    _event: React.MouseEvent<HTMLElement, MouseEvent>,
    tabIndex: number | string
  ) => {
    this.setState({
      activeTabKeyUncontrolled: tabIndex
    });
  };

  private handleTabClickBreakpoint1 = (
    _event: React.MouseEvent<HTMLElement, MouseEvent>,
    tabIndex: number | string
  ) => {
    this.setState({
      activeTabKeyBreakpoint1: tabIndex
    });
  };

  private handleTabClickBreakpoint2 = (
    _event: React.MouseEvent<HTMLElement, MouseEvent>,
    tabIndex: number | string
  ) => {
    this.setState({
      activeTabKeyBreakpoint2: tabIndex
    });
  };

  private handleTabClickBreakpoint3 = (
    _event: React.MouseEvent<HTMLElement, MouseEvent>,
    tabIndex: number | string
  ) => {
    this.setState({
      activeTabKeyBreakpoint3: tabIndex
    });
  };

  // Toggle Expandable tabs
  private onToggleControlled = (_event: React.MouseEvent, isExpanded: boolean) => {
    this.setState({
      isExpandedControlled: isExpanded
    });
  };

  private onToggleBreakpoint1 = (_event: React.MouseEvent, isExpanded: boolean) => {
    this.setState({
      isExpandedBreakpoint1: isExpanded
    });
  };

  private onToggleBreakpoint2 = (_event: React.MouseEvent, isExpanded: boolean) => {
    this.setState({
      isExpandedBreakpoint2: isExpanded
    });
  };

  private onToggleBreakpoint3 = (_event: React.MouseEvent, isExpanded: boolean) => {
    this.setState({
      isExpandedBreakpoint3: isExpanded
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Tabs
            id="expandable-controlled"
            activeKey={this.state.activeTabKeyControlled}
            isVertical
            isExpanded={this.state.isExpandedControlled}
            toggleText="Tabs controlled"
            expandable={{
              default: 'expandable'
            }}
            onToggle={this.onToggleControlled}
            onSelect={this.handleTabClickControlled}
          >
            <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>
              Users
            </Tab>
            <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
              Containers
            </Tab>
            <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>
              Database
            </Tab>
          </Tabs>
        </div>
        <div>
          <Tabs
            id="expandable-uncontrolled"
            activeKey={this.state.activeTabKeyUncontrolled}
            isVertical
            toggleAriaLabel="Tabs uncontrolled"
            expandable={{
              default: 'expandable'
            }}
            defaultIsExpanded={false}
            onSelect={this.handleTabClickUncontrolled}
          >
            <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>
              Users
            </Tab>
            <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
              Containers
            </Tab>
            <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>
              Database
            </Tab>
          </Tabs>
        </div>
        <div>
          <Tabs
            id="expandable-breakpoints1"
            activeKey={this.state.activeTabKeyBreakpoint1}
            isVertical
            isExpanded={this.state.isExpandedBreakpoint1}
            toggleText="Tabs expand on breakpoints"
            expandable={{
              sm: 'expandable',
              md: 'expandable',
              lg: 'expandable',
              xl: 'expandable',
              '2xl': 'expandable'
            }}
            onToggle={this.onToggleBreakpoint1}
            onSelect={this.handleTabClickBreakpoint1}
          >
            <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>
              Users
            </Tab>
            <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
              Containers
            </Tab>
            <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>
              Database
            </Tab>
          </Tabs>
        </div>
        <div>
          <Tabs
            id="expandable-breakpoints2"
            activeKey={this.state.activeTabKeyBreakpoint2}
            isVertical
            toggleText="Tabs expand on breakpoints 2"
            isExpanded={this.state.isExpandedBreakpoint2}
            expandable={{
              default: 'expandable',
              sm: 'nonExpandable',
              md: 'nonExpandable',
              xl: 'nonExpandable',
              '2xl': 'nonExpandable'
            }}
            onToggle={this.onToggleBreakpoint2}
            onSelect={this.handleTabClickBreakpoint2}
          >
            <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>
              Users
            </Tab>
            <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
              Containers
            </Tab>
            <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>
              Database
            </Tab>
          </Tabs>
        </div>
        <div>
          <Tabs
            id="expandable-breakpoints3"
            activeKey={this.state.activeTabKeyBreakpoint2}
            isVertical
            isExpanded={this.state.isExpandedBreakpoint3}
            toggleText="Tabs expand on breakpoints 3"
            expandable={{
              default: 'nonExpandable',
              lg: 'nonExpandable',
              xl: 'expandable'
            }}
            onToggle={this.onToggleBreakpoint3}
            onSelect={this.handleTabClickBreakpoint3}
          >
            <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>
              Users
            </Tab>
            <Tab eventKey={1} title={<TabTitleText>Containers</TabTitleText>}>
              Containers
            </Tab>
            <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>}>
              Database
            </Tab>
          </Tabs>
        </div>
      </React.Fragment>
    );
  }
}
