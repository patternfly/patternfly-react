import React from 'react';
import PropTypes from 'prop-types';

/**
 * PatternflyTreeView Component for PatternFly React
 */
const PatternflyTreeView = ({ children, ...props }) => <div {...props}>{children}</div>;

PatternflyTreeView.propTypes = {
  children: PropTypes.node
};

PatternflyTreeView.defaultProps = {
  children: null
};

export default PatternflyTreeView;
