import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
  /** child id for case in which a TabContent section is defined outside of a Tabs component */
  tabContentId: PropTypes.string,
  /** child reference for case in which a TabContent section is defined outside of a Tabs component */
  tabContentRef: PropTypes.object,
};

const defaultProps = {
  children: null,
  className: '',
  tabContentId: '',
  tabContentRef: null,
};

class Tab extends React.Component {
  render() {
    const { children, eventKey, tabContentId, tabContentRef, ...props } = this.props;
    return <button {...props}>{children}</button>;
  }
}

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
