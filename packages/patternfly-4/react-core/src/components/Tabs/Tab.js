import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /** content rendered inside the Tab content area. */
  children: PropTypes.node,
  /** additional classes added to the Modal */
  className: PropTypes.string,
  /** Tab title */
  title: PropTypes.string.isRequired,
  /** uniquely identifies the tab */
  eventKey: PropTypes.number.isRequired
};

const defaultProps = {
  children: null,
  className: ''
};

const Tab = ({ className, children, title, eventKey, ...props }) => <React.Fragment>{children}</React.Fragment>;

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
