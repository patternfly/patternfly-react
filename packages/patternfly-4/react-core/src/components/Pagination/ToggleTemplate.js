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

const ToggleTemplate = ({ firstIndex, lastIndex, itemCount, itemsTitle }) => (
  <Fragment>
    <strong>{firstIndex} - {lastIndex}</strong> of <strong>{itemCount}</strong> {itemsTitle}
  </Fragment>
);

ToggleTemplate.propTypes = propTypes;
ToggleTemplate.defaultProps = defaultProps;

export default ToggleTemplate;
