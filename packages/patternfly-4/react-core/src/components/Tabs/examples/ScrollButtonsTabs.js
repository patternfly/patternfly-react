import React from 'react';
import { Tabs, Tab } from '@patternfly/react-core';

class ScrollButtonsTabs extends React.Component {
  state = {
    activeTabKey: 0
  };

  // Toggle currently active tab
  handleTabClick = (event, tabIndex) => {
    this.setState({
      activeTabKey: tabIndex
    });
  };

  render() {
    return (
      <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
        <Tab eventKey={0} title="Tab item 1">
          Tab 1 section
        </Tab>
        <Tab eventKey={1} title="Tab item 2">
          Tab 2 section
        </Tab>
        <Tab eventKey={2} title="Tab item 3">
          Tab 3 section
        </Tab>
        <Tab eventKey={3} title="Tab item 4">
          Tab 4 section
        </Tab>
        <Tab eventKey={4} title="Tab item 5">
          Tab 5 section
        </Tab>
        <Tab eventKey={5} title="Tab item 6">
          Tab 6 section
        </Tab>
        <Tab eventKey={6} title="Tab item 7">
          Tab 7 section
        </Tab>
        <Tab eventKey={7} title="Tab item 8">
          Tab 8 section
        </Tab>
        <Tab eventKey={8} title="Tab item 9">
          Tab 9 section
        </Tab>
        <Tab eventKey={9} title="Tab item 10">
          Tab 10 section
        </Tab>
        <Tab eventKey={10} title="Tab item 11">
          Tab 11 section
        </Tab>
        <Tab eventKey={11} title="Tab item 12">
          Tab 12 section
        </Tab>
      </Tabs>
    );
  }
}

export default ScrollButtonsTabs;
