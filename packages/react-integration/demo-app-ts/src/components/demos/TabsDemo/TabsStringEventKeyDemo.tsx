import { Tabs, Tab, TabContent, TabTitleText } from '@patternfly/react-core';
import { Component, createRef, RefObject } from 'react';

export class TabsStringEventKeyDemo extends Component {
  state = {
    activeTabKey: 'one'
  };

  private contentRefOne: RefObject<HTMLDivElement | null>;
  private contentRefTwo: RefObject<HTMLDivElement | null>;
  private contentRefThree: RefObject<HTMLDivElement | null>;

  constructor(props: {}) {
    super(props);

    this.contentRefOne = createRef<HTMLDivElement>();
    this.contentRefTwo = createRef<HTMLDivElement>();
    this.contentRefThree = createRef<HTMLDivElement>();
  }

  // Toggle currently active tab
  private handleTabClick = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number | string) => {
    this.setState({
      activeTabKey2: tabIndex
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
          <Tab
            id="demoTabOne"
            eventKey={'one'}
            title={<TabTitleText>Tab item 1</TabTitleText>}
            tabContentId="demoTab1Section"
            tabContentRef={this.contentRefOne}
          />
          <Tab
            id="demoTabTwo"
            eventKey={'two'}
            title={<TabTitleText>Tab item 2</TabTitleText>}
            tabContentId="demoTab2Section"
            tabContentRef={this.contentRefTwo}
          />
          <Tab
            id="demoTabThree"
            eventKey={'three'}
            title={<TabTitleText>Tab item 3</TabTitleText>}
            tabContentId="demoTab3Section"
            tabContentRef={this.contentRefThree}
          />
        </Tabs>
        <div>
          <TabContent
            eventKey={'one'}
            id="demoTab1Section"
            ref={this.contentRefOne as RefObject<HTMLDivElement>}
            aria-label="Tab item 1"
          >
            Tab 1 section
          </TabContent>
          <TabContent
            eventKey={'two'}
            id="demoTab2Section"
            ref={this.contentRefTwo as RefObject<HTMLDivElement>}
            aria-label="Tab item 2"
            hidden
          >
            Tab 2 section
          </TabContent>
          <TabContent
            eventKey={'three'}
            id="demoTab3Section"
            ref={this.contentRefThree as RefObject<HTMLDivElement>}
            aria-label="Tab item 3"
            hidden
          >
            Tab 3 section
          </TabContent>
        </div>
      </>
    );
  }
}
