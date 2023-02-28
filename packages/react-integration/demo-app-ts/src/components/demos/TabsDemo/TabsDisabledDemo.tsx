import React from 'react';
import { Tabs, Tab, TabTitleText, Tooltip } from '@patternfly/react-core';

export class TabsDisabledDemo extends React.Component {
  static displayName = 'TabsDisabledDemo';
  state = {
    activeTabKey: 0,
    isBox: false
  };

  constructor(props: {}) {
    super(props);
  }

  private handleTabClick = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number | string) => {
    this.setState({
      activeTabKey: tabIndex
    });
  };

  render() {
    const { activeTabKey } = this.state;
    const tooltipRef = React.createRef();

    return (
      <>
        <Tabs id="disabledTabs" activeKey={activeTabKey} onSelect={this.handleTabClick}>
          <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>} id="not-disabled">
            <div id="not-disabled-content">Users</div>
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Disabled</TabTitleText>} isDisabled id="is-disabled">
            <div id="is-disabled-content">Disabled</div>
          </Tab>
          <Tab eventKey={2} title={<TabTitleText>ARIA Disabled</TabTitleText>} isAriaDisabled id="is-aria-disabled">
            <div id="is-aira-disabled-content">ARIA Disabled</div>
          </Tab>
          <Tab
            eventKey={3}
            title={<TabTitleText>ARIA Disabled (Tooltip)</TabTitleText>}
            isAriaDisabled
            ref={tooltipRef}
            id="with-tooltip"
          >
            <div id="with-tooltip-content">ARIA Disabled (Tooltip)</div>
          </Tab>
        </Tabs>
        <Tooltip
          content={
            <div id="tooltip-content">
              Aria-disabled tabs are like disabled tabs, but focusable. Allows for tooltip support."
            </div>
          }
          triggerRef={tooltipRef}
        />
      </>
    );
  }
}
