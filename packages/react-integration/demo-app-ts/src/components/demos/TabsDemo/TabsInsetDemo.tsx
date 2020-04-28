import { Tabs, Tab, TabTitleText } from '@patternfly/react-core';
import React, { Component } from 'react';

export class TabsInsetDemo extends Component {
  state = {
    activeTabKey: 0,
    activeTabKey2: 0,
    activeTabKey3: 0,
    activeTabKey4: 0,
    activeTabKey5: 0,
    activeTabKey6: 0
  };

  // Toggle currently active tab
  private handleTabClick = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number | string) => {
    this.setState({
      activeTabKey: tabIndex
    });
  };

  // Toggle currently active tab
  private handleTabClick2 = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number | string) => {
    this.setState({
      activeTabKey2: tabIndex
    });
  };

  // Toggle currently active tab
  private handleTabClick3 = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number | string) => {
    this.setState({
      activeTabKey3: tabIndex
    });
  };

  // Toggle currently active tab
  private handleTabClick4 = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number | string) => {
    this.setState({
      activeTabKey4: tabIndex
    });
  };

  // Toggle currently active tab
  private handleTabClick5 = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number | string) => {
    this.setState({
      activeTabKey5: tabIndex
    });
  };

  // Toggle currently active tab
  private handleTabClick6 = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number | string) => {
    this.setState({
      activeTabKey6: tabIndex
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Tabs
          id="insetTabsNone"
          activeKey={this.state.activeTabKey}
          inset="none"
          insetOnMd="none"
          insetOnLg="none"
          insetOnXl="none"
          insetOn2Xl="none"
          onSelect={this.handleTabClick}
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
        <Tabs
          id="insetTabsSm"
          activeKey={this.state.activeTabKey2}
          inset="sm"
          insetOnMd="sm"
          insetOnLg="sm"
          insetOnXl="sm"
          insetOn2Xl="sm"
          onSelect={this.handleTabClick2}
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
        <Tabs
          id="insetTabsMd"
          activeKey={this.state.activeTabKey3}
          inset="md"
          insetOnMd="md"
          insetOnLg="md"
          insetOnXl="md"
          insetOn2Xl="md"
          onSelect={this.handleTabClick3}
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
        <Tabs
          id="insetTabsLg"
          activeKey={this.state.activeTabKey4}
          inset="lg"
          insetOnMd="lg"
          insetOnLg="lg"
          insetOnXl="lg"
          insetOn2Xl="lg"
          onSelect={this.handleTabClick4}
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
        <Tabs
          id="insetTabsXl"
          activeKey={this.state.activeTabKey5}
          inset="xl"
          insetOnMd="xl"
          insetOnLg="xl"
          insetOnXl="xl"
          insetOn2Xl="xl"
          onSelect={this.handleTabClick5}
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
        <Tabs
          id="insetTabs2Xl"
          activeKey={this.state.activeTabKey5}
          inset="2xl"
          insetOnMd="2xl"
          insetOnLg="2xl"
          insetOnXl="2xl"
          insetOn2Xl="2xl"
          onSelect={this.handleTabClick5}
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
      </React.Fragment>
    );
  }
}
