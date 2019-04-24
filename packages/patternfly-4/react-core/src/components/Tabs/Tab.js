import * as React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /** content rendered inside the Tab content area. */
  children: PropTypes.node,
  /** additional classes added to the Tab */
  className: PropTypes.string,
  /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs variant="nav"> should have an href. */
  href: PropTypes.string,
  /** Tab title */
  title: PropTypes.string.isRequired,
  /** uniquely identifies the tab */
  eventKey: PropTypes.number.isRequired,
  /** child id for case in which a TabContent section is defined outside of a Tabs component */
  tabContentId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  /** child reference for case in which a TabContent section is defined outside of a Tabs component */
  tabContentRef: PropTypes.node,
};

const defaultProps = {
  children: null,
  className: '',
  href: null,
  tabContentId: null,
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
    // destructuring to prevent console warnings for applying eventKey, forwardRef, and tabContentId to a DOM element and remove title from the DOM element
    const { children, eventKey, tabContentId, tabContentRef, forwardRef, title, ...props } = this.props;
    const Component = props.href ? 'a' : 'button';
    return <Component {...props} ref={tabContentRef}>{children}</Component>;
  }
}

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default withForwardedRef(Tab);
