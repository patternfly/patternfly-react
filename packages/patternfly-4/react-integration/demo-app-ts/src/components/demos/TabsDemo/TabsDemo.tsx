import { Tabs, Tab, TabContent } from '@patternfly/react-core';
import React, { Component } from 'react';

export class TabDemo extends Component {
  state = {
    activeTabKey: 0
  }
  private contentRef1: any;
  private contentRef2: any;
  private contentRef3: any;

  constructor(props) {
    super(props);

    this.contentRef1 = React.createRef<HTMLDivElement>();
    this.contentRef2 = React.createRef<HTMLDivElement>();
    this.contentRef3 = React.createRef<HTMLDivElement>();
  }

  // Toggle currently active tab
  private handleTabClick = (event: any, tabIndex: number) => {
    this.setState({
      activeTabKey: tabIndex
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
          <Tab id="demoTab1" eventKey={0} title="Tab item 1" tabContentId="demoTab1Section" tabContentRef={this.contentRef1} />
          <Tab id="demoTab2" eventKey={1} title="Tab item 2" tabContentId="demoTab2Section" tabContentRef={this.contentRef2} />
          <Tab id="demoTab3" eventKey={2} title="Tab item 3" tabContentId="demoTab3Section" tabContentRef={this.contentRef3} />
        </Tabs>
        <div>
          <TabContent eventKey={0} id="demoTab1Section" ref={this.contentRef1} aria-label="Tab item 1">
            Tab 1 section
          </TabContent>
          <TabContent eventKey={1} id="demoTab2Section" ref={this.contentRef2} aria-label="Tab item 2" hidden>
            Tab 2 section
          </TabContent>
          <TabContent eventKey={2} id="demoTab3Section" ref={this.contentRef3} aria-label="Tab item 3" hidden>
            Tab 3 section
          </TabContent>
        </div>
      </React.Fragment>
    );
  }
}
