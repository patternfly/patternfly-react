import React, { Component } from 'react';
import { VerticalTabs, VerticalTabsTab, VerticalTabsProps } from '@patternfly/react-catalog-view-extension';

interface VerticalTabsDemoState {
  activeTabId: string;
}

export class VerticalTabsDemo extends Component<VerticalTabsProps, VerticalTabsDemoState> {
  static displayName = 'verticalTabsDemo';

  render() {
    return (
      <VerticalTabs id="vertical-tabs-demo">
        <VerticalTabsTab id="about" title="About Modal" href="../components/about-modal" />
        <VerticalTabsTab id="accordion" title="Accordion" href="../components/accordion" />
        <VerticalTabsTab id="redhat" title="Redhat" href="http://www.redhat.com" />
      </VerticalTabs>
    );
  }
}
