import React from 'react';
import VerticalTabs from '../VerticalTabs';

class MockVerticalTabsExample extends React.Component {
  state = {
    activeTabId: 'one'
  };

  onActivateTab = id => {
    this.setState({ activeTabId: id });
  };

  render() {
    const { activeTabId } = this.state;

    return (
      <VerticalTabs id="vertical-tabs">
        <VerticalTabs.Tab
          id="one"
          title="Tab One"
          onActivate={() => this.onActivateTab('one')}
          active={activeTabId === 'one'}
        />
        <VerticalTabs.Tab
          id="two"
          title="Tab Two"
          onActivate={() => this.onActivateTab('two')}
          active={activeTabId === 'two'}
        />
        <VerticalTabs.Tab
          id="three"
          title="Tab Three"
          onActivate={() => this.onActivateTab('three')}
          active={activeTabId === 'three'}
        />
        <VerticalTabs.Tab
          id="four"
          title="Tab Four"
          onActivate={() => this.onActivateTab('four')}
          active={activeTabId === 'four'}
        />
        <VerticalTabs.Tab
          id="five"
          title="Tab Five"
          onActivate={() => this.onActivateTab('five')}
          active={activeTabId === 'five'}
        />
        <VerticalTabs.Tab
          id="six"
          title="Tab Six"
          onActivate={() => this.onActivateTab('six')}
          active={activeTabId === 'six'}
        />
        <VerticalTabs.Tab
          id="seven"
          title="Tab Seven"
          onActivate={() => this.onActivateTab('seven')}
          active={activeTabId === 'seven'}
        />
      </VerticalTabs>
    );
  }
}
export { MockVerticalTabsExample };

export const MockVerticalTabsExampleSource = `
import React from 'react';
import VerticalTabs from '../VerticalTabs';

class MockVerticalTabsExample extends React.Component {
  state = {
    activeTabId: 'one'
  };

  onActivateTab = id => {
    this.setState({ activeTabId: id });
  };

  render() {
    const { activeTabId } = this.state;

    return (
      <VerticalTabs id="vertical-tabs">
        <VerticalTabs.Tab
          id="one"
          title="Tab One"
          onActivate={() => this.onActivateTab('one')}
          active={activeTabId === 'one'}
        />
        <VerticalTabs.Tab
          id="two"
          title="Tab Two"
          onActivate={() => this.onActivateTab('two')}
          active={activeTabId === 'two'}
        />
        <VerticalTabs.Tab
          id="three"
          title="Tab Three"
          onActivate={() => this.onActivateTab('three')}
          active={activeTabId === 'three'}
        />
        <VerticalTabs.Tab
          id="four"
          title="Tab Four"
          onActivate={() => this.onActivateTab('four')}
          active={activeTabId === 'four'}
        />
        <VerticalTabs.Tab
          id="five"
          title="Tab Five"
          onActivate={() => this.onActivateTab('five')}
          active={activeTabId === 'five'}
        />
        <VerticalTabs.Tab
          id="six"
          title="Tab Six"
          onActivate={() => this.onActivateTab('six')}
          active={activeTabId === 'six'}
        />
        <VerticalTabs.Tab
          id="seven"
          title="Tab Seven"
          onActivate={() => this.onActivateTab('seven')}
          active={activeTabId === 'seven'}
        />
      </VerticalTabs>
    );
  }
}
export { MockVerticalTabsExample };
`;
