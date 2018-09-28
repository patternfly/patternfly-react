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
    const { restrictTabs, wrapStyle } = this.props;
    const { activeTabId } = this.state;

    const topLevelIds = ['all', 'one', 'two', 'three', 'four', 'five', 'six', 'seven'];

    const renderTab = (id, title, children, props) => {
      const childIds = React.Children.map(children, child => child.props.id);

      return (
        <VerticalTabs.Tab
          id={id}
          key={id}
          title={title}
          wrapStyle={wrapStyle}
          onActivate={() => this.onActivateTab(id)}
          active={activeTabId === id}
          hasActiveDescendant={activeTabId.startsWith(id)}
          {...props}
        >
          {children && (
            <VerticalTabs restrictTabs={restrictTabs} activeTab={childIds.includes(activeTabId)}>
              {children}
            </VerticalTabs>
          )}
        </VerticalTabs.Tab>
      );
    };

    return (
      <VerticalTabs id="vertical-tabs" restrictTabs={restrictTabs} activeTab={topLevelIds.includes(activeTabId)}>
        {renderTab('all', 'All', null, { shown: true })}
        {renderTab('one', 'Tab One', [
          renderTab('one-one', 'Tab One-One', [
            renderTab('one-one-one', 'Tab One-One-One'),
            renderTab('one-one-two', 'Tab One-One-Two'),
            renderTab('one-one-three', 'Tab One-One-Three')
          ]),
          renderTab('one-two', 'Tab One-Two', [
            renderTab('one-two-one', 'Tab One-Two-One'),
            renderTab('one-two-two', 'Tab One-Two-Two'),
            renderTab('one-two-three', 'Tab One-Two-Three')
          ]),
          renderTab('one-three', 'Tab One-Thee')
        ])}
        {renderTab('two', 'Tab Two', [
          renderTab('two-one', 'Tab Two-One'),
          renderTab('two-two', 'Tab Two-Two'),
          renderTab('two-three', 'Tab Two-Three')
        ])}
        {renderTab('three', 'Tab Three - Donec id elit non mi porta gravida at eget metus')}
        {renderTab('four', 'Tab Four')}
        {renderTab('five', 'Tab Five')}
        {renderTab('six', 'Tab Six')}
        {renderTab('seven', 'Tab Seven')}
      </VerticalTabs>
    );
  }
}

MockVerticalTabsExample.propTypes = {
  restrictTabs: PropTypes.bool,
  wrapStyle: PropTypes.oneOf(['wrap', 'truncate', 'nowrap'])
};

MockVerticalTabsExample.defaultProps = {
  restrictTabs: false,
  wrapStyle: 'word'
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
    const { restrictTabs, wrapStyle } = this.props;
    const { activeTabId } = this.state;

    const topLevelIds = ['all', 'one', 'two', 'three', 'four', 'five', 'six', 'seven'];

    const renderTab = (id, title, children, props) => {
      const childIds = React.Children.map(children, child => child.props.id);

      return (
        <VerticalTabs.Tab
          id={id}
          key={id}
          title={title}
          wrapStyle={wrapStyle}
          onActivate={() => this.onActivateTab(id)}
          active={activeTabId === id}
          hasActiveDescendant={activeTabId.startsWith(id)}
          {...props}
        >
          {children && (
            <VerticalTabs restrictTabs={restrictTabs} activeTab={childIds.includes(activeTabId)}>
              {children}
            </VerticalTabs>
          )}
        </VerticalTabs.Tab>
      );
    };

    return (
      <VerticalTabs id="vertical-tabs" restrictTabs={restrictTabs} activeTab={topLevelIds.includes(activeTabId)}>
        {renderTab('all', 'All', null, { shown: true })}
        {renderTab('one', 'Tab One', [
          renderTab('one-one', 'Tab One-One', [
            renderTab('one-one-one', 'Tab One-One-One'),
            renderTab('one-one-two', 'Tab One-One-Two'),
            renderTab('one-one-three', 'Tab One-One-Three')
          ]),
          renderTab('one-two', 'Tab One-Two', [
            renderTab('one-two-one', 'Tab One-Two-One'),
            renderTab('one-two-two', 'Tab One-Two-Two'),
            renderTab('one-two-three', 'Tab One-Two-Three')
          ]),
          renderTab('one-three', 'Tab One-Thee')
        ])}
        {renderTab('two', 'Tab Two', [
          renderTab('two-one', 'Tab Two-One'),
          renderTab('two-two', 'Tab Two-Two'),
          renderTab('two-three', 'Tab Two-Three')
        ])}
        {renderTab('three', 'Tab Three - Donec id elit non mi porta gravida at eget metus')}
        {renderTab('four', 'Tab Four')}
        {renderTab('five', 'Tab Five')}
        {renderTab('six', 'Tab Six')}
        {renderTab('seven', 'Tab Seven')}
      </VerticalTabs>
    );
  }
}

MockVerticalTabsExample.propTypes = {
  restrictTabs: PropTypes.bool,
  wrapStyle: PropTypes.oneOf(['wrap', 'truncate', 'nowrap'])
};

MockVerticalTabsExample.defaultProps = {
  restrictTabs: false,
  wrapStyle: 'word'
};

export { MockVerticalTabsExample };
`;
