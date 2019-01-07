import React from 'react';
import { Tabs, Tab } from '@patternfly/react-core';

class SecondaryTabs extends React.Component {
  state = {
    activeTabKey1: 0,
    activeTabKey2: 10
  };

  // Toggle currently active tab
  handleTabClickFirst = (event, tabIndex) => {
    this.setState({
      activeTabKey1: tabIndex
    });
  };

  // Toggle currently active secondary tab
  handleTabClickSecond = (event, tabIndex) => {
    this.setState({
      activeTabKey2: tabIndex
    });
  };

  render() {
    return (
      <Tabs activeKey={this.state.activeTabKey1} onSelect={this.handleTabClickFirst}>
        <Tab eventKey={0} title="Tab item 1">
          <Tabs activeKey={this.state.activeTabKey2} onSelect={this.handleTabClickSecond}>
            <Tab eventKey={10} title="Secondary Tab 1">
              Secondary Tab 1 section
            </Tab>
            <Tab eventKey={11} title="Secondary Tab 2">
              Secondary Tab 2 section
            </Tab>
            <Tab eventKey={12} title="Secondary Tab 3">
              Secondary Tab 3 section
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey={1} title="Tab item 2">
          Tab 2 section
        </Tab>
        <Tab eventKey={2} title="Tab item 3">
          Tab 3 section
        </Tab>
      </Tabs>
    );
  }
}

export default SecondaryTabs;
