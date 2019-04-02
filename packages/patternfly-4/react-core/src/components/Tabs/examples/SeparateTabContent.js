import React from 'react';
import { Tabs, Tab, TabContent } from '@patternfly/react-core';

class SeparateTabContent extends React.Component {
  state = {
    activeKey: 0,
  };

  contentRef1 = React.createRef();
  contentRef2 = React.createRef();
  contentRef3 = React.createRef();

  // Toggle currently active tab
  handleTabClick = (event, tabIndex) => {
    this.setState({
      activeTabKey: tabIndex
    });
  };

  render() {
    return <React.Fragment>
      <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
        <Tab eventKey={0} title="Tab item 1" tabContentId="refTab1Section" tabContentRef={this.contentRef1}></Tab>
        <Tab eventKey={1} title="Tab item 2" tabContentId="refTab2Section" tabContentRef={this.contentRef2}></Tab>
        <Tab eventKey={2} title="Tab item 3" tabContentId="refTab3Section" tabContentRef={this.contentRef3}></Tab>
      </Tabs>
      <div>
        <TabContent eventKey={0} id="refTab1Section" ref={this.contentRef1} aria-label="Tab item 1">Tab 1 section</TabContent>
        <TabContent eventKey={1} id="refTab2Section" ref={this.contentRef2} aria-label="Tab item 2" hidden>Tab 2 section</TabContent>
        <TabContent eventKey={2} id="refTab3Section" ref={this.contentRef3} aria-label="Tab item 3" hidden>Tab 3 section</TabContent>
      </div>
    </React.Fragment>;
  }
}

export default SeparateTabContent;
