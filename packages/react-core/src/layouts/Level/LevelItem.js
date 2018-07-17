import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node
};
const defaultProps = {
  children: null
};

const LevelItem = ({ children, ...props }) => <div {...props}>{children}</div>;

LevelItem.propTypes = propTypes;
LevelItem.defaultProps = defaultProps;
export default LevelItem;
