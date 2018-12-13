import React from 'react';
import PropTypes from 'prop-types';
import DualListItems from './DualListItems';
import { NO_ITEMS_FOUND, NO_ITEMS } from '../constants';
import { getFilterredItemsLength } from '../helpers';
import { noop } from '../../../common/helpers';

const DualListBody = ({ items, filterTerm, onItemChange, side, noItemsFoundMessage, noItemsMessage }) => {
  let listItems;
  if (items.length > 0) {
    listItems = <DualListItems items={items} filterTerm={filterTerm} onChange={onItemChange} side={side} />;
    if (getFilterredItemsLength(items) === 0) {
      listItems = <div className="dual-list-pf-no-items">{noItemsFoundMessage}</div>;
    }
  } else {
    listItems = <div className="dual-list-pf-no-items">{noItemsMessage}</div>;
  }
  return <div className="dual-list-pf-body">{listItems}</div>;
};

DualListBody.propTypes = {
  /** An array of items to create list items elements uppon */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  ),
  /** The term which is flitering the list. */
  filterTerm: PropTypes.string,
  /** A function that is running when the item selected state is toggled. */
  onItemChange: PropTypes.func,
  /** The side of the selector. */
  side: PropTypes.string,
  /** Sets the body's message when no items were found while filtering */
  noItemsFoundMessage: PropTypes.string,
  /** Sets the body's message when there are no items at all */
  noItemsMessage: PropTypes.string
};

DualListBody.defaultProps = {
  items: [],
  filterTerm: null,
  onItemChange: noop,
  side: null,
  noItemsFoundMessage: NO_ITEMS_FOUND,
  noItemsMessage: NO_ITEMS
};

export default DualListBody;
