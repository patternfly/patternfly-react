import * as React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /** content rendered inside the Tab content area. */
  children: PropTypes.node,
  /** additional classes added to the Modal */
  className: PropTypes.string,
  /** Tab title */
  title: PropTypes.string.isRequired,
  /** uniquely identifies the tab */
  eventKey: PropTypes.number.isRequired,
  /** child reference for case in which a TabContent section is defined outside of a Tabs component */
  tabContentRef: PropTypes.object,
};

const defaultProps = {
  children: null,
  className: '',
  tabContentRef: null,
};

const withForwardedRef = Component => {
  class TabContainer extends React.Component {
    render() {
      const { tabContentRef, ...rest } = this.props;
      return <Component ref={tabContentRef} {...rest} />;
    }
  }
  return React.forwardRef((props, tabContentRef) => {
    return <TabContainer {...props} forwardRef={tabContentRef} />;
  });
}

class Tab extends React.Component {
  render() {
    // destructuring to prevent console warnings for applying eventKey and forwardRef to a DOM element
    const { children, eventKey, tabContentRef, forwardRef, ...props } = this.props;
    return <button {...props} ref={tabContentRef}>{children}</button>;
  }
}

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default withForwardedRef(Tab);
