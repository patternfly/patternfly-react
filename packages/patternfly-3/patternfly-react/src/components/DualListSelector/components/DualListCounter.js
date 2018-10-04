import React from 'react';
import PropTypes from 'prop-types';
import { getCounterMessage as counterMessage } from '../helpers';

const DualListCounter = ({ selected, total, getCounterMessage }) => (
  <strong>{getCounterMessage(selected, total)}</strong>
);

DualListCounter.propTypes = {
  /** The Amount of selected items in the selector */
  selected: PropTypes.number,
  /** The Amount of total items in the selectror */
  total: PropTypes.number,
  /** Determines the counter message in the selector's footer,
   * receives the selected and total amounts of items.
   */
  getCounterMessage: PropTypes.func
};

DualListCounter.defaultProps = {
  selected: 0,
  total: 0,
  getCounterMessage: counterMessage
};

export default DualListCounter;
