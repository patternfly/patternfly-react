import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../..';
import { noop } from '../../../common/helpers';
import { SORT_ARIA_LABEL } from '../constants';

const DualListSort = ({ onClick, side, isSortAsc, ariaLabel }) => (
  <Icon
    aria-label={ariaLabel}
    className="dual-list-pf-sort-icon"
    type="pf"
    name={`sort-common-${isSortAsc ? 'asc' : 'desc'}`}
    data-side={side}
    tabIndex="0"
    onClick={onClick}
    onKeyPress={onClick}
  />
);

DualListSort.propTypes = {
  /** The function which is running when sort icon is clicked. */
  onClick: PropTypes.func,
  /** Which side is the selector, passed by the onClick function. */
  side: PropTypes.string,
  /** Which type of sort is it to determine the right icon. */
  isSortAsc: PropTypes.bool,
  /** Sets the aria-label of the icon. */
  ariaLabel: PropTypes.string
};

DualListSort.defaultProps = {
  onClick: noop,
  side: null,
  isSortAsc: true,
  ariaLabel: SORT_ARIA_LABEL
};

export default DualListSort;
