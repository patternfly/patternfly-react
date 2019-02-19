import React from 'react';
import { Tabs, Tab, TabContent } from '@patternfly/react-core';

class TabContentWithIds extends React.Component {
  state = {
    activeKey: 0,
  };

  // Toggle currently active tab
  handleTabClick = (event, tabIndex) => {
    this.setState({
      activeTabKey: tabIndex
    });
  };

  render() {
    return <React.Fragment>
      <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
        <Tab eventKey={0} title="Tab item 1" tabContentId="tab1Section"></Tab>
        <Tab eventKey={1} title="Tab item 2" tabContentId="tab2Section"></Tab>
        <Tab eventKey={2} title="Tab item 3" tabContentId="tab3Section"></Tab>
      </Tabs>
      <div>
        <TabContent eventKey={0} id="tab1Section">Tab 1 section</TabContent>
        <TabContent eventKey={1} id="tab2Section" hidden>Tab 2 section</TabContent>
        <TabContent eventKey={2} id="tab3Section" hidden>Tab 3 section</TabContent>
      </div>
    </React.Fragment>;
  }
}

export default TabContentWithIds;
