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
          inset={{
            default: 'insetNone',
            md: 'insetNone',
            lg: 'insetNone',
            xl: 'insetNone',
            '2xl': 'insetNone'
          }}
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
          inset={{
            default: 'insetSm',
            md: 'insetSm',
            lg: 'insetSm',
            xl: 'insetSm',
            '2xl': 'insetSm'
          }}
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
          inset={{
            default: 'insetMd',
            md: 'insetMd',
            lg: 'insetMd',
            xl: 'insetMd',
            '2xl': 'insetMd'
          }}
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
          inset={{
            default: 'insetLg',
            md: 'insetLg',
            lg: 'insetLg',
            xl: 'insetLg',
            '2xl': 'insetLg'
          }}
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
          inset={{
            default: 'insetXl',
            md: 'insetXl',
            lg: 'insetXl',
            xl: 'insetXl',
            '2xl': 'insetXl'
          }}
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
          inset={{
            default: 'inset2xl',
            md: 'inset2xl',
            lg: 'inset2xl',
            xl: 'inset2xl',
            '2xl': 'inset2xl'
          }}
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
