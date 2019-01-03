import React from 'react';
import PropTypes from 'prop-types';
import UUID from 'uuid/v1';
import { DropdownKebab } from '../../../index';
import DualListFilter from './DualListFilter';
import DualListSort from './DualListSort';
import DualListMainCheckbox from './DualListMainCheckbox';
import { noop } from '../../../common/helpers';
import { SORT_ARIA_LABEL } from '../constants';

const DualListHeading = ({
  isSortAsc,
  onSortClick,
  onFilterChange,
  onMainCheckboxChange,
  kebabMenu,
  side,
  sortAriaLabel,
  isMainChecked,
  kebabID
}) => (
  <div className="dual-list-pf-heading">
    <DualListMainCheckbox side={side} onChange={onMainCheckboxChange} isChecked={isMainChecked} />
    <DualListFilter side={side} onChange={onFilterChange} />
    <DualListSort side={side} onClick={onSortClick} isSortAsc={isSortAsc} ariaLabel={sortAriaLabel} />
    <DropdownKebab id={kebabID} pullRight>
      {kebabMenu}
    </DropdownKebab>
  </div>
);

DualListHeading.propTypes = {
  /** Which type of sort is it to determine the right icon. */
  isSortAsc: PropTypes.bool,
  /** The function which is running when sort icon is clicked. */
  onSortClick: PropTypes.func,
  /** The filter function that runs on the list items when the input changes. */
  onFilterChange: PropTypes.func,
  /** The function which is being called on checked state toggled. */
  onMainCheckboxChange: PropTypes.func,
  /** The Kebab menu items */
  kebabMenu: PropTypes.node,
  /** Which side is the selector, passed by the onClick function. */
  side: PropTypes.string,
  /** Sets the aria-label of the icon. */
  sortAriaLabel: PropTypes.string,
  /** controlls the main checkbox */
  isMainChecked: PropTypes.bool,
  /** ID for the kebab container */
  kebabID: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DualListHeading.defaultProps = {
  isSortAsc: true,
  onSortClick: noop,
  onFilterChange: noop,
  onMainCheckboxChange: noop,
  kebabMenu: null,
  side: null,
  sortAriaLabel: SORT_ARIA_LABEL,
  isMainChecked: false,
  kebabID: `dual-list-pf-kebab-${UUID()}`
};

export default DualListHeading;
