import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /** content rendered inside the Level Layout Item */
  children: PropTypes.node,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
const defaultProps = {
  children: null
};

const LevelItem = ({ children, ...props }) => <div {...props}>{children}</div>;

LevelItem.propTypes = propTypes;
LevelItem.defaultProps = defaultProps;
export default LevelItem;
