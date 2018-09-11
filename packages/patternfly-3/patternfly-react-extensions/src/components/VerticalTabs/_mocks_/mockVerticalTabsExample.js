import React from 'react';
import PropTypes from 'prop-types';
import VerticalTabs from '../VerticalTabs';

class MockVerticalTabsExample extends React.Component {
  state = {
    activeTabId: 'all'
  };

  onActivateTab = id => {
    this.setState({ activeTabId: id });
  };

  render() {
    const { restrictTabs } = this.props;
    const { activeTabId } = this.state;

    const showAll = activeTabId === 'all';
    const isTopLevelActive =
      showAll ||
      activeTabId === 'one' ||
      activeTabId === 'two' ||
      activeTabId === 'three' ||
      activeTabId === 'four' ||
      activeTabId === 'five' ||
      activeTabId === 'six' ||
      activeTabId === 'seven';

    return (
      <VerticalTabs id="vertical-tabs" restrictTabs={restrictTabs} activeTab={isTopLevelActive}>
        <VerticalTabs.Tab id="all" title="All" onActivate={() => this.onActivateTab('all')} active={showAll} shown />
        <VerticalTabs.Tab
          id="one"
          title="Tab One"
          onActivate={() => this.onActivateTab('one')}
          active={activeTabId === 'one'}
          hasActiveDescendant={activeTabId.startsWith('one')}
        >
          <VerticalTabs
            restrictTabs={restrictTabs}
            activeTab={activeTabId === 'one-one' || activeTabId === 'one-two' || activeTabId === 'one-three'}
          >
            <VerticalTabs.Tab
              id="one-one"
              title="Tab One-One"
              onActivate={() => this.onActivateTab('one-one')}
              active={activeTabId === 'one-one'}
              hasActiveDescendant={activeTabId.startsWith('one-one')}
            >
              <VerticalTabs
                restrictTabs={restrictTabs}
                activeTab={
                  activeTabId === 'one-one-one' || activeTabId === 'one-one-two' || activeTabId === 'one-one-three'
                }
              >
                <VerticalTabs.Tab
                  id="one-one-one"
                  title="Tab One-One-One"
                  onActivate={() => this.onActivateTab('one-one-one')}
                  active={activeTabId === 'one-one-one'}
                />
                <VerticalTabs.Tab
                  id="one-one-two"
                  title="Tab One-One-Two"
                  onActivate={() => this.onActivateTab('one-one-two')}
                  active={activeTabId === 'one-one-two'}
                />
                <VerticalTabs.Tab
                  id="one-one-three"
                  title="Tab One-One-Three"
                  onActivate={() => this.onActivateTab('one-one-three')}
                  active={activeTabId === 'one-one-three'}
                />
              </VerticalTabs>
            </VerticalTabs.Tab>
            <VerticalTabs.Tab
              id="one-two"
              title="Tab One-Two"
              onActivate={() => this.onActivateTab('one-two')}
              active={activeTabId === 'one-two'}
              hasActiveDescendant={activeTabId.startsWith('one-two')}
            >
              <VerticalTabs
                restrictTabs={restrictTabs}
                activeTab={
                  activeTabId === 'one-two-one' || activeTabId === 'one-two-two' || activeTabId === 'one-two-three'
                }
              >
                <VerticalTabs.Tab
                  id="one-two-one"
                  title="Tab One-Two-One"
                  onActivate={() => this.onActivateTab('one-two-one')}
                  active={activeTabId === 'one-two-one'}
                />
                <VerticalTabs.Tab
                  id="one-two-two"
                  title="Tab One-Two-Two"
                  onActivate={() => this.onActivateTab('one-two-two')}
                  active={activeTabId === 'one-two-two'}
                />
                <VerticalTabs.Tab
                  id="one-two-three"
                  title="Tab One-Two-Three"
                  onActivate={() => this.onActivateTab('one-two-three')}
                  active={activeTabId === 'one-two-three'}
                />
              </VerticalTabs>
            </VerticalTabs.Tab>
            <VerticalTabs.Tab
              id="one-three"
              title="Tab One-Three"
              onActivate={() => this.onActivateTab('one-three')}
              active={activeTabId === 'one-three'}
              hasActiveDescendant={activeTabId.startsWith('one-three')}
            />
          </VerticalTabs>
        </VerticalTabs.Tab>
        <VerticalTabs.Tab
          id="two"
          title="Tab Two"
          onActivate={() => this.onActivateTab('two')}
          active={activeTabId === 'two'}
          hasActiveDescendant={activeTabId.startsWith('two')}
        >
          <VerticalTabs restrictTabs={restrictTabs} activeTab={activeTabId.startsWith('two')}>
            <VerticalTabs.Tab
              id="two-one"
              title="Tab Two-One"
              onActivate={() => this.onActivateTab('two-one')}
              active={activeTabId === 'two-one'}
            />
            <VerticalTabs.Tab
              id="two-two"
              title="Tab Two-Two"
              onActivate={() => this.onActivateTab('two-two')}
              active={activeTabId === 'two-two'}
            />
            <VerticalTabs.Tab
              id="two-three"
              title="Tab Two-Three"
              onActivate={() => this.onActivateTab('two-three')}
              active={activeTabId === 'two-three'}
            />
          </VerticalTabs>
        </VerticalTabs.Tab>
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

MockVerticalTabsExample.propTypes = {
  restrictTabs: PropTypes.bool
};

MockVerticalTabsExample.defaultProps = {
  restrictTabs: false
};

export { MockVerticalTabsExample };

export const MockVerticalTabsExampleSource = `
import React from 'react';
import PropTypes from 'prop-types';
import VerticalTabs from '../VerticalTabs';

class MockVerticalTabsExample extends React.Component {
  state = {
    activeTabId: 'all'
  };

  onActivateTab = id => {
    this.setState({ activeTabId: id });
  };

  render() {
    const { restrictTabs } = this.props;
    const { activeTabId } = this.state;

    const showAll = activeTabId === 'all';
    const isTopLevelActive =
      showAll ||
      activeTabId === 'one' ||
      activeTabId === 'two' ||
      activeTabId === 'three' ||
      activeTabId === 'four' ||
      activeTabId === 'five' ||
      activeTabId === 'six' ||
      activeTabId === 'seven';

    return (
      <VerticalTabs id="vertical-tabs" restrictTabs={restrictTabs} activeTab={isTopLevelActive}>
        <VerticalTabs.Tab id="all" title="All" onActivate={() => this.onActivateTab('all')} active={showAll} shown />
        <VerticalTabs.Tab
          id="one"
          title="Tab One"
          onActivate={() => this.onActivateTab('one')}
          active={activeTabId === 'one'}
          hasActiveDescendant={activeTabId.startsWith('one')}
        >
          <VerticalTabs
            restrictTabs={restrictTabs}
            activeTab={activeTabId === 'one-one' || activeTabId === 'one-two' || activeTabId === 'one-three'}
          >
            <VerticalTabs.Tab
              id="one-one"
              title="Tab One-One"
              onActivate={() => this.onActivateTab('one-one')}
              active={activeTabId === 'one-one'}
              hasActiveDescendant={activeTabId.startsWith('one-one')}
            >
              <VerticalTabs
                restrictTabs={restrictTabs}
                activeTab={
                  activeTabId === 'one-one-one' || activeTabId === 'one-one-two' || activeTabId === 'one-one-three'
                }
              >
                <VerticalTabs.Tab
                  id="one-one-one"
                  title="Tab One-One-One"
                  onActivate={() => this.onActivateTab('one-one-one')}
                  active={activeTabId === 'one-one-one'}
                />
                <VerticalTabs.Tab
                  id="one-one-two"
                  title="Tab One-One-Two"
                  onActivate={() => this.onActivateTab('one-one-two')}
                  active={activeTabId === 'one-one-two'}
                />
                <VerticalTabs.Tab
                  id="one-one-three"
                  title="Tab One-One-Three"
                  onActivate={() => this.onActivateTab('one-one-three')}
                  active={activeTabId === 'one-one-three'}
                />
              </VerticalTabs>
            </VerticalTabs.Tab>
            <VerticalTabs.Tab
              id="one-two"
              title="Tab One-Two"
              onActivate={() => this.onActivateTab('one-two')}
              active={activeTabId === 'one-two'}
              hasActiveDescendant={activeTabId.startsWith('one-two')}
            >
              <VerticalTabs
                restrictTabs={restrictTabs}
                activeTab={
                  activeTabId === 'one-two-one' || activeTabId === 'one-two-two' || activeTabId === 'one-two-three'
                }
              >
                <VerticalTabs.Tab
                  id="one-two-one"
                  title="Tab One-Two-One"
                  onActivate={() => this.onActivateTab('one-two-one')}
                  active={activeTabId === 'one-two-one'}
                />
                <VerticalTabs.Tab
                  id="one-two-two"
                  title="Tab One-Two-Two"
                  onActivate={() => this.onActivateTab('one-two-two')}
                  active={activeTabId === 'one-two-two'}
                />
                <VerticalTabs.Tab
                  id="one-two-three"
                  title="Tab One-Two-Three"
                  onActivate={() => this.onActivateTab('one-two-three')}
                  active={activeTabId === 'one-two-three'}
                />
              </VerticalTabs>
            </VerticalTabs.Tab>
            <VerticalTabs.Tab
              id="one-three"
              title="Tab One-Three"
              onActivate={() => this.onActivateTab('one-three')}
              active={activeTabId === 'one-three'}
              hasActiveDescendant={activeTabId.startsWith('one-three')}
            />
          </VerticalTabs>
        </VerticalTabs.Tab>
        <VerticalTabs.Tab
          id="two"
          title="Tab Two"
          onActivate={() => this.onActivateTab('two')}
          active={activeTabId === 'two'}
          hasActiveDescendant={activeTabId.startsWith('two')}
        >
          <VerticalTabs restrictTabs={restrictTabs} activeTab={activeTabId.startsWith('two')}>
            <VerticalTabs.Tab
              id="two-one"
              title="Tab Two-One"
              onActivate={() => this.onActivateTab('two-one')}
              active={activeTabId === 'two-one'}
            />
            <VerticalTabs.Tab
              id="two-two"
              title="Tab Two-Two"
              onActivate={() => this.onActivateTab('two-two')}
              active={activeTabId === 'two-two'}
            />
            <VerticalTabs.Tab
              id="two-three"
              title="Tab Two-Three"
              onActivate={() => this.onActivateTab('two-three')}
              active={activeTabId === 'two-three'}
            />
          </VerticalTabs>
        </VerticalTabs.Tab>
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

MockVerticalTabsExample.propTypes = {
  restrictTabs: PropTypes.bool
};

MockVerticalTabsExample.defaultProps = {
  restrictTabs: false
};

export { MockVerticalTabsExample };
`;
