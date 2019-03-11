import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  firstIndex: PropTypes.number,
  lastIndex: PropTypes.number,
  itemCount: PropTypes.number,
  itemsTitle: PropTypes.string
};
const defaultProps = {
  firstIndex: 0,
  lastIndex: 0,
  itemCount: 0,
  itemsTitle: 'items'
};

const ToggleTamplate = ({ firstIndex, lastIndex, itemCount, itemsTitle }) => (
  <Fragment>
    <strong>{firstIndex} - {lastIndex}</strong> of <strong>{itemCount}</strong> {itemsTitle}
  </Fragment>
);

ToggleTamplate.propTypes = propTypes;
ToggleTamplate.defaultProps = defaultProps;

export default ToggleTamplate;
