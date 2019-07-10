import { Tabs, Tab, TabContent } from '@patternfly/react-core';
import React, { Component } from 'react';

export class TabsStringEventKeyDemo extends Component {
  state = {
    activeTabKey: 'one'
  }

  private contentRefOne: any;
  private contentRefTwo: any;
  private contentRefThree: any;

  constructor(props) {
    super(props);

    this.contentRefOne = React.createRef<HTMLDivElement>();
    this.contentRefTwo = React.createRef<HTMLDivElement>();
    this.contentRefThree = React.createRef<HTMLDivElement>();
  }

  // Toggle currently active tab
  private handleTabClick = (event: any, tabIndex: string) => {
    this.setState({
      activeTabKey2: tabIndex
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
          <Tab id="demoTabOne" eventKey={'one'} title="Tab item 1" tabContentId="demoTab1Section" tabContentRef={this.contentRefOne} />
          <Tab id="demoTabTwo" eventKey={'two'} title="Tab item 2" tabContentId="demoTab2Section" tabContentRef={this.contentRefTwo} />
          <Tab id="demoTabThree" eventKey={'three'} title="Tab item 3" tabContentId="demoTab3Section" tabContentRef={this.contentRefThree} />
        </Tabs>
        <div>
          <TabContent eventKey={'one'} id="demoTab1Section" ref={this.contentRefOne} aria-label="Tab item 1">
            Tab 1 section
          </TabContent>
          <TabContent eventKey={'two'} id="demoTab2Section" ref={this.contentRefTwo} aria-label="Tab item 2" hidden>
            Tab 2 section
          </TabContent>
          <TabContent eventKey={'three'} id="demoTab3Section" ref={this.contentRefThree} aria-label="Tab item 3" hidden>
            Tab 3 section
          </TabContent>
        </div>
      </React.Fragment>
    );
  }
}
