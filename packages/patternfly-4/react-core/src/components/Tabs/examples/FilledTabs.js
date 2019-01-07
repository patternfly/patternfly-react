import React from 'react';
import { Tabs, Tab } from '@patternfly/react-core';

class FilledTabs extends React.Component {
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
      <Tabs isFilled activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
        <Tab eventKey={0} title="Tab item 1">
          Tab 1 section
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

export default FilledTabs;
