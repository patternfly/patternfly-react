import React from 'react';
import PropTypes from 'prop-types';
import DualListCounter from './DualListCounter';
import { getCounterMessage as counterMessage, getItemsLength } from '../helpers';

const DualListFooter = ({ items, selectCount, getCounterMessage }) => (
  <div className="dual-list-pf-footer">
    <DualListCounter selected={selectCount} total={getItemsLength(items)} getCounterMessage={getCounterMessage} />
  </div>
);

DualListFooter.propTypes = {
  /** Items array to get the length from. */
  items: PropTypes.array,
  /** Amount of selected items in the selector. */
  selectCount: PropTypes.number,
  /** Determines the counter message in the selector's footer,
   * receives the selected and total amounts of items.
   */
  getCounterMessage: PropTypes.func
};

DualListFooter.defaultProps = {
  items: [],
  selectCount: 0,
  getCounterMessage: counterMessage
};

export default DualListFooter;
